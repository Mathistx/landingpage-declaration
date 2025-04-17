"use client"

import { Button } from "@/components/ui/button"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="fr">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center bg-green-50 p-4 text-center">
          <div className="max-w-md space-y-6">
            <h1 className="text-4xl font-bold text-green-600">Erreur système</h1>
            <p className="text-gray-600">
              Nous sommes désolés, une erreur critique s'est produite. Nos équipes ont été notifiées.
            </p>
            <Button onClick={() => reset()} className="bg-green-600 hover:bg-green-700">
              Réessayer
            </Button>
          </div>
        </div>
      </body>
    </html>
  )
}
