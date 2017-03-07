
window.onload = start;

function start(){
    var rozmiar=30;
    document.getElementById("scene").innerHTML = generuj(rozmiar);
    var tds = document.getElementsByTagName("td");
    for(var i=0;i<tds.length;i++){
        tds[i].onmousedown = klik;
        tds[i].oncontextmenu = function(ev){
          ev.preventDefault();
          return false;
        };
    }
}
function klik(event){
    switch(event.button){
        case 0: 
            this.innerHTML = "<img src='krzyzyk.png'/>";
            break;
        case 1: 
            this.innerHTML = "<img src='kolko.png'/>";
            return false;
            break;  
        case 2: 
            this.innerHTML = "";            
            break; 
        default : alert("nie mam pojęcia");
    }
}
function generuj(rozmiar){
    var html = "<table>";
    for(var i=0;i<rozmiar;i++){
        html += "<tr>";
        for(var j=0;j<rozmiar;j++){
            html += "<td></td>";
        }
        html += "</tr>";
    }
    return html + "</table>";
}
