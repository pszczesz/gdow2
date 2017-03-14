window.onload = start;

function start(){
    var kolor = document.getElementById("kolory").value;
    document.body.style.backgroundColor = kolor;
    document.getElementById("kolory").onchange = zmiana;
    var size = document.getElementById("rozmiar").value;
    document.getElementById("tekst").style.fontSize = size;
    document.getElementById("rozmiar").onchange = wielkosc;
}
function wielkosc(){
    var size = document.getElementById("rozmiar").value;
    document.getElementById("tekst").style.fontSize = size;
}
function zmiana(){
   var kolor = document.getElementById("kolory").value;
    document.body.style.backgroundColor = kolor; 
}


