// =================================================================================
export class Settings {

    constructor() {

        this.endpoint = './src/json/proyectos.json';
        
        this.doms = {

            h2Contenedor: document.getElementsByClassName('h2-contenedor'),
            h2Click: document.getElementsByClassName('h2'),
            h2Carets: document.getElementsByClassName('fa'),
            sliderControls: document.getElementsByClassName('sliderControls'),
            botonesCarrusel: document.getElementsByClassName('boton-carrusel iz'),
            botonesCarruselDe: document.getElementsByClassName('boton-carrusel de')
        };

        this.valores_iniciales = {
            
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
