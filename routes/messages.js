var messagesList = require('../messages.json');

exports.viewMessages = function(req, res) {
	//controller code goes here
	res.render('messages', messagesList);

}
