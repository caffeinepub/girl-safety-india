import { useLanguage } from '../contexts/LanguageContext';
import { LanguageCode } from '../content/translations';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Globe } from 'lucide-react';

const LANGUAGES: { code: LanguageCode; label: string; nativeLabel: string }[] = [
  { code: 'en', label: 'English', nativeLabel: 'English' },
  { code: 'hi', label: 'Hindi', nativeLabel: 'हिंदी' },
  { code: 'ta', label: 'Tamil', nativeLabel: 'தமிழ்' },
  { code: 'te', label: 'Telugu', nativeLabel: 'తెలుగు' },
  { code: 'bn', label: 'Bengali', nativeLabel: 'বাংলা' },
  { code: 'mr', label: 'Marathi', nativeLabel: 'मराठी' },
  { code: 'kn', label: 'Kannada', nativeLabel: 'ಕನ್ನಡ' },
];

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <Select value={language} onValueChange={(val) => setLanguage(val as LanguageCode)}>
      <SelectTrigger className="w-auto min-w-[100px] bg-white/10 border-white/20 text-white hover:bg-white/20 focus:ring-white/30 h-9 text-sm gap-1">
        <Globe className="w-3.5 h-3.5 shrink-0" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="bg-white border-border">
        {LANGUAGES.map(({ code, nativeLabel }) => (
          <SelectItem key={code} value={code} className="cursor-pointer">
            <span className="font-medium">{nativeLabel}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
