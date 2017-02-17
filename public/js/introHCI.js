'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here
	$('#submitBtn').click(sendMessage);
}

function sendMessage(e) {
	e.preventDefault();
	$(".mymessage").append("How's it going?");
}