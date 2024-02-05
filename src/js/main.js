// =================================================================================
//  Portfolio Juan Eguia (main.js)
// 
// =================================================================================
import { Settings } from './constants.js';
import { recibeInfo_proyectos } from './fetching-ini.js';

import {
    // carga_misLenguajes_imagenes,
    acciones_h2Carets,
    acciones_botonesCarrusel
} from "./functions.js";

// =================================================================================
//  Inicio (window.onload)
// ---------------------------------------------------------------------------------
window.onload = () => {

    recibeInfo_proyectos();
    // carga_misLenguajes_imagenes();
    crear_eventos_caretsMostrarOcultar();
    crear_eventos_botonesCarrusel();
    actualizar_botonesCarrusel_visibleHidden();
}

// ===================================================================
// Carets ^ (Acciones mostrar-ocultar los proyectos, etc.)
// -------------------------------------------------------------------
function crear_eventos_caretsMostrarOcultar() {

    console.log(Array.from(Settings.doms.h2Carets));

    Array.from(Settings.doms.h2Click).forEach((h2Click, index) => {

        h2Click.addEventListener('click', (ev) => {
            acciones_h2Carets(ev, index, h2Click);
        });
    });
}

// ===================================================================
// Botones Carrusel:
//      settings.doms.botonesCarrusel ===> boton izquierdo
//      settings.doms.botonesCarruselDe => boton derecho
// -------------------------------------------------------------------
function crear_eventos_botonesCarrusel() {

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
}

// =============================================================================
//  Actualizar los botones Carrusel:
//      - 'visible' -> ponerlos 'hidden' si ya no hay mas elementos...
//      - (Primero el boton derecho y despues el izquierdo)
// -----------------------------------------------------------------------------
function actualizar_botonesCarrusel_visibleHidden() {

    const desplazamiento = Settings.offSetHorizontalElementos; // (40% mover a izda dcha)
    
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
