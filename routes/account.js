const React = require('react');
const ReactDOMServer = require('react-dom/server');
const router = require('express').Router();
const { User } = require('../db/models');
const { Connect } = require('../db/models');
const { New } = require('../db/models');

const Account = require('../views/Account');

router.get('/', async (req, res) => {
  const session = req.session?.name;
  const find = await User.findOne({
    include: {
      model: New,
    },
    where: {
      id: req.session.name.id,
    },
  });
  const result = find.News.map(el => el.get({ plain: true }));
  const account = React.createElement(Account, { session, result });
  const html = ReactDOMServer.renderToStaticMarkup(account);
  res.write('<!DOCTYPE html');
  res.end(html);
});

router.delete('/', async (req, res) => {
  try {
    const { z } = req.body;
    console.log(req.body);
    const destroy = await Connect.destroy({
      where: {
        user_id: req.session.name.id,
        news_id: z,
      },
    });
    res.json(true)
  } catch (error) {

  }
});

module.exports = router;
