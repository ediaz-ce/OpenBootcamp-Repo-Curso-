const me ={
    nombre: "Erick",
    apellido: "Díaz",
    edad: 19,
    alturaCm: 174,
    iDeveloper: true,
}
const friend1 ={
    nombre: "Maria",
    apellido: "Martin",
    edad: 20,
    alturaCm: 144,
    iDeveloper: false,
}
const friend2 ={
    nombre: "Juan",
    apellido: "Garcia",
    edad: 18,
    alturaCm: 184,
    iDeveloper: false,
}

let age = me.edad;

let misDatos = [me,friend1, friend2];
let misDatosEdad = misDatos.sort((a, b)=> b.edad - a.edad);
