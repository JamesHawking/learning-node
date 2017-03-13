var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//Template engine
app.set('view engine', 'ejs');

//Static files
app.use(express.static('./public'));

//Fire controllers
todoController(app);

//Listen to port
app.listen(3000);
console.log('Yo, port servera to 3000');