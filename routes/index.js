const router = require('express').Router();

router.get('/', (req, res) => {
  res.redirect('/allnews');
});

module.exports = router;
