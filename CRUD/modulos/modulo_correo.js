const correoelectronico = (event, elemento) => {
    let validarcorreo = /^[\w-._+]+@[\w-._+]+(\.[a-zA-Z]{2,4}){1,2}$/;

    // Prueba si el valor del campo es válido
    if (validarcorreo.test(elemento.value)) {
        console.log("sí"); // Cambiar a "sí" significa que es válido
        elemento.classList.remove("error"); // Quita clase de error si es válido
        elemento.classList.add("correcto"); // Añade clase de correcto si es válido
    } else {
        console.log("no"); // Cambiar a "no" significa que es inválido
        elemento.classList.remove("correcto"); // Quita clase de correcto si no es válido
        elemento.classList.add("error"); // Añade clase de error si no es válido
    }
};

export default correoelectronico;