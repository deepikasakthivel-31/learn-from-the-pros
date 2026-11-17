import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import { supportedLanguages, type SupportedLanguage } from "@/lib/marketplace";

type LanguageContextValue = {
  language: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "skills-exchange-language";
const languageCodes: Record<SupportedLanguage, string> = {
  English: "en",
  Tamil: "ta",
  Hindi: "hi",
  Telugu: "te",
  Malayalam: "ml",
  Kannada: "kn",
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<SupportedLanguage>("English");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && supportedLanguages.includes(saved as SupportedLanguage)) {
      setLanguage(saved as SupportedLanguage);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = languageCodes[language];
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}