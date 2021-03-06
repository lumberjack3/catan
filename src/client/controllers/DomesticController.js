//STUDENT-EDITABLE-BEGIN
/**
	This is the namespace for domestic trading
	@module catan.trade
	@submodule catan.trade.domestic
	@namespace domestic
	*/

module.exports = DomesticController;
var Controller = require('./BaseController');
var window = window || {};
var catan = window.catan || {};
var Definitions = require('byu-catan').definitions;
var ResourceTypes = Definitions.ResourceTypes;


/** 
	@class DomesticController
	@constructor 
	@extends misc.BaseController
	@param {domestic.View} view
	@param {misc.WaitOverlay} waitingView
	@param {domestic.AcceptView} acceptView
	@param {models.ClientModel} clientModel
	*/
function DomesticController(view, waitingView, acceptView, clientModel) {
	Controller.call(this, view, clientModel);
	this.waitingView = waitingView;
	this.acceptView = acceptView;
  this.updatePlayers();
	view.setController(this);
	acceptView.setController(this);
	resetState.call(this);
	this.onUpdate();
};
DomesticController.prototype = core.inherit(Controller.prototype);

//#region private
//make sure to give them `this`


function getMaxResource(resource) {
	return this.clientModel.getClientPlayer().resources[resource];
}

function resetState() {
	for (var i in ResourceTypes) {
		var t = ResourceTypes[i];
		this[t] = new DResource(getMaxResource.call(this, t));
	}
	this.tradePlayerIndex = -1;
	this.view.clearTradeView();
	this.view.setPlayerSelectionEnabled(false);
	this.view.setResourceSelectionEnabled(false);
	this.view.setTradeButtonEnabled(false);
	this.view.setStateMessage(this.clientModel.isMyTurn() ? 'Prepare a trade offer' : 'Not your turn');
	this.waitingView.closeModal();
}

function updateTradeButton() {
	var enabled = false;
	if (this.tradePlayerIndex != -1) {
		for (var i in ResourceTypes) {
			if (this[ResourceTypes[i]].val() > 0) {
				enabled = true;
				break;
			}
		}
	}
	this.view.setTradeButtonEnabled(enabled);
	this.view.setStateMessage(enabled ? 'Send trade' : 'Prepare a trade');
}
//#endregion private

// Build the players thing
DomesticController.prototype.updatePlayers = function () {
	this.view.setPlayers(this.clientModel.getDomesticPlayerInfo());
}

DomesticController.prototype.stateActions = {
	'receivedTradeOffer': function () {
		for (var j in ResourceTypes) {
			var r = ResourceTypes[j];
			var c = this.clientModel.gameboard.tradeOffer.offer[r];
			if (c < 0) {
				this.acceptView.addGetResource(r, c);
			} else if (c > 0) {
				this.acceptView.addGiveResource(r, -c);
			}
		}
		this.acceptView.setPlayerName(this.clientModel.getTradeSenderName())
		var canAccept = this.clientModel.canAcceptTrade();
		this.acceptView.setAcceptEnabled(canAccept);

		this.acceptView.showModal();
	},
	'sentTradeOffer': function () {
		this.waitingView.showModal();
	},
	'myTurn': function () {
		this.waitingView.closeModal();
		this.view.setPlayerSelectionEnabled(true);
		this.view.setResourceSelectionEnabled(true);
		this.view.setStateMessage('Prepare a trade offer');
	},
	'default': function () {
		resetState.call(this);
	}
}

DomesticController.prototype.getState = function () {
	if (this.clientModel.receivedTradeOffer()) {
		return 'receivedTradeOffer'
	}
	if (this.clientModel.sentTradeOffer()) {
		return 'sentTradeOffer'
	}
	if (this.clientModel.isMyTurn()) {
		return 'myTurn'
	}
	return 'default'
}

DomesticController.prototype.onUpdate = function() {
	this.updatePlayers()
	var state = this.getState()
	this.stateActions[state].call(this)
}

function DResource(max) {
	this.max = max;
	this._val = this.direction = 0;
}

DResource.prototype.incr = function() {
	if (this.direction <= 0) // if receiving
		this._val++;
	else
		this._val = Math.min(this.max, this._val + 1);

}

