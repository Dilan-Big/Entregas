//Crear un algoritmo que capture los datos personales de 5 individuos, estos deberan ser: nombre, edad, genero. Una ves esten capturados en una lista, vamos a contar cuantos son hombres y cuantos son mujeres. Este ejercicio debe realizarse usando clases.

class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
}

let capturar = [];

for (let i = 0; i < 5; i++){
    let nombre = prompt (`Ingrese su nombre ${i + 1}: `);
    let edad = Number(prompt(`Ingresa su edad ${nombre}`));
    let genero = prompt("Ingrese su genero Masculino/Femenino: ");
}

let nuevaPersona = new Persona(nombre, edad, genero);
capturar.push(nuevaPersona);

let hombres = 0;
let mujeres = 0;

for (let Persona of capturar){
    if (Persona.genero === "Hombre"){
        hombres++;
    } else if (Persona.genero === "Mujer"){
        mujeres++
    }
}
console.log("Cantidad de hombre es = ", hombres);
console.log("Cantidad de mujeres es = ", mujeres)