var data = require('../data.json');

/*
 * GET home page.
 */

exports.viewFAQ = function(req, res){
  res.render('FAQ', data);
};

function myFunction() {
	$(document).ready(function() {
		$(".dropbtn").dropdown("toggle");
	})}