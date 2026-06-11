// Cargar componentes globales en orden: banner → navbar → footer
document.addEventListener('DOMContentLoaded', function() {

  // Cargar banner
  fetch('/components/banner.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('banner-placeholder').innerHTML = data;

      // Cargar navbar después del banner
      return fetch('/components/navbar.html');
    })
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar-placeholder').innerHTML = data;

      // Marcar el enlace activo según la página actual
      const currentPage = window.location.pathname;

      // Directorio
      const directorioLink = document.getElementById('nav-directorio');
      if (directorioLink && currentPage.includes('/directorio')) {
        directorioLink.classList.add('active');
      }

      // Nosotros
      const nosotrosLink = document.getElementById('nav-nosotros');
      if (nosotrosLink && currentPage.includes('/nosotros')) {
        nosotrosLink.classList.add('active');
      }

      // Cargar footer después de navbar
      return fetch('/components/footer.html');
    })
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error cargando componentes:', error));

});