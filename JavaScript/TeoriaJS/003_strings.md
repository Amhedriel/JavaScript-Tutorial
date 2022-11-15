# strings (cadenas)

Operaciones sobre fragmentos de texto (conocidas como "cadenas" (`string`) en programación).

Las cadenas (**strings**) son caracteres que pueden ser una frase o palabra y estas pueden darse con comillas dobles "", simples '' o invertidas `` que son acentos invertidos,
la diferencia es que con las invertidas podemos agregar variables dentro de la cadena con la sintaxis ${}

Podemos ver que los manejamos como las variables, en este caso tenemos dos **var** y un **let** podemos ver abajo que las estamos declarando y lo que se llega a imprimir son los que estan con la palabra reservada `console.log()`.

Veamos la diferencia entre ellas:
* La primera es una frase entre comillas dobles que sería un string común.
* La segunda está encerrada entre comillas simples que son prácticamente iguales que las de comillas dobles.
* La tercera tiene acentos invertidos, con los cuales nos dán la posibilidad de poder meter otras variables dentro, aqui se metio `frase1` para no combinar tipos, pero sin problemas se pueden utilizar otras variales como `${numero1}` esta es la mejor manera de insertar variables.

~~~js
console.log("\n************* Cadenas **************\n");
var frase1 = "Ejemplo comillas dobles";
let frase2 = 'Ejemplo comillas simples';
var frase3 = `Ejemplo comillas ${frase1} invertidas`;

console.log(frase1 + "\n" + frase2 + "\n" + frase3);
~~~

Si estamos más atentos observamos que el primer `console.log` tiene los caracteres de "\n \n" nos deja un espacio de un enter en la consola.

en la ultima parte de `console.log()` que sería la operación sobre fragmentos de texto que queremos ver, entonces veríamos el resultado de:

~~~~cmd
Ejemplo comillas dobles
Ejemplo comillas simples
Ejemplo comillas Ejemplo comillas dobles invertidas
~~~~
