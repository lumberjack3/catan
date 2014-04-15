var FilePL = require('../../../src/server/persistance/file.js');
var RollDiceCommand = require('../../../src/server/model/commands/moveCommands/RollDiceCommand.js');
var path = require('path');
var expect = require('chai').expect;
var _ = require('lodash');
var originalUsers = require('../data/users.json');
var game0 = require('../data/game0.json');
var game1 = require('../data/game1.json');
var game2 = require('../data/game2.json');

describe('FilePL tests', function() {
	var filePL;

	before(function(done) {
		var rootPath = path.resolve(__dirname, '../data');
		filePL = new FilePL(rootPath);
		done();
	})

	//---------------------------------------------------------------
	// Load on startup persistence tests
	//---------------------------------------------------------------

	it('#readAllUsers() when starting server', function(done) {
		filePL.readAllUsers(function(error, users){
			expect(error).to.be.null;
			expect(users).to.deep.equal(originalUsers);
			done();
		})
	})

	it('#getAllGameInfo() when starting server', function(done) {
		filePL.getAllGameInfo(function(err, games){
			expect(err).to.be.null;
			expect(games[0]).to.deep.equal(game0);
			expect(games[1]).to.deep.equal(game1);
			expect(games[2]).to.deep.equal(game2);
			done();
		})
	})

	it('#getRecentGameCommands()', function(done) {
		filePL.getRecentGameCommands(game0.id, game0.last_command_id, function(err, commands){
			expect(err).to.be.null;
			expect(commands).to.deep.equal([]);
			done();
		})
	})
	
	//-------------------------------------------------------------------
	// User persistence tests
	//-------------------------------------------------------------------

	it('#persistUser()', function(done) {
		var user = {id:101, username:'tester1', password:'testing123'};
		originalUsers.push(user);

		filePL.persistUser(user.username, user.password, function(err, id){
			expect(err).to.be.null;
			expect(id).to.equal(101);
			done();
		})
	})

	it('#readAllUsers() after persisting user', function(done) {
		filePL.readAllUsers(function(error, users){
			expect(error).to.be.null;
			expect(users).to.deep.equal(originalUsers);
			done();
		})
	})

	it('#persistUser() again', function(done) {
		var user = {id:102, username:'tester2', password:'testing123'};
		originalUsers.push(user);

		filePL.persistUser(user.username, user.password, function(err, id){
			expect(err).to.be.null;
			expect(id).to.equal(102);
			done();
		})
	})

	it('#readAllUsers() after persisting another user', function(done) {
		filePL.readAllUsers(function(error, users){
			expect(error).to.be.null;
			expect(users).to.deep.equal(originalUsers);
			done();
		})
	})

	//----------------------------------------------------------------------------
	// Game persistence tests
	//----------------------------------------------------------------------------

	it('#persistGame()', function(done) {
		var title = 'TestGame';
		var data = game0.current;

		var expectedGameInfo = {id: 3, title: title, last_command_id: -1, current: _.cloneDeep(data), original: _.cloneDeep(data)};

		filePL.persistGame(title, data, function(err, id){
			expect(err).to.be.null;
			expect(id).to.equal(3);
			done();
		})
	})

	it('#getAllGameInfo() after persisting a game', function(done) {
		var title = 'TestGame';
		var data = game0.current;
		var expectedGameInfo = {id: 3, title: title, last_command_id: -1, current: _.cloneDeep(data), original: _.cloneDeep(data)};

		filePL.getAllGameInfo(function(err, games){
			expect(err).to.be.null;
			expect(games[0]).to.deep.equal(game0);
			expect(games[1]).to.deep.equal(game1);
			expect(games[2]).to.deep.equal(game2);
			expect(games[3]).to.deep.equal(expectedGameInfo);
			done();
		})
	})

	it('#updateGame()', function(done) {
		var gameID = 0;
		var lastCommand = 2;
		var newData = {'blah':1, 'blahblah':2};

		filePL.updateGame(gameID, lastCommand, newData, function(err){
			expect(err).to.be.null;
			done();
		})
	})

	it('#getAllGameInfo() after updating a game', function(done) {
		var lastCommand = 2;
		var newData = {'blah':1, 'blahblah':2};

		filePL.getAllGameInfo(function(err, games){
			expect(err).to.be.null;
			expect(games[0].last_command_id).to.equal(lastCommand);
			expect(games[0].current).to.deep.equal(newData);
			expect(games[1]).to.deep.equal(game1);
			expect(games[2]).to.deep.equal(game2);
			done();
		})
	})

	//-------------------------------------------------------------------
	// Command persistence tests
	//-------------------------------------------------------------------

	/*it.skip('#persistCommand()', function(done) {
		var gameID = 1;
		var playerIndex = 3;
		var numberRolled = 7;
		var rollDiceCommand = new RollDiceCommand(gameID, playerIndex, numberRolled);
		var command = {id: 0, game_id: gameID, data: rollDiceCommand.toJSON().data};
		var commands = [];
		commands.push(command);

		filePL.persistCommand(gameID, rollDiceCommand, function(err, commandID){
			expect(err).to.be.null;
			expect(commandID).to.equal(0);
			console.log(commands);
			console.log(require('../data/commands' + gameID + '.json'));
			expect(commands).to.deep.equal(require('../data/commands' + gameID + '.json'));

			filePL.getRecentGameCommands(gameID, 0, function(err, commands){
				console.log("How far?");
				expect(err).to.be.null;
				expect(commands).to.deep.equal([]);
				done();
			})
		})
	})

	it.skip('#persistCommand() again', function(done) {
		var gameID = 1;
		var playerIndex = 2;
		var numberRolled = 9;
		var rollDiceCommand = new RollDiceCommand(gameID, playerIndex, numberRolled);

		var expectedResult = {id:1, game_id: gameID, data: rollDiceCommand.toJSON()};
		var expectedCommands = [];
		expectedCommands.push(expectedResult);
		
		filePL.persistCommand(gameID, rollDiceCommand.toJSON(), function(err, commandID){
			expect(err).to.be.null;
			expect(commandID).to.equal(1);

			filePL.getRecentGameCommands(gameID, 0, function(err, commands){
				console.log(err);
				console.log(commands);

				expect(err).to.be.null;
				expect(commands).to.deep.equal(expectedCommands);
				done();
			})
		})
	})*/

	it('#getRecentGameCommands()', function(done) {
		done();
	})
})
