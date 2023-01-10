# Intro a JavaScript

### Algunas notas iniciales:

Todo lo estaríamos viendo a travéz de un html, para poder cargar el ``script``; además recordar que dependiendo dónde llamemos a JS será el orden en el que se ejecutará, o sea: antes de cargar la página (que cargara primero todo el ``script`` y luego la página)o después de cargar la página (que primero carga la página y después el `script`)

## **Java Script**
Cuando nosotros estamos hablando de Java Script básicamente estamos hablando de un lenguaje que se denomina "Scripting", que es cómo estaríamos automatizando diferentes tareas.

Es un lenguaje de programación
  - Iterpretado.
  - Orientado a objetos.
  - Imperativo.
  - Case sensitive.
  - Basado en prototipos /instancias / classless.
  - De Tipado débil.
  - Lenguaje Dinámico.

  - ECMAScript (5.1 y 6, 7, 8, Next).

Funciona con un `script` que se inyecta dentro de el html. Ahora a diferencia de la etiqueta de CSS `<link>` en caso de Java Script es ``<script src=""></script>``.

## Consola

La podemos ver desde las herramientas del desarrollador presionando F12 -> CONSOLE en el apartado de messages. Al haber creado un ***1-intro.html*** y enlazarlo con un ***1-intro.js*** podremos crear las órdenes en ***1-intro.js*** y ver el resultado en el console del navegador

## Interpretación de código

La herramienta de interpretación de código en JavaScript es el mismo navegador a diferencia de otros lenguajes.

## Empezando

Entonces tenemos nuestro `console.log`:

~~~js
console.log("Variables");
~~~

### `console.log()`

Es para imprimir en consola. Nosotros escribiremos en consola y esta lo va a interpretar

~~~c
console.log('hola explorers')
VM242:1 hola explorers
undefined
console.log("hola explorers")
VM288:1 hola explorers
undefined
~~~

En esta consola es donde estaríamos viendo todos nuestros resultados.

## Qué puede hacer?

El núcleo del lenguaje JavaScript de lado del cliente consta de algunas características de programación comunes que te permiten hacer cosas increíbles.

Lo podemos usar para hacer el dinamismo de los sitios web, es decir, para que todos los sitios web sean dinámicos debemos implementar JavaScript, no solo en el BackEnd también por el lado del cliente.

Como dijimos en BackEnd lo utilizamos con servidores en Node.js.

También tenemos Frameworks y Libraries con tecnologías FrontEnd como Angular, React o Vue.js que nos permiten crear código de una forma más sencilla, reduce la cantidad de código y suele ser más óptimo.

Lo que aún es más emocionante es la funcionalidad construida sobre lenguaje JavaScript de lado del cliente. Las denominadas **interfaces de programación de aplicaciones (API)** te proporcionan super poderes adicionales para utilizar en tu código JavaScript.

También tiene otros usos como:

- Inteligencia Artificial con tensor Flow.
- Placas electrónicas como Arduino.
- Mobile Apps.
- Desktop Apps.
- Video Juegos.

## La etiqueta `script`

Los programas de JavaScript se pueden insaertar en casi cualquier parte de un documento HTML con el uso de la etiqueta `<script></script>`

```html
<!DOCTYE html>
<html>
  <body>
    <p> Antes del script...</p>
    
    <script>
      alert( "¡Hola, Mundo!");
    <script>

    <p>...Después del script</p>
  </body>
</html>

```
Pero esto se considera mala práctica.


## API

Son un conjunto de bloques de construcción de código listos para usar, que permiten a un desarrollador implementar programas que de otro modo serían difíciles o imposibles de implementar. Hacen lo mismo para la programación que los kits de muebles prefabricados para la construcción de viviendas - es mucho más fácil tomar paneles pre cortados y atornillados para hacer una estantería que elaborar el diseño uno mismo.

Generalmente se dividen en 2.

1. Las ***APIs del navegador*** están integradas en tu navegador web y pueden exponer datos del entorno informático circundante o realizar tareas complejas y útiles.

*  **API del DOM (Document Object Model)** permite manipular HTML y CSS, crear, eliminar y cambiar el HTML, aplicar dinámicamente nuevos estilos a las páginas, etc.

* **API de Geolocalización** recupera información geográfica. Así es como Google Maps puede encontrar la ubicación y trazarla en un mapa.

* **Las APIs Canvas y WebGL** permiten crear gráficos animados en 2D y 3D.

* **APIs de Audio y Video** como HTMLMediaElement y webRTC que permiten hacer cosas realmente interesantes con multimedia, como reproducir audio y video directamente en una página web, o tomar video de tu cámara web y mostrarlo en la computadora de otra persona.

2. Las ***APIs de terceros*** que no están integradas en el navegador de forma predeterminada y, por lo general, debes obtener su código e información de algún lugar de la WEB.

* La **API de Twitter** permite hacer cosas como mostrar tus últimos twetts en tu sitio web.

* La **API de Google Maps** y la **API de OpenStreetMap** que permiten insertar mapas personalizados en tu sitio web y otras funciones similares.


---

[**&#11176;** *Anterior* &#11007;](/JavaScript/TeoriaJS/README.md "Regresar a página anterior") 
[Siguiente **&#129042;**](/JavaScript/TeoriaJS/002_variables.md "Variables")

[*Volver* **&ldca;**](/JavaScript/TeoriaJS/README.md "Regresar a título") 
[*Subir* **&#11165;**](# "Ir al título")