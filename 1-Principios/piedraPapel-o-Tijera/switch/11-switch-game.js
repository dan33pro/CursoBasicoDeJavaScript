var option;
var optionPC;
var iconoMiOpcion = document.querySelector('.miOpcion-icono');
var iconoPCOPcion = document.querySelector('.pcOpcion-icono');
var victoriasU = 0;
var victoriasPC = 0;
var misPuntos = document.querySelector('.misPuntos');
var pcPuntos = document.querySelector('.pcPuntos');

function optionR(){
    let dato = document.getElementsByName('option')[0].value;
    option = dato === "👊" ? "piedra" : "";
    iconoMiOpcion.textContent = "👊";
    game();
}

function optionP(){
    let dato = document.getElementsByName('option')[1].value;
    option = dato === "✋" ? "papel" : "";
    iconoMiOpcion.textContent = "✋";
    game();
}

function optionS(){
    let dato = document.getElementsByName('option')[2].value;
    option = dato === "✌️" ? "tijera" : "";
    iconoMiOpcion.textContent = "✌️";
    game();
}

function defineOptionPC(){
    var num = Math.floor(Math.random() * 3) + 1;
    switch (num) {
        case 1:
            optionPC = "piedra";
            iconoPCOPcion.textContent = "👊";
            break;
        case 2:
            optionPC = "papel";
            iconoPCOPcion.textContent = "✋";
            break;
        case 3:
            optionPC = "tijera";
            iconoPCOPcion.textContent = "✌️";
            break;
        default:
            optionPC = "";
    }
}

function game(){
    defineOptionPC();
    switch(option){
        case "piedra":
            if(optionPC === "piedra"){
                
            }else if(optionPC === "papel"){ 
                victoriasPC++;
            }else{
                victoriasU++;
            }
            break;
        case 'papel':
            if(optionPC === "papel"){
                
            }else if(optionPC === "tijera"){
                victoriasPC++;
            }else{
                victoriasU++;
            }
            break;
        case 'tijera':
            if(optionPC === "tijera"){
                
            }else if(optionPC === "piedra"){
                victoriasPC++;
            }else{
                victoriasU++;
            }
            break;
        default:
            alert('OPCION NO VALIDA');
    }
    misPuntos.textContent = victoriasU;
    pcPuntos.textContent = victoriasPC;
}

function reiniciar(){
    window.location.reload();
}