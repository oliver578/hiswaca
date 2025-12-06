'use client';

import React, { useState } from 'react';
import { 
  Download, 
  FileText, 
  Search, 
  Filter,
  Calendar,
  Eye,
  ChevronDown,
  File,
  FileBarChart,
  Presentation,
  BookOpen,
  TrendingUp,
  ExternalLink
} from 'lucide-react';

// Structure de données pour les publications
interface Publication {
  id: number;
  title: string;
  type: 'Rapport' | 'Note' | 'Document de Projet' | 'Présentation';
  date: string;
  link: string;
  description?: string;
  views?: number;
  size?: string;
}

// Jeu de données enrichi
const initialPublications: Publication[] = [
  { 
    id: 1, 
    title: 'Rapport d Évaluation à Mi-Parcours du Projet HISWACA - Congo (2025)', 
    type: 'Rapport', 
    date: 'Oct. 2025', 
    link: '#',
    description: 'Analyse complète des progrès réalisés et des défis rencontrés au cours de la première phase.',
    views: 1234,
    size: '2.5 MB'
  },
  { 
    id: 2, 
    title: 'Note Technique sur l Harmonisation des Statistiques Agricoles', 
    type: 'Note', 
    date: 'Juil. 2025', 
    link: '#',
    description: 'Guide méthodologique pour la collecte et le traitement des données agricoles.',
    views: 892,
    size: '1.2 MB'
  },
  { 
    id: 3, 
    title: 'Plan d Engagement des Parties Prenantes (PEPP) - Révision 2', 
    type: 'Document de Projet', 
    date: 'Avr. 2025', 
    link: '#',
    description: 'Stratégie de communication et d engagement avec les partenaires du projet.',
    views: 567,
    size: '3.1 MB'
  },
  { 
    id: 4, 
    title: 'Présentation de l Atelier de Validation des PTAB 2026', 
    type: 'Présentation', 
    date: 'Déc. 2025', 
    link: '#',
    description: 'Synthèse des travaux de l atelier national de validation.',
    views: 1456,
    size: '5.8 MB'
  },
  { 
    id: 5, 
    title: 'Cadre de Gestion Environnementale et Sociale (CGES) - Annexe Congo', 
    type: 'Document de Projet', 
    date: 'Jan. 2025', 
    link: '#',
    description: 'Cadre réglementaire pour la gestion des impacts environnementaux et sociaux.',
    views: 734,
    size: '4.2 MB'
  },
  { 
    id: 6, 
    title: 'Manuel de Collecte des Données Statistiques 2025', 
    type: 'Rapport', 
    date: 'Mar. 2025', 
    link: '#',
    description: 'Guide complet pour les agents de terrain sur les procédures de collecte.',
    views: 2103,
    size: '6.4 MB'
  },
];

// Types de documents
const documentTypes = [
  { value: 'Tous', label: 'Tous les types', icon: File },
  { value: 'Rapport', label: 'Rapports', icon: FileBarChart },
  { value: 'Note', label: 'Notes Techniques', icon: FileText },
  { value: 'Document de Projet', label: 'Documents de Projet', icon: BookOpen },
  { value: 'Présentation', label: 'Présentations', icon: Presentation },
];

// Statistiques
const stats = [
  { label: 'Publications totales', value: '24', icon: FileText, color: 'from-blue-500 to-blue-600' },
  { label: 'Téléchargements', value: '8,942', icon: Download, color: 'from-green-500 to-green-600' },
  { label: 'Vues totales', value: '15,234', icon: Eye, color: 'from-amber-500 to-amber-600' },
  { label: 'Mises à jour ce mois', value: '6', icon: TrendingUp, color: 'from-red-500 to-red-600' },
];

const PublicationsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('Tous');

  // Logique de filtrage
  const filteredPublications = initialPublications
    .filter(pub => selectedType === 'Tous' || pub.type === selectedType)
    .filter(pub => pub.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'Rapport': return FileBarChart;
      case 'Note': return FileText;
      case 'Document de Projet': return BookOpen;
      case 'Présentation': return Presentation;
      default: return File;
    }
  };

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'Rapport': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Note': return 'bg-green-100 text-green-700 border-green-200';
      case 'Document de Projet': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Présentation': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M30 0v60M0 30h60' stroke='white' stroke-width='1' opacity='0.3'/%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-semibold">Centre de Documentation</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Publications & Ressources
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Accédez à tous les rapports officiels, notes techniques et documents du projet
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 -mt-12 relative z-10 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-3xl font-black text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600 font-semibold">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="container mx-auto px-6 mb-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <Filter className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-black text-gray-900">Recherche & Filtres</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Search Bar */}
            <div className="relative">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Rechercher
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher par mot-clé..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Type de document
              </label>
              <div className="relative">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-3 pr-10 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none appearance-none bg-white"
                >
                  {documentTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              <span className="font-bold text-gray-900">{filteredPublications.length}</span> publication(s) trouvée(s)
            </p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedType('Tous'); }}
              className="text-sm text-green-600 font-semibold hover:text-green-700 transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="container mx-auto px-6 pb-20">
        {filteredPublications.length > 0 ? (
          <div className="space-y-6">
            {filteredPublications.map((pub) => {
              const TypeIcon = getTypeIcon(pub.type);
              return (
                <div 
                  key={pub.id} 
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col lg:flex-row gap-6">
                      
                      {/* Icon & Type */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <TypeIcon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                              {pub.title}
                            </h3>
                            <span className={`inline-block px-3 py-1 ${getTypeColor(pub.type)} text-xs font-bold rounded-full border`}>
                              {pub.type}
                            </span>
                          </div>
                        </div>

                        {pub.description && (
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {pub.description}
                          </p>
                        )}

                        {/* Metadata */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{pub.date}</span>
                          </div>
                          {pub.views && (
                            <div className="flex items-center gap-2">
                              <Eye className="w-4 h-4" />
                              <span>{pub.views.toLocaleString()} vues</span>
                            </div>
                          )}
                          {pub.size && (
                            <div className="flex items-center gap-2">
                              <File className="w-4 h-4" />
                              <span>{pub.size}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col gap-3 lg:flex-shrink-0">
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                          <Download className="w-5 h-5" />
                          Télécharger
                        </a>
                        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all">
                          <Eye className="w-5 h-5" />
                          Aperçu
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center border border-gray-100">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Aucune publication trouvée
            </h3>
            <p className="text-gray-600 mb-6">
              Essayez de modifier vos critères de recherche
            </p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedType('Tous'); }}
              className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </section>

    </div>
  );
};

export default PublicationsPage;