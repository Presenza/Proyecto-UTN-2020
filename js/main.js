$(document).ready(main);
// se va a ejecutar JS cuando toda la pag haya cargado

var contador = 1;

function main() {
    $('.menu-bar').click(function () {
        // cuando usuario de click en el menu se active

        // $('nav').toggle();  → es una opción

        if (contador == 1) {
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        } else{
            $('nav').animate({
                left: '-100%'
            });

        }

    });


};

