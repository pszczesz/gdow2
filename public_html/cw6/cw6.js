window.onload = start;
function start(){
   document.getElementById("oblicz").onclick = oblicz; 
}
function oblicz(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    if(isNaN(a) || isNaN(b)){
        document.getElementById("wynik").innerHTML = "Błędne dane";
    }else{
        document.getElementById("wynik").innerHTML = a+" <sup>"
                    +b+"</sup> = "+Math.pow(a,b);
    }
}

