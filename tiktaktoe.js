var piedra = "Piedra";
var papel = "Papel";
var tijera = "Tijera"

function playSwitch(opcion, cpu){
    if(opcion != cpu){
        switch (opcion) {
            case piedra:
                console.log(opcion);
                if (cpu == tijera) console.log("Ganaste");
                break;
            case papel:
                console.log(opcion);
                if (cpu == piedra) console.log("Ganaste");
                break;
            case tijera:
                console.log(opcion);
                if (cpu == papel) console.log("Ganaste");
                break;
            default:
                console.log("Perdiste"); 
        }
    }else{
        console.log("Empate");
    }
}


function play(opcion, cpu){
    if(opcion != cpu){
        if(opcion == piedra && cpu == tijera) console.log("Ganaste");
        else if(opcion == papel && cpu == piedra) console.log("Ganaste");
        else if(opcion == tijera && cpu == papel) console.log("Ganaste");
        else console.log("Perdiste");
    }else{
        console.log("Empate");
    }
}
