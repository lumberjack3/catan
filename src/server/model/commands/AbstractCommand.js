module.exports = AbstractCommand;

function AbstractCommand($Logger){
	if(!$Logger){
		this.logger = console;
	} else{
		this.logger=$Logger();
	}
}

AbstractCommand.fromJSON = function(){
	throw new Error("fromJSON unimplimented");
}

AbstractCommand.prototype.toJSON = function(){
	throw new Error("toJSon unimplimented");
}

AbstractCommand.prototype.execute = function(GameRoom){
	throw new Error("EXECUTE FUNCTION NOT OVERRIDEN");
}
