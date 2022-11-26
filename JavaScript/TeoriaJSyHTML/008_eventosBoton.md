# Eventos con botones

Ahora bien, en este código HTML nosotros tenemos un botón.
```html
	<button id="boton"> Pruebame </button>
```
Podemos ver que el elemento `<button></button>` que tiene su `id="boton"` y como nosotros obtendríamos ese `id` sería con el `document.getElementById("boton");`
```js
//addEventListener

const boton = document.getElementById("boton");
// a este boton le vamos a agregar un evento
boton.addEventListener("click", alerta)


```
Aparte de agregar eventos como vimos en los anteriores temas de eventos, también podemos agregar eventos con nuestro JavaScript `.addEventListener` y este nos va a pedir primero el evento `("click",` y que es lo que va a hacer `alerta)` en este caso justamente es la función:

```js
function alerta() {
    alert("alerta");
}
```
Nosotros podemos ver otros eventos que podemos realizar en `boton.addEventListener("` si presionamos CTRL + ESPACIO justo después de las comillas, todos estos son los eventos disponibles para todos los elementos.

Ahora veamos que `boton.addEventListener("click", ` seria un evento equivalente a este `onclick="cambiarTexto(this)"` y del otro lado es la función que vamos a hacer `alerta)` y este es el de la función `function alerta() {}` y esta función alerta nos va a poner un **alert** `alert("alerta");` que sea un **alerta**; si le damos click al botón pruebame en la página nos mostrará una ventana emergente de ``alert`` con una **alerta**

Si para experimentar cambiamos el **alerta** por un **Hola explorers** recibiremos un mensaje con este último `string`

```js
function alerta() {
    alert("Hola explorers");
}
```
Y es así como le podemos seguir agregando los eventos pero desde el mismo JavaScript, veamos que en nuestro HTML no tenemos mucho código, la mayoría de las cosas las estamos haciendo desde JavaScript, de este modo podemos estarlo referenciando.

Otro modo de hacerlo sería con una función flecha

```js
const boton = document.getElementById("boton");
boton.addEventListener("click", () => alert("Hola explorers"))
// Esta parte ya sería en vano.
// function alerta() {
//     alert("Hola explorers");
// }
```
Con el cual nos ahorraríamos la función ``alert`` pero a expensas de la limpieza de código 