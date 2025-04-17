"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-green-50 p-4 text-center">
      <div className="max-w-md space-y-6">
        <h1 className="text-4xl font-bold text-green-600">Une erreur est survenue</h1>
        <p className="text-gray-600">
          Nous sommes désolés, une erreur inattendue s'est produite. Nos équipes ont été notifiées.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button onClick={() => reset()} className="bg-green-600 hover:bg-green-700">
            Réessayer
          </Button>
          <Button variant="outline" className="border-green-600 text-green-600" asChild>
            <Link href="/">Retour à l'accueil</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
