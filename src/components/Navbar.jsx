import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              ZH
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">Home</a>
            <a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">About</a>
            <a href="#skills" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">Contact</a>
            <a href="https://www.linkedin.com/in/zeeshan-haider-b417b2407/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-lg hover:from-emerald-700 hover:to-cyan-700 transition-all font-medium text-sm border border-emerald-500/20">
              View LinkedIn
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#home" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-emerald-400 hover:text-emerald-300 hover:bg-gray-800"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-emerald-400 hover:bg-gray-800"
            >
              About
            </a>
            <a 
              href="#skills" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-emerald-400 hover:bg-gray-800"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-emerald-400 hover:bg-gray-800"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-emerald-400 hover:bg-gray-800"
            >
              Contact
            </a>
            <a 
              href="https://www.linkedin.com/in/zeeshan-haider-b417b2407/" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 mt-2 rounded-md text-base font-medium bg-gradient-to-r from-emerald-600 to-cyan-600 text-white hover:from-emerald-700 hover:to-cyan-700 transition-all"
            >
              View LinkedIn
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
