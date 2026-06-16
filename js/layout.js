// Cargar componentes globales en orden: banner → navbar → footer
document.addEventListener('DOMContentLoaded', function () {

  // ============================================
  // MENÚ MÓVIL
  // ============================================

  function initMobileMenu() {
    const openBtn    = document.getElementById('menu-open-btn');
    const closeBtn   = document.getElementById('nav-close-btn');
    const navLinks   = document.getElementById('nav-links');
    const overlay    = document.getElementById('nav-overlay');
    const body       = document.body;

    if (!openBtn || !navLinks || !overlay) return;

    // Panel secundario de Servicios
    const serviciosToggle = document.getElementById('servicios-toggle');
    const panelServicios  = document.getElementById('nav-panel-servicios');
    const backBtn         = document.getElementById('nav-back-btn');
    const closeBtnPanel   = document.getElementById('nav-close-btn-panel');

    let isClosing = false;

    function preventDefault(e) {
      e.preventDefault();
    }

    function openMenu() {
      if (isClosing) return;
      navLinks.classList.add('active');
      overlay.classList.add('active');
      body.classList.add('menu-open');
      window.addEventListener('wheel', preventDefault, { passive: false });
      window.addEventListener('touchmove', preventDefault, { passive: false });
    }

    function closeMenu() {
      isClosing = true;
      navLinks.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('menu-open');
      // Cerrar panel secundario si estaba abierto
      if (panelServicios && panelServicios.classList.contains('active')) {
        panelServicios.classList.remove('active');
      }
      window.removeEventListener('wheel', preventDefault);
      window.removeEventListener('touchmove', preventDefault);
      setTimeout(() => { isClosing = false; }, 300);
    }

    function openPanelServicios(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (panelServicios) {
        panelServicios.classList.add('active');
      }
    }

    function closePanelServicios(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (panelServicios) {
        panelServicios.classList.remove('active');
      }
    }

    // Eventos principales
    openBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    // Servicios toggle: abre panel secundario (SOLO en móvil)
    if (serviciosToggle) {
      serviciosToggle.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
          openPanelServicios(e);
        }
      });
    }

    // Botón atrás del panel secundario
    if (backBtn) {
      backBtn.addEventListener('click', closePanelServicios);
    }

    // X de cierre del panel secundario
    if (closeBtnPanel) {
      closeBtnPanel.addEventListener('click', closeMenu);
    }

    // Cerrar TODO al hacer clic en enlaces del panel secundario (llevan a otra página)
    if (panelServicios) {
      panelServicios.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
      });
    }

    // IMPORTANTE: SOLO cerrar al hacer clic en enlaces que NO sean el toggle de servicios
    navLinks.querySelectorAll('a').forEach(link => {
      // Excluir: el toggle de servicios (tiene clase dropdown-toggle)
      if (!link.classList.contains('dropdown-toggle')) {
        link.addEventListener('click', closeMenu);
      }
    });

    // El botón WhatsApp dentro del panel NO debe cerrar el menú
    const btnMobile = document.querySelector('.btn-mobile');
    if (btnMobile) {
      btnMobile.addEventListener('click', function(e) {
        e.stopPropagation();
      });
    }

    // Cerrar con ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (panelServicios && panelServicios.classList.contains('active')) {
          closePanelServicios();
        } else if (navLinks.classList.contains('active')) {
          closeMenu();
        }
      }
    });

    // Cerrar al pasar a desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 769 && navLinks.classList.contains('active')) {
        closeMenu();
      }
    });
  }

  // ============================================
  // CARGA DE COMPONENTES
  // ============================================

  fetch('/layout/banner.html')
    .then(r => r.text())
    .then(data => {
      document.getElementById('banner-placeholder').innerHTML = data;
      return fetch('/layout/navbar.html');
    })
    .then(r => r.text())
    .then(data => {
      document.getElementById('navbar-placeholder').innerHTML = data;

      // Marcar enlace activo
      const currentPage = window.location.pathname;

      const directorioLink = document.getElementById('nav-directorio');
      if (directorioLink && currentPage.includes('/directorio')) {
        directorioLink.classList.add('active');
      }

      const nosotrosLink = document.getElementById('nav-nosotros');
      if (nosotrosLink && currentPage.includes('/nosotros')) {
        nosotrosLink.classList.add('active');
      }

      // Inicializar menú después de inyectar el HTML
      initMobileMenu();

      return fetch('/layout/footer.html');
    })
    .then(r => r.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error cargando componentes:', error));

});