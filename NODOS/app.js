// "use strict";
import { usuarios } from "./modulo.js";
const $root = document.querySelector("#root");

// const $div = document.createElement("div");
// const $p = document.createElement("p");
// let texto = "Este seria el texto del elemento"

// // $div.textContent = texto;

// $div.classList.add("box");

// $p.textContent = texto;
// // $p.classList.add("box__texto");

// $root.appendChild($div);
// $div.appendChild($p);

// const $texto = document.createTextNode("Este seria el texto del elemento");


usuarios().then((listado) => {
  listado.forEach(usuario => {
    const $div = document.createElement("div");
    const $h2 = document.createElement("h2");
    $div.classList.add("box")
    $div.textContent = usuario.name;
    $div.appendChild($h2);
    $root.appendChild($div);
  });
}).catch();
