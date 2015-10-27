angular.module('myApp')
.service('foodService', function(){

	this.listOfFoods = [
	{
		name: 'Cheeseburgers',
		origin: 'American',
		calories: 480,
		spicyRating: 2
	},
	{
		name: 'Sushi',
		origin: 'Japan',
		calories: 400,
		spicyRating: 3
	},
	{
		name: 'Burrito',
		origin: 'American',
		calories: 1600,
		spicyRating: 5
	},
	{
		name: 'Spagehtti',
		origin: 'Itlian',
		calories: 800,
		spicyRating: 2
	}
	];

	var privateVar = "this is private!";








});