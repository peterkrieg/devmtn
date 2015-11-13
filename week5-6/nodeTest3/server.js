var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

var usersCtrl = require('./controllers/usersCtrl');
var moviesCtrl = require('./controllers/moviesCtrl');


app.get('/users',  usersCtrl.index);
app.get('/users/:id', usersCtrl.show);
app.post('/users', usersCtrl.build);
app.put('/users/:id', usersCtrl.update);
app.delete('/users/:id', usersCtrl.destroy);

// app.get('/movies',  moviesCtrl.index);
// app.get('/movies/:id', moviesCtrl.show);
// app.post('/movies', moviesCtrl.build);
// app.put('/movies/:id', moviesCtrl.update);
// app.delete('movies/:id', moviesCtrl.delete);




app.listen(4444, function(){
	console.log('listening on port 4444');
})

