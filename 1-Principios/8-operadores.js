// Operadores binarios
//Aritmetica
console.log("3 + 2 = " + (3 + 2));
console.log("50 - 10 = " + (50 - 10));
console.log("10 * 20 = " + (10 * 20));
console.log("20 / 2 = " + (20 / 2));

//Concatenar
console.log("\nMi nombre es: "+"Daniel"+"Cespedes");

// Operadores unitarios
var semaforo = false;                  // negación
console.log("Si niegas algo falso queda: " + !semaforo);
var saludo = "Quiubo BB que más pues\n"; // asignación
console.log(saludo);

//Operadores logicos
console.log(3 == "3"); //igualdad valor perse(true)
console.log(3 === "3"); //igualdad estricta(false)
console.log(5 > 3 === 2 < 4); //Menor que y Mayor que 
console.log(5 >= 3 === 4 <= 4); //Menor o igual y Mayor o igual que 
console.log(5 < 2 && true); // condicional y
console.log(false || 2 < 3); // condicional o

//operadores utilitarios
var edad = 18;
edad++;
console.log("\nTengo: "+edad);
edad+=2;
console.log("En dos años tendre: "+edad);
edad*=10;
console.log("Y en "+(edad-edad/10+2)+" años tendre: "+edad);