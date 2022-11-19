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

Estos arreglos también se pueden recorrer, utilizar como condicionales, mapear y varias funcionalidades.

Una cosa especial que tienen las cadenas, porque las cadenas en sí también se pueden tratar como `arreglos`, se pueden utilizar como si fueran un arreglo de caracteres individuales.

Tenemos una "palabra" `string` y queremos ver la letra en la posición 2:

~~~js
let palabra = "Explorer";
console.log(palabra[2]);
console.log(palabra.length);

5
p
8
~~~

Si nosotros vemos la longitud de la palabra `8` entonces el caracter de la posición `2` contando desde el `0` es la `p`

---

[**&#11176;** *Anterior* &#11007;](/JavaScript/TeoriaJS/007_metodos.md "Métodos") 
[Siguiente **&#129042;**](/JavaScript/TeoriaJS/009_objetos.md "Objetos")

[*Volver* **&ldca;**](/JavaScript/TeoriaJS/README.md "Regresar a página Principal") 
[*Subir* **&#11165;**](# "Ir al título")