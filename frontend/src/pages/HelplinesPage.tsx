import { useLanguage } from '../contexts/LanguageContext';
import { Phone, Shield } from 'lucide-react';

const HELPLINES = [
  { labelKey: 'helplinePolice' as const, number: '100', emoji: '👮', color: 'bg-blue-600', descKey: 'helplinesNote1' as const },
  { labelKey: 'helplineWomen' as const, number: '1091', emoji: '🌸', color: 'bg-pink-600', desc: 'Women in distress' },
  { labelKey: 'helplineChild' as const, number: '1098', emoji: '🧒', color: 'bg-orange-500', desc: 'Children in need' },
  { labelKey: 'helplineNational' as const, number: '112', emoji: '🚨', color: 'bg-sos', desc: 'All emergencies' },
  { labelKey: 'helplineDomestic' as const, number: '181', emoji: '🏠', color: 'bg-purple-600', desc: 'Domestic violence' },
  { labelKey: 'helplineCyber' as const, number: '1930', emoji: '💻', color: 'bg-teal', desc: 'Online crimes' },
];

const HELPLINE_DESCS: Record<string, string> = {
  '100': 'Available 24/7',
  '1091': 'Women in distress',
  '1098': 'Children in need',
  '112': 'All emergencies',
  '181': 'Domestic violence',
  '1930': 'Online crimes',
};

export default function HelplinesPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 pb-24 md:pb-6">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold font-poppins text-foreground flex items-center gap-2">
          <Phone className="w-7 h-7 text-teal" />
          {t('helplinesTitle')}
        </h1>
        <p className="text-muted-foreground mt-1">{t('helplinesSubtitle')}</p>
      </div>

      {/* Emergency banner */}
      <div className="bg-sos rounded-2xl p-4 mb-6 text-white flex items-center gap-3">
        <div className="text-3xl">🚨</div>
        <div>
          <div className="font-bold text-lg font-poppins">National Emergency: 112</div>
          <div className="text-white/80 text-sm">{t('emergencyNote')}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {HELPLINES.map(({ labelKey, number, emoji, color }) => (
          <a
            key={number}
            href={`tel:${number}`}
            className={`${color} text-white rounded-2xl p-5 flex items-center justify-between shadow-card hover:opacity-90 active:scale-95 transition-all card-hover`}
          >
            <div className="flex items-center gap-4">
              <div className="text-3xl">{emoji}</div>
              <div>
                <div className="text-white/80 text-sm font-medium">{t(labelKey)}</div>
                <div className="text-white text-4xl font-bold font-poppins tracking-wide leading-none">{number}</div>
                <div className="text-white/60 text-xs mt-1">{HELPLINE_DESCS[number]}</div>
              </div>
            </div>
            <div className="bg-white/20 rounded-full p-3 shrink-0">
              <Phone className="w-6 h-6 text-white" />
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 bg-card rounded-2xl p-5 border border-border">
        <div className="flex items-center gap-2 mb-3">
          <Shield className="w-5 h-5 text-teal" />
          <h2 className="font-bold text-foreground font-poppins">{t('helplinesImportantNotes')}</h2>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2"><span className="text-teal">•</span> {t('helplinesNote1')}</li>
          <li className="flex gap-2"><span className="text-teal">•</span> {t('helplinesNote2')}</li>
          <li className="flex gap-2"><span className="text-teal">•</span> {t('helplinesNote3')}</li>
          <li className="flex gap-2"><span className="text-teal">•</span> {t('helplinesNote4')}</li>
          <li className="flex gap-2"><span className="text-teal">•</span> {t('helplinesNote5')}</li>
        </ul>
      </div>
    </div>
  );
}
