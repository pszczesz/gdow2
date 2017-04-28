$(document).ready(start);

function start() {
    $("#dodaj").click(dodaj);
    $("#kwadrat").animate({left:"600px"},4000);
}
function dodaj() {
    var a = parseInt($('#a').val());
    var b = parseInt($('#b').val());
    if (!isNaN(a) && !isNaN(b)) {
        $('#wynik').html(a + " + " + b + " = " + (a + b));
    }else{
        $('#wynik').html("Błędne dane");
    }
}