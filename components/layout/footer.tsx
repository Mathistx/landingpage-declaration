export function Footer() {
  return (
    <footer className="w-full border-t bg-white py-6">
      <div className="container px-4 flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center">
          <span className="font-bold text-black" style={{ fontSize: "calc(1.125rem * 1.452)" }}>
            TaxCut
          </span>
        </div>
        <p className="text-center text-xs md:text-sm text-gray-500 md:text-left">
          &copy; {new Date().getFullYear()} TaxCut. Tous droits réservés.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://taxcut.fr/politique-de-confidentialite/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs md:text-sm text-gray-500 hover:text-green-600 transition-colors duration-200"
          >
            Confidentialité
          </a>
          <a
            href="https://taxcut.fr/cgu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs md:text-sm text-gray-500 hover:text-green-600 transition-colors duration-200"
          >
            Conditions d'utilisation
          </a>
          <a href="#" className="text-xs md:text-sm text-gray-500 hover:text-green-600 transition-colors duration-200">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
