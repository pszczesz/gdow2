
window.onload = start;

function start(){
    document.getElementById("add").onclick = dodaj;
}

function dodaj(){
    var kol1 = document.getElementById("ko1").value;
    var kol2 = document.getElementById("ko2").value;
    var kol3 = document.getElementById("ko3").value;
    if(kol1.trim()==="" || kol2.trim()==="" || kol3.trim()===""){
        alert("Wpisz dane");
        return ;
    }
    var tab = document.getElementById("tab");
    var row = tab.insertRow(-1);
    var c1 = row.insertCell(0);
    var c2 = row.insertCell(1);
    var c3 = row.insertCell(2);
    c1.innerHTML = kol1;
    c2.innerHTML = kol2;
    c3.innerHTML = kol3;
}
