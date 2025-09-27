import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            Portfolio
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-orange-500 transition-colors duration-200 capitalize"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
           className="md:hidden p-2 text-gray-300 hover:text-orange-500 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
         <div className="md:hidden mt-4 py-4 bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-lg">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
               className="block w-full text-left px-4 py-2 text-gray-300 hover:text-orange-500 hover:bg-gray-800 transition-colors duration-200 capitalize"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;