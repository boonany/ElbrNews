module.exports = function logInCheck(req, res, next) {
  if (!req.session.name) {
    res.redirect('/login');
    return;
  } else {
    next();
  }
};
