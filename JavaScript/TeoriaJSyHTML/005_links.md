# Links

Ya sabemos que son ``links`` y ya vimos que es todos los elementos que tengan la **clase: class name** `const links = document.getElementsByClassName("links");` y esto como también es por clases podemos tener esta clase de links `class="links"` en varios diferentes elementos, recordemos que las clases son justamente para poder reutilizarse, en cosas como **parrafos, divs , etc**.


Como la parte de `.getElementsByClass` nos dá un arreglo, puede llegar a ser un poco complicado, por eso: a menos que nosotros queramos hacer una función que aplique para todos los elementos del arreglo, funciona hacer por `TagName` o por `ClassName`, pero la realidad es que lo más fácil y a la vez lo más limpio es hacerlo por `id=""`.

Entonces nosotros vamos a poder ir metiendo las diferentes propiedades que va ir teniendo nuestra estructura de HTML, podemos tener como el `href=""`, `style`, podemos meter cosas directo al HTML como lo visto con JavaScript. Nosotros sabemos que la propiedad de un ancla, `<a></a>` de un ``link`` es justamente `href=""` y este mismo es a donde nos va a llevar dicho link.

```html
	<a href="#" class="links">Este es otro párrafo</a>
```
Tenemos este ``<a href="#"></a>`` y estamos definiendo de forma inicial que este `href="#"` no te lleva a nada, es un link muerto asi que con JS lo que estamos haciendo es: ya tenemos ``links`` y es toda la clase que tenga links `const links = document.getElementsByClassName("links");` y con esto:

```js
links[0].href = "google.com"; 
```
Le estamos diciendo que en el 0, o sea en el primero `.href`(Este .href se puede hacer por justamente en el HTML tiene el elemento ``<a>``) y a ese ``.href`` le podemos agregar cualquier dirección a la que nosotros queramos re dirigir, en este caso es `.href = "google.com"`.

Ahora en este `<a href="#" class="links">Este es otro párrafo</a>` la propiedad de `href="#"` no es necesario: `<a class="links">Este es otro párrafo</a>` que esté de este lado, porque básicamente se le colocara igual mediante el código de JavaScript `links[0].href = "google.com";`.

Ahora, sabemos que si hacemos un click un link, nos lo abrirá en la misma página y para poder arreglar eso utilizaremos el `target` en el código de JS: 

```js
link[0].target = "_blank";
```
Entonces cuando hagamos click nos redirigirá en un nueva ventana.
Justo estos atributos nosotros podemos estar agregando en cada uno de estos elementos y se los agregamos desde JavaScript, ya no desde HTML, y todos estos atributos los podemos estar modificando de este lado.
