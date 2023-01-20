# Condicionales
[**&#11176;** *Anterior* &#11007;](/JavaScriptJuniorDa/04concatenacion.md "Concatenación")
[*Volver* **&ldca;**](/JavaScriptJuniorDa/README.md "Regresar a página Principal") 
[Siguiente **&#129042;**](/JavaScriptJuniorDa/ "")

---
Muy a menudo, cuando escribe código, desea realizar diferentes acciones para diferentes decisiones.

Puede usar declaraciones condicionales en su código para hacer esto.

En JavaScript tenemos las siguientes declaraciones condicionales:

* [**``if``**](#if) para especificar un bloque de código que se ejecutará, si una condición especificada es verdadera.
  * [**``else``**](#else) para especificar un bloque de código a ejecutar, si la misma condición es falsa.
  * [**``else if``**](#else-if) para especificar una nueva condición para probar, si la primera condición es falsa.

Un condicional es una sentencia que nos permite validar algo, es ejecutar un **bucle**, un fragmento de código, un **bloque** (*Todo lo que está entre llaves {})*.

## **`if`**
Los **condicionales** sirven para que los bloques se ejecuten solamente si una condición se cumple:

```js
if (true){
  alert("Hola")
}
// > Hola
```
Viendo el bloque sabemos que `alert()` solo se ejecutará si se cumple la condición impuesta `if(true)`.

En caso de ser `false` entonces no se ejecutaría

```js
if (false){
  alert("Hola")
}
// > No hace nada porque no se ejecuta el bloque
```
Veamos un ejemplo más práctico.

```js
if (10 < 15){
  alert("Hola")
}

// > Hola
```
Pero:
```js
if (10 > 15){
  alert("Hola")
}

// > No se ejecuta el bloque
```
No se llega a ejecutar debido a que es `false`

```js
let nombre = "David Beltrán";

if(nombre == "David Beltrán"){
  console.log(nombre);
}

// > David Beltrán
```
---
## **`else`**

Utilice la instrucción ``else`` para especificar un **bloque** de código que se ejecutará si la condición es ``false``.
```js
if (condicion) {
  //  bloque que se ejecuta si la condición es true.

} else {
  //  bloque que se ejecuta si la condición es false.

}
```
Si la hora es menos de las 18, crea un saludo de "Buenos días", de lo contrario "Buenas noches":

```js

let hora = 21;

if(hora < 20){          // false
  saludo = "Buenas";
}else{                  // se ejecuta esta opción
  saludo = "Buenas noches";
}

console.log(saludo); // muestra resultado en la pantalla

// > Buenas noches
```


## **`else` `if`**

El último ejemplo nos proporcionó dos opciones o resultados, pero ¿qué ocurre si queremos más de dos?

Hay una forma de encadenar opciones ``/`` resultados adicionales extras a ``if...else`` — usando ``else`` ``if``. Cada opción extra requiere un bloque adicional para poner en medio de bloque ``if() { ... }`` y ``else { ... }``. Se pueden utilizar ilimitadamente.

Si la primera condición no se cumple iremos a otra condición.
```js

let hora = 18;
if(hora < 12){
  saludo = "Buen día";
}else if(hora < 20){
  saludo = "Buenas tardes";
}else{
  saludo = "Buenas noches"
}

console.log(saludo);

// > Buenas tardes
```
Veamos con `strings`
```js
let nombre = "David";

if (nombre == "Lucas"){
  console.log("Buenas " + nombre)
} else if(nombre == "David"){
  console.log("Que hay " + nombre)
} else{
  console.log("No eres administrador verdad¿?")
}

// > Que hay David
```
Otro ejemplo:
```js
let nombre = "David";
let apellido = "Beltrán";

if(nombre == "David" && apellido == "Beltrán"){
  console.log("Buenas " + nombre);

} else if (nombre == "Lucas" && apellido == "Marcos"){
  console.log("Que hay " + nombre);

} else{
  console.log("No eres administrador verdad¿?");
}

// > Buenas David
```
---

[**&#11176;** *Anterior* &#11007;](/JavaScriptJuniorDa/04concatenacion.md "Concatenación") 
[Siguiente **&#129042;**](/JavaScriptJuniorDa/0 "")

[*Volver* **&ldca;**](/JavaScriptJuniorDa/README.md "Regresar a página Principal") 
[*Subir* **&#11165;**](#condicionales "Ir al título")