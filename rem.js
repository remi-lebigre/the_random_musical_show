


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

    document.getElementById("results").innerHTML = "<p class='lead' style='font-family:"+ a_genres[rand_genres][1]+"'>"+a_artists[rand_artists][0] + "<br>" +  a_prefixes[rand_prefixes] + "<br>" +  a_genres[rand_genres][0];
	document.getElementById("results_container").style.background ="url(src/back/"+a_genres[rand_genres][2]+".jpg) center center / cover no-repeat";	
	document.getElementById("img_artist").src ="src/compositeurs/"+a_artists[rand_artists][1]+".jpg";
}



function start(){

}
