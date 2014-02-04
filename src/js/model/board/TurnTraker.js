var RollDiceCommand = require("../commands/RollDiceCommand");
var FinishTurnCommand = require("../commands/FinishTurnCommand");

/**
This module containts functionaly for the board

@module catan.model.board
@namespace model
**/

module.exports = TurnTracker;

/**
Functionality that interfaces with the system to track player turn status.

<pre>
Invariant: 
</pre>
@class TurnTracker
@constructor
**/
function TurnTracker(proxy, turnTracker){
	// constructor
	this.proxy = proxy;
	
	this.currentTurn = turnTracker.currentTurn;

	// Status can be discarding, robbing, playing, rolling
	this.status = turnTracker.status;
}

/**
<pre>
Pre-condition: NONE
Post-condition: NONE
</pre>
@method currentPlayerId
@return {int} ID of the player whose turn it is
**/
TurnTracker.prototype.currentPlayerId = function () {
	return this.currentTurn;
};


/**
<pre>
Pre-condition: NONE
Post-condition: NONE
</pre>
@method getStatus
@return {StatusEnum} State of the game (pre game, in-progress, post game)
**/
TurnTracker.prototype.getStatus = function () {
	return this.status;
};


/**
<pre>
Pre-condition: NONE
Post-condition: NONE
</pre>
@method canTradeCards
@param {int} playerId
@return {boolean} True if player can trade cards, false if not
**/
TurnTracker.prototype.canTradeCards = function (playerId) {
	return this.status == "Playing" && playerId == this.currentTurn;
};

/**
<pre>
Pre-condition: NONE
Post-condition: The next person in order starts their turn. (async!)
</pre>
Notifies system that a player's turn is finished

@method finishTurn
@return {void}
**/
TurnTracker.prototype.finishTurn = function () {
	this.proxy.executeCommand(new FinishTurnCommand());
};

/**
<pre>
Pre-condition: NONE
Post-condition: Players will be given the resources deserved from that roll. ClientModel's state is either "robbing", "discarding", or "playing" (async!)
</pre>
Rolls two "dice" using a random number generator.

@method rollDice
@return {void}
**/
TurnTracker.prototype.rollDice = function () {
	this.proxy.executeCommand(new RollDiceCommand());
};

