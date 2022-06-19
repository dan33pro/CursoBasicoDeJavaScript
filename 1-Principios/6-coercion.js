//             Coerción implicita: 
// En este caso concatena
var a = 4 + "7";
console.log(a + " de tipo: " + typeof(a));

// En este caso convierte el 7 en numero
var b = 4 * "7";
console.log(b + " de tipo: " + typeof(b));

//            Coerción explicita
a = 20;
b = a + "";
console.log(b + " Esto es un: " + typeof(b));
// sin concatenar seria
var c = String(a);
console.log(c + " también de tipo: " + typeof(c));
// de igual forma
var d = Number(c);
console.log(d + " ahora de tipo: " + typeof(d));