var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.get('/users', function(req, res, next){
	console.log('users endpoint');
});

app.post('/users', function(req, res, next){
	console.log(req.body);
})




app.get('/products', function(){});



app.listen(3000);