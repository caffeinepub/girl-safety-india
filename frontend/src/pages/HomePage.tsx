import { Link } from '@tanstack/react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { Phone, Shield, BookOpen, WifiOff, ArrowRight, AlertTriangle } from 'lucide-react';
import { useState } from 'react';
import SOSOverlay from '../components/SOSOverlay';

export default function HomePage() {
  const { t } = useLanguage();
  const [sosOpen, setSosOpen] = useState(false);

  const quickLinks = [
    {
      icon: Phone,
      label: t('quickHelplines'),
      desc: 'Police 100 · Women 1091 · Emergency 112',
      to: '/helplines',
      color: 'bg-teal text-white',
      iconBg: 'bg-white/20',
    },
    {
      icon: Shield,
      label: t('quickSafetyTips'),
      desc: 'Childhood · Teenage · Adulthood',
      to: '/safety-tips',
      color: 'bg-saffron text-white',
      iconBg: 'bg-white/20',
    },
    {
      icon: BookOpen,
      label: t('quickForBoys'),
      desc: 'Respect · Consent · Bystander Action',
      to: '/for-boys',
      color: 'bg-teal-dark text-white',
      iconBg: 'bg-white/20',
    },
    {
      icon: WifiOff,
      label: t('quickOfflineSafety'),
      desc: 'No phone? Stay safe anyway',
      to: '/safety-tips',
      color: 'bg-saffron-dark text-white',
      iconBg: 'bg-white/20',
    },
  ];

  return (
    <div className="pb-4">
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/assets/generated/hero-banner.dim_1200x400.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-saffron text-2xl">🌸</span>
              <span className="text-white/80 text-sm font-medium uppercase tracking-wider">SafeHer India</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins leading-tight mb-4">
              {t('heroTitle')}
            </h1>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/safety-tips"
                className="bg-saffron hover:bg-saffron-dark text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2 transition-colors shadow-saffron"
              >
                {t('heroButton')}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setSosOpen(true)}
                className="sos-pulse bg-sos hover:bg-sos-dark text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-colors shadow-sos"
              >
                <AlertTriangle className="w-5 h-5" />
                {t('sosButton')} — Emergency
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency note */}
      <div className="bg-sos/10 border-b border-sos/20 py-2 px-4 text-center">
        <p className="text-sos font-semibold text-sm flex items-center justify-center gap-2">
          <AlertTriangle className="w-4 h-4" />
          {t('emergencyNote')}
        </p>
      </div>

      {/* Quick access cards */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map(({ icon: Icon, label, desc, to, color, iconBg }) => (
            <Link
              key={to + label}
              to={to}
              className={`${color} rounded-2xl p-5 card-hover flex flex-col gap-3 shadow-card`}
            >
              <div className={`${iconBg} w-12 h-12 rounded-xl flex items-center justify-center`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-base font-poppins">{label}</div>
                <div className="text-white/70 text-xs mt-0.5">{desc}</div>
              </div>
              <ArrowRight className="w-4 h-4 text-white/60 mt-auto" />
            </Link>
          ))}
        </div>
      </section>

      {/* Helpline preview */}
      <section className="max-w-6xl mx-auto px-4 pb-8">
        <div className="bg-card rounded-2xl shadow-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold font-poppins text-foreground flex items-center gap-2">
              <Phone className="w-5 h-5 text-teal" />
              {t('quickHelplines')}
            </h2>
            <Link to="/helplines" className="text-teal text-sm font-medium hover:underline flex items-center gap-1">
              {t('viewAll')} <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { label: t('helplinePolice'), number: '100' },
              { label: t('helplineWomen'), number: '1091' },
              { label: t('helplineNational'), number: '112' },
            ].map(({ label, number }) => (
              <a
                key={number}
                href={`tel:${number}`}
                className="bg-teal/10 border border-teal/20 rounded-xl p-3 flex flex-col items-center gap-1 hover:bg-teal/20 transition-colors"
              >
                <span className="text-teal font-bold text-2xl font-poppins">{number}</span>
                <span className="text-foreground/70 text-xs text-center">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {sosOpen && <SOSOverlay onClose={() => setSosOpen(false)} />}
    </div>
  );
}
