var express=require("express");
var bodyParser=require('body-parser');
var path = require('path');

var express = require('express');
var session = require('express-session');

var connection = require('./config/database');
var app = express();
 
var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/register-controller');

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "index" );  
}) 

app.get('/register.html', function (req, res) { 
    if(req.session.loggedin) {
        return res.redirect('/index_login.html');
    }
    res.sendFile( __dirname + "/" + "register.html" );  
 })  
 
app.get('/login', function (req, res) { 
    if(req.session.loggedin) {
        res.render('index', {error: true});
    } 
    res.render('login', {error: false});
})  

app.get('/index_login.html', function (req, res) { 
    if(!req.session.loggedin) {
        return res.redirect('/login.html');
    }
    res.sendFile( __dirname + "/" + "index_login.html" );  
 })  

app.get('/home', function(req, res) {
	if (req.session.loggedin) {
		res.render('home', {error: false, email: req.session.email});
	} else {
		res.send('Please login to view this page!');
	}
	res.end();
});
 
/* route to handle login and registration */
app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);
 
console.log(authenticateController);
app.post('/controllers/register-controller', registerController.register);
app.post('/controllers/authenticate-controller', authenticateController.authenticate);
app.listen(8012);
