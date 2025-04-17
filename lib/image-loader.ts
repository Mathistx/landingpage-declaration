type ImageLoaderProps = {
  src: string
  width: number
  quality?: number
}

// Optimiseur d'images personnalisé pour Next.js
export default function imageLoader({ src, width, quality = 75 }: ImageLoaderProps) {
  // Si l'image est déjà une URL externe (comme une URL Blob), la retourner directement
  if (typeof src === "string" && src.startsWith("http")) {
    return src
  }

  // Pour les images locales, on pourrait utiliser un service d'optimisation d'images
  // comme Cloudinary, Imgix, etc.
  // Ici, on simule simplement un paramètre de redimensionnement
  return `${src}?w=${width}&q=${quality}`
}
