const is_valid = (event, form) => {
    event.preventDefault();
    const elementos = document.querySelectorAll(form);
    let todosLlenos = true;
  
    elementos.forEach(elemento => {
      if (elemento.value === "") {
        elemento.classList.add("error");
        todosLlenos = false;
      } else {
        elemento.classList.remove("error");
        elemento.classList.add("correcto");
      }
    });
  
    if (todosLlenos) {
      alert("Correcto todos los campos estan llenos");
    } else {
      alert("Incorrecto los campos estan vacios");
    }
}
export default is_valid;