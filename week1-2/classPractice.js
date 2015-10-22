// 10/21/15  -- lecture 10AM

var getColors = function(){
	setTimeout(function() {
		console.log('returning colors');
	}, 500);
};

var colors = getColors();
console.log('colors: '+colors);

//____________________________way that works____________________________

var getColors = function(callback){
	setTimeout(function(){
		callback(colors);
	}, 2000);
	return 'return value';
};

var colors = ['red', 'blue','yellow'];

function printColors(arr){
	for(var i=0; i<arr.length; i++){
		console.log(arr[i]);
	}
}

getColors(printColors);


//____________________________Printing Colors per second____________________________

//____________________________creating forEach____________________________

function forEach(arr, callback){
	for(var i=0; i<arr.length; i++){
		callback(arr[i], i);
	}
}

function logIt(item, index){
	setTimeout(function(){
		console.log(item);
	}, index*50);
}

var names = ['peter','anna','tim','rob','bob','jake','steph','billy','jack'];


function createRandomWords(numNames){
	var names=[];
	var alphabetArr='abcdefghijklmnopqrstuvwxyz'.split('');
	for(var i=0; i<numNames; i++){
		var name = [];
		var lengthWord = Math.floor((Math.random()*10)+110);  //num from 1-50
		for(var j=0; j<lengthWord; j++){
			var randIndice = Math.floor(Math.random()*26); //num from 0 to 25, for indice of alphabet array
			name[j]= alphabetArr[randIndice];
		}
		name = name.join('');
		names.push(name);
	}
	return names;
}


forEach(createRandomWords(1000), logIt);



//____________________________Own practice example, 1220PM____________________________


var animal = {
	name: 'billy',
	age: 22,
	sayName: function(greeting){
		alert(greeting+this.name);
	}
};

var dog = {
	name: 'jack',
	age: 8
};

var turtle = {
	name: 'turtleyy',
	age: 4
};

// animal.sayName.call(dog, 'hello ');


var sayHello = function(callback){
	callback();
};

//____________________________invoking____________________________


// animal.sayName.call(turtle, 'wassup turtle');

// sayHello(animal.sayName.bind(turtle, 'hello!!! '));


// var sayHello2 = animal.sayName.bind(dog, 'hi dog');
// sayHello(2);



setTimeout(function(){
	console.log(this.name);
}, 2000);


//____________________________jQuery practice____________________________

































