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

  const scrollToSection = (path) => {
    if (path.startsWith('/#')) {
      const sectionId = path.substring(2);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#3e738f] shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Right side - Language and User */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="text-white text-sm hover:text-[#5d9cc3] transition-colors font-medium"
            >
              {language === 'ar' ? 'English' : 'العربية'}
            </button>
            <button className="text-white hover:text-[#5d9cc3] transition-colors">
              <User size={20} />
            </button>
          </div>

          {/* Center - Navigation (desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.path)}
                className="text-white text-sm hover:text-[#5d9cc3] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Left side - Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="text-white">
                <div className="text-xl font-bold">ابتكار</div>
                <div className="text-xs text-[#5d9cc3]">للمقاولات</div>
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
          <nav className="md:hidden py-4 border-t border-[#5d9cc3]/30">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.path)}
                className="block w-full text-right text-white text-sm py-2 hover:text-[#5d9cc3] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;