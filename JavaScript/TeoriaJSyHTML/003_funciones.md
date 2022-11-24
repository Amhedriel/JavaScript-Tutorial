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
Aquí lo que estamos haciendo es, agarrar el elemento que tenga el `id="demo"` y ya vimos que es un párrafo

---

[**&#11176;** *Anterior* &#11007;](/JavaScript/TeoriaJSyHTML/002_manipulandoEtiquetas.md "Manipulando etiquetas .getElements;") 
[Siguiente **&#129042;**](/JavaScript/TeoriaJSyHTML/004 "")

[*Volver* **&ldca;**](/JavaScript/TeoriaJSMedio/README.md "Regresar a título") 
[*Subir* **&#11165;**](# "Ir al título")

