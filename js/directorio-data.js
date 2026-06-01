// ============================================
// DIRECTORIO-DATA.JS - Base de datos del directorio
// ============================================
// 
// 📌 ESTÁNDARES DEL DIRECTORIO:
// ============================================
// 
// TIPOS DE WEB: landing-page, corporativa, catalogo, ecommerce, blog
// RUBROS: alimentos, productos, servicios, inmobiliaria
// COBERTURAS: local, regional, nacional, internacional
// ============================================

const negociosData = [

  // ==========================================
  // 🏆 PROYECTOS DESTACADOS
  // ==========================================

  // 🌎 MÉXICO - Yucatán - Mérida
  {
    id: 1,
    nombre: "TurboFix Center",
    tipoWeb: "landing-page",
    rubro: "servicios",
    descripcion: "Centro especializado en reparación de computadoras y laptops. Landing page completa con servicios, testimonios, ubicación y botones de acción.",
    url: "https://turbofixcenter.com",
    logoInicial: "T",
    destacado: true,
    ubicacion: {
      pais: "México",
      estado: "Yucatán",
      ciudad: "Mérida"
    }
  },

  // ==========================================
  // 📋 PROYECTOS ESTÁNDAR
  // ==========================================

  // 🌎 MÉXICO - Yucatán - Kanasín
  {
    id: 2,
    nombre: "Reina Aceros y Suministros del Sur",
    tipoWeb: "catalogo",
    rubro: "productos",
    descripcion: "Catálogo en línea de acero estructural. Sistema de cotización integrado y envíos a todo México.",
    url: "https://reinaaceros.com",
    logoInicial: "R",
    destacado: false,
    cobertura: "nacional",
    ubicacion: {
      pais: "México",
      estado: "Yucatán",
      ciudad: "Kanasín"
    }
  }

  // ==========================================
  // 📌 AGREGAR NUEVOS PROYECTOS A PARTIR DE AQUÍ
  // ==========================================
  // 
  // EJEMPLO:
  // {
  //   id: 3,
  //   nombre: "Nombre del Negocio",
  //   tipoWeb: "landing-page",
  //   rubro: "alimentos",
  //   descripcion: "Descripción breve del proyecto",
  //   url: "https://www.web.com",
  //   logoInicial: "N",
  //   destacado: false,
  //   cobertura: "local",
  //   ubicacion: {
  //     pais: "México",
  //     estado: "Yucatán",
  //     ciudad: "Mérida"
  //   }
  // },
  //
  // ==========================================

];

// ============================================
// VARIABLES DE FILTROS
// ============================================

let filtroTipo = "todos";
let filtroRubro = "todos";
let filtroPais = "todos";
let filtroEstado = "todos";
let filtroCiudad = "todos";

// ============================================
// FUNCIONES DE DATOS (FILTROS DEPENDIENTES)
// ============================================

function obtenerPaises() {
  const paises = [...new Set(negociosData.map(n => n.ubicacion?.pais).filter(p => p))];
  return paises.sort();
}

function obtenerEstadosPorPais(pais) {
  if (pais === "todos") {
    const estados = [...new Set(negociosData.map(n => n.ubicacion?.estado).filter(e => e))];
    return estados.sort();
  }
  const estados = [...new Set(
    negociosData
      .filter(n => n.ubicacion?.pais === pais)
      .map(n => n.ubicacion?.estado)
      .filter(e => e)
  )];
  return estados.sort();
}

function obtenerCiudadesPorPaisYEstado(pais, estado) {
  let filtrados = negociosData;
  if (pais !== "todos") filtrados = filtrados.filter(n => n.ubicacion?.pais === pais);
  if (estado !== "todos") filtrados = filtrados.filter(n => n.ubicacion?.estado === estado);
  const ciudades = [...new Set(filtrados.map(n => n.ubicacion?.ciudad).filter(c => c))];
  return ciudades.sort();
}

// ============================================
// FUNCIONES DE FORMATEO
// ============================================

function formatearTipoWeb(tipo) {
  const tipos = {
    'landing-page': '🚀 Landing Page',
    'corporativa': '🏢 Página Corporativa',
    'catalogo': '📦 Catálogo de Productos',
    'ecommerce': '🛒 E-commerce',
    'blog': '📝 Blog / Noticias'
  };
  return tipos[tipo] || tipo;
}

