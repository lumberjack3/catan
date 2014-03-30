/**
 * Module dependencies.
 */
var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    authMiddleware = require('./middleware/auth'),
    gameMiddleware = require('./middleware/game'),
    Injector = require('../common/Injector')
    ;

module.exports = function (setup) {
  setup = setup || require('./config');
  var inj = new Injector();
  setup(inj);

  var app = express();
  var documentRoot = path.join(__dirname,'..','..','build');

  // all environments
  app.set('port', process.env.PORT || 8081);
  app.set('views', path.join(__dirname, 'views'));
  app.use(express.favicon());
  // app.use(express.logger('dev'));
  app.use(express.cookieParser());
  app.use(authMiddleware);
  app.use(gameMiddleware);
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(express.methodOverride());
  app.use(bodyParser());

  // making the game room
  var gameRoom = inj.create('GameRoom');
  app.gameRoom = gameRoom;
  app.injector = inj;

  app.use(function (req, res, next) {
    req.gameRoom = gameRoom;
    next();
  });

  app.use(app.router);
  app.use('/',express.static(path.join(documentRoot, 'gameplay')));
  app.use('/docs/',express.static(path.join(documentRoot, 'docs')));

  // controller instantiation
  var controllers = require('./controllers');
  for(var c in controllers){
    var d = new controllers[c](app, inj);
  }

  // development only
  if ('development' == app.get('env')) {
    app.use(express.errorHandler());
  }

  return app;
}

