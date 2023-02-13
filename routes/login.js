const React = require('react');
const ReactDOMServer = require('react-dom/server');
const router = require('express').Router();

const Login = require('../views/Login');

router.get('/', (req, res) => {
  const login = React.createElement(Login, {});
  const html = ReactDOMServer.renderToStaticMarkup(login);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = router;
