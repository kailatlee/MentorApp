var data = require('../messages.json');
var sendData = require('../sentMessages.json');

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

	if (index == -1) {
		var newMessage = {
			name: name,
			image: "http://mentorapp5.herokuapp.com/images/head.jpg",
			message: ""
		}
		var newReceiver = {
			receiver: name,
			message: ""
		}

		data.messagesList.push(newMessage);
		sendData.sentList.push(newReceiver);

	} else {
		var index2 = -1;
		var myMessages = sendData.sentList;
		for (var j = 0; j < myMessages.length; j++) {
			if (myMessages[j].receiver == name) {
				console.log("Here");
				index2 = j;
				break;
			}
		}

		var mymessage = "";

		if (index2 == -1) {

			var newReceiver = {
				receiver: name,
				message: ""
			}
			index2 = j + 1;
			sendData.sentList.push(newReceiver);

		} else {
			var mymessage0 = myMessages[index2];
			var mymessage = mymessage0.message;
		}

		var message0 = messages[index];
		var message = message0.message;

	}

	res.render('viewmessages', {
		'message': message,
		'mymessage': mymessage,
		'viewmessageName': name
	});
}