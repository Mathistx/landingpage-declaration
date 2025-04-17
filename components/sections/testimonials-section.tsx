"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Star, StarHalf } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { fadeIn, staggerContainer, scaleIn } from "@/lib/animation-variants"
import { OptimizedImage } from "@/components/ui/optimized-image"

export default function TestimonialsSection() {
  const [testimonialsRef, testimonialsInView] = useIntersectionObserver({ threshold: 0.1 })

  const testimonials = [
    {
      rating: 5,
      title: "Service rapide et professionnel",
      content:
        "Très réactif et rapide. J'ai commencé ma déclaration et tout était terminé en moins de 48h. Je recommande vivement !",
      author: "Antoine",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/antoine-B4eBhUEOJe9i8hZhAu0x9iqxQtwqJu.webp",
    },
    {
      rating: 5,
      title: "Excellent service",
      content:
        "Très rapide, efficace et professionnel. L'expert qui m'a été assigné a répondu à toutes mes questions et a optimisé ma déclaration.",
      author: "Sophie",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-olly-733872.jpg-NnzUZ1JgHWaPBYa3cigxTjoV6RnOdg.jpeg",
    },
    {
      rating: 5,
      title: "Expert fiscal très compétent",
      content:
        "Mon expert fiscal était génial. Je recommande pour toutes les personnes comme moi qui ont une phobie administrative !",
      author: "Thomas",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-julianemonarifotografia-31453864.jpg-S2Vdv97T21Fzpb5Shg0JfCs004URQH.jpeg",
    },
  ]

  return (
    <section
      id="testimonials"
      className="w-full py-8 md:py-12 lg:py-24 bg-gray-50"
      ref={testimonialsRef as React.RefObject<HTMLElement>}
    >
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12"
          initial="hidden"
          animate={testimonialsInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter md:text-4xl">Ce que nos clients disent</h2>
            <p className="max-w-[900px] text-gray-500 text-sm md:text-base lg:text-xl">
              Plus de 1 000 contribuables satisfaits nous ont fait confiance
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={testimonialsInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="border rounded-lg p-4 md:p-6 bg-white shadow-sm"
              variants={scaleIn}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="flex text-yellow-400 mb-2 md:mb-3">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-current" />
                  ))}
              </div>
              <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2">{testimonial.title}</h3>
              <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">{testimonial.content}</p>

              <div className="flex items-center text-xs md:text-sm text-gray-500">
                {/* Improved responsive image container */}
                <div className="relative flex-shrink-0 overflow-hidden rounded-full border border-gray-200">
                  <div className="w-8 h-8 md:w-10 md:h-10 relative">
                    <OptimizedImage
                      src={testimonial.image || "/placeholder.svg"}
                      alt={`Photo de ${testimonial.author}`}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>
                <span className="font-medium ml-2 md:ml-3">{testimonial.author}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row justify-center items-center mt-6 md:mt-10 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="flex text-yellow-400 mb-2 md:mb-0 md:mr-2">
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <StarHalf className="h-4 w-4 fill-current" />
          </div>
          <span className="text-xs md:text-sm text-gray-700">Note de 4.8/5 sur Google</span>
        </motion.div>
      </div>
    </section>
  )
}
