# Objetos

Los **objetos** son estructuras de datos que os permiten agrupar datos de diferentes tipos.

Son una colección de diferentes tipo de datos, que a diferencia de los **arreglos** que solo admitían un tipo de dato.

Ahora lo único que debemos hacer es ponerle `keys` **(llaves {})** estas **llaves** dirán como se van a llamar cada uno de los datos.

Tendremos un objeto ``explorer`` y que tendrá? los objetos nos ayudarán a describir diferentes partes, así que describirá a uno de nosotros.

~~~js
console.log("\n************* Objetos **************\n");

let explorer = {
    nombre: "Nombre del Explorer",
    email: "email@innovaccion.mx",
    numReg: 12345,
    mission: "FrontEnd",
    proyectos: ["Abogabot", "Taquería", "Pastelería", "Vacunación"],
    //proPer o proyectos personales es otro objeto
    proPer: {
        escolar: "Tareas",
        profesional: "Trabajo",
        personal: "Negocio",
        cuantos: 3,
    }
};

console.log(explorer);
/*Como nosotros podremos acceder a cada una de las partes del objeto?, se hace con "anidación"*/

~~~
En el caso de arriba, si nosotros queremos ver todo el objeto entonces veremos `explorer`.


## Anidación

Siguiendo el ejemplo anterior, nosotros solo queremos una parte del objeto, queremos `Tareas`, entonces escribiremos `console.log(explorer.proPer.escolar);`

~~~js
console.log(explorer.proPer.escolar);

Tareas
~~~
Lo que indica que: de `let` queremos `explorer` ir a `porPer` y entrar a `escolar: Tareas`

~~~js
console.log(explorer.numReg);

12345
~~~

Si nosotros quisiéramos juntar `escolar` con `cuantos`:

~~~js
console.log("Proyectos: " + explorer.proPer.cuantos + " " +explorer.proPer.escolar);

Proyectos: 3 Tareas
~~~

Así es como podemos estar viendo y utilizando cada uno de estos valores de los objetos.
