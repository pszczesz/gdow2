window.onload = start;

function start(){
    document.getElementById("obrazek").onclick = klik;
} 

function klik(){
    var src = this.getAttribute("src");
    if(src==="images/1.jpg"){
        this.setAttribute("src","images/2.jpg");
    }else{
       this.setAttribute("src","images/1.jpg"); 
    }
}