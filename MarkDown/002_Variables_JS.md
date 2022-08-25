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
Debemos comprender que primero nuestro computador va a ejecutar lo que esta después del símbolo de asignacion y al resolverlo ese valor es asignado a la variable

Entonces la variable c tiene la asignación del resultado de la suma de a - b que convierte a c en c == -1.

Esto valores se guardan en la memoria RAM

---
## Alert

`alert` es una *función*, una función es una serie de código largo o corto, pero es un bloque de código que tiene algún objetivo, en este caso el objetivo de `alert` es disparar una alerta (un mensaje de alerta en una ventana emergente en el navegador).

Las **funciones** se "invocan"; invocar una función es traerla y ejecuatarla, la forma de traerla es abriendo paréntecis y cerrando paréntecis, los paréntecis hacen que la función se invoque, su tu no le agregas paréntesis y solamente le pones el nombre de la función es como si fuera una variable, esto es avanzado pero no lo veremos por ahora; dentro del paréntecis viene el **parámetro** es el valor que le mandas a la función para que ejecute algo.

Como a las variables les asignas un valor:

    a=1

A las funciones les asignas un parámetro:

    alert("mensaje");

Cuando tienes una función, le habres un paréntesis y le pasas un parámetro "mensaje", ese mensaje se vá a la función y es lo que muestra

Es momento de disparar una **alerta** (alert)

    alert("mensaje");

Mostraremos un mensaje en la ventana del navegador con ayuda de esta **función**

    alert("Acabo de aprender a programar")

## Strings

Veamos ahora que `alert("mensaje");` tiene entre comillas un mensaje y si esto no tendría comillas sería como una variable, cuando colocas algo entre comillas dobles estás diciendo que esto es un texto **string** o cadena de texto, podemos tener variables con texto **strings**.

    perro = "ciruelejo"

Si está entre comillas la computadora sabrá que es un string, pero si no lo estubiera pensará que es una variable y buscará dicha variable, en cso de no encontrarla la variable `perro` no valdría nada.

Programar es controlar el flujo de acciones de la computadora.

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