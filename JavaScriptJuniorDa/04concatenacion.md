# 4. Concatenación

- [Definición](#definición)
- [Para números forzamos string](#números "Para forzar números \" \" + 10 + 5")
- [Con `concat`](#concat)
- [Con `backticks` y la variable entre ``${...}``](#backticks-y-la-variable-entre) (Bloquote o Acento Grave)
    - [Escape de comillas](#escape-de-comillas)

## Definición

La concatenación es unir `strings` con el símbolo `+`.

```js
let saludo = "¡Hola!";
let pregunta = "¿Como estas?";
```
Para concatenarlas en esta oportunidad usaremos la variable ``frase``

```js
let saludo = "¡Hola! ";
let pregunta = "¿Como estás?";

let frase = saludo + pregunta;

// > ¡Hola!¿Como estas?
```
---

## Números

Ahora bien si nosotros queremos concatenar números, una de las formas es forzar un `string`:

```js
let numero1 = 10;
let numero2 = 5;

let frase = " " + numero1 + numero2;

document.write(frase);

// > 105
```
Esto sucede porque cuando la variable detecta texto (en este caso vacío `" "`) automáticamente convierte todo en una cadena de texto.

Si intentáramos concatenar números la salida sin forzar `strings` es muy diferente, porque recordemos que los números se suman:

```js
let numero1 = 10;
let numero2 = 5;

let frase = numero1 + numero2;

document.write(frase);
// > 15
```
Como vimos, se suman, y a esto nos referimos a "tipado dinámico", que las variables pueden variar.

Otro modo sería asignando `strings` a las variables.

```js
let numero1 = "10";
let numero2 = "5";

let frase = numero1 + numero2;

document.write(frase);
// > 105
```
Pero se prefiere agregar las comillas ``" "`` para que fuerce la concatenación de `strings` con números.

---

## **`concat`**

Es un método de "cadena" que nos ayuda a concatenar, y para usarlo se debe tener al menos 1 ``string``.

```js
let numero1 = "10";
let numero2 = 5;

let frase = numero1.concat(numero2);

document.write(frase);
// > 105
```

---

## **`backticks`** y la variable entre **``${...}``**

## `backticks` (Bloquote o Acento Grave) y escape

Por ejemplo:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>javaScriptBasic</title>
</head>
<body>
  <h1>Hola Mundo!</h1>
  <script src="/JavaScriptJuniorDa/index.js"></script>
</body>
</html>
```

```js
nombre = "David Amhed";

frase = "Soy " +nombre + " y estoy caminando.";

document.write(frase);

// > Soy David Amhed y estoy caminando.
```
Con esto tenemos una concatenación común, pero, tenemos otra manera más utilizada y recomendada.

Usemos `backticks (``)` o acentos invertidos y agreguemos `${...}`.

```js
nombre = "David Amhed";

frase = `Soy ${nombre} y estoy caminando.`;

document.write(frase);

// > Soy David Amhed y estoy caminando.
```
Esta es la mejor manera y nos ahorramos de tener errores, incluso podemos hacer esto:

```js
nombre = "David Amhed";

frase = 
`Soy 
${nombre}
y estoy caminando.`;

document.write(frase);

// > Soy David Amhed y estoy caminando.
```
Es muy importante usar `backticks (``)` porque es mas cómodo, por si quisieramos utilizar algo de **HTML**

```js
nombre = "David Amhed";

frase = `<div>
<h2>Subtítulo</h2>
<h3>Otro subtítulo</h3>
</div>`;

document.write(frase);

// > Subtítulo
// > Otro subtítulo
```
---

### **Escape de comillas**

El uso de las comillas es importante, si usamos comillas dobles para crear los `strings` debemos usar comillas simples para poder mostrar comillas en nuestro `string`. También con los `backticks (``)`.

Con comillas simples:
```js
frase = "Soy 'David' y estoy caminando.";

document.write(frase);

// > Soy 'David' y estoy caminando.
```
Con comillas dobles:
```js
frase = 'Soy "David" y estoy caminando.';

document.write(frase);

// > Soy "David" y estoy caminando.
```
---

[**&#11176;** *Anterior* &#11007;](/JavaScriptJuniorDa/03operadores.md "Prompt") 
[Siguiente **&#129042;**](/JavaScriptJuniorDa/0 "Concatenación")

[*Volver* **&ldca;**](/JavaScriptJuniorDa/README.md "Regresar a página Principal") 
[*Subir* **&#11165;**](#4-concatenación "Ir al título")