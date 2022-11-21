# Adición y sustracción con otra forma de definir funciones

En muchos lenguajes de programación primero defines las funciones antes de utilizarlas, en JS no, porque cunado nosotros montamos todo esto dentro de nuestro navegador, el navegador va a verlo todo al mismo tiempo, NO crea primero una cosa y luego crea otra cosa, en cuestión específica de JS eso no es completamente necesario. Lo que si es necesario es si vas a estar usando una función pues esa función debe estar dentro del mismo bloque de código, no puedes tenerlo dentro de otra cosa y después tratar de llamar por fuera, eso no se puede hacer solamente con las funciones, si no con cualquier cosa.

Otra forma de definir funciones:

~~~js
console.log(sumar(5,65));

// veremos que aquí tenemos "function" y no tenemos ningún "const" ni nada, pero tenemos el nombre
// "sumar" junto a los parámetros "(x, y)"
function sumar(x, y) {
    // Retorno
    return x + y;
};

// Esta es otra forma de hacerlo: funciones flecha
const restar = (a, b) => {
  return a - b;
};

console.log(restar(40, 8));
~~~

## Funciones flecha

Normalmente sirven para cuando uno está haciendo código y dentro de ese código quieres meter una función y es más fácil ponerlo en una sola línea.

Veremos que este tipo de funciones no tienen la palabra reservada `function` porque tu ya la tienes con este caracter `=>` que dice al programa, esto es una función

~~~js
const restar = (a, b) => {
  return a - b;
};

console.log(restar(40, 8));
~~~

Ahora englobemos ambas funciones, tradicional `function`, con una ``const`` y la función tipo flecha `=>`

~~~js
// Pedido
console.log(sumar(5, 65));
// "function" que es la forma más clásica de definir una función con "sumar" que agarrará 2 parámetros de entrada "(x, y)"
function sumar(x, y) {
    // Retorno de la suma
    return x + y;
  }

// Acá tenemos función "=>" "const restar" que agarrará 2 parámetros de entrada "(a, b)"  
const restar = (a, b) => {
  // Retorno de la resta
  return a - b;
}
console.log(restar(40, 8));
~~~

Podemos ver que no necesariamente debemos asignar la respuesta o los valores de retorno directamente a una variable y después imprimir la variable, nosotros podemos imprimir operaciones completas dentro de un `console.log`
~~~js
console.log(sumar(5,65));

function sumar(x, y) {
    return x + y;
  }

  
const restar = (a, b) => {
  return a - b;
}
console.log(restar(40, 8));

78
32
~~~
Esto no solo se limita a números.
~~~js

~~~
---

[**&#11176;** *Anterior* &#11007;](/JavaScript/TeoriaJSMedio/003_funcionExponencial.md "Llamar") 
[Siguiente **&#129042;**](/JavaScript/TeoriaJSMedio/003 "")

[*Volver* **&ldca;**](/JavaScript/TeoriaJSMedio/README.md "Regresar a título") 
[*Subir* **&#11165;**](# "Ir al título")