'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  Tag, 
  ArrowRight,
  Newspaper,
  TrendingUp,
  Users,
  Sparkles,
  Clock,
  Eye,
  Share2,
  Filter
} from 'lucide-react';
import Image from 'next/image';

// Structure de données pour les actualités
interface NewsItem {
  id: number;
  title: string;
  summary: string;
  date: string;
  category: 'Événement' | 'Communiqué' | 'Atelier' | 'Résultat';
  image: string;
  link: string;
  readTime?: string;
  views?: number;
  featured?: boolean;
}

// Jeu de données enrichi
const initialNews: NewsItem[] = [
  { 
    id: 1, 
    title: 'Hackathon HISWACA - Congo : Les 15 équipes finalistes sélectionnées !', 
    summary: 'Annonce des équipes retenues pour l événement de 48h visant à concevoir le portail et la charte graphique du projet.', 
    date: '05 Déc. 2025', 
    category: 'Événement', 
    image: '/images/news/news-1.jpg',
    link: '#news-detail-1',
    readTime: '3 min',
    views: 2543,
    featured: true
  },
  { 
    id: 2, 
    title: 'Validation des PTAB 2026 : Vers un plan d action plus ambitieux', 
    summary: 'Clôture de l atelier de travail sur les Plans de Travail Annuels Budgétisés pour l année 2026.', 
    date: '28 Nov. 2025', 
    category: 'Atelier', 
    image: '/images/news/news-2.jpg',
    link: '#news-detail-2',
    readTime: '5 min',
    views: 1876,
    featured: false
  },
  { 
    id: 3, 
    title: 'Le Congo adopte les normes régionales pour l IPC', 
    summary: 'Communiqué de l INS Congo annonçant l alignement des méthodes de calcul de l IPC grâce à l appui d HISWACA.', 
    date: '10 Nov. 2025', 
    category: 'Résultat', 
    image: '/images/news/news-3.jpg',
    link: '#news-detail-3',
    readTime: '4 min',
    views: 3421,
    featured: false
  },
  { 
    id: 4, 
    title: 'Formation de 200 agents statistiques à Brazzaville', 
    summary: 'Programme intensif de renforcement des capacités des collecteurs de données sur le terrain.', 
    date: '15 Oct. 2025', 
    category: 'Atelier', 
    image: '/images/news/news-4.jpg',
    link: '#news-detail-4',
    readTime: '4 min',
    views: 1234
  },
  { 
    id: 5, 
    title: 'Lancement de la plateforme open data nationale', 
    summary: 'Une nouvelle ère pour l accessibilité des données statistiques au Congo.', 
    date: '01 Oct. 2025', 
    category: 'Événement', 
    image: '/images/news/news-5.jpg',
    link: '#news-detail-5',
    readTime: '6 min',
    views: 4567
  },
  { 
    id: 6, 
    title: 'Partenariat renforcé avec la Banque Mondiale', 
    summary: 'Extension du financement du projet HISWACA pour la période 2025-2027.', 
    date: '20 Sep. 2025', 
    category: 'Communiqué', 
    image: '/images/news/news-6.jpg',
    link: '#news-detail-6',
    readTime: '3 min',
    views: 2198
  },
];

const categories = [
  { value: 'Tous', label: 'Tous', color: 'bg-gray-100 text-gray-700' },
  { value: 'Événement', label: 'Événements', color: 'bg-blue-100 text-blue-700' },
  { value: 'Atelier', label: 'Ateliers', color: 'bg-green-100 text-green-700' },
  { value: 'Résultat', label: 'Résultats', color: 'bg-amber-100 text-amber-700' },
  { value: 'Communiqué', label: 'Communiqués', color: 'bg-purple-100 text-purple-700' },
];

const stats = [
  { label: 'Articles publiés', value: '48', icon: Newspaper, color: 'from-blue-500 to-blue-600' },
  { label: 'Vues totales', value: '24,567', icon: Eye, color: 'from-green-500 to-green-600' },
  { label: 'Événements à venir', value: '3', icon: Calendar, color: 'from-amber-500 to-amber-600' },
  { label: 'Mise à jour', value: 'Aujourd hui', icon: TrendingUp, color: 'from-red-500 to-red-600' },
];

const NewsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const filteredNews = selectedCategory === 'Tous' 
    ? initialNews 
    : initialNews.filter(item => item.category === selectedCategory);

  const featuredNews = initialNews.find(item => item.featured);
  const regularNews = initialNews.filter(item => !item.featured);

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.value === category);
    return cat?.color || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      
    {/* Hero Section */}
<section className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-16 overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <div
      className="absolute inset-0 bg-center bg-cover opacity-20"
      style={{
        backgroundImage: `url("/images/heros/about.jpg")`
      }}
    />
  </div>

  {/* Content */}
  <div className="relative container mx-auto px-6 text-center">

    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
      <Newspaper className="w-4 h-4" />
      <span className="text-sm font-semibold">Actualités</span>
    </div>

    <h1 className="text-4xl md:text-5xl font-black mb-4">
      Actualités et Événements
    </h1>

    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
      Suivez l’activité et les étapes clés du Projet HISWACA-Congo
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

      {/* Categories Filter */}
      <section className="container mx-auto px-6 mb-12">
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="w-5 h-5 text-green-600" />
            <h2 className="text-lg font-black text-gray-900">Filtrer par catégorie</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
                  selectedCategory === cat.value
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg scale-105'
                    : `${cat.color} hover:scale-105`
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-600">
            <span className="font-bold text-gray-900">{filteredNews.length}</span> article(s) trouvé(s)
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featuredNews && selectedCategory === 'Tous' && (
        <section className="container mx-auto px-6 mb-12">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image */}
           <div className="relative h-64 lg:h-96 overflow-hidden group">
  <Image
    src={"/images/news/news-1.jpg"}  
    alt={""}
    fill
    className="object-cover group-hover:scale-110 transition-transform duration-700"
  />
  
  {/* Overlay gradient pour badge lisible */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
  
  {/* Badge "À la une" en haut-gauche */}
  <div className="absolute top-6 left-6 z-10">
    <span className="px-4 py-2 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 text-amber-900 text-sm font-bold rounded-full flex items-center gap-2 shadow-lg backdrop-blur-sm border border-white/30">
      <Sparkles className="w-4 h-4" />
     À la une
    </span>
  </div>
</div>


              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 ${getCategoryColor(featuredNews.category)} text-xs font-bold rounded-full`}>
                    {featuredNews.category}
                  </span>
                  <span className="flex items-center gap-1 text-gray-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    {featuredNews.date}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">
                  {featuredNews.title}
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {featuredNews.summary}
                </p>

                <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredNews.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {featuredNews.views?.toLocaleString()} vues
                  </span>
                </div>

                <Link
                  href={featuredNews.link}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 w-fit"
                >
                  Lire l article complet
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(selectedCategory === 'Tous' ? regularNews : filteredNews).map((item) => (
            <Link key={item.id} href={item.link} className="group">
              <article className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden h-full flex flex-col">
                
                {/* Image */}
              <div className="relative h-48 overflow-hidden group">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            
 
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            
          {/* Bouton Share flottant */}
          <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button className="p-2.5 bg-white/90 backdrop-blur-md rounded-xl hover:bg-white hover:shadow-2xl transition-all shadow-lg border border-white/50">
              <Share2 className="w-5 h-5 text-gray-800" />
            </button>
  </div>
</div>


                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  
                  {/* Meta */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 ${getCategoryColor(item.category)} text-xs font-bold rounded-full`}>
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-xs">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-3 line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow line-clamp-3 mb-4">
                    {item.summary}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      {item.readTime && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {item.readTime}
                        </span>
                      )}
                      {item.views && (
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {item.views.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <span className="text-green-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Lire
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 pb-20">
        <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M30 0v60M0 30h60' stroke='white' stroke-width='1' opacity='0.3'/%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Vous cherchez plus d informations ?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Consultez nos archives complètes et rapports officiels
            </p>
            <Link
              href="/publications"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 font-bold rounded-xl hover:bg-gray-50 hover:scale-105 transition-all shadow-2xl"
            >
              Accéder aux Publications
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default NewsPage;