import type React from "react"

interface StructuredDataProps {
  data: Record<string, any>
}

export const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export const createFAQStructuredData = (faqs: { question: string; answer: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export const createServiceStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Déclaration d'impôts TaxCut",
    description: "Service de déclaration d'impôts en ligne avec accompagnement par des experts fiscaux",
    provider: {
      "@type": "Organization",
      name: "TaxCut",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20-%20fv-mLsBDX1iCXu0Igu0LzyzB7Re0sNlOR.png",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: "69.90",
      highPrice: "129.90",
      offerCount: "3",
    },
  }
}
