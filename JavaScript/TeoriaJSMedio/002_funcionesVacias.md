# Funcione vacías `void`

Funciones que no reciban ningún tipo de parámetro y que tampoco retornen ningún otro tipo de parámetro, pero para que? algunas veces nosotros tenemos funciones que están fuera del alcance de lo que nosotros necesitamos hacer en la aplicación, o tenemos funciones que hacen cosas en otros lados, entonces yo no le tengo que mandar nada y no me va a devolver nada, pero es justamente lo que yo necesito que pase, veamos.


~~~js
const ruido = function () {
  console.log("kataplum!");
}

ruido();

~~~

Tenemos nuestra constante ruido `const ruido` que es así como se va a llamar la función `const ruido = function () {}` y adentro tenemos 2 paréntesis tenemos los parámetros, pero en esta función no tenemos nada, incluso no tenemos un `return`, así que lo único que hará esta función es: llegar a la *función* imprimir el `console.log("Kataplum");` y listo, solo debe mostrar ese mensaje.


~~~js
const ruido = function () {
    console.log("kataplum!");
}
  const ruido: () => void;
ruido();


kataplum!
~~~

En la anterior función vimos que el retorno de la función lo guardábamos en variables y los enseñábamos en pantalla, ahora debemos ver que en este caso la función `ruido` no nos devuelve nada y a eso se le llama ***void*** por lo tanto no la debemos asignar y de hecho, no podemos asignárselo a nada porque en realidad no tiene ningún valor que pueda regresar.

Entonces simplemente la mandamos a llamar, para que?

Lo que queremos e llamar a la función `ruido` para que muestre un mensaje `"kataplum!"`

---

[**&#11176;** *Anterior* &#11007;](/JavaScript/TeoriaJSMedio/001.1_llamarUnaFunci%C3%B3n.md "Llamar") 
[Siguiente **&#129042;**](/JavaScript/TeoriaJSMedio/003 "")

[*Volver* **&ldca;**](/JavaScript/TeoriaJSMedio/README.md "Regresar a título") 
[*Subir* **&#11165;**](# "Ir al título")