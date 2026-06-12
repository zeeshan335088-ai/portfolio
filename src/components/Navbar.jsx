const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              ZH
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">Home</a>
            <a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">About</a>
            <a href="#skills" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">Contact</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/Zeeshan.png" target="_blank" rel="noopener noreferrer" className="hidden md:block px-4 py-2 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-lg hover:from-emerald-700 hover:to-cyan-700 transition-all font-medium text-sm border border-emerald-500/20">
              Open Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
