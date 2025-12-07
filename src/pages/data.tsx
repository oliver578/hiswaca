'use client';

import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Download, 
  Filter, 
  MapPin, 
  Calendar,
  Users,
  Database,
  Globe,
  FileSpreadsheet,
  Eye,
  Share2,
  ChevronDown
} from 'lucide-react';

import CounterUp from '@/components/CounterUp';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar, Legend, ResponsiveContainer } from 'recharts';


// Données fictives pour les filtres
const sectors = [
  { id: 'all', name: 'Tous les Secteurs', color: 'bg-gray-600' },
  { id: 'health', name: 'Santé', color: 'bg-red-600' },
  { id: 'education', name: 'Éducation', color: 'bg-blue-600' },
  { id: 'agriculture', name: 'Agriculture', color: 'bg-green-600' },
  { id: 'economy', name: 'Économie', color: 'bg-amber-600' },
  { id: 'infrastructure', name: 'Infrastructure', color: 'bg-purple-600' },
];

const dataTrend = [
  { year: '2015', value: 4.75 },   // 4.75M
  { year: '2016', value: 4.890 },   // 4.89M  
  { year: '2017', value: 5.037 },   // 5.04M
  { year: '2018', value: 5.187 },   // 5.19M
  { year: '2019', value: 5.342 },   // 5.34M
  { year: '2020', value: 5.502 },   // 5.50M
  { year: '2021', value: 5.667 },   // 5.67M
  { year: '2022', value: 5.836 },   // 5.84M
  { year: '2023', value: 6.009 },   // 6.01M [web:212]
  { year: '2024', value: 6.185 },   // 6.19M
  { year: '2025', value: 6.129 },   // 6.13M [web:208]
];

const dataComparison = [
  { department: 'Bouenza', value: 0.700 },
  { department: 'Cuvette', value:0.450 },
  { department: 'Cuvette-Ouest', value:0.120 },
  { department: 'Kouilou', value: 0.230 },
  { department: 'Lékoumou', value: 0.140 },
  { department: 'Louenza', value: 0.810 },
  { department: 'Plateaux', value: 0.450 },
  { department: 'Pointe-Noire', value:0.800 },
  { department: 'Sangha', value: 0.110 },
  { department: 'Pool', value: 0.700 },
  { department: 'Niari', value:0.600 },
  { department: 'Likouala', value: 0.280 },
  { department: 'Brazzaville', value: 1.300 },
];

const years = [
  { id: '2025', name: '2025' },
  { id: '2024', name: '2024' },
  { id: '2023', name: '2023' },
  { id: '2022', name: '2022' },
  { id: '2021', name: '2021' },
];

const regions = [
  { id: 'all', name: 'Toutes les régions' },
  { id: 'brazzaville', name: 'Brazzaville' },
  { id: 'pointe-noire', name: 'Pointe-Noire' },
  { id: 'pool', name: 'Pool' },
  { id: 'plateaux', name: 'Plateaux' },
  { id: 'cuvette', name: 'Cuvette' },
];

// Données fictives pour les KPIs
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

// Données fictives pour les datasets populaires
const popularDatasets = [
  { name: 'Taux de scolarisation primaire', sector: 'Éducation', lastUpdate: '2024-11', downloads: 1234, color: 'bg-blue-100 text-blue-700' },
  { name: 'Indicateurs santé maternelle', sector: 'Santé', lastUpdate: '2024-10', downloads: 892, color: 'bg-red-100 text-red-700' },
  { name: 'Production agricole nationale', sector: 'Agriculture', lastUpdate: '2024-12', downloads: 756, color: 'bg-green-100 text-green-700' },
  { name: 'PIB par secteur d activité', sector: 'Économie', lastUpdate: '2024-11', downloads: 1456, color: 'bg-amber-100 text-amber-700' },
];

