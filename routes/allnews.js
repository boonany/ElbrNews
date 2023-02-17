const ReactDOMServer = require('react-dom/server');
const React = require('react');
const router = require('express').Router();

const { New } = require('../db/models');
const { Connect } = require('../db/models');
const Allnews = require('../views/news/Main');
const Shownews = require('../views/news/Shownews');

router.get('/', async (req, res) => {
  const find = await New.findAll({});
  const result = find.map((el) => el.get({ plain: true }));
  const session = req.session?.name;
  const main = React.createElement(Allnews, { result, session });
  const html = ReactDOMServer.renderToStaticMarkup(main);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.get('/:id', async (req, res) => {
  const session = req.session?.name;
  const find = await New.findOne({
    where: {
      id: req.params.id,
    },
  });
  const shownews = React.createElement(Shownews, { find, session });
  const html = ReactDOMServer.renderToStaticMarkup(shownews);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.post('/:id', async (req, res) => {
  try {
    console.log(req.params);
    const [favNews, created] = await Connect.findOrCreate({
      where: {
        user_id: req.session.name.id,
        news_id: req.params.id,
      },
    });
    res.json({ created });
  } catch (error) {
  }
});

module.exports = router;
