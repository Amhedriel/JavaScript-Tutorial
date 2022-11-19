# Arreglos

Básicamente hablando son vectores (una lista) y que esta lista se utilizará para tener ciertos valores dentro del mismo lugar.

Los arreglos son estructuras de datos que nos permiten agrupar datos de un mismo tipo, si nosotros queremos tener un ``arreglo`` de **palabras** todos los datos deben ser **palabras**, si vamos a crear un `arreglo` de **números** todos deben ser **números** ahí, no puede colocar un caracter distinto o un `string`, si nosotros vamos a tener un `arreglo` de **objetos** todos deben ser **objetos**.

Nosotros declaramos un arreglo entre corchetes

    let listaDeNumeros = [2, 3, 5, 7, 11, 234];

Estos corchetes van a definir que esto es un `arreglo` y lo podemos visualizar cómo si fuera un crucigrama, o una casilla de crucigrama. Literalmente vamos a tener un rectángulo con diferentes casillas (cuadrados) dividiendolos uno al lado de otro y estas casillas estarán llenas de datos que nosotros indiquemos.

En el ejemplo de arriba dibujemos un cuadro imaginario encerrado por los corchetes y en cada coma estará una casilla, bien, aquí tenemos nosotros nuestra variable `let listaDeNumeros` y cuando nosotros queremos acceder a alguno de estos debemos verlo a travéz de su posición:

    console.log(listaDeNumeros[5]);

El número 5 entre corchetes no indica el número que nosotros queremos de la `listaDeNumeros`, lo que indica es que nosotros queremos el dato que está en la posición 5 de `listaDeNumeros`, empezando el conteo desde 0, por lo tanto el dato 5 sería [234]

    console.log(listaDeNumeros[5]);

    234

En caso de que pidamos un dato que sobrepase la cantidad que tenemos guardado en el `arreglo` entonces saldrá `undefined` como resultado.

    console.log(listaDeNumeros[8]);

    undefined

En JavaScript cuando algo no se puede leer se dice como que es **indefinido**, no es solo que no se puede leer, es algo que no existe.

---

[**&#11176;** *Anterior* &#11007;](/JavaScript/TeoriaJS/005_operadoresLogicos.md "Operadores lógicos JavaScript") 
[Siguiente **&#129042;**](/JavaScript/TeoriaJS/007_metodos.md "Métodos")

[*Volver* **&ldca;**](/JavaScript/TeoriaJS/README.md "Regresar a página Principal") 
[*Subir* **&#11165;**](# "Ir al título")