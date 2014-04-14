module.exports = GameRoom;
var _ = require('underscore');
var CatanError = require('../../common/Errors').CatanError;
var debug = require('debug')('catan:models:gameroom');

/**
  This module contains the game room
  
  @module   catan.server.model
  @namespace servermodel
*/

/** 
 * This class represents a game room with a list of users and games
 
 * @class GameRoom
 * @constructor
 */
function GameRoom(dataRoot, commandsToPersist, callback, $DAO) {
	this.dao = $DAO(dataRoot, commandsToPersist);
	var done = 2;

	function stepDone() {
		if (--done <= 0) {
			ready(null,this);
		}
	}

	this.dao.getUsers(function(err, data) {
		if (err) {
			ready(err);
		}
		this.users = data;
		stepDone();
	})
	this.dao.getGames(function(err, data) {
		if (err) {
			ready(err);
		}
		this.games=data;
		stepDone()
	});
};

GameRoom.prototype.getGameByID = function(gameID) {
	return _(this.games).find(function(s) {
		return s.id == gameID;
	});
};

GameRoom.prototype.getUserByID = function(playerID) {
	return _(this.users).find(function(s) {
		return s.playerID == playerID;
	});
};

/**
 * Executes a command
 * @param  {AbstractCommand}   command  
 * @param  {Function} callback callback(err)
 * @return {void}            
 */
GameRoom.prototype.executeCommand = function (command, callback) {
  try {
    err = command.execute(this);
  } catch (e) {
    err = e
  }
  if (err) {
    return callback(err)
  }
  var response = command.response(req.gameRoom);
  if (response instanceof Error) {
    return callback(response)
  }
  var game = _(this.games).find(function(d){
  	return d.id == command._gameid;
  })
  this.dao.saveCommand(command,game,function(error,commandId){
  	callback(error, commandId);
  })
}

//--------------------------------------------------------------
// Commands
//--------------------------------------------------------------

GameRoom.prototype.login = function(username, password) {
	var user = _(this.users).find(function(u) {
		return u.username == username;
	});
	debug('logging in', username, password, !! user);
	if (!user || user.password !== password)
		return false;
	return user;
};

GameRoom.prototype.registerUser = function(username, password,callback) {
	var user = _(this.users).find(function(u) {
		return u.username == username;
	});
	if (user)
		return false;
	this.dao.createUser(username,password,function(err,user){
		if(err){
			return callback(err);
		}
		this.users.push(user);
		callback(done)
	});
};

var gameSummary = function(s) {
	var players = _(s.model.players).map(function(p) {
		return {
			name: p.name,
			id: p.playerID,
			color: p.color
		};
	});
	while (players.length < 4) {
		players.push({});
	}
	return {
		title: s.title,
		id: s.id,
		players: players
	}
}

GameRoom.prototype.listGames = function() {
	return _(this.games).map(gameSummary);
};

GameRoom.prototype.createGame = function(title, randomTiles, randomNumbers, randomPorts,callback) {
	this.dao.createGame(title, randomTiles, randomNumbers, randomPorts,function(err,game){
		if(err){
			return callback(err);
		}
		callback(null,gameSummary(game))	
	});
};


// TODO make async
GameRoom.prototype.joinGame = function(playerID, color, gameID) {
	var game = this.getGameByID(gameID);
	debug('Joining game', gameID);
	if (!game) return new CatanError('Could not find game');
	if (!game.model.updateColor(playerID, color)) {
		if (game.model.players.length >= 4) {
			return new Error('Game is full');
		}
		var user = this.getUserByID(playerID);
		game.model.addPlayer(user.playerID, user.username, color)
	}
	process.nextTick(function() {
		this.gameRepo.update(gameID, game, 'players');
	}.bind(this));
	return true;
};

GameRoom.prototype.getGameModel = function(gameID) {
	return this.getGameByID(gameID).model;
};

GameRoom.prototype.resetGame = function(gameID) {

};

GameRoom.prototype.sendCommands = function(gameID, listOfCommands) {

};

GameRoom.prototype.listCommands = function(gameID) {

};

GameRoom.prototype.addAIPlayer = function(gameID, AIPlayer) {
	//Not implementing
};

GameRoom.prototype.listAIPlayers = function(gameID) {
	//Not implementing
};

GameRoom.prototype.setLogLevel = function(gameID, logLevel) {

};
