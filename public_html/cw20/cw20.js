window.onload = start;

function start(){
    document.getElementById("koduj").onclick = klik;
}
function klik(){
    var tekst = document.getElementById("tekst").value;
    var klucz = parseInt(document.getElementById("klucz").value);
    if(!isNaN(klucz) && tekst.trim().length>0){
        document.getElementById("wynik").innerHTML = koduj(tekst,klucz);
    }else{
        document.getElementById("wynik").innerHTML = "BŁĘDNE DANE!!";
    }
}
function koduj(tekst, klucz){
    klucz = klucz<0 ? -klucz : klucz;
    klucz = klucz%26;
    var wynik="";
    for(var i=0; i<tekst.length;i++){
        wynik+=kodujZnak(tekst.charAt(i),klucz);
    }
    return wynik;
}
function kodujZnak(znak,klucz){
    if(czyLitera(znak)){
        var wynik = String.fromCharCode(znak.charCodeAt(0)+klucz);
        return czyLitera(wynik)? wynik : String.fromCharCode(wynik.charCodeAt(0)-26);
    }else {
        return znak;
    }
}
function czyLitera(znak){
     return /^[a-zA-Z]*$/.test(znak);
   // return znak.toLowerCase()>="a" && znak.toLowerCase()<="z";
}