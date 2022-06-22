var estudiantes = ["Marcos", "Lucas", "Santiago", "Miguel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

//Convencional For
for (var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}

console.log("\n");

//For each
for (var estudiante of estudiantes) {
    console.log(`Comó estás ${estudiante} ?`);
}

console.log("\n");

//While
while (estudiantes.length > 0) {
    var estudiante = estudiantes.shift();
    console.log(`Saca tu cuaderno ${estudiante}`);
}