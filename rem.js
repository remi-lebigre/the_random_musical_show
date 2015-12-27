if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

var rand_artists=0, rand_prefixes=0, rand_genres=0;
function randomizator(artist,prefix,genre){
    rand_artists = artist || parseInt(Math.random()*a_artists.length);
    rand_prefixes = prefix || parseInt(Math.random()*a_prefixes.length);
    rand_genres = genre || parseInt(Math.random()*a_genres.length);
    var newStyle = document.createElement('style');
	var font = a_genres[rand_genres][1];
	font += (font == "font_8bit") ? ".otf" : ".ttf";
	console.log("font:",font);
	newStyle.appendChild(document.createTextNode("@font-face {"+
		    "font-family: '" + a_genres[rand_genres][1] + "';"+
		    "src: url('src/font/" + font + "');"+
		"}"));

	document.head.appendChild(newStyle);

	var text_transform = a_genres[rand_genres][3];
	if(text_transform==1){
		text_transform = "text-transform:uppercase;";
	}else if(text_transform==2){
		text_transform = "text-transform:lowercase;";
	}else{
		text_transform ="";
	}
	
    document.getElementById("results").innerHTML = "<p class='lead' style='"+text_transform+"font-family:"+ a_genres[rand_genres][1]+"'>"+a_artists[rand_artists][0] + "<br>" +  a_prefixes[rand_prefixes] + "<br>" +  a_genres[rand_genres][0];
	document.getElementById("results_container").style.background ="url(src/back/"+a_genres[rand_genres][2]+".jpg) center center / cover no-repeat";	
	document.getElementById("img_artist").src ="src/compositeurs/"+a_artists[rand_artists][1]+".png";
	
	$('#results p').fitText({ maxFontSize: '32px' });
}

/*
function save_dat_shit(){
	html2canvas(document.body).then(function(canvas) {
    document.body.appendChild(canvas);
    
    //var imgdata = canvas.toDataURL('image/png');
    //var newdata = imgdata.replace(/^data:image\/png/,'data:application/octet-stream');
    //document.body.innerHTML += "<a id='dl_image' download='random_musical_show.png' href='"+newdata+"'>Télécharger</a>";       
       
    var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    //document.body.innerHTML += "<a id='dl_image' download='random_musical_show.png' href='"+image+"'>Télécharger</a>";       

    window.location.href=image;
   canvas.parentElement.removeChild(canvas);
});
}*/
var clip = null;
$(function(){
	var params = $_GET('p');
	if(params){
	var a_rands = params.split(',');
	if(a_rands.length == 1) a_rands = params.split('%2C');
		randomizator(parseInt(a_rands[0]),parseInt(a_rands[1]),parseInt(a_rands[2]));
	}
	clip = new Clipboard('#share');
});

function share(){
	var text = 'http://lebig.re/sites/randommusicalshow/?p='+rand_artists+','+rand_prefixes+','+rand_genres;
	clip.text = function() {
            return text;
        }
    clip.on('success',function(){
		  clip.off('success');
	  $('#share').before('<div class="btn btn-success">Copié ! Colle le lien sur les réseaux</div>');
	  $('.btn-success').delay(1000).fadeOut(300,function(){
		  $(this).remove();
	  });    
	});
}