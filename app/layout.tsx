import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import Script from "next/script"

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

// Optimized metadata for SEO
export const metadata: Metadata = {
  metadataBase: new URL("https://taxcut.fr"),
  title: "TaxCut - Simplifiez votre déclaration d'impôts",
  description:
    "Optimisez vos impôts et maximisez vos réductions fiscales en toute simplicité avec notre plateforme intuitive. Experts fiscaux disponibles pour vous accompagner.",
  keywords: "déclaration impôts, optimisation fiscale, réduction impôts, expert fiscal, taxcut",
  authors: [{ name: "TaxCut" }],
  creator: "TaxCut",
  publisher: "TaxCut",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/fr",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "TaxCut - Simplifiez votre déclaration d'impôts",
    description:
      "Optimisez vos impôts et maximisez vos réductions fiscales en toute simplicité avec notre plateforme intuitive.",
    url: "https://taxcut.fr",
    siteName: "TaxCut",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20-%20fv-mLsBDX1iCXu0Igu0LzyzB7Re0sNlOR.png",
        width: 800,
        height: 600,
        alt: "Logo TaxCut",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TaxCut - Simplifiez votre déclaration d'impôts",
    description:
      "Optimisez vos impôts et maximisez vos réductions fiscales en toute simplicité avec notre plateforme intuitive.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20-%20fv-mLsBDX1iCXu0Igu0LzyzB7Re0sNlOR.png",
    ],
    creator: "@taxcut",
    site: "@taxcut",
  },
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20-%20fv-mLsBDX1iCXu0Igu0LzyzB7Re0sNlOR.png",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20-%20fv-mLsBDX1iCXu0Igu0LzyzB7Re0sNlOR.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20-%20fv-mLsBDX1iCXu0Igu0LzyzB7Re0sNlOR.png",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
    yandex: "verification_token",
  },
  category: "finance",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20-%20fv-mLsBDX1iCXu0Igu0LzyzB7Re0sNlOR.png"
        />
        <link
          rel="apple-touch-icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20-%20fv-mLsBDX1iCXu0Igu0LzyzB7Re0sNlOR.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#16a34a" />
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />

        {/* Preload critical assets */}
        <link rel="preload" href="/images/hero-image.png" as="image" type="image/png" />

        {/* Organization schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TaxCut",
              url: "https://taxcut.fr",
              logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20-%20fv-mLsBDX1iCXu0Igu0LzyzB7Re0sNlOR.png",
              description:
                "Optimisez vos impôts et maximisez vos réductions fiscales en toute simplicité avec notre plateforme intuitive.",
              sameAs: [
                "https://www.facebook.com/taxcut",
                "https://twitter.com/taxcut",
                "https://www.linkedin.com/company/taxcut",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+33-1-23-45-67-89",
                contactType: "customer service",
                availableLanguage: ["French", "English"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Avenue des Champs-Élysées",
                addressLocality: "Paris",
                postalCode: "75008",
                addressCountry: "FR",
              },
            }),
          }}
        />

        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11471781268" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11471781268');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}


import './globals.css'