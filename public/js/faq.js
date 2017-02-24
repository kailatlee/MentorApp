
function renderQ1(){
	var answer = "MentorApp is a mobile app that provides users the opportunity to connect with those in their professional network and exchange career-oriented advice and aspirations.";
	//find the current div
	$("#answer1").html(answer);
	$("#drop1").toggle();
}


function renderQ2(){
	var answer2 = "Anyone is welcome to create a profile and start connecting!";
	//find the current div
	$("#answer2").html(answer2);
	$("#drop2").toggle();
}

// var list = require('../FAQ.json');

// exports.FAQInfo = function(req, res) {
// 	var faqID = req.params.id;
// 	faqID = parseInt(faqID);

// 	var faq = list[faqID-1];
// 	res.json(faq);
// }