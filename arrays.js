var frutas = ["Manzana", "Mandarina", "Cereza", "Fresa"];

console.log(frutas);

var estudiantes = ["Ricardo","Roberto","Julián","Danilo"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

for (var estudiante in estudiantes) {
    saludarEstudiantes(estudiante);
}