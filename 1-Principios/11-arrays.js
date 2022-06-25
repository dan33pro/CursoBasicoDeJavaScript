var frutas = ["Manzana", "Pera", "Fresa", "Limon"];
var tam = frutas.length;

// Se puede agregar más de un elemento a la vez, supongo que eliminar también XD
//Agrega al final
frutas.push("Uvas");
tam++;

console.log(frutas.length);
console.log(frutas);

var num = Math.floor(Math.random()*tam);
console.log(frutas[num]);

//Remueve al final
var ultimo = frutas.pop();
tam--;
console.log("Se removio: "+ultimo+"\n"+frutas)


//Agrega al inicio
frutas.unshift("Papaya");
tam++;
console.log(frutas);


//Remuve al inicio
var primero = frutas.shift();
tam--;
console.log("Se removio: "+primero);
console.log(frutas);

//
var posicion = frutas.indexOf("Fresa");
console.log(frutas[posicion]);