window.onload = start;
function start(){
    document.getElementById("generuj").onclick = klik;
}
function klik(){
    var cols = parseInt(document.getElementById("col").value);
    var rows = parseInt(document.getElementById("row").value);
    if(isNaN(rows) || isNaN(cols)){        
        document.getElementById("wynik").innerHTML = "Błędne dane";
    }else{
        document.getElementById("wynik").innerHTML = GenerTab(rows,cols);
    }
}
function GenerTab(rows,cols){
    rows = rows<=0 || rows>50 ? 10 :  rows;
    cols = cols<=0 || cols>50 ? 10 :  cols;
    var html = "<table>\n";
    for(var i=1;i<=rows;i++){
        html += "<tr>\n";
        for(var j=1;j<=cols;j++){
            var first = (i==1 || j==1) ? " class='first'":"";
            html += "<td"+first+">"+(i*j)+"</td>\n";
        }
        html += "</tr>\n";
    }
    return html+"</table>\n";
}
