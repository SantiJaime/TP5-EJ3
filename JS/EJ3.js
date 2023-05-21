const formId = document.getElementById("formId")
const divMostrar = document.getElementById("divMostrar")
const botonMostrar = document.getElementById("botonMostrar")

formId.addEventListener("submit", crearTarea)

let arrayTareas = []

function crearTarea(event){
    event.preventDefault()

    let inputId = document.getElementById("inputId")
    let tarea = inputId.value

    arrayTareas.push(tarea)
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tarea creada',
        showConfirmButton: false,
        timer: 1500
      })
    inputId.value = ""
    console.log(arrayTareas)
}

const mostrarTarea = () => {
    divMostrar.innerHTML = arrayTareas.map((tarea) => `
    <li>${tarea}</li>`)

    botonMostrar.innerText = "Actualizar lista de tareas"
    
}


const eliminarTarea = () => {

    let pos = inputId.value

    arrayTareas.forEach((tarea, i) => {
        if(tarea === pos){
            arrayTareas.splice(i, 1)
        }
    })
    inputId.value = ""
    console.log(arrayTareas)
}