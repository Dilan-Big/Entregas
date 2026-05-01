//Funciones Básicas + Listas

// Ejercicios 1.

const sumarArray = (array) => {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        total = total + array[i];
    }

    return total;
};

let resultado = sumarArray([1, 5, 8]);
console.log(resultado);

