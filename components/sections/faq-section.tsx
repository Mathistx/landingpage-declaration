"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { fadeIn } from "@/lib/animation-variants"

interface FaqItem {
  question: string
  answer: string
}

interface FaqSectionProps {
  faqItems: FaqItem[]
}

export default function FaqSection({ faqItems }: FaqSectionProps) {
  const [faqRef, faqInView] = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section id="faq" className="w-full py-8 md:py-12 lg:py-24 bg-white" ref={faqRef as React.RefObject<HTMLElement>}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial="hidden"
          animate={faqInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-600">FAQ</div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter md:text-4xl">Questions fréquentes</h2>
            <p className="max-w-[900px] text-gray-500 text-sm md:text-base lg:text-xl">
              Tout ce que vous devez savoir sur notre service de déclaration d'impôts
            </p>
          </div>
        </motion.div>
        <motion.div
          className="mx-auto max-w-3xl py-8 md:py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          variants={fadeIn}
        >
          <div className="w-full space-y-4">
            {faqItems.map((faq, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between p-4 md:p-6 font-medium transition-all hover:text-green-600 hover:bg-gray-50 text-left bg-white">
                    <span className="text-base md:text-lg font-bold text-left">{faq.question}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transition-transform duration-300 group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="p-4 md:p-6 pt-0 text-gray-500 text-sm md:text-base bg-white">
                    <div className="pt-2 md:pt-4">{faq.answer}</div>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
