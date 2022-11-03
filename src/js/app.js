/* document.addEventListener('DOMContentLoaded', function(){
});
 */
    var mobilMenu = document.querySelector(".mobile-menu"); //Debemos poner dobles comillas si queremos seleccionar con clase
    mobilMenu.addEventListener('click', function(){
        var navegacion = document.querySelector(".navegacion");
       navegacion.classList.toggle("mostrar"); //Una alternativa al código de abajo, el toggle ayuda a quitar o mostrar como el if
        });
