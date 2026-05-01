// Simular un cajero automatico:

// 1. consignar dinero: recordar que no se puede consignar valores negativos

let valorConsignar = Number(prompt("Ingrese el valor a consignar: "));

const valorPositivo = (valorConsignar) => {
    if (valorConsignar <= 0) {
        return "¡El valor debe ser positivo!";
    } else {
        return "¡Se te dara ingreso al cajero!";
    }
}
let resultado = valorPositivo(valorConsignar);

console.log("El valor ingresado fue: " + valorConsignar);
console.log(resultado); 