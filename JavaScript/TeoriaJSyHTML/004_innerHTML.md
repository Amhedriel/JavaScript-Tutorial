# Continuamos con innerHTML Cambiar valores de HTML

Este `innerHTML` no solamente es para poder cambiarlo, también se puede hacer referencia a él 
`parrafo[0].innerHTML;`.

```js
titulo.innerHTML = "Título cambiado";

// Aquí tenemos document.getElementById("demo") por lo tanto nosotros estaríamos seleccionando 
// <p id="demo"></p>
document.getElementById("demo").innerHTML = 
                                      // referenciando innerHTML como es esta parte
  'El texto en el párrafo (index 0) es: ' + parrafo[0].innerHTML;

links[0].href = "google.com";
```
Ahora sí, veamos que es posible referenciar ` `

Bien, este `<p id="demo"></p>` va a decir: que nosotros primero debemos meter un `string` después de `.innerHTML` y este `string` puede ser lo que nosotros queramos, recordemos que lo vimos a inicio de JS, el **texto** del párrafo index 0 es concatenado con parrafo al (0) . innerHTML `'El texto en el párrafo (index 0) es: ' + parrafo[0].innerHTML;`.

En este caso el resultado sería: ***El texto en el párrafo (index 0) es: Este es un párrafo***

```html
	<p id="parrafo">Este es un párrafo</p>
	<a href="#" class="links">Este es otro párrafo</a>

	<p id="demo"></p>
```
```js
const titulo = document.getElementById("titulo");
const parrafo = document.getElementsByTagName("p");
const links = document.getElementsByClassName("links");

//Cambiar valores de HTML
titulo.innerHTML = "Título cambiado";


document.getElementById("demo").innerHTML = 
  'El texto en el párrafo (index 0) es: ' + parrafo[0].innerHTML;
```


---

[**&#11176;** *Anterior* &#11007;](/JavaScript/TeoriaJSyHTML/003_funciones.md "Funciones y arrays") 
[Siguiente **&#129042;**](/JavaScript/TeoriaJSyHTML/005 "")

[*Volver* **&ldca;**](/JavaScript/TeoriaJSMedio/README.md "Regresar a título") 
[*Subir* **&#11165;**](# "Ir al título")