
$(document).ready(function (){
    $("dt").click(function (){
        $(this).next().toggle(500);
    });
});