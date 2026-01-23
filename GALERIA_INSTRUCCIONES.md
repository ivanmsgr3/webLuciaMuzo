# Instrucciones para Añadir Fotos a la Galería

## 📸 Cómo añadir tus fotos de trabajos

### Paso 1: Preparar las imágenes

1. Selecciona tus mejores 6 trabajos de maquillaje
2. Renombra las imágenes como:
   - `trabajo-1.jpg`
   - `trabajo-2.jpg`
   - `trabajo-3.jpg`
   - `trabajo-4.jpg`
   - `trabajo-5.jpg`
   - `trabajo-6.jpg`

### Paso 2: Colocar las imágenes

Copia las imágenes en la carpeta:
```
public/gallery/
```

### Paso 3: Activar las imágenes en el código

Abre el archivo `components/Gallery.tsx` y:

1. Busca esta línea (aproximadamente línea 75):
```tsx
{/* Uncomment when you have real images */}
```

2. Descomenta (quita los `{/*` y `*/}`) las siguientes líneas:
```tsx
<img 
  src={image.src} 
  alt={image.alt}
  className={styles.carouselImage}
/>
```

3. Comenta o elimina el bloque `imagePlaceholder` si ya no lo necesitas.

### Paso 4: Personalizar descripciones

En el array `images` (línea 13), actualiza las descripciones `alt`:

```tsx
const images = [
  { src: '/gallery/trabajo-1.jpg', alt: 'Tu descripción aquí' },
  { src: '/gallery/trabajo-2.jpg', alt: 'Tu descripción aquí' },
  // ... etc
];
```

## 🎨 Recomendaciones para las imágenes

- **Formato**: JPG o WebP
- **Tamaño recomendado**: 1920x1080px (Full HD)
- **Orientación**: Horizontal preferiblemente
- **Peso**: Optimiza las imágenes (máx 500KB cada una)
- **Calidad**: Alta resolución para mostrar detalles del maquillaje

## ✨ Características del Carrusel

- ✅ Auto-play cada 5 segundos
- ✅ Navegación con flechas
- ✅ Navegación con puntos
- ✅ Miniaturas clicables
- ✅ Contador de imágenes
- ✅ Transiciones suaves y espectaculares
- ✅ Efecto 3D con imágenes laterales
- ✅ Pausa al pasar el mouse

## 🔧 Añadir más imágenes

Si quieres más de 6 imágenes, simplemente añade más objetos al array:

```tsx
const images = [
  { src: '/gallery/trabajo-1.jpg', alt: 'Descripción 1' },
  { src: '/gallery/trabajo-2.jpg', alt: 'Descripción 2' },
  // ... añade todas las que quieras
  { src: '/gallery/trabajo-10.jpg', alt: 'Descripción 10' },
];
```

¡El carrusel se adaptará automáticamente!
