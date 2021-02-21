var express=require("express");
var bodyParser=require('body-parser');

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

app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
}) 

app.get('/register.html', function (req, res) { 
    if(req.session.loggedin) {
        return res.redirect('/index_login.html');
    }
    res.sendFile( __dirname + "/" + "register.html" );  
 })  
 
app.get('/login.html', function (req, res) { 
    if(req.session.loggedin) {
        return res.redirect('/index_login.html');
    } 
   res.sendFile( __dirname + "/" + "login.html" );  
})  

app.get('/index_login.html', function (req, res) { 
    if(!req.session.loggedin) {
        return res.redirect('/login.html');
    }
    res.sendFile( __dirname + "/" + "index_login.html" );  
 })  

app.get('/home', function(req, res) {
	if (req.session.loggedin) {
		res.send('Welcome back, ' + req.session.email + '!' + 'y id numero' + req.session.userid);
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
