# 🎬 Videos

Coloca aquí videos que quieras usar en tu invitación de boda.

## Formatos soportados
- MP4
- WebM
- OGG

## Casos de uso

Este directorio está listo para:
- Videos de presentación
- Clips del día
- Resúmenes de la pareja
- Música con imágenes fondo
- Cualquier multimedia que decidas agregar

## Nota actual

La invitación no incluye reproductor de video integrado en esta versión. Si deseas agregar videos, tendrías que:

1. Editar `index.html` para añadir un `<video>` tag
2. Apuntar a `assets/video/nombre-video.mp4`
3. Configurar controles y autoplay según prefieras

## Ejemplo

```html
<video width="100%" controls autoplay muted>
    <source src="assets/video/presentacion.mp4" type="video/mp4">
    Tu navegador no soporta video HTML5
</video>
```

¡Disponible para cuando lo necesites! 🎥
