# ✅ Checklist de Lanzamiento

Usa este checklist para asegurar que todo está listo antes de compartir tu invitación con los invitados.

---

## 📝 FASE 1: PERSONALIZACIÓN (ESENCIAL)

### Datos de la Boda
- [ ] Abro `index.html` y encuentro `window.WEDDING_DATA`
- [ ] Actualizo `groomName` (nombre del novio)
- [ ] Actualizo `brideName` (nombre de la novia)
- [ ] Actualizo `ceremonyDateTime` (formato: 2025-12-13 18:00)
- [ ] Actualizo `ceremonyLocation` (nombre del lugar)
- [ ] Actualizo `ceremonyCity` (ciudad y departamento)
- [ ] Actualizo `ceremonyTime` (hora en formato 12h, ej: 6:00 PM)
- [ ] Actualizo `ceremonyMapUrl` (enlace de Google Maps)
- [ ] Actualizo `receptionLocation` (lugar de recepción)
- [ ] Actualizo `receptionCity` (ciudad de recepción)
- [ ] Actualizo `receptionTime` (hora de recepción)
- [ ] Actualizo `receptionMapUrl` (enlace de Google Maps)

### Configuración de Formularios
- [ ] Creo formulario de RSVP en Google Forms
- [ ] Copio el enlace del formulario de RSVP
- [ ] Pego el enlace en `rsvpFormUrl`
- [ ] Creo formulario de música en Google Forms
- [ ] Copio el enlace del formulario de música
- [ ] Pego el enlace en `musicFormUrl`
- [ ] Creo formulario de sugerencias en Google Forms
- [ ] Copio el enlace del formulario de sugerencias
- [ ] Pego el enlace en `suggestionsFormUrl`
- [ ] Actualizo `rsvpDeadline` (fecha límite de confirmación)

