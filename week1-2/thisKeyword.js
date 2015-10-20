function calculateTax(order, includeLocal, includeFlat){
	var tax = this.total * 0.10;
	if (includeLocal){
		tax += this.total * 0.01;
	}
	if(includeFlat){
		tax += 0.25;
	}
	return tax;
}











var OrderMethods = {
	calculateTax: function(order, includeLocal, includeFlat){
		var tax = this.total * 0.10;

		if (includeLocal){
			tax += this.total * 0.01;
		}
		if(includeFlat){
			tax += 0.25;
		}
		return tax;
	}
};


var order1 = {
	total: 10,
	// calculateTax: OrderMethods.calculateTax
};

var order2 = {
	total: 20,
	// calculateTax: OrderMethods.calculateTax
};

var order1Tax = order1.calculateTax();
var order2Tax = order2.calculateTax();

// console.log(order1Tax);
// console.log(order2Tax);



var order1Tax = calculateTax.call(order1, true, true);
var order2Tax = calculateTax.call(order2, true, true);

console.log(order1Tax);
console.log(order2Tax);

var calculateOptions = [true, false];

var order1Calc = calculateTax.bind(order1);

console.log(order1Calc());



function Order(total) {
	var o;
	o = {
		total: total,
		calculateTax: calculateTax
	};
}

var order3 = Order(30);
console.log(order3.calculateTax());   // just define calculateTax() global scope and it will work









// ------------------------------------------------  New example

function Car(make, model, doors) {
	this.make = make;
	this.model = model;
	this.doors = doors;
}

var car = {};
Car.call(car, 'Ford', 'Mustang', 2);

var car2 = new Car('Toyota', 'Highlander', 4);
console.log(car2);


// -------------------

function Car2(make, model, doors) {
	this.make = make;
	this.model = model;
	this.doors = doors;

	return this;
}

var car3 = Car2.call({}, 'Ford', 'Mustang', 4);


// -------------------

function sayHello(date, weather) {
	console.log('hello ' +this.name);
	console.log('weather is ' +weather);
	console.log('date is ' +date);
}

var person = {name: 'peter'};

var sayHello = sayHello.bind(person, '10/20/15');
sayHello('sunny, 75');






















