
window.onload = start;

function start(){
    var p1 = document.getElementById("first");
    var p2 = document.getElementById("second");
    p1.style.color = "black";
    p2.style.fontWeight = "normal";
    p1.onclick = klik;    
    p2.onclick = klik2;
}
function klik(){
    if(this.style.color==="black"){
        this.style.color="red";
    }else{
        this.style.color = "black";
    }
}
function klik2(){
    if(this.style.fontWeight==="normal"){
        this.style.fontWeight="bold";
    }else{
        this.style.fontWeight = "normal";
    }
}
