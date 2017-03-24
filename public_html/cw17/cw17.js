window.onload = start;

function start(){
    document.getElementById("wyslij").onclick = klik;
}
function klik(){
    var imie = document.getElementById("imie");
    var nazwisko = document.getElementById("nazwisko");
    var wiek = document.getElementById("wiek");
    var imOK = Validate(imie);
    var nazOK = Validate(nazwisko);
    var wiekOK = ValidateNumber(wiek);
    if(imOK && nazOK && wiekOK){  
        var wybPlci = document.getElementsByName("plec");
        var plec = wybPlci[0].checked ? "Panią" : "Pana";
        var klasa = document.getElementById("klasa").value;       
        var zaint = document.getElementsByName("zaint");        
        var zainteresowania = "<ul>";
        for(var i=0;i<zaint.length;i++){
            if(zaint[i].checked){
                zainteresowania += "<li>"+zaint[i].value+"</li>";
            }           
        } 
        zainteresowania += "<ul>";
         var html = imie.value+" "+nazwisko.value+" wiek: "+wiek.value+
                 ". Witamy "+plec+" w klasie: "+klasa+zainteresowania;
        document.getElementById("wynik").innerHTML = html;
    }else{
        document.getElementById("wynik").innerHTML = "";
    }
}
function Validate(elem){
    var wartosc = elem.value;
    if(wartosc.trim().length>2 && czyLitery(wartosc)){
        elem.nextElementSibling.innerHTML = "";
        return true;
    }else{
        elem.nextElementSibling.innerHTML = "Błędne dane";
        return false;
    }
}
function czyLitery(tekst){
    var wzorzec = /^[a-zA-ZąęśćźłóńĄĘŹŚĆŃŁżŻ]*$/;    
    return wzorzec.test(tekst);    
}
function ValidateNumber(elem){
    var wartosc = parseInt(elem.value);
    if(!isNaN(wartosc) && wartosc>0 && wartosc<130){
         elem.nextElementSibling.innerHTML = "";
        return true;
    }else{
         elem.nextElementSibling.innerHTML = "Błędne dane";
        return false;
    }
}