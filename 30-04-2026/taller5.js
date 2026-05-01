// 5. Buscar un elemento:

const buscarElemento = (array, elemento) => {
    for (let i = 0; i < array.length; i++){
        if (array[i] === elemento){
            return true; 
        }
    }

    return false;
}

console.log(buscarElemento(["rojo", "azul"], "azul"));