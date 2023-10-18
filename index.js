// Defino una variable llamada productos con un 
// arreglo de objetos que contienen el nombre y el precio de cada producto

var productos = [
    { nombre: "Galletas 200$", precio: 200 },
    { nombre: "Chocolates 180$", precio: 180 },
    { nombre: "Gomitas 160$", precio: 160 },
    { nombre: "Papas 150$", precio: 150 }
];

// Defino variable llamada ventas con un arreglo de objetos que contienen el nombre de cada vendedor, 
// un arreglo de ventas por producto y el total de ventas

var ventas = [
    { nombre: "Juana", ventas: [0, 0, 0, 0], total: 0 },
    { nombre: "Pedro", ventas: [0, 0, 0, 0], total: 0 }
];

// Defino una variable empleado del mes,donde se almacena cual fue el empleado que mas vendio

var Empleadodelmes = null;

// funcion con parametros 3 parametros de ventas, condiciona que el valor ingresado sea un numero 

function Ventasactuales(persona, productIndex, value) {
    if (isNaN(value)) {
        alert("Por favor ingrese un valor numerico.");
        return;
    }
    // multiplica el numero de cada producto por el valor del mismo y lo suma para verifiacar cada venta por persona.

    ventas[persona].ventas[productIndex] = parseInt(value);
    ventas[persona].total = ventas[persona].ventas.reduce((a, b) => a + b) * productos[productIndex].precio;
    Tabla();
}

// funcion donde se genera la tabla para la obtencion de los datos

function Tabla() {
    var table = document.getElementById("salesTable");
    table.innerHTML = "<tr><th>Productos</th><th>Juana</th><th>Pedro</th></tr>";
    for (var i = 0; i < productos.length; i++) {
        var row = "<tr><td>" + productos[i].nombre + "</td>";
        for (var j = 0; j < ventas.length; j++) {
            row += "<td><input type='text' onchange='Ventasactuales(" + j + ", " + i + ", this.value)' value='" + ventas[j].ventas[i] + "'></td>";
        }
        row += "</tr>";
        table.innerHTML += row;
    
    }

    // condicion del empleado del mes 

    if (ventas[0].total > ventas[1].total) {
        Empleadodelmes = "Juana";
    } else if (ventas[1].total > ventas[0].total) {
        Empleadodelmes = "Pedro";
    } else {
        Empleadodelmes = "Es un empate";
    }  
}

// funcion que muestra los resultados finales 

function Resultados() {
    alert("Total Ventas:\nJuana: " + ventas[0].total + "\nPedro: " + ventas[1].total + "\n\nEmpleado del mes:\n" + Empleadodelmes);
    
}

// funcion que guarda las ventas de cada empleado

function Guardarventas() {
    localStorage.setItem("productos", JSON.stringify(productos));
    localStorage.setItem("ventas", JSON.stringify(ventas));
}

// funcion que borra las ventas de cada empleado

function Borrardatos() {
    localStorage.removeItem("productos");
    localStorage.removeItem("ventas");
    location.reload();
}