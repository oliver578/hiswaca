'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe, Facebook, Twitter, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi (remplacez par votre logique d'envoi réelle)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Reset success message après 5 secondes
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Avenue de l Indépendance, Brazzaville',
      subContent: 'République du Congo',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+242 05 XXX XX XX',
      subContent: 'Lun - Ven: 8h - 17h',
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@hiswaca-cngo.org',
      subContent: 'info@hiswaca-cngo.org',
      color: 'from-red-500 to-rose-600',
    },
  ];

  const departments = [
    { name: 'Direction Générale', email: 'direction@hiswaca-cngo.org' },
    { name: 'Département Statistiques', email: 'stats@hiswaca-cngo.org' },
    { name: 'Département Formation', email: 'formation@hiswaca-cngo.org' },
    { name: 'Support Technique', email: 'support@hiswaca-cngo.org' },
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#', color: 'hover:bg-blue-600' },
    { icon: Twitter, name: 'Twitter', url: '#', color: 'hover:bg-sky-500' },
    { icon: Linkedin, name: 'LinkedIn', url: '#', color: 'hover:bg-blue-700' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-20 overflow-hidden">
        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M30 0v60M0 30h60' stroke='white' stroke-width='1' opacity='0.3'/%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
            <Mail className="w-4 h-4" />
            <span className="text-sm font-semibold">Contactez-nous</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Parlons de votre projet
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Notre équipe est à votre écoute pour répondre à vos questions et vous accompagner dans vos démarches.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container mx-auto px-6 -mt-16 relative z-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                <p className="text-gray-700 font-semibold mb-1">{info.content}</p>
                <p className="text-gray-500 text-sm">{info.subContent}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
                  Envoyez-nous un message
                </h2>
                <p className="text-gray-600 text-lg">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>
              </div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-800">Message envoyé avec succès !</p>
                    <p className="text-sm text-green-700">Nous vous répondrons dans les 24-48 heures.</p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-red-800">Erreur lors de l envoi</p>
                    <p className="text-sm text-red-700">Veuillez réessayer ou nous contacter directement.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                      Nom complet <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                {/* Phone & Subject */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none"
                      placeholder="+242 XX XXX XX XX"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                      Sujet <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="information">Demande d information</option>
                      <option value="partnership">Partenariat</option>
                      <option value="formation">Formation</option>
                      <option value="data">Accès aux données</option>
                      <option value="technical">Support technique</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none resize-none"
                    placeholder="Décrivez votre demande en détail..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Departments */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
                <Globe className="w-6 h-6 text-green-600" />
                Départements
              </h3>
              <div className="space-y-4">
                {departments.map((dept, idx) => (
                  <div key={idx} className="group cursor-pointer">
                    <p className="font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-1">
                      {dept.name}
                    </p>
                    <a href={`mailto:${dept.email}`} className="text-sm text-gray-600 hover:text-green-600 transition-colors">
                      {dept.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6" />
                Horaires d ouverture
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Lundi - Vendredi</span>
                  <span>8h - 17h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Samedi</span>
                  <span>9h - 13h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Dimanche</span>
                  <span className="text-white/70">Fermé</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-black text-gray-900 mb-6">
                Suivez-nous
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700 hover:text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;