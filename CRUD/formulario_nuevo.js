import { sololetras } from "../CRUD/modulos/modulos_letras.js";
import is_valid from "./modulos/modulo_valid.js";
import { remover } from "./modulos/modulo_validaciones.js";

const $formulario = document.querySelector("form");

const nombre = document.querySelector("#nombre");

// Validación del nombre 
nombre.addEventListener("keypress", (event) => {
    sololetras(event, nombre);
});

$formulario.addEventListener("submit", (event) => {
    let response = is_valid(event, "form [required]");
    const data = {
      nombre: nombre.value,
    }
    if (response) {
      fetch('http://localhost:3000/documento', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    }
});

// Se añade un listener para el evento keyup en cada uno de los campos. Cuando se suelta una tecla, se llama a la función remover para verificar el estado del campo.
[nombre].forEach(input => {
  input.addEventListener("keyup", () => {
      remover(input);
  });
});