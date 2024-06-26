// objeto padre en el navegador
// Crear, acceder, modificar
let wh = window;
let dom = document;
let head = dom.head;
let body = dom.body;

const $header = dom.querySelector("header");
const $header_class = dom.querySelector("header");
const $header_class_all = dom.querySelectorAll(".header");
const $header_id = dom.querySelector("#header");
  
console.log(wh);
console.log(dom);
console.log(head);
console.log(body);
console.log(dom.title);
console.log(dom.styleSheets);
console.log(dom.header);
console.log($header);
console.log($header_class);
console.log($header_class_all);
console.log($header_id);


// anteriormente era asi
const id = document.getElementById("header");
const _class = document.getElementsByClassName("header");

console.log(id);
console.log(_class[0]);

console.clear();
console.log(body.childNodes);
