// 3. Contar elementos pares:

const contarPares = (array) => {
    let pares = 0;

    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            pares = pares + 1;
        }
    }
    return pares;
}

let resultado = contarPares ([4, 5, 24, 8, 90, 17, 5, 2, 8]);

console.log(resultado);