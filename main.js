document.addEventListener('DOMContentLoaded', () => {
  const btnSaludo = document.getElementById('btnSaludo');

  if (btnSaludo) {
    btnSaludo.addEventListener('click', () => {
      alert('¡Hola! Proyecto de Git de ASIX cargado e interactivo.');
    });
  }
});