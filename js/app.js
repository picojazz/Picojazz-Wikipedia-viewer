var result=[];
$(document).ready(function () {
	$("img").on('click',function () {
		$(this).addClass('animated fadeOutUp').css({display : "none"});
		$("input").css("display","block").addClass('animated fadeInUp').focus();
	});
 var search ="" ;
 var api ="https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="
 var call='&callback=JSON_CALLBACK';
 var myData;
 var all=[];
 //var result=[];
 var page = 'https://en.wikipedia.org/?curid=';
	$("input").keypress(function(e) {
            if(e.which == 10 || e.which == 13) {
                $(".search").css("top","1vh");
				search = $(this).val();

				$.ajax({

    url: api+search+call,
    data: myData,
    type: 'GET',
    crossDomain: true,
    dataType: 'jsonp',
    success: function(myData) {
	all = myData.query.pages;
		for (var i in all){
			result.push({title:all[i].title,content:all[i].extract,pageid:all[i].pageid});
		};
		for(var i in result){
			$(".resultAll ul").addClass("animated fadeInUp").append('<li><a href="'+page+result[i].pageid+'" target="_blank"><p class="title">'+result[i].title+'</p><p>'+result[i].content+'</p></a></li>');
		};


	},
    error: function() { alert('connection with wikipedia server Failed!'); }

});

            }

	});

});
//$(".resultAll ul").append('<li><p class="title">'+e.title+'</p><p>'+e.extract+'</p></li>');
