var express = require('express');
var bodyParser = require('body-parser');

var usersCtrl = require('./controllers/usersCtrl');


var app = express();

app.use(bodyParser.json());

app.get('/users', usersCtrl.index);
app.get('/users/:id', usersCtrl.show);





app.post('/users', usersCtrl.log, usersCtrl.build);




app.listen(3000, function(){
	console.log('listening on port 3000');
});