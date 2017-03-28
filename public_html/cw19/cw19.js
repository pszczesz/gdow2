window.onload = start;

function start(){
   var dds = document.getElementsByTagName("dd");
   for(var i=0;i<dds.length;i++){
       dds[i].style.display = "block";
   }
   var dts = document.getElementsByTagName("dt");
   for(var i=0;i<dts.length;i++){
       dts[i].onclick = function (){
          if(this.nextElementSibling.style.display === "block"){
              this.nextElementSibling.style.display = "none";
          }else{
               this.nextElementSibling.style.display = "block";
          }
       };
   }
}

