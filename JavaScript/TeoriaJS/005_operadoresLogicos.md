# Operadores lógicos JavaScript

Los operadores lógicos  se utilizan cuando se necesita comparar más de una condicional

* El operador && (AND) necesita que todos sus valores sean true para que la salida sea true
* El operador || (OR) necesita que solo uno de sus valores sea true para que la salida sea true

Nosotros podemos usar estas condicionales para que nos regrese un valor `true` o `false`

~~~js
console.log(numero1 === numero1);
console.log(numero1 < numero2);
console.log(numero3 != numero2);
~~~

Y nosotros podemos estar utilizando esos diferentes valores con nuestros diferentes operadores lógicos para poder combinar diferentes funcionalidades y diferentes condiciones, entonces:

* Un ``and`` **&&** 
~~~js
console.log(true && true);
~~~

Solamente nos devolverán un ``true`` si los 2 son ``true`` o los que sean.
Pero si tenemos un número n de ``true`` y un ``false`` entonces nos dará ``false`` como resultado.

* Un `or` **||**
~~~js
console.log(false || false);
~~~

Solo necesita que una sea `true` para que todo lo demás sea ``true``.

Pero si tenemos un número n de solo ``false`` entonces todo será `false`.

Veamos si:

~~~js
console.log(true && true);
console.log(false || false);

true
false
~~~

pero si:

~~~js
console.log(true && false);
console.log(false || true);

false
true
~~~

Esto sucede porque && y || no cumplen sus condiciones.
Recordemos que esto se puede pensar como: ***condición 1 && condición 2*** o ***condición 1 || condición 2*** Con `and` && necesitamos que todas se cumplan, con `or` || solamente necesitamos que una se cumpla.

Cuando nosotros queremos comparar && con ||
~~~js
console.log((true && false && true) || true);
~~~

Debemos ver que primero se tendrá que resolver los && y luego se evaluará con ||

Viendo la operación: `true && false`= `false` && `true` = `(false)` || `true` = `true` por lo tanto nos devolverá **`true`**

Si vemos los ||
~~~js
console.log(false || true || (false && true));
~~~

Entonces, primero deberemos resolver los && y luego los `or` || por orden de jerarquía los `and` están un poco por debajo de los `or`.

Viendo la operación en este caso primero se resolverá los paréntesis de && y después || `true && false`= `false` || ``true`` = `true` || `true` = `true`.

Ahora veamos como utilizar ambos operadores lógicos:

~~~js
console.log("\n************* Operador lógico AND **************\n")
console.log(true && false && true);
console.log(numero1 === numero1 && numero1 < numero2);


console.log("\n************* Operador lógico OR **************\n")
console.log(false || true || false );
console.log(numero2 > numero1 || numero3 != numero3)
~~~

Resultados:

~~~js
************* Operador lógico AND **************

1-intro.js:50 false
1-intro.js:51 true

************* Operador lógico OR **************

1-intro.js:55 true
1-intro.js:56 true
~~~

Todo lo que vimos lo iremos utilizando en "Flujos Condicionales".


---

[**&#11176;** *Anterior* &#11007;](/JavaScript/TeoriaJS/004_operadores.md "Operadores JavaScript")
[Siguiente **&#129042;**](/JavaScript/TeoriaJS/006_arreglos.md "Arreglos")

[*Volver* **&ldca;**](/JavaScript/TeoriaJS/README.md "Regresar a página Principal") 
[*Subir* **&#11165;**](# "Ir al título")