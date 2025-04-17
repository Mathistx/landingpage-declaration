"use client"

import { useState, useEffect, useRef } from "react"

interface UseIntersectionObserverProps {
  threshold?: number
  rootMargin?: string
  root?: Element | null
  triggerOnce?: boolean
  id?: string | null
  debug?: boolean
}

export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = "0px",
  root = null,
  triggerOnce = true,
  id = null,
  debug = false,
}: UseIntersectionObserverProps = {}) {
  const ref = useRef<Element | null>(null)
  const [isInView, setIsInView] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Create the observer instance lazily to ensure it's not created during SSR
    if (!observerRef.current && typeof window !== "undefined" && "IntersectionObserver" in window) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries && entries.length > 0) {
            const entry = entries[0]

            // If debug is enabled, log intersection information
            if (debug) {
              console.log(`Element ${id || "unknown"} intersection:`, entry.isIntersecting, entry.intersectionRatio)
            }

            // If triggerOnce is true, only trigger the animation once
            if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
              setIsInView(true)
              if (triggerOnce) {
                setHasTriggered(true)

                // If we only need to trigger once and it's triggered, disconnect the observer
                if (observerRef.current && ref.current) {
                  observerRef.current.unobserve(ref.current)
                }
              }
            } else if (!triggerOnce) {
              // If triggerOnce is false, update isInView on every change
              setIsInView(entry.isIntersecting)
            }
          }
        },
        { threshold, rootMargin, root },
      )
    }

    const currentRef = ref.current
    const currentObserver = observerRef.current

    if (currentRef && currentObserver) {
      currentObserver.observe(currentRef)
    }

    return () => {
      if (currentRef && currentObserver) {
        currentObserver.unobserve(currentRef)
      }
    }
  }, [threshold, rootMargin, root, triggerOnce, hasTriggered, id, debug])

  // Add a fallback for browsers that don't support IntersectionObserver
  useEffect(() => {
    if (typeof window !== "undefined" && !("IntersectionObserver" in window) && !isInView) {
      // If IntersectionObserver is not supported, simply set isInView to true
      setIsInView(true)
      setHasTriggered(true)
    }
  }, [isInView])

  return [ref, isInView, id] as const
}
