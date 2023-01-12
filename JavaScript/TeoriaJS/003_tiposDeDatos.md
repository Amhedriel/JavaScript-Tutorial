# Tipos de datos

Ahora veremos los tipos de datos que se pueden almacenar en una variable:

* Seis tipos de datos **primitivos**, controlados por el `operador typeof`

    * [`number`](003.1_number.md)     -> ``typeof instance === "number"``
    * [`string`](003.2_strings.md)    -> ``typeof instance === "string"``
    * [`boolean`](003.3_booleanos.md) -> ``typeof instance === "boolean"``
    * [`symbol`](#symbol)      -> ``typeof instance === "symbol"``
    * [`undefined`](#undefined)-> ``typeof instance === "undefined"``
    * [`bigint`](#bigint)      -> ``typeof instance === "bigint"``

* [`null`]() -> ``typeof instance === "object"``. Tipo primitivo especial que tiene un uso adicional para su valor: si el objeto no se hereda, se muestra `null`;

* ``object`` -> ``typeof instance === "object"``. Tipo estructural especial que no es de "datos" pero para cualquier instancia de objeto *construido* que también se utiliza como estructuras de datos: ***new*** `Object`, ***new*** `Array`, ***new*** `Map`, ***new*** `Set`, ***new*** `WeakSet`, ***new*** `Date` y casi todo lo hecho con la palabra clave ***new***;

* `function`: Una estructura sin datos, aunque también responde al operador `typeof`: `typeof instance === "function"`. Esta simplemente es una forma abreviada para funciones, aunque cada constructor de funciones se deriva del constructor `Object`.

Tengamos en cuenta que el único propósito valioso del uso del operador `typeof` es verificar el tipo de dato. Si deseamos verificar cualquier "Tipo Estructural" derivado de `object`, no tiene sentido usar ``typeof`` para eso, ya que siempre recibiremos "``object``". La forma correcta de comprobar qué tipo de Objeto estamos usando es la palabra clave `instanceof`. Pero incluso en ese caso, puede haber conceptos erróneos.



---

[**&#11176;** *Anterior* &#11007;](/JavaScript/TeoriaJS/002.1_constantes.md "Constantes") 
[Siguiente **&#129042;**](/JavaScript/TeoriaJS/003.1_number.md "Number (números)")

[*Volver* **&ldca;**](/JavaScript/TeoriaJS/README.md "Regresar a página Principal") 
[*Subir* **&#11165;**](# "Ir al título")