// STUDENT-EDITABLE-BEGIN
/**
  This is the namespace to hold the base classes
  @module catan.misc
  @namespace misc
  */

module.exports = BaseController;

/** 
	This class serves as the basis for all controller classes.		
	This constructor should be called by all child classes.

	@class BaseController
	@constructor 
	@param view - The controller's view
	@param {models.ClientModel} clientModel - The controller's client model
	*/
function BaseController(view,clientModel){
	this.view = view;
	this.clientModel = clientModel;
	clientModel.addObserver(this.onUpdate.bind(this));
};

BaseController.prototype.onUpdate = function(){
	console.error('onUpdate function missing from '+this.constructor.name);
};



