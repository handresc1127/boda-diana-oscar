# 🚀 Despliegue en Netlify — Guía Completa Paso a Paso

Esta es la guía más detallada para poner tu invitación en línea en Netlify. Sigue cada paso exactamente como se describe.

---

## 📋 Requisitos Previos

Antes de empezar, asegúrate de que hayas completado:

- ✅ Personalizado todos los datos en `index.html` (nombres, fechas, lugares)
- ✅ Creado los 3 Google Forms (RSVP, Música, Sugerencias)
- ✅ Copiado los URLs de los formularios en `index.html`
- ✅ Guardado todos los cambios
- ✅ Probado localmente que funciona (abre index.html en tu navegador)

Si no has hecho esto, vuelve atrás y completa esos pasos primero.

---

## 🔷 OPCIÓN A: Netlify Drop (La Más Simple)

Si quieres subir tu sitio en **5 minutos sin crear cuenta con usuario**, esta es la opción.

### Paso 1: Ir a Netlify Drop

1. Abre tu navegador (Chrome, Firefox, Safari, etc.)
2. Ve a: **https://app.netlify.com/drop**
3. Deberías ver una página que dice "Drag and drop your site folder here"

### Paso 2: Seleccionar tu carpeta

1. En tu computadora, abre el Explorador de Archivos (Windows Explorer)
2. Navega a: `C:\Users\hcorrea\boda-diana-oscar`
3. Selecciona TODA la carpeta `boda-diana-oscar` (no los archivos individuales)

### Paso 3: Arrastrar a Netlify

1. Desde el Explorador, toma toda la carpeta `boda-diana-oscar`
2. Arrástrala hacia la ventana de Netlify Drop
3. Suéltala en el área puntillada
4. **ESPERA a que termine el upload** (debería tomar 15-30 segundos)

### Paso 4: Copiar tu URL

1. Cuando termine, Netlify te mostrará una URL similar a:
   ```
   https://random-name-12345.netlify.app
   ```
2. **Copia esa URL y guárdala**
3. Abre esa URL en una pestana nueva para verificar que funciona
4. ¡Listo! Tu sitio ya está en línea

### Ventajas:
- ✅ Súper rápido
- ✅ Sin crear cuenta (pero es temporal)
- ✅ Perfecta para probar

### Desventajas:
- ❌ URL no personalizada (aleatoria)
- ❌ No puedes actualizar fácilmente después
- ❌ Puede caducar

---

## 🔵 OPCIÓN B: Netlify con Nombre Personalizado (RECOMENDADO)

Si quieres un URL bonito como `nuestraboda-dianayoscar.netlify.app`, sigue esta opción.

### Paso 1: Crear Cuenta en Netlify

1. Abre tu navegador
2. Ve a: **https://app.netlify.com**
3. Verás un botón verde "Sign up" o similar
4. Haz clic en **"Sign up"**

### Paso 2: Registrarse

Tienes 3 opciones:

#### Opción 2A: Con Email (Más simple)
1. Haz clic en **"Email"**
2. Escribe tu email (ej: `h.andresc1127@gmail.com`)
3. Crea una contraseña
4. Haz clic en **"Create account"**
5. **IMPORTANTE:** Abrirás tu correo y habrá un email de Netlify
6. Haz clic en el enlace de confirmación del email
7. ¡Listo! Tu cuenta está verificada

#### Opción 2B: Con Google (Más rápido)
1. Haz clic en **"Continue with Google"**
2. Selecciona tu cuenta de Google
3. Acepta los permisos
4. ¡Listo! Tu cuenta está lista (no necesita confirmación)

#### Opción 2C: Con GitHub
1. Si tienes cuenta de GitHub: Haz clic en "Continue with GitHub"
2. Autoriza a Netlify
3. ¡Listo!

### Paso 3: Desplegar tu Sitio

Una vez dentro de tu cuenta Netlify:

1. En la pantalla principal, busca un botón que diga:
   - "New site from Git" o
   - "Add new site" o
   - "Deploy manually"

2. Si ves **"Add new site"** → Haz clic
3. Si ves **"Deploy manually"** → Haz clic (esta es la opción más directa)
4. Deberías ver un área puntillada que dice "Drag and drop your site folder here"

### Paso 4: Arrastrar tu Carpeta