### Hashtag e Instagram
- [ ] Actualizo `weddingHashtag` (ej: #DianaYOscar)
- [ ] Actualizo `instagramHashtag` (sin # , ej: DianaYOscar)

### Hoteles (Opcional pero recomendado)
- [ ] Busco hoteles cercanos en Booking.com
- [ ] Obtengo enlaces directos de cada hotel
- [ ] Actualizo el array `hotels` en `index.html`
- [ ] Verifico que tenga al menos 2 opciones

---

## 🎨 FASE 2: DISEÑO (OPCIONAL)

### Colores (Si quieres cambiar del morado por defecto)
- [ ] Abro `assets/css/styles.css`
- [ ] Busco `:root { ... }` al inicio
- [ ] Cambio `--color-primary` (color principal)
- [ ] Cambio `--color-secondary` (color secundario)
- [ ] Cambio `--color-accent` (color de fondo claro)
- [ ] Cambio `--color-bg` (fondo de página)
- [ ] Guardo el archivo

### Fuentes (Si quieres cambiar tipografía)
- [ ] Abro `index.html`
- [ ] Busco la línea de Google Fonts (línea ~10)
- [ ] Reemplazo con nuevas fuentes de Google Fonts
- [ ] Actualizo `--font-heading` en `styles.css`
- [ ] Actualizo `--font-body` en `styles.css`
- [ ] Guardo ambos archivos

---

## 📸 FASE 3: FOTOS (MUY RECOMENDADO)

### Crear Carpeta de Imágenes
- [ ] Creo carpeta `assets/img/` (si no existe)
- [ ] Copio 6+ fotos de Diana y Oscar a esa carpeta
- [ ] Nombro las fotos: `photo1.jpg`, `photo2.jpg`, etc.

### Actualizar Galería
- [ ] Abro `index.html`
- [ ] Busco la sección `<!-- GALERÍA -->`
- [ ] Reemplazo cada `<div class="gallery-placeholder">` con:
  ```html
  <img src="assets/img/photo1.jpg" alt="Diana y Oscar" style="width: 100%; height: 100%; object-fit: cover;">
  ```
- [ ] Guardo el archivo

---

## 🧪 FASE 4: PRUEBAS EN LOCAL (IMPORTANTE)

### Abrir en Navegador
- [ ] Abro `index.html` directamente en Chrome/Firefox/Safari
- [ ] ¿Se ve correctamente?
- [ ] ¿Los datos personalizados aparecen?

### Verificar Funcionalidades
- [ ] Hago click en "Abre la invitación" (efecto animado, revela el menú) y luego hago scroll y veo todas las secciones
- [ ] La cuenta regresiva cuenta hacia atrás (se actualiza cada segundo)
- [ ] Hago click en "Ver en el mapa" (se abre Google Maps)
- [ ] Los botones de formularios tienen los enlaces correctos
- [ ] El hashtag es visible en la sección de fotos

### Probar en Móvil
- [ ] Abro el archivo en mi celular (WiFi)
- [ ] ¿Se ve correctamente en pantalla pequeña?
- [ ] ¿Los botones se pueden tocar fácilmente?
- [ ] ¿Las fotos cargan rápido?
- [ ] ¿El texto es legible?

### Verificar Navegador (F12)
- [ ] Abro DevTools (F12 o Cmd+Option+I)
- [ ] Pestaña "Console" → ¿Errores en rojo?
- [ ] Si hay errores → Reviso que los datos estén bien
- [ ] Pestaña "Network" → ¿Todas las imágenes cargan?

---

## 🚀 FASE 5: DESPLIEGUE EN NETLIFY

### Crear Cuenta Netlify
- [ ] Voy a https://app.netlify.com
- [ ] Me registro (email, Google o GitHub)
- [ ] Verifico mi correo electrónico

### Opción A: Netlify Drop (La más simple)
- [ ] Voy a https://app.netlify.com/drop
- [ ] Selecciono toda la carpeta `boda-diana-oscar`
- [ ] Arrastra la carpeta al área de drop
- [ ] Espero a que termine el deploy (15 segundos)
- [ ] Copio la URL que genera (algo como: https://xxx-xxx-xxx.netlify.app)
- [ ] Pruebo que funcione en esa URL

### Opción B: Netlify con Nombre Personalizado (RECOMENDADO)
- [ ] En Netlify: "New site from Git" → "Deploy manually"
- [ ] Arrastra la carpeta `boda-diana-oscar`
- [ ] Espero a que termine el deploy
- [ ] Voy a "Site settings"
- [ ] Hago clic en "Change site name"
- [ ] Escribo: `nuestraboda-dianayoscar`
- [ ] Guardado
- [ ] Mi URL final es: https://nuestraboda-dianayoscar.netlify.app
- [ ] Pruebo que funcione en esa URL

---

## 🔗 FASE 6: VERIFICACIÓN FINAL (CRÍTICA)

### En la URL Pública
- [ ] Abro https://nuestraboda-dianayoscar.netlify.app en incógnito (sin caché)
- [ ] Veo la portada con mis nombres
- [ ] La cuenta regresiva funciona
- [ ] Los formularios funcionan
- [ ] Las fotos cargan
- [ ] La galería funciona
- [ ] Los enlaces de mapas funcionan
- [ ] Se ve bien en móvil (abre con el navegador del celular)
- [ ] Sin errores en DevTools

### Google Forms
- [ ] Hago clic en "Confirmar Asistencia"
- [ ] El formulario de RSVP se abre correctamente
- [ ] Completo un formulario de prueba
- [ ] Veo la respuesta en Google Forms
- [ ] Repito con el formulario de música
- [ ] Repito con el de sugerencias

### Redes Sociales
- [ ] Copio el hashtag (#DianaYOscar)
- [ ] Lo busco en Instagram
- [ ] El enlace del hashtag funciona

---

## 📱 FASE 7: COMPATIBILIDAD (IMPORTANTE)

### Navegadores
- [ ] Chrome ✅
- [ ] Firefox ✅
- [ ] Safari (Mac/iPhone) ✅
- [ ] Edge ✅

### Dispositivos
- [ ] Desktop (1920x1080) ✅
- [ ] Tablet (iPad) ✅
- [ ] Móvil pequeño (iPhone SE) ✅
- [ ] Móvil grande (iPhone 14 Pro Max) ✅

### Apps de Mensajería
- [ ] Funciona en WhatsApp (al compartir enlace)
- [ ] Funciona en Messenger
- [ ] Funciona en Telegram
- [ ] Funciona al enviar por correo

---

## 📤 FASE 8: DISTRIBUCIÓN

### Preparar Enlaces
- [ ] Copio la URL: https://nuestraboda-dianayoscar.netlify.app
- [ ] Creo un código QR (usa qr-server.com si quieres)
- [ ] Preparo el mensaje personalizado

### Compartir
- [ ] Envío por WhatsApp (con preview que se vea bien)
- [ ] Envío por correo con mensaje personalizado
- [ ] Comparto en redes sociales (Instagram, Facebook)
- [ ] Imprimo la URL en las tarjetas físicas de invitación (si tienes)
- [ ] Comparto el código QR en redes sociales

### Confirmación de Invitados
- [ ] Dejo pasar 48 horas
- [ ] Reviso Google Forms para ver respuestas
- [ ] Hago seguimiento con invitados que no respondieron
- [ ] Anoto confirmaciones y números de personas

---

## 🔄 FASE 9: ACTUALIZACIONES (Después del lanzamiento)

### Si Necesitas Cambiar Algo
- [ ] Edito el archivo (ej: index.html)
- [ ] Guardo localmente
- [ ] Si usas Netlify Drop: Re-subo la carpeta
- [ ] Si usas GitHub: `git push` (Netlify re-deploy automático)
- [ ] Espero 30 segundos
- [ ] Actualizo el navegador (Ctrl+Shift+R)
- [ ] Verifico que el cambio esté en línea

### Antes de Cambios Importantes
- [ ] Hago pruebas locales primero (F12)
- [ ] Verifico que no rompi nada
- [ ] Luego despliego

---

## 🎯 RESUMEN RÁPIDO (5 Pasos)

1. ✏️ **Editar datos** en `window.WEDDING_DATA` (index.html)
2. 🔗 **Crear Google Forms** (RSVP, Música, Sugerencias) y copiar URLs
3. 📸 **Agregar fotos** (Opcional pero recomendado)
4. 🚀 **Desplegar en Netlify** (Arrastra la carpeta)
5. 📱 **Compartir URL** con invitados

---

## ⚠️ ERRORES COMUNES

| Error | Causa | Solución |
|-------|-------|----------|
| "Formulario no funciona" | URL de Google Forms incorrecta | Copia desde "Enviar" → "Obtener enlace" |
| "La página se ve rara" | Caché del navegador | Actualiza con Ctrl+Shift+R |
| "Fotos no cargan" | Ruta de carpeta incorrecta | Asegúrate que esté `assets/img/` |
| "Cuenta regresiva no funciona" | Fecha mal formateada | Usa: YYYY-MM-DD HH:mm (ej: 2025-12-13 18:00) |
| "Enlace de mapa no abre" | URL incompleta | Copia desde Google Maps directamente |

---

## 📞 ¿Ayuda?

Si algo no funciona:
1. Abre DevTools (F12) → Console
2. ¿Hay errores en rojo? Léelos
3. Revisa el archivo README.md
4. Revisa EJEMPLOS_PERSONALIZACION.md

---

**¡Listo para compartir! 🎉 Marca cada casilla conforme avances. ¡Buena suerte! 💕✨**
