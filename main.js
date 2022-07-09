let compraFinal = []
let carrito = []
let subTotalCompra;
let total = 0;

const productos = [
    { id: 101, producto: "producto1", precio: 400 },
    { id: 102, producto: "producto2", precio: 500 },
    { id: 103, producto: "producto3", precio: 600 },
    { id: 104, producto: "producto4", precio: 700 },
    { id: 105, producto: "producto5", precio: 900 },
    { id: 106, producto: "producto4", precio: 1000 },
    { id: 107, producto: "producto5", precio: 2000 },
];

class ProductoSeleccionado {
    constructor(cantidad, producto, precio, subTotalCompra) {
        this.cantidad = cantidad
        this.producto = producto
        this.precio = precio
        this.subtotal = subTotalCompra
    }

}

let compra = new ProductoSeleccionado()

function buscar(productos, seleccion) {
    return carrito = productos.filter(objeto => objeto.id == parseInt(seleccion));

}


function listaProductos(productos) {
    let lista = "";
    for (const producto of productos) {
        lista += "ID: " + producto.id + " PRODUCTO: " + producto.producto + " PRECIO: " + producto.precio + "\n";
    }
    return lista;
}



function subtotal(carrito, cantidad) {
    carrito.forEach(item => {
        return subTotalCompra = item.precio * cantidad;
    });

}


function PagoContadoTransferencia(total) {
    console.log("CBU : 23523465324234 \n" + "ALIAS : PEPE.PIEDRA.TRUENO \n" + "Transferencia : $" + total)
}



function pagoTarjeta(total) {
    return total = (total * 1.1).toFixed();
}




for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
    let seleccion = prompt(listaProductos(productos) + "\n 0 - EXIT");
    let error = productos.some((item) => item.id == seleccion)
    buscar(productos, seleccion);
    if (seleccion == 0) {

        if (total == 0) {
            break
        }
        else {
            console.log("El total de su compra es: $" + total);
            let formaPago = prompt("seleccione forma de pago : \n 1 - Transferencia \n 2 - Tarjeta")
            if (formaPago == 1) {
                console.log(PagoContadoTransferencia(total))
                break
            } else if (formaPago == 2) {
                console.log(`El total  es $ ${pagoTarjeta(total)} pagando con tarjeta`)
                break
            }
        }
    }

    if (error == false) {
        alert("Error ID NO CORRESPONDE A UN PRODUCTO")
    }
    else {
        let cantidad = parseInt(prompt("Ingresa la cantidad"));
        subtotal(carrito, cantidad);

        compra = new ProductoSeleccionado(cantidad, carrito.producto, carrito.precio, subTotalCompra)
        console.log(compra)
        compraFinal.push(compra)
        total += subTotalCompra;
    }


}

// const numeros = [1, 2, 2, 3, 4, 4, 5];

// const unicos = numeros.filter((valor, indice) => {
//     return numeros.indexOf(valor) === indice;
//   }
// );

// console.log(unicos); // [1, 2, 3, 4, 5]