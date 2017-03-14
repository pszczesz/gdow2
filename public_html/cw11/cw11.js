window.onload = start;

function start(){
    var kolor = document.getElementById("kolory").value;
    document.body.style.backgroundColor = kolor;
    document.getElementById("kolory").onchange = zmiana;
}
function zmiana(){
   var kolor = document.getElementById("kolory").value;
    document.body.style.backgroundColor = kolor; 
}


