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
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

animarElementos.forEach(el => observer.observe(el));

// Efecto sonido en botones gamer
const botonesGamer = document.querySelectorAll('.boton-proyecto');
botonesGamer.forEach(boton => {
  boton.addEventListener('mouseenter', () => {
    const beep = new Audio('https://freesound.org/data/previews/341/341695_6261675-lq.mp3');
    beep.volume = 0.1;
    beep.play();
  });
});

// Botón scroll arriba
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Parallax en Hero
const hero = document.querySelector('.hero');
hero.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
});
