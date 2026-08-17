# 🎵 Música y Audio

Coloca aquí archivos de audio para tu invitación de boda.

## Formatos soportados
- MP3
- OGG
- WAV
- M4A

## Casos de uso

Este directorio está listo para:
- Música de fondo
- Canciones especiales
- Audio para videos
- Efecto de sonido
- Presentaciones multimedia

## Nota actual

La invitación no incluye reproductor de música de fondo integrado en esta versión. Si deseas agregar música, tendrías que:

1. Editar `index.html` para añadir un `<audio>` tag
2. Apuntar a `assets/music/nombre-cancion.mp3`
3. Configurar atributos (`autoplay`, `loop`, `controls`, etc.)

## Ejemplo

```html
<audio controls autoplay loop>
    <source src="assets/music/fondo.mp3" type="audio/mpeg">
    Tu navegador no soporta audio HTML5
</audio>
```

## Recomendación

- Usa MP3 para máxima compatibilidad
- Comprime antes de subir (idealmente <5MB)
- Considera el ancho de banda de tus invitados

¡Disponible para cuando quieras agregar una banda sonora! 🎶
