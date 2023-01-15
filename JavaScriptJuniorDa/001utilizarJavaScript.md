# 1. Formas de utilizar JavaScript

Existen varias formar de utilizar JavaScript:

## En línea 

Dentro de un elemento de HTML.

Colocándolo dentro de una etiqueta.

```HTML
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>javaScriptBasic</title>
</head>
<body>
    <h1 onclick="alert('Hola')">Hola Mundo!</h1>
</body>
</html>
```
Una forma de poner la línea es trabajando con **eventos** `onclick="` que con `alert()` nos mostrará un mensaje escrito dentro de `alert('Hola')` al hacer click en `<h1>Hola Mundo!</h1>`.

No es recomendable trabajar de este modo en especial por temas de modularización y convención.

## Contenido en la etiqueta `<script></script>` dentro el HTML.

Aqui veremos cómo utilizar nuestro código con la etiqueta `<script></script>`.

```html
<body>
  <script>alert('Hola')</script>
  <h1>Hola Mundo!</h1>
</body>
```
Con esto podemos ver el mensaje emergente 'Hola' cuando entremos a la página (o recargamos).

## Contenido en un archivo .js.

La manera recomendable que es mediante un enlace al archivo .js

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>javaScriptBasic</title>
<!-- Enlace al archivo de codificación para JavaScript -->
  <script src="/JavaScriptJuniorDa/index.js"></script> 

</head>
<body>
  <h1>Hola Mundo!</h1>
</body>
</html>
```
De este modo  nosotros debemos escribir el código en nuestro .js

```js
alert("Hola");
```
Y veremos el resultado ``Hola`` en una ventana emergente.

## Con un `require`.

Esto se lo verá cuando utilicemos Node.JS

---

[**&#11176;** *Anterior* &#11007;](/JavaScriptJuniorDa/README.md "Menú Inicial") 
[Siguiente **&#129042;**](/JavaScriptJuniorDa/002tiposDeDatos.md "Datos")

[*Volver* **&ldca;**](/JavaScriptJuniorDa/README.md "Regresar a página Principal") 
[*Subir* **&#11165;**](# "Ir al título")
