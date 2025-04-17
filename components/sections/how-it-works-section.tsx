"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { fadeIn, staggerContainer, scaleIn } from "@/lib/animation-variants"

export default function HowItWorksSection() {
  const [howItWorksRef, howItWorksInView] = useIntersectionObserver({ threshold: 0.1 })

  const steps = [
    {
      step: "1",
      title: "Répondez à quelques questions",
      description:
        "Répondez à quelques questions simples sur votre situation fiscale. Nous aurons tout ce qu'il faut pour commencer à préparer votre déclaration d'impôts.",
    },
    {
      step: "2",
      title: "Vous êtes mis en relation avec un expert fiscal",
      description:
        "Vous serez mis en relation avec un véritable expert agréé, le plus adapté pour préparer votre déclaration. Il sera disponible pour répondre à vos questions à tout moment.",
    },
    {
      step: "3",
      title: "Nous remplissons votre déclaration pour vous",
      description:
        "Un expert fiscal fait et vérifie votre déclaration pour s'assurer que tout est correct et optimisé avant l'envoi à l'administration fiscale.",
    },
  ]

  return (
    <section
      id="how-it-works"
      className="w-full py-8 md:py-12 lg:py-24 bg-white"
      ref={howItWorksRef as React.RefObject<HTMLElement>}
    >
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial="hidden"
          animate={howItWorksInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter md:text-4xl">Comment ça marche ?</h2>
          <p className="mt-3 md:mt-4 text-base md:text-xl text-gray-500 max-w-3xl mx-auto">
            Trois étapes simples pour une déclaration d'impôts sans stress
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:mt-12"
          variants={staggerContainer}
          initial="hidden"
          animate={howItWorksInView ? "visible" : "hidden"}
        >
          {steps.map((item, index) => (
            <motion.div key={index} className="flex flex-col items-center text-center" variants={scaleIn}>
              <motion.div
                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-2xl font-bold text-green-600">{item.step}</span>
              </motion.div>

              {/* Fixed height container for title to ensure alignment */}
              <div className="h-[60px] md:h-[72px] flex items-center justify-center mb-3">
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>

              {/* Fixed height container for description to ensure alignment */}
              <div className="h-[150px] md:h-[120px] flex items-start">
                <p className="text-base text-gray-500">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={howItWorksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button
            className="bg-green-600 hover:bg-green-700 w-full sm:w-auto transition-all duration-300 hover:shadow-lg"
            style={{ fontSize: "calc(1em * 1.2)" }}
            asChild
          >
            <a href="https://djhessjrhcc.typeform.com/taxcut">Commencer ma déclaration</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
