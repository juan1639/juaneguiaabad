const contenedorMisLenguajes = document.getElementsByClassName('contenedor-mis-lenguajes');
const mostrarLenguajes = document.getElementsByClassName('h2-mis-lenguajes');

Array.from(mostrarLenguajes).forEach(opcion => {

    opcion.addEventListener('click', (ev) => {

        console.log('click...');

        Array.from(contenedorMisLenguajes)[0].style.animation = 'mostrarLenguajes 7s 1';

        setTimeout(() => {
            console.log('activado');
            Array.from(contenedorMisLenguajes)[0].style.animation = 'none';
        }, 7000);

        // console.log(Array.from(contenedorMisLenguajes)[0].style);
        
    });
});
