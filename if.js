var edad = 18;

if(edad === 18){
    console.log("Puedes votar, será tu primera votación");
}else if (edad > 18) {
    console.log("Puedes votar de nuevo");
} else {
    console.log("Aún no puedes votar");
}

// condition ? true : false;
edad >= 18 ? console.log("Puedes votar") : console.log("No puedes votar");

var numero = 1;

var resultado = numero === 1 ? "Soy un uno" : "No, no soy un uno";