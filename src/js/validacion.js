// const input = document.querySelector('.input');
function validar(input) {
    var tipoInput = input.dataset.tipo; //dataSet colecion de los datas

    //Agregando el estilo de errror al input en caso de no haber ingresado algo
    if(input.validity.valid){
        input.parentElement.classList.remove('input-container--invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML = '';
    }else{
        input.parentElement.classList.add('input-container--invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML = mostrarMensajeError(tipoInput, input);
    }
}

var tipoErrores = ['valueMissing', 'typeMismatch', 'patternMismatch', 'customError'];

//Manejo de errores
let mensajesError = {
    nombre: {
        valueMissing: "Este campo no puede estar vacío"
    },
    email: {
        valueMissing: "Este campo email no puede quedar vacío",
        typeMismatch: "El correo no es valido"
    },

    telefono: {
        valueMissing: "Este campo no puede quedar vacío",
        patternMismatch: " 8 numeros en formato sugerido ########"
    },
    direccion: {
        valueMissing: "El campo direccion no puede quedar vacío",
        patternMismatch: " Escriba una direccion válida"
    },
    asunto:{
        valueMissing: "El campo asunto no puede quedar vacío",
        patternMismatch: " Escriba un asunto"
    },
    textarea: {
        valueMissing: "El campo mensaje no puede quedar vacío",
        patternMismatch: " Escriba un mensaje"
    }
    
}


//Mostrar el mensaje segun el tipo
function mostrarMensajeError(tipoInput, input) {
    let mensaje = '';
    tipoErrores.forEach(error => {
        if(input.validity[error]){
            mensaje = mensajesError[tipoInput][error];//Mostramos el error
        }
    });
    return mensaje;
}

