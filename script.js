let arrayProductos = [
    {
        id:1,
        titulo:"Remera Sublimada",
        imagen:"./images/remera-1.jpg",
        descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, voluptatem.",
        categoria: {
            id:"remeras", //Esto es para poder filtrar por categoria , con .categoria.id
        }
        
    },
    {
        id:2,
        titulo:"Remera Sublimada",
        imagen:"./images/remera-2.jpg",
        descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, voluptatem.",
        categoria: {
            id:"remeras", //Esto es para poder filtrar por categoria , con .categoria.id
        }
    },
    {
        id:3,
        titulo:"Chomba Pique personalizada",
        imagen:"./images/chomba-1.jpg",
        descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, voluptatem.",
        categoria: {
            id:"chombas", //Esto es para poder filtrar por categoria , con .categoria.id
        }
    },
    {
        id:4,
        titulo:"Chomba Pique personalizada",
        imagen:"./images/chomba-2.jpg",
        descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, voluptatem.",
        categoria: {
            id:"chombas", //Esto es para poder filtrar por categoria , con .categoria.id
        }
    },
    {
        id:5,
        titulo:"Chombas Pique personalizadas",
        imagen:"./images/chomba-3.jpg",
        descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, voluptatem.",
        categoria: {
            id:"chombas", //Esto es para poder filtrar por categoria , con .categoria.id
        }
    },
    {
        id:6,
        titulo:"Remera Sublimada",
        imagen:"./images/remera-1.jpg",
        descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, voluptatem.",
        categoria: {
            id:"remeras", //Esto es para poder filtrar por categoria , con .categoria.id
        }
    },
    {
        id:7,
        titulo:"Remera Sublimada",
        imagen:"./images/remera-1.jpg",
        descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, voluptatem.",
        categoria: {
            id:"remeras", //Esto es para poder filtrar por categoria , con .categoria.id
        }
    },

]

const productosContainer = document.getElementById("todosLosProductosContainer");
const botonesCategoria = document.querySelectorAll(".nav-link");
const navLinkProductos = document.querySelector(".nav-link-productos");



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
    
        <p class="description">${producto.descripcion}<button class="verMas" id="btn-verMas">...Ver Más</button></p>
        <span class="hide" id="hideText">
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
})



document.addEventListener("DOMContentLoaded",()=>{

    cargarProductos(arrayProductos)
  })
  



