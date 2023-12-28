// =================================================================================
export class Settings {

    constructor() {
        
        this.doms = {

            h2Contenedor: document.getElementsByClassName('h2-contenedor'),
            h2Click: document.getElementsByClassName('h2'),
            h2Carets: document.getElementsByClassName('fa'),
            botonesCarrusel: document.getElementsByClassName('boton-carrusel iz'),
            botonesCarruselDe: document.getElementsByClassName('boton-carrusel de'),

            principal: document.getElementById('principal'),
            navbar_proyectos: document.getElementsByClassName('li__navbar__proyectos'),
            contenedores_scroll: document.getElementById('contenedores__scroll'),
            contenedor_proyectos: document.getElementsByClassName('contenedor__proyectos'),
            iconos_lenguajes: document.getElementById('iconos__lenguajes'),
            iconos_lenguajesContainer: document.getElementById('iconos-lenguajes'),
            carets: document.getElementsByClassName('caret-abajo'),
            carets_fa: document.getElementsByClassName('fa fa-caret-down')
        };

        this.valores_iniciales = {
            navbar_proyectos: [
                ['Proyectos', true],
                ['Youtube', false],
                ['Recursos', false]
            ],
            carets: [
                // ['iconos_lenguajes', false, '-49%', '0.0', '2em', '0%', '1', 'fit-content'],
                ['contenedores_scroll', true, '-49%', '0.0', '4em', '0%', '1', 'fit-content']
            ],
            carets_fa: [
                ['iconos_lenguajes', false, '-49%', '0.0', '2em', '0%', '1', 'fit-content'],
                ['contenedores_scroll', true, '-49%', '0.0', '4em', '0%', '1', 'fit-content']
            ],
            carets_h2: [
                ['h2Contenedor', false],
                ['h2Contenedor', false],
                ['h2Contenedor', false],
                ['h2Contenedor', false]
            ]
        };

        this.mis_lenguajesImg = [
            './img/html-1.svg',
            './img/css-3.svg',
            './img/javascript-1.svg',
            './img/jquery-444684.svg',
            './img/react-2.svg',
            './img/java.svg',
            './img/python-4.svg',
            './img/node-js-736399.svg',
        ];

        this.misc = {
            contador: undefined
        };
    }
}
