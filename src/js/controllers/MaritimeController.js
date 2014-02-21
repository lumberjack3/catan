//STUDENT-EDITABLE-BEGIN
/**
	This is the namespace for maritime trading
	@module catan.trade
	@submodule catan.trade.maritime
	@namespace maritime
	*/

module.exports = MaritimeController;

var window = window || {};
var catan = window.catan || {};
catan.trade = catan.trade || {};
catan.trade.maritime = catan.trade.maritime || {};

var Definitions = require('byu-catan').definitions;
var ResourceTypes = Definitions.ResourceTypes;

var Controller = require('./BaseController');
var MaritimeTradeCommand = require('../model/commands/MaritimeTradeCommand');

/**
	@class MaritimeController
	@constructor 
	@extends misc.BaseController
	@param {maritime.View} view
	@param {models.ClientModel} clientModel
	*/
function MaritimeController(view,clientModel){
	Controller.call(this,view,clientModel);
	this.clientModel = clientModel;
};

MaritimeController.prototype = core.inherit(Controller.prototype);

/**
 * Called by the view when the player "undoes" their give selection
 * @method unsetGiveValue
 * @return void
 */
MaritimeController.prototype.unsetGiveValue = function(){
};

/**
 * Called by the view when the player "undoes" their get selection
 * @method unsetGetValue
 * @return void
 */
MaritimeController.prototype.unsetGetValue = function(){
};

/**
 * Called by the view when the player selects which resource to give
 * @method setGiveValue
 * @param{String} resource The resource to trade ("wood","brick","sheep","wheat","ore")
 * @return void
 */
MaritimeController.prototype.setGiveValue = function(resource){
};

/**
 * Called by the view when the player selects which resource to get
 * @method setGetValue
 * @param{String} resource The resource to trade ("wood","brick","sheep","wheat","ore")
 * @return void
 */
MaritimeController.prototype.setGetValue = function(resource){
};

function capFirst(str){
	return str[0].toUpperCase() + str.slice(1);
}

/** Called by the view when the player makes the trade
 * @method makeTrade
 * @return void
 */
MaritimeController.prototype.makeTrade= function(){
	/*
	return {
		"type": "maritimeTrade",
		"playerIndex": this.playerID,
		"ratio": this.ratio,
		"inputResource": this.inputResource,
		"outputResource": this.outputResource
	}
	(playerID, ratio, inputResource, outputResource)
	*/
	var currentPlayerID = this.clientModel.getCurrentPlayer().

	this.clientModel.proxy.executeCommand(new MaritimeTradeCommand());	
}

