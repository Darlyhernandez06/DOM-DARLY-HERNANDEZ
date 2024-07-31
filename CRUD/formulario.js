// importanciones

import correoelectronico from "../CRUD/modulos/modulo_correo.js";
import { sololetras } from "../CRUD/modulos/modulos_letras.js";
import { solonumeros } from "../CRUD/modulos/modulo_numeros.js";
import is_valid from "./modulos/modulo_valid.js";
import { remover } from "./modulos/modulo_validaciones.js";

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
    let response = is_valid(event, "form [required]")
    // para hacer las peticiones 
    // En lugar de pasar la ruta al recurso que deseas solicitar a la llamada del método fetch(), puedes crear un objeto de petición
    // capturar todos los atributos
    const data = {
        nombres: nombres.value,
        apellidos: apellidos.value,
        telefono: telefono.value,
        direccion: direccion.value,
        tipodocumento: tipodocumento.value,
        documento: documento.value,
        correo: correo.value
    }
    if (response) {
        fetch('http://localhost:3000/user', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            alert("Señor usuario tus datos fueron enviados exitosamente");
        })
        .catch(error => {
            alert("Señor usuario tus datos no fueron enviados");
            console.error("error")
        })
        .finally(() => {
            document.querySelector("#boton").disabled = false; // Habilitar el boton
        });
        document.querySelector("#boton").disabled = true; // Desabilitar el boton
    }
});
    
// GET se utiliza para obtener un recurso especifico del servidor
// POST se utiliza para crear un nuevo recurso en el servidor
// PUT se utiliza para actualizar un recurso exitente en el servidor
// DELETE se utiliza para eliminar un resurso especifico del servidor 

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
    if (tipodocumento.value === "0") {
        tipodocumento.classList.remove("correcto");
        tipodocumento.classList.add("error");
    } else {
        tipodocumento.classList.remove("error");
        tipodocumento.classList.add("correcto");
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

// toca hacer prmosas 
// formulario nuevvo que lleno el slecter