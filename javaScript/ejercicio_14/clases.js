class Estudiante {
    _nombre
    _asignatura = ["JavaScript", "HTML", "CSS"]
    constructor(nombre){
        this._nombre = nombre
    }
    obtenDatos (){
        const obj = {
            nombre: this._nombre,
            asignaturas: this._asignatura
        }
        return obj
    }
}
const pringao = new Estudiante("Erick");
console.log(pringao.obtenDatos());