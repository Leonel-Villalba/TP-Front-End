const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.nav-items');


ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
})