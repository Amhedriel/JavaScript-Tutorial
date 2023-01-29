# Bucles e iteración
[**&#11176;** *Anterior* &#11007;](/JavaScriptJuniorDa/006.1arraysElementos.md "Array elements")
[*Volver* **&ldca;**](/JavaScriptJuniorDa/README.md "Regresar a página Principal") 
[Siguiente **&#129042;**](/JavaScriptJuniorDa/07buclesEIteracion "Bucles")

---

## Definición y usos

Usualmente necesitamos repetir acciones.

Por ejemplo, mostrar los elementos de una lista uno tras otro o simplemente ejecutar el mismo código para cada número del 1 al 10.

Los Bucles son una forma de repetir el mismo código varias veces.

Veamos algo:

```js
numeroParaSumar = 0;

if (numeroParaSumar < 10) {
  document.write("es menor que 10");
}

// > es menor que 10
```

```js
numeroParaSumar = 0;

if (numeroParaSumar <10) {
  numeroParaSumar++;
  console.log(numeroParaSumar);
}

// > 1
```
Aqui podemos ver que nos muestra el resultado de uno gracias al operador `++`, sin embargo lo que nosotros queremos es que nos muestre otra cosa, intentemos esto:

```js
numeroParaSumar = 0;

if (numeroParaSumar <10) {
  numeroParaSumar++;
  numeroParaSumar++;
  numeroParaSumar++;
  console.log(numeroParaSumar);
}

// > 3
```
Recordemos que `++` es lo mismo que `x = x + 1` pero lo abreviamos a `x++`.

Esto lo que hace es sumar 1, si `if` nuestra condición se cumple, el número que queremos sumar `(numeroParaSumar < 10)` es menor al número 10.
Entonces sumamos el número para sumar + 1 `numeroParaSumar++;` pero al colocar 3 instrucciones, fuimos sumando + 1 por cada línea, lo que hace un total de 3 veces, entonces le decimos que el resultado nos lo muestre por pantalla `console.log(numeroParaSumar)`.

Sin embargo, esto es un poco tardado y muy complicado de hacer, además de poco práctico, lo que buscamos hacer es: que cuente automáticamente un número sumando la cantidad de veces que necesitemos hasta cumplir cierta condición y mostrándonos los resultados para hacer cierta tarea específica con ello.

## ***`while`***

Es un bucle indeterminado, porque mientras la condición se cumpla el bucle se ejecutará siempre.

El bucle while (mientras) tiene la siguiente sintaxis:

```js
while (condicion) {
  // código
  // llamado "cuerpo del bucle"
}
```
Mientras la condición condition sea verdadera, el código del cuerpo del bucle será ejecutado.

```js
let numero = 0;

while (numero < 10) {
  console.log(numero);
}

// > infinito
```
Este es un mal ejemplo, debido a que no tiene una condición de término, por lo tanto se estará ejecutando continuamente, evitar hacer esto.

Lo que nosotros debemos hacer por ejemplo, el bucle debajo imprime ``i`` mientras se cumpla ``i < 3``:

```js
let i = 0;
while (i < 3) { 
  document.write( i );
  i++;
}
// > muestra 0, luego 1, luego 2
```
Cada ejecución del cuerpo del bucle se llama iteración. El bucle en el ejemplo de arriba realiza 3 iteraciones.

Si faltara ``i++`` en el ejemplo de arriba, el bucle sería repetido (en teoría) eternamente. En la práctica, el navegador tiene maneras de detener tales bucles desmedidos; y en el JavaScript del lado del servidor, podemos eliminar el proceso.

No olvidar que el orden es importante:

```js
let i = 0;
while (i < 3) { 
  i++;
  console.log( i );
}
// > muestra 1, luego 2, luego 3
```
Cualquier expresión o variable puede usarse como condición del bucle, no solo las comparaciones: El ``while`` evaluará y transformará la condición a un booleano.

Por ejemplo, una manera más corta de escribir ``while (i != 0)`` es ``while (i)``:
```js
let i = 3;
while (i) { // cuando i sea 0, la condición se volverá falsa y el bucle se detendrá
  alert( i );
  i--;
}
```
> ### **Las llaves no son requeridas para un cuerpo de una sola línea**
> Si el cuerpo del bucle tiene una sola sentencia, podemos omitir las llaves `{...}`:
>
> ```js
>let i = 3;
>while (i) alert( i-- );
> // cuando i sea 0, la condición se volverá falsa y el bucle se detendrá
>```
>
### **NOTA**
Se suele utilizar la variable `i` de `iteración` para realzar el conteo en los bucles.

## ***``do...while``***
La comprobación de la condición puede ser movida debajo del cuerpo del bucle usando la sintaxis ``do..while``.

```js
do {
  // cuerpo del bucle
} while (condition);
```
El bucle primero ejecuta el cuerpo, luego comprueba la condición, y, mientras sea un valor verdadero, la ejecuta una y otra vez.

Por ejemplo:

```js
let numero = 0;

do {
  numero++;
  console.log(numero);
} while ( numero <= 5 );

// > 0 1 2 3 4 5

console.log(numero);

// > 0 1 2 3 4 5 6
```
Aquí primero suma el número `numero++;` y después lo muestra en pantalla `console.log(numero);` y después del proceso se pregunta, número es menor o igual a 5? `while ( numero <= 5)` aquí si cumple la condición se vuelve a ejecutar, en caso de que no, simplemente pasa a lo siguiente.
Debemos tener cuidado con esto, porque podemos observar que aún pidiendo que sea `<= 5` el resultado final es `6` debido a que `while ( numero <= 5 );` se cumple y dá una vuelta más

```js
let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);
```
Con `strings`
```js
let tuNombre = "David";
do {
  tuNombre = prompt("Quien eres? ");
} while (!tuNombre);

alert(tuNombre);
console.log(typeof(tuNombre));

// > David
// string
```
## ***`for`***
El bucle for es más complejo, pero también el más usado.

Se ve así:

```js
for (begin; condition; step) { // (comienzo, condición, paso)
  // ... cuerpo del bucle ...
}
```
El `for` es casi exactamente igual al `while` pero la diferencia es que: es un bucle determinado, `for` se ejecuta las veces que nosotros le indiquemos.

`for` se compone de 3 partes:
+ declarar e inicializar
+ condición
+ iteración (aumento - decremento)

```js
// Hagamos de cuenta que es un "if", con la diferencia que tenemos 3 cosas
// Creamos la variable que generalmente se pone "i" de iteración, que será 0, la declaramos y la inicializamos "i = 0" 
// en el "for se crean variables".
// ahora procedemos a la condición "i < 6;" lo que le indica si se va a ejecutar.
// Y por último la iteración "i++", le estamos diciendo, te muestras "i" y luego te sumas "++"

for (let i = 0; i < 6; i++) { // i = 0; mientras i < 6 se ejecuta; nos muestra i que vale 0 y luego le suma 1 ++
  // como i = 6 entonces; i < 6 no; por lo tanto i no se muestra en pantalla porque se termina el programa
  document.write(i + "<br>");
}

/* > 
0 1 2 3 4 5
*/
```
|Parte|Código|Que hace?|
|---:|:---:|---|
|*comienzo*|**`let i = 0`**|Se ejecuta una vez al comienzo del bucle.|
|*condición*|**`i < 6`**|	Comprobada antes de cada iteración del bucle. Si es ``false``, el bucle finaliza.|
|*cuerpo*|**`document.write(i + "<br>")`**|Se ejecuta una y otra vez mientras la condición sea ``true``.|
|*paso*|**`i++`**|Se ejecuta después del cuerpo en cada iteración.|
||||

En decremento:
```js
for (let i = 6; i >= 0; i--) {
  document.write(i + "<br>");
}

/*
6 5 4 3 2 1 0
*/
```
Se puede usar una variable que fue declarada y/o inicializada fuera del `for` solamente colocando el nombre de la variable

```js
let i = -1;

for ( ; i < 3; i++ ) {
  document.write(i + "<br>");
}

document.write(i);
/*
-1 0 1 2 3
*/
```
También podemos eliminar la parte **paso**:
```js
let i = 0;

for (; i < 3;) {
  console.log( i++ );
}
/*
0 1 2
*/

```
Si `for` tiene una sola línea se puede omitir las llaves `{...}`

```js
for ( i = -1; i < 3; i++ ) document.write(i + "<br>");

/*
-1 0 1 2 3
*/
```
Oh!
```js
let i = 0;

for (; i < 3;) console.log( i++ ); // > 0 1 2
```
### **`for in`**

Para recorrer todas las claves de un objeto existe una forma especial de bucle: ``for..in``. Esto es algo completamente diferente a la construcción ``for(;;)``

Lo que hace `in` es devolvernos la posición de los elementos que estén dentro del array/object 

La sintaxis:

```js
for (key in object) {
  // se ejecuta el cuerpo para cada clave entre las propiedades del objeto
}
```
Si nosotros tuviéramos por ejemplo:

```js
// un array de animales
let animales = ["gato", "perro", "tyrannosaurus"];

for (animal in animales){
  console.log(animal);
}

// > 0 1 2
```
Nosotros le dijimos: muéstranos ``animal`` dentro `in` de `animales`, la primera vuelta será igual a la posición ``gato``, en la segunda será `perro` y en la tercera será igual a la posición en la que se encuentra `tyrannosaurus`, básicamente nos devuelve el índice/posición en la que están los elementos.

Ahora si lo que queremos es mostrar los **elementos** debemos agregar a nuestra salida el array del que sacaremos los datos `(animales[animal]);`

```js
let animales = ["gato", "perro", "tyrannosaurus"];

for (animal in animales){
  console.log(animales[animal]);
}

// > gato perro tyrannosaurus
```
De esta forma mostramos el contenido porque le decimos que entre al bucle `animales` al elemento `[animal]`
Por ejemplo, mostremos todas las propiedades de ``usuario``:

```js
let usuario = {
  nombre: "John",
  edad: 30,
  esAdmin: true
};

for (let llaves in usuario) {
  // claves
  console.log( llaves );  // name, age, isAdmin
  // valores de las claves
  console.log( usuario[llaves] ); // John, 30, true
}

/* > nombre     
     John       
     edad       
     30         
     esAdmin    
     true       
*/
```
Revisando un poco
```js
let usuario = {
  nombre: "John",
  edad: 30,
  esAdmin: true
};

for (let key in usuario) {
  // claves
  document.write( key, "<br>");  // nombre, edad, esAdmin
  console.log( typeof(key) );
  // valores de las claves
  document.write( usuario[key], "<br>"); // John, 30, true
  console.log( typeof(usuario[key]) );
}

/* > nombre     string
     John       string
     edad       string
     30         number
     esAdmin    string
     true       boolean
*/
```
### ***Nota*** 

Que todas las construcciones `for` nos permiten declarar variables para bucle dentro del bucle, como ``let key`` aquí.

Además podríamos usar otros nombres de variables en lugar de ``key``. Por ejemplo, "``for (let prop in obj)``" también se usa bastante.

### **`for of`**
Funciona prácticamente igual que `in` pero en:

```js
let animales = ["gato", "perro", "tyrannosaurus"];

for (animal of animales){
  console.log(animal);
}

// > gato perro tyrannosaurus
```
Nos muestra directamente los valores de esos datos, con el `of` recorremos todos los datos, recorre inclusive las propiedades de los prototipos con los que trabaja.

```js

```
```
```
```
```
```
```

## ***`break`***
## ***`label`***

---

[**&#11176;** *Anterior* &#11007;](/JavaScriptJuniorDa/006.1arraysElementos.md "Array elements") 
[Siguiente **&#129042;**](/JavaScriptJuniorDa/07buclesEIteracion "Bucles")

[*Volver* **&ldca;**](/JavaScriptJuniorDa/README.md "Regresar a página Principal") 
[*Subir* **&#11165;**](#arrays "Ir al título")