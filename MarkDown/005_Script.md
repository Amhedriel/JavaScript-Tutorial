# Script

Crearemos un `script` en nuestro proyecto, la etiqueta `<script></script>` es especial. porque lo que va dentro de esa etiqueta no es HTML es JavaScript.

~~~html
<html>
    <head>
        <title>Mi primera programada</title>
        <script>
        a = 1
        b = 2
        alert("El valor de a+b es " + (a+b))
        </script>
    </head>
    <body>
        <h1>Primer intento de website</h1>
        <p>Este es nuestro primer programa completo y profesional.</p>
    </body>
</html>
~~~
---
## Funcionamiento básico de script

Que sucedió? lo que pasa aqui es que carga primero `<html></html>`, luego el `<head></head>` sigue con el `<title>Mi primera programada</title>` habre el `script` y empieza a correr código primero en forma de alerta.
~~~html
<script>
    a = 1
    b = 2
    alert("El valor de a+b es " + (a+b))
</script>
~~~
Acá declaramos 2 *variables* a y b, les asignamos valores 1 y 2 respectivamente, utilizamos la *funcion* de *alert* para mostrar un mensaje emergente con el *string* `"El valor de a+b es "` y le estamos sumando a este texto el valor de una operación matemática `(a+b)` que es igual a 3 y eso lo sumamos al texto `+`.

Veamos que sucede si borramos los paréntesis de la suma de a + b.

~~~html
<script>
    a = 1
    b = 2
    alert("El valor de a+b es " + a + b)
</script>
~~~

Como vemos el resultado es 12, porque a vale 1 y b vale 2 y la suma de a + b es igual a 1 + 2.

Lo que sucede es, si no colocamos la operación de los números en un lugar aparte, dentro de paréntesis en este caso entonces la operación ocurre de izquierda a derecha, si recordamos Álgebra, lo que esta entre el paréntesis más profundo se ejecuta primero, por eso agregamos los paréntesis al (a + b)

O sea, lo que ve el navegador en primer lugar son las variables (a + b) y, al ser números los suma y luego muestra el texto, de derecha a izquierda, pero en este caso, al no llevar paréntesis y no pedir resolver los problemas matemáticos primero entonces leerá el código de izquierda a derecha, el navegador verá primero el texto y luego los números, pero por el orden lo que importa es el texto entonces concatenará los números al texto `"El valor de a+b es " + a` dirá que a es un texto que contiene el 1 y al ir por la b dirá que al ser un texto no puede operar con un número, asi que imprimirá su valor que sería 2, asi que nos da ***El valor de a+b es 12***(no es doce es el string uniendo el 1 y luego el dos, se leería "El valor de a más b es uno dos").

Con esto vemos dos tipos de variables, variables de texto **strings** y variables de **números**, son valores textuales y valores numéricos y cuando pegas uno con otro se llama **concatenación**.

---
### Agreguemos otro alert para ver que sucede

Agregando otro `alert` al html nos mostrará un segundo mensaje

    alert("Este código va a funcionar")

Completando el árbol html notaremos que: 

~~~html  
<html>
    <head>
        <title>Mi primera programada</title>
        <script>
        a = 1
        b = 2
        alert("El valor de a+b es " + (a+b))
        alert("Este código va a funcionar")

        </script>
    </head>
    <body>
        <h1>Primer intento de website</h1>
        <p>Este es nuestro primer programa completo y profesional.</p>
    </body>
</html>
~~~

Al lanzar la página nos enviará 2 mensajes, pero el segundo mensaje no se mostrará de forma adecuada debido al lenguaje que estamos utilizando, necesitamos un `meta`.
