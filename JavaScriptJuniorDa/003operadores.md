# Operadores

Existen varios operadores en JavaScript.

En este apartado veremos 2 tipos de operadores:

- [Operadores de Asignación]()
- [Operadores Aritméticos]()

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
|**Asignación de desplazamiento a la derecha**|`x >>= y`|`x = x >> y`|
|**Asignación de desplazamiento a la derecha sin signo**|`	x >>>= y`|`x = x >>> y`|
|**Asignación AND bit a bit** |`x &= y`|`x = x & y`|
|**Asignación XOR bit a bit** |`x ^= y`|`x = x ^ y`|
|**Asignación OR bit a bit**  |`x \|= y`|`x = x \| y`|
|**Asignación AND lógico**    |`x &&= y	`|`x && (x = y)`|
|**Asignación OR lógico**     |`x \|\|= y`|`x \|\| (x = y)`|
|**Asignación de anulación lógica**|`x ??= y`|`x ?? (x = y)`|
||||

### *Asignación*
Un operador de asignación asigna un valor a su operando izquierdo basándose en el valor de su operando derecho. El operador de asignación simple es igual (``=``), que asigna el valor de su operando derecho a su operando izquierdo. Es decir, ``x = y ``asigna el valor de ``y`` a ``x``.

    numero = 10;
Estamos asignando el valor `10` a `numero`
Pero si ahora nosotros ponemos

### *Asignación de adición*
    numero += 5;
Nosotros le estamos sumando `5` a numero, esto es equivalente a:

    numero + numero = 5;

Y nos da como resultado ``15`` porque `numero = 10`por lo que numero vale `10` y sumamos otro numero con un valor distinto `numero = 5` por eso:

    10 + (numero = 5);

    document.write(numero);

    // > 15

### *Asignación de resta*
    numero -= 5;

Equivale a:

    numero - numero = 5;

    document.write(numero);

    // > 5

### *Asignación de multiplicación*
    numero *= 5;
    document.write(numero);
    // > 50

### *Asignación de división*
    numero /= 5;
    document.write(numero);
    // > 2

### *Asignación de residuo*
    numero %= 3;
    document.write(numero);
    // > 1

Con este operador recibimos el resto de la división redondeada como valor. Si tenemos un decimal:

    numero = 47.5;
    numero %= 6;
    document.write(numero);
    // > 5.5

Nos mostraría el resultado con decimal.

### *Asignación de exponenciación*
    let numero = 10;
    numero **= 2;
    document.write(numero);
    // > 100

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
|**No es igual `(!=)`**|Devuelve ``true`` si los operandos no son iguales.|**``**|
|**Estrictamente igual `(===)`**|Devuelve ``true`` si los operandos son iguales y del mismo tipo. Consulta también ``Object.is`` y similitud en JS.|**``**|
|**Desigualdad estricta `(!==)`**|Devuelve ``true`` si los operandos son del mismo tipo pero no iguales, o son de diferente tipo.|**``**|
|**Mayor que `(>)`**|Devuelve ``true`` si el operando izquierdo es mayor que el operando derecho.|**``**|
|**Mayor o igual que `(>=)`**|Devuelve ``true`` si el operando izquierdo es mayor o igual que el operando derecho.|**``**|
|**Menor que `(<)`**|	Devuelve ``true`` si el operando izquierdo es menor que el operando derecho.|**``**|
|**Menor o igual `(<=)`**|Devuelve ``true`` si el operando izquierdo es menor o igual que el operando derecho.|**``**|









###
###
###
###
###
###
###


```
```
```
```
```
```

---

## Operadores Aritméticos

Los **operadores Aritméticos** toman valores numéricos (literales o variables) como sus operandos y retornan un valor numérico **único**.

---

[**&#11176;** *Anterior* &#11007;](/JavaScriptJuniorDa/002.3windows_Prompt().md "Prompt") 
[Siguiente **&#129042;**](/JavaScriptJuniorDa/00 "")

[*Volver* **&ldca;**](/JavaScriptJuniorDa/README.md "Regresar a página Principal") 
[*Subir* **&#11165;**](# "Ir al título")