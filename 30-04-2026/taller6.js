// Calcular promedio de notas:

const persona = {
    nombre: "Ana Perez",
    notas:[5, 4.8, 3.9, 4, 5]
}

function PromedioNotas(estudiante){
    let suma = 0;
    for (let nota of estudiante.notas){
        suma += nota;
    }
    return suma / estudiante.notas.length;
}
console.log(PromedioNotas(persona))