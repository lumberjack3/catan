/**
 * 
 * @module catan.model.commands
 * @namespace model
 */

var AbstractCommand = require('./AbstractCommand');
/**
<pre>
Pre-condition: NONE
Post-condition: NONE
</pre>
@class PlaySoldierCommand
@constructor 
@param {int} the ID of the player playing the Soldier Card
@param {int} The ID of the player being robbed from
@param {HexLocation} The spot the robber is being placed
**/
function PlaySoldierCommand(playerID, victimID, robberSpot){

	this.playerID = playerID;
	this.victimID = victimID;
	this.robberSpot = robberSpot;

	PlaySoldierCommand.AbstractCommand.url = '/moves/Soldier';
}

PlaySoldierCommand.prototype = new AbstractCommand();
/**
<pre>
Pre-condition: NONE
Post-condition: NONE
</pre>
@method getData
@return {JSON} returns the JSON object formatted as the server will want it
**/
PlaySoldierCommand.prototype.getData = function(){

	return {'type' : 'Soldier',
			'playerIndex' : this.playerID,
			'victimIndex' : this.victimID,
			'robberSpot' : {'x' : this.robberSpot.getX(),
							'y' : this.robberSpot.getY()}
			};	
};
