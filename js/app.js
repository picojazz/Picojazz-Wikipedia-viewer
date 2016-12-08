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
 var page = 'https://en.wikipedia.org/?curid=';
	var wiki = function (){
		$(".search").css("top","1vh");


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
			$(".resultAll").append('<div class="res animated fadeInUp"><li><a href="'+page+result[i].pageid+'" target="_blank"><p class="title">'+result[i].title+'</p><p>'+result[i].content+'</p></a></li></div>');
		};
        all=[];
		result=[];

	},
    error: function() { alert('connection with wikipedia server Failed!'); }

});

	};
	$(document).keypress(function(e) {
		search = $("input").val();
            if(e.which == 10 || e.which == 13) {
					$(".res").removeClass("fadeInUp").addClass("fadeOutRight");
				    $(".resultAll").empty();
				    $("input").empty();
					wiki();


            }

	});

});
//$(".resultAll ul").append('<li><p class="title">'+e.title+'</p><p>'+e.extract+'</p></li>');
