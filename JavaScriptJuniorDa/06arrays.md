# Arrays
[**&#11176;** *Anterior* &#11007;](/JavaScriptJuniorDa/05condicionales.md "Condicionales")
[*Volver* **&ldca;**](/JavaScriptJuniorDa/README.md "Regresar a página Principal") 
[Siguiente **&#129042;**](/JavaScriptJuniorDa/ "")

---
Los objetos te permiten almacenar colecciones de datos a través de nombres.

* [Declaración](#declaración)
* [Obtener datos](#obtener-datos)
    * [Coma residual](#coma-residual)
* [***`arrays`*** asociativos](#arrays-asociativos)

Pero a menudo necesitamos una colección ordenada, donde tenemos un 1ro, un 2do, un 3er elemento y así sucesivamente. Por ejemplo, necesitamos almacenar una lista de algo: usuarios, bienes, elementos HTML, etc.

No es conveniente usar objetos aquí, porque no proveen métodos para manejar el orden de los elementos. No podemos insertar una nueva propiedad “entre” los existentes. Los objetos no están hechos para eso.

Existe una estructura llamada ``Array`` (*llamada en español ***arreglo*** o matriz/vector*) para almacenar colecciones ordenadas.

Lo podemos ver como si fuera una ``variable`` con muchos datos.

Hay muchas formas de crear un `array` pero tenemos 2 formas muy comunes de crear un `arreglo`.

* Definición y usos.
* Formas de crear un `array`.

## Declaración

Hay 2 sintaxis para crear un `array` vacío:

```js
let arr = new Array();

let arr = []
```
La segunda suele ser la más usada. Con esto nosotros agruparemos los datos que estarán adentro de una `variable` **`array`** llamados elementos que serán separados con comas `,`:

```js
let fruits = ["Apple", "Orange", "Banana"];
```
## Obtener datos
Nosotros podemos acceder a esta información.

Los elementos del array están numerados comenzando desde cero.

Podemos obtener un elemento por su número entre corchetes:

```js
let fruits = ["Apple", "Orange", "Banana"];

document.write( fruits );

// > Apple,Orange,Banana
```
Ahora veamos para qué nos sirve tener una variable con todos estos elementos, bueno, con los `arrays` se pueden hacer de todo.

Podemos ver los elementos del `array` por ejemplo:

```js
let fruits = ["Apple", "Orange", "Banana"];

document.write( fruits[0] ); // Apple
document.write( fruits[1] ); // Orange
document.write( fruits[2] ); // Bananas

// > AppleOrangeBanana
```
Si nosotros quisieramos solamente el primer elemento debemos indicar cual es la posición de la que queremos obtener los datos:
```js
let fruits = ["Apple", "Orange", "Banana"];

document.write( fruits[1] ); // Orange

// > Orange
```
Los `array` tienen divididos sus elemento por el número de las posiciones que ocupan, en este caso del `[0]` al `[2]`, si nosotros colocáramos por error `[3]`:

```js
let fruits = ["Apple", "Orange", "Banana"];

document.write( fruits[3]);

// > undefined
```
`undefined` porque en la posición `[3]` no existe. En la consola de desarrollo no lo muestra, pero en pantalla sí, porque los datos de los ``array`` lo que no definimos es tratado como `undefined`.

No nos muestra error porque aún sin existir nos dice que está sin definir `undefined` porque en los ``array`` los que no están definidos se quedan ``undefined`` porque el `array` ya está declarado, todas las posiciones posibles para ese `array` también están declaradas, solamente sus valores no están inicializados, tomemos en cuenta que que cuando declaramos un `array` todas las posiciones ya están declaradas aunque no estén definidas. Si agregamos algunos elementos manualmente:

```js
let fruits = ["Apple", "Orange", "Banana", 5, 9, "Lemon"];

document.write( fruits[3]);

// > 5
```
Ahora definimos el valor en la posición ``[3]``, por lo tanto estamos llamando a la posición ``[3]`` y tenemos el resultado `5`.

Podemos reemplazar un elemento:

```js
fruits[2] = 'Pear'; 

// > ["Apple", "Orange", "Pear"]
```
O agregar un nuevo `array`
```js
fruits[3] = 'Lemon'; 
// > ["Apple", "Orange", "Pear", "Lemon"]
```
La cuenta total de elementos es su longitud `length`:

```js
let fruits = ["Apple", "Orange", "Plum"];

alert( fruits.length ); // 3
```
Un array puede almacenar elementos de cualquier **tipo**.

```js
// mezcla de valores
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// obtener el objeto del índice 1 y mostrar su nombre
alert( arr[1].name ); // > John

// obtener la función del índice 3 y ejecutarla
arr[3](); // > hello
```

### **Coma residual**
Un array, al igual que un objeto, puede tener una coma final:
```js
let fruits = [
  "Apple",
  "Orange",
  "Plum",
];
```
La “coma final” hace más simple insertar y remover items, porque todas la líneas se vuelven similares.

```js
```
```
```

## ***`array`*** asociativos

Los ***`array`*** asociativos se parecen más al formato JSON, que trabaja con el intercambio de información.

Es un `array` que tiene un valor asociado. Cada valor tendrá un valor asociado y cuando lo llamemos no nos mostrará el elemento, nos mostrará el dato asociado.

Cuando creamos un `array` es lo mismo que decirle:

> 0 = al dato 1
> 1 = al dato 2
> 2 = al dato 3

Revisemos cómo se estructura uno
```js
let pc1 = {
  nombre: "Endymion",
  procesador: "Intel core I9",
  ram: "32GB",
  espacio: "2TB"
};

// Cómo lo hicimos al principio:
pc2 = ["Endymion", "Intel core I9", "32GB", "2TB"];

// Aqui tenemos lo mismo pero escrito de otra forma, sin embargo tienen sus diferencias claras

document.write(pc2);

// > Endymion,Intel core I9,32GB,2TB

document.write(pc1);

// >  [object Object]
```
El resultado del `array` `pc2` es `Endymion,Intel core I9,32GB,2TB`.

El resultado del `array` `pc1` es `[object Object]`.

 * `pc2` - Si quisieramos llamar un elemento simplemente escribiríamos.
```js
document.write(pc2[1]);

// > Intel core I9
```
 * `pc1` - Y queremos ver el primer dato:

```js
document.write(pc1[0]);

// > undefined
```
Porque nosotros le estamos diciendo ``[0]`` pero para que en este caso funcione nosotros debemos colocar

```js
document.write(pc1["nombre"]);

// > Endymion
```
Nosotros ponemos `"nombre"` y nos dará el dato que le estamos pidiendo `Endymion`, de este modo es mucho más intuitivo, porque estamos pidiendo un dato concreto en lugar de sólo una posición:

```js
let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];
```
Y con estos datos almacenados en variables podemos manejar de mejor manera estos valores
```js
frase = `el nombre de mi PC es: ${nombre} <br>
        el procesador es: ${procesador} <br>
        la memoria ram es : ${ram} <br>
        el espacio en disco es de ${espacio}`;

// Para mostrarlo en pantalla podemos

document.write(frase);

/* >
el nombre de mi PC es: Endymion
el procesador es: Intel core I9
la memoria ram es : 32GB
el espacio en disco es de 2TB*/
```
Si seguimos arreglando un poco lo visual con HTML

```js
frase = `el nombre de mi PC es: <b>${nombre}</b> <br>
        el procesador es: <b>${procesador}</b> <br>
        la memoria ram es : <b>${ram}</b> <br>
        el espacio en disco es de <b>${espacio}</b>`;

// Para mostrarlo en pantalla podemos

document.write(frase);

// Veremos el resultado resaltado con negritas
/* >
el nombre de mi PC es: Endymion
el procesador es: Intel core I9
la memoria ram es : 32GB
el espacio en disco es de 2TB*/
```
Se trabaja con `array` para poder ordenar los datos y manejarlos de la mejor forma posible.


---

[**&#11176;** *Anterior* &#11007;](/JavaScriptJuniorDa/05condicionales.md "Condicionales") 
[Siguiente **&#129042;**](/JavaScriptJuniorDa/0 "")

[*Volver* **&ldca;**](/JavaScriptJuniorDa/README.md "Regresar a página Principal") 
[*Subir* **&#11165;**](#arrays "Ir al título")