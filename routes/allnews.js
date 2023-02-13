const ReactDOMServer = require('react-dom/server');
const React = require('react');
const router = require('express').Router();

const Allnews = require('../views/news/Main')


router.get('/', (req, res) => {
  const main = React.createElement(Allnews, {});
  const html = ReactDOMServer.renderToStaticMarkup(main);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.post('/', (req, res) => {
  console.log(req.body);
});



module.exports = router;