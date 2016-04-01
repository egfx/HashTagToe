module.exports = function($scope, $window, $routeParams, $timeout, logger, tools){

	$scope.templates = [
		{name: 'gameboard.html', url: 'gameboard.html'}
	];
  		$scope.template = $scope.templates[0];

	$timeout(function(){
		require('../external/game.js');
			},500);

	$scope.export = function(e){
		$timeout(function(){
			var context = JSON.parse(document.getElementById('board').attributes['data-block'].value);
			TogetherJS.send({
				type: 'click-send',
				output: context
			});
		},500);
	}

	TogetherJS.hub.on('click-send', function(msg){
				$scope.message = {pageX: msg.output.pageX, pageY: msg.output.pageY};
			});

	$scope.message = {};
	
	$scope.$watch('message', function(data){
		//document.elementFromPoint(data.pageX, data.pageY).click();
	});

}