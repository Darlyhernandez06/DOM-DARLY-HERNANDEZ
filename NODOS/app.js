// "use strict";
import { usuarios } from "./modulo.js";
const $root = document.querySelector("#root");

// const $div = document.createElement("div");

// let texto = "Este seria el texto del elemento"
// $div.textContent = texto;
// $div.classList.add("box")
// $root.appendChild($div)

// const $texto = document.createTextNode("Este seria el texto del elemento");


usuarios().then((listado) => {
  listado.forEach(usuario => {
    const $div = document.createElement("div");
    $div.classList.add("box")
    $div.textContent = usuario.name;
    $root.appendChild($div)
  });
});
