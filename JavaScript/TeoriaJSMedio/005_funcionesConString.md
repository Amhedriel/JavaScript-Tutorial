# Funciones utilizando `strings`

Veamos un ejemplo:

~~~js
// de este lado tenemos la función saludar
function saludar(quien) {
  // Aquí recibiremos un parámetro que se llame "quien" va a ser la variable, puede ser un número, otra función, otra palabra, puede ser lo que sea
  // Para poder definir esos tipos se debe revisar "TypeScrip"
  // Aquí vamos a mandar un saludo con "Hola" a "quien" sea la variable
  console.log("Hola " + quien);

}
// En este saludar tenemos "Explorer" como valor de "quien", entonces se concatenará 
// "(Hola + quien);" y "quien" se reemplaza por "Explorer"
saludar("Explorer");
// Un "console.log("Bye");" adicional para despedirse
console.log("Bye");

Hola Explorer

Bye
~~~

Otro ejemplo:

~~~js
function saludar(quien) {
  console.log("Hola " + quien);

}
saludar("Rodrigo");

Hola Rodrigo

~~~


---

[**&#11176;** *Anterior* &#11007;](/JavaScript/TeoriaJSMedio/004_adicionYSustraccion.md "Adición y sustracción con otra forma de definir funciones") 
[Siguiente **&#129042;**](/JavaScript/TeoriaJSMedio/006_excepciones.md "Excepciones")

[*Volver* **&ldca;**](/JavaScript/TeoriaJSMedio/README.md "Regresar a título") 
[*Subir* **&#11165;**](# "Ir al título")