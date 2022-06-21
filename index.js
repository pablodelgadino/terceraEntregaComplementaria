const pdulce = [{
        nombre: "Tortas",
        precio: '$1500',
        imagen: "images/torta.jpg"
    },
        {
            nombre: "Shots",
            precio: '$400',
            imagen: "images/shots.jpg"
        },
            {
                nombre: "Tartitas",
                precio: '$600',
                imagen: "images/tartitas.jpg"
            },
                {
                    nombre: "Alfajores",
                    precio: '$500',
                    imagen: "images/alfajores.jpg"
                },
]

const mainCont = document.querySelector(".contenedor");
for(let i of pdulce){
    mainCont.innerHTML += `
        <div class="txt_center">
            <h2 class="txt_center">${i.nombre}</h2>
            <h2 class="txt_center">${i.precio}</h2>
            <img class="img__size txt_center " src="${i.imagen}" alt="">
            <hr>
            <hr>
        </div>
    `
}




