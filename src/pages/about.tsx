'use client';

import React from 'react';
import { 
  Target, 
  TrendingUp, 
  Globe, 
  GraduationCap, 
  Users, 
  Award,
  CheckCircle,
  ExternalLink,
  Sparkles
} from 'lucide-react';

// Données fictives pour les partenaires
interface Partner {
  name: string;
  logo: string;
  description: string;
  color: string;
  website?: string;
}

const partnersData: Partner[] = [
  { 
    name: 'Gouvernement du Congo', 
    logo: '/logos/congo.png', 
    description: 'Le principal bénéficiaire et moteur de l harmonisation des statistiques.',
    color: 'bg-green-600',
    website: '#'
  },
  { 
    name: 'Banque Mondiale', 
    logo: '/logos/worldbank.png', 
    description: 'Partenaire technique et financier essentiel au projet HISWACA.',
    color: 'bg-blue-600',
    website: 'https://www.worldbank.org'
  },
  { 
    name: 'Union Européenne', 
    logo: '/logos/eu.png', 
    description: 'Soutien institutionnel à l amélioration des capacités statistiques nationales.',
    color: 'bg-indigo-600',
    website: 'https://europa.eu'
  },
  { 
    name: 'Institut National de la Statistique', 
    logo: '/logos/ins.png', 
    description: 'Agence d exécution nationale, garante de la production et de la diffusion des données.',
    color: 'bg-amber-600',
    website: '#'
  },
];

const pillars = [
  {
    title: 'Harmonisation des Cadres',
    icon: Target,
    description: 'Aligner les méthodologies et les nomenclatures statistiques sur les standards régionaux et internationaux (RCA, UA, ONU).',
    color: 'from-green-500 to-emerald-600',
    stats: '100% Compatible'
  },
  {
    title: 'Amélioration de la Qualité',
    icon: TrendingUp,
    description: 'Garantir la fiabilité, l actualité et la couverture des données produites par les ministères sectoriels et l INS.',
    color: 'from-blue-500 to-blue-600',
    stats: '94% Complétude'
  },
  {
    title: 'Diffusion et Accès Facilité',
    icon: Globe,
    description: 'Rendre les données facilement accessibles aux décideurs, chercheurs et citoyens via ce portail unique.',
    color: 'from-amber-500 to-orange-600',
    stats: '24/7 Accessible'
  },
  {
    title: 'Renforcement des Capacités',
    icon: GraduationCap,
    description: 'Former les statisticiens et les utilisateurs pour une meilleure collecte, analyse et utilisation des données.',
    color: 'from-red-500 to-rose-600',
    stats: '1000+ Formés'
  },
];

const achievements = [
  { label: '7 Secteurs harmonisés', value: '100%' },
  { label: 'Professionnels formés', value: '1000+' },
  { label: 'Départements couverts', value: '12/12' },
  { label: 'Indicateurs disponibles', value: '150+' },
];

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      
      {/* Hero Section Moderne */}
      <section className="relative overflow-hidden">
        {/* Background avec gradient animé */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 -left-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 -right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M30 0v60M0 30h60' stroke='white' stroke-width='1' opacity='0.3'/%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative container mx-auto px-6 py-20 md:py-32">
          <div className="max-w-5xl mx-auto">
            
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold text-white">À Propos du Projet</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-center mb-6">
              <span className="block text-5xl md:text-6xl font-black text-white leading-tight mb-4 drop-shadow-2xl">
                Le Projet HISWACA
              </span>
              <span className="block text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-200 to-yellow-200 bg-clip-text text-transparent drop-shadow-lg">
                Congo-Brazzaville
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 text-center max-w-4xl mx-auto leading-relaxed mb-12">
              Harmonisation et Amélioration des Statistiques pour le Développement Durable
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {achievements.map((achievement, idx) => (
                <div key={idx} className="text-center bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-black text-white mb-1">{achievement.value}</div>
                  <div className="text-sm text-white/80 font-semibold">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f8fafc"/>
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-black text-gray-900">Notre Mission</h2>
                <p className="text-green-600 font-semibold">Transformer les données en actions</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                Le Projet d Harmonisation et d Amélioration des Statistiques au Congo (HISWACA) a été initié pour répondre au besoin critique d une <strong className="text-gray-900">information statistique fiable, comparable et accessible</strong>. Il vise à renforcer la capacité de l appareil statistique national (ASN) à produire des données de haute qualité pour l élaboration et le suivi des politiques publiques.
              </p>
              <p>
                Notre mission principale est de <strong className="text-green-600">transformer les données brutes en connaissances stratégiques</strong> afin d éclairer la prise de décision, de promouvoir la bonne gouvernance et d accélérer le développement socio-économique du pays. Ce portail est la vitrine de ces efforts.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-8 border-t border-gray-200">
                {[
                  'Données fiables et vérifiées',
                  'Standards internationaux respectés',
                  'Accès ouvert et transparent',
                  'Capacités renforcées'
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="font-semibold text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="container mx-auto px-6 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Nos 4 Piliers Stratégiques
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-green-600 via-amber-500 to-red-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-black text-gray-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="relative text-gray-600 leading-relaxed mb-4">
                  {pillar.description}
                </p>

                {/* Stats badge */}
                <div className="relative">
                  <span className={`inline-block px-3 py-1 bg-gradient-to-r ${pillar.color} text-white text-xs font-bold rounded-full`}>
                    {pillar.stats}
                  </span>
                </div>

                {/* Decorative element */}
                <div className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${pillar.color} rounded-full opacity-5 group-hover:opacity-20 transition-opacity`} />
              </div>
            );
          })}
        </div>
      </section>

      {/* Partners Section */}
      <section className="container mx-auto px-6 pb-20">
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6">
              <Users className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-700">Collaboration Internationale</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              Nos Partenaires Clés
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Le succès du Projet HISWACA repose sur la collaboration étroite de toutes les parties prenantes nationales et internationales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnersData.map((partner, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Logo Placeholder */}
                <div className={`${partner.color} h-24 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                  <span className="text-white font-bold text-sm text-center px-2">
                    {partner.name}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {partner.name}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {partner.description}
                </p>

                {partner.website && (
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm hover:gap-3 transition-all"
                  >
                    En savoir plus
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;