# 📋 Estructura del Proyecto — Invitación de Boda

```
boda-diana-oscar/
│
├── 📄 index.html                    [EDITAR AQUÍ: Datos principales]
│   ├── Script de configuración (WEDDING_DATA)
│   ├── Navegación sticky
│   └── 13 Secciones:
│       1. Portada/Hero
│       2. Anuncio del compromiso
│       3. Cuenta regresiva
│       4. Itinerario del día
│       5. Detalles ceremonia
│       6. Detalles recepción
│       7. Galería de fotos
│       8. Código de vestimenta
│       9. Sugerencias musicales
│       10. Hashtag Instagram
│       11. Hospedaje/hoteles
│       12. Confirmación RSVP
│       13. Footer
│
├── 📁 assets/
│   ├── 🎨 css/
│   │   └── styles.css               [Variables CSS para colores y fuentes]
│   │
│   ├── ⚙️ js/
│   │   └── main.js                  [Interactividad: countdown, galería, etc.]
│   │
│   └── 📸 img/                      [Carpeta para fotos (crear tú mismo)]
│       ├── photo1.jpg               [Reemplazarás con tus fotos]
│       ├── photo2.jpg
│       └── ...
│
├── 🌐 netlify.toml                  [Config para Netlify (no tocar)]
│
├── 📖 README.md                     [Documentación completa]
│
├── 📝 GUÍA_RÁPIDA.txt              [Pasos de 1 a 5 para ir en línea]
│
└── 📋 ESTRUCTURA_PROYECTO.md        [Este archivo]
```

---

## 🎯 Secciones Incluidas

### 1️⃣ **Portada/Hero**
- Nombres de los novios
- Frase de bienvenida
- Botón "Abre la invitación" (sobre animado)
- Efecto parallax

### 2️⃣ **Anuncio del Compromiso**
- Texto personalizable sobre la relación
- Cita inspiradora

### 3️⃣ **Cuenta Regresiva**
- ⏱️ Actualización en vivo (cada segundo)
- Días, horas, minutos, segundos
- Se sincroniza con la fecha en `WEDDING_DATA`

### 4️⃣ **Itinerario del Día**
- Timeline visual de eventos
- Horarios y ubicaciones

### 5️⃣ **Detalles de Ceremonia**
- Lugar, hora, ciudad
- Enlace a Google Maps
- Icono de iglesia

### 6️⃣ **Detalles de Recepción**
- Lugar, hora, ciudad
- Enlace a Google Maps
- Icono de brindis

### 7️⃣ **Galería de Fotos**
- Grid responsivo (3 columnas en desktop, 2 en tablet, 1 en móvil)
- Lightbox interactivo al hacer click
- Placeholders editables

### 8️⃣ **Código de Vestimenta**
- Sugerencias para damas y caballeros
- Iconos visuales

### 9️⃣ **Sugerencias Musicales**
- Enlace a Google Form
- Invitación a colaborar

### 🔟 **Hashtag Instagram**
- Hashtag centralizado
- Enlace para buscar en Instagram

### 1️⃣1️⃣ **Hospedaje**
- Lista de hoteles cercanos
- Enlaces a Booking
- Generados dinámicamente desde WEDDING_DATA

### 1️⃣2️⃣ **Confirmación RSVP**
- Enlace a Google Forms
- Fecha límite
- Botón "Agregar al Calendario" (Google Calendar)

### 1️⃣3️⃣ **Footer**
- Derechos de autor
- Créditos

---

## ⚙️ Características Técnicas

### Frontend
- ✅ **HTML5 semántico** — Accesibilidad y SEO
- ✅ **CSS3 avanzado** — Variables CSS, Flexbox, Grid, animaciones
- ✅ **JavaScript vanilla** — Sin dependencias, sin librerías
- ✅ **Responsive design** — Mobile-first, funciona en todos los dispositivos
- ✅ **Rendimiento** — Carga rápida, sin bloqueadores

### Interactividad
- ✅ Cuenta regresiva en vivo
- ✅ Sobre animado (efecto flip)
- ✅ Galería con lightbox
- ✅ Menú de navegación sticky
- ✅ Scroll suave a secciones
- ✅ Integración Google Forms
- ✅ Integración Google Maps
- ✅ Botón "Agregar al Calendario"
- ✅ Compartir en Instagram

### Datos Centralizados
- 🎯 **Un único lugar para editar:** `window.WEDDING_DATA` en index.html
- 🎯 **Todos los datos se propagan automáticamente** a través de JavaScript
- 🎯 **No necesitas editar HTML/CSS** para cambiar datos

---

## 🎨 Paleta de Colores

Por defecto: **Morado y tonos crema** (elegante y romántico)

```css
--color-primary: #8B4789      /* Morado principal */
--color-secondary: #D4A5D4    /* Morado claro */
--color-accent: #E8C1E8       /* Morado muy claro */
--color-bg: #FFF9F7           /* Fondo crema */
--color-text: #333            /* Texto oscuro */
```

