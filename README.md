# Arranca Laboral

Sitio web institucional hospedado en GitHub Pages.

🌐 **[arrancalaboral.github.io](https://arrancalaboral.github.io)**

---

## Estructura del proyecto

```
arrancalaboral.github.io/
│
├── index.html              # Página principal - todos los servicios
├── directorio.html         # Directorio de sitios web entregados
├── nosotros.html           # Equipo, dirección y valores
├── terminos.html           # Términos y condiciones
├── 404.html                # Página de error personalizada
│
├── css/
│   ├── core/
│   │   ├── variables.css   # Tokens de diseño: colores, tipografía, espaciado
│   │   ├── layout.css      # Estructura global: navbar, footer, menú móvil + media queries
│   │   └── ui.css          # Estilos visuales reutilizables: cards, botones, badges + media queries
│   └── pages/
│       ├── index.css       # Estilos exclusivos de index.html + media queries
│       ├── directorio.css  # Estilos exclusivos de directorio.html + media queries
│       ├── nosotros.css    # Estilos exclusivos de nosotros.html + media queries
│       └── terminos.css    # Estilos exclusivos de terminos.html + media queries
│
├── layout/
│   ├── banner.html         # Banner de lanzamiento global
│   ├── navbar.html         # Navbar global (incluye menú móvil)
│   └── footer.html         # Footer global
│
├── js/
│   ├── layout.js           # Carga de banner, navbar, footer + lógica del menú móvil
│   ├── directorio.js       # Lógica del directorio (ES6 module)
│   └── directorio-data.js  # Datos de proyectos del directorio (array de objetos)
│
├── img/
│   ├── directorio/         # Logos de negocios listados en el directorio
│   ├── logo-arranca.png    # Logo principal
│   └── favicon-64x64.png   # Favicon
│
├── CNAME                   # Dominio personalizado para GitHub Pages
├── robots.txt              # Configuración para motores de búsqueda
├── sitemap.xml             # Mapa del sitio para SEO
└── .nojekyll               # Desactiva procesamiento Jekyll en GitHub Pages
```

---

## Páginas

### `index.html` - Página principal
Página de inicio con todas las líneas de servicio.

| Sección | ID | Descripción |
|---|---|---|
| Hero | `.hero` | Titular principal y acceso directo a servicios |
| Cómo funciona | `.como-funciona` | Proceso en 4 pasos |
| Empleo | `#b2c` | CVs, cartas y paquetes laborales |
| Negocios | `#b2b` | Logos, animaciones, videos e imágenes |
| Web | `#web` | Landing pages y desarrollo a la medida |
| Testimonios | `#testimonios` | Reseña de cliente + formulario de experiencia |
| Contacto | `#contacto` | CTA final con botón de WhatsApp |

### `directorio.html` - Directorio de proyectos
Portafolio de sitios web entregados. Los datos se cargan dinámicamente desde `js/directorio.js` (ES6 module) y `js/directorio-data.js`.

| ID | Descripción |
|---|---|
| `select-tipo` | Filtro por tipo de sitio |
| `select-rubro` | Filtro por rubro |
| `select-pais` | Filtro por país |
| `select-estado` | Filtro por estado (se muestra al seleccionar país) |
| `select-ciudad` | Filtro por ciudad (se muestra al seleccionar estado) |
| `destacados-grid` | Contenedor donde se inyectan los proyectos destacados |
| `directorio-grid` | Contenedor donde se inyectan todos los proyectos |
| `total-negocios` | Contador de proyectos entregados |

### `nosotros.html` - Quiénes somos
Presenta al equipo, especialidades por área y valores de operación. Sin IDs de ancla.

### `terminos.html` - Términos y condiciones
Condiciones de contratación, política de pagos, revisiones, cancelaciones y reembolsos. Sin IDs de ancla.

---

## Arquitectura CSS

Cada archivo CSS contiene sus propios media queries al final, organizados por secciones. No existe un `responsive.css` global.

```
core/variables.css  ->  tokens globales (colores, fuentes, radios)
core/layout.css     ->  estructura global: navbar, footer, menú móvil + media queries
core/ui.css         ->  piezas visuales reutilizables: cards, botones, badges + media queries
pages/*.css         ->  estilos exclusivos por página + media queries
```

**Reglas:**
- Cada archivo es autocontenido: estilos base y sus media queries juntos.
- Los estilos visuales reutilizables van en `ui.css`, no en los archivos de página.
- Si un estilo se repite en dos páginas, sube a `ui.css`.
- No hay `responsive.css` global — cada archivo maneja sus propios breakpoints.

**Carga por página:**
```html
<!-- Ejemplo: directorio.html -->
<link rel="stylesheet" href="css/core/variables.css">
<link rel="stylesheet" href="css/core/layout.css">
<link rel="stylesheet" href="css/core/ui.css">
<link rel="stylesheet" href="css/pages/directorio.css">
```

---

## Componentes globales

Banner, navbar y footer se inyectan dinámicamente en todas las páginas mediante `js/layout.js`. Cada página declara sus placeholders en este orden:

```html
<div id="banner-placeholder"></div>
<div id="navbar-placeholder"></div>
<!-- contenido de la página -->
<div id="footer-placeholder"></div>
```

La carga está encadenada con promesas para garantizar el orden correcto: banner → navbar → footer. Cada componente espera al anterior antes de inyectarse.

---

## Botones unificados

| Clase | Uso | Color |
|-------|-----|-------|
| `btn-primary` | Comprar, acción principal | Azul sólido |
| `btn-secondary` | Opción secundaria | Contorno azul |
| `btn-secondary-green` | Opción secundaria verde | Contorno verde |
| `btn-secondary-white` | Opción secundaria sobre fondo oscuro | Contorno blanco |
| `btn-wa` | WhatsApp, conversación directa | Verde sólido |
| `btn-white` | Casos especiales (divider) | Blanco sólido, texto azul |

**Regla de uso:** Azul para comprar, verde para conversar.

---

## Dependencias externas

| Librería | Versión | Uso |
|---|---|---|
| Font Awesome | 6.4.0 | Iconos en todo el sitio |
| Plus Jakarta Sans | - | Tipografía principal (títulos) |
| Inter | - | Tipografía secundaria (cuerpo) |

Todas se cargan desde CDN, no hay dependencias instaladas localmente.

---

## Convenciones del proyecto

Ver [`COMMITS.md`](COMMITS.md) para la guía completa de mensajes de commit.

**Resumen rápido:**
```
feat: agrega X
fix: corrige X en Y
estilo: actualiza X de sección Y
contenido: cambia X en Y
refactor: mueve X a Y
docs: documenta X
chore: agrega / elimina / renombra X
```