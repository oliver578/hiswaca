import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

// Définition des types pour les enfants (contenu de la page)
interface LayoutProps {
  children: ReactNode;
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-grow pt-4 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
      <Footer />
      
    </div>
  );
};

export default Layout;