# Variables en Java Script

Empecemos en la consola del navegador.

`a = 1`
Con esto decimos que a se vuelve uno.

`b = 2`
Con este le estamos asignando el valor de 2 a b.

    a + b
    3
Al convertirse en número las letras se suman con su respectivo valor, en este caso 1 + 2 = 3

Ahora guardemos este resultado en otra variable:

    c = a - b
    -1
Entonces la variable c tiene la asignación del resultado de la suma de a - b que convierte a c en c == -1.

Es momento de disparar una **alerta** (alert)

    alert(mensaje)

Mostraremos un mensaje en la ventana del navegador con ayuda de esta **función**

    alert("Acabo de aprender a programar")


---
## Declarar Variables en JavaScript

En informática, los *datos* son cualquier cosa que tengan sentido para la computadora. **JavaScript** proporciona ocho *tipos de datos* diferentes:
~~~JavaScript
undefined
null
boolean
string
symbol
bigint
number
object
~~~

Por ejemplo, las computaforas distinguwn entre números 12 y cadenas (strings), tales como "12", "dog", o "123 cats", que son colecciones de caracteres. LAs computadoras pueden realizar operaciones matemáticas en un número, pero no en una cadena.

Las *variables* permiten a los ordenadores almacenar y manipular datos de forma dinámica. Hacen esto usando una **etiqueta** para apuntar a los datos en lugar de usar los datos en sí. Cualquiera de los ocho tipos de datos puede almacenarse en una variable.

Las variables son similares a las variables x, e y que usan las matemáticas, lo que significa que son un nombre simple para representar los datos a los que queremos hacer referencia. Las variables de computadora difieren de las variables matemáticas en que pueden almacenar diferentes valores en diferentes monentos.

Le decimos a JavaSvript que cree o *declare* una variable poniendo la palabra clave `var` delante de ella:

    var ourName;

En JavaScript terminamos las sentencias con punto y coma. Los nombres de las variables pueden estar formados por números, letras y `$` o `_`, pero no pueden contener espacios vacios ni empezar con un número.