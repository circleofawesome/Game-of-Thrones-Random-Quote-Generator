$(document).ready(function(){
	$(".buttons").hide().fadeIn(4000);
	var characters={
		1:["jon","http://i67.tinypic.com/v7rk3.png","#525252"],
		2:["tyrion","http://i65.tinypic.com/30di5fl.png","#D73224"],
		3:["jaime","http://i65.tinypic.com/30di5fl.png","#D73224"],
		4:["brynden","http://i66.tinypic.com/2i1kpba.png","#998BFA"],
		5:["cersei","http://i65.tinypic.com/30di5fl.png","#D73224"],
		6:["hound","http://i63.tinypic.com/2w5ung1.png","#FEE855"],
		7:["littlefinger","http://oi67.tinypic.com/oa9cu1.jpg","#B0CDFC"],
		8:["olenna","http://i65.tinypic.com/oh0gn5.png","#667932"],
		9:["renly","http://i68.tinypic.com/e7iknr.jpg","#EFAE2C"],
		10:["varys","http://i67.tinypic.com/2884j0g.png","#BF1E2E"],
		11:["bran","http://i67.tinypic.com/v7rk3.png","#525252"],
		12:["victarion","http://i68.tinypic.com/9gcxdu.png","#FBE106"],
		13:["sansa","http://i67.tinypic.com/v7rk3.png","#525252"],
		14:["davos","http://i68.tinypic.com/e7iknr.jpg","#EFAE2C"],
		15:["daenerys","http://i67.tinypic.com/2884j0g.png","#BF1E2E"]
	};

	var num=Math.floor(Math.random()*(16-1)+1);
	var quote;
	var author;

	function quotePage(){
		
		$.ajax({
		type:'GET',
		url:'http://cors.io/?u=https://got-quotes.herokuapp.com/quotes?char='+characters[num][0],
		dataType:'JSON',
		success:function(data){
			quote=data["quote"];
			author=data.character;
			var picture=characters[num][1];
			var backColor=characters[num][2];
			$("<p class='quote-text'>"+quote+"</p>").replaceAll(".quote-text").hide().fadeIn(2000);
			$("<p class='author-text'>"+author+"</p>").replaceAll(".author-text").hide().fadeIn(3000);
			$(".quote-text").css("color",backColor);
			$(".author-text").css("color",backColor);
			$(".sigil").append("<img class='pic' src="+picture+">").hide().fadeIn(1000);
			//$(".buttons").append("<button type='button' class='btn tweet'>Tweet!</button> <button type='button' class='btn more'>More</button>");
			//$(".buttons").hide().fadeIn(1000);
			$(".btn").css("background",backColor);
			//$("a.btn-twitter").replaceWith("<a class='btn btn-social-icon btn-twitter btn-lg' href='https://twitter.com/intent/tweet?text="+quote+"'><span class='fa fa-twitter'></span></a>"));
			//$("a[href='https://twitter.com/intent/tweet?text=default%20text']").attr("href","https://twitter.com/intent/tweet?text="+quote);
			$("a[href='https://twitter.com/intent/tweet?text=default%20text']").attr("href","https://twitter.com/intent/tweet?text="+quote);
			}

		});
			//$("a.btn-twitter").replaceAll("<a class='btn btn-social-icon btn-twitter btn-lg' href='https://twitter.com/intent/tweet?text="+quote+"'><span class='fa fa-twitter'></span></a>"));
	}
  		
	quotePage();

	$(".more").on("click",function(){
		$("a[href='https://twitter.com/intent/tweet?text="+quote+"']").attr("href","https://twitter.com/intent/tweet?text=default%20text");

	    num=Math.floor(Math.random()*(16-1)+1);

	    $(".pic").remove();
	    //$("a[href='https://twitter.com/intent/tweet?text="+quote+"']").attr("href","https://twitter.com/intent/tweet?text=default%20text");
	    quotePage();
	    //$("a[href='https://twitter.com/intent/tweet?text="+quote+"']").attr("href","https://twitter.com/intent/tweet?text=default%20text");
	});
	
});