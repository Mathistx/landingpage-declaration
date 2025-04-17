type ScriptProps = {
  src: string
  id?: string
  async?: boolean
  defer?: boolean
  onLoad?: () => void
}

export function loadScript({ src, id, async = true, defer = true, onLoad }: ScriptProps): Promise<void> {
  return new Promise((resolve, reject) => {
    // Check if the script already exists
    if (id && document.getElementById(id)) {
      resolve()
      return
    }

    const script = document.createElement("script")
    script.src = src
    if (id) script.id = id
    script.async = async
    script.defer = defer

    script.onload = () => {
      if (onLoad) onLoad()
      resolve()
    }

    script.onerror = (error) => {
      reject(error)
    }

    document.head.appendChild(script)
  })
}

export function loadAnalytics() {
  // Only load analytics in production
  if (process.env.NODE_ENV !== "production") return

  // Google Analytics example
  loadScript({
    src: `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`,
    id: "ga-script",
    async: true,
    onLoad: () => {
      window.dataLayer = window.dataLayer || []
      function gtag(...args: any[]) {
        window.dataLayer.push(args)
      }
      gtag("js", new Date())
      gtag("config", process.env.NEXT_PUBLIC_GA_ID)
    },
  })
}
