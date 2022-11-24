# JavaScript con HTML

Para poder meter javaScript a nuestro HTML simplemente lo  podemos hacer con la etiqueta de `<script src="./3.-navegador.js"></script>` en el ``<head>``, o en este caso lo haremos de otra forma:

~~~html
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="./3.-navegador.js"></script>
	<title>JS en el navegador</title>
</head>
<body>
</body>
</html>
~~~

Aquí y de hecho esto normalmente lo cargamos en el `head` y esto se hace por si tienes alguna función que tenga que cargar rápido con la página, o si tienes algunos estilos personalizados, o lo que se a que tengas entonces lo cargas primero.

Pero, si tenemos un programa que sea muy pesado o muy grande, también lo podemos cargar hasta el final, entonces primero se ejecutan el `<head></head>` el `<body></body>` y en el `<footer></footer>` colocamos la etiqueta con el **script** esto generalmente puede ser para ahorrar un poco de espacio y que entonces se muestre primera la estructura y los estilos y después empiece a funcionar el script.

Ahora otra de las cosas para lo que se utiliza esto es para cuando quieres ocupar estas cosas como: selectores, id, clases, name, etc, entonces todos estos selectores como se utilizan en el CSS también se pueden ocupar en JavaScript, cuando nosotros queremos estar ocupando esos selectores si es necesario que nuestro script se cargue después, para que los pueda ir ubicando.

Veamos este HTML
~~~html css
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>JS en el navegador</title>
  <!-- un style en el mismo html -->
	<style>
    /* los div tendrán estos atributos */
    div{
			width: 200px;
			height: 150px;
			background-color: red;
		}
	</style>
</head>
<body>
  <!-- un h1 con un id titulo -->
	<h1 id="titulo">Así se usa JS en el navegador</h1>
  <!-- p sin nada -->
	<p>Este es un párrafo</p>
  <!-- un link con un enlace muerto pero con clase "links" -->
	<a href="#" class="links">Este es otro párrafo</a>
  <!-- otro con id demo -->
	<p id="demo"></p>
  <!-- h2 con id click -->
	<h2 id="click" onclick="cambiarTexto(this)">Da click aquí</h2>

	<div onmouseover="mOver(this)" onmouseout="mOut(this)">
		<p>Mouse over me</p>
	</div>

	<div onmousedown="mDown(this)" onmouseup="mUp(this)">
		<p>Click me</p>
	</div>
  <!-- un boton con id de boton -->
	<button id="boton"> Pruebame </button>
</body>
<footer>
  <!-- El script en este caso esta al final, en el footer -->
	<script src="./3.-navegador.js"></script>
</footer>
</html>
~~~

## Cómo podemos encontrar elementos de html dentro de nuestro JavaScript.

Nosotros vimos que nuestro ``script`` de JavaScript está incrustado en nuestro html y tenemos:

~~~js
//Encontrar elementos de HTML con diferentes formas de selectores

const titulo = document.getElementById("titulo");
const párrafo = document.getElementsByTagName("p");
const links = document.getElementsByClassName("links");
~~~
Estas formas de selectores vamos a estar utilizando para poder seleccionar cuales son los elementos de html que nosotros vamos a estar usando.

Entonces, que tipo de variable es este `const titulo = document.getElementById("titulo");` sabemos que en este caso es una constante, con un elemento de html, ahora tengamos en cuenta que tenemos `.getElementById`, `.getElementsByTagName` y `.getElementsByClassName` esto se diría que son las formas en las que nosotros podemos identificar, ahora por eso se decía que todos los elementos deberían tener un `id=""` y porque con JS y CSS podemos estar seleccionándolos y en JS es más fácil seleccionarlos por `id` que por otra cosa.



