import type React from "react"
import dynamic from "next/dynamic"

// Helper function to create dynamically imported components with loading state
export function createDynamicComponent<T>(
  importFunc: () => Promise<{ default: React.ComponentType<T> }>,
  options = {},
) {
  return dynamic(importFunc, {
    loading: () => <div className="w-full h-32 bg-gray-100 animate-pulse rounded-md"></div>,
    ssr: true,
    ...options,
  })
}
