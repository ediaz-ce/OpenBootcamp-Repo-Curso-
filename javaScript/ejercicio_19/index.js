const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");
const basura = document.querySelector(".trash");

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event =>{
        console.log("Inicio del arrastre");
        console.log(`Estoy arrastrando el parrafo ${parrafo.innerHTML}`);
        parrafo.classList.add("dragging");
        event.dataTransfer.setData("id", parrafo.id);
        const elemento = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento, 150, 25);
    })
    parrafo.addEventListener("dragend", () =>{
        console.log("He terminado de arrastrar");
        parrafo.classList.remove("dragging");
    })
});
secciones.forEach(seccion =>{
    seccion.addEventListener("dragover", event =>{
        event.preventDefault();
        // console.log("Drag over");
        event.dataTransfer.dropEffect = "link";
    })
    seccion.addEventListener("drop",event =>{
        console.log("Drop");
        const id_parrafo = event.dataTransfer.getData("id");
        const parrafo = document.getElementById(id_parrafo);
        seccion.appendChild(parrafo);
    })
})

basura.addEventListener("dragover", event =>{
    event.preventDefault();


})

basura.addEventListener("drop", event =>{
    const id_parrafo = event.dataTransfer.getData("id");
    const parrafo = document.getElementById(id_parrafo);
    basura.appendChild(parrafo);
    alert(`${id_parrafo} ha sido eliminado`);
    basura.removeChild(parrafo)
});