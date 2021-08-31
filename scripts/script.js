let listarCarrito = document.getElementById('listarCarrito');
let producto = document.getElementById('productos');
let boton = document.getElementById('botonVaciar');
let datosCompra = document.getElementById('datosCompra');//debería ser un boton que nos lleve a la pantalla para hacer la compra ¿no?
let carrito = [];
let cantidadProductos = 0; //pantalla del carrito de compras
let valorProductos = 0; //pantalla del carrito de compras
let valorTotal = 0; //pantalla del carrito de compras
let IVA = 0.18; //pantalla del carrito de compras


function calculoTotal(cantidadProductos,valorProductos,valorTotal,IVA){
    //calculo Subtotal
    subtotal = cantidadProductos*valorProductos;
    inputtext.value=subtotal; //campo para validar esta operación


    //calculo Total
    total = valorTotal+IVA;

}



const capturarDatos = () =>{ //datos a guardar en el localStorage
    let fechaCompra = document.getElementById('fecha').value;
    let comprador = document.getElementById('comprador').value;

    let registro = {
        fechaCompra,
        comprador
    }
    carrito.unshift(registro);
    // console.log(carrito);
    localStorage.setItem('Carrito', JSON.strigify(carrito));
    getLocalStorage();
}

const getLocalStorage = () =>{
    // listarCarrito.innerHTML = '';
    // let carritoLocalStorage = JSON.parse(localStorage.getItem('Carrito'));
    // //console.log(carritoLocalStorage);
    // carritoLocalStorage.map(carrito => {
    //     const {fechaCompra,comprador} = carrito;
    //     listarCarrito.innerHTML += `
    //                         <td>${fechaCompra}</td>
    //                         <td>${comprador}</td>
    //                         <td>${""}</td>
    //     `   
    //  })
}


document.addEventListener('DOMContentLoaded',getLocalStorage);





function agregarProducto() { //boton en la pantalla de productos
    if(!existe(producto.id)){
        productos.push(producto);
        guardarProductos();
    }
}

function quitarProducto() { //boton en la pantalla del carrito de compras
    const indi = productos.findIndex(p => p.id === id);
    if(indi != -1){
        productos.splice(indi, 1);
        guardarProductos();
    }
}

function productoExistente(id) {
    return productos.find(producto => producto.id === id);
}

// function carrito() {
//     const codigoProducto = localStorage.getItem('productos');
//     return JSON.parse(codigoProducto) || [];
// }

function carritoCompras(){
    return productos.length;
}

function guardar(){
    localStorage.setItem('Productos', JSON.stringify('productos'));
}