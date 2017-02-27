$(document).ready(function() {
	$("form .button").on('click', function() {
		setTimeout(function() {
			$('.response').fadeOut();
		}, 5000);
	})
});