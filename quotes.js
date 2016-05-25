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
	var full_quote;

	function quotePage(){
		
		$.ajax({
		type:'GET',
		url:'http://cors.io/?u=https://got-quotes.herokuapp.com/quotes?char='+characters[num][0],
		dataType:'JSON',
		success:function(data){
			quote=data["quote"];
			author=data.character;
			full_quote=quote+"   -"+author;
			var picture=characters[num][1];
			var backColor=characters[num][2];
			$("<p class='quote-text'>"+quote+"</p>").replaceAll(".quote-text").hide().fadeIn(2000);
			$("<p class='author-text'>"+author+"</p>").replaceAll(".author-text").hide().fadeIn(3000);
			$(".quote-text").css("color",backColor);
			$(".author-text").css("color",backColor);
			$(".sigil").append("<img class='pic' src="+picture+">").hide().fadeIn(1000);
			$(".btn").css("background",backColor);
			$("a[href='https://twitter.com/intent/tweet?text=default%20text']").attr("href","https://twitter.com/intent/tweet?text="+full_quote);
			}
		});
	}
  		
	quotePage();

	$(".more").on("click",function(){
		$('a[href="https://twitter.com/intent/tweet?text='+full_quote+'"]').attr('href','https://twitter.com/intent/tweet?text=default%20text');
	    num=Math.floor(Math.random()*(16-1)+1);
	    $(".pic").remove(); 
	    quotePage();
	});
});