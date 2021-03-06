//STUDENT-EDITABLE-BEGIN
/**
	This is the namespace for the intitial game round
	@module catan.setup
	@namespace setup
	*/

module.exports = SetupRoundController;

var StatefulController = require('./StatefulController');

/** 
	@class SetupRoundController
	@constructor 
	@extends misc.BaseController
	@param {models.ClientModel} clientModel
	@param {map.MapController} mapController
	*/
function SetupRoundController(clientModel, mapController) {
	this.mapController = mapController;

	StatefulController.call(this, undefined, clientModel);

	this.onUpdate();
}

core.forceClassInherit(SetupRoundController, StatefulController);

function forwardToGame(){
	window.location.href = 'catan.html';
}

SetupRoundController.prototype.stateHandlers = {
	notInSetup: function () {
		forwardToGame();
	},
	notMyTurn: function () {
		// do nothing
	},
	finishedMyTurn: function () {
		this.clientModel.endMyTurn();
	},
	buildingSettlement: function () {
		this.mapController.startMove('settlement', true, false);
	},
	buildingRoad: function () {
		this.mapController.startMove('road', true, true);
	}
}

SetupRoundController.prototype.getState = function () {
	var player = this.clientModel.getClientPlayer()
		, status = this.clientModel.getCurrentStatus();
	if (['FirstRound', 'SecondRound'].indexOf(status) === -1 || this.clientModel.gameboard.isGameOver()) {
		return 'notInSetup';
	}
	if (!this.clientModel.isMyTurn()) {
		return 'notMyTurn';
	}
	if (player.roadsBuilt == player.settlementsBuilt && [0, 'FirstRound', 'SecondRound'][player.roadsBuilt] === status) {
		return 'finishedMyTurn';
	}
	if (player.roadsBuilt > player.settlementsBuilt) {
		return 'buildingSettlement';
	}
	return 'buildingRoad';
}

