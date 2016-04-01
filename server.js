var express = require('express'),
bodyParser = require('body-parser'),
http = require('http'),
html = require('html'),
path = require('path'),
routes = require('./routes');

var app = express();
var router = express.Router();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'html');

app.get('/:send', function(req, res){
	res.render('index.html', {send: req.params.send});
});

// Launch server
var server = http.createServer();
app.listen(8080, function(){
	console.log('the Hash-Tag-Toe Web Server is running!');
});