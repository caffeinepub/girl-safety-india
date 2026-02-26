import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Translation } from '../content/translations';
import { Shield, Smartphone, WifiOff, CheckCircle2 } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

type TipKey = keyof Translation;

function TipCard({ text, index }: { text: string; index: number }) {
  return (
    <div className="flex gap-3 p-4 bg-card rounded-xl shadow-xs border border-border hover:shadow-card transition-shadow">
      <div className="shrink-0 w-7 h-7 rounded-full bg-teal/10 flex items-center justify-center">
        <CheckCircle2 className="w-4 h-4 text-teal" />
      </div>
      <p className="text-foreground/90 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function TipSection({ titleKey, subtitleKey, tips, icon: Icon, iconColor }: {
  titleKey: TipKey;
  subtitleKey: TipKey;
  tips: TipKey[];
  icon: React.ElementType;
  iconColor: string;
}) {
  const { t } = useLanguage();
  return (
    <div className="space-y-4">
      <div className={`${iconColor} rounded-2xl p-5 text-white`}>
        <div className="flex items-center gap-3 mb-2">
          <Icon className="w-6 h-6" />
          <h2 className="text-xl font-bold font-poppins">{t(titleKey)}</h2>
        </div>
        <p className="text-white/80 text-sm">{t(subtitleKey)}</p>
      </div>
      <div className="space-y-2">
        {tips.map((key, i) => (
          <TipCard key={key} text={t(key)} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function SafetyTipsPage() {
  const { t } = useLanguage();

  const childhoodTips: TipKey[] = [
    'childhood_tip1','childhood_tip2','childhood_tip3','childhood_tip4',
    'childhood_tip5','childhood_tip6','childhood_tip7','childhood_tip8','childhood_tip9',
  ];
  const teenageTips: TipKey[] = [
    'teenage_tip1','teenage_tip2','teenage_tip3','teenage_tip4',
    'teenage_tip5','teenage_tip6','teenage_tip7','teenage_tip8','teenage_tip9',
  ];
  const adultTips: TipKey[] = [
    'adult_tip1','adult_tip2','adult_tip3','adult_tip4',
    'adult_tip5','adult_tip6','adult_tip7','adult_tip8','adult_tip9',
  ];
  const offlineTips: TipKey[] = [
    'offline_tip1','offline_tip2','offline_tip3','offline_tip4',
    'offline_tip5','offline_tip6','offline_tip7','offline_tip8','offline_tip9',
  ];
  const onlineTips: TipKey[] = [
    'online_tip1','online_tip2','online_tip3','online_tip4',
    'online_tip5','online_tip6','online_tip7','online_tip8','online_tip9',
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 pb-24 md:pb-6">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold font-poppins text-foreground flex items-center gap-2">
          <Shield className="w-7 h-7 text-teal" />
          {t('safetyTipsTitle')}
        </h1>
        <p className="text-muted-foreground mt-1">{t('safetyTipsSubtitle')}</p>
      </div>

      <Tabs defaultValue="childhood" className="w-full">
        <TabsList className="w-full grid grid-cols-3 mb-6 bg-muted h-auto p-1 rounded-xl">
          <TabsTrigger value="childhood" className="rounded-lg py-2 text-xs sm:text-sm data-[state=active]:bg-teal data-[state=active]:text-white">
            <div className="flex flex-col items-center gap-0.5">
              <span>{t('tabChildhood')}</span>
              <span className="text-xs opacity-70">{t('childhoodAge')}</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="teenage" className="rounded-lg py-2 text-xs sm:text-sm data-[state=active]:bg-teal data-[state=active]:text-white">
            <div className="flex flex-col items-center gap-0.5">
              <span>{t('tabTeenage')}</span>
              <span className="text-xs opacity-70">{t('teenageAge')}</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="adulthood" className="rounded-lg py-2 text-xs sm:text-sm data-[state=active]:bg-teal data-[state=active]:text-white">
            <div className="flex flex-col items-center gap-0.5">
              <span>{t('tabAdulthood')}</span>
              <span className="text-xs opacity-70">{t('adulthoodAge')}</span>
            </div>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="childhood" className="mt-0">
          <div className="flex items-center gap-3 mb-4 p-3 bg-saffron-light rounded-xl">
            <img src="/assets/generated/childhood-icon.dim_128x128.png" alt="" className="w-12 h-12 rounded-lg object-cover" />
            <div>
              <div className="font-bold text-foreground">{t('tabChildhood')}</div>
              <div className="text-muted-foreground text-sm">{t('childhoodAge')}</div>
            </div>
          </div>
          <div className="space-y-2">
            {childhoodTips.map((key) => <TipCard key={key} text={t(key)} index={0} />)}
          </div>
        </TabsContent>

        <TabsContent value="teenage" className="mt-0">
          <div className="flex items-center gap-3 mb-4 p-3 bg-teal/10 rounded-xl">
            <img src="/assets/generated/teen-icon.dim_128x128.png" alt="" className="w-12 h-12 rounded-lg object-cover" />
            <div>
              <div className="font-bold text-foreground">{t('tabTeenage')}</div>
              <div className="text-muted-foreground text-sm">{t('teenageAge')}</div>
            </div>
          </div>
          <div className="space-y-2">
            {teenageTips.map((key) => <TipCard key={key} text={t(key)} index={0} />)}
          </div>
        </TabsContent>

        <TabsContent value="adulthood" className="mt-0">
          <div className="flex items-center gap-3 mb-4 p-3 bg-saffron/10 rounded-xl">
            <img src="/assets/generated/adult-icon.dim_128x128.png" alt="" className="w-12 h-12 rounded-lg object-cover" />
            <div>
              <div className="font-bold text-foreground">{t('tabAdulthood')}</div>
              <div className="text-muted-foreground text-sm">{t('adulthoodAge')}</div>
            </div>
          </div>
          <div className="space-y-2">
            {adultTips.map((key) => <TipCard key={key} text={t(key)} index={0} />)}
          </div>
        </TabsContent>
      </Tabs>

      {/* Offline Safety */}
      <div className="mt-8 space-y-4">
        <div className="bg-teal-dark rounded-2xl p-5 text-white">
          <div className="flex items-center gap-3 mb-2">
            <WifiOff className="w-6 h-6" />
            <h2 className="text-xl font-bold font-poppins">{t('offlineTitle')}</h2>
          </div>
          <p className="text-white/80 text-sm">{t('offlineSubtitle')}</p>
        </div>
        <div className="space-y-2">
          {offlineTips.map((key) => <TipCard key={key} text={t(key)} index={0} />)}
        </div>
      </div>

      {/* Online Safety */}
      <div className="mt-8 space-y-4">
        <div className="bg-teal rounded-2xl p-5 text-white">
          <div className="flex items-center gap-3 mb-2">
            <Smartphone className="w-6 h-6" />
            <h2 className="text-xl font-bold font-poppins">{t('onlineTitle')}</h2>
          </div>
          <p className="text-white/80 text-sm">{t('onlineSubtitle')}</p>
        </div>
        <div className="space-y-2">
          {onlineTips.map((key) => <TipCard key={key} text={t(key)} index={0} />)}
        </div>
      </div>
    </div>
  );
}
