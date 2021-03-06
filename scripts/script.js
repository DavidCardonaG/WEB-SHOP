let listarCarrito = document.getElementById('listarCarrito');
let producto = document.getElementById('productos');
let boton = document.getElementById('botonVaciar');
let datosCompra = document.getElementById('datosCompra');//debería ser un boton que nos lleve a la pantalla para hacer la compra ¿no?
let carrito = [];
let cantidadProductos = document.getElementById('cantidadP'); //pantalla del carrito de compras
let valorProductos = document.getElementById('valorP'); //pantalla del carrito de compras
let valorTotal = document.getElementById('valorT'); //pantalla del carrito de compras
let IVA = 0.18; //pantalla del carrito de compras


function calculoTotal(cantidadP,valorP,valorT,IVA){
    //calculo Subtotal
    subtotal = cantidadP*valorP;
    inputtext.value = subtotal; //campo para validar esta operación

    //calculo Total
    total = eval(totaltext.value);
    totaltext.value = valorT + IVA;
}

const capturarDatos = () =>{ //datos a guardar en el localStorage
    let fechaCompra = new Date();
    document.write('Fecha: '+d.getDate(),'Año: '+d.getFullYear(),'Hora: '+d.getHours(),'Minutos: '+d.getMinutes(),'Segundos: '+d.getSeconds());
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
    listarCarrito.innerHTML = '';
    // let carritoLocalStorage = JSON.parse(localStorage.getItem('producto'));
    //console.log(carritoLocalStorage);
    carritoLocalStorage.map(carrito => {
        const {imagen,nroProductos,valorProducto,compraTotal} = carrito;
        listarCarrito.innerHTML += `
                            <td>${imagen}</td>
                            <td>${nroProductos}</td>
                            <td>${valorProducto}</td>
                            <td>${compraTotal}</td>
        `   
     })
}


document.addEventListener('DOMContentLoaded',getLocalStorage);





function agregarProducto() { //boton en la pantalla de productos
    let agg = document.getElementById('aggCarrito').value; 
    agg.addEventListener('click',() => {
        alert('holaaaa');
    if(!existe(producto.id)){
        productos.push(producto);
        guardarProductos();
    }
})
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