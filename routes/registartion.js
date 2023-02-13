const React = require('react');
const ReactDOMServer = require('react-dom/server');
const router = require('express').Router();

const Registration = require('../views/Registration');

router.get('/', (req, res) => {
  const registration = React.createElement(Registration, {});
  const html = ReactDOMServer.renderToStaticMarkup(registration);
  res.write('<!DOCTYPE html>');
  res.end(html);
});
module.exports = router;