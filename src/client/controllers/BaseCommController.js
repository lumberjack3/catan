/**
    This is the namespace for the communication classes (log and chat)
    @module catan.comm
    @namespace comm
 */
	
module.exports = BaseCommController;

var Controller = require('./BaseController');

/**
	The basic controller class to extend from
	@class BaseCommController 
	@extends misc.BaseController
	@param {comm.BaseCommView} logView The view for this object to control.
	@param {models.ClientModel} model The view for this object to control.
	@constructor
 **/
BaseCommController.prototype = core.inherit(Controller.prototype);
BaseCommController.prototype.contructor = BaseCommController;
BaseCommController.prototype.commType = 'base';

function BaseCommController(logView, model, commType){
	Controller.call(this,logView,model);
	if(commType)
		this.commType = commType;
}

// update the log lines
BaseCommController.prototype.onUpdate = function () {
	
	var clientPlayer = this.clientModel.getClientPlayer();
	var lines = this.clientModel.getCommLines(this.commType);
	this.view.resetLines(lines)
}

