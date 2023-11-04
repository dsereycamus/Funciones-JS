let divAzul = document.getElementById('azul');
let divRojo = document.getElementById('rojo');
let divVerde = document.getElementById('verde');
let divAmarillo = document.getElementById('amarillo');

const cambiarColor = (div) => {
    div.style.backgroundColor = 'black';
};

divAzul.addEventListener('click', () => cambiarColor(divAzul));
divRojo.addEventListener('click', () => cambiarColor(divRojo));
divVerde.addEventListener('click', () => cambiarColor(divVerde));
divAmarillo.addEventListener('click', () => cambiarColor(divAmarillo));