function formatearRubro(rubro) {
  const rubros = {
    'alimentos': '🍔 Alimentos y Bebidas',
    'productos': '📦 Productos',
    'servicios': '🔧 Servicios',
    'inmobiliaria': '🏠 Inmobiliaria'
  };
  return rubros[rubro] || rubro;
}

function formatearCobertura(cobertura) {
  const coberturas = {
    'local': '📍 Atención local',
    'regional': '🗺️ Atiende en la región',
    'nacional': '🇲🇽 Envíos a todo México',
    'internacional': '🌎 Envíos internacionales'
  };
  return coberturas[cobertura] || cobertura;
}

// ============================================
// ACTUALIZACIÓN DE SELECTS DINÁMICOS
// ============================================

function actualizarSelectPais() {
  const select = document.getElementById('select-pais');
  if (!select) return;
  const paises = obtenerPaises();
  select.innerHTML = '<option value="todos">Todos los países</option>' + 
    paises.map(p => `<option value="${p}">${p}</option>`).join('');
}

function actualizarSelectEstado() {
  const select = document.getElementById('select-estado');
  const grupo = document.getElementById('grupo-estado');
  if (!select || !grupo) return;
  const estados = obtenerEstadosPorPais(filtroPais);
  if (estados.length >= 1) {
    grupo.style.display = 'block';
    select.innerHTML = '<option value="todos">Todos los estados</option>' + 
      estados.map(e => `<option value="${e}">${e}</option>`).join('');
  } else {
    grupo.style.display = 'none';
    filtroEstado = "todos";
    if (document.getElementById('select-estado')) {
      document.getElementById('select-estado').value = "todos";
    }
  }
  actualizarSelectCiudad();
}

function actualizarSelectCiudad() {
  const select = document.getElementById('select-ciudad');
  const grupo = document.getElementById('grupo-ciudad');
  if (!select || !grupo) return;
  const ciudades = obtenerCiudadesPorPaisYEstado(filtroPais, filtroEstado);
  if (ciudades.length >= 1) {
    grupo.style.display = 'block';
    select.innerHTML = '<option value="todos">Todas las ciudades</option>' + 
      ciudades.map(c => `<option value="${c}">${c}</option>`).join('');
  } else {
    grupo.style.display = 'none';
    filtroCiudad = "todos";
    if (document.getElementById('select-ciudad')) {
      document.getElementById('select-ciudad').value = "todos";
    }
  }
}

// ============================================
// RENDERIZADO DEL DIRECTORIO
// ============================================

function actualizarContador(cantidad) {
  const totalElement = document.getElementById('total-negocios');
  const proyectosActuales = document.getElementById('proyectos-actuales');
  if (totalElement) totalElement.textContent = cantidad;
  if (proyectosActuales) proyectosActuales.textContent = cantidad;
}

