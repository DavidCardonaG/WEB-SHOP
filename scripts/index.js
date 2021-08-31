const contenedor_productos= document.querySelector('.contenedor_img');
const detalles = document.querySelector('.detalle')
const ima_min = document.querySelector('.img_miniatura')

fetch('../data/articles.json')
    .then(response => response.json())
    .then(data => {
        dataDb = data.filter((pregunta) => pregunta.categoria ===querySelectorAll('image'));
        console.log(dataDB);
    })
    .catch(error => console.log(error));

