const React = require('react');
const ReactDOMServer = require('react-dom/server');
const router = require('express').Router();
const bcrypt = require('bcrypt');

const Registration = require('../views/Registration');
const { User } = require('../db/models');

router.get('/', (req, res) => {
  const registration = React.createElement(Registration, {});
  const html = ReactDOMServer.renderToStaticMarkup(registration);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.post('/', async (req, res) => {
  const { email, userName, password } = req.body;
  const haveUser = await User.findOne({
    where: {
      email,
    },
  });
  if (!haveUser) {
    const hashPassword = await bcrypt.hash(password, 10);
    await User.create({
      user_name: userName,
      password: hashPassword,
      email,
    });
    res.sendStatus(300);
    // res.redirect('/login');
  } else {
    res.redirect('/registration');
  }
});

module.exports = router;
