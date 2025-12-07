'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Database, FileText, Info, Newspaper, Home } from 'lucide-react';
import Image from 'next/image';

// Liste des liens de navigation avec icônes
const navLinks = [
  { name: 'Accueil', href: '/', icon: Home },
  { name: 'Données', href: '/data', icon: Database },
  { name: 'Publications', href: '/publications', icon: FileText },
  { name: 'À Propos', href: '/about', icon: Info },
  { name: 'Actualités', href: '/news', icon: Newspaper },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white shadow-md'
      }`}
    >
      {/* Top Bar avec gradient */}
      <div className="h-1 bg-gradient-to-r from-green-500 via-amber-500 to-red-500" />

      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
               <Image
      src="/logos/hiswaca-logo.png"  // ← CHEMIN VERS VOTRE LOGO
      alt="HISWACA Congo"
      width={48}
      height={48}
      className="w-12 h-12 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg border-2 border-white/20 object-contain"
    />
              
            </div>
            
            <div className="hidden md:block">
              <span className="block text-2xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                HISWACA
              </span>
              <span className="block text-[10px] text-gray-500 font-semibold uppercase tracking-wider -mt-1">
                Congo-Brazzaville
              </span>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative px-4 py-2 text-gray-700 hover:text-green-600 font-semibold text-sm transition-all duration-200 rounded-lg hover:bg-green-50"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {link.name}
                  </div>
                  {/* Underline animé */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 group-hover:w-full transition-all duration-300" />
                </Link>
              );
            })}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="px-4 py-2 text-gray-700 hover:text-green-600 font-semibold text-sm transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/data"
              className="group relative px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Database className="w-4 h-4" />
                Accéder aux Données
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-6 pb-6 bg-white border-t border-gray-100">
          <nav className="flex flex-col gap-2 pt-4">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 font-semibold text-sm rounded-lg transition-all duration-200"
                >
                  <Icon className="w-5 h-5" />
                  {link.name}
                </Link>
              );
            })}
            
            {/* Mobile CTA */}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-3 text-gray-700 hover:text-green-600 font-semibold text-sm border-2 border-gray-200 hover:border-green-500 rounded-lg transition-all"
              >
                Contact
              </Link>
              <Link
                href="/data"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-sm rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Database className="w-5 h-5" />
                Accéder aux Données
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Overlay pour fermer le menu mobile */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;