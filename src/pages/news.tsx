import React, { useState } from 'react';
import Link from 'next/link';
// Simule l'icône de calendrier pour les événements
import { Calendar, Tag } from 'lucide-react'; 

// Structure de données fictive pour les actualités
interface NewsItem {
  id: number;
  title: string;
  summary: string;
  date: string;
  category: 'Événement' | 'Communiqué' | 'Atelier' | 'Résultat';
  image: string; // Chemin d'accès à une image de vignette (simulée)
  link: string; // Lien vers l'article complet (simulé)
}

// Jeu de données pour la démo
const initialNews: NewsItem[] = [
  { 
    id: 1, 
    title: 'Hackathon HISWACA – Congo : Les 15 équipes finalistes sélectionnées !', 
    summary: 'Annonce des équipes retenues pour l\'événement de 48h visant à concevoir le portail et la charte graphique du projet.', 
    date: '05 Déc. 2025', 
    category: 'Événement', 
    image: '/images/news/hackathon.jpg',
    link: '#news-detail-1'
  },
  { 
    id: 2, 
    title: 'Validation des PTAB 2026 : Vers un plan d\'action plus ambitieux pour l\'harmonisation.', 
    summary: 'Clôture de l\'atelier de travail sur les Plans de Travail Annuels Budgétisés (PTAB) pour l\'année 2026.', 
    date: '28 Nov. 2025', 
    category: 'Atelier', 
    image: '/images/news/ptab.jpg',
    link: '#news-detail-2'
  },
  { 
    id: 3, 
    title: 'Le Congo adopte les normes régionales pour l\'Indice des Prix à la Consommation (IPC).', 
    summary: 'Communiqué de l\'INS Congo annonçant l\'alignement des méthodes de calcul de l\'IPC grâce à l\'appui d\'HISWACA.', 
    date: '10 Nov. 2025', 
    category: 'Résultat', 
    image: '/images/news/ipc.jpg',
    link: '#news-detail-3'
  },
];

const NewsPage: React.FC = () => {
  return (
    <div className="space-y-12">
      
      {/* 1. En-tête de la Page */}
      <section className="text-center py-4 border-b border-gray-200">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          Actualités et Événements du Projet
        </h1>
        <p className="text-lg text-gray-600">
          Suivez l activité et les étapes clés du Projet d Harmonisation et d Amélioration des Statistiques.
        </p>
      </section>

      {/* 2. Liste des Actualités en Grille */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {initialNews.map((item) => (
            <Link key={item.id} href={item.link} className="block group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col hover:shadow-xl transition duration-300">
                
                {/* Image (Placeholder) */}
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                    {/* Pour le hackathon, utilisez un placeholder textuel */}
                    <span className="text-gray-500 font-medium text-sm">Image de l actualité</span>
                </div>

                {/* Contenu de l'Article */}
                <div className="p-5 flex flex-col flex-grow">
                  
                  {/* Tags et Date */}
                  <div className="flex items-center justify-between text-sm mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${item.category === 'Événement' ? 'bg-hiswaca-accent text-white' : 'bg-gray-200 text-gray-600'}`}>
                      {item.category}
                    </span>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {item.date}
                    </div>
                  </div>

                  {/* Titre et Résumé */}
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-hiswaca-primary transition duration-300 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm flex-grow">
                    {item.summary}
                  </p>
                  
                  {/* Lien de lecture */}
                  <div className="mt-4 text-hiswaca-primary font-semibold text-sm">
                    Lire l article →
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </section>
      
      {/* 3. Section CTA / Archives */}
      <section className="text-center py-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Vous cherchez plus d informations ?
        </h2>
        <Link 
          href="/publications" 
          className="bg-hiswaca-primary text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-opacity-90 transition duration-300"
        >
          Accéder aux Archives et Rapports Officiels
        </Link>
      </section>
    </div>
  );
};

export default NewsPage;