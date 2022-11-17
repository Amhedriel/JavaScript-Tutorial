# Arreglos de cadenas de texto `strings`

Veamos:

~~~js
let listaDePalabras = ["Explorer", "MisionComander", "LaunchX", "Innovaccion"];
~~~

Estamos trabajando con cadenas.

también podemos agregar el caracter de espacio.

~~~js
let listaDePalabras = [
  "Explorer", 
  "Mision Comander", 
  "LaunchX", 
  "Innovaccion", 
  "JavaScript",
  
];
console.log(listaDePalabras);
console.log(listaDePalabras.length);
~~~

Todo este arreglo funciona de la misma manera, recordemos que la única regla que tenemos con los arreglos es que deben ser del mismo tipo, en este caso `strings`.

Ahora imprimaremos en consola la variable `let` `listaDePalabras`, y que haga un conteo de strings con `.length`. 

~~~js

(5) ['Explorer', 'Mision Comander', 'LaunchX', 'Innovaccion', 'JavaScript']
  0: "Explorer"
  1: "Mision Comander"
  2: "LaunchX"
  3: "Innovaccion"
  4: "JavaScript"
length: 5
[[Prototype]]: Array(0)

5
~~~

Estos arreglos también se pueden recorrer, utilizar como condicionales, mapear y varias funcionalidades 