1. Abre el Explorador de Archivos
2. Navega a: `C:\Users\hcorrea\boda-diana-oscar`
3. Selecciona la carpeta completa `boda-diana-oscar`
4. Arrástrala a la ventana de Netlify
5. Suéltala
6. **ESPERA a que se complete el deploy** (30-60 segundos)

### Paso 5: Cambiar el Nombre del Sitio

Una vez que termine el deploy:

1. Verás un mensaje de éxito con una URL como:
   ```
   https://random-generated-name.netlify.app
   ```

2. Busca en la pantalla el botón **"Site settings"** o **"Change site name"**

3. Haz clic en **"Change site name"**

4. En el campo de texto que aparezca, escribe:
   ```
   nuestraboda-dianayoscar
   ```
   (Puede ser diferente si ese nombre ya está ocupado)

5. Haz clic en **"Save"** o **"Confirm"**

6. Netlify reconfigurará tu URL a:
   ```
   https://nuestraboda-dianayoscar.netlify.app
   ```

### Paso 6: Verifica tu URL

1. Abre en una ventana nueva:
   ```
   https://nuestraboda-dianayoscar.netlify.app
   ```

2. Verifica que:
   - ✅ Se ve correctamente
   - ✅ Tus datos están ahí
   - ✅ La cuenta regresiva funciona
   - ✅ Los formularios tienen los enlaces correctos

3. ¡LISTO! Tu invitación está en línea

### Ventajas:
- ✅ URL personalizado y fácil de memorizar
- ✅ URL permanente (no caduca)
- ✅ Puedes hacer actualizaciones subiendo la carpeta nuevamente
- ✅ Gratuito por siempre

---

## 🟢 OPCIÓN C: Netlify + GitHub (Para Actualizaciones Automáticas)

Si quieres que cada cambio se despliegue automáticamente, conecta tu repo de GitHub.

### Paso 1: Crear Cuenta de GitHub (Si no tienes)

1. Ve a: https://github.com/signup
2. Escribe tu email
3. Crea contraseña
4. Completa el registro
5. Verifica tu email

### Paso 2: Crear un Repositorio

1. Una vez en GitHub, ve a tu perfil
2. Haz clic en **"Repositories"**
3. Haz clic en **"New"**
4. Llena:
   - **Repository name:** `boda-diana-oscar`
   - **Description:** (opcional) "Invitación de boda Diana y Oscar"
   - **Public** (selecciona esto)
5. Haz clic en **"Create repository"**

### Paso 3: Subir tu Carpeta a GitHub

Tienes 2 opciones:

#### Opción 3A: Con Git Bash (Línea de comandos)

```bash
# Abre Git Bash en la carpeta de tu proyecto
cd C:\Users\hcorrea\boda-diana-oscar

# Inicializar repositorio local
git init

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Initial commit: Invitación de boda Diana y Oscar"

# Renombrar rama a main (si es necesario)
git branch -M main

# Agregar referencia al repositorio remoto (GitHub)
git remote add origin https://github.com/TU_USUARIO/boda-diana-oscar.git

# Subir los cambios
git push -u origin main
```

Reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub.

#### Opción 3B: Con GitHub Desktop (Más gráfico)

1. Descarga GitHub Desktop: https://desktop.github.com
2. Instálalo
3. Inicia sesión con tu cuenta de GitHub
4. Haz clic en **"Add"** → **"Add Existing Repository"**
5. Selecciona `C:\Users\hcorrea\boda-diana-oscar`
6. Publica el repositorio
7. ¡Listo!

### Paso 4: Conectar GitHub a Netlify

1. En tu cuenta de Netlify: https://app.netlify.com
2. Haz clic en **"Add new site"** → **"Import an existing project"**
3. Haz clic en **"GitHub"** (o el servicio que uses)
4. Autoriza a Netlify acceder a GitHub
5. Selecciona tu repositorio `boda-diana-oscar`
6. Acepta las opciones por defecto
7. Haz clic en **"Deploy"**
8. Netlify desplegará automáticamente

### Paso 5: Cambiar el Nombre (Mismo que Opción B)

Sigue los mismos pasos que en la Opción B, Paso 5.

### Ventajas:
- ✅ Cualquier cambio en GitHub = despliegue automático
- ✅ Historial de versiones (puedes volver atrás si algo sale mal)
- ✅ Colaborar con otros (tu pareja puede editar también)
- ✅ Copia de seguridad en GitHub

### Cómo actualizar después:

