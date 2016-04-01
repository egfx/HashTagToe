"use strict";

var packgr = require('../package.json'),
angular = require('angular');
require('angular-router-browserify')(angular);
require('breeze-client');
require('./vendor/breeze.angular');

var game = require('./controllers/game'),
DataContext = require('./services/DataContext'),
logger = require('./services/logger'),
tools = require('./services/tools');

angular.module(packgr.name, [
	'breeze.angular',
	'ngRoute'
])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.
			when('/:handoff', {
			    controller: 'game'
			 });
	}])
		.controller('game', ['$scope', '$window', '$routeParams', '$timeout', game])
		.factory('DataContext', ['breeze', DataContext])
		.factory('tools', [tools])
		
			.run(['$window', '$rootScope', function($window, $rootScope){
				$rootScope.path = $window.location;
			}]);

angular.bootstrap(document, [packgr.name]);

/* + game + */
angular.module(packgr.name).value('version', packgr.version);