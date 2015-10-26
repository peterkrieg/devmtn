var app = angular.module('myApp', []);

app.controller('myController', function($scope, $timeout){
	$scope.name = "peter";
	$scope.person= {
		name: "nameless",
		cereal: "cocoa puffs",
		media: "silence",
		random: "nothing"
	};

	$scope.cars = [
		{name: "astin martin", year: 2012},
		{name: "kia", year: 2011},
		{name: "jeep", year: 2005},
		{name: "51 mercury", year: 2011},
		{name: "tesla", year: 2014}
	];


	$timeout(function(){
		$scope.foo = "bar";
	}, 10);

	$scope.clicked = function(){
		$scope.isAwesome = !$scope.isAwesome;
	};

});

