function Person(name, age, male){
	this.name = name;
	this.age = age;
	this.male = male;
	this.greeting = function(){
		console.log('hello, my name is: '+this.name+' and I am '+this.age+' years old!');
	};
}

function Pet(name, age, species){
	console.log(arguments);
	this.name = name;
	this.age = age;
	this.species = species;
}

var peter = {};
Person.call(peter, 'peter', 22, true);

var jack = new Person('jack', 30, true);

var copper = new Pet('copper', 10, 'dog');

Array.prototype.splice.call(jack, 0, 1);

var objLikeArray = {
	0: 'sunny',
	1: 'rainy',
	2: 'cloudy'
};

var newArr = Array.prototype.slice.call(objLikeArray, 0, 1);

Person.greeting.call(copper);


// practicing arguments keyword
function testArgs(name, age, title){
	console.log(arguments);
	greeting ='';
	greeting+='hello, '+title+' '+name+'!  You are '+age+' years old';
	console.log(greeting);
}













//______________________________Practicing Callbacks______________________________


function sayHello(name, wayOfSaying){
	wayOfSaying(name);
}

function alertHello(name){
	alert('hello, '+name+'!!!');
}

function consoleHello(name){
	console.log('hello there, '+name+'!!!');
}

sayHello('peter', alertHello);
sayHello('peter', consoleHello);


























