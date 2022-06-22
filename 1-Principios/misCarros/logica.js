const miLista = document.querySelector('.lista');
var misCarros = [];

function registrar(){
    var marca = document.getElementById('marca').value;
    var modelo = document.getElementById('modelo').value;
    var annio = document.getElementById('annio').value;
    var carro = new Carro(marca, modelo, annio);
    misCarros.push(carro);
    if(misCarros.length > 0){
        imprimir();
    }
}

function Carro(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

function imprimir(){
        var miDiv = document.createElement("div");
        miDiv.classList.add("carro");

        let h3 = document.createElement("h3");
        let h3Texto = document.createTextNode(`Carro ${misCarros.length}:`);
        h3.appendChild(h3Texto);

        let p1 = document.createElement("p");
        let span1 = document.createElement("span");
        let span1Texto = document.createTextNode("Marca:");
        span1.appendChild(span1Texto);
        span1.classList.add("negrilla");
        let p1Texto = document.createTextNode(` ${misCarros[misCarros.length-1].marca}`);
        p1.appendChild(span1);
        p1.appendChild(p1Texto);

        let p2 = document.createElement("p");
        let span2 = document.createElement("span");
        let span2Texto = document.createTextNode("Modelo:");
        span2.appendChild(span2Texto);
        span2.classList.add("negrilla");
        let p2Texto = document.createTextNode(` ${misCarros[misCarros.length-1].modelo}`);
        p2.appendChild(span2);
        p2.appendChild(p2Texto);
        
        let p3 = document.createElement("p");
        let span3 = document.createElement("span");
        let span3Texto = document.createTextNode("Año:");
        span3.appendChild(span3Texto);
        span3.classList.add("negrilla");
        let p3Texto = document.createTextNode(` ${misCarros[misCarros.length-1].annio}`);
        p3.appendChild(span3);
        p3.appendChild(p3Texto);

        miDiv.appendChild(h3);
        miDiv.appendChild(p1);
        miDiv.appendChild(p2);
        miDiv.appendChild(p3);

        miLista.appendChild(miDiv);
}