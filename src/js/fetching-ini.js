import { Settings } from './constants.js';
import { crearElementos_fetchingJson } from './fetching-iter.js';
import { ver_mas } from './functions.js';

// =================================================================================
//  Fetching inicial: (info tarjetas proyectos)
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
        console.warn(error);
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

export {
    recibeInfo_proyectos,
    muestraResultados
};
