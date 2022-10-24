/* Variables Globales */
const formVet = document.querySelector("#formMascotta")
/* Eventos del DOM */
const checkBoxBanio = document.querySelector("#checkBanio")
checkBoxBanio.addEventListener("change",validaCheckBanio)

const checkBoxcorteRaza = document.querySelector("#corteRaza")
checkBoxcorteRaza.addEventListener("change",validaCheckBoxcorteRaza)

const checkBoxVacuna = document.querySelector("#vacuna")
checkBoxVacuna.addEventListener("change",validaCheckBoxVacuna)

const checkBoxConsulta = document.querySelector("#consultaMedica")
checkBoxConsulta.addEventListener("change",validaCheckBoxConsulta)

/* ARRAY DE DATOS DEL FORMULARIO */
const formCheck = []

/* VALIDACIONES DE CHECKBOX */
function validaCheckBanio(){
    let isCheckedBanio = checkBoxBanio.checked
    if(isCheckedBanio){
            formCheck.push({
                precio: 250,
                servicio: "Baño de Mascota",
            })
        }
        else{
            alert("Opción de Baño no seleccionada")
        }
}
function validaCheckBoxcorteRaza(){
        let isCheckedCorte = checkBoxcorteRaza.checked
        if(isCheckedCorte){
            formCheck.push({
                precio:320,
                servicio:"Corte de Raza",
            })
        }
        else{
            alert("Opción de Estética no seleccionada")
        }
}    
function validaCheckBoxVacuna(){
        let isCheckedVacuna = checkBoxVacuna.checked
        if(isCheckedVacuna){
            formCheck.push({
                precio:150,
                servicio:"Vacuna contra Rabia",
            })
        }
        else{
            alert("Opción de Vacunación no seleccionada")
        }
}
function validaCheckBoxConsulta(){
        let isCheckedConsulta = checkBoxConsulta.checked
        if(isCheckedConsulta){
            formCheck.push({
                precio:200,
                servicio:"Consutla Médica",
            })
        }
        else{
            alert("Opción de Consulta Médica no seleccionada")
        }
}

/* FUNCION DE MULTIPLICACION DE PRECIO * CANTIDAD */
const totalPrecioFunction = (precio, cantidad) => {
return (precio * cantidad)
} 

/* FUNCTION PRINCIPAL PARA EL FORMULARIO */
let form = document.querySelector('form')
    form.addEventListener('submit', (evt) => {
    evt.preventDefault()
    const nombreCliente = document.querySelector("#clienteid").value
    const nombreMascota = document.querySelector("#mascotaid").value
    const formVet = new FormData(form)
    const cantidad = parseInt(formVet.get('quantity'))
    let sumaTotal = 0

    formCheck.forEach(servicio => {
            sumaTotal = sumaTotal+ servicio.precio
    }); 
    const preciototal = (totalPrecioFunction(sumaTotal,cantidad))
    
    /* Integración de Librería Js */
    Swal.fire({
        title: 'Muchas Gracias! ' + nombreCliente,
        text: 'El total a pagar es: ' + preciototal,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })

    /* GUARDAR EN LOCAL STORAGE */
    const dataStorage = {
        cliente: nombreCliente,
        mascota: nombreMascota,
        servicios: formCheck,
    }
    localStorage.setItem("Values_Form", JSON.stringify (dataStorage))
    
    /* RESETEO DE CAMPOS DEL FORMULARIO */
    form.reset();
})