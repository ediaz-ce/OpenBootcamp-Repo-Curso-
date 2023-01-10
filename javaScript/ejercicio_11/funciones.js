function siempreTrue(){
    return true;
}
function saludo (){
    console.log("Hola soy una promesa");
}

setTimeout(saludo, 5000);

function* indicesPares(){
    let id = 0;
    while (true){
        id ++;
        if(id % 2 == 0){
            yield id;
        }
        if(id == 20){
            return id;
        }
        
    }
}

const gen = indicesPares();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());