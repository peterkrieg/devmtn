angular.module('myApp')
.service('questionsService', function(){

	this.questions = [
		{
			prompt: 'spicy?',
			spicyRating: 5
		},
		{
			prompt: 'lowCal?',
			calories: 400
		}

	];

});