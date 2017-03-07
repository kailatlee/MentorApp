var data = require('../data.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
  data["carousel"] = false;
  res.render('index', data);
};

exports.viewCarousel = function(req,res){
  data["carousel"] = true;
  res.render('index', data);
}
