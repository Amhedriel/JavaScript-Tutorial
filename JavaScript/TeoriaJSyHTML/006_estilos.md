# Cambiar estilos

Nosotros también podemos cambiar estilos desde javaScript, veremos que tenemos un título:

```html
<h1 id="titulo">Así se usa JS en el navegador</h1>
```
Y lo manejaremos con JS
```css
titulo.style.color = "red";
```
Lo que da un color rojo a nuestro título, este atributo o como este `style` puede tener muchas cosas nosotros lo tenemos que **concatenar** aquí 

```js
titulo.style.color = "red";
// con todos los estilos que estuvimos viendo en CSS
titulo.style.border = "solid";
// Con border = "solid"; le estamos indicando a la página que nos muestre el color de la propiedad border del elemento titulo
```

Recordemos que es así como nosotros le cambiaremos el estilo a nuestras páginas.