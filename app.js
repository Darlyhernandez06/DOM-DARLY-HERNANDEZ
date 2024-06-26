// objeto padre en el navegador
// Crear, acceder, modificar
// dom travesi
// dom elementos y nodos

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

const $main = dom.querySelector("main");

console.log(id);
console.log(_class[0]);

console.clear();
console.log(body.childNodes);
console.log($main.childNodes);

//cuando recibo mas de un parametro tengo que colocar parentesis
$main.childNodes.forEach(nodo => console.log(nodo));
console.log($main.childNodes[1]);

// covertirmos el node de una lista a un arreglo
// const arregloNodo = Array.from($main.childNodes);

const arregloNodo = [...$main.childNodes]

const nuevo2 = arregloNodo.filter((nodo) => (nodo.nodeType === nodo.TEXT_NODE) ? true : false);

console.log(nuevo2);
console.log(arregloNodo);

// ELEMENTO DE MAIN
console.clear();
console.log($main.children); // LOS HIJOS 
console.log($main.parentElement); // VAMOS A BUSCAR EL PAPA
console.log($main.previousElementSibling); // HERMANO PREVIO A MI
console.log($main.nextElementSibling); // HERMANO SIGUIENTE A MI



// taer los hijos 
console.clear(); // PARA LIMPIAR LA CONSOLA

// all es para trare todos 
const $buscar = dom.querySelectorAll("div.card > ul.list > li.list__item > a")
console.log($buscar);


const $buscar1 = dom.querySelector("#apropiedad")
console.log($buscar1);


// FORMULARIO
const $from = dom.querySelector("#search")
console.log($from);

$from.setAttribute('metod', 'GET') // LE AGREA EL ATRIBUTO

$from.firstElementChild.removeAttribute("placeholder"); // LE QUITA EL ATRBUTO

$from.firstElementChild.setAttribute('autocomplete', 'on') // ACTIVAR EL AUTOCOMPLETADO DEL FORMULARIO

$from.classList.add("otra_clase"); // AGREGAR UNA NUEVA CLASE
console.log($from.classList);

$from.classList.remove("otra_clase"); // QUITAR UNA NUEVA CLASE
console.log($from.classList);

$from.classList.toggle("otra_clase"); // VA A VILIDAR SI LA TIENE