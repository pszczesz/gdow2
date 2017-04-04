window.onload = start;

function start(){
    setInterval(czas,1000);
    document.getElementById("sprawdz").onclick = klik;
    SetDate(new Date());
}
function klik(){
    var data = document.getElementById("mojaData").value;
    SetDate(new Date(data));
}
function czas(){
    var d = new Date();
    document.getElementById("time")
            .innerHTML = d.toLocaleTimeString();
}
function SetDate(d){
    var dzien = getNazwaDnia(d.getDay());
    document.getElementById("dzien").innerHTML = dzien;
    document.getElementById("d").innerHTML = d.getDate();
    document.getElementById("d").style.color = getColor(d.getDay());
    var miesiac = getNazwaMiesiaca(d.getMonth());
    document.getElementById("miesiac").innerHTML = miesiac;
    document.getElementById("rok").innerHTML = d.getFullYear();
}
function getColor(d){
    if(d===0) return "red";
    if(d===6) return "green";
    return "black";
}
function getNazwaDnia(d){
    var dni = [
        "niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"];
    return dni[d];
}
function getNazwaMiesiaca(d){
    var miesiace = [
        "styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"];
    return miesiace[d];
}