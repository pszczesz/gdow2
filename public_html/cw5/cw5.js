
window.onload = start;

function start(){
    var btn = document.getElementById("zatwierdz");
    btn.onclick = klik;
}
function klik(){
    var imie = document.getElementById("imie").value;
    var nazwisko = document.getElementById("nazwisko").value;
    var pensja = parseInt(document.getElementById("pensja").value);
    if(imie.trim()=="" || nazwisko.trim()=="" || isNaN(pensja)){
        document.getElementById("wynik").innerHTML = "Błędne dane!!!";
    }else{
        document.getElementById("wynik").innerHTML = "Dane: "
            +imie+" "+nazwisko+" pensja: "+pensja;
    }
    
}
