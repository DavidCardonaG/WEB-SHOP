
const detalles = document.querySelector('.detalle');
const ima_min = document.querySelector('.img_miniatura');

fetch('http://localhost:4100/ROPA') //No mover esta linea daña data js//
    .then(response => response.json())
    .then(data => {
        console.log(data, "esto es una prueba");
    })
    .catch(error => console.log(error));

    const getData = async ()=>{;
        let muestraArticle = document.querySelector(".card")
        muestraArticle.innerHTML = '';
        const resp = await fetch('http://localhost:4100/ROPA'); //No mover esta linea daña data js//
        const data = await resp.json();
        data.forEach((productos) => {
            const{producto,image,image2,image3,talla,description,precio} = productos;
            muestraArticle.innerHTML += `
            <div class="wrapper">
               <div class="product-descrip">
                  <div class="title-grid"
                    <h3>${producto}</h3>
                    </div>
                  <div class="price">
                    <p>${precio}</p>
                    </div>
                    <div class="size"
                    <p>${talla}</p>
                    </div>
                    <div class="buttons">
                       <button class="black" >ADD TO CART</button>
                       <button class="blue" >BUY IT NOW</button>
                    </div>
                    <div class="descrip">
                   <p>${description}</p>
                   </div>
                </div>
                <div class="img">
                    <img src="${image}">
                </div>
                <div class="imgs">
                     <img src="${image2}">
                     <img src="${image3}">
                </div>
            </div>
            `
        })
        console.log(data);
    }
getData()

const getImgMini = async() => {
    let imgMiniatura = document.querySelector('.imgMini');
        imgMiniatura.innerHTML = '';
        const resp = await fetch('http://localhost:4100/ROPA'); //No mover esta linea daña data js//
        const data = await resp.json();
        data.forEach((imgMini) => {
            const{image,producto,precio} = imgMini;
            console.log(image,producto,precio);
            imgMiniatura.innerHTML += `
            <div class="item">

                 <div class="card-img">
                     <img src="${image}">
                       <div class="letter"
                          <p>${producto}</p>
                          <p>${precio}</p>
                     </div>
                 </div>
            </div>
            `

})
}
getImgMini();
console.log(imgMiniatura)