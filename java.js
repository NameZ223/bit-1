// 1. **Modo Oscuro**: Activar y desactivar el modo oscuro
const darkModeButton = document.getElementById("modoBtn");
const body = document.body;

darkModeButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  // Guardar preferencia en localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
});

// Al cargar la página, recuperar el modo desde localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
}

// 2. **Botón Scroll al Inicio (↑)**: Mostrar el botón cuando el usuario hace scroll
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 3. **Menú Hamburguesa**: Toggle para el menú en dispositivos pequeños
const menuToggle = document.getElementById("menuToggle");
const enlaces = document.getElementById("enlaces");

menuToggle.addEventListener("click", () => {
  enlaces.classList.toggle("activo");
});

// 4. **Animación de proyectos**: Activar animación cuando se vea en pantalla
const proyectos = document.querySelectorAll(".proyecto-card");

const activarAnimacion = () => {
  proyectos.forEach(proyecto => {
    const rect = proyecto.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      proyecto.classList.add("animar");
    } else {
      proyecto.classList.remove("animar");
    }
  });
};

window.addEventListener("scroll", activarAnimacion);
activarAnimacion(); // Llamar al cargar la página

// 5. **Efecto Parallax**: Efecto en la imagen del héroe (se mueve más lentamente que el contenido)
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  hero.style.backgroundPositionY = offset * 0.7 + "px";
});
