angular.module('myApp').controller('mainController', function($scope, foodService, questionsService){

	$scope.foods = foodService.listOfFoods;

	$scope.questions = questionsService.questions;

	$scope.selected = function(selectedQuestion){
		var question = JSON.parse(JSON.stringify(selectedQuestion));
		delete question.prompt;
		delete question.$$hashKey;  // default property that angular adds
		$scope.foodFilter = question;

	};


	









});





