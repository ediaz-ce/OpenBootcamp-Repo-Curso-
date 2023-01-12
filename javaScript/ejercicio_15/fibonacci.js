const fibonacci = (num) => {
    let valores = [1 , 1]
    for(let i = 0; valores.length < num; i++){
        valores.push(valores[i] + valores[i + 1]);
    }
    return valores;
}
const resultado = fibonacci(20);
console.log(resultado);