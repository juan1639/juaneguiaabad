import { settings } from "./main.js";

// =============================================================================
function crearElementos_fetchingJson(i, contador, x, opcionIndex) {

    const url = i.url;
    const ghURL = i.githubURL;
    const img = i.imagen;
    const nombre = i.nombre;
    const descripcion = i.descripcion;
    const blank = '_blank';

    const tarjeta = document.createElement('div');
    tarjeta.setAttribute('class', 'tarjeta__proyecto');
    tarjeta.style.zIndex = contador.toString();

    // if (nombre === 'PacClonJS') tarjeta.style.marginLeft = '200px';
    tarjeta.style.left = x.toString() + '%';

    if (opcionIndex === 1) {

        tarjeta.innerHTML = `
            <a class="contenedor__imagen-tarjeta" style="background:url(${img}); background-size:cover" href=${url} target=${blank}></a>
            <div class="contenedor__titulo-tarjeta">
            <details><summary>${nombre}</summary><p>${descripcion}</p></details>
            </div>
            <a class="boton__ver-tarjeta" id=${url} href=${url} target=${blank}>Jugar</a>
        `;
    
    } else if (opcionIndex === 2) {

        tarjeta.innerHTML = `
            <a class="contenedor__imagen-tarjeta" style="background:url(${img}); background-size:cover" href=${url} target=${blank}></a>
            <div class="contenedor__titulo-tarjeta">
            <details><summary>${nombre}</summary><p>${descripcion}</p></details>
            </div>
            <a class="boton__youtube-tarjeta" id=${url} href=${url} target=${blank}>
            <span id="youtube__triangulo"></span>
            </a>
        `;
    
    } else if (opcionIndex === 3) {

        tarjeta.innerHTML = `
            <a class="contenedor__imagen-tarjeta" style="background:url(${img}); background-size:cover" href=${url} target=${blank}></a>
            <div class="contenedor__titulo-tarjeta">
            <details><summary>${nombre}</summary><p>${descripcion}</p></details>
            </div>
            <a class="boton__ver-tarjeta" id=${url} href=${url} target=${blank}>Ver más</a>
        `;
    }

    return tarjeta;
}

// =============================================================================
function crearElementos_fetchingJson_2(i, idTarjeta, opcionIndex, nro_elementos) {

    const url = i.url;
    const ghURL = i.githubURL;
    const img = i.imagen;
    const nombre = i.nombre;
    const descripcion = i.descripcion;
    const blank = '_blank';

    const tarjeta = document.createElement('div');
    tarjeta.setAttribute('class', 'tarjeta__proyecto');
    tarjeta.style = `--i: ${idTarjeta}`;

    let porcionGrados = 360 / nro_elementos;

    if (opcionIndex === 0) {

        tarjeta.style.transform = `rotateY(calc(var(--i) * ${porcionGrados}deg)) translateZ(450px)`;
        tarjeta.innerHTML = `
            <a class="contenedor__imagen-tarjeta" style="background:url(${img}); background-size:cover" href=${url} target=${blank}></a>
            <div class="contenedor__titulo-tarjeta">
            <details><summary>${nombre}</summary><p>${descripcion}</p></details>
            </div>
            <a class="boton__ver-tarjeta" id=${url} href=${url} target=${blank}>Jugar</a>
        `;
    
    } else if (opcionIndex === 1) {

        settings.doms.sliderControls[opcionIndex].style.width = '230px';
        settings.doms.sliderControls[opcionIndex].style.height = '160px';
        tarjeta.style.transform = `rotateY(calc(var(--i) * ${porcionGrados}deg)) translateZ(550px)`;
        tarjeta.innerHTML = `
            <a class="contenedor__imagen-tarjeta" style="background:url(${img}); background-size:cover" href=${url} target=${blank}></a>
            <div class="contenedor__titulo-tarjeta">
            <details><summary>${nombre}</summary><p>${descripcion}</p></details>
            </div>
            <a class="boton__youtube-tarjeta" id=${url} href=${url} target=${blank}>
            <span id="youtube__triangulo"></span>
            </a>
        `;
    
    } else if (opcionIndex === 2) {

        settings.doms.sliderControls[opcionIndex].style.width = '220px';
        settings.doms.sliderControls[opcionIndex].style.height = '150px';
        tarjeta.style.transform = `rotateY(calc(var(--i) * ${porcionGrados}deg)) translateZ(590px)`;
        tarjeta.innerHTML = `
            <a class="contenedor__imagen-tarjeta" style="background:url(${img}); background-size:cover" href=${url} target=${blank}></a>
            <div class="contenedor__titulo-tarjeta">
            <details><summary>${nombre}</summary><p>${descripcion}</p></details>
            </div>
            <a class="boton__ver-tarjeta" id=${url} href=${url} target=${blank}>Ver</a>
        `;
    }

    return tarjeta;
}

// --------------------------------------------------------------
export { crearElementos_fetchingJson, crearElementos_fetchingJson_2 };
