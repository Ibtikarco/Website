import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { navigationItems } from '../data/mockData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('ar');

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#3a4751] shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Right side - Language and User */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="text-white text-sm hover:text-gray-300 transition-colors"
            >
              {language === 'ar' ? 'English' : 'العربية'}
            </button>
            <button className="text-white hover:text-gray-300 transition-colors">
              <User size={20} />
            </button>
          </div>

          {/* Center - Navigation (desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="text-white text-sm hover:text-gray-300 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Left side - Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <div className="relative w-12 h-12">
                  <div className="absolute inset-0 bg-white transform rotate-45"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[#3a4751] font-bold text-lg z-10 relative transform -rotate-45">
                      IBC
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-600">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="block text-white text-sm py-2 hover:text-gray-300 transition-colors text-right"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;