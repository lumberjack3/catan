
module.exports = AbstractMoveCommand

var AbstractGameCommand = require('./AbstractGameCommand')
  , util = require('util')

util.inherits(AbstractMoveCommand, AbstractGameCommand)

function AbstractMoveCommand(gameid,$Logger) {
  AbstractGameCommand.call(this, gameid,$Logger);
}

AbstractMoveCommand.prototype.replayOnGame = function (game, users) {
  this.executeOnGame(game, users);
}

AbstractMoveCommand.prototype.toJSON = function () {
  var json = {
    type: this.name || this.constructor.name,
    data: {}
  }
  for (var name in this) {
    if (this.hasOwnProperty(name)) {
      json.data[name] = this[name]
    }
  }
  return json
}

AbstractMoveCommand.prototype.fromJSON = function (data) {
  for (var name in data) {
    this[name] = data[name]
  }
}

AbstractMoveCommand.fromJSON = function (json) {
  var commands = require('./moveCommands')
  var inst = Object.create(commands[json.type].prototype)
  inst.fromJSON(json.data)
  return inst
}

