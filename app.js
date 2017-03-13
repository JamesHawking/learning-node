var express = require('express');
var todoControler = require('./controlers/todoControler');

var app = express();

//Template engine
app.set('view engine', 'ejs');

//Static files
app.use(express.static('./public'));

//Fire controllers
todoControler(app);

//Listen to port
app.listen(3000);
console.log('Yo, port servera to 3000');