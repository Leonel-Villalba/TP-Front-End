const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.nav-items');


ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
})


const cantidad = document.getElementById('cant').value;
const porcDescuento = document.getElementById("porcDescuento").value;
console.log("porcDesc: " + porcDescuento);

