let formulario = document.getElementById('formulario');
let buscarP = document.getElementById('btnBuscar');
let editarP = document.getElementById('btnEditar');
let eliminarP = document.getElementById('btnEliminar');

const url = 'http://localhost:4000/USER';

window.addEventListener('DOMContentLoaded', async () => {

    document.getElementById('id').style.display = 'none';
    document.getElementById('label-edit').style.display = 'none';
})

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();

let name = document.getElementById('name').value;
let email = document.getElementById('email').value;
let telefono = document.getElementById('telefono').value;
let producto = document.getElementById('producto').value;
let description = document.getElementById('description').value;
let image = document.getElementById('image').value;
let image2 = document.getElementById('image').value;
let image3 = document.getElementById('image3').value;
let precio = document.getElementById('precio').value;
    let resp = await fetch(url,{
        method: 'POST',
        body: JSON.stringify({
            nombre: name,
            correo: email,
            celular: telefono,
            product: producto,
            description:description,
            image: image,
            image2: image2,
            image3: image3,
            precio: precio
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    }) 
    alert('USUARIO REGISTRADO CORRECTAMENTE');
    let data = resp.json();
    console.log(data) 
    
})

buscarP.addEventListener('click', async () => {
    document.getElementById('id').style.display = 'block';
    document.getElementById('label-edit').style.display = 'block';
    let producto = document.getElementById('producto').value;
    document.getElementById('producto').readOnly = true;

    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data);
    let modificar = data.find(user => user.product=== producto)
    const {nombre,correo,celular,product,description,image,image2,image3,precio, id} = modificar;
    console.log(nombre,correo,celular,product,description,image,image2,image3,precio, id);
    document.getElementById('name').value = nombre;
    document.getElementById('email').value = correo;
    document.getElementById('telefono').value = celular;
    document.getElementById('producto').value = product;
    document.getElementById('description').value = description;
    document.getElementById('image').value = image;
    document.getElementById('image2').value = image2;
    document.getElementById('image3').value = image3;
    document.getElementById('precio').value = precio;
    document.getElementById('id').value = id;
})

editarP.addEventListener('click', async() => {
    let idModificar = document.getElementById('id').value;
    let nameMod = document.getElementById('name').value;
    let emailMod = document.getElementById('email').value;
    let telefonoMod = document.getElementById('telefono').value;
    let productMod = document.getElementById('producto').value;
    let descriptionMod = document.getElementById('description').value;
    let imageMod = document.getElementById('image').value;
    let image2Mod = document.getElementById('image2').value;
    let image3Mod = document.getElementById('image3').value;
    let precioMod = document.getElementById('precio').value;
   
  
    let resp = await fetch(`http://localhost:4000/USER/${idModificar}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: idModificar,
            nombre: nameMod,
             correo: emailMod,
             celular: telefonoMod,
             product: productMod,
             description: descriptionMod,
             image: imageMod,
             image2: image2Mod,
             image3: image3Mod,
             precio: precioMod
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    }) 
    let data = resp.json();
    console.log(data); 
})

eliminarP.addEventListener('click', async() => {
    alert('Seguro que quiere borrar los datos');

    let idModificar = document.getElementById('id').value;
    let resp = await fetch(`http://localhost:4000/USER/${idModificar}`,{
        method: 'DELETE',
    })
   let data = resp.json();
    console.log(data); 
})