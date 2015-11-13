var users = require('../models/users');

module.exports = {
	index: function(req, res, next){
		res.status(200).json(users);
	},

	show: function(req, res, next){
		var requestedUser = users[req.params.id];
		res.status(200).json(requestedUser);
	},

	build: function(req, res, next){
		users.push(req.body);
		res.status(200).json(users);
	},

	update: function(req, res, next){
		var userToUpdate = users[req.params.id];
		userToUpdate.updated = true;
		users[req.params.id] = userToUpdate;

		res.status(200).json({message: 'updated'});


	},

	destroy: function(req, res, next){
		console.log(req.params.id);
		var index = Number(req.params.id);
		users.splice(index, 1);
		res.status(200).json({message: 'destroy success'});
	}





}