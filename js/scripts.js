$(document).ready(function() {
	$("form .button").on('click', function(e) {
		// e.stopPropagation();
		setTimeout(function() {
			$('.response').fadeOut();
		}, 5000);
	});

	$("form input.required").on('mouseleave', function() {
		var _this = this;
		setTimeout(function() {
			$("form input.required").removeClass('mce_inline_error');
			$('div.mce_inline_error').fadeOut();
		}, 5000);
	});

	$(".email-stay-up form .button").on('click', function(e) {
		// e.stopPropagation();
		// e.preventDefault();
		// signUp();
	});

	function signUp() {
		var data = {
			u: "179d87f4fae653e63e55f69a8",
			id: "eb21fec863",
			ht: "cc25d142200ea4b0a4120527fd9e2f7d7a4891c4:MTQ4ODIyMTM5NC4zNjY0",
			mc_signupsource: "hosted",
			EMAIL: $(".signup_form .email").val()
		}
		$.ajax({
			type: "POST",
			url: "http://swinglync.us15.list-manage.com/subscribe/post",
			data: data,
			success: function() {
				console.log('signUp success !');
			}
		});
	}
});