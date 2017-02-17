var data = require('../messages.json');

exports.viewViewmessages = function(req, res) {
	//controller code goes here
	var messages = data.messagesList;
	var name = req.params.name;
	var index = -1;

	console.log("The project name is: " + name);

	for (var i = 0; i < messages.length; i++) {
		if (messages[i].name == name) {
			index = i;
			break;
		}
	}

	var message0 = messages[index];
	var message = message0.message;

	res.render('viewmessages', {
		'message': message,
		'viewmessageName': name
	});
}