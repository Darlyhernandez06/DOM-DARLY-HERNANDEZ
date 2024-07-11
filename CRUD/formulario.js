const $formulario = document.querySelector("form");
const nombres = document.querySelector("#nombres");
const apellidos = document.querySelector("#apellidos");
const telefono = document.querySelector("#telefono");
const direccion = document.querySelector("#direccion");
const tipodocumento = document.querySelector("#tipodocumento");
const documento = document.querySelector("#documento");

const validar = (event) => {
    event.preventDefault()
    // console.log(nombres.value);
    if(nombres.value === ""){
        // alert("El campo Nombres es obligatorio");
        nombres.focus();
        nombres.classList.add("error") // agregando una clase 
    }
    if(apellidos.value === ""){
        // alert("El campo Apellidos es obligatorio");
        apellidos.focus();
        apellidos.classList.add("error") // agregando una clase 
    }
    if(telefono.value === ""){
        // alert("El campo Telefono es obligatorio");
        telefono.focus();
        telefono.classList.add("error") // agregando una clase 
    }
    if(direccion.value === ""){
        // alert("El campo Direccion es obligatorio");
        direccion.focus();
        direccion.classList.add("error") // agregando una clase 
    }
    if(documento.value === ""){
        // alert("El campo Documento es obligatorio");
        documento.focus();
        documento.classList.add("error") // agregando una clase 
    }
    if(tipodocumento.value === ""){
        // alert("El campo Documento es obligatorio");
        tipodocumento.focus();
        tipodocumento.classList.add("error") // agregando una clase 
    }
}

const remover = (e,input) => {
    console.log(e,input);
    if(input.value != ""){
        input.classList.remove("error");
        input.classList.add("correcto");
    }
}

$formulario.addEventListener("submit", validar);

nombres.addEventListener("blur", (event) => {
    remover(event, nombres)
}) // Cuando el campo sea diferente a vacio, se quite el borde rojo o el error

apellidos.addEventListener("blur", (event) => {
    remover(event, apellidos)
}) // Cuando el campo sea diferente a vacio, se quite el borde rojo o el error

telefono.addEventListener("blur", (event) => {
    remover(event, telefono)
}) // Cuando el campo sea diferente a vacio, se quite el borde rojo o el error

direccion.addEventListener("blur", (event) => {
    remover(event, direccion)
}) // Cuando el campo sea diferente a vacio, se quite el borde rojo o el error

documento.addEventListener("blur", (event) => {
    remover(event, documento)
}) // Cuando el campo sea diferente a vacio, se quite el borde rojo o el error

// Cuando el campo sea diferente a vacio, se quite el borde rojo o el error
// nombres.addEventListener("blur", function () {
//     if(nombres.value != ""){
//         nombres.classList.remove("error")
//     }
// }) //calcular el evento

//kedmon cuando voy ingresango, keypess, keyus cuando salgo

tipodocumento.addEventListener("change", (event) => {
    remover(event, tipodocumento)
})
// MANEJAR LOS EVENTOS DE TECLADO 
nombres



