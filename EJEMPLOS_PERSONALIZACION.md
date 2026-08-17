# 🎨 Ejemplos de Personalización

Este archivo muestra cómo hacer cambios comunes en tu invitación.

---

## 1. Cambiar los Nombres y Datos Básicos

**Archivo:** `index.html` (línea ~17)

```javascript
// ANTES
window.WEDDING_DATA = {
    groomName: "Oscar",
    brideName: "Diana",
    ceremonyDateTime: "2025-12-13 18:00",
    // ...
};

// DESPUÉS (tu ejemplo)
window.WEDDING_DATA = {
    groomName: "Juan",
    brideName: "María",
    ceremonyDateTime: "2025-11-15 15:00",  // 3:00 PM el 15 de noviembre
    // ...
};
```

---

## 2. Cambiar Colores

**Archivo:** `assets/css/styles.css` (línea ~12)

### Opción A: Morado a Azul
```css
/* ANTES */
:root {
    --color-primary: #8B4789;      /* Morado */
    --color-secondary: #D4A5D4;    /* Morado claro */
    --color-accent: #E8C1E8;       /* Morado muy claro */
    --color-bg: #FFF9F7;           /* Crema */
}

/* DESPUÉS */
:root {
    --color-primary: #1E3A8A;      /* Azul oscuro */
    --color-secondary: #93C5FD;    /* Azul claro */
    --color-accent: #DBEAFE;       /* Azul muy claro */
    --color-bg: #F0F9FF;           /* Azul blanco */
}
```

### Opción B: Rosa
```css
:root {
    --color-primary: #EC4899;      /* Rosa */
    --color-secondary: #F472B6;    /* Rosa claro */
    --color-accent: #FBCFE8;       /* Rosa muy claro */
    --color-bg: #FDF2F8;           /* Rosa blanco */
}
```

### Opción C: Verde
```css
:root {
    --color-primary: #059669;      /* Verde */
    --color-secondary: #6EE7B7;    /* Verde claro */
    --color-accent: #D1FAE5;       /* Verde muy claro */
    --color-bg: #F0FDF4;           /* Verde blanco */
}
```

### Opción D: Dorado (Elegante)
```css
:root {
    --color-primary: #B8860B;      /* Dorado oscuro */
    --color-secondary: #DAA520;    /* Dorado */
    --color-accent: #F0E68C;       /* Dorado claro */
    --color-bg: #FFFEF0;           /* Blanco dorado */
}
```

---

## 3. Cambiar Fuentes

**Archivo:** `index.html` (línea ~10)

### Opción A: Fuentes más tradicionales
```html
<!-- ANTES -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">

<!-- DESPUÉS -->
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet">
```

Luego en `styles.css`:
```css
:root {
    --font-heading: 'Cormorant Garamond', serif;
    --font-body: 'Open Sans', sans-serif;
}
```

### Opción B: Fuentes modernas
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Montserrat:wght@300;400;700&display=swap" rel="stylesheet">
```

```css
:root {
    --font-heading: 'Poppins', sans-serif;
    --font-body: 'Montserrat', sans-serif;
}
```

---

## 4. Agregar Más Hoteles

**Archivo:** `index.html` (línea ~53)

```javascript
// ANTES (3 hoteles)
hotels: [
    {
        name: "Hotel Casa Blanca",
        city: "Villa de Leyva",
        website: "https://booking.com"
    },
    {
        name: "Posada de San Antonio",
        city: "Villa de Leyva",
        website: "https://booking.com"
    },
    {
        name: "Hotel Montería Plaza",
        city: "Montería",
        website: "https://booking.com"
    }
]

// DESPUÉS (agregar más)
hotels: [
    {
        name: "Hotel Casa Blanca",
        city: "Villa de Leyva",
        website: "https://booking.com/hotel-casa-blanca"
    },
    // ... los anteriores ...
    {
        name: "Hotel Nuevo Lujo",
        city: "Villa de Leyva",
        website: "https://booking.com/hotel-nuevo-lujo"
    },
    {
        name: "Posada del Río",
        city: "Montería",
        website: "https://booking.com/posada-rio"
    }
]
```

---

## 5. Cambiar el Hashtag

**Archivo:** `index.html` (línea ~43)

```javascript
// ANTES
weddingHashtag: "#DianaYOscar",
instagramHashtag: "DianaYOscar"

// DESPUÉS (sin # en instagramHashtag)
weddingHashtag: "#JuanYMaria2025",
instagramHashtag: "JuanYMaria2025"
```

---

## 6. Cambiar Fecha Límite de RSVP

**Archivo:** `index.html` (línea ~51)

```javascript
// ANTES
rsvpDeadline: "30 de noviembre de 2025",

// DESPUÉS
rsvpDeadline: "31 de octubre de 2025",
```

---

## 7. Cambiar Código de Vestimenta

**Archivo:** `index.html` (línea ~38-40)

```javascript
// ANTES
dressCode: "Formal elegante",
dressCodeDescription: "Vestidos largos para las damas y traje para los caballeros",

// DESPUÉS
dressCode: "Blanco y Plata",
dressCodeDescription: "Vestidos blancos o plateados para damas, traje gris/blanco para caballeros",
```

---

## 8. Agregar Fotos a la Galería

**Archivo:** `index.html` (línea ~365 aprox.)

### Paso 1: Crear carpeta y subir fotos
```
assets/
└── img/
    ├── foto-1.jpg
    ├── foto-2.jpg
    ├── foto-3.jpg
    └── ...
