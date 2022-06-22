var miCarro = {
    marca: "Toyota",
    modelo: "4Runner",
    annio: 2022,
    detalleDelAuto: function(){
        console.log(`Carro: ${this.modelo} ${this.annio}`);
    }
}

console.log(miCarro);
console.log("\n"+miCarro.marca);
console.log("\nCon detale de auto:");
miCarro.detalleDelAuto();

function carro(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

console.log("\n");
var autoNuevo = new carro("Tesla", "Model 3", 2022);
console.log(autoNuevo);

var autoNuevo2 = new carro("Tesla", "Model X", 2020);
console.log(autoNuevo2);

var autoNuevo3 = new carro("Tesla", "Model Y", 2018);
console.log(autoNuevo3);