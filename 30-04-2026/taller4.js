const invertirArray = (array) => {
    let invertir = [];

    for (let i = array.length - 1; i >= 0; i--){
        invertir.push(array[i]);
    }
    return invertir;
}
let resultado = invertirArray(["a", "b", "c", "d"]);
console.log(resultado); 