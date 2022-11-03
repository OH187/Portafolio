// import { validar } from "./validacion.js";

const inputs = document.querySelectorAll("input");
const textarea = document.querySelector("#mensaje");

//Validando el textarea
textarea.addEventListener('blur', (entrada) => { //blur se activa cuando se desenfoca el elemento
    validar(entrada.target);
});

//Validando los demás inputs
inputs.forEach( entrada => {
    entrada.addEventListener('blur', (entrada) => {
        validar(entrada.target);
    });
});