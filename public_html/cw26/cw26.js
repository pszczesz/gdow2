$(document).ready(function () {
    function Praktyka(imie, nazwisko, opis, ocena, czyWarto) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.opis = opis;
        this.ocena = ocena;
        this.czyWarto = czyWarto;
        this.Show = function () {
            return "Informacje o praktyce: <span class='wyr'>" + this.imie + " " + this.nazwisko
                    + "</span><br> opis praktyki: <span class='wyr'>" + this.opis 
                    + "</span><br> ocena praktyki: <span class='wyr'>" + this.ocena
                    + "</span> czy było warto: <span class='wyr'>" + this.czyWarto+"</span>";
        };
    }
    $("#dodaj").click(function () {
        var imOK = Validate($("#imie"));
        var nazOK = Validate($("#nazwisko"));
        var opisOK = Validate($("#opis"));
        if (imOK && nazOK && opisOK) {
            var imie = $("#imie").val();
            var nazwisko = $("#nazwisko").val();
            var opis = $("#opis").val();
            var ocena = $("#ocena").val();
            var czyWarto = $('input[name=warto]:checked').val();
            var p1 = new Praktyka(imie, nazwisko, opis, ocena, czyWarto);
            $("#wynik").html(p1.Show());
        }else{
            $("#wynik").html("");
        }
    });
    function Validate(elem) {
        if (elem.val().trim() !== "") {
            elem.next().html("");
            return true;
        } else {
            elem.next().html("Błędne dane");
            return false;
        }
    }
});

