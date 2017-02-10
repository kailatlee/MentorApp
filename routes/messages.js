exports.viewMessages = function(req, res) {
	//controller code goes here
	var messages = req.params.messages;
	console.log("The project name is: " + messages);
	res.render('messages', {
		'messageName': messages
	});
}
