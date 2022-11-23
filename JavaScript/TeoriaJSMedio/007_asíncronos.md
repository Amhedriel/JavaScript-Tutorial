# Asíncrono

O el cómo se puede meter JS al navegador.

Ahora veremos lo que són las funciones **asíncronas**, que és un tema más avanzado, sin embargo se considera intermedio.

## Qué es o cómo funciona la programación asíncrona?

La programación asíncrona es que nosotros tengamos todo un `stack` general de programación y es cómo se van a ir ejecutando cada una de las líneas de código. La programación asíncrona es un proceso que estará funcionando pero necesita un tiempo de procesamiento, en el que justamente estará pasando "algo", puede ser una operación, consulta a una API, una consulta de base de datos, consulta a un servicio, se necesita procesar información interna y después regresar una respuesta.

Esto es una parte asíncrona `setTimeout(() => console.log("Tick"), 500);` porque mientras esto está pasando y mientras estamos esperando este 1/2 seg `500` de todas formas*

~~~js
// Aquí tenemos un ``Timeout`` que es de 500 mseg. y después hace un `tick` 
// o es como si hiciera un sonidito de click
// Esta es una función asíncrona "se ejecuta en este momento, pero después de 1/2 segundo hará un `tick`
setTimeout(() => console.log("Tick"), 500); // No lo hará de forma automática

// * esto va a seguir hasta *
let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));

const promesa = () =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => (resolve(console.log('Todo cool')), reject(new Error('oops'))),
      2000
    )
  ); // * aquí


async function main() {
  //   promesa()
  //     .then(() => {
  //       promesa()
  //         .then(() => console.log('hola'))
  //         .catch((err) => console.error(err))
  //     })
  //     .catch((err) => console.error(err))

  await promesa();
  console.log('Aquí termina la primer promesa');
  await promesa();
  console.log('Aquí termina la segunda promesa');
}

main();
~~~

Veamoslo de es este modo, digamos que tenemos nuestro ``stack`` de procesamiento y va en secuencia hacia abajo, en el momento en que llega a la línea 102 que es el ``Timeout`` eso lo pone en un segundo `stack` de procesamiento y entonces dice que tiene que esperar `500` mseg. pero mientras tanto aquí no va a parar, por lo que seguirá corriendo, eso es programación **asíncrona**.

Este fué un ejemplo muy específico, que espera 500 e imprime un `tick`.

Ahora veremos que es la segunda línea:

~~~js
// let fifteen = Promise.resolve(15); fifteen es una promesa,
let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));

~~~
 ## Promesa

Una promesa es: después que me esperes o cuando yo termine este segundo `stack` de programación entonces te voy a regresar este `valor`

Por lo tanto nosotros podríamos hacer una variable que es una promesa `let fifteen =`, y luego tenemos `Promise.resolve(15);` que básicamente es el resultado o resolución de esta promesa, que es **(15)**. Esta es una promesa, una promesa que nos dá un número, justamente significa eso `promise number`, si por ejemplo no fuera un número y cambiaramos el valor por un `string` 

~~~js
let fifteen = Promise.resolve("Quince");
// entonces mi variable "fifteen" se convierte en un `string`, aquí podemos tener una promesa
// que nos devuelva un objeto, que nos devuelva un arreglo puede ser en general una promesa que me regrese lo que yo quiera 
~~~

Veamos de nuevo
~~~js
let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));
~~~

`fifteen` es una promesa que me devuelve un **(15)**, un **15** en el momento en el que se ejecute, ahora para poder acceder a la información de las promesas se puede hacer de carias formas ya sea no un `.dent` o con un `await` y justamente con el `await` viene la programación asíncrona, de `async` `await`

Veamos nuevamente esta vez solamente el ``tick`` y la resolución del **15**
~~~js
setTimeout(() => console.log("Tick"), 500);

let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));
~~~
muchas veces es posible ver primeramente en este caso, la resolución de **15** antes que ``setTimeout`` que estará después de medio segundo, y mientras hace el conteo, el segundo ``stack`` del procesamiento que sería **15** va a seguir avanzando, en `fifteen.then()` es cómo nosotros podemos acceder al valor, y cómo podemos acceder, con una función flecha ``(value) =>``, para eso justamente sirven las funciones flecha, ahora qué es lo que va a pasar en el ``.then`` entonces voy a tener el `value` que este valor es el que se resuelve de aquí `Promise.resolve(15);` y lo vamos a imprimir de este lado ``console.log(`Got ${value}`));`` básicamente este ``valor:${value}`` ahora si lo hemos podido ver.

