window.onload = start;
function start() {
    document.getElementById("oblicz").onclick = klik;
}
function klik() {
    var temp = parseFloat(document.getElementById("temp").value);
    if (isNaN(temp)) {
        alert("Błędne dane!!");
        document.getElementById("wynik").innerHTML = "";
        return;
    }
    radios = document.getElementsByName("wyb");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            var wyb = radios[i].value;
            break;
        }
    }
    var wynik = document.getElementById("wynik");
    switch (wyb) {
        case "cel":
            wynik.innerHTML = (32 + 9 / 5 * temp) + " <sup>o</sup>F";
            break;
        case "far":
            wynik.innerHTML = (5 / 9 * (temp - 32)) + " <sup>o</sup>C";
            break;
        default :
    }
}


