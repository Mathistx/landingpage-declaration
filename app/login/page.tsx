"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex min-h-screen items-center justify-center bg-green-50 p-4">
        <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-lg">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Link href="/" className="flex items-center text-green-600 hover:text-green-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Link>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Déclaration Plus Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
            </div>
            <h1 className="text-2xl font-bold">{isLogin ? "Connexion" : "Créer un compte"}</h1>
            <p className="text-sm text-gray-500">
              {isLogin
                ? "Connectez-vous pour accéder à votre espace personnel"
                : "Créez un compte pour commencer votre déclaration d'impôts"}
            </p>
          </div>
          <div className="space-y-4">
            {!isLogin && (
              <div className="grid gap-2">
                <Label htmlFor="name">Nom complet</Label>
                <Input id="name" placeholder="Jean Dupont" required />
              </div>
            )}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="exemple@email.com" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Mot de passe</Label>
                {isLogin && (
                  <Link href="#" className="text-xs text-green-600 hover:text-green-700">
                    Mot de passe oublié?
                  </Link>
                )}
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              {isLogin ? "Se connecter" : "Créer un compte"}
            </Button>
            <div className="text-center text-sm">
              {isLogin ? (
                <p>
                  Pas encore de compte?{" "}
                  <button onClick={() => setIsLogin(false)} className="text-green-600 hover:text-green-700">
                    S'inscrire
                  </button>
                </p>
              ) : (
                <p>
                  Déjà un compte?{" "}
                  <button onClick={() => setIsLogin(true)} className="text-green-600 hover:text-green-700">
                    Se connecter
                  </button>
                </p>
              )}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">Ou continuer avec</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              Google
            </Button>
            <Button variant="outline" className="w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              Facebook
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
