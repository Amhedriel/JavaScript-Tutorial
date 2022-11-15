# Variables

## **Variables en JavaScript**

Cuando hablamos en cosas de programación nosotros vamos a tener cosas que son **variables**, estas variables son com ocajas a los que le podemos asignar un valor y ese valor cambiará con respecto a cómo vayamos modificando el programa.

## Cómo se definen variables

Nosotros en programación tenemos lo que e definen como palabras reservados, que són comandos que utilizaremos para hacer uso dentro del desarrollo.

En nuestro caso estamos usando JavaScript y para definir una variable debemos usar la palabra reservada **var** que está casi en deshuso hoy en día, pero también tenemos otra llamada **let** que es la más utilizada.

Las variables se pueden declarar con la palabra reservada "var", estas variables se pueden considerar como globales.
También se pueden declarar con la palabra reservada "let" y estas serán usadas dentro de un bloque de código.
Igualmente está la declaración con la palabra reservada "const" y se usarán cuando el valor no cambie.

~~~JS
console.log("\n************* Variables **************\n");
var numero1 = 4;
let numero2 = 6;
const numero3 = 0;
~~~

Veamos un ejemplo de var/let y otro de const:

~~~js
numero1 = numero1 + 2
3
numero3 = numero3 + 2
VM449:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:9
~~~
Como vemos una variable constante no puede cambiar de valor, por lo tanto al tratar de asignarle `=` otro valor nos muestra un error, por lo tanto una constante no se puede modificar.

Ahora si nosotros queremos ver las formas de imprimir acá:
Lo que haremos es concatenar `+`
    console.log("Número 1: " + numero1 + " Número 2: " + numero2);
`numero1` es la `var numero1 = 4;` y `numero2` es `var numero2 = 6;` y así podemos estar imprimiendo las variables `console.log("Número 1: " + "Número 2: ");`

## Strings
Las cadenas (Strings) son caracteres que pueden ser una frase o palabra y estas pueden darse con comillas dobles "", simples '' o invertidas ``
la diferencia es que con las invertidas podemos agregar variables dentro de la cadena con la sintaxis ${}

~~~js
console.log("\n************* Cadenas **************\n");
var frase1 = "Ejemplo comillas dobles";
var frase2 = 'Ejemplo comillas simples';
var frase3 = `Ejemplo comillas ${frase1} invertidas`;

console.log(frase1 + "\n" + frase2 + "\n" + frase3);
~~~

