"use client"

import type React from "react"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { fadeIn, staggerContainer, scaleIn } from "@/lib/animation-variants"

export default function PricingSection() {
  const [pricingRef, pricingInView] = useIntersectionObserver({ threshold: 0.1 })

  // Define features for all plans to ensure consistent structure
  const features = [
    "Revenus salariés et pensions",
    "Avantages fiscaux simples : dons, garde d'enfants, PER...",
    "Recherche de plus de 400 déductions pour maximiser votre remboursement.",
    "Investissements financiers",
    "Comptes à l'étranger",
    "Avantages fiscaux complexes : Girardin, GFI, Sofica...",
    "Professions libérales, indépendants, autres revenus",
    "Revenus immobiliers",
  ]

  // Define which features are included in each plan
  const basicFeatures = [0, 1, 2]
  const deluxeFeatures = [0, 1, 2, 3, 4, 5, 6]
  const premiumFeatures = [0, 1, 2, 3, 4, 5, 6, 7]

  return (
    <section
      id="pricing"
      className="w-full py-8 md:py-12 lg:py-24 bg-green-50"
      ref={pricingRef as React.RefObject<HTMLElement>}
    >
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial="hidden"
          animate={pricingInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-600">Tarifs</div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter md:text-4xl">
              Choisissez l'offre adaptée à votre situation
            </h2>
            <p className="max-w-[900px] text-gray-500 text-sm md:text-base lg:text-xl">
              Des tarifs transparents et adaptés pour tous vos besoins fiscaux.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:gap-5 md:gap-6 py-6 sm:py-8 md:py-12 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={pricingInView ? "visible" : "hidden"}
        >
          {/* Formule Basic */}
          <motion.div
            className="flex flex-col rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md h-full"
            variants={scaleIn}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Basic</h3>
              <p className="text-gray-500 text-base h-[60px]">Pour les situations simples avec des revenus salariés</p>
            </div>
            <div className="mt-4 flex items-baseline text-gray-900">
              <span className="text-4xl font-bold">69,90 €</span>
            </div>

            <ul className="mt-6 space-y-4 flex-grow">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  {basicFeatures.includes(index) ? (
                    <>
                      <CheckCircle2 className="mr-3 h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-base">{feature}</span>
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-3 h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                      <span className="text-base text-gray-400">{feature}</span>
                    </>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-6">
              <Button
                className="w-full bg-green-600 hover:bg-green-700 transition-all duration-300 hover:shadow-lg text-base py-4 px-6 rounded-md font-medium"
                style={{ fontSize: "calc(1em * 1.2)" }}
                asChild
              >
                <a href="https://djhessjrhcc.typeform.com/taxcut">Commencer gratuitement</a>
              </Button>
            </div>
          </motion.div>

          {/* Formule Deluxe */}
          <motion.div
            className="flex flex-col rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md relative h-full"
            variants={scaleIn}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Deluxe</h3>
              <p className="text-gray-500 text-base h-[60px]">
                Pour les particuliers, indépendants et professions libérales avec investissements
              </p>
            </div>
            <div className="mt-4 flex items-baseline text-gray-900">
              <span className="text-4xl font-bold">99,90 €</span>
            </div>

            <ul className="mt-6 space-y-4 flex-grow">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  {deluxeFeatures.includes(index) ? (
                    <>
                      <CheckCircle2 className="mr-3 h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-base">{feature}</span>
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-3 h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                      <span className="text-base text-gray-400">{feature}</span>
                    </>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-6">
              <Button
                className="w-full bg-green-600 hover:bg-green-700 transition-all duration-300 hover:shadow-lg text-base py-4 px-6 rounded-md font-medium"
                style={{ fontSize: "calc(1em * 1.2)" }}
                asChild
              >
                <a href="https://djhessjrhcc.typeform.com/taxcut">Commencer gratuitement</a>
              </Button>
            </div>
          </motion.div>

          {/* Formule Premium */}
          <motion.div
            className="flex flex-col rounded-lg border-2 border-green-600 bg-white p-6 shadow-md transition-all hover:shadow-lg relative h-full"
            variants={scaleIn}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <motion.div
              className="absolute -top-4 left-0 right-0 flex justify-center"
              initial={{ opacity: 0, y: -10 }}
              animate={pricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <div className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Le plus populaire
              </div>
            </motion.div>
            <div className="space-y-2 mt-2">
              <h3 className="text-2xl font-bold">Premium</h3>
              <p className="text-gray-500 text-base h-[60px]">
                Pour les propriétaires et les particuliers avec des situations complexes
              </p>
            </div>
            <div className="mt-4 flex items-baseline text-gray-900">
              <span className="text-4xl font-bold">129,90 €</span>
            </div>

            <ul className="mt-6 space-y-4 flex-grow">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  {premiumFeatures.includes(index) ? (
                    <>
                      <CheckCircle2 className="mr-3 h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-base">{feature}</span>
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-3 h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                      <span className="text-base text-gray-400">{feature}</span>
                    </>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-6">
              <Button
                className="w-full bg-green-600 hover:bg-green-700 transition-all duration-300 hover:shadow-lg text-base py-4 px-6 rounded-md font-medium"
                style={{ fontSize: "calc(1em * 1.2)" }}
                asChild
              >
                <a href="https://djhessjrhcc.typeform.com/taxcut">Commencer gratuitement</a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
