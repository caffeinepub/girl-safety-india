import { useLanguage } from '../contexts/LanguageContext';
import { Translation } from '../content/translations';
import { BookOpen, Heart, CheckCircle2, HandHeart, Eye, Megaphone, Zap, Star } from 'lucide-react';

type TipKey = keyof Translation;

interface Section {
  titleKey: TipKey;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  tips: { key: TipKey; emoji: string }[];
}

const SECTIONS: Section[] = [
  {
    titleKey: 'boysSectionConsent',
    icon: HandHeart,
    color: 'text-teal',
    bgColor: 'bg-teal/10',
    tips: [
      { key: 'boys_consent1', emoji: '✋' },
      { key: 'boys_consent2', emoji: '🤝' },
      { key: 'boys_consent3', emoji: '🔄' },
      { key: 'boys_consent4', emoji: '💻' },
    ],
  },
  {
    titleKey: 'boysSectionBystander',
    icon: Eye,
    color: 'text-saffron-dark',
    bgColor: 'bg-saffron/10',
    tips: [
      { key: 'boys_bystander1', emoji: '👁️' },
      { key: 'boys_bystander2', emoji: '💬' },
      { key: 'boys_bystander3', emoji: '📋' },
      { key: 'boys_bystander4', emoji: '🚫' },
    ],
  },
  {
    titleKey: 'boysSectionSpeakUp',
    icon: Megaphone,
    color: 'text-teal-dark',
    bgColor: 'bg-teal-dark/10',
    tips: [
      { key: 'boys_speakup1', emoji: '🗣️' },
      { key: 'boys_speakup2', emoji: '📢' },
      { key: 'boys_speakup3', emoji: '🤲' },
      { key: 'boys_speakup4', emoji: '📞' },
    ],
  },
  {
    titleKey: 'boysSectionImpact',
    icon: Zap,
    color: 'text-sos',
    bgColor: 'bg-sos/10',
    tips: [
      { key: 'boys_impact1', emoji: '💔' },
      { key: 'boys_impact2', emoji: '🚧' },
      { key: 'boys_impact3', emoji: '⚠️' },
      { key: 'boys_impact4', emoji: '👗' },
    ],
  },
  {
    titleKey: 'boysSectionMasculinity',
    icon: Star,
    color: 'text-saffron',
    bgColor: 'bg-saffron-light',
    tips: [
      { key: 'boys_masculinity1', emoji: '💪' },
      { key: 'boys_masculinity2', emoji: '👂' },
      { key: 'boys_masculinity3', emoji: '🌍' },
      { key: 'boys_masculinity4', emoji: '⭐' },
    ],
  },
];

export default function ForBoysPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 pb-24 md:pb-6">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold font-poppins text-foreground flex items-center gap-2">
          <BookOpen className="w-7 h-7 text-teal" />
          {t('boysTitle')}
        </h1>
        <p className="text-muted-foreground mt-1">{t('boysSubtitle')}</p>
      </div>

      {/* Hero message */}
      <div className="gradient-hero rounded-2xl p-6 text-white mb-8">
        <div className="flex items-center gap-3 mb-3">
          <Heart className="w-6 h-6 text-saffron" />
          <span className="font-bold text-lg font-poppins">{t('boysHeroTitle')}</span>
        </div>
        <p className="text-white/85 text-sm leading-relaxed">
          {t('boysHeroDesc')}
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-8">
        {SECTIONS.map(({ titleKey, icon: Icon, color, bgColor, tips }) => (
          <div key={titleKey} className="space-y-3">
            {/* Section header */}
            <div className={`flex items-center gap-3 p-3 ${bgColor} rounded-xl`}>
              <div className={`w-9 h-9 rounded-lg ${bgColor} border border-current/20 flex items-center justify-center ${color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <h2 className={`font-bold text-base font-poppins ${color}`}>{t(titleKey)}</h2>
            </div>

            {/* Tips */}
            <div className="space-y-2 pl-1">
              {tips.map(({ key, emoji }) => (
                <div
                  key={key}
                  className="bg-card rounded-xl p-4 border border-border shadow-xs flex gap-4 hover:shadow-card transition-shadow"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-xl">
                    {emoji}
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground/90 text-sm leading-relaxed">{t(key)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Remember box */}
      <div className="mt-8 bg-saffron-light rounded-2xl p-5 border border-saffron/20">
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle2 className="w-5 h-5 text-saffron-dark" />
          <h2 className="font-bold text-foreground font-poppins">{t('boysRememberTitle')}</h2>
        </div>
        <p className="text-foreground/80 text-sm leading-relaxed">
          {t('boysRememberDesc')}
        </p>
      </div>
    </div>
  );
}
