// Declarativas
function miFuncion(){
    return 3;
}
console.log("Numero: "+miFuncion());

// Expresión
// En lugar del => también va function(Son funciones anonimas)
var miFuncion = (a, b) => {
    return a * b;
};
console.log("La multiplición es: "+ miFuncion(3, 4));

//Ejemplos

function sumar(a, b) {
    var resultado = a + b;
    return resultado;
}

console.log("La suma es: "+sumar(15,5));

function saludarPeople(estudiante){
    console.log(`Hola ${estudiante}`);
}

saludarPeople("Daniel");