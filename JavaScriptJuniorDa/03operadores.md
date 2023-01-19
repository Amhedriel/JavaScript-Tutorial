# 3. Operadores

Existen varios operadores en JavaScript.O

En este apartado veremos algunos tipos de operadores:
- [Valor de retorno y encadenamiento](#valor-de-retorno-y-encadenamiento)

- [Operadores de asignación](#operadores-de-asignación)

  - [Asignación](#asignación)
  - [Asignación de adición](#asignación-de-adición)
  - [Asignación de resta](#asignación-de-resta)
  - [Asignación de multiplicación](#asignación-de-multiplicación)
  - [Asignación de división](#asignación-de-división)
  - [Asignación de residuo](#asignación-de-residuo)
  - [Asignación de exponenciación](#asignación-de-exponenciación)

- [Operadores aritméticos](#operadores-aritméticos)

- [Operadores de comparación](#operadores-de-comparación)

- [Operadores lógicos](#operadores-lógicos)

- [Operadores unarios **`typeof`**](#operadores-unarios-typeof)


## Valor de retorno y encadenamiento

Como la mayoría de las expresiones, asignaciones como ``x = y`` tienen un valor de retorno. Se puede recuperar p. ej. asignando la expresión o registrándole.

El valor de retorno coincide con la expresión a la derecha del signo `=` en la columna "Significado" de la tabla anterior. Eso significa que ``(x = y)`` devuelve ``y``, ``(x += y)`` devuelve la suma resultante ``x + y``, ``(x **= y)`` devuelve la potencia resultante ``x ** y``, y así sucesivamente.

En el caso de asignaciones lógicas, ``(x &&= y)``, ``(x || = y)`` y ``(x ??= y)``, el valor de retorno es el de la operación lógica sin la asignación, entonces ``x && y``, ``x || y`` y ``x ?? y``, respectivamente.

Ten en cuenta que los valores de retorno siempre se basan en los valores de los operandos antes de la operación.

Al encadenar estas expresiones, cada asignación se evalúa de derecha a izquierda. Considera estos ejemplos:

 * **``w = z = x = y``** es equivalente a **``w = (z = (x = y))``** o **``x = y; z = y; w = y``**
 * **``z += x *= y``** es equivalente a **``z += (x *= y)``** o **``tmp = x * y; x *= y; z += tmp``** (salvo que sin ``tmp``).

```js
// Encadenamiento

numero1 = numero2 = numero3 = 25;
console.log(numero1);
console.log(numero2);
console.log(numero3);

// > 25
// > 25
// > 25
```

## Operadores de Asignación

Un **operador de Asignación** asigna un Valor al operando de la izquierda basado en el valor del operando de la derecha.

|NOMBRES|OPERADORES|SIGNIFICADOS|
|---|:---:|---|
|**Asignación**             |`x = y`|`x = y`|
|**Asignación de adición**  |`x += y`|`x = x + y`|
|**Asignación de resta**    |`x -= y`|`x = x - y`|
|**Asignación de multiplicación**|`x *= y`|`x = x * y`|
|**Asignación de división** |`x /= y`|`x = x / y`|
|**Asignación de residuo**  |`x %= y`|`x = x % y`|
|**Asignación de exponenciación**|`x **= y`|`x = x ** y`|
|**Asignación de desplazamiento a la izquierda**|`x <<= y`|`x = x << y`|
|**Asignación de desplazamiento a la derecha**  |`x >>= y`|`x = x >> y`|
|**Asignación de desplazamiento a la derecha sin signo**|`x >>>= y`|`x = x >>> y`|
|**Asignación AND bit a bit** |`x &= y`|`x = x & y`|
|**Asignación XOR bit a bit** |`x ^= y`|`x = x ^ y`|
|**Asignación OR bit a bit**  |`x \|= y`|`x = x \| y`|
|**Asignación AND lógico**    |`x &&= y`|`x && (x = y)`|
|**Asignación OR lógico**     |`x \|\|= y`|`x \|\| (x = y)`|
|**Asignación de anulación lógica**|`x ??= y`|`x ?? (x = y)`|
||||

### ***Asignación***
Un operador de asignación asigna un valor a su operando izquierdo basándose en el valor de su operando derecho. El operador de asignación simple es igual (``=``), que asigna el valor de su operando derecho a su operando izquierdo. Es decir, ``x = y ``asigna el valor de ``y`` a ``x``.

    numero = 10;
Estamos asignando el valor `10` a `numero`
Pero si ahora nosotros ponemos

### ***Asignación de adición***
    numero += 5;
Nosotros le estamos sumando `5` a numero, esto es equivalente a:

    numero + numero = 5;

Y nos da como resultado ``15`` porque `numero = 10`por lo que numero vale `10` y sumamos otro numero con un valor distinto `numero = 5` por eso:

    10 + (numero = 5);

    document.write(numero);

    // > 15

### ***Asignación de resta***
    numero -= 5;

Equivale a:

    numero - numero = 5;

    document.write(numero);

    // > 5

### ***Asignación de multiplicación***
    numero *= 5;
    document.write(numero);
    // > 50

### ***Asignación de división***
    numero /= 5;
    document.write(numero);
    // > 2

### ***Asignación de residuo***
    numero %= 3;
    document.write(numero);
    // > 1

Con este operador recibimos el resto de la división redondeada como valor. Si tenemos un decimal:

    numero = 47.5;
    numero %= 6;
    document.write(numero);
    // > 5.5

Nos mostraría el resultado con decimal.

### ***Asignación de exponenciación***
    let numero = 10;
    numero **= 2;
    document.write(numero);
    // > 100

---

## Operadores aritméticos

Los **operadores Aritméticos** toman valores numéricos (literales o variables) como sus operandos y retornan un valor numérico **único**.

Un operador aritmético toma valores numéricos (ya sean literales o variables) como sus operandos y devuelve un solo valor numérico. Los operadores aritméticos estándar son suma ``(+)``, resta ``(-)``, multiplicación ``(*)`` y división ``(/)``. Estos operadores funcionan como lo hacen en la mayoría de los otros lenguajes de programación cuando se usan con números de punto flotante (en particular, ten en cuenta que la división entre cero produce ``Infinity``). Por ejemplo:

```js
1 / 2;
// 0.5

1 / 2 == 1.0 / 2.0;
// Esto es true
```
Además de las operaciones aritméticas estándar (``+, -, *, /``), JavaScript proporciona los operadores aritméticos enumerados en la siguiente tabla:

|OPERADOR|DESCRIPCIÓN|EJEMPLO|
|---:|---|---|
|**Residuo `(%)`**|Operador binario. Devuelve el resto entero de dividir los dos operandos.|``12 % 5`` devuelve ``2``.|
|**Incremento `(++)`**|Operador unario. Agrega uno a su operando. Si se usa como operador prefijo ``(++x)``, devuelve el valor de su operando después de agregar uno; si se usa como operador sufijo ``(x++)``, devuelve el valor de su operando antes de agregar uno.|Si ``x`` es ``3``, ``++x`` establece ``x`` en ``4`` y devuelve ``4``, mientras que ``x++`` devuelve ``3`` y , solo entonces, establece ``x`` en ``4``.|
|**Decremento `(--)`**|Operador unario. Resta uno de su operando. El valor de retorno es análogo al del operador de incremento.|Si ``x`` es ``3``, entonces ``--x`` establece ``x`` en ``2`` y devuelve ``2``, mientras que ``x--`` devuelve ``3`` y, solo entonces, establece ``x`` en ``2``.|
|**Negación unaria `(-)`**|Operador unario. Devuelve la negación de su operando.|Si ``x`` es ``3``, entonces ``-x`` devuelve ``-3``.|
|**Positivo unario `(+)`**|Operador unario. Intenta convertir el operando en un número, si aún no lo es.|``+"3"`` devuelve ``3``. ``+true`` devuelve ``1``.|
|**Operador de exponenciación `(**)`**|Calcula la ``base`` a la potencia de ``exponente``, es decir, ``baseexponente``|``2 ** 3`` returns ``8``. ``10 ** -1`` returns ``0.1``.|
||||

Si nosotros tenemos:

```js
numero1 = 10;
numero2 = 5;

resultado = numero1 + numero2;
document.write(resultado);

// > 15
```
### ***Incremento***

```js
numero1 = 10;

numero1++;
resultado = numero 1;
document.write(resultado);

// > 11
```
### ***Decremento***

Cuando utilizamos el operador de decremento lo que hacemos es restar `-1` a la variable.
```js
numero1 = 10;

numero1--;
document.write(numero1);

// > 9
```
Recordemos que primero debemos hacer la operación (`numero --`) y después podemos guardar la variable con el resultado

```js
numero1 = 10;
numero1--;
resultado = numero 1;
document.write(resultado);

// > 9
```

### ***Operador de exponenciación***

Este operador simplemente elevará nuestro número al valor de exponente que le asignemos

```js
numero1 = 10;

numero1 **=2;  // Exponente al cuadrado
resultado = numero1;
document.write(resultado);

// > 100
```
```js
numero1 = 10;

numero1 **=3;  // Exponente al cubo
resultado = numero1;
document.write(resultado);

// > 1000
```
```js
numero1 = 10;
numero2 = 5;

resultado = numero1 ** numero2; // Exponente a la quinta
document.write(resultado);

// > 100000
```
### ***Negación unaria***

Esto diría que queremos lo contrario del resultado
```js
numero1 = 10;

resultado = -numero1;
document.write(resultado);

// > -10
```
---

## Operadores de comparación

Un operador de comparación compara sus operandos y devuelve un valor lógico en función de si la comparación es verdadera (``true``) o falsa (``false``). Los operandos pueden ser valores numéricos, de cadena, lógicos u objetos. Las cadenas se comparan según el orden lexicográfico estándar, utilizando valores Unicode. En la mayoría de los casos, si los dos operandos no son del mismo tipo, JavaScript intenta convertirlos a un tipo apropiado para la comparación. Este comportamiento generalmente resulta en comparar los operandos numéricamente. Las únicas excepciones a la conversión de tipos dentro de las comparaciones involucran a los operadores ``===`` y ``!==``, que realizan comparaciones estrictas de igualdad y desigualdad. Estos operadores no intentan convertir los operandos a tipos compatibles antes de verificar la igualdad. La siguiente tabla describe los operadores de comparación en términos de este código de ejemplo:

```js
var var1 = 3;
var var2 = 4;
```

|OPERADORES|DESCRIPCIÓN|EJEMPLOS CON ``true``|
|---|:---:|---|
|**Igual `(==)`**|Devuelve ``true`` si los operandos son iguales.|**`3 == var1`** <br> **``"3" == var1``** <br> **`3 == '3'`**|
|**No es igual `(!=)`**|Devuelve ``true`` si los operandos no son iguales.|**`var1 != 4`** <br> **`var2 != "3"`**|
|**Estrictamente igual `(===)`**|Devuelve ``true`` si los operandos son iguales y del mismo tipo.|**`3 === var1`**|
|**Desigualdad estricta `(!==)`**|Devuelve ``true`` si los operandos son del mismo tipo pero no iguales, o son de diferente tipo.|**`var1 !== "3"`** <br> **`3 !== '3'`**|
|**Mayor que `(>)`**|Devuelve ``true`` si el operando izquierdo es mayor que el operando derecho.|**`var2 > var1 "12" > 2`**|
|**Mayor o igual que `(>=)`**|Devuelve ``true`` si el operando izquierdo es mayor o igual que el operando derecho.|**`var2 >= var1 var1 >= 3`**|
|**Menor que `(<)`**|	Devuelve ``true`` si el operando izquierdo es menor que el operando derecho.|**`var1 < var2`** <br> **`"2" < 12`**|
|**Menor o igual <br> `(<=)`**|Devuelve ``true`` si el operando izquierdo es menor o igual que el operando derecho.|**`var1 <= var2 var2 <= 5`**|


---

## Operadores lógicos

Los operadores lógicos se utilizan normalmente con valores booleanos (lógicos); cuando lo son, devuelven un valor booleano. Sin embargo, los operadores ``&&`` y ``||`` en realidad devuelven el valor de uno de los operandos especificados, por lo que si estos operadores se utilizan con valores no booleanos, pueden devolver un valor no booleano. Los operadores lógicos se describen en la siguiente tabla.

|OPERADOR|USO|DESCRIPCIÓN|
|---|:---:|---|
|**AND Lógico `(&&)`**|`expr1 && expr2`|Devuelve ``expr1`` si se puede convertir a ``false``; de lo contrario, devuelve ``expr2``. <br> Por lo tanto, cuando se usa con valores booleanos, ``&&`` devuelve ``true`` si ambos operandos son ``true``; <br>de lo contrario, devuelve ``false``.|
|**OR lógico `(\|\|)`**|`expr1 \|\| expr2`|Devuelve ``expr1`` si se puede convertir a ``true``; de lo contrario, devuelve ``expr2``. <br>Por lo tanto, cuando se usa con valores booleanos, ``\|\|`` devuelve ``true`` si alguno de los operandos es ``true``; <br> si ambos son falsos, devuelve ``false``.|
|**NOT lógico `(!)`**|`!expr`|Devuelve ``false`` si su único operando se puede convertir a ``true``; de lo contrario, devuelve ``true``.|
||||

Ejemplos de expresiones que se pueden convertir a ``false`` son aquellos que se evalúan como ``null``, 0, ``NaN``, la cadena vacía ``("")`` o ``undefined``.

El siguiente código muestra ejemplos del operador ``&&`` (``AND`` lógico).

```js
var a1 =  true && true;     // t && t devuelve true
var a2 =  true && false;    // t && f devuelve false
var a3 = false && true;     // f && t devuelve false
var a4 = false && (3 == 4); // f && f devuelve false
var a5 = 'Cat' && 'Dog';    // t && t devuelve Dog
var a6 = false && 'Cat';    // f && t devuelve false
var a7 = 'Cat' && false;    // t && f devuelve false
```
El siguiente código muestra ejemplos del operador ``||`` (``OR`` lógico).

```js
var o1 =  true || true;     // t || t devuelve true
var o2 = false || true;     // f || t devuelve true
var o3 =  true || false;    // t || f devuelve true
var o4 = false || (3 == 4); // f || f devuelve false
var o5 = 'Cat' || 'Dog';    // t || t devuelve Cat
var o6 = false || 'Cat';    // f || t devuelve Cat
var o7 = 'Cat' || false;    // t || f devuelve Cat
```
El siguiente código muestra ejemplos de el operador ``!`` (``NOT`` lógico).

```js
var n1 = !true;  // !t devuelve false
var n2 = !false; // !f devuelve true
var n3 = !'Cat'; // !t devuelve false
```
---

## Operadores unarios **`typeof`**

No todos los operadores son símbolos, algunos se escriben como palabras. Un ejemplo es el operador `typeof`, que produce un `string` con el nombre del tipo de valor que le demos.

```js
console.log(typeof 5.4);
// > number

console.log(typeof "x");
// > string
```


---

[**&#11176;** *Anterior* &#11007;](/JavaScriptJuniorDa/002.3windows_Prompt().md "Prompt") 
[Siguiente **&#129042;**](/JavaScriptJuniorDa/04concatenacion.md "Concatenación")

[*Volver* **&ldca;**](/JavaScriptJuniorDa/README.md "Regresar a página Principal") 
[*Subir* **&#11165;**](#3-operadores"Ir al título")