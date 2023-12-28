import {
    settings
} from "./main.js";

// =================================================================================
function carga_misLenguajes_imagenes() {

    for (let i = 0; i < settings.mis_lenguajesImg.length; i ++) {

        const archivoImg = settings.mis_lenguajesImg[i];

        const lenguajeImg = document.createElement('img');
        lenguajeImg.setAttribute('class', 'iconos-lenguajes');
        lenguajeImg.src = archivoImg;

        settings.doms.iconos_lenguajesContainer.appendChild(lenguajeImg);
    }
}

// =================================================================================
function acciones_h2Carets(ev, index, elemento) {

    
    console.log(ev.target.id, '...click');
    const idCaret = ev.target.id;

    console.log(elemento.className);

    if (elemento.className === 'fa fa-caret-down') {
        elemento.className = 'fa fa-caret-up';

    } else if (elemento.className === 'fa fa-caret-up') {
        elemento.className = 'fa fa-caret-down';
    }

    const element = settings.valores_iniciales.carets_h2[index][0];
    let booleano = settings.valores_iniciales.carets_h2[index][1];

    console.log(element, booleano);

    if (booleano) {
        settings.valores_iniciales.carets_h2[index][1] = false;
        Array.from(settings.doms.h2Carets)[index].className = 'fa fa-caret-down';
        settings.doms[element][index].style.animation = 'ocultarLenguajes 2s 1 forwards';
    
    } else {
        settings.valores_iniciales.carets_h2[index][1] = true;
        Array.from(settings.doms.h2Carets)[index].className = 'fa fa-caret-up';
        settings.doms[element][index].style.animation = 'mostrarLenguajes 4s 1 forwards';
    }
}

// =================================================================================
function acciones_botonesCarrusel(ev, index, elemento, desplazamiento) {

    // elemento = botones-carrusel
    // element = elementos carrusel moviles

    console.log(ev.target.id, '...click');
    const idBoton = ev.target.id;

    console.log(elemento.className);

    let element = settings.doms.h2Contenedor[index];
    element = Array.from(element.childNodes);
    console.log(element);

    const nro_ind_real = element.length - 7;

    // ----------------------------------------------------------------
    element.forEach((element, index) => {
        
        // index > 4 ... porque hay 4 elementos antes que los proyectos, que comienzan en el 5...
        if (index > 4) {
            
            console.log(element.style.left);
            
            let posActual = element.style.left.slice(0, -1);
            posActual = parseInt(posActual);
            console.log(posActual);

            if (elemento.className === 'boton-carrusel iz' && posActual > -(nro_ind_real * desplazamiento - (index - 5) * desplazamiento)) {
                posActual -= desplazamiento;
            } else if (elemento.className === 'boton-carrusel de' && posActual < (index - 4) * desplazamiento) {
                posActual += desplazamiento;
            }

            element.style.left = `${posActual.toString()}%`;
        }

    });
}

// =================================================================================
function ver_mas(ev) {
    
    const target = ev.target.id;
    console.log(target, 'ver mas');

    if (target === '#') console.log('####');
}

export {
    carga_misLenguajes_imagenes,
    ver_mas,
    acciones_h2Carets,
    acciones_botonesCarrusel
};
