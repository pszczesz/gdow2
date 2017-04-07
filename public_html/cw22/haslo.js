window.onload = start;
function start() {
    document.getElementById("sprawdz").onclick = sprawdz;
}
function sprawdz() {
    var haslo = document.getElementById("haslo").value;
    if (haslo.trim() === "") {
        document.getElementById("wynik").style.color = "black";
        document.getElementById("wynik").innerHTML = "WPISZ HASŁO!";
        return;
    }
    var wzorzec = /\d/;
    if (wzorzec.test(haslo) && haslo.length >= 7) {
        document.getElementById("wynik").style.color = "green";
        document.getElementById("wynik").innerHTML = "DOBRE";
        return;
    }
    if (wzorzec.test(haslo) && haslo.length >= 4) {
        document.getElementById("wynik").style.color = "blue";
        document.getElementById("wynik").innerHTML = "ŚREDNIE";
        return;
    }
    document.getElementById("wynik").style.color = "yellow";
    document.getElementById("wynik").innerHTML = "SŁABE";
}