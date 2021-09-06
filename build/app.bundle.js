/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/***/ (() => {

eval("\r\nconst detalles = document.querySelector('.detalle');\r\nconst ima_min = document.querySelector('.img_miniatura');\r\nconst url = 'http://localhost:4100/ROPA';\r\nconst galeria = document.querySelector('#galeria');\r\n\r\n// galeria.addEventListener('click', () => {\r\n//     console.log(\"prueba de galeria\")\r\n// })\r\n\r\nfetch('http://localhost:4100/ROPA') //No mover esta linea daña data js//\r\n    .then(response => response.json())\r\n    .then(data => {\r\n        console.log(data, \"esto es una prueba\");\r\n    })\r\n    .catch(error => console.log(error));\r\n\r\n    const getData = async ()=>{\r\n\r\n        let muestraArticle = document.querySelector(\".card\")\r\n        muestraArticle.innerHTML = '';\r\n        const resp = await fetch(url); //No mover esta linea daña data js//\r\n        const data = await resp.json();\r\n        data.forEach((productos) => {\r\n            const{producto,image,image2,image3,talla,description,precio} = productos;\r\n            localStorage.setItem(\"producto\",JSON.stringify(data));\r\n            muestraArticle.innerHTML += `\r\n            <div class=\"wrapper\">\r\n               <div class=\"product-descrip\">\r\n                  <div class=\"title-grid\"\r\n                    <h3>${producto}</h3>\r\n                    </div>\r\n                  <div class=\"price\">\r\n                    <p>${precio}</p>\r\n                    </div>\r\n                    <div class=\"size\"\r\n                    <p>${talla}</p>\r\n                    </div>\r\n                    <div class=\"buttons\">\r\n                <button id=\"aggCarrito\" onclick=Negro() class=\"black\" >ADD TO CART</button>\r\n                <button id=\"comprar\" class=\"blue\" >BUY IT NOW</button>\r\n             </div>\r\n                    <div class=\"descrip\">\r\n                   <p>${description}</p>\r\n                   </div>\r\n                </div>\r\n                <div class=\"img\">\r\n                    <img src=\"${image}\">\r\n                </div>\r\n                <div class=\"imgs\">\r\n                     <img src=\"${image2}\">\r\n                     <img src=\"${image3}\">\r\n                </div>\r\n            </div>\r\n            `\r\n            function Negro() {\r\n                alert('Holaaa');\r\n                        }\r\n        })\r\n        console.log(data);\r\n    }\r\ngetData();\r\nconst getHome = async ()=>{\r\n    let muestraHome = document.querySelector(\".detalle\")\r\n    muestraHome.innerHTML = '';\r\n    const resp = await fetch('http://localhost:4200/HOME'); //No mover esta linea daña data js//\r\n    const data = await resp.json();\r\n    data.forEach((productos) => {\r\n        const{producto,image,image2,image3,talla,description,precio} = productos;\r\n        muestraHome.innerHTML += `\r\n        <div class=\"wrapper\">\r\n           <div class=\"product-descrip\">\r\n              <div class=\"title-grid\"\r\n                <h3>${producto}</h3>\r\n                </div>\r\n              <div class=\"price\">\r\n                <p>${precio}</p>\r\n                </div>\r\n                <div class=\"size\"\r\n                <p>${talla}</p>\r\n                </div>\r\n                <div class=\"buttons\">\r\n                <button id=\"aggCarrito\" class=\"black\" >ADD TO CART</button>\r\n                <button id=\"comprar\" class=\"blue\" >BUY IT NOW</button>\r\n             </div>\r\n                <div class=\"descrip\">\r\n               <p>${description}</p>\r\n               </div>\r\n            </div>\r\n            <div class=\"img\">\r\n                <img src=\"${image}\">\r\n            </div>\r\n            <div class=\"imgs\">\r\n                 <img src=\"${image2}\">\r\n                 <img src=\"${image3}\">\r\n            </div>\r\n        </div>\r\n        `\r\n    })\r\n    console.log(data);\r\n}\r\ngetHome()\r\n\r\nconst getImgMini = async() => {\r\n    let imgMiniatura = document.querySelector('.imgMini');\r\n        imgMiniatura.innerHTML = '';\r\n        const resp = await fetch(url); //No mover esta linea daña data js//\r\n        const data = await resp.json();\r\n        data.forEach((imgMini) => {\r\n            const{image,producto,precio} = imgMini;\r\n            console.log(image,producto,precio);\r\n            imgMiniatura.innerHTML += `\r\n            <div class=\"item\">\r\n\r\n                 <div class=\"card-img\">\r\n                     <img src=\"${image}\">\r\n                       <div class=\"letter\"\r\n                          <p>${producto}</p>\r\n                          <p>${precio}</p>\r\n                     </div>\r\n                 </div>\r\n            </div>\r\n            `\r\n        })\r\n    \r\nimgMiniatura.addEventListener('click', () => {\r\n    window.location =\"index2.html\";\r\n})\r\n}\r\n\r\ngetImgMini();\r\n\n\n//# sourceURL=webpack://web-shop/./src/app/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app/index.js"]();
/******/ 	
/******/ })()
;