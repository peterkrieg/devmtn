// var person = {
// 	name: 'peter',
// 	age: 22,
// 	male: true
// };

// for(var prop in person){
// 	delete person[prop];
// }

// // (function(){

// // }());

function Person(name, age){
	this.name = name;
	this.age = age;
}

var peter = new Person('peter', 22);



// Difference between these 3?
var sayHello = function(){
	console.log('hello');
};

var sayHello = function sayHello(){
	console.log('hello');
};

function sayHello(){
	console.log('hello');
}



sayHello();

var something ='hello';

function saySomething(){
	console.log(something);
	var something = 'goodbye';
	console.log(something);
	return 'return value';
}
saySomething();




// compile run
function sayHello(){
	//
}
function sayGoodbye(){
	//
}
var sayHello;
//   --

// code run



var sayHello = function sayHello(){
	console.log('hello');
	return 'return value';
};

sayHello();

var sayHello = function sayGoodbye(){
	console.log('goodbye');
	return 'return value';
};

sayHello();




















function sayHello(){
	console.log('hello');
	return 'return value';
}
sayHello();
function sayHello(){
	console.log('goodbye');
	return 'return value';
}
sayHello();






















// same as: 


function sayHello(){
	console.log('hello');
	return 'return value';
}
sayHello();
function sayHello(){
	console.log('goodbye');
	return 'return value';
}
sayHello();
sayHello();


























var sayHello = function sayHello(){
	console.log('hello');
	return 'return value';
};
sayHello();
var sayHello = function sayHello(){
	console.log('goodbye');
	return 'return value';
};
sayHello();








function sayHello(){
	console.log('hello');
	return 'return value';
}
sayHello();
function sayHello(){
	console.log('goodbye');
	return 'return value';
}
var sayHello;







































