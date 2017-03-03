'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

var messageName;

function initializePage() {
  $.get("/messages.json", setUpPage);
  $('.project').click(notify);
}

function setUpPage(result) {
  var messagesArray = result['messagesList'];
  console.log(result);
  for (var i = 0; i < messagesArray.length; i++) {
    var theirName = messagesArray[i].name;
    var name = theirName.split(' ')[0];
     if (messagesArray[i].notify == "zero") {
      console.log("Here");
      $("#" + name + " #messageM").css({
        'color': 'black',
        'font-weight': 'bold',
        'font-size': '14px'
      });
    } else {
      $("#" + name + " #messageM").css({
        'color': 'black',
        'font-size': '12px'
      });
    }
  }
}

function notify(e) {
  console.log("Here");
	messageName = $(this).closest('.project').attr('id');
	$.get("/messages.json", updateNotify);
}

function updateNotify(result) {
	console.log("Here");
	var messages = result['messagesList'];
	for (var i = 0; i < messages.length; i++) {
    var name = messages[i].name.split(' ')[0];
		if (name == messageName) {
			messages[i].notify = "one";
      console.log("Eneter");
			break;
		}
	}
  console.log(messages[1].notify);
}