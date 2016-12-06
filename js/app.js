$(document).ready(function () {
	$("img").on('click',function () {
		$(this).addClass('animated fadeOutUp').css({display : "none"});
		$("input").css("display","block").addClass('animated fadeInUp').focus();
	});

	$("button").on("click", function () {
		$(".search").css("top","1vh").addClass("animated ");
	});
});
