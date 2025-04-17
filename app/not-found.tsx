import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-green-50 p-4 text-center">
      <div className="max-w-md space-y-6">
        <h1 className="text-6xl font-bold text-green-600">404</h1>
        <h2 className="text-2xl font-semibold">Page non trouvée</h2>
        <p className="text-gray-600">Désolé, la page que vous recherchez n'existe pas ou a été déplacée.</p>
        <Button className="bg-green-600 hover:bg-green-700" asChild>
          <Link href="/">Retour à l'accueil</Link>
        </Button>
      </div>
    </div>
  )
}
