// =================================================================================
//  Portfolio Juan Eguia
// 
// =================================================================================
import { Settings } from './constants.js';
import { crearElementos_fetchingJson } from './fetching-iter.js';

import {
    carga_misLenguajes_imagenes,
    cambiar_pestana_navbarProyectos,
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

    const endpoint = './src/json/proyectos.json';

    try {
        const response = await fetch(endpoint, {cache: 'no-cache'});
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
    let x = -40;
    let opcionIndex = 0;
    const navbar_opciones = Object.keys(response);

    for (let opcionElegida of navbar_opciones) {

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
    
    // opcion_proyectosPorDefecto();
}

// =================================================================================
/* function opcion_proyectosPorDefecto() {

    const elementos = Array.from(settings.doms.navbar_proyectos);
    const opciones = settings.valores_iniciales.navbar_proyectos;

    for (let i = 0; i < elementos.length; i ++) {
        if (opciones[i][1]) elementos[i].style.backgroundColor = 'var(--color12)';
    }

    settings.doms.iconos_lenguajes.style.transform = 'translateY(-49%) scale(1, 0.0)';
    settings.doms.iconos_lenguajes.style.height = '2em';
} */

// =================================================================================
window.onload = () => {

    settings = new Settings();
    recibeInfo_proyectos();
    // carga_misLenguajes_imagenes();

    /* Array.from(settings.doms.navbar_proyectos).forEach(opcion => {

        opcion.addEventListener('click', (ev) => {
            cambiar_pestana_navbarProyectos(ev, opcion);
        });
    });

    Array.from(settings.doms.carets).forEach((caret, index) => {

        caret.addEventListener('click', (ev) => {
            acciones_caretsAbajo(ev, index, caret);
        });
    }); */

    console.log(Array.from(settings.doms.h2Carets));

    Array.from(settings.doms.h2Click).forEach((h2Click, index) => {

        console.log(h2Click);
        
        h2Click.addEventListener('click', (ev) => {
            acciones_h2Carets(ev, index, h2Click);
        });
    });

    Array.from(settings.doms.botonesCarrusel).forEach((botonClick, index) => {

        console.log(botonClick);

        const indice = index + 1;
        
        botonClick.addEventListener('click', (ev) => {
            acciones_botonesCarrusel(ev, indice, botonClick);
        });
    });
}

export {settings};
