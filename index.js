const express = require('express');
const bodyParser = require("body-parser")
const port = 9000;
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
const db = require('./config/mongoose');
const passport = require('passport');
const passportLocal = require('./config/passportLocal');
const session = require('express-session');
app.use('/uploads',express.static(path.join(__dirname,'/uploads')));

app.use(session({
    secret : 'admin',
    saveUninitialized : true,
    resave : true ,
    cookie :{
        maxAge : 1000*60*60
    }
}));

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded());
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthentication);

app.use('/',require('./routes'));

app.listen(port, (err) => {
	if (err) {
		console.log(err);
		return false;
	}
	console.log("Server can run on port :- "+port);
});