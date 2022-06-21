//leer numero por teclado
var numero = prompt("Ingrese un numero entre 1 y 3");
var opcion = numero == 1 ? "piedra" : numero == 2 ? "papel" : numero == 3 ? "tijera" : "no es una opcion valida";
var opcionPC = opcionPc();

function opcionPc() {
    var numero = Math.floor(Math.random() * 3) + 1;
    opcionPc = numero == 1 ? "piedra" : numero == 2 ? "papel" : numero == 3 ? "tijera" : "no es una opcion valida";
    return opcionPc;
}


alert("Usted eligio " + opcion);
alert("La PC eligio " + opcionPC);

if(opcion === opcionPC) {
    alert("Empate");
}else if(opcion === "piedra" && opcionPC === "tijera") {
    alert("Ganaste");
}else if(opcion === "piedra" && opcionPC === "papel") {
    alert("Perdiste");
}else if(opcion === "papel" && opcionPC === "piedra") {
    alert("Ganaste");
}else if(opcion === "papel" && opcionPC === "tijera") {
    alert("Perdiste");
}else if(opcion === "tijera" && opcionPC === "papel") {
    alert("Ganaste");
}else if(opcion === "tijera" && opcionPC === "piedra") {
    alert("Perdiste");
}