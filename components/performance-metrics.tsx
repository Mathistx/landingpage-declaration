"use client"

import { useEffect, useState } from "react"

export default function PerformanceMetrics() {
  const [metrics, setMetrics] = useState<{
    fcp: number | null
    lcp: number | null
    cls: number | null
    fid: number | null
  }>({
    fcp: null,
    lcp: null,
    cls: null,
    fid: null,
  })

  useEffect(() => {
    // Ne s'exécute que dans un environnement de développement
    if (process.env.NODE_ENV !== "development") {
      return
    }

    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      if (entries.length > 0) {
        const fcp = entries[0]
        setMetrics((prev) => ({ ...prev, fcp: fcp.startTime }))
      }
    })
    fcpObserver.observe({ type: "paint", buffered: true })

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      if (entries.length > 0) {
        const lcp = entries[entries.length - 1]
        setMetrics((prev) => ({ ...prev, lcp: lcp.startTime }))
      }
    })
    lcpObserver.observe({ type: "largest-contentful-paint", buffered: true })

    // Cumulative Layout Shift
    const clsObserver = new PerformanceObserver((entryList) => {
      let clsValue = 0
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += (entry as any).value
        }
      }
      setMetrics((prev) => ({ ...prev, cls: clsValue }))
    })
    clsObserver.observe({ type: "layout-shift", buffered: true })

    // First Input Delay
    const fidObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      if (entries.length > 0) {
        const fid = entries[0]
        setMetrics((prev) => ({ ...prev, fid: fid.processingStart - fid.startTime }))
      }
    })
    fidObserver.observe({ type: "first-input", buffered: true })

    return () => {
      fcpObserver.disconnect()
      lcpObserver.disconnect()
      clsObserver.disconnect()
      fidObserver.disconnect()
    }
  }, [])

  if (process.env.NODE_ENV !== "development") {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 z-50 bg-black bg-opacity-80 text-white p-2 text-xs">
      <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : "Measuring..."}</div>
      <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : "Measuring..."}</div>
      <div>CLS: {metrics.cls !== null ? metrics.cls.toFixed(4) : "Measuring..."}</div>
      <div>FID: {metrics.fid ? `${metrics.fid.toFixed(2)}ms` : "Waiting for input..."}</div>
    </div>
  )
}
