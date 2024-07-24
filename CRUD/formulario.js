import correoelectronico from "../CRUD/modulos/modulo_correo.js";
import { sololetras } from "../CRUD/modulos/modulos_letras.js";
import { solonumeros } from "../CRUD/modulos/modulo_numeros.js";

// Selecciona el primer formulario (<form>) en el documento HTML. Lo asigna a la variable $formulario
const $formulario = document.querySelector("form");

// Selecciona los elementos del formulario por su ID. Cada uno se asigna a una variable
const nombres = document.querySelector("#nombres");
const apellidos = document.querySelector("#apellidos");
const telefono = document.querySelector("#telefono");
const direccion = document.querySelector("#direccion");
const tipodocumento = document.querySelector("#tipodocumento");
const documento = document.querySelector("#documento");
const correo = document.querySelector("#correo");
const politicas = document.querySelector("#politicas");
const boton = document.querySelector("#boton");


// Función que elimina la clase error de un campo de entrada (input). Se utiliza para limpiar el estado de error cuando el campo es válido.
const quitarClase = (input) => {
    input.classList.remove("error");
};

// validar: Función que se ejecuta al enviar el formulario. 
// event.preventDefault() evita que el formulario se envíe automáticamente. 
//let valid = true; establece que inicialmente el formulario es válido.
const validar = (event) => {
    event.preventDefault();
    let valid = true;

    // Validación de campos: Se comprueba si el campo nombres está vacío. Si es así, se agrega la clase error, se enfoca el campo, y se establece valid como false. 
    // Si no está vacío, se llama a quitarClase para eliminar el estado de error.
    // Este mismo patrón se repite para apellidos, telefono, direccion, documento, y tipodocumento, cada uno verificando si el campo está vacío o si el tipo de documento es "0"
    // (no seleccionado).

    if (nombres.value === "") {
        nombres.focus();
        nombres.classList.add("error");
        valid = false;
    } else {
        quitarClase(nombres);
    }

    if (apellidos.value === "") {
        apellidos.focus();
        apellidos.classList.add("error");
        valid = false;
    } else {
        quitarClase(apellidos);
    }

    // Validación del campo de correo
    if (correo.value === "") {
        correo.focus();
        correo.classList.add("error");
        valid = false;
    } else {
        quitarClase(correo);
    }

    if (telefono.value === "") {
        telefono.focus();
        telefono.classList.add("error");
        valid = false;
    } else {
        quitarClase(telefono);
    }

    if (direccion.value === "") {
        direccion.focus();
        direccion.classList.add("error");
        valid = false;
    } else {
        quitarClase(direccion);
    }

    if (documento.value === "") {
        documento.focus();
        documento.classList.add("error");
        valid = false;
    } else {
        quitarClase(documento);
    }

    if (tipodocumento.value === "0") {
        tipodocumento.focus();
        tipodocumento.classList.add("error");
        valid = false;
    } else {
        quitarClase(tipodocumento);
    } 

    // Comprobar si las políticas están aceptadas
    if (!politicas.checked) {
        alert("Debes aceptar las políticas de uso");
        valid = false; // Establece valid como false si no está marcado
    }

    // Si todos los campos son válidos y las políticas están aceptadas
    if (valid) {
        alert("Formulario enviado");
    }
};

//  Se añade un listener al formulario que llama a la función validar cuando se intenta enviar el formulario.
$formulario.addEventListener("submit", validar);

// Función que agrega o quita la clase correcto dependiendo de si el campo tiene un valor. Se utiliza para cambiar el estado visual del campo en tiempo real.
const remover = (input) => {
    if (input.value !== "") {
        input.classList.add("correcto");
        input.classList.remove("error");
    } else {
        input.classList.remove("correcto");
        input.classList.add("error");
    }
};

// keydown -- cuando ecribo tecla por tecla 
// keypress -- cuando la presiono
// keyup -- cuando la oprimo 

// Se añade un listener para el evento keyup en cada uno de los campos. Cuando se suelta una tecla, se llama a la función remover para verificar el estado del campo.
[nombres, apellidos, correo, telefono, direccion, documento].forEach(input => {
    input.addEventListener("keyup", () => {
        remover(input);
    });
});

// Manejar el cambio en el tipo de documento
// Al cambiar el valor del tipo de documento, se verifica si es diferente de "0". Se actualiza el estado visual del campo según corresponda.
tipodocumento.addEventListener("change", () => {
    if (tipodocumento.value !== "0") {
        tipodocumento.classList.remove("error");
        tipodocumento.classList.add("correcto");
    } else {
        tipodocumento.classList.remove("correcto");
        tipodocumento.classList.add("error");
    }
});

