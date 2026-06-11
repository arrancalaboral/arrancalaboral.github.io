# Guía de commits

Reglas y convenciones para mantener un historial limpio, legible y útil para todo el equipo.

---

## Estructura básica

```
tipo: descripción corta en minúsculas
```

Para cambios que necesitan más contexto:

```
tipo: descripción corta en minúsculas

Explicación opcional de por qué se hizo el cambio,
qué problema resuelve o qué decisión se tomó.
```

---

## Reglas generales

- Siempre en **minúsculas**
- Sin punto al final
- Máximo **72 caracteres** en la primera línea
- Verbo en **presente**: *agrega, quita, actualiza, corrige, mueve, renombra*
- Descripción **específica**: que cualquier persona del equipo entienda qué cambió sin abrir el código
- Evitar: *"cambios varios"*, *"update"*, *"arreglé cosas"*, *"wip"*

---

## Tipos de commit

| Tipo | Cuándo usarlo |
|---|---|
| `feat` | Nueva funcionalidad o sección |
| `fix` | Corrección de bug o error |
| `estilo` | Cambios visuales: CSS, iconos, colores, espaciado |
| `contenido` | Textos, copys, precios, badges, imágenes |
| `refactor` | Reorganización de código sin cambiar funcionalidad |
| `docs` | Documentación, comentarios, READMEs |
| `chore` | Tareas menores: configs, dependencias, archivos |
| `wip` | Trabajo en progreso - solo en ramas personales, nunca en main |

---

## Ejemplos por tipo

### `feat` - nueva funcionalidad
```
feat: agrega sección de testimonios
feat: agrega formulario de contacto con lógica condicional
feat: agrega navbar fija con scroll activo
feat: agrega modal de confirmación en formulario
feat: agrega integración con WhatsApp en botón de contacto
```

### `fix` - correcciones
```
fix: corrige enlace roto en Paquete Mejora
fix: corrige visualización de cards en móvil
fix: corrige desbordamiento de texto en hero
fix: corrige orden de secciones en index
fix: corrige color de botón en modo oscuro
```

### `estilo` - visual y diseño
```
estilo: actualiza iconos de sección empleo
estilo: homologa badges con emojis en cards
estilo: ajusta espaciado entre secciones
estilo: cambia fuente de títulos a Plus Jakarta Sans
estilo: unifica border-radius en componentes de cards
estilo: actualiza paleta de colores en variables.css
estilo: mejora responsivo en sección B2B
```

### `contenido` - textos y copys
```
contenido: actualiza precios de paquetes B2C
contenido: renombra Paquete Express a Paquete Mejora
contenido: corrige redacción en descripción de CV desde cero
contenido: agrega badge a Paquete Completo
contenido: quita badge de Paquete Mejora
contenido: actualiza número de WhatsApp en footer
contenido: agrega testimonio de cliente en sección testimonios
```

### `refactor` - reorganización
```
refactor: separa navbar en componente reutilizable
refactor: mueve estilos de cards a components.css
refactor: limpia clases sin uso en index.css
refactor: reorganiza orden de secciones en index.html
refactor: extrae footer a componente global
```

### `docs` - documentación
```
docs: agrega guía de commits al proyecto
docs: documenta estructura de carpetas en README
docs: agrega comentarios en variables.css
docs: actualiza README con instrucciones de instalación
docs: documenta convención de nombres de clases CSS
```

### `chore` - tareas menores
```
chore: agrega favicon al proyecto
chore: elimina archivos sin uso en carpeta img
chore: actualiza dependencia de Font Awesome a 6.4
chore: renombra archivo estilos.css a components.css
chore: agrega carpeta de componentes globales
```

---

## Buenas prácticas para equipos

### Una cosa por commit
Cada commit debe representar un solo cambio lógico. Si estás haciendo dos cosas distintas, son dos commits.

```
✓ estilo: actualiza iconos de sección empleo
✓ contenido: renombra Paquete Express a Paquete Mejora

✗ estilo y contenido: iconos y nombre de paquete
```

### Ramas con nombres claros
```
feat/seccion-testimonios
fix/enlace-paquete-mejora
estilo/responsive-mobile
contenido/actualizacion-precios
```

### Nunca hacer commit directo a main
Todo cambio entra por rama y se revisa antes de mergear.

### El mensaje debe responder: ¿qué cambió y dónde?
```
✓ estilo: ajusta espaciado entre cards en sección B2C
✗ estilo: ajusta espaciado
```

---

## Commits que hay que evitar

```
✗ update
✗ cambios
✗ arreglé cosas
✗ wip
✗ asdfgh
✗ último commit antes de entregar
✗ no sé qué hice pero funciona
```

---

## Referencia rápida

```
feat: agrega X
fix: corrige X en Y
estilo: actualiza X de sección Y
contenido: cambia X en Y
refactor: mueve X a Y
docs: documenta X
chore: agrega / elimina / renombra X
```