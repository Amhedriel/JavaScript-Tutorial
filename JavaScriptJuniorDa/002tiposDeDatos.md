# Tipos de Datos

Tenemos varios tipos de datos, para empezar los más importantes:

- [**`strings`**](#strings) - O cadenas de datos.
- [**`Number`**](/JavaScriptJuniorDa/) - Para almacenar valores numéricos.
- [**`Boolean`**](/JavaScriptJuniorDa/) - Variables de tipo lógico.
- **`Undefined`** - Automáticamente asignado a las variables que solo han sido declaradas.
- **`Symbol`** - No es un dato primitivo.
- **`Object`** - Estructura de datos que contiene datos e instrucciones para trabajar con los datos.


Aunque estos tipos de datos son una cantidad relativamente pequeña, permiten realizar funciones útiles. Otra forma de clasificar los tipos de datos en JavaScript sería:

+ Primitivos: almacenan un solo valor
  + Primarios: string, number, boolean

  + Especiales: undefined, null, NaN

+ Compuestos: arrays, objects

## *Strings*

Se utilizan para almacenar cero o más caracteres, palabras y/o frases de texto. Para asignar el valor a la variable, se encierra el valor entre comillas dobles o simples, para delimitar su comienzo y su final. Si necesitamos poner caracteres especiales se usa el caracter de escape o barra invertida \\.

Estos son cadenas de texto representado por caracteres, tenemos 3 formas de escribirlas:

|TIPO||DESCRIPCIÓN|
|---|---|---|
|***`"string"`***||*Entre comillas dobles "cadena de texto".*|
|***`'string'`***||*Comillas simples 'cadena de texto' que se la utiliza si ya utilizamos las comillas dobles y no queremos entre mezclar órdenes.*|
|***`` `string` ``***||*Acentos invertidos, recordar usarlos con `${...}` para insertar texto en otra cadena*|
| |

```js
let caja = "Punta bola";

let otraCaja = "121";
```

Básicamente los `strings` son caracteres unidos, [c, a, d, e, n, a, ,d , e, , t, e, x, t, o] y todo vá entre comillas para indicarle al programa específicamente que són una cadena de texto.

---

## *Number*

Se utilizan para almacenar valores numéricos enteros (llamados integer en inglés) o decimales (llamados float en inglés). En este caso, el valor se asigna indicando directamente el número entero o decimal. Los números decimales utilizan el caracter . (punto) en vez de , (coma) para separar la parte entera y la parte decimal.

En JavaScript únicamente existe un tipo de número. Internamente, es representado como un dato de 64 bits en coma flotante, al igual el tipo de dato ``double`` en Java. A diferencia de otros lenguajes de programación, no existe una diferencia entre un número *entero* y uno *real* (decimal), por lo que, por ejemplo, el 2 y el 2.0 son el mismo valor. Esto es significativo ya que evitamos los problemas desbordamiento en tipos de dato pequeños, al no existir la necesidad de conocer el tipo de dato.

Si el número es *entero*, se indica su valor directamente. Si el número es *decimal*, se debe utilizar el punto (.) para separar la parte entera de la *decimal*. Además del sistema numérico decimal, también se pueden indicar valores en el sistema octal (si se incluye un ``0`` delante del número) y en sistema hexadecimal (si se incluye un ``0x`` delante del número).

JavaScript define tres valores especiales cuando se trabaja con números. En primer lugar se definen los valores ``Infinity`` y ``–Infinity`` para representar números demasiado grandes (positivos y negativos) y con los que JavaScript no puede trabajar.

El otro valor especial definido por JavaScript es ``NaN``, que es el acrónimo de "Not a Number". De esta forma, si se realizan operaciones matemáticas con variables no numéricas, el resultado será de tipo ``NaN``.

Para manejar los valores ``NaN``, se utiliza la función ``isNaN()``, que devuelve true si el parámetro que se le pasa **NO ES** un número.

Más adelante veremos también un objeto que existe, por defecto, en JavaScript, denominado ``Math``, el cual tiene una serie de **métodos** muy útiles para trabajar con números: ``Math.PI``, ``Math.E``, ``Math.random()``, ``Math.pow()``, ``Math.round()``, ``Math.sqrt()``, etc...

```js
let numero = 19;

let numero = 1.9;
```
Sun embargo JavaScript no es muy exacto con las operaciones de coma flotante por lo que se puede intentar con el redondeo (`Math.floot`,`Math.ceil`, `Math.roun`, `Math.trunc`) Funciones que se verán más adelante.

No va entre comillas porque es otro tipo de datos, si queremos que sea otro dato como una cadena

```js
let numero = "19";
```
## *Bool*

Las variables de tipo boolean o booleano también se conocen con el nombre de variables de tipo lógico. Una variable de tipo boolean almacena un tipo especial de valor que solamente puede tomar dos valores: true (verdadero) o false (falso). No se puede utilizar para almacenar números y tampoco permite guardar cadenas de texto. Existen valores que se comportan como boolean: p.ej. como false el 0, la cadena vacía, NaN, undefined, null. Como true cualquier cadena no vacía, cualquier número.

Prácticamente son 2: 0 y 1, lo traducimos como `true`, `false`, utilizados para los condicionales.


---

[**&#11176;** *Anterior* &#11007;](/JavaScriptJuniorDa/02variables.md "Variables en JavaScript") 
[Siguiente **&#129042;**](/JavaScriptJuniorDa/002.1casosEspeciales.md "Casos Especiales")

[*Volver* **&ldca;**](/JavaScriptJuniorDa/README.md "Regresar a página Principal") 
[*Subir* **&#11165;**](# "Ir al título")
