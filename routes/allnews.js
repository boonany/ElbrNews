const ReactDOMServer = require('react-dom/server');
const React = require('react');
const router = require('express').Router();

const NewsAPI = require('newsapi');

const newsapi = new NewsAPI('ed0553e6b4e0483f80aa5e04b33d81c2');

const Allnews = require('../views/news/Main');
const Shownews = require('../views/news/Shownews');

router.get('/', async (req, res) => {
  const responce = await newsapi.v2.topHeadlines({
    category: 'technology',
    language: 'en',
  });
  // console.log(responce);
  // cosnt {url} = responce.articles
  const main = React.createElement(Allnews, { responce });
  const html = ReactDOMServer.renderToStaticMarkup(main);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.post('/', async (req, res) => {

});

router.get('/:id', (req, res) => {
  const shownews = React.createElement(Shownews, {});
  const html = ReactDOMServer.renderToStaticMarkup(shownews);
  res.write('<!DOCTYPE html>');
  res.end(html);
});
module.exports = router;
