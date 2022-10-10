let nombreCliente = prompt("Ingrese su nombre");
let nombreMascota = prompt("Ingrese nombre de su mascota");
let nombreServicio = prompt("ELIGE UNA OPCION: \n 1: Baño de mascota \n 2: Corte de raza \n 3: Vacunación \n 4: Consulta Médica");

let cantidad = prompt("Ingrese cantidad de mascotas");
console.log(cantidad, 'cantidad')

const totalPrecioFunction = (precio, cantidad) => {
    alert(nombreCliente + ' El total a pagar por su mascota ' + nombreMascota + ' es de: ' + precio * cantidad + ' Pesos')
}

const serviciosArray = [
    {
        id:1,
        precio:250,
        servicio:"Baño de Mascota",
    },
    {
        id:2,
        precio:320,
        servicio:"Corte de Raza",
    },
    {
        id:3,
        precio:150,
        servicio:"Vacunación",
    },
    {
        id:4,
        precio:200,
        servicio:"Consulta Médica",
    }
];

serviciosArray.forEach(servicio => {
    console.log(parseInt(nombreServicio), servicio.id);
    if(parseInt(nombreServicio) === servicio.id){
        totalPrecioFunction(servicio.precio, cantidad);
    }
});