Si nos damos cuenta en la primera línea también tenemos una función flecha, ``setTimeout(() => console.log("Tick"), 500);`` esto es: cuando nosotros iniciamos un `Timeout`, nos pide primero un **handler** y después **cuanto tiempo** y gracias a esto podemos hacer una función flecha que haga ciertas cosas después de un determinado tiempo:
~~~js
setTimeout(() => console.log("Tick"), 500);

let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));
// primero nos dá el Got 15 
Got 15
// Después viene el Tick a pesar de ser el primero en el flujo del bloque
Tick
~~~

Repetimos que esto es justamente una programación asíncrona, que primero se siga todo un ``stack`` de procesamiento y en los asíncronos nos genera un `stack` "secundario".

Como promesa este `fifteen` siempre me va a responder con un **15** pero nosotros podemos también tener algunas promesas, las cuales nos puedan regresar que **si** esta bien o que **no** esta bien:

~~~js
const promesa = () =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => (resolve(console.log('Todo cool')), reject(new Error('oops'))),
      2000
    )
  );
~~~

Entonces la primera linea es: esta promesa `const promesa = ()` es igual a una nueva **``new Promise``**, en programación de objetos esto sería como una nueva **clase**.

Esta ``new Promise`` va a recibir 2 parámetros que serían `(resolve, reject)` y si nos damos cuenta esto es una función flecha, y aquí ya tenemos nuestro `resolve` y `reject` `(resolve(console.log('Todo cool')), reject(new Error('oops')))`, si nos resuelve `(resolve(console.log('Todo cool'))` nos dirá `Todo cool` y si nos rechaza `reject(new Error('oops'))` nos dará un error que diga `oops`, estos errores podemos estar agarrando con el `.catch`.

Estos `resolve` y `reject` los vamos a poder estar teniendo de forma condicional, nos va a estar regresando las cosas que nosotros queremos.

Ahora ver algo que ya habíamos visto un `function main()`

~~~js
async function main() {
  //   promesa()
  //     .then(() => {
  //       promesa()
  //         .then(() => console.log('hola'))
  //         .catch((err) => console.error(err))
  //     })
  //     .catch((err) => console.error(err))

  await promesa();
  console.log('Aquí termina la primer promesa');
  await promesa();
  console.log('Aquí termina la segunda promesa');
}

main();
~~~

Pero esta vez con un `async`, y siempre que nosotros tengamos un `async`, vamos a tener por lo menos un `await`. Esto lo podemos hacer de varias formas, con `.then(() =>` o solo con puro `await`, el `await` le va a decir: espera hasta que se ejecute toda esta promesa y después avanzas con lo demás.

~~~js
setTimeout(() => console.log("Tick"), 500);

let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));

const promesa = () =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => (resolve(console.log('Todo cool')), reject(new Error('oops'))),
      2000
    )
  );


async function main() {
  //   promesa()
  //     .then(() => {
  //       promesa()
  //         .then(() => console.log('hola'))
  //         .catch((err) => console.error(err))
  //     })
  //     .catch((err) => console.error(err))

// Este await hace que primero termine con esta, a pesar de los 2 segundos y después continue con la otra
  await promesa();
  console.log('Aquí termina la primer promesa');
// Ejecutará primero el de arriba y luego este
  await promesa();
  console.log('Aquí termina la segunda promesa');
}

main();

Got 15
Tick

Todo cool
Aquí termina la primer promesa

Todo cool
Aquí termina la segunda promesa
~~~
No es que los 2 segundos empiecen a contar desde aqui `await promesa(); console.log('Aquí termina la primer promesa');` y luego desde acá `await promesa(); console.log('Aquí termina la segunda promesa');`, lo que hará es que al tener el primer `await` esperará 2seg. a que se resuelva esta primera y luego otros 2seg a que resuelva la segunda.

Si no le colocáramos el `await` esto se quedaría como una promesa pero nunca se va a poder lograr.

Este tipo de programas son más abstractos.

---

[**&#11176;** *Anterior* &#11007;](/JavaScript/TeoriaJSMedio/006_excepciones.md "Excepciones") 
[Siguiente **&#129042;**](/JavaScript/TeoriaJSMedio/README.md "README")

[*Volver* **&ldca;**](/JavaScript/TeoriaJSMedio/README.md "Regresar a título") 
[*Subir* **&#11165;**](# "Ir al título")