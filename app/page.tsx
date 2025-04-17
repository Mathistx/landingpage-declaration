"use client"

import { useState, useEffect, useCallback, Suspense, lazy } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { StructuredData, createFAQStructuredData, createServiceStructuredData } from "@/components/seo/structured-data"
import { loadAnalytics } from "@/lib/script-loader"
import { trackWebVitals } from "@/lib/performance-monitoring"

// Dynamically import sections for code splitting
const HowItWorksSection = lazy(() => import("@/components/sections/how-it-works-section"))
const PricingSection = lazy(() => import("@/components/sections/pricing-section"))
const ExpertSection = lazy(() => import("@/components/sections/expert-section"))
const StartingSection = lazy(() => import("@/components/sections/starting-section"))
const TestimonialsSection = lazy(() => import("@/components/sections/testimonials-section"))
const WhyChooseSection = lazy(() => import("@/components/sections/why-choose-section"))
const FaqSection = lazy(() => import("@/components/sections/faq-section"))
const CtaSection = lazy(() => import("@/components/sections/cta-section"))

// Accordion styles
const accordionStyles = `
  .accordion-content {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.3s ease-in-out;
  }
  
  .accordion-content[data-state="open"] {
    max-height: 1000px;
  }
  
  .accordion-trigger[data-state="open"] > svg {
    transform: rotate(180deg);
  }
`

// FAQ data for structured data
const faqItems = [
  {
    question: "Comment fonctionne TaxCut ?",
    answer:
      "Nos conseillers vous accompagnent pas à pas dans votre déclaration d'impôts. Vous répondez à des questions simples, échangez avec un expert et importez vos documents en toute sécurité. Une fois vos pièces reçues, nos experts vous informent dès que votre déclaration est finalisée !",
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer:
      "Absolument. Nous utilisons un système de chiffrement pour protéger vos informations personnelles et financières. Vos données ne sont jamais partagées avec des tiers sans votre consentement explicite.",
  },
  {
    question: "Quelle est la différence entre les offres Basic, Deluxe et Premium ?",
    answer:
      "L'offre Basic couvre uniquement les revenus salariés pour les situations simples. L'offre Deluxe inclut les revenus salariés et les investissements financiers. L'offre Premium ajoute les revenus immobiliers, les revenus des indépendants et un support prioritaire par téléphone.",
  },
  {
    question: "Pourquoi est-ce si peu cher ?",
    answer:
      "Chez TaxCut, notre mission est de rendre le conseil fiscal accessible à tous. Grâce à des outils digitaux performants, nous automatisons une partie du processus, ce qui nous permet de traiter un plus grand volume et ainsi proposer des tarifs plus abordables.",
  },
  {
    question: "Quelles sont les accréditations de TaxCut ?",
    answer:
      "TaxCut est accréditée par l'administration fiscale en tant que tiers déclarant. Nous sommes également enregistrés auprès de l'Autorité des Marchés Financiers (AMF) et agréés en tant qu'intermédiaire en assurance. Ces accréditations, dont notre immatriculation ORIAS n°24004312, témoignent de notre sérieux et de notre conformité aux normes réglementaires les plus strictes.",
  },
]

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState("")

  // Load analytics in production
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      loadAnalytics()
    }

    // Track web vitals
    if (typeof window !== "undefined" && "performance" in window) {
      // Report web vitals
      if ("getEntriesByType" in performance) {
        const navEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming
        if (navEntry) {
          trackWebVitals({
            name: "TTFB",
            value: navEntry.responseStart,
            id: "ttfb",
          })
        }
      }
    }
  }, [])

  // Add a scroll event listener to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["how-it-works", "pricing", "testimonials", "faq"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && element.getBoundingClientRect().top <= 100 && element.getBoundingClientRect().bottom > 0) {
          setActiveSection(section)
          return
        }
      }

      setActiveSection("")
    }

    // Use passive: true for better performance
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Handle navigation click
  const handleNavClick = useCallback((e, sectionId) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      })
    }
  }, [])

  // Add smooth scroll behavior to the document
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  // Force visibility of important buttons after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      const buttons = document.querySelectorAll(".cta-button")
      buttons.forEach((button) => {
        if (button instanceof HTMLElement) {
          button.style.opacity = "1"
          button.style.transform = "translateY(0)"
        }
      })
    }, 2000) // 2 seconds delay

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Structured data for SEO */}
      <StructuredData data={createFAQStructuredData(faqItems)} />
      <StructuredData data={createServiceStructuredData()} />

      {/* Global styles */}
      <style jsx global>
        {accordionStyles}
      </style>

      {/* Header */}
      <Header activeSection={activeSection} onNavClick={handleNavClick} />

      {/* Main content */}
      <main className="flex-1">
        {/* Hero section - loaded immediately */}
        <HeroSection />

        {/* Other sections - lazy loaded */}
        <Suspense fallback={<div className="w-full h-32 bg-gray-100 animate-pulse"></div>}>
          <HowItWorksSection />
        </Suspense>

        <Suspense fallback={<div className="w-full h-32 bg-gray-100 animate-pulse"></div>}>
          <PricingSection />
        </Suspense>

        <Suspense fallback={<div className="w-full h-32 bg-gray-100 animate-pulse"></div>}>
          <ExpertSection />
        </Suspense>

        <Suspense fallback={<div className="w-full h-32 bg-gray-100 animate-pulse"></div>}>
          <StartingSection />
        </Suspense>

        <Suspense fallback={<div className="w-full h-32 bg-gray-100 animate-pulse"></div>}>
          <TestimonialsSection />
        </Suspense>

        <Suspense fallback={<div className="w-full h-32 bg-gray-100 animate-pulse"></div>}>
          <WhyChooseSection />
        </Suspense>

        <Suspense fallback={<div className="w-full h-32 bg-gray-100 animate-pulse"></div>}>
          <FaqSection faqItems={faqItems} />
        </Suspense>

        <Suspense fallback={<div className="w-full h-32 bg-gray-100 animate-pulse"></div>}>
          <CtaSection />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />

      {/* Performance metrics display has been removed */}
    </div>
  )
}
