'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, TrendingUp, Users, Database, Globe, Award, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import CounterUp from '@/components/CounterUp';


const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Slides SYNCHRONISÉS image + contenu
  const heroSlides = [
    {
      image: '/images/hero-1.jpg',
      title: 'Des statistiques fiables',
      highlight: 'pour un Congo Prospère',
      description: "Projet d'Harmonisation et d'Amélioration des Statistiques"
    },
    {
      image: '/images/hero-2.jpg',
      title: 'Innovation et Excellence',
      highlight: 'au service du développement',
      description: "Des solutions numériques modernes pour une prise de décision éclairée et stratégique"
    },
    {
      image: '/images/hero-3.jpg',
      title: 'Expertise locale',
      highlight: 'pour un impact national',
      description: "Former et valoriser les talents congolais dans l'économie numérique et statistique"
    },
    {
      image: '/images/hero-4.jpg',
      title: 'Ensemble pour bâtir',
      highlight: "l'avenir du Congo",
      description: "Partenariats stratégiques et collaboration pour un système statistique robuste et fiable"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);



 // ... (dans votre composant HomePage)
const kpis = [
  // IMPORTANT : 'value' doit être un nombre, le suffixe est séparé
  { value: 6.3, label: 'Population totale (M de)', icon: Users, color: 'from-blue-500 to-blue-600', suffix: 'M', decimalPlaces: 1 },
  { value: 36, label: 'Taux brut de natalité', icon: TrendingUp, color: 'from-green-500 to-emerald-600', suffix: '‰', decimalPlaces: 0 },
  { value: 64, label: 'Espérance de vie', icon: Globe, color: 'from-purple-500 to-purple-600', suffix: ' ans', decimalPlaces: 0 },
  { value: 4.8, label: 'Indice de fécondité', icon: Users, color: 'from-amber-500 to-orange-600', suffix: '', decimalPlaces: 1 },
  { value: 33.2, label: 'Taux mortalité infantile', icon: TrendingUp, color: 'from-red-500 to-rose-600', suffix: '‰', decimalPlaces: 1 },
  { value: 12, label: 'Départements couverts', icon: Database, color: 'from-teal-500 to-cyan-600', suffix: '', decimalPlaces: 0 },
  { value: 45, label: 'Mortalité des moins de 5 ans', icon: TrendingUp, color: 'from-pink-500 to-rose-600', suffix: '‰', decimalPlaces: 0 },
  { value: 19, label: 'Densité de population', icon: Globe, color: 'from-indigo-500 to-blue-600', suffix: ' hab/km²', decimalPlaces: 0 },
];
// ...

  const news = [
    {
      title: 'Lancement de la plateforme nationale de données',
      date: '15 Nov 2024',
      category: 'Innovation',
      image: '/images/news-1.jpg',
      description: 'Une nouvelle ère pour les statistiques congolaises avec notre plateforme digitale'
    },
    {
      title: 'Formation de 200 agents statistiques',
      date: '08 Nov 2024',
      category: 'Capacitation',
      image: '/images/news-2.jpg',
      description: 'Renforcement des compétences des acteurs clés du système statistique national'
    },
    {
      title: 'Partenariat avec la Banque Mondiale',
      date: '01 Nov 2024',
      category: 'Partenariat',
      image: '/images/news-3.jpg',
      description: 'Extension du projet avec un financement additionnel pour 2025-2027'
    }
  ];

const partners = [
  {
    name: 'Banque Mondiale',
    image: '/images/partners/banque-mondiale.jpg',
    category: 'Financement',
    description: '55M€ pour HISWACA SOP2'
  },
  {
    name: 'Gouvernement du Congo',
    image: '/images/partners/gouvernement.jpg', 
    category: 'Coordination',
    description: 'Ministère Planification'
  },
  {
    name: 'INS Congo',
    image: '/images/partners/ins-congo.jpg',
    category: 'Technique',
    description: 'Institut National Statistique'
  }
];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Hero Section avec Carrousel SYNCHRONISÉ */}
      <section className="relative h-screen overflow-hidden">
        {/* Carrousel d'images */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                idx === currentSlide
                  ? 'translate-x-0 scale-105 opacity-100'
                  : idx < currentSlide
                  ? '-translate-x-full scale-95 opacity-0'
                  : 'translate-x-full scale-95 opacity-0'
              }`}
            >
              <Image
                src={slide.image}
                alt={`Hero slide ${idx + 1}`}
                fill
                className="object-cover"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        {/* Contenu SYNCHRONISÉ */}
        <div className={`relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <Award className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-semibold text-white">Projet HISWACA-[CNGO]</span>
            </div>
          </div>

          {/* Titre slide courant */}
          <h1 className="mb-6" style={{ animationDelay: '0.4s' }}>
            <span className="block text-5xl md:text-7xl font-black text-white leading-tight mb-4 drop-shadow-2xl animate-slide-up">
              {heroSlides[currentSlide].title}
            </span>
            <span className="block text-5xl md:text-7xl font-black leading-tight animate-slide-up">
              <span className="bg-gradient-to-r from-green-400 via-amber-400 to-red-400 bg-clip-text text-transparent drop-shadow-2xl">
                {heroSlides[currentSlide].highlight}
              </span>
            </span>
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {heroSlides[currentSlide].description}
            <span className="font-bold text-white block mt-2">Transformer les données en actions</span>
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Link href="/data" className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-lg font-bold rounded-xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">Explorer les Indicateurs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/about" className="px-8 py-4 bg-white/20 backdrop-blur-md text-white text-lg font-bold rounded-xl border-2 border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 shadow-lg">
              En savoir plus
            </Link>
          </div>

          {/* Stats Preview */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-stagger-stats" style={{ animationDelay: '1s' }}>
           
          </div>
        </div>

        {/* Navigation Buttons */}
        <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all border border-white/30">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all border border-white/30">
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* KPIs Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="w-24 h-1.5 bg-gradient-to-r from-green-600 via-amber-500 to-red-600 mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, idx) => {
            const Icon = kpi.icon;
            return (
              <div key={idx} className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${kpi.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${kpi.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-5xl font-black mb-3 bg-gradient-to-br ${kpi.color} bg-clip-text text-transparent`}>
                 <CounterUp
                    endValue={kpi.value as number} // Utiliser la valeur numérique
                    duration={2500} // Animation de 2.5 secondes
                    suffix={kpi.suffix} // Ajouter l'unité (M, ‰, ans)
                    decimalPlaces={kpi.decimalPlaces} // Gérer les décimales
                  />
                </div>
                <p className="text-gray-700 font-semibold leading-snug">{kpi.label}</p>
                <div className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${kpi.color} rounded-full opacity-5 group-hover:opacity-20 transition-opacity`} />
              </div>
            );
          })}
        </div>
      </section>

      {/* News Section */}
    <section className="container mx-auto px-6 py-20 bg-gradient-to-br from-gray-50 to-white rounded-3xl">
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Dernières Actualités</h2>
    <p className="text-xl text-gray-600">Restez informé de nos avancées</p>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {news.map((item, idx) => (
      <article key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
        {/* ✅ IMAGE avec Next.js Image */}
        <Image
          src={item.image}
          alt={item.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          priority={idx === 0}
        />
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
              {item.category}
            </span>
            <span className="flex items-center gap-1 text-gray-500 text-sm">
              <Calendar className="w-4 h-4" />
              {item.date}
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
            {item.title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
            {item.description}
          </p>
          <Link href="/news" className="inline-flex items-center gap-2 text-green-600 font-semibold group-hover:gap-3 transition-all hover:underline">
            Lire la suite
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </article>
    ))}
  </div>
  
  <div className="text-center mt-12">
    <Link href="/news" className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all">
      Voir toutes les actualités
      <ArrowRight className="w-5 h-5" />
    </Link>
  </div>
</section>


   <section className="container mx-auto px-6 py-20 bg-gradient-to-br from-gray-50 to-white rounded-3xl">
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Nos Partenaires Stratégiques</h2>
    <p className="text-xl text-gray-600">Ensemble pour un avenir meilleur</p>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {partners.map((partner, idx) => (
      <article key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
        {/* ✅ IMAGE avec Next.js Image */}
        <Image
          src={partner.image}
          alt={partner.name}
          width={400}
          height={200}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          priority={idx === 0}
        />
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
              {partner.category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
            {partner.name}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6 line-clamp-2">
            {partner.description}
          </p>
          <Link href="/partners" className="inline-flex items-center gap-2 text-green-600 font-semibold group-hover:gap-3 transition-all hover:underline">
            En savoir plus
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </article>
    ))}
  </div>
  
  <div className="text-center mt-12">
    <Link href="/partners" className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all">
      Découvrir tous les partenaires
      <ArrowRight className="w-5 h-5" />
    </Link>
  </div>

  {/* Call-to-action final conservé */}
  <div className="mt-20 text-center bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-12 text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
    <div className="relative z-10">
      <h3 className="text-3xl md:text-4xl font-black mb-4">Rejoignez-nous dans cette transformation</h3>
      <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">Participez à la construction d un système statistique robuste pour le Congo</p>
      <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 font-bold rounded-xl hover:bg-gray-50 hover:scale-105 transition-all shadow-2xl">
        Contactez-nous
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  </div>
</section>

    </div>
  );
};

export default HomePage;
