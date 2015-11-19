var mongoose = require('mongoose');

// one to one, driver has car
var CarSchema = mongoose.Schema({
	year: {type: Number},
	make: {type: String},
	model: {type: String}
});



var DriverSchema = mongoose.Schema({
	name: {type: String},
	age: {type: Number},
	License: {type: Number},

	car: CarSchema
});




// one to one, car has driver
//___________________________________________________

var DriverSchema = mongoose.Schema({
	name: {type: String},
	age: {type: Number},
	License: {type: Number},
});

var CarSchema = mongoose.Schema({
	year: {type: Number},
	make: {type: String},
	model: {type: String},
	driver: DriverSchema
});


// one to many, driver has cars
//___________________________________________________
var CarSchema = mongoose.Schema({
	year: {type: Number},
	make: {type: String},
	model: {type: String}
});

var DriverSchema = mongoose.Schema({
	name: {type: String},
	age: {type: Number},
	License: {type: Number},
	cars: [CarSchema]
});


// one to many, car has drivers
//___________________________________________________

var DriverSchema = mongoose.Schema({
	name: {type: String},
	age: {type: Number},
	License: {type: Number}
});

var CarSchema = mongoose.Schema({
	year: {type: Number},
	make: {type: String},
	model: {type: String},
	drivers: [DriverSchema]
});



// many to many, cars has drivers
//___________________________________________________

var DriverSchema = mongoose.Schema({
	name: {type: String},
	age: {type: Number},
	License: {type: Number},
	cars: [
		{type: mongoose.Schema.Types.ObjectId, ref: 'Car'}
	]
});

var CarSchema = mongoose.Schema({
	year: {type: Number},
	make: {type: String},
	model: {type: String},
	drivers: [DriverSchema]
});



mongoose.model('Car', CarSchema);
mongoose.model('Driver', DriverSchema);





















