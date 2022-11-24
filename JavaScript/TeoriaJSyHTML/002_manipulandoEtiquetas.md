# Veremos la manera de manejar etiquetas con JS

## .getElementById("");
Ahora bien nosotros el título ``<h1></h1>`` lo vamos a agarrar con `.getElementById("titulo");` y que sea `titulo`

    <h1 id="titulo">Así se usa JS en el navegador</h1>

## .getElementByTagName("");
Luego tenemos párrafo ``<p></p>`` el cual sería `.getElementByTagName("p");` ahora este script seleccionará a todos los elementos que tengan etiqueta `<p></p>`; si hubiéramos colocado cualquier otro elemento entonces lo estuviéramos seleccionando.

```html
    <p>Este es un párrafo</p>
    <p id="demo"></p>
    <p>Mouse over me</p>
    <p>Click me</p>
```
## .getElementsByClassName("");
Y `getElementsByClassName("links");` básicamente se seleccionan con el tema de las clases

```html
<a href="#" class="links">Este es otro párrafo</a>
```

## .getElementsByName("");

Existe pero no se usa, más se usan los primeros 3.

---

Eso recordemos que con los selectores, el elemento como tal, etiqueta, id o la clase
