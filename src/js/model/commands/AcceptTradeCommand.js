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
@class AcceptTradeCommand
@constructor 
@param {int} the ID of the player accepting the trade
@param {bool} will the player accept the trade
**/
function AcceptTradeCommand(playerID, willAccept){

	this.playerID = playerID;
	this.willAccept = willAccept;

	AcceptTradeCommand.AbstractCommand.url = '/moves/acceptTrade';
}

AcceptTradeCommand.prototype = new AbstractCommand();


/**
<pre>
Pre-condition: NONE
Post-condition: NONE
</pre>
@method getData
@return {JSON} returns the JSON object formatted as the server will want it
**/
AcceptTradeCommand.prototype.getData = function(){

	return {'type':'acceptTrade',
			'playerIndex' : this.playerID,
			'willAccept' : this.willAccept};	
};