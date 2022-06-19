// El Hoisting ocurre con var y function

yoSoy();

function yoSoy() {
    console.log("Mi nombre es: " + miNombre + " " + miApellido);
}

console.log(miNombre);
var miNombre = "Daniel";


// Lo que hace en compilación, igual con funciones
var miApellido = undefined;
console.log(miApellido);
miApellido = "Santiago";