// =================================================================================
//  Portfolio Juan Eguia (main.js)
// 
// =================================================================================
import { Settings } from './constants.js';
import { crearElementos_fetchingJson } from './fetching-iter.js';

import {
    // carga_misLenguajes_imagenes,
    ver_mas,
    acciones_h2Carets,
    acciones_botonesCarrusel
} from "./functions.js";

// =================================================================================
window.onload = () => {

    recibeInfo_proyectos();
    // carga_misLenguajes_imagenes();

    // -------------------------------------------------------------------
    // Carets ^ (Acciones mostrar-ocultar los proyectos, etc.)
    // -------------------------------------------------------------------
    console.log(Array.from(Settings.doms.h2Carets));

    Array.from(Settings.doms.h2Click).forEach((h2Click, index) => {

        h2Click.addEventListener('click', (ev) => {
            acciones_h2Carets(ev, index, h2Click);
        });
    });

    // -------------------------------------------------------------------
    // Botones Carrusel:
    //      settings.doms.botonesCarrusel ===> boton izquierdo
    //      settings.doms.botonesCarruselDe => boton derecho
    // -------------------------------------------------------------------
    const desplazamiento = Settings.offSetHorizontalElementos; // (40% mover a izda dcha)

    Array.from(Settings.doms.botonesCarrusel).forEach((botonClick, index) => {

        const indice = index + 1; // +1 porque el index=0 seria el h2Contenedor de los lenguajes
        
        botonClick.addEventListener('click', (ev) => {
            acciones_botonesCarrusel(ev, indice, botonClick, desplazamiento);
        });
    });

    Array.from(Settings.doms.botonesCarruselDe).forEach((botonClick, index) => {

        const indice = index + 1; // +1 porque el index=0 seria el h2Contenedor de los lenguajes
        
        botonClick.addEventListener('click', (ev) => {
            acciones_botonesCarrusel(ev, indice, botonClick, desplazamiento);
        });
    });

    // -----------------------------------------------------------------------------
    //  Actualizar los botones Carrusel:
    //      - 'visible' -> ponerlos 'hidden' si ya no hay mas elementos...
    //      - (Primero el boton derecho y despues el izquierdo)
    // -----------------------------------------------------------------------------
    setInterval(() => {

        Array.from(Settings.doms.botonesCarruselDe).forEach((botonClick, index) => {
            
            if (index < 5) {
                
                // +1 porque el index=0 seria el h2Contenedor de los lenguajes
                let element = Settings.doms.h2Contenedor[index + 1];
                element = Array.from(element.childNodes);

                if (parseInt(element[5].style.left.slice(0, -1)) === desplazamiento) {
                    botonClick.style.visibility = 'hidden';
                    
                } else if (parseInt(element[5].style.left.slice(0, -1)) !== desplazamiento) {
                    botonClick.style.visibility = 'visible';
                }
            }
        });
        
        Array.from(Settings.doms.botonesCarrusel).forEach((botonClick, index) => {
            
            if (index < 5) {
                
                // +1 porque el index=0 seria el h2Contenedor de los lenguajes
                let element = Settings.doms.h2Contenedor[index + 1];
                element = Array.from(element.childNodes);
                
                const nro_indices_real = element.length - 7;

                if (parseInt(element[5].style.left.slice(0, -1)) === -(desplazamiento * nro_indices_real)) {
                    botonClick.style.visibility = 'hidden';
                
                } else if (parseInt(element[5].style.left.slice(0, -1)) !== -(desplazamiento * nro_indices_real)) {
                    botonClick.style.visibility = 'visible';
                }
            }
        });

    }, 200);
}

// =================================================================================
//  Fetching info tarjetas proyectos
//  
// ---------------------------------------------------------------------------------
const recibeInfo_proyectos = async () => {

    // const endpoint = './src/json/proyectos.json';

    try {
        const response = await fetch(Settings.endpoint, {cache: 'no-cache'});
        console.log(response);

        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);

            //funcion para mostrar la informacion
            muestraResultados(jsonResponse);
        }

    } catch (error) {
        console.log(error);
    }
}

// ----------------------------------------------------------------------------------
const muestraResultados = (response) => {

    console.log(response);

    let contador = 999;
    let opcionIndex = 0;
    const navbar_opciones = Object.keys(response);
    
    for (let opcionElegida of navbar_opciones) {
        
        let x = -Settings.offSetHorizontalElementos;
        opcionIndex ++;

        for (let i of response[opcionElegida]) {

            contador --;
            x += Settings.offSetHorizontalElementos;

            const tarjeta = crearElementos_fetchingJson(i, contador, x, opcionIndex);
            Settings.doms.h2Contenedor[opcionIndex].appendChild(tarjeta);
            
            tarjeta.addEventListener('click', (ev) => {
                ver_mas(ev);
            });
        }
    }
}
