"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  activeSection: string
  onNavClick: (e: React.MouseEvent, sectionId: string) => void
}

export function Header({ activeSection, onNavClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = useCallback(
    (e: React.MouseEvent, sectionId: string) => {
      onNavClick(e, sectionId)
      setMobileMenuOpen(false)
    },
    [onNavClick],
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-black" style={{ fontSize: "calc(1.5rem * 1.452)" }}>
            TaxCut
          </span>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center text-gray-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <nav className="hidden md:flex gap-6">
          <a
            href="#how-it-works"
            onClick={(e) => handleNavClick(e, "how-it-works")}
            className={`text-sm font-medium hover:text-green-600 transition-colors duration-200 ${
              activeSection === "how-it-works" ? "text-green-600" : ""
            }`}
          >
            Comment ça marche
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleNavClick(e, "pricing")}
            className={`text-sm font-medium hover:text-green-600 transition-colors duration-200 ${
              activeSection === "pricing" ? "text-green-600" : ""
            }`}
          >
            Tarifs
          </a>
          <a
            href="#testimonials"
            onClick={(e) => handleNavClick(e, "testimonials")}
            className={`text-sm font-medium hover:text-green-600 transition-colors duration-200 ${
              activeSection === "testimonials" ? "text-green-600" : ""
            }`}
          >
            Témoignages
          </a>
          <a
            href="#faq"
            onClick={(e) => handleNavClick(e, "faq")}
            className={`text-sm font-medium hover:text-green-600 transition-colors duration-200 ${
              activeSection === "faq" ? "text-green-600" : ""
            }`}
          >
            FAQ
          </a>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button className="bg-green-600 hover:bg-green-700 transition-all duration-200" asChild>
            <a href="https://djhessjrhcc.typeform.com/taxcut">Commencer</a>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-b"
        >
          <div className="container py-4 space-y-4">
            <a
              href="#how-it-works"
              className={`block text-sm font-medium hover:text-green-600 transition-colors duration-200 ${
                activeSection === "how-it-works" ? "text-green-600" : ""
              }`}
              onClick={(e) => handleNavClick(e, "how-it-works")}
            >
              Comment ça marche
            </a>
            <a
              href="#pricing"
              className={`block text-sm font-medium hover:text-green-600 transition-colors duration-200 ${
                activeSection === "pricing" ? "text-green-600" : ""
              }`}
              onClick={(e) => handleNavClick(e, "pricing")}
            >
              Tarifs
            </a>
            <a
              href="#testimonials"
              className={`block text-sm font-medium hover:text-green-600 transition-colors duration-200 ${
                activeSection === "testimonials" ? "text-green-600" : ""
              }`}
              onClick={(e) => handleNavClick(e, "testimonials")}
            >
              Témoignages
            </a>
            <a
              href="#faq"
              className={`block text-sm font-medium hover:text-green-600 transition-colors duration-200 ${
                activeSection === "faq" ? "text-green-600" : ""
              }`}
              onClick={(e) => handleNavClick(e, "faq")}
            >
              FAQ
            </a>
            <Button className="w-full bg-green-600 hover:bg-green-700 transition-all duration-200" asChild>
              <a href="https://djhessjrhcc.typeform.com/taxcut">Commencer</a>
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  )
}
