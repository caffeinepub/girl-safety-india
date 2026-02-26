import { useLanguage } from '../contexts/LanguageContext';
import { X, Phone, ShieldAlert } from 'lucide-react';

interface SOSOverlayProps {
  onClose: () => void;
}

const SOS_NUMBERS = [
  { key: 'helplinePolice' as const, number: '100', color: 'bg-blue-600' },
  { key: 'helplineWomen' as const, number: '1091', color: 'bg-pink-600' },
  { key: 'helplineNational' as const, number: '112', color: 'bg-sos' },
];

export default function SOSOverlay({ onClose }: SOSOverlayProps) {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-sos-dark/95 backdrop-blur-sm animate-fade-in">
      <div className="flex items-center justify-between p-4 border-b border-white/20">
        <h1 className="text-white text-2xl font-bold font-poppins">{t('sosTitle')}</h1>
        <button
          onClick={onClose}
          className="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label={t('sosClose')}
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 gap-6">
        <div className="text-center max-w-sm">
          <div className="flex items-center justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
              <ShieldAlert className="w-10 h-10 text-white" />
            </div>
          </div>
          <p className="text-white text-xl font-bold font-poppins leading-relaxed mb-1">
            {t('sosMessage').split('.')[0]}.
          </p>
          <p className="text-white/80 text-base leading-relaxed">
            {t('sosMessage').split('.').slice(1).join('.').trim()}
          </p>
        </div>

        <div className="w-full max-w-sm flex flex-col gap-4">
          {SOS_NUMBERS.map(({ key, number, color }) => (
            <a
              key={number}
              href={`tel:${number}`}
              className={`${color} text-white rounded-2xl p-5 flex items-center justify-between shadow-lg hover:opacity-90 active:scale-95 transition-all`}
            >
              <div>
                <div className="text-white/80 text-sm font-medium">{t(key)}</div>
                <div className="text-white text-4xl font-bold font-poppins tracking-wide">{number}</div>
              </div>
              <div className="bg-white/20 rounded-full p-3">
                <Phone className="w-7 h-7 text-white" />
              </div>
            </a>
          ))}
        </div>

        <button
          onClick={onClose}
          className="mt-4 text-white/70 hover:text-white underline text-sm transition-colors"
        >
          {t('sosClose')}
        </button>
      </div>
    </div>
  );
}
