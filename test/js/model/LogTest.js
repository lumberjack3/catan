var MockProxy=require('../MockProxy.js');
var Log=require('../../../src/js/model/Log.js');
var assert=require('chai').assert;

suite('LogTests',function(){
	var log,testData;

	setup(function(){
		testData= {
			"lines": [{
				"source": "Sam",
				"message": "Sam built a road"
			},{
				"source": "Brooke",
				"message": "Brooke built a settlement"
			}]
		};
		var mockProxy=new MockProxy();
		log= new Log(mockProxy,testData);
	});

	suite('#constructor',function(){
		test('throws expected error',function(){
			assert.throws(function(){
				new Log({},{})
			},Error);
		});
		test('should contain all entries',function(){

			assert.equal(testData.lines,log.entries);
		});
	});

	suite('#mostRecentEntry()',function(){
		test('should return "Brooke"',function(){
			assert.equal(testData.lines[1],log.mostRecentEntry());
		});
	});

});