String.prototype.supplant = function (o) {
    return this.replace(
        /\{([^{}]*)\}/g,
        function (a, b) {
            var r = o[b];
            return typeof r === 'string' || typeof r === 'number' ? r : a;
        }
    );
};
$(function () {
	$("#charsRemaining").text('140 chars remaining');
	$('#tweet').on("keyup", function  () {

		if (event.which == 13) {
			submitTweet ();
		}
		else {
			updateCharsRemaining(); 
		}
	} );

	$('#submit').on('click', function() {
		submitTweet();
	});
});


function updateCharsRemaining() {
	var tweetLength = $('textarea').val().length;
	var remaining = 140 - tweetLength;
	$("#charsRemaining").text(remaining + ' chars remaining');
	if (remaining<136) {
		$("#charsRemaining").addClass('warning');
	}
	else {
		$("#charsRemaining").removeClass('warning');
	}
}

function submitTweet () {
	var newTweet = $('#tweet').prop("value");
	var newLi = $('<li>{0}</li>'.supplant([newTweet]));
	$('#listTweets').prepend(newLi);  
	$('textarea').val('');
	updateCharsRemaining ();
};

/*$('<h1></h1>', {
	text: 'hello from the object', 
	border: '1px'
}).insertAfter('button');*/

  		 

	// $('<a href="{0}">{1}</a>'.supplant([url, content]));	