function renderizarDirectorio() {
  const destacadosGrid = document.getElementById("destacados-grid");
  const directorioGrid = document.getElementById("directorio-grid");
  if (!destacadosGrid || !directorioGrid) return;
  
  let filtrados = negociosData;
  if (filtroTipo !== "todos") filtrados = filtrados.filter(n => n.tipoWeb === filtroTipo);
  if (filtroRubro !== "todos") filtrados = filtrados.filter(n => n.rubro === filtroRubro);
  if (filtroPais !== "todos") filtrados = filtrados.filter(n => n.ubicacion?.pais === filtroPais);
  if (filtroEstado !== "todos") filtrados = filtrados.filter(n => n.ubicacion?.estado === filtroEstado);
  if (filtroCiudad !== "todos") filtrados = filtrados.filter(n => n.ubicacion?.ciudad === filtroCiudad);
  
  actualizarContador(filtrados.length);
  
  const destacados = filtrados.filter(n => n.destacado === true);
  const estandar = filtrados.filter(n => n.destacado === false);
  
  const destacadosSection = document.getElementById("destacados-section");
  if (destacadosSection) {
    if (destacados.length > 0) {
      destacadosSection.style.display = 'block';
      destacadosGrid.innerHTML = destacados.map(negocio => `
        <div class="negocio-card destacado">
          <div class="negocio-badge"><i class="fas fa-crown"></i> Destacado</div>
          <div class="negocio-logo">${negocio.logoInicial}</div>
          <h3 class="negocio-nombre">${negocio.nombre}</h3>
          <div class="negocio-tipo">${formatearTipoWeb(negocio.tipoWeb)}</div>
          <div class="negocio-rubro">${formatearRubro(negocio.rubro)}</div>
          ${negocio.cobertura ? `<div class="negocio-cobertura">${formatearCobertura(negocio.cobertura)}</div>` : ''}
          <div class="negocio-ubicacion"><i class="fas fa-map-marker-alt"></i> ${negocio.ubicacion?.ciudad}, ${negocio.ubicacion?.estado}</div>
          <p class="negocio-desc">${negocio.descripcion}</p>
          <a href="${negocio.url}" target="_blank" rel="noopener noreferrer" class="negocio-link">Ver sitio <i class="fas fa-external-link-alt"></i></a>
        </div>
      `).join('');
    } else {
      destacadosSection.style.display = 'none';
    }
  }
  
  if (estandar.length > 0) {
    directorioGrid.innerHTML = estandar.map(negocio => `
      <div class="negocio-card">
        <div class="negocio-logo">${negocio.logoInicial}</div>
        <h3 class="negocio-nombre">${negocio.nombre}</h3>
        <div class="negocio-tipo">${formatearTipoWeb(negocio.tipoWeb)}</div>
        <div class="negocio-rubro">${formatearRubro(negocio.rubro)}</div>
        ${negocio.cobertura ? `<div class="negocio-cobertura">${formatearCobertura(negocio.cobertura)}</div>` : ''}
        <div class="negocio-ubicacion"><i class="fas fa-map-marker-alt"></i> ${negocio.ubicacion?.ciudad}, ${negocio.ubicacion?.estado}</div>
        <p class="negocio-desc">${negocio.descripcion}</p>
        <a href="${negocio.url}" target="_blank" rel="noopener noreferrer" class="negocio-link">Ver sitio <i class="fas fa-external-link-alt"></i></a>
      </div>
    `).join('');
  } else if (destacados.length === 0) {
    directorioGrid.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-folder-open"></i>
        <p>No hay proyectos en esta categoría todavía.</p>
        <p style="font-size:0.8rem; margin-top:0.5rem;">
          ¿Quieres ser el primero? 
          <a href="https://wa.me/529992223432">Contáctanos</a>
        </p>
      </div>
    `;
  }
}

// ============================================
// CONFIGURACIÓN DE EVENTOS
// ============================================

function configurarEventos() {
  const selectTipo = document.getElementById('select-tipo');
  const selectRubro = document.getElementById('select-rubro');
  const selectPais = document.getElementById('select-pais');
  const selectEstado = document.getElementById('select-estado');
  const selectCiudad = document.getElementById('select-ciudad');
  
  if (selectTipo) {
    selectTipo.addEventListener('change', (e) => {
      filtroTipo = e.target.value;
      renderizarDirectorio();
    });
  }
  
  if (selectRubro) {
    selectRubro.addEventListener('change', (e) => {
      filtroRubro = e.target.value;
      renderizarDirectorio();
    });
  }
  
  if (selectPais) {
    selectPais.addEventListener('change', (e) => {
      filtroPais = e.target.value;
      filtroEstado = "todos";
      filtroCiudad = "todos";
      actualizarSelectEstado();
      renderizarDirectorio();
    });
  }
  
  if (selectEstado) {
    selectEstado.addEventListener('change', (e) => {
      filtroEstado = e.target.value;
      filtroCiudad = "todos";
      actualizarSelectCiudad();
      renderizarDirectorio();
    });
  }
  
  if (selectCiudad) {
    selectCiudad.addEventListener('change', (e) => {
      filtroCiudad = e.target.value;
      renderizarDirectorio();
    });
  }
}

// ============================================
// INICIALIZACIÓN
// ============================================

function inicializarDirectorio() {
  actualizarSelectPais();
  actualizarSelectEstado();
  configurarEventos();
  renderizarDirectorio();
}

document.addEventListener('DOMContentLoaded', inicializarDirectorio);