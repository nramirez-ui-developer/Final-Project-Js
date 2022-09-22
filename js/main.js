//alert("Funcionando");

// Variables globales con let
let nombreCliente = prompt("Ingrese su nombre");
let nombreMascota = prompt("Ingrese nombre de su mascota");
let nombreServicio;
let precio;

function seleccionarServicio() {
  nombreServicio = prompt("ELIGE UNA OPCION: \n 1: Baño de mascota \n 2: Corte de raza \n 3: Estética para mascota \n 4: Salir");
  
  switch (nombreServicio) {
    case "1":
      precio = 250;
      nombreServicio = 'Baño de mascota'
      totalPagar(nombreCliente,nombreMascota,nombreServicio,precio)
      break;
    case "2":
      precio = 300;
      nombreServicio = 'Corte de raza'
      totalPagar(nombreCliente,nombreMascota,nombreServicio,precio)
      break;
    case "3":
      precio = 280;
      nombreServicio = 'Estetica para mascota'
      totalPagar(nombreCliente,nombreMascota,nombreServicio,precio)
      break;
    case "4":
        salir()
        break;
    default:
      console.log("Operación inválida");
      totalPagar(nombreCliente,nombreMascota,nombreServicio,precio)
      break;
  }
}

function totalPagar(cliente, mascota, servicio, costo) {
  console.log(cliente + " el total a pagar de su mascota " + mascota + " por el servicio de " + servicio + " es de: " + costo + " Mxn.")
}

function salir() {
  alert("Gracias por su preferencia!");
}
seleccionarServicio();