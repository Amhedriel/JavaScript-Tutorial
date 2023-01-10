# Práctica de JavaScript "Pokedex"

Nosotros trataremos de construir un Pokedex.

## Poke Api

Lo primero que debemos hacer es buscar en el navegador una página que e llama ***"PokeApi"*** y esta nos va ir regresando la info de los pokemons.

Esta https://pokeapi.co/ es pública y si en la página buscamos por ejemplo un: ditto, nos mostrará toda la información de dicho Pókemon y no solo eso, tiene varias formas de buscar información específica.

Ahora toda esta información viene en algo llamado API de forma REST, o sea es un objeto.

## Nuestra página aplicación Pokedex LaunchX

Si yo tengo mi Pokedex LaunchX y buscamos un Pokemon, podremos ver las imágenes de nuestros Pókemons, si colocamos el número del Pókemon, nos mostrará su imagen.

Revisemos que tiene nuestro HTML de Pókedex, que en realidad tiene solo 3 cosas bien sencillas.

~~~html
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Pokedex LaunchX</title>
	<!-- 1. Tenemos un link para poder cargar nuestra hoja de estilos con CSS -->
	<link rel="stylesheet" href="./pokedex.css">
	
</head>
<body>
  <!-- 2. Algunos elementos en el body -->
	<h1>Pokedex LaunchX</h1>
	<!-- Tenemos un input -->
	<input type="text" placeholder="pikachu" id="pokeName" name="pokeName">
	<!-- Una imagen de una pókebola, pero esta pókebola no la tenemos acá de momento -->
	<img src="./pokeball.png" alt="Pokemon" id="pokeImg" width="150px">
	<!-- Boton con evento onclick -->
	<button onclick="fetchPokemon()">Cambiar Imágen</button>
</body>
<footer>
  <!-- 3. Aquí tenemos nuestro script para nuestro JavaScript namespace -->
  <script src="./4.-pokedex.js"></script>
</footer>
</html>
~~~

Y de este otro lado tenemos nuestro JavaScript inicial

~~~js
const fetchPokemon = () => {
	const pokeNameInput = document.getElementById("pokeName");
	let pokeName = pokeNameInput.value;
	pokeName = pokeName.toLowerCase();
	const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
	fetch(url).then((res) => {
		if (res.status != "200") {
			console.log(res);
			pokeImage("./pokemon-sad.gif")
		}
		else {
			return res.json();
		}
	}).then((data) => {
		if (data) {
			console.log(data);
			let pokeImg = data.sprites.front_default;
			pokeImage(pokeImg);
			console.log(pokeImg);
		}
	});
}

const pokeImage = (url) => {
	const pokePhoto = document.getElementById("pokeImg");
	pokePhoto.src = url;
}
~~~

Necesitaremos crear un archivo de CSS desde cero, por lo que de momento no colocaré aqui.

## Procedimiento 1

Primero Cambiaremos la imagen de la Pókebola en el HTML, yo lo haré con un SVG que yo mismo creé con AIlustrator para esta ocasión, asi que si alguien lo quiere usar o modificar no hay problema alguno.

~~~html
<img src="/JavaScript/media/PokeballAmhedriel.svg" alt="Pokemon" id="pokeImg" width="150px">
~~~

Y también notemos que nuestro ``button`` tiene una función `fetch`

~~~html
<button onclick="fetchPokemon()">Cambiar Imágen</button>
~~~

Y esta función se encuentra en nuestro archivo de JavaScript
~~~js
const fetchPokemon = () => {
	const pokeNameInput = document.getElementById("pokeName");
	let pokeName = pokeNameInput.value;
	pokeName = pokeName.toLowerCase();
	const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
	// fetch (alcanzar) nos sirve para poder consultar apps y nos devuelve la respuesta
	// .then es una promesa, cuyo resultado se encuentra más abajo
	fetch(url).then((res) => {
		// Si el código de respuesta es diferente de 200 (que indica que todo esta bien) entonces se ejecuta
		if (res.status != "200") {
			console.log(res);
			// devuelve esta imagen si no existe en el buscador lo consultado error 404
			pokeImage("./pokemon-sad.gif")
		}
		else {
			// Y si todo va bien, devuelve el json return res.json();
			return res.json();
		}
		// Acá tenemos un .then, el punto al inicio lo que quiere decir es que cuando termina la promesa de arriba continúa con esta
		// y then lo podemos cambiar por un async await
	}).then((data) => {
		if (data) {
			console.log(data);
			let pokeImg = data.sprites.front_default;
			pokeImage(pokeImg);
			console.log(pokeImg);
		}
	});
}
~~~


~~~html

~~~
~~~html

~~~