angular
	.module('app', ['ngRoute'])

	.controller('todoCtrl', function ($scope) {
		$scope.title = 'TODO';
		$scope.add = function() {
			$scope.addedItem && $scope.items.push({
				name: $scope.addedItem
			})
			$scope.addedItem = ''; // clear field
		};
		$scope.remove = function(index) {
			$scope.items.splice(index, 1);
		};

		$scope.doAll = function() {
			$scope.items.map(function(item) {
				return item.isDone = true;
			});
		};

		$scope.undoAll = function() {
			$scope.items.map(function(item) {
				return item.isDone = false;
			});
		};

		$scope.removeAll = function() {
			$scope.items = [];
		};

		$scope.removeAllDone = function() {
			$scope.items = $scope.items.filter(function(item) {
				return !item.isDone;
			});
		};

		$scope.items = [{
			name: 'firs',
			isDone: false
		}, {
			name: 'second',
			isDone: false
		}];
	})

	.controller('aboutCtrl', function ($scope) {
		$scope.title = 'ABOUT'
	})

	.config(function($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'app/templates/todo.html',
				controller: 'todoCtrl'
			})
			.when('/about', {
				template: '<dvi>{{title}}</div>',
				controller: 'aboutCtrl'
			})

	});
