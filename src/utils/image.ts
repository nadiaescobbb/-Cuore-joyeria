/**
 * Utilidad para construir la URL de una imagen.
 * Si la variable de entorno VITE_CDN_URL está definida, se utilizará como prefijo base (ej. Cloudinary).
 * De lo contrario, se usará la ruta local relativa a la carpeta /public.
 * 
 * @param path Ruta local de la imagen, ej: '/images/hero.avif'
 * @returns URL completa o ruta local
 */
export function getImageUrl(path: string): string {
  // Asegurarse de que el path comience con un slash si no lo tiene
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Extraer el CDN URL desde Vite Env
  const cdnUrl = import.meta.env.VITE_CDN_URL;

  if (cdnUrl) {
    // Si hay CDN, se concatena (quitando un posible trailing slash en el cdnUrl)
    return `${cdnUrl.replace(/\/$/, '')}${normalizedPath}`;
  }

  // Comportamiento por defecto (entorno local)
  return normalizedPath;
}
