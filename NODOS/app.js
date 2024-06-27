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
    $div.classList.add("box", "border"); // agregar estilos

    const $pid = document.createElement("p");
    $pid.textContent = `Id: ${usuario.id}`;
    $div.appendChild($pid);
    
    const $h2 = document.createElement("h2");
    $h2.textContent = usuario.name;
    $div.appendChild($h2);

    const $pUsername = document.createElement("p");
    $pUsername.textContent = `Username: ${usuario.username}`;
    $div.appendChild($pUsername);

    const $pEmail = document.createElement("p");
    $pEmail.textContent = `Email: ${usuario.email}`;
    $div.appendChild($pEmail);

    const $pAddress = document.createElement("p");
    $pAddress.textContent = `Adress: ${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}, ${usuario.address.zipcode} `;
    $div.appendChild($pAddress);

    const $pGeo = document.createElement("p");
    $pGeo.textContent = `Geo: ${usuario.address.geo.lat}, ${usuario.address.geo.lng} `;
    $div.appendChild($pGeo);

    const $pPhone = document.createElement("p");
    $pPhone.textContent = `Phone: ${usuario.phone}`;
    $div.appendChild($pPhone);

    const $pWebsite = document.createElement("p");
    $pWebsite.textContent = `Website: ${usuario.website}`;
    $div.appendChild($pWebsite);

    const $pCompany = document.createElement("p");
    $pCompany.textContent = `Company: ${usuario.company.name}, ${usuario.company.catchPhrase}, ${usuario.company.bs} `;
    $div.appendChild($pCompany);

    $root.appendChild($div);
  });
}).catch(error => {
  console.error('Error fetching users:', error);
});

// FRAGMENTOS
