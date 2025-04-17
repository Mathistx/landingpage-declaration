"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { fadeIn } from "@/lib/animation-variants"

export default function CtaSection() {
  const [ctaRef, ctaInView] = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section
      className="w-full py-8 md:py-12 lg:py-24 bg-green-600 text-white"
      ref={ctaRef as React.RefObject<HTMLElement>}
    >
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter md:text-4xl">
              Prêt à confier vos impôts à un pro ?
            </h2>
            <p className="max-w-[900px] text-green-50 text-sm md:text-base lg:text-xl">
              Rejoignez des milliers de contribuables satisfaits et commencez à déclarer en toute sérénité dès
              aujourd'hui.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="bg-white text-green-600 hover:bg-green-50 w-full sm:w-auto transition-all duration-300 hover:shadow-lg"
              style={{ fontSize: "calc(1em * 1.2)" }}
              asChild
            >
              <a href="https://djhessjrhcc.typeform.com/taxcut">Commencer gratuitement</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
