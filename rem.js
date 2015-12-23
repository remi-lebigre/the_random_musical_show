var a_artists = ["mozart"];
var a_prefixes = ["la comédie"];
var a_genres = [
    ["punk","Arial",'image_1'],
    ["classic","Helvetica",'image_1']
];



function randomizator(){
    var rand_artists = parseInt(Math.random()*a_artists.length);
    var rand_prefixes = parseInt(Math.random()*a_prefixes.length);
    var rand_genres = parseInt(Math.random()*a_genres.length);
    document.getElementById("results").innerHTML = "<p class='lead' style='text-transform: uppercase; font-family:"+ a_genres[rand_genres][1]+"'>"+a_artists[rand_artists] + " " +  a_prefixes[rand_prefixes] + " " +  a_genres[rand_genres][0];
}
