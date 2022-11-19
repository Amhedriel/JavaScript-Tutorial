# Métodos

Los *métodos* de JavaScript son **funciones** que se relacionan con un objeto en específico. Además, son una parte importante de la programación funcional, un estilo de programación en el que se utilizan **funciones** para ejecutar la mayoría de acciones. Dentro de la categoría de *métodos*, tenemos funciones que nos permiten manipular los elementos de un ``array`` o ``arreglo``.

## Método **`.push`**

El ``push`` va a meter un nuevo valor, dentro de nuestro `arreglo`. `push` va a ser nuestro método, que es un método? es una **función**:

~~~js
let listaDeNumeros = [2, 3, 5, 7, 11, 234];

console.log(listaDeNumeros[5]);

listaDeNumeros.push(16);
listaDeNumeros.push(939);
~~~

Con `push` le estamos indicando que nos agregue valores con los parámetros *(los datos encerrados entre paréntesis son parámetros)*: `push(16)` y `push(939)` lo que agrandará nuestro arreglo teniendo un 16 y un 939 que serían la posición 6 y 7:

~~~js
let listaDeNumeros = [2, 3, 5, 7, 11, 234, 16, 939];
~~~

## **``.length``**
Ahora imprimiremos toda la lista de números y algo que es `.length` o sea longitud, de que tamaño es mi `arreglo`.
~~~js
let listaDeNumeros = [2, 3, 5, 7, 11, 234];

console.log(listaDeNumeros[5]);

listaDeNumeros.push(16);
listaDeNumeros.push(939);

console.log(listaDeNumeros);
console.log(listaDeNumeros.length);

234
(8) [2, 3, 5, 7, 11, 234, 16, 939]
~~~

Nosotros lo colocamos en push 16 y 939, entonces esta misma lista de números se modifico, y se pudo modificar porque está definido como una variable `let`; tenemos nuestra lista de números `listaDeNumeros` y nuestra longitud `listaDeNumeros.length`, veremos que nos dice que la longitud es de (8).

## **`.pop`**

Ahora si nosotros tenemos `listaDeNumeros.pop()` donde `.pop()` nos va a sacar el último dato, en este caso no necesita parámetros así que se lo deja vacío.

~~~js
let listaDeNumeros = [2, 3, 5, 7, 11, 234];

console.log(listaDeNumeros[5]);

listaDeNumeros.push(16);
listaDeNumeros.push(939);

console.log(listaDeNumeros);
console.log(listaDeNumeros.length);

// imprime todo hasta aquí para que podamos ver la diferencia
listaDeNumeros.pop();
console.log(listaDeNumeros);
console.log(listaDeNumeros.length);

(8) [2, 3, 5, 7, 11, 234, 16, 939]

8

(7) [2, 3, 5, 7, 11, 234, 16]

7
~~~
Recordemos que los parámetros no se necesitan todas las funciones, y como a `.pop` le decimos saca el último, no necesitamos que nos retorne nada.

En el resultado podemos ver que `.pop` quitó el último dato del arreglo y entonces solo nos quedan 7 datos, lo que nos muestra con `.length`

~~~js

console.log(listaDeNumeros);
console.log(listaDeNumeros.length);


let listaDePalabras = ["Explorer", "MisionComander", "LaunchX", "Innovaccion"];
console.log(listaDePalabras);
console.log(listaDePalabras.length);
~~~

---

[**&#11176;** *Anterior* &#11007;](/JavaScript/TeoriaJS/006_arreglos.md "Arreglos") 
[Siguiente **&#129042;**](/JavaScript/TeoriaJS/008_arreglosDeStrings.md "Arreglos de cadenas de texto `strings`")

[*Volver* **&ldca;**](/JavaScript/TeoriaJS/README.md "Regresar a página Principal") 
[*Subir* **&#11165;**](# "Ir al título")