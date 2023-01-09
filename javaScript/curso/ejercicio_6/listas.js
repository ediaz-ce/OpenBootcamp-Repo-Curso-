let compra = ["arroz", "leche", "huevos", "pan", "zumos", "pollo", "tomates"];
compra.push("aceite de girasol");
compra.pop();

let pelis = [{nombre: "Niños Grandes", director: "Dennis Dugan", fecha: new Date("july 30 2010")},
             {nombre: "Ready Player One", director: "Steven Spielberg", fecha: new Date("march 28 2018")},
             {nombre: "Chicken Little", director: "Mark Dindal", fecha: new Date("november 18 2005")}];

let pelisPost_2010 = pelis.filter(valor => valor.fecha > new Date("january 01 2010"))
console.log(pelisPost_2010);

let pelisDirectores = pelis.map(valor => valor.director);
let pelisTitulos = pelis.map(valor => valor.nombre);

let pelisConcat = pelisDirectores.concat(pelisTitulos);

let pelisFactor = [...pelisDirectores, ...pelisTitulos];
console.log(pelisConcat);