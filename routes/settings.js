var data = require('../data.json');

/*
 * GET home page.
 */

exports.viewSettings = function(req, res){
  res.render('settings', data);
};