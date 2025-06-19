document.getElementById('toggleMenu').addEventListener('click', () => {
  
  const menuLateral = document.getElementById('menuLateral');

  // Quitar el foco antes de ocultar
  if (document.activeElement && document.activeElement !== document.body) {
    document.activeElement.blur();
  }

  // Alternar visibilidad
  
  if (menuLateral) menuLateral.classList.toggle('show');
});

// Año automático
const año = document.getElementById('añoActual');
if (año) año.textContent = new Date().getFullYear();


