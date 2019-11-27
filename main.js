// eseguo il file Javascript quando HTML è caricato
$ (document).ready (function () {
    $ (".next").click (function () {
        // sposto la classe "active" sull'immagine successiva all'attuale "active"
        $ (".active").next ("#slider img").addClass ("active");



    });
});
