// app.js
const express = require('express');
require("dotenv").config();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
 
//const session = require('express-session');
//const MySQLStore = require('express-mysql-session')(session);

// routes for the application
const indexRouter = require('./routes/index');

const app = express();


/*app.use(session({
   // key: 'session_cookie_name',
    //secret: 'your_secret_key', // Replace with a secret key of your choice
    //store: sessionStore,
    //resave: false,
    //saveUninitialized: false,
    //cookie: {
      //maxAge: 1000 * 60 * 60 * 24 
    //}}));
  */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});
//c/2onst env = process.env.NODE_ENV || "development";
// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