const DataPage: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState('all');
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const handleSectorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSector(event.target.value);
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
  };

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(event.target.value);
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
            <Database className="w-4 h-4" />
            <span className="text-sm font-semibold">Données Ouvertes</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Tableau de Bord National
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Explorez les données clés du développement au Congo, harmonisées par HISWACA
          </p>
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

      {/* Filters Section */}
      <section className="container mx-auto px-6 mb-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <Filter className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-black text-gray-900">Filtres de Recherche</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Secteur */}
            <div>
              <label htmlFor="sector-select" className="block text-sm font-bold text-gray-700 mb-2">
                Secteur
              </label>
              <div className="relative">
                <select
                  id="sector-select"
                  value={selectedSector}
                  onChange={handleSectorChange}
                  className="w-full px-4 py-3 pr-10 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none appearance-none bg-white"
                >
                  {sectors.map((sector) => (
                    <option key={sector.id} value={sector.id}>
                      {sector.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Année */}
            <div>
              <label htmlFor="year-select" className="block text-sm font-bold text-gray-700 mb-2">
                Année
              </label>
              <div className="relative">
                <select
                  id="year-select"
                  value={selectedYear}
                  onChange={handleYearChange}
                  className="w-full px-4 py-3 pr-10 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none appearance-none bg-white"
                >
                  {years.map((year) => (
                    <option key={year.id} value={year.id}>
                      {year.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Région */}
            <div>
              <label htmlFor="region-select" className="block text-sm font-bold text-gray-700 mb-2">
                Région
              </label>
              <div className="relative">
                <select
                  id="region-select"
                  value={selectedRegion}
                  onChange={handleRegionChange}
                  className="w-full px-4 py-3 pr-10 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none appearance-none bg-white"
                >
                  {regions.map((region) => (
                    <option key={region.id} value={region.id}>
                      {region.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Appliquer les filtres
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-all flex items-center gap-2">
              Réinitialiser
            </button>
          </div>
        </div>
      </section>

      {/* Main Visualization */}
      <section className="container mx-auto px-6 mb-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-gray-50 to-white p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-2">
                  Carte Interactive du Congo
                </h2>
                <p className="text-gray-600">
                  Indicateur: Taux de scolarisation primaire - {selectedYear}
                </p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors" title="Voir détails">
                  <Eye className="w-5 h-5 text-gray-700" />
                </button>
                <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors" title="Partager">
                  <Share2 className="w-5 h-5 text-gray-700" />
                </button>
                <button className="p-2 bg-green-100 hover:bg-green-200 rounded-lg transition-colors" title="Télécharger">
                  <Download className="w-5 h-5 text-green-700" />
                </button>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="aspect-video bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <p className="text-gray-700 font-bold text-xl mb-2">Carte Interactive du Congo</p>
                <p className="text-gray-500 text-sm max-w-md">
                  Visualisation des données par région avec indicateurs géospatiaux
                </p>
                <p className="text-xs text-gray-400 mt-4">
                  Intégration: Leaflet, Mapbox ou D3.js
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500 text-center">
              Source: INS Congo, Projet HISWACA | Dernière mise à jour: Décembre 2024
            </p>
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="container mx-auto px-6 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
        {/* Tendance Chart */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900">
                Évolution Annuelle de la population (en millions)
              </h3>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Download className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <div className="aspect-video rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dataTrend} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={3} dot />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Comparaison Chart */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900">
                Comparaison Régionale
              </h3>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Download className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <div className="aspect-video rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dataComparison} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="department" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#ea580c" barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        </div>
      </section>

      {/* Popular Datasets */}
      <section className="container mx-auto px-6 pb-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
              <FileSpreadsheet className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-black text-gray-900">Datasets Populaires</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularDatasets.map((dataset, idx) => (
              <div
                key={idx}
                className="group p-6 border-2 border-gray-200 rounded-xl hover:border-green-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {dataset.name}
                    </h4>
                    <span className={`inline-block px-3 py-1 ${dataset.color} text-xs font-bold rounded-full`}>
                      {dataset.sector}
                    </span>
                  </div>
                  <Download className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {dataset.lastUpdate}
                  </span>
                  <span className="font-semibold text-green-600">
                    {dataset.downloads.toLocaleString()} téléchargements
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300">
              Voir tous les datasets
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DataPage;