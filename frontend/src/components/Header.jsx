import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, dir } = useLanguage();
  const t = translations[language];

  const navigationItems = [
    { id: 5, label: t.contact, path: '/#contact' },
    { id: 4, label: t.projects, path: '/#projects' },
    { id: 3, label: t.services, path: '/#services' },
    { id: 2, label: t.about, path: '/#about' },
    { id: 1, label: t.home, path: '/' }
  ];

  const scrollToSection = (path) => {
    if (path === '/') {
      // Scroll to top for home
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (path.startsWith('/#')) {
      const sectionId = path.substring(2);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b-2 border-[#5d9cc3]">
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between h-20 ${dir === 'rtl' ? 'flex-row' : 'flex-row-reverse'}`}>
          {/* Language and User */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="text-[#3e738f] text-sm hover:text-[#5d9cc3] transition-colors font-medium border border-[#3e738f] px-3 py-1 rounded hover:bg-[#3e738f] hover:text-white"
            >
              {t.language}
            </button>
            <button className="text-[#3e738f] hover:text-[#5d9cc3] transition-colors">
              <User size={22} />
            </button>
          </div>

          {/* Navigation (desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.path)}
                className="text-[#3e738f] text-sm hover:text-[#5d9cc3] transition-colors font-semibold relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-0.5 after:bg-[#5d9cc3] after:transition-all hover:after:w-full"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://customer-assets.emergentagent.com/job_ibtikarco-portal/artifacts/cu3wnhw1_ibtikarco%20Logo.png" 
                alt="إبتكار للمقاولات"
                className="h-16 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#3e738f]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className={`md:hidden py-4 border-t border-gray-200 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.path)}
                className={`block w-full text-[#3e738f] text-sm py-2 hover:text-[#5d9cc3] hover:bg-gray-50 px-4 transition-colors font-medium ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
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