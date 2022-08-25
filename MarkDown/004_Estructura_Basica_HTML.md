# Estructura básica HTML

Empezaremos con las etiquetas principales:

~~~html
<html>
    <head>
        
    </head>
    <body>
        
    </body>
</html>
~~~

Ahora agregaremos `<title></title>`

~~~html
<html>
    <head>
       <title>Mi primera paginita</title> 
    </head>
    <body>
        
    </body>
</html>
~~~
Esto no se mira en la página en si, se lo vé en la pestaña, porque es el `title` de la página web.

Lo que está en el `<head>` no se visualiza en la página pero es la parte que le dá funcionamiento extra a la página

~~~html
<html>
    <head>
        <title>Mi primera programada</title>   
    </head>
    <body>
        <h1>Primer intento de website</h1>
    </body>
</html>
~~~

Con esto, podremos ver el título de nuestra página web `<h1>Primer intento de website</h1>`

Por ende, lo que va en el `<body></body>` es lo que su visualiza en la página web y lo que va en `<head></head>` es lo que no se ve.

---
## Funcinalidad básica 

La forma en la que los sitios web cargan es secuencial, de *arriba* hacia *Abajo*; si tienes algo arriba lo de abajo todavía no existe.

Ahora crearemos un párrafo `<p></p>`.

~~~html
<html>
    <head>
        <title>Mi primera programada</title>   
    </head>
    <body>
        <h1>Primer intento de website</h1>
        <p>Este es nuestro primer programa completo y profesional.</p>
    </body>
</html>
~~~
---
## Estructura HTML
La estructura de HTML es como si fuera un arbolito, como su fuera caja entre caja y caja.

Veamos la primera etiqueta

    <html></html>
Que tiene dos ramas:

    <head></head>
    <body></body>

En `<head></head>`ahora mismo tenemos un rama `<title></title>` y en 
`<body><body>` tenemos 2 ramas ahora mismo `<h1></h1>` y `<p></p>`

~~~html
<html>
    <head>
        <title></title>   
    </head>
    <body>
        <h1></h1>
        <p></p>
    </body>
</html>
~~~

Es por eso que la estructura de HTML tiene que ser respetado, esta es la razón de cuando habres un HTML de primera se cierra de última, si primero habres un `<head></head>`, debes cerrarlo para abrir otra etiqueta que este al mismo nivel.

Recuerda que la Raíz es `<html></html>` y siempre tiene dos hijos o ramas `<head></head>` y `<body></body>`.

Ahora agregaremos código a nuestra aplicación y va en una etiqueta llamada:

## Script

Y va en el `<head></head>`, que es donde carga el `script`.
