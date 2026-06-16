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
//
// 📌 LOGOS:
// ============================================
// - Si el negocio tiene imagen, usa: logoImg: "img/directorio/mi-logo.png"
// - Si no tiene imagen, solo usa logoInicial: "T"
// - Las imágenes deben estar en la carpeta /img/directorio/
// ============================================

export const negociosData = [

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
    logoImg: "img/directorio/turbofix-logo.webp",  // ← imagen opcional
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
    logoImg: "img/directorio/reinaaceros-logo.webp",  // ← descomentar cuando tenga imagen
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
  // EJEMPLO CON IMAGEN:
  // {
  //   id: 3,
  //   nombre: "Nombre del Negocio",
  //   tipoWeb: "landing-page",
  //   rubro: "alimentos",
  //   descripcion: "Descripción breve del proyecto",
  //   url: "https://www.web.com",
  //   logoInicial: "N",
  //   logoImg: "img/directorio/negocio-logo.png",  // ← opcional
  //   destacado: false,
  //   cobertura: "local",
  //   ubicacion: {
  //     pais: "México",
  //     estado: "Yucatán",
  //     ciudad: "Mérida"
  //   }
  // },
  //
  // EJEMPLO SIN IMAGEN (solo letra):
  // {
  //   id: 4,
  //   nombre: "Otro Negocio",
  //   tipoWeb: "catalogo",
  //   rubro: "productos",
  //   descripcion: "Descripción breve",
  //   url: "https://www.web.com",
  //   logoInicial: "O",
  //   // sin logoImg
  //   destacado: false,
  //   ubicacion: { ... }
  // },
  //
  // ==========================================

];
