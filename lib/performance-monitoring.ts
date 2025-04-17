export type PerformanceMetric = {
  name: string
  value: number
  rating: "good" | "needs-improvement" | "poor"
}

// Define thresholds based on Core Web Vitals
const thresholds = {
  FCP: { good: 1800, poor: 3000 }, // First Contentful Paint (ms)
  LCP: { good: 2500, poor: 4000 }, // Largest Contentful Paint (ms)
  FID: { good: 100, poor: 300 }, // First Input Delay (ms)
  CLS: { good: 0.1, poor: 0.25 }, // Cumulative Layout Shift (unitless)
  TTFB: { good: 800, poor: 1800 }, // Time to First Byte (ms)
}

export function getRating(name: string, value: number): "good" | "needs-improvement" | "poor" {
  const threshold = thresholds[name as keyof typeof thresholds]
  if (!threshold) return "needs-improvement"

  if (value <= threshold.good) return "good"
  if (value >= threshold.poor) return "poor"
  return "needs-improvement"
}

export function trackWebVitals(metric: any) {
  const { name, value, id } = metric

  // Get the appropriate rating
  const rating = getRating(name, name === "CLS" ? value * 1000 : value)

  // Log to console in development
  if (process.env.NODE_ENV === "development") {
    console.log(`${name}: ${value} (${rating})`)
  }

  // Send to analytics in production
  if (process.env.NODE_ENV === "production") {
    // Example: Send to Google Analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", name, {
        value: Math.round(name === "CLS" ? value * 1000 : value),
        metric_id: id,
        metric_value: value,
        metric_rating: rating,
      })
    }
  }

  return { name, value, rating }
}
