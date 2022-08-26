# Etiqueta especial meta

Debido a que los navegadores están mayormente programados y hecho para funcionar con el idioma nativo del ingles tenemos un error al tratar de utilizar caracteres latinos como los acentos debemos utilizar la etiqueta de `<meta/>` ubicándolo en el `<head></head>` con el atributo `charset="utf-8"`.

~~~html
<html>
    <head>
        <meta charset="utf-8"/>
        <title>Mi primera programada</title>
        <script>
        a = 5
        b = 235
        perrito = "Ciruelejo"
        alert("El valor de a+b es " + (a+b))
        alert("Este código va a funcionar")
        </script>
    </head>
    <body>
        <h1>Primer intento de website</h1>
        <p>Este es nuestro primer programa completo y profesional.</p>
        <p>Gran programa</p>
    </body>
</html>
~~~

Gracias a esta etiqueta le estamos comunicando al navegador que esta página web va a tener una serie de caracteres de un standar llamado `utf-8`, es el standar que nos permite agregar los caracteres especial de nuestro idioma español.