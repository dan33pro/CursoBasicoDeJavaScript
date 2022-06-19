// Con numeros true and false
console.log("1. "+Boolean(1)); // Cualquier numero que no sea cero
console.log("2. "+Boolean(0));

//Otros casos que son falsos
console.log("\n1. "+Boolean(null));
console.log("2. "+Boolean(NaN));
console.log("3. "+Boolean(undefined));
console.log("4. "+Boolean(false));
console.log("5. "+Boolean(""));

//Otros casos que son true
console.log("\n1. "+Boolean("a"));           //con almenos un caracter
console.log("2. "+Boolean([]));            //un array vacio ó no
console.log("3. "+Boolean({}));            //un objeto vacio ó no
console.log("4. "+Boolean(function(){}));  //cualquier función
console.log("5. "+Boolean(true));