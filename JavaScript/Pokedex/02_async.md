# Hacer una promesa asíncrona

Bueno, nosotros ya vimos este código:

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
Pero debido al anidamiento de promesas y el hecho que tienen que estar haciendo consultas constantemente a páginas externas, notamos un retraso de respuesta a nuestras peticiones, y todo esto lo tenemos que hacer en el ``stack`` de que se espere en el ``await`` justamente, asi que podemos intentar mejorar esto aplicando ``ticks`` con un ``async`` ``await``

~~~js
// para convertirlo en asíncrono colocamos async aquí
const fetchPokemon = async () => {
	const pokeNameInput = document.getElementById("pokeName");
	let pokeName = pokeNameInput.value;
	pokeName = pokeName.toLowerCase();
	const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

// para poder hacer que esta función sea asíncrona empezamos con el async allá arriba
// Y aquí le agregamos el await

//	await fetch(url).then((res) => {
  // el Await nos va a regresar una respuesta, que es el .then de más abajo entonces a este await le tenemos que asignar a algo:
    let data = await fetch(url).then((res) => {

		if (res.status != "200") {
			console.log(res);
			pokeImage("./pokemon-sad.gif")
		}
		else {
			return res.json();
		}
  // al haber asignado nuestro await a una variable let podemos ahora liberar(borrarlo) este .then
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

Revisando el código con los cambios:

~~~js
const fetchPokemon = async () => {
	const pokeNameInput = document.getElementById("pokeName");
	let pokeName = pokeNameInput.value;
	pokeName = pokeName.toLowerCase();
	const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    // por lo tanto data sería igual a la respuesta que sea esta
    let data = await fetch(url).then((res) => {

		if (res.status != "200") {
			console.log(res);
			pokeImage("./pokemon-sad.gif")
		}
		else {
			return res.json();
		}

	})
  		if (data) {
			console.log(data);
			let pokeImg = data.sprites.front_default;
      // esta otra función que se llama pokeImage y tiene a (pokeImg) como parámetro
			pokeImage(pokeImg);
			console.log(pokeImg);
		};
}

// Esta función flecha cambia la imagen de nuestro pokemon dentro de nuestro HTML con "pokePhoto" gracias a la "función pokeImage" 
const pokeImage = (url) => {
  // Este document.getElementById("pokeImg"); es el que tenemos en HTML <img src="/JavaScript/media/PokeballAmhedriel.svg" alt="Pokemon" id="pokeImg" width="150px">
  // porque podemos ver que tenemos nuestro "id="pokeImg""
	const pokePhoto = document.getElementById("pokeImg");
  // Este es el source src="/JavaScript/media/PokeballAmhedriel.svg entonces va a cambiar por esta url
	pokePhoto.src = url;
}
~~~

SI nos da respuesta es porque la consulta fue exitosa,si no fue exitosa directamente no nos va a dar respuesta, si existe respuesta entonces pedirá los datos de la función `if (data)`, lo que esta haciendo es cambiar la imagen, esta imagen puede ser el `pokeImage("./pokemon-sad.gif")` o la ``data`` que venga del `if`.

## Nombre

Que pasa si queremos poner el nombre del Pókemon justo debajo de la imagen del Pókemon.

Usaríamos un poco de CSS junto con JS, por lo tanto debemos crear nuestro archivo pokedex.css y enlazarlo al HTML.