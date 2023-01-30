# Bucles e iteración
[**&#11176;** *Anterior* &#11007;](/JavaScriptJuniorDa/006.1arraysElementos.md "Array elements")
[*Volver* **&ldca;**](/JavaScriptJuniorDa/README.md "Regresar a página Principal") 
[Siguiente **&#129042;**](/JavaScriptJuniorDa/007.1forInOf.md "Bucles for in/of")

---

* [Definición y usos](#definición-y-usos "Definición")

* [***`while`***](#while "Sentencia while")
    * [***`Las llaves no son requeridas`***](#las-llaves-no-son-requeridas-para-un-cuerpo-de-una-sola-línea "")
    * [***`NOTA`***](#nota "")

* [***`do...while`***](#dowhile "Sentencia do...while")

* [***`for`***](#for "Sentencia for")

    * [***`for...in`***](007.1forInOf.md "Sentencia for..in")

    * [***`for...of`***](007.1forInOf.md "Sentencia for..of")

* [***`break`***](#break "Sentencia break")

* [***`continue`***](#continue-a-la-siguiente-iteración "Sentencia continue")

* [***`label`***](#label-o-etiquetas-para-breakcontinue "Sentencia label")

* [Resumen](#resumen "Resumen")

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

---

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

---

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

---

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
---

## ***`break`***

Normalmente, se sale de un bucle cuando la condición se vuelve falsa.

Pero podemos forzar una salida en cualquier momento usando la directiva especial ``break``.

Por ejemplo, el bucle debajo le pide al usuario por una serie de números, “rompiéndolo” cuando un número no es ingresado:
```js
let sum = 0;

alert("En la siguiente venta digite los números que quiere sumar, presione cualquier letra para terminar");

while (true) {

  let value = +prompt("Ingresa un número", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Suma: ' + sum );


```
La directiva ``break`` es activada en la línea ``(*)`` si el usuario ingresa una línea vacía o cancela la entrada. Detiene inmediatamente el bucle, pasando el control a la primera línea después de el bucle. En este caso, ``alert``.

La combinación “bucle infinito + ``break`` según sea necesario” es ideal en situaciones donde la condición del bucle debe ser comprobada no al inicio o al final de el bucle, sino a la mitad o incluso en varias partes del cuerpo.

Veamos que:

```js
let numero = 0;

while(numero < 1000) {
  numero++;
  console.log(numero);
}
```
Con este bucle el programa contará de uno en uno hasta llegar a 1000, pero si por alguna razón nosotros necesitemos que llegue hasta un número en concreto entre el 1 al 1000 podemos utilizar la sentencia `break`.

```js
let numero = 0;

while(numero < 1000){
  numero++;
  console.log(numero);
  // podemos agregar un condicional
  if (numero === 10) {
    break;
  }
}

// > 1 2 3 4 5 6 7 8 9 10
```
Cuando el `break` se ejecuta, automáticamente el programa termina y se sale, **"breakea"**.

---

## ***``continue``*** a la siguiente iteración
La directiva ``continue`` es una “versión más ligera” de ``break``. No detiene el bucle completo. En su lugar, detiene la iteración actual y fuerza al bucle a comenzar una nueva (si la condición lo permite).

Podemos usarlo si hemos terminado con la iteración actual y nos gustaría movernos a la siguiente.

Veamos:
```js
for (let i = 0; i <= 20; i++){
  document.write( i );
};

// > 0 1 2 3 ... 20
```
Y nosotros necesitamos que la iteración termine en 4 y continúe con el resto
```js
for (let i = 0; i <= 20; i++){
  if (numero === 4) {
   continue;
  }

  document.write( i );
}  

// > 0 1 2 3 5 6 7 8... 20 
```
Aqui vemos que gracias a `continue` nos saltamos ese dato y no se agrega a nuestra iteración, se usa para saltar la iteración y pasar a la siguiente

El bucle debajo usa ``continue`` para mostrar solo valores impares:
```js
for (let i = 0; i < 10; i++) {

  // si es verdadero, saltar el resto del cuerpo
  if (i % 2 == 0) continue;

  alert(i); 
}
// > 1 3 5 7 9
```
---

## ***`label`*** o etiquetas para break/continue
A veces necesitamos salirnos de múltiples bucles anidados al mismo tiempo.

Por ejemplo, en el código debajo usamos un bucle sobre ``i`` y ``j``, solicitando las coordenadas ``(i,j)`` de ``(0,0)`` a ``(3,3)``:

```js
for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Valor en las coordenadas (${i},${j})`, '');

    // ¿Y si quiero salir de aquí hacia Listo (debajo)?

  }
}

alert('Listo!');
// > Después de varios pedidos recién muestra Listo en pantalla
```
Necesitamos una manera de detener el proceso si el usuario cancela la entrada.

El ``break`` ordinario después de ``input`` solo nos sacaría del bucle interno. Eso no es suficiente.

Una **etiqueta** es un *"identificador"* con un signo de dos puntos “:” antes de un bucle:

``` js
// nombreDeEtiqueta
labelName: for (...) {
  ...
}
```
La declaración ``break <labelName>`` en el bucle debajo nos saca hacia la **etiqueta**:

```js
outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // Si es una cadena de texto vacía o se canceló, entonces salir de ambos bucles
    if (!input) break outer; // (*)

    // hacer algo con el valor...
  }
}

alert('Listo!');

// > Llenar coordenadas, si se pulsa "cancel" se sale del programa
```
En el código de arriba, ``break outer`` mira hacia arriba por la **etiqueta** llamada ``outer`` y nos saca de dicho bucle.

Así que el control va directamente de ``(*)`` a ``alert('Listo!')``.

También podemos mover la **etiqueta** a una línea separada:

```js
outer:
for (let i = 0; i < 3; i++) { ... }
```
La directiva ``continue`` también puede usar usada con una **etiqueta**. En este caso, la ejecución del código salta a la siguiente iteración del bucle etiquetado.

> ### Las **etiquetas** no son “``goto``”
> Las **etiquetas** no nos permiten saltar a un lugar arbitrario en el código.

---

## Resumen
Cubrimos 3 tipos de bucles:

* ``while`` – La condición es comprobada antes de cada iteración.
* ``do..while`` – La condición es comprobada después de cada iteración.
* ``for (;;)`` – La condición es comprobada antes de cada iteración, con ajustes adicionales disponibles.


Para crear un bucle “infinito”, usualmente se usa ``while(true)``. Un bucle como este, tal y como cualquier otro, puede ser detenido con la directiva ``break``.

Si queremos detener la iteración actual y adelantarnos a la siguiente, podemos usar la directiva ``continue``.

``break/continue`` soportan etiquetas antes del bucle. Una etiqueta es la única forma de usar 
``break/continue`` para escapar de un bucle anidado para ir a uno exterior.


---

[**&#11176;** *Anterior* &#11007;](/JavaScriptJuniorDa/006.1arraysElementos.md "Array elements") 
[Siguiente **&#129042;**](/JavaScriptJuniorDa/007.1forInOf.md "Bucles for in/of")

[*Volver* **&ldca;**](/JavaScriptJuniorDa/README.md "Regresar a página Principal") 
[*Subir* **&#11165;**](#bucles-e-iteración "Ir al título")