"use client"

import { useState } from "react"
import Image from "next/image"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  quality?: number
}

export function OptimizedImage(props: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  // Extract props with defaults
  const src = props.src || "/placeholder.svg"
  const alt = props.alt || ""
  const width = props.width || 100
  const height = props.height || 100
  const className = props.className || ""
  const priority = props.priority || false
  const quality = props.quality || 75

  // Handle image load complete
  function handleLoadComplete() {
    setIsLoaded(true)
  }

  return (
    <div className="relative w-full h-full">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        priority={priority}
        className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"} ${className}`}
        onLoadingComplete={handleLoadComplete}
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
      />
      {!isLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}
    </div>
  )
}
