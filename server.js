const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
var appBudget = require("./app.js");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const app = express();
const port = 3000;

// view engine setup
app.set('views', path.join(__dirname, 'pages'));
app.set('views', path.join(__dirname, 'partials'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("./app, appBudget");

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// basic server start
app.get("/", (req, res) => {
  res.send("This is an express server")
})

//basic listener
app.listen(port, () => {
  console.log("Server listening at port 3000")
})


module.exports = app;

