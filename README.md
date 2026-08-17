# Invitación de Boda — Diana & Oscar

¡Bienvenido! Esta es tu página web de invitación de boda. Aquí encontrarás todas las instrucciones para personalizar y desplegar tu sitio.

## 📋 Contenido

- **index.html** → La página principal con todas las secciones
- **assets/css/styles.css** → Estilos y diseño responsivo
- **assets/js/main.js** → Funcionalidades interactivas (cuenta regresiva, galería, etc.)
- **netlify.toml** → Configuración para Netlify

## 🎨 Personalización — Qué Editar

### 1. Datos principales (Lo más importante)

Abre `index.html` y busca la sección al inicio del `<body>`:

```javascript
<script>
window.WEDDING_DATA = {
    groomName: "Oscar",
    brideName: "Diana",
    ceremonyDateTime: "2025-12-13 18:00",  // Formato: YYYY-MM-DD HH:mm
    ceremonyLocation: "Catedral San Jerónimo",
    ceremonyCity: "Villa de Leyva, Córdoba",
    ceremonyTime: "6:00 PM",
    ceremonyMapUrl: "https://maps.google.com/?q=...",
    receptionLocation: "Salón de Recepciones La Paz",
    receptionCity: "Montería, Córdoba",
    receptionTime: "7:00 PM",
    receptionMapUrl: "https://maps.google.com/?q=...",
    dressCode: "Formal elegante",
    dressCodeDescription: "Vestidos largos para las damas y traje para los caballeros",
    weddingHashtag: "#DianaYOscar",
    rsvpFormUrl: "https://forms.gle/tu-formulario-aqui",
    musicFormUrl: "https://forms.gle/tu-formulario-musica",
    suggestionsFormUrl: "https://forms.gle/tu-formulario-sugerencias",
    rsvpDeadline: "30 de noviembre de 2025",
    hotels: [
        { name: "Hotel Casa Blanca", city: "Villa de Leyva", website: "https://booking.com" },
        // ... más hoteles
    ]
};
</script>
```

**Reemplaza todos estos valores con tus datos reales.** Cada campo está claramente etiquetado.

### 2. Crear tus Google Forms

Necesitas crear 3 formularios de Google (todos gratuitos):

1. **Formulario de RSVP** (Confirmar asistencia)
   - Preguntas sugeridas: Nombre, número de personas, si consume gluten/lactosa, etc.
   - Copia el enlace compartible en `rsvpFormUrl`

2. **Formulario de Sugerencias Musicales**
   - Preguntas: Nombre de la canción, artista
   - Copia en `musicFormUrl`

3. **Formulario de Sugerencias y Mensajes**
   - Preguntas: Nombre, mensaje especial
   - Copia en `suggestionsFormUrl`

**Cómo obtener el enlace:**
- En Google Forms, haz clic en "Enviar" (arriba a la derecha)
- Copia la URL corta del formulario
- Pégala en `window.WEDDING_DATA` en el index.html

### 3. Google Maps (opcional pero recomendado)

Para que los enlaces de "Ver en el mapa" funcionen:

1. Busca en Google Maps el lugar de tu ceremonia
2. En el navegador, copia la URL de la búsqueda
3. Pégala en `ceremonyMapUrl` y `receptionMapUrl`

Ejemplo:
```
https://maps.google.com/?q=Catedral+San+Jeronimo+Villa+de+Leyva
```

### 4. Agregar fotos reales

Las fotos de la galería se encuentran en el HTML como placeholders. Para reemplazarlas:

1. Crea una carpeta `assets/img/` en el mismo nivel que `index.html`
2. Sube tus fotos (jpg, png, webp) con nombres como:
   - `photo1.jpg`
   - `photo2.jpg`
   - etc.

3. En `index.html`, busca la sección **GALERÍA** y reemplaza las líneas:
   ```html
   <div class="gallery-placeholder">
       <p>Foto de Diana y Oscar</p>
   </div>
   ```
   
   Por:
   ```html
   <img src="assets/img/photo1.jpg" alt="Diana y Oscar" style="width: 100%; height: 100%; object-fit: cover;">
   ```

### 5. Colores personalizados (opcional)

