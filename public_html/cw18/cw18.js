window.onload = start;

function start(){
    var pokaz1 = true;
    var pokaz2 = true;
    var divs = document.getElementsByTagName("div");
    if(divs.length>0){
        var ch1 = divs[0].children;
        divs[0].onclick = function (){
            if(pokaz1){                
                pokaz1 = false;
                for(var i=0;i<ch1.length;i++){
                    ch1[i].style.display = "none";
                }
            }else{
                pokaz1 = true;
                for(var i=0;i<ch1.length;i++){
                    ch1[i].style.display="block";
                }
            }
        };
        var ch2 = divs[1].children;
        divs[1].onclick = function (){
            if(pokaz2){               
                pokaz2 = false;
                for(var i=0;i<ch2.length;i++){
                    ch2[i].style.display = "none";
                }
            }else{
                pokaz2 = true;
                for(var i=0;i<ch2.length;i++){
                    ch2[i].style.display="block";
                }
            }
        };
    }
}