// Manejar el estado del botón de enviar según el checkbox
addEventListener("DOMContentLoaded", (event) => {
    if(!politicas.checked) {
        console.log(boton);
        boton.setAttribute("disabled", "");
    }
});

politicas.addEventListener("change", function (e) {
    if (e.target.checked) {
        boton.removeAttribute("disabled");
    } 
});


// Validación del documento
documento.addEventListener("keypress", solonumeros);

// Validación del telefono
telefono.addEventListener("keypress", solonumeros);

// Validación del nombre 
nombres.addEventListener("keypress", (event) => {
    sololetras(event, nombres);
});

// Validación del apellido
apellidos.addEventListener("keypress", (event) => {
    sololetras(event, apellidos);
});

// Validación del correo electrónico
correo.addEventListener("blur", (event) => {
    correoelectronico(event, correo);
});





// EXPRECIONES REGULARES PARA VALIDAR CADA CAMPO 

// // validar nombre
// let ValidarNombre = /^[a-zA-Z]{4,}$/; //sicurplejo alt 94

// // validar apellido 
// const ValidarApellido = /^[a-zA-Z\s]{4,}$/;
// const ValidarApellido1 = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]{4,}$/;

// // validar telefono
// const telefonoRegex = /^\d{10}$/; // 10 dígitos, sin espacios ni caracteres especiales

// // validar dirrecion
// const ValidarDireccion = /^[a-zA-Z0-9\s,.'-]{3,}$/; // Letras, números, espacios, comas, puntos y guiones

// // validar documento
// const ValidarDocumento = /^[0-9]{8,10}$/;  // Entre 8 y 10 dígitos

// Manejar el estado del botón de enviar según el checkbox
// boton.setAttribute('disabled', '');

// politicas.addEventListener("change", () => {
//     if (politicas.checked) {
//         boton.removeAttribute("disabled");
//     } else {
//         boton.setAttribute("disabled", "disabled");
//     }
// });

// boton.addEventListener('click', function(){
//     alert("Debes aceptar las políticas de uso");
// })

// nombres.addEventListener("keypress", (event) => {
//     console.log(event);
//     console.log(this.value);
// });


// darlyhernadez0624@gmail.com
// usuario@.com

// w son los alfa numericos chorgan
// W son los que no son alfa numericos
// agrupavamos en una expresion regular
// \ baquelas
// ^: Inicio de la cadena. //sicurplejo alt 94
// [a-zA-Z0-9_.+-]+: Uno o más caracteres permitidos antes de '@' (letras, dígitos, '.', '_', '+', '-').
// @: Obligatorio, separa la parte local del dominio.
// [a-zA-Z0-9-]+: Uno o más caracteres permitidos para el dominio antes del primer punto (letras, dígitos, '-').
// .: Punto literal, separa las partes del dominio.
// [a-zA-Z0-9-.]+: Uno o más caracteres permitidos después del punto (letras, dígitos, '-', '.').
// $: Fin de la cadena.


// const solonumeros = function(event) {
//     if (!ValidarDocumento.test(event.value)) {
//         documento.focus();
//         documento.classList.add("error");
//         event.preventDefault(); // no premite que se ingresa el elemento
//         alert("Solo se permiten numeros")
//     } else {
//         quitarClase(documento);
//     }
// };

// documento.addEventListener("keypress", solonumeros);


// cuando pulsamos una tecla
// documento.addEventListener("keypress", function (event) {
//     // console.log(event.keyCode)
//     // if(event.keyCode >= 48 && event.keyCode <= 57) {
//     // } else {
//     //     event.preventDefault(); // no premite que se ingresa el elemento
//     //     alert("Solo se permiten numeros")
//     // }
//     if (!ValidarDocumento.test(documento.value)) {
//         documento.focus();
//         documento.classList.add("error");
//         event.preventDefault(); // no premite que se ingresa el elemento
//         alert("Solo se permiten numeros")
//     } else {
//         quitarClase(documento);
//     }
// });

// // mientras mantenemos pulsada la tecla
// documento.addEventListener("keydown", function (event) {
//     // console.log(event)
// });

// // mientras soltamos una tecla
// documento.addEventListener("keyup", function (event) {
//     // console.log(event)
// });

// evento blur para el focus 
