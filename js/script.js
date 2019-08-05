$(document).ready(function () {

	/* $.getJSON('../json/postalcode.json',function(data){
	console.log(data);
	}); */


	// Listen to click event on the submit button
	$('#submitButton').click(function (e) {

		e.preventDefault();

		$.getJSON('../json/postalcode.json', function (data) {

			var i, result;
			for (i in data) {
				if ($(".validateInputCode").val() == data[i].pc) {
					result = 1;
					break;
				}
				else {
					result = 0;
				}
			}
			if (result == 1) {
				$("#modal-positive").addClass("is-active ");
			}
			else {
				$("#modal-negative").addClass("is-active ");
			}

		});
	});



	$(".modal-background").click(function () {
		$("#modal-positive").removeClass("is-active");
	});
	$(".delete").click(function () {
		$("#modal-positive").removeClass("is-active");
	});
	$(".onceAgain").click(function () {
		$("#modal-negative").removeClass("is-active");
	});
	$(".modal-background").click(function () {
		$("#modal-negative").removeClass("is-active");
	});
	$(".delete").click(function () {
		$("#modal-negative").removeClass("is-active");
	});




	if ($(window).width() > 1024) {
		$("body").addClass("desktop");
		$(document).scroll(function () {

			var y = $(this).scrollTop();
			if (y < 900) {
				$('.win-customer').fadeOut(500);
				$('.contact-form').fadeOut(500);
				$('.time-table-section').slideUp(500);

			} else {
				$('.win-customer').fadeIn("slow");
				$('.contact-form').fadeIn(3000);
				$('.time-table-section').slideDown(2000);
			}
		});
	}
	else if ($(window).width() < 1025 && $(window).width() > 767) {
		$("body").addClass("iPad");
		$(document).scroll(function () {

			var y = $(this).scrollTop();
			if (y < 600) {
				$('.win-customer').fadeOut(500);
				$('.contact-form').fadeOut(500);
				$('.time-table-section').slideUp(500);

			} else {
				$('.win-customer').fadeIn("slow");
				$('.contact-form').fadeIn(3000);
				$('.time-table-section').slideDown(2000);
			}
		});
	}
	else if ($(window).width() < 768) {
		$("body").addClass("mobile");
		$(document).scroll(function () {

			var y = $(this).scrollTop();
			if (y < 1500) {
				// $('.win-customer').fadeOut("slow");
				// $('.contact-form').fade(500);
				$('.time-table-section').fadeOut(500);

			} else {
				// $('.win-customer').fadeIn("slow");
				// $('.contact-form').slideDown(5000);
				$('.time-table-section').fadeIn(2000);
			}
		});
	}
});