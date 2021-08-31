const contenedor_productos= document.querySelector('.contenedor_img');
const detalles = document.querySelector('.detalle');
const ima_min = document.querySelector('.img_miniatura');

fetch('http://localhost:4100/ROPA')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.log(error));

    const getData = async ()=>{
        let muestraArticle = document.querySelector(".card")
        muestraArticle.innerHTML = '';
        const resp = await fetch('http://localhost:4100/ROPA');
        const data = await resp.json();
        data.forEach(productos => {
            const{producto,image,image2,image3,talla,description,precio} = productos;
            muestraArticle.innerHTML += `
            <div class="wrapper">
            <h3>${producto}</h3>
            <img src="${image}">
            <img src="${image2}">
            <img src="${image3}">
            <p>${talla}</p>
            <p>${description}</p>
            <p>${precio}</p>
            </div>
            `
        })
        console.log(data);
    }
getData()
