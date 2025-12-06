import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

// Définition des types pour les enfants (contenu de la page)
interface LayoutProps {
  children: ReactNode;
}

/**
 * Composant Layout global du Portail HISWACA – Congo.
 * Il assure une structure cohérente (Header, Contenu, Footer) sur toutes les pages.
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    // Utilisez une grille de mise en page simple (flex ou grid) pour s'assurer que le pied de page
    // reste en bas, même sur les pages courtes.
    <div className="flex flex-col min-h-screen font-sans">
      
      {/* 1. L'En-tête (Fixe) */}
      <Header />

      {/* 2. Le Contenu Principal (Variable) */}
      {/* Le tag <main> est sémantiquement correct pour le contenu principal.
        Le 'flex-grow' permet au contenu de prendre tout l'espace vertical disponible.
        Le padding horizontal assure une bonne lisibilité.
      */}
      <main className="flex-grow pt-4 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      {/* 3. Le Pied de Page (Fixe) */}
      <Footer />
      
    </div>
  );
};

export default Layout;