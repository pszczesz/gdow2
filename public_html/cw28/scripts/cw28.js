
$(document).ready(function () {
    $(window).resize(function () {
           // alert("resize");
           $("#obiekt").css( { left: "0px", top: "0px" } )  ; 
    });
    $("#start").click(function () {
        
        var pos = $("#obiekt").position().left;
        console.log($("#scene").width());
        var sceneWidth = $("#scene").width(); 
        var delta = "="+(sceneWidth-60);
        if (pos < sceneWidth-200) {
           
            $("#obiekt").animate({left: "+"+delta}, 2000);
        } else {            
            $("#obiekt").animate({left: "-"+delta}, 2000);
        }

    });
   
});