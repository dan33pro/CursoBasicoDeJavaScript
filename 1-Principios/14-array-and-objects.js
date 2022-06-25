var articulos = [
    { nombre: "Bici", costo: 300000 },
    { nombre: "Tv", costo: 2500000 },
    { nombre: "Libro", costo: 32000 },
    { nombre: "Laptop", costo: 2500000 },
    { nombre: "Teclado", costo: 350000 },
    { nombre: "Audifonos", costo: 55000 }
];

console.log("Este es el array: ");
console.log(articulos);
console.log("\n");

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 200000
});

console.log("Con filter: menores a 200000: ");
console.log(articulosFiltrados);
console.log("\n");

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});

console.log("Con map: array de nombres: ");
console.log(nombreArticulos);
console.log("\n");

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});

console.log("Con find: objeto con nombre laptop: ");
console.log(encuentraArticulo);
console.log("\n");

console.log("Con el metodo forEach: por nombre")
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

console.log("\n");

var articulosCaros = articulos.some(function(articulo){
    return articulo.costo >= 1000000;
});

console.log("Con el metodo some: articulos mayores o iguales a un 1 millon: ");
console.log(articulosCaros);