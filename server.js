'use strict';

const express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var flash = require('express-flash');

// Constants
const PORT = 8087;
const HOST = '0.0.0.0';

// App
const app = express();

// mongoose connection
var mongoose = require('mongoose'); 
global.db = mongoose.connect('mongodb://admin:admin@ds233769.mlab.com:33769/beering'); 
 
mongoose.connection.on('connected', function () {   
	console.log('=====Conexão estabelecida com sucesso====='); 
}); 
mongoose.connection.on('error', function (err) {   
	console.log('=====Ocorreu um erro: ' + err); 
}); 
mongoose.connection.on('disconnected', function () {   
	console.log('=====Conexão finalizada====='); 
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(cookieParser('berrs')); 
app.use(expressSession()); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());

app.use(express.static(__dirname + '/public'));

load('models')
.then('controllers')
.then('routes')
.into(app);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);