AOS.init();


window.addEventListener('load', function() {
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'flex';

    // Espera un breve momento para permitir que se vea el preloader antes de comenzar la animación
    setTimeout(function() {
        preloader.style.animation = 'transicion_preloader 1.5s linear forwards';
    }, 100);  // Puedes ajustar este valor si es necesario
});


const frases = [
    '"SOMOS UNA EMPRESA ENFOCADA AL SECTOR INMOBILIARIO Y DE NETWORKING"',
    '"NUESTRA MISIÓN ES BRINDAR SERVICIOS DE CALIDAD"',
    '"CREEMOS EN LA INNOVACIÓN Y EL TRABAJO EN EQUIPO"'
];

const imagenes = [
    'assets/img/inmobiliarionet.jpeg',
    'assets/img/servicio.jpeg',
    'assets/img/trabajoenequipo.jpeg'
];

let indice = 0;
const fraseElemento = document.getElementById('frase');
const imagenElemento = document.getElementById('imagen');
const circulos = document.querySelectorAll('.contenedor_puntos .circulo');

function cambiarContenido() {
    // Ocultar elementos con transición
    fraseElemento.classList.add('hidden');
    imagenElemento.classList.add('hidden');

    setTimeout(() => {
        // Cambiar texto e imagen
        indice = (indice + 1) % frases.length;
        fraseElemento.textContent = frases[indice];
        imagenElemento.src = imagenes[indice];

        // Cambiar circulo activo
        circulos.forEach((circulo, i) => {
            circulo.classList.toggle('circulo_activo', i === indice);
            circulo.classList.toggle('circulo', i !== indice);
        });

        // Mostrar elementos con transición
        fraseElemento.classList.remove('hidden');
        imagenElemento.classList.remove('hidden');
    }, 500); // Tiempo de la transición de ocultado
}

setInterval(cambiarContenido, 5000); // Cambiar contenido cada 5 segundos




document.addEventListener('DOMContentLoaded', () => {
    const porcentajes = document.querySelectorAll('.porcentaje');
    porcentajes.forEach(porcentaje => {
        let target = +porcentaje.getAttribute('data-target');
        let contador = 0;
        let intervalo = setInterval(() => {
            if (contador >= target) {
                clearInterval(intervalo);
            }
            porcentaje.textContent = `${contador}%`;
            contador++;
        }, 30); // Ajusta el intervalo según el tiempo deseado
    });
});





const titulos_2 = [
    'MÉXICO',
    'ESPAÑA',
    'COLOMBIA'
];

const frases_2 = [
    'DBD BUSINESS ESTÁ PRESENTE A LO LARGO DEL MUNDO, ABARCANDO PAÍSES COMO MÉXICO',
    'EXPANDIÉNDONOS RÁPIDAMENTE A DIFERENTES PAÍSES COMO ESPAÑA',
    'NUESTRA RED SE EXTIENDE A PAÍSES COMO COLOMBIA'
];

const imagenes_2 = [
    'assets/img/mexico.png',
    'assets/img/espana.png',
    'assets/img/colombia.png'
];

let indice_2 = 0;
const tituloElemento_2 = document.getElementById('titulo_2');
const fraseElemento_2 = document.getElementById('frase_2');
const imagenElemento_2 = document.getElementById('imagen_2');
const esferas = document.querySelectorAll('.contenedor_puntos .esfera');

function cambiarContenido_2() {
    // Ocultar elementos con transición
    tituloElemento_2.classList.add('hidden');
    fraseElemento_2.classList.add('hidden');
    imagenElemento_2.classList.add('hidden');

    setTimeout(() => {
        // Cambiar título, texto e imagen
        indice_2 = (indice_2 + 1) % frases_2.length;
        tituloElemento_2.textContent = titulos_2[indice_2];
        fraseElemento_2.textContent = frases_2[indice_2];
        imagenElemento_2.src = imagenes_2[indice_2];

        // Cambiar esfera activa
        esferas.forEach((esfera, i) => {
            esfera.classList.toggle('esfera_activo', i === indice_2);
            esfera.classList.toggle('esfera', i !== indice_2);
        });

        // Mostrar elementos con transición
        tituloElemento_2.classList.remove('hidden');
        fraseElemento_2.classList.remove('hidden');
        imagenElemento_2.classList.remove('hidden');
    }, 500); // Tiempo de la transición de ocultado
}

setInterval(cambiarContenido_2, 5000); // Cambiar contenido cada 5 segundos



// JavaScript para controlar la barra de progreso
window.addEventListener('scroll', function() {
    // Calcular la altura total del contenido
    var scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    // Calcular cuánto ha sido desplazado el usuario
    var scrollProgress = (window.scrollY / scrollableHeight) * 100;
    // Actualizar el ancho de la barra de progreso
    document.getElementById('progress-bar').style.width = scrollProgress + '%';
});





function nav(){
    document.getElementById('id_opciones_nav_1').style.display = 'none';
}





document.addEventListener("DOMContentLoaded", function() {
    const videoElement = document.getElementById('headerVideo');

    videoElement.addEventListener('ended', function() {
      this.currentTime = 0; // Reinicia el video al principio
      this.play(); // Vuelve a reproducir el video
    }, false);
});





function menu(){
    document.getElementById('id_menu').style.display = 'flex';
    document.getElementById('id_menu_icono').style.display = 'none';
    document.getElementById('id_cerrar_icono').style.display = 'flex';
}





function cerrar(){
    document.getElementById('id_menu').style.display = 'none';
    document.getElementById('id_menu_icono').style.display = 'flex';
    document.getElementById('id_cerrar_icono').style.display = 'none';
}





document.addEventListener("DOMContentLoaded", function() {
    // Obtener la imagen por su clase
    var imagen = document.querySelector(".imagen_logo_nav");
    
    // Verificar si se encontró la imagen
    if (imagen) {
        // Establecer el atributo href con el enlace deseado
        imagen.parentElement.href = "https://dbdbusiness.com/dbdglobal/index.php";
    }
});





function ordenarOpciones(selectId) {
    var select = document.getElementById(selectId);

    // Obtener las opciones y convertirlas a un array para ordenar
    var opciones = Array.from(select.options);
    opciones.shift(); // Remover la primera opción que es el placeholder

    // Ordenar el array de opciones por el valor de texto
    opciones.sort(function(a, b) {
        var opcionA = a.text.toUpperCase();
        var opcionB = b.text.toUpperCase();
        if (opcionA < opcionB) {
            return -1;
        }
        if (opcionA > opcionB) {
            return 1;
        }
        return 0;
    });

    // Limpiar el select
    select.innerHTML = '';

    // Agregar las opciones ordenadas de nuevo al select
    select.appendChild(opciones[0]); // Primer elemento: opción de placeholder
    opciones.forEach(function(opcion) {
        select.appendChild(opcion);
    });
}

// Llamar a la función para ordenar las opciones cuando se cargue la página
ordenarOpciones('pais');