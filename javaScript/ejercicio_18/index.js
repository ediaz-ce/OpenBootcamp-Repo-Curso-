const nombre = prompt("Introduce tu nombre");
const apellido = prompt("Introduce tu apellido");

const persona = {
    nombre: nombre,
    apellido: apellido
}

sessionStorage.setItem("persona", JSON.stringify(persona));
localStorage.setItem("persona", JSON.stringify(persona));

const fecha = new Date();
fecha.setMinutes(fecha.getMinutes() + 2)
console.log(fecha.toUTCString());
document.cookie = `persona=${JSON.stringify(persona)};expires=${fecha.toUTCString}`;

