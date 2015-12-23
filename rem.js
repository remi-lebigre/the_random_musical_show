var a_artists = [
['Bach',' img_Bach'],
['Beethoven','img_Beethoven'],
['Berlioz','img_Berlioz'],
['Brahms','img_Brahms'],
['Chopin','img_Chopin'],
['Debussy','img_Debussy'],
['Haendel','img_Haendel'],
['Haydn','img_Haydn'],
['Liszt','img_Liszt'],
['Lully','img_Lully'],
['Mahler','img_Mahler'],
['Monteverdi','img_Monteverdi'],
['Mozart','img_Mozart'],
['Offenbach','img_Offenbach'],
['Paganini','img_Paganini'],
['Patrick Sebastien','img_PatrickSebastien'],
['Prokofiev','img_Prokofiev'],
['Purcell','img_Purcell'],
['Ravel','img_Ravel'],
['Satie','img_Satie'],
['Schubert','img_Schubert'],
['Schumann','img_Schumann'],
['Strauss','img_Strauss'],
['Stravinski','img_Stravinski'],
['Verdi','img_Verdi'],
['Vivaldi','img_Vivaldi'],
['Wagner','img_Wagner'],
];


var a_prefixes = 
['la symphonie',
'la sarabande',
'le concerto',
'la chanson',
'une ode',
'le prélude',
'la fugue',
'la fantaisie',
'le lied',
'l opéra',
'le concert',
'la sonate',
'le ballet',
'la marche',
'l ouverture',
'la danse',
'la ballade',
'la valse ',
'fait du',
'le morceau'];

var a_genres = [
['punk','font_punk','back_punk'],
['hardcore','font_punk','back_punk'],
['ska','font_punk','back_punk'],
['grunge','font_punk','back_punk'],

['BEBOP','font_rock','back_rocka'],
['ROCKABILLY','font_rock','back_rocka'],
['ROCK N ROLL','font_rock','back_rocka'],
['ROCK','font_rock','back_rock'],

['hard rock','font_hard','back_metal'],

['Blues','font_blues','back_blues'],
['Soul','font_blues','back_blues'],
['Chicago Blues','font_blues','back_blues'],
['Soul Blues','font_blues','back_blues'],

['(COUNTRY)','font_country','back_country'],
['(BLUEGRASS)','font_country','back_country'],
['(FOLK)','font_country','back_country'],

['metal','font_metal','back_metal'],
['heavy metal','font_metal','back_metal'],
['trash metal','font_metal','back_metal'],

['BLACK METAL','font_Bmetal','back_Bmetal'],
['GOTH','font_Bmetal','back_Bmetal'],
['EMO','font_Bmetal','back_Bmetal'],

['Techno Minimaliste','font_8bit','back_8bit'],
['8Bit','font_8bit','back_8bit'],
['Chiptune','font_8bit','back_8bit'],

['eurodance','font_dance','back_dance'],
['dancefloor','font_dance','back_dance'],
['lounge','font_dance','back_dance'],

['disco','font_disco','back_disco'],
['funk','font_disco','back_disco'],
['disco funk','font_disco','back_disco'],

['K-pop','font_asiat','back_asiat'],
['J-pop','font_asiat','back_asiat'],

['reggae','font_zouk','back_reggae'],
['reggae','font_zouk','back_zouk'],
['reggae','font_zouk','back_zouk'],

['Polka','font_polka','back_polka'],
['Brassband','font_polka','back_polka'],

['Rai','font_rai','back_rai'],

['RAP','font_rap','back_rap'],
['GANGSTA','font_rap','back_rap'],
['HIP HOP','font_rap','back_rap'],
['RNB','font_rap','back_rap'],

['Jazz','font_jazz','back_jazz'],
['Bossa Nova','font_jazz','back_tango'],

['Baroque','font_class','back_class'],
['Classique','font_class','back_class'],
['Avant Gardiste','font_class','back_class'],

['techno','font_techno','back_techno'],
['hardtek','font_techno','back_techno'],
['electro','font_techno','back_techno'],
['dubstep','font_techno','back_techno'],

['Chant Gregorien','font_church','back_church'],
['Chant Gregorien','font_church','back_church'],

['Bal musette','font_bal','back_bal'],
['Ginguette','font_bal','back_bal'],

];



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

    document.getElementById("results").innerHTML = "<p class='lead' style='text-transform: uppercase; font-family:"+ a_genres[rand_genres][1]+"'>"+a_artists[rand_artists][0] + " " +  a_prefixes[rand_prefixes] + " " +  a_genres[rand_genres][0];
}


function start(){

}
