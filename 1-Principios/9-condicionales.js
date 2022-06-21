if (true) {
    console.log("Bienvenidos");
}

if (false) {
    console.log("Hola Gatos");
}

if (true) {
    console.log("Damas y caballeros");
} else {
    console.log("espero se diviertan");
}

console.log("\nHablemos de votaciones");
var edad = 18;
if ( edad === 18 ) {
    console.log("Puedes votar, pero revisa si eres jurado :)");
} else if ( edad > 18 ) {
    console.log("Puedes votar, ya sabes como es :)");
} else {
    console.log("No puedes votar :(");
}

//operador ternario
//condicional ? true : false
var edad = 18;
var mensaje = edad === 18 ? "Hora de divertirse" : "No puedes entrar";
console.log("\n"+mensaje);