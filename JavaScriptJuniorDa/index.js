var miHonda = { color: 'rojo', ruedas: 4, motor: { cilindros: 4, cantidad: 2.2 } };
var miCoche = [miHonda, 2, 'Buen estado', 'comprado 1997'];
var nuevoCoche = miCoche.slice(0, 2);

//  Muestra los valores de myCar, newCar y el color de myHonda.
console.log('miCoche = ' + JSON.stringify(miCoche));
console.log('nuevoCoche = ' + JSON.stringify(nuevoCoche));
console.log('miCoche[0].color = ' + miCoche[0].color);
console.log('nuevoCoche[0].color = ' + nuevoCoche[0].color);

// Cambia el color de miHonda.
miHonda.color = 'azul';
console.log('El nuevo color de mi Honda es ' + miHonda.color);

// Muestra el color de myHonda referenciado desde ambos arrays.
console.log('miCoche[0].color = ' + miCoche[0].color);

console.log('nuevoCoche[0].color = ' + nuevoCoche[0].color);
// >
// miCoche = [{color: 'rojo', ruedas: 4, motor: {cilindros: 4, cantidad: 2.2}}, 2, 'buen estado', 'comprado 1997']
// nuevoCoche = [{color: 'rojo', ruedas: 4, motor: {cilindros: 4, cantidad: 2.2}}, 2]
// miCoche[0].color = rojo;
// nuevoCoche[0].color = rojo;
// El nuevo color de miHonda es azul
// miCoche[0].color = azul;
// nuevoCoche[0].color = azul;