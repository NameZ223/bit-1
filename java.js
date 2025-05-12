// Menú hamburguesa
const menuToggle = document.getElementById('menuToggle');
const enlaces = document.getElementById('enlaces');

menuToggle.addEventListener('click', () => {
  enlaces.classList.toggle('activo');
});

// Botón modo oscuro
const modoBtn = document.createElement('button');
modoBtn.innerHTML = '🌙';
modoBtn.classList.add('modo-btn');
document.querySelector('.header .contenedor-header').appendChild(modoBtn);

modoBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Animación al hacer scroll
const animarElementos = document.querySelectorAll('.animar');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // opcional: dejar de observar una vez visible
    }
  });
}, {
  threshold: 0.3
});

animarElementos.forEach(el => {
  observer.observe(el);
});
