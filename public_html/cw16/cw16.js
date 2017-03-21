window.onload = start;
function start(){   
    var wiosna =  [
        "green",
        "yellow",
        "purple",
        "orange",
         "red",
         "#42f498",
         "#d4eaaf",
         "#ea794f",
         "#f7cb2c",
         "#80ed04" 
    ];    
    setInterval(zmiana,3000);
    function zmiana(){
        // alert("dfgdfg");
        var index = Math.floor(Math.random()*wiosna.length);
        document.body.style.backgroundColor = wiosna[index];
    }
}

