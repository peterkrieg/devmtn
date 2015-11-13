var user = require('../models/user');


// var users = [];


module.exports = {

	log: function(req, res, next) {
		// console.log(req);
		console.log('loggging');
		if(req.body.pass===true){
			next();
		}
		// console.log(req.path);
		// console.log(req.body);
		// next();
	},




	index: function(req, res, next){
		if(req.query.pass==="true"){
			console.log('yay it is true!!!');
		}
		res.status(200).json(user);
	},

	show: function(req, res, next){
		var requestedUser = user[req.params.id];
		res.status(200).json(requestedUser);

	},

	build: function(req, res, next) {
		user.push(req.body)
		// sentUser.status = 'new';
		res.status(200).json(user);
	}





};