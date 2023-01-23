
let pc1 = {
  nombre: "Endymion",
  procesador: "Intel core I9",
  ram: "32GB",
  espacio: "2TB"
}


let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];

frase = `el nombre de mi PC es: ${nombre} <br>
        el procesador es: ${procesador} <br>
        la memoria ram es : ${ram} <br>
        el espacio en disco es de ${espacio}`;

// Para mostrarlo en pantalla podemos

document.write(frase);

/* >
el nombre de mi PC es: Endymion
el procesador es: Intel core I9
la memoria ram es : 32GB
el espacio en disco es de 2TB*/