module.exports=BuildCityCommand;

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
@class BuildCityCommand
@constructor 
@param {int} playerIndex the index (NOT ID) of the player wanting to build a City
@param {VertexLocation} cityLocation location where the player wants to build the city
@param {isFree} isFree wheter or not can be build at that location
**/
function BuildCityCommand(playerIndex, cityLocation, isFree){

	this.playerIndex = playerIndex;
	this.cityLocation = cityLocation;
	this.isFree = !!isFree;
}

BuildCityCommand.prototype = new AbstractCommand();
BuildCityCommand.prototype._name = 'BuildCity';

/**
<pre>
Pre-condition: NONE
Post-condition: NONE
</pre>
@method getData
@return {JSON} returns the JSON object formatted as the server will want it
**/
BuildCityCommand.prototype.getData = function(){

  var dirs = ["W","NW","NE","E","SE","SW"]
	return {
    'type':'buildCity',
    'playerIndex': this.playerIndex,
    'vertexLocation': {
      'x': this.cityLocation.getHexLocation().getX(),
      'y': this.cityLocation.getHexLocation().getY(),
      'direction': dirs[this.cityLocation.getDirection()]
    },
    'free': this.isFree
  };
};
