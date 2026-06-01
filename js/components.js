// Cargar navbar y footer en todas las páginas
document.addEventListener('DOMContentLoaded', function() {
  
  // Cargar navbar
  fetch('/components/navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar-placeholder').innerHTML = data;
      
      // Marcar el enlace activo según la página actual
      const currentPage = window.location.pathname;
      
      // Directorio
      const directorioLink = document.getElementById('nav-directorio');
      if (directorioLink) {
        if (currentPage.includes('/directorio')) {
          directorioLink.classList.add('active');
        }
      }
      
      // Nosotros
      const nosotrosLink = document.getElementById('nav-nosotros');
      if (nosotrosLink) {
        if (currentPage.includes('/nosotros')) {
          nosotrosLink.classList.add('active');
        }
      }
    })
    .catch(error => console.error('Error cargando navbar:', error));
  
  // Cargar footer
  fetch('/components/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error cargando footer:', error));
  
});