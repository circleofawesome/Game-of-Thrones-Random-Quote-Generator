$(document).ready(function(){
	var characters={
		1:["jon","http://i67.tinypic.com/v7rk3.png","#E4E4E4"],
		2:["tyrion","http://i65.tinypic.com/30di5fl.png","#D73224"],
		3:["jaime","http://i65.tinypic.com/30di5fl.png","#D73224"],
		4:["brynden","http://i66.tinypic.com/2i1kpba.png","#998BFA"],
		5:["cersei","http://i65.tinypic.com/30di5fl.png","#D73224"],
		6:["hound","http://i63.tinypic.com/2w5ung1.png","#FEE855"],
		7:["littlefinger","http://oi67.tinypic.com/oa9cu1.jpg","#B0CDFC"],
		8:["olenna","http://i65.tinypic.com/oh0gn5.png","#DAE8B6"],
		9:["renly","http://i68.tinypic.com/e7iknr.jpg","#EFAE2C"],
		10:["varys","http://i67.tinypic.com/2884j0g.png","#BF1E2E"],
		11:["bran","http://i67.tinypic.com/v7rk3.png","#E4E4E4"],
		12:["victarion","http://i68.tinypic.com/9gcxdu.png","#FBE106"],
		13:["sansa","http://i67.tinypic.com/v7rk3.png","#E4E4E4"],
		14:["davos","http://i68.tinypic.com/e7iknr.jpg","#EFAE2C"],
		15:["daenerys","http://i67.tinypic.com/2884j0g.png","#BF1E2E"]
	};

	var num=Math.floor(Math.random()*(16-1)+1);

	$.ajax({
		type:'GET',
		url:'http://cors.io/?u=https://got-quotes.herokuapp.com/quotes?char='+characters[num][0],
		//url:'http://cors.io/?u=https://got-quotes.herokuapp.com/quotes?char=tyrion',
		dataType:'JSON',
		success:function(data){
			var quote=data["quote"];
			var author=data.character;
			//$("h1").append(quote);
			$("<p class='quote-text'>"+quote+"</p>").replaceAll(".quote-text");
			$("<p class='author-text'>"+author+"</p>").replaceAll(".author-text");
		}
	});
});