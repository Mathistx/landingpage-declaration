"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import imageLoader from "@/lib/image-loader"

interface LazyImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  threshold?: number
  rootMargin?: string
  quality?: number
  [key: string]: any
}

export default function LazyImage({
  src,
  alt,
  width,
  height,
  className = "",
  threshold = 0.1,
  rootMargin = "200px",
  quality = 75,
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [ref, isInView] = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true,
  })

  // Effect for preloading the image when it is in the viewport
  useEffect(() => {
    if (isInView && !isLoaded && typeof src === "string") {
      const img = new Image()
      img.src = src
      img.onload = () => setIsLoaded(true)
    }
  }, [isInView, isLoaded, src])

  const handleLoadingComplete = () => {
    setIsLoaded(true)
  }

  const defaultSrc = "/placeholder.svg"
  const imageSrc = src || defaultSrc

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {isInView && (
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          loader={imageLoader}
          className={`transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          onLoadingComplete={handleLoadingComplete}
          quality={quality}
          {...props}
        />
      )}
      {!isLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse" style={{ width, height }} />}
    </div>
  )
}
