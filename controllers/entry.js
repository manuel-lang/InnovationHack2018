const { promisify } = require('util');
const Entry = require('../models/Entry');

exports.postSignup = (req, res, next) => {
  res.redirect('/');
};
