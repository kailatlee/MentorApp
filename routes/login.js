var data = require('../data.json');

/*
 * GET home page.
 */

exports.viewLogin = function(req, res){
  res.render('login', data);
};