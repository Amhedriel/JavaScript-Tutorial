# Funciones

Ahora bien, este título dice: `<h1 id="titulo">Así se usa JS en el navegador</h1>` pero nosotros en el documento de JS tenemos una función `titulo.innerHTML = "Titulo cambiado";` que ya sabemos que se refiere al `id="titulo"` y tenemos `.innerHTML` este `.innerHTML` es que vamos a cambiar lo que está adentro de la etiqueta que tenga su `id="titulo"` entonces vamos a tener el contenido de su título cambiado.

```html
<body>
	<h1 id="titulo">Así se usa JS en el navegador</h1>
	<p>Este es un párrafo</p>
	<a href="#" class="links">Este es otro párrafo</a>
</body>

```
```js
// titulo.innerHTML = "Título cambiado";

"Así se usa JS en el navegador"
```

Veamos que nuestro mensaje en el título de nuestro navegador dice "Asi se usa JS en el navegador" que sería el título que colocamos en la estructura de nuestro HTML pero si en nuestro archivo de `3.-navegador.js` des comentamos `titulo.innerHTML = "Título cambiado";` veremos otro resultado:

```html
<body>
	<h1 id="titulo">Así se usa JS en el navegador</h1>
	<p>Este es un párrafo</p>
	<a href="#" class="links">Este es otro párrafo</a>
</body>

```
```js
titulo.innerHTML = "Título cambiado";

<-
Título cambiado
```
Como vimos, nosotros podemos cambiar el HTML desde el código de JavaScript, no solo al título, también podemos hacerlo con el párrafo, al ancla, a quien queramos:

```html
<body>
	<h1 id="titulo">Así se usa JS en el navegador</h1>
	<p id="parrafo">Este es un párrafo</p>
	<a href="#" class="links">Este es otro párrafo</a>
</body>

```
```js
titulo.innerHTML = "Título cambiado";
parrafo.innerHTML = "Párrafo cambiado";

<-
Título cambiado
<-
Párrafo cambiado
```

Siempre y cuando no olvidemos las especificidad o las prioridades estaremos bien.

Muy bien, ahora, lo que hicimos nosotros en un principio es la manera limpia de hacerlo.

```js
const titulo = document.getElementById("titulo");
const parrafo = document.getElementsByTagName("p");
const links = document.getElementsByClassName("links");
```

Asignarle una constante y después de esa constante ir haciendo los diferentes movimientos dentro de las cosas. Pero, no es la única forma:

```html
	<p id="demo"></p>
```
```js
document.getElementById("demo").innerHTML =
```
Aquí lo que estamos haciendo es, agarrar el elemento que tenga el `id="demo"` y ya vimos que es un párrafo entonces esa `p` va a ser igual a:

```js
																					// este parrafo *
'The text in first paragraph (index 0) is: ' + parrafo[0].innerHTML;
```
*Que justamente tenemos por **TagName** `const parrafo = document.getElementsByTagName("p");`

El problema es que nos modifica todos los elementos con etiquetas `<p></p>`, por lo tanto este párrafo no va a hacer solamente una cosa, va a ser un **arreglo**:

```js
const titulo = document.getElementById("titulo");
const parrafo = document.getElementsByTagName("p");
const links = document.getElementsByClassName("links");

// creamos un console.lo(); para ver el resultado en consola
console.log(parrafo);

// el resultado es un arreglo con todos los <p>
HTMLCollection(4) [p#parrafo, p#demo, p, p, parrafo: p#parrafo, demo: p#demo]
// <p> con clase parrafo
0: p#parrafo
// <p> con clase demo
1: p#demo
// 2 <p>
2: p
3: p

demo: p#demo
parrafo: p#parrafo
length: 4
[[Prototype]]: HTMLCollection
```
Verificando vemos que la constante `const parrafo` son 4 en total, si nosotros queremos hacer una modificación a solo uno de estos elementos `parrafo`, debemos seleccionar el elemento ``parrafo`` del array, para poder modificarlo.

```html
<body>
	<h1 id="titulo">Así se usa JS en el navegador</h1>
	<p id="parrafo">Este es un párrafo</p>

	<p id="demo"></p>
 
	<div onmouseover="mOver(this)" onmouseout="mOut(this)">
		<p>Mouse over me</p>
	</div>

	<div onmousedown="mDown(this)" onmouseup="mUp(this)">
		<p>Click me</p>
	</div>
</body>
```

```js
const titulo = document.getElementById("titulo");
const parrafo = document.getElementsByTagName("p");
const links = document.getElementsByClassName("links");

// cambiar valores de html
titulo.innerHTML = "Título cambiado";
// seleccionaremos el elemento que queremos modificar del array
parrafo[2].innerHTML = "Parrafo cambiado";
// el resultado es un arreglo con todos los <p>
HTMLCollection(4) [p#parrafo, p#demo, p, p, parrafo: p#parrafo, demo: p#demo]
// <p> con clase parrafo
0: p#parrafo
// <p> con clase demo
1: p#demo
// 2 <p>
2: p
3: p

demo: p#demo
parrafo: p#parrafo
length: 4
[[Prototype]]: HTMLCollection
```
Con este código cambiamos el tercer elemento que tiene el arreglo(array), en este caso sería `<p>Mouse over me</p>` convirtiéndolo con `parrafo[2].innerHTML = "Parrafo cambiado";` en el mensaje **"Parrafo cambiado"**

---

[**&#11176;** *Anterior* &#11007;](/JavaScript/TeoriaJSyHTML/002_manipulandoEtiquetas.md "Manipulando etiquetas .getElements;") 
[Siguiente **&#129042;**](/JavaScript/TeoriaJSyHTML/004_innerHTML.md "innerhtml")

[*Volver* **&ldca;**](/JavaScript/TeoriaJSMedio/README.md "Regresar a título") 
[*Subir* **&#11165;**](# "Ir al título")

