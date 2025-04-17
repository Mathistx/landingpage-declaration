// Fonction pour envoyer des événements d'analyse
export function trackEvent(eventName: string, eventProperties?: Record<string, any>) {
  // Implémentation pour Google Analytics, Mixpanel, etc.
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventProperties)
  }
}

// Fonction pour suivre les performances Web Vitals
export function trackWebVitals(metric: any) {
  const { id, name, value } = metric

  trackEvent("web-vitals", {
    metric_id: id,
    metric_name: name,
    metric_value: Math.round(name === "CLS" ? value * 1000 : value),
  })
}
