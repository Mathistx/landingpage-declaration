"use client"

import type React from "react"

import { useRef } from "react"
import { ChevronRight, Star, StarHalf } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { fadeIn, staggerContainer } from "@/lib/animation-variants"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [heroRef, heroInView] = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section className="w-full py-8 md:py-12 lg:py-24 bg-gradient-to-b from-green-50 to-white">
      <div className="container px-4 md:px-6">
        <div
          className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2"
          ref={heroRef as React.RefObject<HTMLDivElement>}
        >
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
                Laissez un <span className="text-green-600">expert fiscal</span> s'occuper de votre déclaration.
              </h1>
              <p className="max-w-[600px] text-gray-500 text-base md:text-xl mt-4">
                La déclaration d'impôts n'a pas besoin d'être compliquée.
              </p>

              <motion.div
                className="space-y-3 mt-4 md:mt-6"
                variants={staggerContainer}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
              >
                <motion.div variants={fadeIn} className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700">Simple, rapide, entièrement en ligne</span>
                </motion.div>
                <motion.div variants={fadeIn} className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700">Vérifié par un expert agréé</span>
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              className="flex flex-col gap-2 sm:flex-row mt-4 md:mt-6"
              variants={fadeIn}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
            >
              <Button
                className="bg-green-600 hover:bg-green-700 text-sm md:text-base py-2 md:py-4 w-full sm:w-auto transition-all duration-300 hover:shadow-lg"
                style={{ fontSize: "calc(1em * 1.1)" }}
                asChild
              >
                <a href="https://djhessjrhcc.typeform.com/taxcut">Commencer gratuitement</a>
              </Button>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 text-xs md:text-sm mt-4"
              variants={fadeIn}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:w-5 md:h-5"
                  aria-hidden="true"
                >
                  <path
                    d="M27.2569 12.5519H26.25V12.5H15V17.5H22.0644C21.0337 20.4106 18.2644 22.5 15 22.5C10.8581 22.5 7.5 19.1419 7.5 15C7.5 10.8581 10.8581 7.5 15 7.5C16.9119 7.5 18.6512 8.22125 19.9756 9.39937L23.5112 5.86375C21.2787 3.78312 18.2925 2.5 15 2.5C8.09687 2.5 2.5 8.09687 2.5 15C2.5 21.9031 8.09687 27.5 15 27.5C21.9031 27.5 27.5 21.9031 27.5 15C27.5 14.1619 27.4137 13.3437 27.2569 12.5519Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M3.94122 9.18188L8.0481 12.1938C9.15935 9.4425 11.8506 7.5 15 7.5C16.9118 7.5 18.6512 8.22125 19.9756 9.39937L23.5112 5.86375C21.2787 3.78312 18.2925 2.5 15 2.5C10.1987 2.5 6.03497 5.21062 3.94122 9.18188Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M15 27.5004C18.2288 27.5004 21.1625 26.2648 23.3806 24.2554L19.5119 20.9817C18.2569 21.9323 16.6969 22.5004 15 22.5004C11.7488 22.5004 8.98814 20.4273 7.94814 17.5342L3.87189 20.6748C5.94064 24.7229 10.1419 27.5004 15 27.5004Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M27.2569 12.5519H26.25V12.5H15V17.5H22.0644C21.5694 18.8981 20.67 20.1037 19.51 20.9819L19.5119 20.9806L23.3806 24.2544C23.1069 24.5031 27.5 21.25 27.5 15C27.5 14.1619 27.4137 13.3438 27.2569 12.5519Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>
              <div className="flex text-yellow-400" aria-label="Note de 4.8 sur 5">
                <Star className="h-3 w-3 md:h-4 md:w-4 fill-current" />
                <Star className="h-3 w-3 md:h-4 md:w-4 fill-current" />
                <Star className="h-3 w-3 md:h-4 md:w-4 fill-current" />
                <Star className="h-3 w-3 md:h-4 md:w-4 fill-current" />
                <StarHalf className="h-3 w-3 md:h-4 md:w-4 fill-current" />
              </div>
              <span className="font-medium">4,8/5 sur Google</span>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center mt-6 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Fixed container to prevent white border on resize */}
            <div className="w-full md:w-[80%] relative">
              {/* Apply rounded corners to the image itself instead of the container */}
              <div className="rounded-lg overflow-hidden shadow-xl">
                <OptimizedImage
                  src="/images/hero-image.png"
                  alt="Femme souriante utilisant l'application TaxCut sur son smartphone"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority={true}
                  quality={90}
                />
              </div>
              <motion.div
                className="absolute bottom-2 md:bottom-4 left-2 right-2 md:left-4 md:right-4 flex items-center justify-center"
                initial={{ opacity: 0, y: 10 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="bg-white rounded-full px-2 py-1 md:px-4 md:py-2 shadow-md flex items-center gap-2">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-600 md:w-4 md:h-4"
                      aria-hidden="true"
                    >
                      <path d="M15.6 11.6L22 7v10l-6.4-4.5v-1z" />
                      <path d="M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-medium">Pierre, Expert Fiscal</p>
                    <div className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 md:h-2 md:w-2 bg-green-500 rounded-full"></span>
                      <p className="text-[10px] md:text-xs text-gray-500">Disponible maintenant</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
