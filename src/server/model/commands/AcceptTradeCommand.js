var AbstractMoveCommand = require('./AbstractMoveCommand')
  , util = require('util')

moduel.exports = AcceptTradeCommand


util.inherits(AcceptTradeCommand, AbstractMoveCommand);

function AcceptTradeCommand(gameID, playerIndex, willAccept){
	AbstractMoveCommand.call(this,gameID);	

	this.playerIndex = playerIndex;
	this.willAccept = willAccept;
}

AcceptTradeCommand.prototype.executeOnGame = function(game){

	game.acceptTrade(this.playerIndex, this.willAccept)
}