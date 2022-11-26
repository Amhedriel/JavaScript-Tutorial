//Encontrar elementos de HTML

const titulo = document.getElementById("titulo");
const parrafo = document.getElementsByTagName("p");
const links = document.getElementsByClassName("links");

//Cambiar valores de HTML
titulo.innerHTML = "Título cambiado";


document.getElementById("demo").innerHTML = 
  'El texto en el párrafo (index 0) es: ' + parrafo[0].innerHTML;

links[0].href = "google.com"; 

//Cambiar estilos

titulo.style.color = "red";
titulo.style.border = "solid";

//Eventos

function cambiarTexto(obj) {
    obj.innerHTML = "Texto clickeado"
}

function mOver(obj) {
    obj.innerHTML = "Mouse encima"
}

function mOut(obj) {
    obj.innerHTML = "Mouse afuera"
}

function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "soltame";
}

function mUp(obj) {
  obj.style.backgroundColor="#D94A38";
  obj.innerHTML="gracias";
}


//addEventListener

const boton = document.getElementById("boton");
boton.addEventListener("click", alerta);


function alerta() {
    alert("alerta");
}
