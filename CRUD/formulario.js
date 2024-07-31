// importanciones

import correoelectronico from "../CRUD/modulos/modulo_correo.js";
import { sololetras } from "../CRUD/modulos/modulos_letras.js";
import { solonumeros } from "../CRUD/modulos/modulo_numeros.js";
import is_valid from "./modulos/modulo_valid.js";

// variables 

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

//  Se añade un listener al formulario que llama a la función validar cuando se intenta enviar el formulario.
$formulario.addEventListener("submit", (event) => {
    is_valid(event, "form [required]")
    // para hacer las peticiones 
    // En lugar de pasar la ruta al recurso que deseas solicitar a la llamada del método fetch(), puedes crear un objeto de petición
    // capturar todos los atributos
    const data = {
        nombres: nombres.value,
        apellidos: apellidos.value,
        telefono: telefono,
        tipodocumento: tipodocumento.value,
        documento: documento.value,
        correo: correo.value
    }
    console.log(data)
});

// keydown -- cuando ecribo tecla por tecla 
// keypress -- cuando la presiono
// keyup -- cuando la oprimo 

// // Se añade un listener para el evento keyup en cada uno de los campos. Cuando se suelta una tecla, se llama a la función remover para verificar el estado del campo.
// [nombres, apellidos, correo, telefono, direccion, documento].forEach(input => {
//     input.addEventListener("keyup", () => {
//         remover(input);
//     });
// });


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
        boton.setAttribute("disabled", "");
    }
});

politicas.addEventListener("change", function (e) {
    if (e.target.checked) {
        boton.removeAttribute("disabled");
    } 
});


// Validaciones específicas

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

