window.onload = start;
function start() {
    document.getElementById("btn").onclick = function(){
        clearInterval(pid);
    };
    var x = 10;
    var y = 10;
    var radius = 4;
    var v=10;
    var pid = setInterval(function () {
        var canvas = document.getElementById("can");
        var context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);        
        if((x-radius)>270 && v>0){v = -v;  }
        if(x-radius<10 && v<0){ v = -v; }
            x+=v;           
            Rysuj(x, y,radius,context); 
    }, 100);
}
function Rysuj(x, y,radius,context) {
    var centerX = x;
    var centerY = y;
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);    
    context.lineWidth = 1;
    context.strokeStyle = '#003300';
    context.stroke();
}