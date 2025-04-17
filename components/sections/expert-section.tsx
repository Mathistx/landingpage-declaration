"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { fadeIn } from "@/lib/animation-variants"
import { OptimizedImage } from "@/components/ui/optimized-image"

export default function ExpertSection() {
  const [expertRef, expertInView] = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section className="w-full py-8 md:py-12 lg:py-24 bg-white" ref={expertRef as React.RefObject<HTMLElement>}>
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <motion.div
            className="flex flex-col justify-center space-y-4 order-1 lg:order-1"
            initial="hidden"
            animate={expertInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl">
                Soyez certain que tout est parfaitement fait grâce à une révision finale par un expert
              </h2>
              <p className="text-gray-700 mt-3 md:mt-4 text-base md:text-lg">
                Nos experts s'assurent que votre déclaration est faite avec une précision de 100% et obtenez votre
                remboursement maximal — <span className="text-green-600 font-medium">garanti</span>.
              </p>
              <motion.div
                className="mt-6 md:mt-8"
                initial={{ opacity: 0, y: 10 }}
                animate={expertInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  <Button
                    variant="outline"
                    className="border-green-600 text-green-600 w-full sm:w-auto transition-all duration-300 hover:bg-green-50"
                  >
                    Voir les tarifs
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center order-2 lg:order-2 mt-6 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={expertInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative max-w-[280px] md:max-w-[320px]">
              <OptimizedImage
                src="/images/tax-expert-verification.svg"
                alt="Application TaxCut avec vérification fiscale par un expert"
                width={390}
                height={844}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
