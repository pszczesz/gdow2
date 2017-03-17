window.onload = start;
function start(){
    var radios = document.getElementsByName("czcionka");
    for(var i=0;i<radios.length;i++){
        radios[i].onclick = klik;
    }
}
function klik(){
    var tekst = document.getElementById("tekst");
    tekst.style.fontWeight = "normal";
    tekst.style.fontStyle = "normal";
    tekst.style.textDecoration = "none";
    switch(this.value){
        case "bold":
             tekst.style.fontWeight = "bold";
         break;
      case "italic":
            tekst.style.fontStyle = "italic";
         break;  
          case "underline":
            tekst.style.textDecoration = "underline";
         break;  
          case "overline":
            tekst.style.textDecoration = "overline";
         break;  
     default:
         alert("błąd");
    }
}

