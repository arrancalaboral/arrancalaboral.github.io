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
│   │   ├── layout.css      # Estructura base, grid, secciones
│   │   └── components.css  # Componentes reutilizables: cards, botones, badges
│   ├── pages/
│   │   ├── index.css       # Estilos exclusivos de index.html
│   │   ├── directorio.css  # Estilos exclusivos de directorio.html
│   │   ├── nosotros.css    # Estilos exclusivos de nosotros.html
│   │   └── terminos.css    # Estilos exclusivos de terminos.html
│   └── responsive.css      # Media queries globales
│
├── components/
│   ├── banner.html         # Banner de lanzamiento global
│   ├── navbar.html         # Navbar global
│   └── footer.html         # Footer global
│
├── js/
│   ├── components.js       # Carga encadenada de banner, navbar y footer
│   └── directorio-data.js  # Datos de proyectos del directorio (array de objetos)
│
├── img/
│   ├── directorio/         # Logos de negocios listados en el directorio
│   ├── logo-arranca.png    # Logo principal
│   └── favicon-64x64.png  # Favicon
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
Portafolio de sitios web entregados. Los datos se cargan dinámicamente desde `js/directorio-data.js`.

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

```
variables.css   ->  tokens globales (colores, fuentes, radios)
layout.css      ->  estructura y grid del sitio
components.css  ->  piezas reutilizables (cards, botones, badges, navbar)
pages/*.css     ->  estilos exclusivos por página
responsive.css  ->  breakpoints y ajustes móvil
```

Regla: **los estilos de componentes van en `components.css`, no en los archivos de página.** Si un estilo se repite en dos páginas, sube a components.

---

## Componentes globales

Banner, navbar y footer se inyectan dinámicamente en todas las páginas mediante `js/components.js`. Cada página declara sus placeholders en este orden:

```html
<div id="banner-placeholder"></div>
<div id="navbar-placeholder"></div>
<!-- contenido de la página -->
<div id="footer-placeholder"></div>
```

La carga está encadenada con promesas para garantizar el orden correcto: banner -> navbar -> footer. Cada componente espera al anterior antes de inyectarse.

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