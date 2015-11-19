var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = Schema({
	email: {type: String, required: true},
	username: {type: String, required: true},
	level: {type: Number, default: 1},
	location: {type: String, }
})