Cada vez que hagas cambios:

```bash
cd C:\Users\hcorrea\boda-diana-oscar
git add .
git commit -m "Descripción del cambio"
git push
```

Netlify detectará el cambio y re-desplegará automáticamente (en ~30 segundos).

---

## ✅ Verificación Post-Despliegue

Después de desplegar, OBLIGATORIAMENTE verifica:

### En la URL Pública

1. Abre tu URL (ej: https://nuestraboda-dianayoscar.netlify.app) en incógnito
2. Sin caché, ¿se ve correctamente?
3. ¿Tus nombres aparecen correctamente?
4. ¿La cuenta regresiva funciona?
5. ¿Los botones funcionan?
6. Abre DevTools (F12) → Console → ¿Errores en rojo?

### En Móvil

1. Abre tu teléfono
2. Conecta a WiFi
3. En el navegador del móvil, ve a tu URL
4. ¿Se ve bien?
5. ¿Los botones se pueden tocar?
6. ¿Las fotos cargan?

### Google Forms

1. Haz clic en "Confirmar Asistencia"
2. ¿Se abre el formulario?
3. Completa una respuesta de prueba
4. ¿Se envía correctamente?
5. Repite con los otros formularios

### Google Maps

1. Haz clic en "Ver en el mapa" (ceremonia)
2. ¿Se abre Google Maps?
3. ¿Muestra la ubicación correcta?
4. Repite con recepción

---

## 🆘 Problemas Comunes y Soluciones

### Problema: "La URL no me lleva a nada"

**Solución:**
1. Espera 2 minutos (a veces tarda en propagarse)
2. Actualiza el navegador (Ctrl+Shift+R)
3. Intenta en una ventana incógnita
4. Si sigue sin funcionar, vuelve a Netlify y verifica el estado del deploy

### Problema: "Cambié el nombre pero sigue siendo el anterior"

**Solución:**
1. En Netlify: Site settings → verifica que el cambio se guardó
2. Espera 30 segundos
3. Actualiza el navegador (Ctrl+Shift+R)
4. Si no aparece, intenta en incógnita

### Problema: "Los datos no aparecen actualizados"

**Solución:**
1. Probablemente es caché del navegador
2. Abre en incógnita
3. O presiona Ctrl+Shift+R para limpiar caché
4. Si usas Netlify Drop y necesitas actualizar: vuelve a subir la carpeta

### Problema: "Las fotos no cargan"

**Solución:**
1. Verifica que la carpeta `assets/img/` existe
2. Verifica que las fotos están en esa carpeta
3. Verifica que el nombre de la foto en HTML coincide (mayúsculas/minúsculas)
4. En DevTools (F12), ve a Network → busca las imágenes → ¿error 404?
5. Si hay 404, verifica la ruta

### Problema: "Google Forms no funciona"

**Solución:**
1. Copia nuevamente la URL desde Google Forms → Enviar → Obtener enlace
2. Asegúrate de que es la URL CORTA que empieza con `forms.gle/`
3. Pega exactamente en `rsvpFormUrl` (sin espacios extras)
4. Guarda y re-despliegua

---

## 🎯 Resumen Rápido

| Paso | Acción | Tiempo |
|------|--------|--------|
| 1 | Personalizar datos en index.html | 5 min |
| 2 | Crear Google Forms y copiar URLs | 10 min |
| 3 | Ir a app.netlify.com | 1 min |
| 4 | Crear cuenta (si necesario) | 2 min |
| 5 | Arrastrar carpeta a Netlify | 1 min |
| 6 | Esperar a que deploy termine | 1 min |
| 7 | Cambiar nombre del sitio | 1 min |
| 8 | Verificar que funciona | 5 min |
| **TOTAL** | | **~25 min** |

---

## 📞 ¿Algo no funciona?

1. Lee nuevamente los pasos de esta guía
2. Verifica DevTools (F12) → Console
3. Lee los archivos de documentación:
   - `README.md`
   - `GUÍA_RÁPIDA.txt`
   - `CHECKLIST_LANZAMIENTO.md`

---

## 🎉 ¡Felicidades!

Si llegaste aquí, tu invitación está **EN LÍNEA y funcional**.

Ahora solo falta:

1. ✅ Copiar la URL
2. ✅ Compartir con tus invitados
3. ✅ Disfrutar de tu boda

**¡Que disfrutes! 💕✨💍**
