require('@babel/register');

const ReactDOMServer = require('react-dom/server');
const React = require('react');

const express = require('express');
const logger = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const indexRouter = require('./routes/index');
const newsRouter = require('./routes/allnews');

const app = express();
const PORT = 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(
  {
    store: new FileStore(),
    name: 'user_sid',
    secret: process.env.SESSION_SECRET ?? 'test',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    },
  },
));

app.listen(PORT, () => {});

app.use('/', indexRouter);
app.use('/allnews', newsRouter);

module.exports = app;
