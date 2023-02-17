const React = require('react');
const ReactDOMServer = require('react-dom/server');
const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const Login = require('../views/Login');

router.get('/', (req, res) => {
  const login = React.createElement(Login, {});
  const html = ReactDOMServer.renderToStaticMarkup(login);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.post('/', async (req, res) => {
  const { userName, password } = req.body;
  try {
    const check = await User.findOne({
      where: {
        user_name: userName,
      },
    });
    if (!check) return res.status(401).json({ message: 'Неверный логин или пароль' });
    const validPassword = await bcrypt.compare(password, check.password);
    if (!validPassword) return res.status(401).json({ message: 'Неверный логин или паррль' });
    req.session.name = { id: check.id, name: check.user_name };
    console.log(req.session.name);
    req.session.save();
    res.sendStatus(300);
    // res.redirect('/');
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
