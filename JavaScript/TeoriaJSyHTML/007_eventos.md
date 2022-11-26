# Los eventos

Esto es lo más utilizado como desarrollador FrontEnd, recordemos que vimos como cambiar algún **elemento**, como agregar alguna **propiedad**, añadir **atributos** y demás.

Aquí nos concentraremos ahora en los **eventos**, que podríamos tener un disparador, como hacer un click, mover algo, colocar el mouse sobre, escribir y demás, para eso nosotros estaremos utilizando nuestras funciones, nosotros podremos usar las funciones *flechas*, con *constantes*, con el *nombre*; pero cuando vamos a estar modificando cosas en el navegador esta es la forma más limpia de hacerlo.

```js
//Eventos

function cambiarTexto(obj) {
    obj.innerHTML = "Texto clickeado"
}

function mOver(obj) {
    obj.innerHTML = "Mouse over now"
}

function mOut(obj) {
    obj.innerHTML = "Mouse out"
}

function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "soltame";
}

function mUp(obj) {
  obj.style.backgroundColor="#D94A38";
  obj.innerHTML="gracias";
}
```

Aquí por ejemplo, empezando desde arriba vemos que tengo la función de cambiar texto `function cambiarTexto`y recibo un objeto`(obj){obj.innerHTML = "Texto clickeado"}` y este objeto que es?, bueno, veamos que en HTML tenemos un:

```html
<h2 id="click" onclick="cambiarTexto(this)">Da click aquí</h2>
```
Ya conocemos los ``<h2>`` con un identificador `id="click"` pero esta vez observamos un `onclick=""` lo que significa este atributo es que cuando doy click a esto que e lo que va a pasar y a su lado meter JavaScript puro, sin embargo ***NO*** es la recomendación; como nosotros ya tenemos nuestro `script` cargado le decimos a que **función** va ir, porque si no, todo lo que estuviera dentro de esa función que digamos tuviera unas 20 líneas entonces todas esas líneas las tendríamos que poner aqui: `onclick="cambiarTexto(this)"`, bueno, este `onclick=""` va a hacer `(this)` cambiar el texto `cambiarTexto` y recibimos un objeto `(obj){obj.innerHTML = "Texto clickeado"}`.

Ahora bien este objeto `(obj){}` de que tipo es?
Este objeto es justo lo que tenemos al principio de todo el ``script``

```js
const titulo = document.getElementById("titulo");
const parrafo = document.getElementsByTagName("p");
const links = document.getElementsByClassName("links");
```
Que es un elemento de HTML, a este *elemento* html le vamos a dar `(this)` para decirle: cuando yo haga las cosas te voy a mandar a "this object", o sea: a mí mismo `<h2 id="click" onclick="cambiarTexto(this)">Da click aquí</h2>` en este caso sería a este `<h2></h2>`.

Si nosotros queremos decirle que si doy ``click`` que se vaya a otro entonces desde el lado del JavaScript no recibimos ningún objeto y nosotros lo agarramos de las variables de acá:

```js
const titulo = document.getElementById("titulo");
const parrafo = document.getElementsByTagName("p");
const links = document.getElementsByClassName("links");
```

## Función de cambiar texto onclick

Y exactamente que hace la función de cambiar texto
```js
function cambiarTexto(obj) {
    obj.innerHTML = "Texto clickeado"
}
```
Bueno, de el objeto que recibe ``(obj)``, en este caso él mismo `{obj.innerHTML = "Texto clickeado"}` cómo? ``obj.innerHTML`` se convierte `=` en el **string** `"Texto clickeado"` y al ser una función todo entre llaves `{obj.innerHTML = "Texto clickeado"}`.

Recordemos que al clickear el texto se mantendrá como texto clickeado hasta actualizar la página o darle otro funcionamiento.

## Función con hover click

La anterior función era ``onclick`` que literalmente hablando significa hacer un click, ahora podemos ver que cuando nosotros nos ponemos encima de algo, que se llama `hover` cambia de algún modo, para eso nosotros tenemos ``onmouseover`` y ``onmouseout``
```html
	<div onmouseover="mOver(this)" onmouseout="mOut(this)">
		<p>Mouse over me</p>
	</div>
```

* onmouseover: es cuando pasamos encima del *elemento*
* onmouseout: es cuando nos salimos del *elemento* html

Estas son funciones:
```js
function mOver(obj) {
    obj.innerHTML = "Mouse encima"
}

function mOut(obj) {
    obj.innerHTML = "Mouse afuera"
}
```

Cuando nosotros tengamos ``mouseOver`` el objeto que sea que nosotros tengamos va a decir en su `obj.innerHTML= "Mouse encima` y cuando nosotros tengamos `mouseOut` para cuando salimos del objeto nos diga `"Mouse afuera"`.

```html
 <!-- lo visto arriba aplica a este `div` -->
	<div onmouseover="mOver(this)" onmouseout="mOut(this)">
		<p>Pasa el mouse encima</p>
	</div>
```
```js
function mOver(obj) {
    obj.innerHTML = "Mouse encima"
}

function mOut(obj) {
    obj.innerHTML = "Mouse afuera"
}
```
En la página veremos que si movemos el mouse hacia ese div que está en rojo veremos cambiar el texto de: `<p>Pasa el mouse encima</p>` cambiará en primero instancia a `"Mouse encima"` y al sacar el mouse del recuadro rojo del div `"Mouse afuera"`.

## Otros eventos onmousedown y onmouseup

Este tipo de eventos para qué tipo de cosas funcionarían?
Este tipo de eventos funcionan:

* ``onmousedown``: esto funciona cuando tenemos el botón apretado, porque un *click* como tal es presionar y soltar, pro en este caso nosotros no queremos que sea un **click** y queremos que mientras esté presionado hagamos un algo, para eso es un `onmousedown`.

* ``onmouseup``: en este caso, funciona cuando el botón dejo de estar presionado y simplemente se suelta o el botón regresa a su posición original.


```html
	<div onmousedown="mDown(this)" onmouseup="mUp(this)">
		<p>Presioname</p>
	</div>
```
```js
//Evento cuando el botón este presionado
function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Soltame";
}
// Evento cuando el botón deje de estar presionado
function mUp(obj) {
  obj.style.backgroundColor="#D94A38";
  obj.innerHTML="Muchas gracias";
}
```
Veamos que de forma inicial el texto es presioname por el html `<p>Presioname</p>` y en el momento que se presiona cambia a ``obj.innerHTML = "soltame";`` y cuando dejas de presionar y por ende lo sueltas te dice ``obj.innerHTML="Muchas gracias";``, ahora veremos que hacen exactamente estas funciones.

Si nos damos cuenta lo que estamos haciendo es que cuando tengamos **"mouse down"** ``mDown`` en el objeto que otra vez es el mismo `<div></div>` pues al ``obj`` que dá el ``.style`` le cambiaremos el color `.backgroundColor = "#1ec5e5";` y a lo que diga adentro `obj.innerHTML = "Soltame";` le vamos a cambiar lo que dice, o el contenido.

Lo mismo pasa con:

```js
function mUp(obj) {
  obj.style.backgroundColor="#D94A38";
  obj.innerHTML="Muchas gracias";
}

```
El estilo cambiará de color y el texto también cambiará.

Con esto vimos la mayoría de las acciones que se pueden realizar con el mouse, también hay el `onscroll` pero eso será otro tema.


