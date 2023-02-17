require('@babel/register');

const ReactDOMServer = require('react-dom/server');
const React = require('react');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const session = require('express-session');
const NewsAPI = require('newsapi');
const { sequelize } = require('./db/models');
const logInCheck = require('./controllers/logInCheck');

const FileStore = require('session-file-store')(session);

const indexRouter = require('./routes/index');
const newsRouter = require('./routes/allnews');
const loginRouter = require('./routes/login');
const registrationRouter = require('./routes/registartion');
const logoutRouter = require('./routes/logout');
const accountRoutetr = require('./routes/account');
const { New } = require('./db/models');


const app = express();
const PORT = 3000;
const newsapi = new NewsAPI('ed0553e6b4e0483f80aa5e04b33d81c2');

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

app.listen(PORT, async () => {
  try {
    console.log(`Server is up at the  PORT ${PORT}`);
    await sequelize.authenticate();
    console.log('Database is connected');
    setInterval(async () => {
      const responce = await newsapi.v2.topHeadlines({
        category: 'sport',
        language: 'en',
      });
      Promise.all(responce.articles.map((el) => New.findOrCreate({
        where: {
          title: el.title,
          body: el.content,
          author: el.author,
          origin_url: el.url,
          publishedAt: el.publishedAt,
        },
      })));
    }, 86400000);
  } catch (error) {
    console.error('Database is not connected', error.message);
  }
});

app.use('/', indexRouter);
app.use('/allnews', logInCheck, newsRouter);
app.use('/login', loginRouter);
app.use('/registration', registrationRouter);
app.use('/logout', logoutRouter);
app.use('/account', accountRoutetr);
module.exports = app;
