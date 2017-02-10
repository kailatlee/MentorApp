exports.viewViewmessages = function(req, res) {
	//controller code goes here
	var viewmessages = req.params.viewmessages;
	console.log("The project name is: " + viewmessages);
	res.render('viewmessages', {
		'viewmessageName': viewmessages
	});
}