'use strict';

var HttpError = require('../../common/Errors').HttpError
  , debug = require('debug')('catan:ctrl:base')
  , AbstractGameCommand = require('../model/commands/AbstractGameCommand');

module.exports = BaseCtrl;
module.exports.HttpError = HttpError;

function BaseCtrl(app, inj) {
  this.injector = inj;
  try {
    this.logger = inj.create('Logger');
  } catch (e){
    this.logger = console;
  }
  this.assignRoutes(app, this.dynamicCall.bind(this));
}

BaseCtrl.prototype.assignRoutes = function(app, handler) {}

BaseCtrl.prototype.dynamicCall = function(func){
  var op = this.injector.inject(func);
  // Wrap the operation in error catching
  return function handler(request, response) {
    debug('handling', request.url, request.cookies)
    try {
      op(request, response);
    } catch (e) {
      console.error('SERVER ERROR:', e.message);
      console.error('STACK TRACE:', e.stack);
      // throw e;
      var code = (e instanceof HttpError) ? e.code : 500;
      var message = e.message;
      if (request.xhr) {
        message = {
          msg: message,
          trace: e.stack
        };
        response.json(code, message);
      } else {
        response.send(code, message);
      }
    }
  };
}

function issubclass(A, B) {
  while (A.super_) {
    if (B === A.super_) return true;
    A = A.super_
  }
  return false;
}

// Constructs a command from the argument body
BaseCtrl.prototype.getCommand = function (Cmd, req) {
  var args = []
  var data = req.body
  if (issubclass(Cmd, AbstractGameCommand)) {
    args.push(req.gameID);
  }
  var got = getArgs(Cmd, data);
  if (got instanceof Error) {
    return got
  }
  args = args.concat(got);
  return applyToConstructor(Cmd, args)
}

function getArgs(cmd, data) {
  var args = []
  if (!data || !cmd.params) return args
  for (var key in data) {
    if (cmd.params.indexOf(key) === -1 && cmd.optional.indexOf(key) === -1) {
      return new Error('Unexpected parameter: ' + key);
    }
  }
  var val;
  for (var i=0; i<cmd.params.length; i++) {
    val = data[cmd.params[i]]
    if (val === undefined) {
      return new Error('Expected parameter: ' + cmd.params[i]);
    }
    args.push(val)
  }
  if (!cmd.optional) return args;
  for (var i=0; i<cmd.optional.length; i++) {
    args.push(data[cmd.params[i]])
  }
  return args
}

function applyToConstructor(constructor, argArray) {
  var args = [null].concat(argArray);
  var FactoryFunction = constructor.bind.apply(constructor, args);
  var cmd = new FactoryFunction();
  if(constructor.logMessage){
    cmd.logMessage = constructor.logMessage;
  }
  return cmd;
}

BaseCtrl.prototype.commandRoute = function (cmdName, req, res) {
  debug('Command route', cmdName);
  // req.params
  var Cmd = this.injector.resolve(cmdName);
  if (!Cmd) {
    return res.send(500, 'Unknown command: ' + cmdName);
  }
  var command = this.getCommand(Cmd, req);
  if (command instanceof Error) {
    return res.send(500, 'Error: ' + command.message);
  }
  debug('executing')
  req.gameRoom.executeCommand(command, function (err, response) {
    if (err) {
      return res.send(500, 'Error: ' + err.message + '\n' + err.stack)
    }
    res.json(response);
  })
}

