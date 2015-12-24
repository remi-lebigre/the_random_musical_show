


function randomizator(){
    var rand_artists = parseInt(Math.random()*a_artists.length);
    var rand_prefixes = parseInt(Math.random()*a_prefixes.length);
    var rand_genres = parseInt(Math.random()*a_genres.length);
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
}



function start(){

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