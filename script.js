let arrayProductos = [];



fetch("./productos.json")
.then((res)=>res.json())
.then((data)=>{
    // console.log(data); Data trae el array de productos, los asigno a mi array vacio
    arrayProductos = data;
    cargarProductos(data);
})





const productosContainer = document.getElementById("todosLosProductosContainer");
const botonesCategoria = document.querySelectorAll(".nav-link");
const navLinkProductos = document.querySelector(".nav-link-productos");
const todosLosProductos = document.getElementById("todos");


function cargarProductos (productosElegidos) {

    productosContainer.innerHTML = "";
    productosElegidos.forEach((producto)=> {
        const div = document.createElement("div");
        div.classList.add("product-card"); 
        div.innerHTML = `
        <figure class="img-product">
        <img src="${producto.imagen}" alt="${producto.titulo}">
        </figure>
        <div class="info-product">
        <h3 class="title-product">${producto.titulo}</h3>
    
        <p class="description">${producto.descripcion}<button class="verMas">...Ver Más</button></p>
        <span class="hide">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, voluptatem.
        </span>
        </div>
    
        <a href="#" class="btn-cart">Consultar precio<i class="bi bi-whatsapp"></i></a>
        `
    
        productosContainer.append(div);

    })
    const btnVerMas = document.querySelectorAll(".verMas");
    const textVerMas = document.querySelectorAll(".hide");



   

}
botonesCategoria.forEach((boton)=>{
    boton.addEventListener("click",(e)=>{
        let botonId = e.target.id;
        botonesCategoria.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        if(botonId != "todos") {
            const productosCategoria = arrayProductos.filter((producto) => producto.categoria.id === botonId);
            
            cargarProductos(productosCategoria);
        //    console.log(productosCategoria);
        }
        else{
            // console.log(arrayProductos);
            cargarProductos(arrayProductos);
        }
    })
})

navLinkProductos.addEventListener("click",()=>{
    cargarProductos(arrayProductos);
    todosLosProductos.classList.add("active");

})



document.addEventListener("DOMContentLoaded",()=>{

    cargarProductos(arrayProductos)
  })
  



