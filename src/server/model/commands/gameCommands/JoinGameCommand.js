var AbstractCommand = require('../AbstractCommand')
  , util = require('util')

module.exports = JoinGameCommand

util.inherits(JoinGameCommand, AbstractCommand);


function JoinGameCommand(playerID, color, gameID, $Logger){
	AbstractCommand.call(this,$Logger);
	this.playerID = playerID;
	this.color = color;
	this.gameID = gameID;
}

JoinGameCommand.params = ['playerID', 'color', 'gameID'];

JoinGameCommand.prototype.execute = function(gameRoom,callback){
	gameRoom.joinGame(this.playerID, this.color, this.gameID, function (err, success) {
    if (err) return callback(err)
    if (success instanceof Error) {
      return callback(success);
    }
    if(!success){
      callback(true,'Could not join game');
      this.logger.warn('PlayerID '+this.playerID+' joined game '+this.gameID);
    }
    else{
      callback(false,true);
      this.logger.log('PlayerID '+this.playerID+' joined game '+this.gameID);
    }
  });
}
