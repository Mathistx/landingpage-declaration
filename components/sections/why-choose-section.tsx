"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { fadeIn, staggerContainer, scaleIn } from "@/lib/animation-variants"

export default function WhyChooseSection() {
  const [whyChooseRef, whyChooseInView] = useIntersectionObserver({ threshold: 0.2, rootMargin: "100px" })

  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green-600 md:w-8 md:h-8"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: "Gain de temps",
      description:
        "Finissez votre déclaration en moins de 30 minutes. Envoyez vos documents et nos experts se chargent du reste.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green-600 md:w-8 md:h-8"
          aria-hidden="true"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      title: "Gain d'argent",
      description:
        "Les prix les plus bas du marché, à partir de 49,90 € seulement. Nous vous garantissons également de trouver toutes les déductions fiscales auxquelles vous avez droit pour maximiser votre remboursement.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green-600 md:w-8 md:h-8"
          aria-hidden="true"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: "Garantie totale",
      description:
        "Exactitude de votre déclaration garantie à 100% ou remboursé. Si une erreur est détectée dans votre déclaration, nous vous remboursons intégralement.",
    },
  ]

  return (
    <section className="w-full py-8 md:py-12 lg:py-24 bg-white" ref={whyChooseRef as React.RefObject<HTMLElement>}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial="hidden"
          animate={whyChooseInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter md:text-4xl mb-2 md:mb-4">
            Pourquoi choisir TaxCut ?
          </h2>
          <p className="max-w-[900px] mx-auto text-gray-500 text-sm md:text-base lg:text-xl">
            Nous vous offrons la meilleure expérience pour votre déclaration d'impôts
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={whyChooseInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div key={index} className="flex flex-col items-center text-center" variants={scaleIn}>
              <motion.div
                className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 md:mb-6"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm md:text-base">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="flex justify-center mt-8 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button
            className="bg-green-600 hover:bg-green-700 w-full sm:w-auto transition-all duration-300 hover:shadow-lg cta-button"
            style={{ fontSize: "calc(1em * 1.2)" }}
            asChild
          >
            <a href="https://djhessjrhcc.typeform.com/taxcut">Commencer maintenant</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
