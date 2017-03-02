'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

var choice;
/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here
	$('.backimg').click(back);
	$('#submitBtn').click(sendMessage);
	$('#saveBtn').click(addMajor);
	$('#saveBtn').click(addName);
	$('#saveBtn').click(addDescription);
	$('#message').keypress(function(e) {
		if (e.which == 13) {
			sendMessage(e);
		}
	});
	$('.FAQdrop').click(addFAQDetails);

	$($('.item')[0]).addClass("active");
	console.log("works");

}

function back() {
	window.history.back();
}

function addFAQDetails(e){
	e.preventDefault();

	var faqID = $(this).closest('.dropdown').attr('id');
	var idNumber = faqID.substr('project'.length);

	$get("/FAQ/" + idNumber, callBackFn);
}

function sendMessage(e) {
	e.preventDefault();

	var receiver = $("h5").html();
	var message = $("#message").val();
	if (message == "") {
		console.log("No message entere!");
		return;
	} else {
		$("#myMessage").append("<br/>" + $("#message").val());
	}

	document.getElementById("message").value = "";
}

function addMajor(e) {
	e.preventDefault();
	$(".project").html($("#userMajor").val() + "<br/>");
}

function addName(e) {
	e.preventDefault();
	$(".nameInput").html($("#userName").val() + "<br/>");
}

function addDescription(e) {
	e.preventDefault();
	$(".descriptionInput").html($("#userDescription").val() + "<br/>");
}


$('#mentor').click(function(e) {
	var button1 = document.getElementById("selectBtn");
	button1.innerText = "Mentor";
});

$('#mentee').click(function(e) {
	var button1 = document.getElementById("selectBtn");
	button1.innerText = "Mentee";
});

function displayMentors() {
	//display mentors with status 0
	console.log("mentor pressed");
  // $.get("/data.json", function(result){
  //   console.log(result);
  // });
 choice = 1;
 $.get("/data.json", callBackFn);


}

function displayMentees() {
	//display mentees with status 1
	var array;
	console.log("mentee pressed");
  $.get("/data.json", function(result){
    console.log(result);
    // array = result;
    for (var i = 0; i < result.length; i++) { 
    console.log("hi");
  }
  });


}

function callBackFn(result) {
	console.log("Here");
	console.log(result['matchesList']);
	var array = result['matchesList'];
	var status;
	var name;
	for (var i = 0; i < array.length; i++) { 
    	status = array[i].status;
    	name = array[i].name;
    	console.log(status);
    	console.log(name);
    	console.log($("#" + name));
    	// if (status == 1) {
    	// 	console.log($(name));
    	// 	$(name).show();
    	// } else {
    	// 	console.log("Here 2");
    	// 	$(name).;
    	// }
    	if (status != 1) {
    		$(".card").hide();
    	}
  }
}

// SORT THROUGH MATCHES - 0 IS MENTOR AND 1 IS MENTEE
  // function displayMatches() {
  // 	$("#mentee").click(function(e){
  //   //do something
  //     e.preventDefault();
  //     console.log("Mentee clicked");
  //     // $(".btn").innerText = 'Mentee';
  //   });
  //   $("#mentor").click(function(e){
  //   //do something
  //     e.preventDefault();
  //     console.log("Mentor clicked");
  //   });
  // }

  $.get("/data.json", function(result){
    console.log(result);
  });




// $('#mentor').click(function(e) {
//     alert('alerted');
//     console.log("yes");
//     e.preventDefault();// prevent the default anchor functionality
// });


