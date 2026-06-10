# Fernando Aragón Ministries — Sitio Web Oficial

Sitio web oficial de **Fernando Aragón**, apóstol, escritor y conferencista internacional desde Tucumán, Argentina.

## 🗂️ Estructura del Proyecto

```
fernandoaragon/
├── index.html              ← Página principal
├── css/
│   └── style.css           ← Estilos globales compartidos
├── js/
│   └── main.js             ← JavaScript (nav, scroll reveal, formularios)
├── images/                 ← Todas las imágenes (23 archivos)
└── pages/
    ├── libros.html         ← Libros con Amazon + MercadoLibre
    ├── fundacion.html      ← Fundación Vida a la Familia
    └── blog.html           ← Blog y artículos
```

## 🚀 Publicar en GitHub Pages

### Paso 1 — Crear repositorio
1. Ir a [github.com/new](https://github.com/new)
2. Nombre: `fernandoaragonministries`
3. Dejarlo **público** · NO inicializar con README

### Paso 2 — Subir archivos (desde el navegador)
1. En el repo → clic en **"uploading an existing file"**
2. Arrastrar TODA la carpeta descomprimida
3. Commit: `Initial commit`

### Paso 3 — Activar GitHub Pages
1. Settings → Pages
2. Source: **Deploy from a branch** → `main` / `/ (root)`
3. En unos minutos el sitio vive en:
   `https://TU_USUARIO.github.io/fernandoaragonministries/`

## 🔧 Qué actualizar antes de publicar

| Qué | Dónde |
|-----|-------|
| Links YouTube / Instagram / Facebook | `index.html` + todas las páginas, buscar `href="#"` en `.soc-btn` |
| Links directos de libros en Amazon | `pages/libros.html` — reemplazar URLs de búsqueda por links directos |
| Links directos de libros en MercadoLibre | `pages/libros.html` — ídem |
| Email de contacto | Buscar `contacto@fernandoaragonministries.com` |
| Fechas de eventos | `index.html` sección `#eventos` |
| Canal YouTube real | Buscar `@fernandoaragon` y reemplazar |

## 🌐 Dominio personalizado (opcional)
1. Comprar dominio (ej: `fernandoaragonministries.com`)
2. GitHub Pages → Custom domain → ingresar el dominio
3. En el DNS del proveedor agregar: `CNAME www → TU_USUARIO.github.io`

## 📋 Roadmap
- [ ] Formulario de contacto funcional (Formspree)
- [ ] Sección Cápsulas con invitados
- [ ] Integración YouTube API
- [ ] Versión en inglés

---
© 2026 Fernando Aragón Ministries · Iglesia Cristo Reina · Tucumán, Argentina
