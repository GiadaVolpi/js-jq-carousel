// eseguo il file Javascript quando HTML è caricato
$ (document).ready (function () {


    $ (".next").click (function () {
        // prendo l'immagine attualmente visibile
        var imgAttuale = $ ("#slide img.active");

        // prendo l'immagine successiva a quella attualmente visibile
        var imgSuccessiva = imgAttuale.next ("img");

        // prendo il cerchio attivo (deve avere il pieno visibile e il vuoto invisibile)
        var cerchioAttivo = $ ("#circle .pieno.circle-active #circle .vuoto.circle.disactive");

        // prendo il cerchio successivo a quello attivo
        var cerchioSuccessivo = cerchioAttivo.next ();

        // rendo invisibile la foto attuole
        imgAttuale.removeClass ("active");

        // disattivo il cerchio attivo
        $ (".pieno.circle-active") cerchioAttivo.removeClass ("circle-active");
        $ (".vuoto.circle-disactive") cerchioAttivo.removeClass ("circle-disactive");

        // se l'immagine successiva non esiste
        if (imgSuccessiva.length == 0) {
            // rendo nuovamente visibile la prima del ciclo
            imgSuccessiva = $ (".restart");

            $ (".circle-first .pieno") cerchioSuccessivo.addClass ("circle-active");
            $ (".circle-first .vuoto") cerchioSuccessivo.addClass ("circle.disactive");
        }

        // rendo visibile la foto successiva
        imgSuccessiva.addClass ("active");

        $ (".pieno") cerchioSuccessivo.addClass ("circle-active")
        $ (".vuoto") cerchioSuccessivo.addClass ("circle.disactive")
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
