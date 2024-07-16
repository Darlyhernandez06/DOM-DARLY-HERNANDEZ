// Selecciona el primer formulario (<form>) en el documento HTML. Lo asigna a la variable $formulario
const $formulario = document.querySelector("form");

// Selecciona los elementos del formulario por su ID. Cada uno se asigna a una variable
const nombres = document.querySelector("#nombres");
const apellidos = document.querySelector("#apellidos");
const telefono = document.querySelector("#telefono");
const direccion = document.querySelector("#direccion");
const tipodocumento = document.querySelector("#tipodocumento");
const documento = document.querySelector("#documento");
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
        // Aquí puedes realizar la acción de envío real
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
[nombres, apellidos, telefono, direccion, documento].forEach(input => {
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
boton.setAttribute('disabled', '');

politicas.addEventListener("change", () => {
    if (politicas.checked) {
        boton.removeAttribute("disabled");
    } else {
        boton.setAttribute("disabled", "disabled");
    }
});

// expreciones regulares para validar cada campo 

// validar nombre
const ValidarNombre = /^[a-zA-Z]{4,}$/;

// validar apellido 
const ValidarApellido = /^[a-zA-Z\s]{4,}$/;
const ValidarApellido1 = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]{4,}$/;

// validar telefono
const telefonoRegex = /^\d{10}$/; // 10 dígitos, sin espacios ni caracteres especiales

// validar dirrecion
const ValidarDireccion = /^[a-zA-Z0-9\s,.'-]{3,}$/; // Letras, números, espacios, comas, puntos y guiones

// validar documento
const ValidarDocumento = /^[0-9]{8,10}$/;  // Entre 8 y 10 dígitos