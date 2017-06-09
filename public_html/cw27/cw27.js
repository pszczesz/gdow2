
$(document).ready(function (){
    $("dt").click(function (){
        $(this).next().toggle(500);
    });
    $("h1").click(function(){
        $(this).next().toggle(800);
    });
});