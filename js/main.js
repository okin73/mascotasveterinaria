
function activarImgA(){
    let imgA = document.getElementById("img-1");
    let imgB = document.getElementById("img-2");
    let btnA = document.getElementById("btn-1");
    let btnB = document.getElementById("btn-2");

    imgB.classList.remove("active");
    imgA.classList.add("active");

    btnB.classList.remove("active");
    btnA.classList.add("active");

}

function activarImgB(){
    let imgA = document.getElementById("img-1");
    let imgB= document.getElementById("img-2");
    let btnA= document.getElementById("btn-1");
    let btnB= document.getElementById("btn-2");

    imgB.classList.add("active");
    imgA.classList.remove("active");

    btnB.classList.add("active");
    btnA.classList.remove("active");

}

function activarPerros(){

    const gatos = document.querySelectorAll(".gatos");
    const perros = document.querySelectorAll(".perros1");
    
    let botonA = document.getElementById("boton1");
    let botonB= document.getElementById("boton2");
    
gatos.forEach(gato =>gato.classList.remove("active")); 
perros.forEach(perro =>perro.classList.add("active")); 

    botonA.classList.add("active");
    botonB.classList.remove("active");

}

function activarGatos(){

    const gatos = document.querySelectorAll(".gatos");
    const perros = document.querySelectorAll(".perros1");
    
    let botonA = document.getElementById("boton1");
    let botonB= document.getElementById("boton2");
    
gatos.forEach(gato =>gato.classList.add("active")); 
perros.forEach(perro =>perro.classList.remove("active")); 

    botonA.classList.remove("active");
    botonB.classList.add("active");
    
    }