Todos estos valores se pueden cambiar en `assets/css/styles.css`.

---

## 🔤 Tipografía

- **Títulos:** Playfair Display (serif elegante) — de Google Fonts
- **Cuerpo:** Lato (sans-serif limpia) — de Google Fonts

Ambas son descargadas vía Google Fonts, no requieren instalación.

---

## 📱 Responsive Breakpoints

```
≥ 1200px    Desktop completo
768px-1200px Tablet
≤ 768px     Móvil
≤ 480px     Móvil pequeño
```

Cada sección se adapta automáticamente.

---

## 🚀 Cómo Funciona el Despliegue

### Netlify Drop (Más simple)
1. Arrastra la carpeta a https://app.netlify.com/drop
2. Tu sitio está en línea en 10 segundos
3. URL automática: `random-name.netlify.app`

### Netlify + Nombre Personalizado (Recomendado)
1. Crea cuenta en Netlify
2. Arrastra la carpeta (opción "Deploy manually")
3. Cambia nombre a `nuestraboda-dianayoscar`
4. URL final: `nuestraboda-dianayoscar.netlify.app`

### Conexión con Git (Para actualizaciones futuras)
1. Sube el repo a GitHub
2. Conecta Netlify con GitHub
3. Cada `git push` = re-deploy automático

---

## 📝 Archivos a Editar

### ✏️ **Nivel 1: Datos (ESENCIAL)**
- `index.html` → Bloque `window.WEDDING_DATA` (línea ~17)

### 🎨 **Nivel 2: Estilos (Opcional)**
- `assets/css/styles.css` → Variables CSS al inicio

### 📸 **Nivel 3: Fotos (Opcional)**
- Crear carpeta `assets/img/` y subir fotos
- Reemplazar placeholders en galería

### 🔧 **Nivel 4: Avanzado (Muy raro)**
- `assets/js/main.js` → Lógica JavaScript
- `netlify.toml` → Configuración de Netlify

---

## ✨ Flujo de Datos

```
┌─────────────────────────────────────┐
│   window.WEDDING_DATA (index.html)  │
│   ├── brideName, groomName          │
│   ├── ceremonyDateTime, Location    │
│   ├── formUrls, hotels              │
│   └── ... todos los datos           │
└──────────────┬──────────────────────┘
               │
        ┌──────▼──────────┐
        │  main.js leer   │
        │  WEDDING_DATA   │
        └──────┬──────────┘
               │
    ┌──────────▼────────────────────┐
    │ Actualizar HTML dinámicamente │
    │ ├── Títulos                   │
    │ ├── Detalles de evento        │
    │ ├── Formularios               │
    │ ├── Hoteles                   │
    │ └── Mapas                     │
    └──────────────────────────────┘
               │
         ┌─────▼──────────┐
         │ Página renderizada
         │ lista para invitados
         └──────────────────┘
```

---

## 🔄 Actualización Futura

Si necesitas cambiar datos después de desplegar:

1. Edita `window.WEDDING_DATA` en `index.html`
2. Si usas GitHub + Netlify:
   ```bash
   git add .
   git commit -m "Actualizar datos de la boda"
   git push
   ```
3. Netlify re-deploy automáticamente en 30 segundos
4. Los invitados ven la versión más reciente

---

## 🎯 Verificación Pre-Lanzamiento

Antes de compartir el enlace con invitados, verifica:

- [ ] Los nombres están correctos
- [ ] Fecha y hora de ceremonia son correctas
- [ ] Lugares y ciudades son correctas
- [ ] Enlaces de Google Forms funcionan
- [ ] Enlaces de Maps funcionan
- [ ] Cuenta regresiva cuenta hacia atrás
- [ ] Fotos cargan correctamente (si las agregaste)
- [ ] Se ve bien en móvil (prueba con tu celular)
- [ ] Hashtag es correcto
- [ ] Redes sociales están incluidas
- [ ] No hay errores en la consola (F12)

---

## 💡 Comandos Útiles

### Ver localmente (sin Netlify)
```bash
cd boda-diana-oscar
python -m http.server 8000
# Abre en navegador: http://localhost:8000
```

### Si usas Node.js
```bash
npx serve boda-diana-oscar
```

---

## 📞 FAQ

**P: ¿Puedo cambiar el color morado a otro?**
R: Sí, en `assets/css/styles.css`, cambia `--color-primary`

**P: ¿La página es segura/privada?**
R: Cualquiera con el enlace puede verla. No es privada, pero es difícil de adivinar.

**P: ¿Puedo agregar más secciones?**
R: Sí, copia una sección existente y adapta. Consulta el README para más detalles.

**P: ¿Cuánto cuesta mantenerlo en línea?**
R: Gratis con Netlify para siempre.

**P: ¿Expira en algún momento?**
R: No, está en línea indefinidamente.

---

**¡Listo para compartir tu invitación! 💕✨💍**
