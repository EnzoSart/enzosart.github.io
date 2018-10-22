var juegosStr = '[{"title":"Hollow Knight", "ranking":"90", "genre":"Adventure, Action, Indie", "Foto1":"images/hollowknight.jpg", "description":"Hollow Knight is a classically styled 2D action adventure across a vast interconnected world. Explore twisting caverns, ancient cities and deadly wastes; battle tainted creatures and befriend bizarre bugs; and solve ancient mysteries at the kingdom\'s heart."}]';
var juegos = JSON.parse(juegosStr);

document.addEventListener("DOMContentLoaded", function(){
    var titulo = document.getElementById("title");
    titulo.innerHTML = juegos[0].title;

    var categoría = document.getElementById("meter");
    categoría.setAttribute("value", juegos[0].ranking);

    var género = document.getElementById("genre");
    género.innerHTML = juego[0].genre;
})