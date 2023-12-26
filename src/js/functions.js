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
function cambiar_pestana_navbarProyectos(ev, opcion) {

    console.log(ev.target.id);
    const target = ev.target.id;
    const opciones = settings.valores_iniciales.navbar_proyectos;
    const change_contenedor = settings.doms.contenedor_proyectos;

    Array.from(settings.doms.navbar_proyectos).forEach(borra => {
        borra.style.backgroundColor = 'transparent';
    });
    
    opcion.style.backgroundColor = 'var(--color12)';

    let i = -1;
    
    for (let idProyecto of opciones) {

        i ++;
        
        if (idProyecto[0] === target) {
            idProyecto[1] = true;
            
            let margenLeft = -(i * 100);
            margenLeft = margenLeft.toString();
            settings.doms.contenedores_scroll.style.marginLeft = margenLeft + '%';
            
        } else {
            idProyecto[1] = false;
        }

        console.log(idProyecto[0], idProyecto[1]);
    }
}

// =================================================================================
function ver_mas(ev) {
    
    const target = ev.target.id;
    console.log(target, 'ver mas');

    if (target === '#') console.log('####');
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
function acciones_botonesCarrusel(ev, index, elemento) {

    
    console.log(ev.target.id, '...click');
    const idBoton = ev.target.id;

    console.log(elemento.className);

    let element = settings.doms.h2Contenedor[index];
    element = Array.from(element.childNodes);

    // let booleano = settings.valores_iniciales.carets_h2[index][1];

    console.log(element);

    /* if (booleano) {
        settings.valores_iniciales.carets_h2[index][1] = false;
        Array.from(settings.doms.h2Carets)[index].className = 'fa fa-caret-down';
        settings.doms[element][index].style.animation = 'ocultarLenguajes 2s 1 forwards';
    
    } else {
        settings.valores_iniciales.carets_h2[index][1] = true;
        Array.from(settings.doms.h2Carets)[index].className = 'fa fa-caret-up';
        settings.doms[element][index].style.animation = 'mostrarLenguajes 4s 1 forwards';
    } */

    element.forEach((element, index) => {

        // index > 4 ... porque hay 4 elementos antes que los proyectos, que comienzan en el 5...
        if (index > 4) {

            console.log(element.style.left);

            let posActual = element.style.left.slice(0, -1);
            posActual = parseInt(posActual);
            console.log(posActual);

            posActual -= 40;

            element.style.left = `${posActual.toString()}%`;
        }
    });
}

export {
    carga_misLenguajes_imagenes,
    cambiar_pestana_navbarProyectos,
    ver_mas,
    acciones_h2Carets,
    acciones_botonesCarrusel
};
