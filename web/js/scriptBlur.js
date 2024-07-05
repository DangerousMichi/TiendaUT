var regexNombre = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
var regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var regexTelefonoNacional = /^\d{10}$/;

var nombre = document.getElementById("nombre");
var celular = document.getElementById("celular");
var correo = document.getElementById("correo");

var mensajeNombre = document.getElementsByClassName("errorNombre");
var mensajeCelular = document.getElementsByClassName("errorCelular");
var mensajeCorreo = document.getElementsByClassName("errorCorreo");

var xmarkErrorNombre = document.getElementsByClassName("xmarkErrorNombre");
var xmarkErrorCelular = document.getElementsByClassName("xmarkErrorCelular");
var xmarkErrorCorreo = document.getElementsByClassName("xmarkErrorCorreo");

var checkMarkNombre = document.getElementsByClassName("checkMarkNombre");
var checkMarkCelular = document.getElementsByClassName("checkMarkCelular");
var checkMarkCorreo = document.getElementsByClassName("checkMarkCorreo");

nombre.addEventListener("blur", () => {
    if (!regexNombre.test(nombre.value)) {
        mensajeNombre[0].classList.remove("ocultar");
        xmarkErrorNombre[0].classList.remove("ocultar");
        checkMarkNombre[0].classList.add("ocultar");
        nombre.classList.add("errorInput");
    } else {
        mensajeNombre[0].classList.add("ocultar");
        xmarkErrorNombre[0].classList.add("ocultar");
        checkMarkNombre[0].classList.remove("ocultar");
        nombre.classList.add("correctoInput");
    }
});

celular.addEventListener("blur", () => {
    if (!regexTelefonoNacional.test(celular.value)) {
        mensajeCelular[0].classList.remove("ocultar");
        xmarkErrorCelular[0].classList.remove("ocultar");
        checkMarkCelular[0].classList.add("ocultar");
        celular.classList.add("errorInput");
    } else {
        mensajeCelular[0].classList.add("ocultar");
        xmarkErrorCelular[0].classList.add("ocultar");
        checkMarkCelular[0].classList.remove("ocultar");
        celular.classList.add("correctoInput");
    }
});

correo.addEventListener("blur", () => {
    if (!regexCorreo.test(correo.value)) {
        mensajeCorreo[0].classList.remove("ocultar");
        xmarkErrorCorreo[0].classList.remove("ocultar");
        checkMarkCorreo[0].classList.add("ocultar");
        correo.classList.add("errorInput");
    } else {
        mensajeCorreo[0].classList.add("ocultar");
        xmarkErrorCorreo[0].classList.add("ocultar");
        checkMarkCorreo[0].classList.remove("ocultar");
        correo.classList.add("correctoInput");
    }
});