DResource.prototype.send = function() {
	this.clear();
	this.direction = 1;
}

DResource.prototype.recv = function() {
	this.clear();
	this.direction = -1;
}

DResource.prototype.setMax = function (max) {
	this.max = max
}

DResource.prototype.decr = function() {
	this._val = Math.max(0, this._val - 1);
}

DResource.prototype.clear = function() {
	this._val = this.direction = 0;
}

DResource.prototype.val = function(opt) {
	if (!opt)
		return this._val;
	else if (opt === 'abs')
		return this.direction * this._val;
	else
		this._val = opt;
}

/******** Methods called by the Domestic View *********/

/**
 * @method setResourceToSend
 * @param{String} resource the resource to send ("wood","brick","sheep","wheat","ore")
 * @return void
 */
DomesticController.prototype.setResourceToSend = function(resource) {
	this[resource].setMax(getMaxResource.call(this, resource))
	this[resource].send();
	this.increaseResourceAmount(resource);
	updateTradeButton.call(this);
};

/**
 * @method setResourceToReceive
 * @param{String} resource the resource to receive ("wood","brick","sheep","wheat","ore")
 * @return void
 */
DomesticController.prototype.setResourceToReceive = function(resource) {
	this[resource].recv();
	this.increaseResourceAmount(resource);
	updateTradeButton.call(this);
};

/**
 * @method unsetResource
 * @param{String} resource the resource to clear ("wood","brick","sheep","wheat","ore")
 * @return void
 */
DomesticController.prototype.unsetResource = function(resource) {
	this[resource].clear();
	this.view.setResourceAmountChangeEnabled(resource, false, false);
	updateTradeButton.call(this);
};

/**
 * @method setPlayerToTradeWith
 * @param{int} playerNumber the player to trade with
 * @return void
 */
DomesticController.prototype.setPlayerToTradeWith = function(playerNumber) {
	this.tradePlayerIndex = playerNumber;
	updateTradeButton.call(this);
};

/**
 * Increases the amount to send or receive of a resource
 * @method increaseResourceAmount
 * @param{String} resource ("wood","brick","sheep","wheat","ore")
 * @return void
 */
DomesticController.prototype.increaseResourceAmount = function(resource) {
	var r = this[resource];
	r.incr();
	this.view.setResourceAmountChangeEnabled(resource, r.direction < 0 || r.val() < r.max, r.val() > 0);
	this.view.setResourceAmount(resource, r.val());
	updateTradeButton.call(this);
};

/**
 * Decreases the amount to send or receive of a resource
 * @method decreaseResourceAmount
 * @param{String} resource ("wood","brick","sheep","wheat","ore")
 * @return void
 */
DomesticController.prototype.decreaseResourceAmount = function(resource) {
	var r = this[resource];
	r.decr();
	this.view.setResourceAmountChangeEnabled(resource, r.direction < 0 || r.val() < r.max, r.val() > 0);
	this.view.setResourceAmount(resource, r.val());
	updateTradeButton.call(this);
};

/**
 * Sends the trade offer to the accepting player
 * @method sendTradeOffer
 * @return void
 */
DomesticController.prototype.sendTradeOffer = function() {
	var r = {
		brick: this.brick.val('abs'),
		ore: this.ore.val('abs'),
		sheep: this.sheep.val('abs'),
		wheat: this.wheat.val('abs'),
		wood: this.wood.val('abs')
	};
	if (!this.clientModel.canOfferTrade(this.tradePlayerIndex, r)) {
		resetState.call(this);
		this.view.setStateMessage('Invalid trade offer');
		return;
	}

	this.clientModel
		.getClientPlayer()
		.offerTrade(
			this.tradePlayerIndex,
			this.brick.val('abs'),
			this.ore.val('abs'),
			this.sheep.val('abs'),
			this.wheat.val('abs'),
			this.wood.val('abs')
		);
	resetState.call(this);
};


/******************* Methods called by the Accept Overlay *************/

/**
 * Finalizes the trade between players
 * @method acceptTrade
 * @param{Boolean} willAccept
 * @return void
 */
DomesticController.prototype.acceptTrade = function(willAccept) {
	this.clientModel.getClientPlayer().acceptTrade(willAccept);
	this.acceptView.closeModal();
	resetState.call(this);
};
