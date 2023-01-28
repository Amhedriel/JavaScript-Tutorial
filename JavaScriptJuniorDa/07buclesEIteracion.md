# Bucles e iteración
[**&#11176;** *Anterior* &#11007;](/JavaScriptJuniorDa/006.1arraysElementos.md "Array elements")
[*Volver* **&ldca;**](/JavaScriptJuniorDa/README.md "Regresar a página Principal") 
[Siguiente **&#129042;**](/JavaScriptJuniorDa/07buclesEIteracion "Bucles")

---

## Definición y usos

Usualmente necesitamos repetir acciones.

Por ejemplo, mostrar los elementos de una lista uno tras otro o simplemente ejecutar el mismo código para cada número del 1 al 10.

Los Bucles son una forma de repetir el mismo código varias veces.

El bucle while (mientras) tiene la siguiente sintaxis:

```js
while (condicion) {
  // código
  // llamado "cuerpo del bucle"
}
```
Mientras la condición condition sea verdadera, el código del cuerpo del bucle será ejecutado.

Por ejemplo, el bucle debajo imprime i mientras se cumpla i < 3:
```js
let i = 0;
while (i < 3) { // muestra 0, luego 1, luego 2
  alert( i );
  i++;
}
```
Veamos algo:

```js
numeroParaSumar = 0;

if (numeroParaSumar < 10) {
  document.write("es menor que 10");
}

// > es menor que 10
```

```js
numeroParaSumar = 0;

if (numeroParaSumar <10) {
  numeroParaSumar++;
  console.log(numeroParaSumar);
}

// > 1
```
Aqui podemos ver que nos muestra el resultado de uno gracias al operador `++`, sin embargo lo que nosotros queremos es que nos muestre otra cosa, intentemos esto:

```js
numeroParaSumar = 0;

if (numeroParaSumar <10) {
  numeroParaSumar++;
  numeroParaSumar++;
  numeroParaSumar++;
  console.log(numeroParaSumar);
}

// > 
```
```
```
```
```


---

[**&#11176;** *Anterior* &#11007;](/JavaScriptJuniorDa/006.1arraysElementos.md "Array elements") 
[Siguiente **&#129042;**](/JavaScriptJuniorDa/07buclesEIteracion "Bucles")

[*Volver* **&ldca;**](/JavaScriptJuniorDa/README.md "Regresar a página Principal") 
[*Subir* **&#11165;**](#arrays "Ir al título")