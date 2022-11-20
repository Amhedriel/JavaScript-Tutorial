# Opciones para evitar anidar condicionales

Se menciono enn clases anteriores que se trate de evitar anidando cosas, sin embargo eso se puede solucionar con algo llamado `switch`

## **`switch`**

Este `switch` sería como una tabla de botones donde se puede elegir uno y ese uno hará ciertas cosas, ahora, este `switch` tampoco se utiliza mucho en desarrollos reales, porque existen técnicas más avanzadas que son más eficientes en cuestiones de procesamiento.

~~~js
console.log("\n************* Switch **************\n");
switch (prompt("¿Cómo está el clima?")) {
  case "lluvioso":
    console.log("No te vayas a mojar");
    break;
  case "soleado":
    console.log("Ponte bloqueador");
    break;
  case "nublado":
    console.log("Tapate bien");
    break;
  default:
    console.log("No se como está el clima");
    break;
}
console.log("Aquí salimos del Switch");
~~~
Desglosemos esta estructura: `switch (prompt("¿Cómo está el clima?")) {}` es en ``switch`` donde metemos lo que queremos evaluar `(prompt("¿Cómo está el clima?"))` en este caso es un `prompt` pero podemos meter cualquier variable que fuera básicamente un `string` y se podría estar viendo, en este caso mostrará una ventana emergente interactiva en el navegador, donde podremos escribir alguna de las opciones; dentro de la estructura vienen los **casos** `case "lluvioso":` caso 2 `case "soleado":` caso 3 `case "nublado":`; definido el primer caso `case "lluvioso":` entonces definiremos el código de adentro: `console.log("No te vayas a mojar");` en este caso es solo un `console.log` pero aquí podríamos poner ciertas otras condiciones, podemos meter un ciclo, podemos hacer varias cosas; y una vez termine un caso `case` nosotros debemos colocar un `break;` para saber que, una vez terminado el caso simplemente se salga y no siga tratando de evaluar las otras posibilidades, al final del bloque podemos ver un `default:` que saltará en caso de que ninguna de las anteriores se cumpla (que el usuario escriba otra cosa que no sean las opciones detalladas en cada `case`) lo que mostrará `console.log("No se como está el clima");` y luego su respectivo `break;` terminando así el ciclo y mostrando el mensaje final `console.log("Aquí salimos del Switch");`

Mejorando un poco para entender:

~~~js
console.log("\n************* Switch **************\n");
switch (prompt("¿Cómo está el clima? lluvioso? soleado? nublado? otro")) {
  case "lluvioso":
    console.log("No te vayas a mojar");
    break;
  case "soleado":
    console.log("Ponte bloqueador");
    break;
  case "nublado":
    console.log("Tapate bien");
    break;
  default:
    console.log("No se como está el clima");
    break;
}
console.log("Aquí salimos del Switch");

No te vayas a mojar

Aquí salimos del Switch
~~~

Resultado al colocar lluvioso.

Cuando no tenemos ningún caso que se cumpla nos dirige al `default` directamente

---

[**&#11176;** *Anterior* &#11007;](/JavaScript/TeoriaJS/013_cicloForItercacionControlada.md "Ciclo for con iteración controlada") 
[Siguiente **&#129042;**](/JavaScript/TeoriaJS/README.md "Opciones para evitar anidar condicionales")

[*Volver* **&ldca;**](/JavaScript/TeoriaJS/README.md "Regresar a página Principal") 
[*Subir* **&#11165;**](# "Ir al título")