import React, { createContext, useContext, useState, useCallback } from 'react';
import { LanguageCode, Translation, getTranslation } from '../content/translations';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: keyof Translation) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'safeher_language';
const VALID_LANGS: LanguageCode[] = ['en', 'hi', 'ta', 'te', 'bn', 'mr', 'kn'];

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && VALID_LANGS.includes(stored as LanguageCode)) {
        return stored as LanguageCode;
      }
    } catch {
      // ignore
    }
    return 'en';
  });

  const setLanguage = useCallback((lang: LanguageCode) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, []);

  const t = useCallback(
    (key: keyof Translation): string => {
      return getTranslation(language, key);
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
