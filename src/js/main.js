// =================================================================================
//  Portfolio Juan Eguia
// 
// =================================================================================
import { Settings } from './constants.js';
import { crearElementos_fetchingJson, crearElementos_fetchingJson_2 } from './fetching-iter.js';

import {
    carga_misLenguajes_imagenes,
    ver_mas,
    acciones_h2Carets,
    acciones_botonesCarrusel
} from "./functions.js";

let settings;

// =================================================================================
//  Fetching info tarjetas proyectos
//  
// ---------------------------------------------------------------------------------
const recibeInfo_proyectos = async () => {

    // const endpoint = './src/json/proyectos.json';

    try {
        const response = await fetch(settings.endpoint, {cache: 'no-cache'});
        console.log(response);

        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);

            //funcion para mostrar la informacion
            muestraResultados_2(jsonResponse);
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
        
        let x = -40;
        opcionIndex ++;

        for (let i of response[opcionElegida]) {

            contador --;
            x += 40;

            const tarjeta = crearElementos_fetchingJson(i, contador, x, opcionIndex);
            settings.doms.h2Contenedor[opcionIndex].appendChild(tarjeta);
            
            tarjeta.addEventListener('click', (ev) => {
                ver_mas(ev);
            });
        }
    }
}

// ----------------------------------------------------------------------------------
const muestraResultados_2 = (response) => {

    console.log(response);

    let nro_elementos;
    let idTarjeta = 0;
    let opcionIndex = -1;
    const seccion = Object.keys(response);
    
    for (let opcionElegida of seccion) {

        console.log(response[opcionElegida].length);
        nro_elementos = response[opcionElegida].length;
        
        idTarjeta = 0;
        opcionIndex ++;

        for (let i of response[opcionElegida]) {
            
            idTarjeta ++;

            const tarjeta = crearElementos_fetchingJson_2(i, idTarjeta, opcionIndex, nro_elementos);
            settings.doms.sliderControls[opcionIndex].appendChild(tarjeta);
            
            tarjeta.addEventListener('click', (ev) => {
                ver_mas(ev);
            });
        }
    }
}

// =================================================================================
window.onload = () => {

    settings = new Settings();
    recibeInfo_proyectos();
    // carga_misLenguajes_imagenes();

    // -------------------------------------------------------------------
    console.log(Array.from(settings.doms.h2Carets));

    Array.from(settings.doms.h2Click).forEach((h2Click, index) => {

        console.log(h2Click);
        
        h2Click.addEventListener('click', (ev) => {
            acciones_h2Carets(ev, index, h2Click);
        });
    });

    // -------------------------------------------------------------------
    const desplazamiento = 40;

    Array.from(settings.doms.botonesCarrusel).forEach((botonClick, index) => {

        console.log(botonClick);

        const indice = index + 1; // +1 porque el index=0 seria el h2Contenedor de los lenguajes
        
        botonClick.addEventListener('click', (ev) => {
            acciones_botonesCarrusel(ev, indice, botonClick, desplazamiento);
        });
    });

    Array.from(settings.doms.botonesCarruselDe).forEach((botonClick, index) => {

        console.log(botonClick);

        const indice = index + 1; // +1 porque el index=0 seria el h2Contenedor de los lenguajes
        
        botonClick.addEventListener('click', (ev) => {
            acciones_botonesCarrusel(ev, indice, botonClick, desplazamiento);
        });
    });

    // -----------------------------------------------------------------------------
/*     setInterval(() => {

        Array.from(settings.doms.botonesCarruselDe).forEach((botonClick, index) => {
            
            if (index < 5) {
                
                // +1 porque el index=0 seria el h2Contenedor de los lenguajes
                let element = settings.doms.h2Contenedor[index + 1];
                element = Array.from(element.childNodes);

                if (parseInt(element[5].style.left.slice(0, -1)) === desplazamiento) {
                    botonClick.style.visibility = 'hidden';
                    
                } else if (parseInt(element[5].style.left.slice(0, -1)) !== desplazamiento) {
                    botonClick.style.visibility = 'visible';
                }
            }
        });
        
        Array.from(settings.doms.botonesCarrusel).forEach((botonClick, index) => {
            
            if (index < 5) {
                
                // +1 porque el index=0 seria el h2Contenedor de los lenguajes
                let element = settings.doms.h2Contenedor[index + 1];
                element = Array.from(element.childNodes);
                
                const nro_indices_real = element.length - 7;

                if (parseInt(element[5].style.left.slice(0, -1)) === -(desplazamiento * nro_indices_real)) {
                    botonClick.style.visibility = 'hidden';
                
                } else if (parseInt(element[5].style.left.slice(0, -1)) !== -(desplazamiento * nro_indices_real)) {
                    botonClick.style.visibility = 'visible';
                }
            }
        });

    }, 500); */
}

export {settings};
