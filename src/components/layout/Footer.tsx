'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, ArrowUp, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

// Liens de navigation rapides pour le pied de page
const footerLinks = [
  { 
    title: 'Information', 
    links: [
      { name: 'À Propos du Projet', href: '/about' },
      { name: 'Publications Clés', href: '/publications' },
      { name: 'Actualités', href: '/news' },
      { name: 'Équipe', href: '/team' },
    ]
  },
  { 
    title: 'Ressources', 
    links: [
      { name: 'Accéder aux Données', href: '/data' },
      { name: 'Indicateurs Statistiques', href: '/indicators' },
      { name: 'Documentation', href: '/docs' },
      { name: 'FAQ', href: '/faq' },
    ]
  },
  { 
    title: 'Services', 
    links: [
      { name: 'Formations', href: '/training' },
      { name: 'Support Technique', href: '/support' },
      { name: 'Partenariats', href: '/partnerships' },
      { name: 'Contactez-nous', href: '/contact' },
    ]
  },
];

// Partenaires Clés
const partners = [
  { name: 'INS Congo', logo: '/images/partner_ins.png', href: 'https://www.ins-congo.org', color: 'bg-blue-600' },
  { name: 'Banque Mondiale', logo: '/images/partner_bm.png', href: 'https://www.banquemondiale.org/', color: 'bg-green-600' },
  { name: 'ONG PRATIC', logo: '/images/partner_pratic.png', href: '#', color: 'bg-amber-600' },
  { name: 'Union Africaine', logo: '/images/partner_ua.png', href: 'https://au.int/', color: 'bg-red-600' },
];

// Réseaux sociaux
const socialLinks = [
  { icon: Facebook, name: 'Facebook', href: '#', color: 'hover:bg-blue-600' },
  { icon: Twitter, name: 'Twitter', href: '#', color: 'hover:bg-sky-500' },
  { icon: Linkedin, name: 'LinkedIn', href: '#', color: 'hover:bg-blue-700' },
  { icon: Mail, name: 'Email', href: 'mailto:contact@hiswaca-cngo.org', color: 'hover:bg-green-600' },
];

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-20">
      
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-green-500 via-amber-500 to-red-500" />

      <div className="container mx-auto px-6 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          
          {/* Colonne 1 : Logo et Mission */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl font-black text-white">H</span>
              </div>
              <div>
                <span className="block text-2xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  HISWACA
                </span>
                <span className="block text-xs text-gray-400 font-semibold">
                  Congo-Brazzaville
                </span>
              </div>
            </Link>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Harmonisation et Amélioration des Statistiques en Afrique de l Ouest et du Centre. 
              Transformer les données en actions pour un Congo prospère.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Avenue de l Indépendance, Brazzaville, République du Congo</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>+242 05 XXX XX XX</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a href="mailto:contact@hiswaca-cngo.org" className="hover:text-green-400 transition-colors">
                  contact@hiswaca-cngo.org
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Colonnes de liens */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-4 text-white">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center gap-2 group text-sm"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-green-400 transition-all duration-200" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} Projet HISWACA - Congo. Tous droits réservés.
          </p>
          
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-green-400 transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-green-400 transition-colors">
              Conditions d utilisation
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-green-400 transition-colors">
              Plan du site
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 z-50"
          aria-label="Retour en haut"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};

export default Footer;