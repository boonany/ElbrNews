const router = require('express').Router();

router.get('/', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('user_sid');
    res.redirect('/login');
  });
});

module.exports = router;
