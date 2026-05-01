// 2. Encontrar el número mayor:

const numeroMayor = (array) => {
    let mayor = [0];

    for (let i = 0; i < array.length; i++){
        if (array[i] > mayor){
            mayor = array [i];
        }
    }
    return mayor;
} 

let resultado = numeroMayor ([5, 55, 20, 12, 90]);
console.log(resultado);