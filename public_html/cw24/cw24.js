window.onload = start;
function start() {
    function Book(tytul, autor, iloscStron, czyWyp) {
        this.tytul = tytul;
        this.autor = autor;
        this.iloscStron = iloscStron;
        this.czyWyp = czyWyp;
        this.wyp = function () {
            return this.czyWyp ? "TAK" : "NIE";
        };
    }
    var books = [
        new Book("Abc php", "Antoni Turek", 345, true),
        new Book("Góry polskie", "Maryla Jurek", 205, false),
        new Book("Programowanie w JS", "Janusz Mazur", 690, true)
    ];
    for (var i = 0; i < books.length; i++) {
        AddToTab(books[i], "wynik");
    }
    document.getElementById("dodaj").onclick = Dodaj;

    function Dodaj() {

        var tytul = document.getElementById("tytul").value;
        var autor = document.getElementById("autor").value;
        var iloscStron = document.getElementById("strony").value;
        var wyp = document.getElementById("wyp").checked;
        //todo walidacja zmiennych
        var tytOK = Validacja(document.getElementById("tytul"));
        var auOK = Validacja(document.getElementById("autor"));
        var iloscOK = ValidacjaStron(document.getElementById("strony"));
        if (tytOK && auOK && iloscOK) {
            var book = new Book(tytul, autor, iloscStron, wyp);
            AddToTab(book, "wynik");
        }
    }
    function Validacja(elem){
        if(elem.value!=""){
            elem.nextElementSibling.innerHTML="";
            return true;
        }else{
           elem.nextElementSibling.innerHTML="Błędne dane!";
            return false; 
        }
    }
    function ValidacjaStron(elem){
        if(!isNaN(parseInt(elem.value))){
            elem.nextElementSibling.innerHTML="";
            return true;
        }else{
            elem.nextElementSibling.innerHTML="Błędne dane!";
            return false; 
        }
    }
    function AddToTab(book, tableID) {
        var row = document.getElementById(tableID).insertRow(-1);
        var c0 = row.insertCell(0);
        var c1 = row.insertCell(1);
        var c2 = row.insertCell(2);
        var c3 = row.insertCell(3);
        c0.innerHTML = book.tytul;
        c1.innerHTML = book.autor;
        c2.innerHTML = book.iloscStron;
        c3.innerHTML = book.wyp();
    }

}



