var AbstractMoveCommand = require('../AbstractMoveCommand')
  , util = require('util')

module.exports = PlayMonopolyCommand


util.inherits(PlayMonopolyCommand, AbstractMoveCommand);

function PlayMonopolyCommand(gameID, playerIndex, resource){
	AbstractMoveCommand.call(this,gameID);	

	this.playerIndex = playerIndex;
	this.resource = resource;

}

PlayMonopolyCommand.params = ['playerIndex', 'resource'];
PlayMonopolyCommand.optional = ['type'];
PlayMonopolyCommand.logMessage = '{{name}} played a monopoly card';

PlayMonopolyCommand.prototype.executeOnGame = function(game){

	game.playMonopoly(this.playerIndex, this.resource);

}