```

### Paso 2: Reemplazar placeholders

```html
<!-- ANTES -->
<div class="gallery-item" data-full-img="placeholder-1">
    <div class="gallery-placeholder">
        <p>Foto de Diana y Oscar</p>
    </div>
</div>

<!-- DESPUÉS -->
<div class="gallery-item" data-full-img="foto-1">
    <img src="assets/img/foto-1.jpg" alt="Diana y Oscar" style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

---

## 9. Cambiar Ubicación (Maps)

**Archivo:** `index.html` (línea ~30, 36)

```javascript
// ANTES
ceremonyMapUrl: "https://maps.google.com/?q=Catedral+San+Jeronimo+Villa+de+Leyva",
receptionMapUrl: "https://maps.google.com/?q=Salon+Recepciones+La+Paz+Monteria",

// DESPUÉS
ceremonyMapUrl: "https://maps.google.com/?q=Iglesia+San+Francisco+Bogota",
receptionMapUrl: "https://maps.google.com/?q=Casa+Blanca+Hotel+Bogota",
```

**Cómo obtener el URL correcto:**
1. Abre Google Maps
2. Busca tu ubicación
3. Copia la URL del navegador (ej: `https://maps.google.com/?q=...`)
4. Pega en el código

---

## 10. Cambiar Hora de la Ceremonia

**Archivo:** `index.html` (línea ~24, 29)

```javascript
// ANTES (6:00 PM)
ceremonyDateTime: "2025-12-13 18:00",
ceremonyTime: "6:00 PM",

// DESPUÉS (3:00 PM)
ceremonyDateTime: "2025-12-13 15:00",
ceremonyTime: "3:00 PM",

// OTRO EJEMPLO (11:00 AM)
ceremonyDateTime: "2025-12-13 11:00",
ceremonyTime: "11:00 AM",
```

---

## 11. Cambiar Ubicación de Ceremonia y Recepción

**Archivo:** `index.html` (línea ~26-36)

```javascript
// ANTES
ceremonyLocation: "Catedral San Jerónimo",
ceremonyCity: "Villa de Leyva, Córdoba",
receptionLocation: "Salón de Recepciones La Paz",
receptionCity: "Montería, Córdoba",

// DESPUÉS
ceremonyLocation: "Iglesia del Sagrado Corazón",
ceremonyCity: "Bogotá, Cundinamarca",
receptionLocation: "Hotel Hilton Garden Inn",
receptionCity: "Bogotá, Cundinamarca",
```

---

## 12. Vincular Tus Google Forms

**Archivo:** `index.html` (línea ~46-48)

### Cómo obtener la URL de Google Forms:

1. Ve a https://forms.google.com
2. Crea un formulario nuevo
3. Agrega tus campos
4. Haz clic en el botón **"Enviar"** (arriba a la derecha)
5. Copia el **Enlace compartible** (la URL corta)
6. Pega en el código:

```javascript
// EJEMPLO
rsvpFormUrl: "https://forms.gle/kB9X2pQ5vT8wN1mZ",
musicFormUrl: "https://forms.gle/aA3d8fGh5pR2mN9x",
suggestionsFormUrl: "https://forms.gle/cC7e3jKl2sT6wQ1y",
```

---

## 13. Cambiar Tamaño de Texto en Móvil

**Archivo:** `assets/css/styles.css` (línea ~500 aprox.)

```css
/* Encontrar esta sección */
@media (max-width: 768px) {
    h2 {
        font-size: 1.7rem;      /* Cambiar este valor */
    }
    
    .hero-title {
        font-size: 2.5rem;      /* O este */
    }
}
```

Valores comunes:
- `1rem` = 16px
- `1.5rem` = 24px
- `2rem` = 32px
- `2.5rem` = 40px

---

## 14. Cambiar Espacios (Padding/Margin)

**Archivo:** `assets/css/styles.css`

```css
/* Espacios generales */
section {
    padding: 4rem 2rem;     /* Cambiar "4rem" para más/menos espacio */
}

.container {
    padding: 2rem;          /* Cambiar "2rem" */
}

/* Espacios en botones */
.btn-primary {
    padding: 0.8rem 2rem;   /* Cambiar valores */
}
```

---

## 15. Activar Modo Oscuro (Dark Mode)

**Archivo:** `assets/css/styles.css` (línea ~17)

La página ya tiene soporte para dark mode automático. Si quieres forzarlo:

```css
@media (prefers-color-scheme: dark) {
    :root {
        --color-text: #E8E8E8;
        --color-bg: #1A1416;
        /* ... más variables ... */
    }
}
```

O el usuario puede cambiar en su navegador:
- Chrome: Menú → Configuración → Apariencia → Tema oscuro

---

## 🎯 Resumen de Cambios Rápidos

| Qué cambiar | Dónde | Línea aprox |
|------------|-------|-----------|
| Nombres | `index.html` | 20-21 |
| Fecha/hora | `index.html` | 24, 29, 35 |
| Ubicaciones | `index.html` | 27-28, 33-34 |
| Hashtag | `index.html` | 43, 73 |
| Colores | `styles.css` | 12-19 |
| Fuentes | `index.html` + `styles.css` | 10, 14-15 |
| Hoteles | `index.html` | 53-70 |
| Google Forms | `index.html` | 46-48 |

---

## ✅ Después de Cada Cambio

1. Guarda el archivo
2. Abre `index.html` en tu navegador (o actualiza si ya está abierto)
3. Verifica que el cambio se vea correctamente
4. Prueba en móvil (abre DevTools con F12, cambia a vista móvil)
5. Si usas Netlify con GitHub: `git push` y espera a que re-depliegue

---

**¡Diviértete personalizando tu invitación! 🎨✨**
