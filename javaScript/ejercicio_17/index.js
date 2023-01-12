const btn = document.getElementById("btn");
btn.addEventListener("click", evento =>{
    alert("Ha hecho click en el botón")
})
$(() => {
    $("#btn").click(()=>{
        console.log("Hola, estoy utilizando JQuery");
    })

})