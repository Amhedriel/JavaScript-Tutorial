# Excepciones

Muy bien, nosotros ya vimos que las Funciones son algo simples, se le envía los datos que queremos, hace el procedimiento necesario, nos envía una respuesta y demás.

Ahora nosotros vamos a estar hablando de excepciones, porque si por ejemplo en cualquiera de los anteriores en lugar de mandar "40 - 8" hubiéramos mandado un "string" nos saldría "NaN" u otros fallos que podrían incluso crashear.

Las excepciones són justamente para evitar que al estar ejecutándose nuestro programa y llegue un error entonces lo aguantará un momento

~~~js
// Una función que se llama "preguntaDireccion" y a esto le manda una "pregunta"
function preguntaDireccion(pregunta) {
  let result = prompt(pregunta);
  // Sanitización de entrada a minúsculas
  if (result.toLowerCase() == "izquierda") return "I";
  if (result.toLowerCase() == "derecha") return "D";
  throw new Error("Dirección inválida: " + result);
}
// Acá abajo tenemos una función que se llama "mirar"
function mirar() {
  if (preguntaDireccion("A que lado?") == "I") {
    return "una casa";
  } else {
    return "2 osos hambrientos";
  }
}
// Acá tenemos un "try"
try {
  console.log("Mira a ", mirar());
} 
// Y por último un "catch"
catch (error) {
  console.log("Hubo un error: " + error);
}
~~~

## ***``try``*** y ***`catch`***

`try` y `catch` són nuestra excepción, lo que hará será decir al programa, "intenta esto" eso básicamente hace un `try` y si todo sale bien entonces se sale del flujo: `try {console.log("Mira a ", mirar());} ` veamos que console.log "Mira a", esta función `mirar()`. Pero si hay un error crítico, en lugar que se crashee, o se rompa y le regreses al usuario el error entonces lo vamos a cachar aquí `catch` vamos a `catch (error) {console.log("Hubo un error: " + error);}` o sea: catch al error y mostramos un mensaje de error con el error que tuvimos.

Veamos que la función `mirar()` a parte de que podemos imprimir funciones con `console.log` vemos que la función `mirar()` no recibe ningún parámetro, no recibe nada, lo que va a hacer es un `if()` un flujo condicional `if (preguntaDireccion("A que lado?") == "I") {return "una casa";}` preguntará dirección, que viene de la función de `function preguntaDireccion(pregunta) {}`; veamos que `if (preguntaDireccion("A que lado?")` es igual a I?`== "I")`

Entonces irá a `let result = prompt(pregunta);` recordemos que `prompt` nos mostrará una sub página en el que se puede escribir texto, esta `(pregunta)` es de ``("A que lado?")`` y eso se va a grabar en `result`, ahora, como sea que yo lo escriba usaremos la función `.toLowerCase()` lo que hará es sin importar cómo escribí lo que me pide, convertirá el ``string`` a minúsculas, para que el programa pueda entenderlo, y regrese `izquierda) return "I"` o `derecha) return "D"`.

Si no se elige ninguno entonces saltaremos a `throw new Error("Dirección inválida: " + result);` para que nos enseñe "Dirección inválida " con el resultado que se haya escrito en `result`

En función mirar `function mirar(){}` nos mostrará el resultado según nosotros hayamos elegido antes `if (preguntaDireccion("A que lado?") == "I") {return "una casa";}` si elegimos a la izquierda, `else {return "2 osos hambrientos";}` si elegimos a la derecha

Otra manera perfectamente válida de codificar con resultados similares pero más limpia:

~~~js
const preguntar = (pregunta) => {
  let respuesta = prompt(pregunta);
  respuesta = respuesta.toLowerCase();
  //la siguiente linea es válida usarla sin llaves {} debido a que está escrita en una sola línea de código
  if (respuesta == "izquierda" || respuesta == "derecha") return respuesta;
  // este es un error custom, un error que nosotros le estamos dando
  throw new Error("Dirección inválida " + respuesta);
};

const mirar2 = () => {
  let aDonde = preguntar("A que lado quieres mirar, izquierda o derecha?");
  if (aDonde== "izquierda"){
    return "Una casa";
  } else {
    return "2 osos hambrientos";
  }
};

// Esto se puede hacer como una ayuda en depuración
try{
  let aDonde = mirar2();
  console.log("Mirar a", aDonde);
} catch (error) {
  console.log("Hubo un error ", error);
};
~~~

---

[**&#11176;** *Anterior* &#11007;](/JavaScript/TeoriaJSMedio/005_funcionesConString.md "Funciones utilizando `strings`") 
[Siguiente **&#129042;**](/JavaScript/TeoriaJSMedio/003 "")

[*Volver* **&ldca;**](/JavaScript/TeoriaJSMedio/README.md "Regresar a título") 
[*Subir* **&#11165;**](# "Ir al título")