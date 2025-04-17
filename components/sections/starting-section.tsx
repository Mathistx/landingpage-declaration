"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { fadeIn, staggerContainer } from "@/lib/animation-variants"
import { OptimizedImage } from "@/components/ui/optimized-image"

export default function StartingSection() {
  const [startingRef, startingInView] = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section className="w-full py-8 md:py-12 lg:py-24 bg-green-50" ref={startingRef as React.RefObject<HTMLElement>}>
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image container - hidden on small screens, shown at top on medium screens, shown on left on large screens */}
          <motion.div
            className="relative order-2 lg:order-1 hidden sm:block"
            initial={{ opacity: 0, x: -20 }}
            animate={startingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative max-w-md mx-auto lg:max-w-full lg:w-[90%] xl:w-[85%]">
              {/* Apply rounded corners to the image wrapper */}
              <div className="rounded-lg overflow-hidden shadow-md">
                <OptimizedImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Photo-Objectif%201-OjskVmkpXuLaD072XB7hBTyjqLWady.png"
                  alt="Couple regardant ensemble leur déclaration d'impôts sur un ordinateur portable"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content container */}
          <motion.div
            className="flex flex-col justify-center space-y-6 md:space-y-8 order-1 lg:order-2"
            initial="hidden"
            animate={startingInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl">Démarrer est simple</h2>
            </div>

            {/* Mobile image - only shown on smallest screens */}
            <motion.div
              className="relative sm:hidden order-2 my-4"
              initial={{ opacity: 0, y: 20 }}
              animate={startingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative max-w-xs mx-auto">
                {/* Apply rounded corners to the mobile image wrapper */}
                <div className="rounded-lg overflow-hidden shadow-md">
                  <OptimizedImage
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Photo-Objectif%201-OjskVmkpXuLaD072XB7hBTyjqLWady.png"
                    alt="Couple regardant ensemble leur déclaration d'impôts sur un ordinateur portable"
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-4 md:space-y-6"
              variants={staggerContainer}
              initial="hidden"
              animate={startingInView ? "visible" : "hidden"}
            >
              {[
                {
                  title: "Personnalisé pour vous",
                  description:
                    "Soyez mis en relation avec un expert fiscal qui correspond exactement à vos besoins, plutôt qu'une approche standardisée.",
                },
                {
                  title: "Support expert où que vous soyez",
                  description:
                    "Nous ne sommes pas un service fiscal ouvert de 9h à 17h. Connectez-vous avec votre expert de n'importe où, même le soir et le week-end pendant la période fiscale.",
                },
                {
                  title: "Garantie de service complet",
                  description:
                    "Votre expert examine votre déclaration avec vous et répond à toutes vos questions, assurant le meilleur résultat possible avant le dépôt — précision 100% garantie.",
                },
                {
                  title: "Gardez le même expert fiscal",
                  description:
                    "Choisissez de travailler avec le même expert fiscal qui connaît votre situation et vos besoins fiscaux, année après année.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-3 md:gap-4 items-start bg-white rounded-lg p-3 md:p-4 shadow-sm transition-all hover:shadow-md"
                  variants={fadeIn}
                  whileHover={{
                    y: -3,
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-green-100 rounded-full p-1.5 md:p-2">
                      <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-base md:text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="pt-2 md:pt-4 flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={startingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button
                className="bg-green-600 hover:bg-green-700 px-6 py-4 md:px-8 md:py-6 text-base md:text-lg w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ fontSize: "calc(1em * 1.2)" }}
                asChild
              >
                <a href="https://djhessjrhcc.typeform.com/taxcut">
                  <div className="flex flex-col items-center">
                    <span>Commencer gratuitement</span>
                  </div>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
