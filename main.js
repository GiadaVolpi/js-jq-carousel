// eseguo il file Javascript quando HTML è caricato
$ (document).ready (function () {


    $ (".next").click (function () {
        // prendo l'immagine attualmente visibile
        var imgAttuale = $ ("#slide img.active");

        // prendo l'immagine successiva a quella attualmente visibile
        var imgSuccessiva = imgAttuale.next ("img");

        // prendo il cerchio attivo (deve avere il pieno visibile e il vuoto invisibile)
        var dotActive = $ (".circle.circle-active");

        // prendo il cerchio successivo a quello attivo
        var dotSuccessivo = dotActive.next ();

        // rendo invisibile la foto attuole
        imgAttuale.removeClass ("active");

        // disattivo il cerchio attivo
        dotActive.removeClass ("circle-active");

        // se l'immagine successiva non esiste
        if (imgSuccessiva.length == 0) {
            // rendo nuovamente visibile la prima del ciclo
            imgSuccessiva = $ (".restart");

            // rendo nuovamente visibile il primo dot
            dotSuccessivo = $ (".circle-first")
        }

        // rendo visibile la foto successiva
        imgSuccessiva.addClass ("active");

        // rendo attivo il dot successivo
        dotSuccessivo.addClass ("circle-active");
    });


    $ (".prev").click (function () {
        // prendo l'immagine attualmente visibile
        var imgAttuale = $ ("#slide img.active");

        // prendo l'immagine precedente a quella attuale
        var imgPrecedente = imgAttuale.prev ("img");

        // prendo il cerchio attivo (deve avere il pieno visibile e il vuoto invisibile)
        var dotActive = $ (".circle.circle-active");

        // prendo il cerchio precedente a quello attivo
        var dotPrecedente = dotActive.prev ();

        // rendo invisibile la foto attuole
        imgAttuale.removeClass ("active");

        // disattivo il cerchio attivo
        dotActive.removeClass ("circle-active");

        // se l'immagine precedente non esiste
        if (imgPrecedente.length == 0) {
            // rendo nuovamente visibile l'ultima del ciclo
            imgPrecedente = $ (".last");

            // rendo nuovamente visibile l'ultimo dot
            dotPrecedente = $ (".circle-last")
        }

        // rendo visibile la foto precedente
        imgPrecedente.addClass ("active");

        // rendo attivo il dot precedente
        dotPrecedente.addClass ("circle-active");
    });


});
