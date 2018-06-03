const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const healthcheckRouter = require('./routes/healthcheck');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
const isProduction = app.get('env') === 'production';

if (isProduction) {
  app.set('x-powered-by', false);
}

app.use(logger(isProduction ? 'tiny' : 'dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../dist/')));

app.use('/healthcheck', healthcheckRouter);
app.use('/api', indexRouter);
app.use('/api/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  let body = `<h1>${status} ${err.message}</h1>`;
  if (!isProduction) {
    body += `<pre>${err.stack}</pre>`;
  }

  res.status(status);
  res.send(body);
});

module.exports = app;