Si quieres cambiar el esquema de colores, abre `assets/css/styles.css` y busca las variables al inicio:

```css
:root {
    --color-primary: #8B4789;    /* Morado — principal */
    --color-secondary: #D4A5D4;  /* Morado claro */
    --color-accent: #E8C1E8;     /* Morado muy claro */
    --color-text: #333;
    --color-bg: #FFF9F7;         /* Fondo crema */
}
```

Reemplaza los códigos hexadecimales (`#8B4789`, etc.) con los colores que prefieras.

---

## 🚀 Despliegue en Netlify

### Opción A: Netlify Drop (Más simple — sin crear cuenta de GitHub)

1. Ve a https://app.netlify.com/drop
2. Selecciona toda la carpeta `boda-diana-oscar` y arrástrala a la página
3. Tu sitio estará en línea en segundos con una URL temporal
4. En "Site settings" → "Change site name" → escribe `nuestraboda-dianayoscar`
5. Tu URL final será: **https://nuestraboda-dianayoscar.netlify.app**

### Opción B: Conectar un repositorio Git (Recomendado para actualizaciones futuras)

Si quieres poder actualizar la página fácilmente:

1. Crea una cuenta gratuita en GitHub: https://github.com/signup
2. Crea un repositorio nuevo público llamado `boda-diana-oscar`
3. Sube la carpeta completa (puedes usar GitHub Desktop o la línea de comandos):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Invitación de boda"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/boda-diana-oscar.git
   git push -u origin main
   ```
4. Ve a https://app.netlify.com y haz login con tu cuenta de GitHub
5. Haz clic en "New site from Git" y selecciona tu repositorio
6. Netlify detectará automáticamente la configuración y desplegará
7. Cambia el nombre del sitio a `nuestraboda-dianayoscar`

**Con esta opción:**
- Cualquier cambio que hagas y subas a GitHub se desplegará automáticamente
- Tus invitados siempre ven la versión más reciente

---

## 📱 Características

✨ **Totalmente responsivo** — Funciona perfectamente en móviles, tablets y escritorio

⏰ **Cuenta regresiva en vivo** — Se actualiza cada segundo

📸 **Galería interactiva** — Haz clic en las fotos para ampliarlas

✉️ **Sobre animado** — Interactivo y elegante

🗺️ **Enlaces a mapas** — Tus invitados pueden llegar fácilmente

📅 **Agregar al calendario** — Botón que abre Google Calendar

🎵 **Formularios integrados** — RSVP, música, sugerencias

📱 **Compatibilidad total** — Funciona en WhatsApp, correo, redes sociales

---

## ⚙️ Requisitos técnicos

- **Navegador moderno** — Chrome, Firefox, Safari, Edge (últimas versiones)
- **Conexión a internet** — Para Google Maps, Google Forms, etc.
- **Sin instalaciones** — El sitio es 100% estático, no necesita base de datos ni backend

---

## 🆘 Soporte y Preguntas

Si necesitas ayuda con algo específico:

1. **¿Cómo cambio el fondo de color?**
   → Edita `--color-bg` en `assets/css/styles.css`

2. **¿Puedo agregar más hogar/hoteles?**
   → Sí, en `window.WEDDING_DATA` agrega más objetos al array `hotels`

3. **¿Puedo cambiar las fuentes?**
   → Sí, en `index.html` hay un enlace a Google Fonts. Reemplaza con tus fuentes favoritas.

4. **¿El enlace de Google Forms no funciona?**
   → Asegúrate de copiar la URL correcta desde "Enviar" → "Obtener enlace"

5. **¿La página se ve rara en móvil?**
   → Intenta refrescar (Ctrl+Shift+R en Windows, Cmd+Shift+R en Mac)

---

## 📄 Licencia

Este sitio fue creado específicamente para Diana y Oscar. Siéntete libre de compartir el enlace con tus invitados.

---

## ✨ ¡Felicidades!

Tu página de invitación está lista. Solo personaliza los datos, crea los formularios de Google, y ¡comparte el enlace con tus invitados!

**URL de tu invitación:** https://nuestraboda-dianayoscar.netlify.app

¡Que disfrutes tu boda! 💕
