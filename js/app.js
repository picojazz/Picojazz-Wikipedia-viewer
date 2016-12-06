$(document).ready(function () {
	$("img").on('click',function () {
		$(this).addClass('animated fadeOutUp').css({display : "none"});
		$("input").css("display","block").addClass('animated fadeInUp').focus();
	});
 var search ="" ;
	$("input").keypress(function(e) {
            // Enter pressed?
            if(e.which == 10 || e.which == 13) {
                $(".search").css("top","1vh").addClass("animated ");
				search = $(this).val();

            }

	});
});
