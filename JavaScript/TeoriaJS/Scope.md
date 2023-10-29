# Scope (Disponibilidad)

[**&#11176;** *Anterior* &#11007;](/JavaScript/TeoriaJS/003.3_booleanos.md "")
[*Volver* **&ldca;**](/JavaScriptJuniorDa/README.md "") 
[Siguiente **&#129042;**](/JavaScript/TeoriaJS/005_operadoresLogicos.md "")

---

Si nosotros tenemos:

```js
let x = 5;

{
  let x = 2;
  console.log(x)
}

console.log(x)
```
De esta manera comenzará con `let x = 5;`, continuará con lo de las llaves `{}` que dichas llaves separan el `scope` y después el `console.log(x)`

Notemos también que `let` lo estamos re-declarando, sin embargo debemos saber que no son los mismos, por cuestiones del **Scope**. Ahora la salida de la consola sería:

```cmd
> 2
> 5
```

La primera x se refiere a la que se encuentra dentro de las llaves `let x = 2;` y la segunda nos muestra la que está fuera del **Scope** `let x = 5;`.

Ahora veamos que pasa si eliminamos la variable que se encuentra fuera del **Scope**

```js
{
  let x = 2;
  console.log(x)
}

console.log(x)
```
El segundo resultado es un error, debido a que no tiene un valor definido

```cmd
> 2
> Uncaught ReferenceError: x is not defined
```
Si hacemos algo con la variable dentro del **Scope**

```js
let x = 5;

{
  let x;
  console.log(x)
}

console.log(x)
```
Nos aparece un resultado ``undefined``

```cmd
> Undefined
> 5
```
Debido a que nuestra variable que se encuentra dentro del **Scope** está **declarado** pero no **definido**.

Veamos este otro caso:

```js
let x = 5;

{
  console.log(x)
}

console.log(x)
```

Podemos ver que el resultado es 5 en ambos casos, dentro y fuera del **Scope**

```cmd
> 5
> 5
```
Aqui sucede que las variables de afuera del `Scope` están disponibles, por lo que el **Scope** vá desde afuera hacia adentro, por lo que el **Scope** padre está disponible dentro del **Scope** hijo, sucede lo mismo con `const`

```js
  const x = 5;
  
  {
    const x = 2;
    console.log(x)
  }
  
  console.log(x)

```

```cmd
> 2
> 5
```

---

[**&#11176;** *Anterior* &#11007;](/JavaScript/TeoriaJS/003.3_booleanos.md "")
[Siguiente **&#129042;**](/JavaScript/TeoriaJS/005_operadoresLogicos.md "")

[*Volver* **&ldca;**](/JavaScriptJuniorDa/README.md "Regresar a página Principal") 
[*Subir* **&#11165;**](#Scope "Ir al título")