// eseguo il file Javascript quando HTML è caricato
$ (document).ready (function () {


    $ (".next").click (function () {
        // prendo l'immagine attualmente visibile
        var imgAttuale = $ ("#slide img.active");

        // prendo l'immagine successiva a quella attualmente visibile
        var imgSuccessiva = imgAttuale.next ("img");

        // rendo invisibile la foto attuole
        imgAttuale.removeClass ("active");

        // se l'immagine successiva non esiste
        if (imgSuccessiva.length == 0) {
            // rendo nuovamente visibile la prima del ciclo
            imgSuccessiva = $ (".restart");
        }

        // rendo visibile la foto successiva
        imgSuccessiva.addClass ("active");
    });


    $ (".prev").click (function () {
        // prendo l'immagine attualmente visibile
        var imgAttuale = $ ("#slide img.active");

        // prendo l'immagine precedente a quella attuale
        var imgPrecedente = imgAttuale.prev ("img");

        // rendo invisibile la foto attuole
        imgAttuale.removeClass ("active");

        // se l'immagine precedente non esiste
        if (imgPrecedente.length == 0) {
            // rendo nuovamente visibile l'ultima del ciclo
            imgPrecedente = $ (".last");
        }

        // rendo visibile la foto precedente
        imgPrecedente.addClass ("active");
    });


});
