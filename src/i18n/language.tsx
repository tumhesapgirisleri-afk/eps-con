import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { es } from "./es";

export type Lang = "en" | "tr" | "es";

export const LANGUAGES: { code: Lang; label: string; name: string }[] = [
  { code: "en", label: "EN", name: "English" },
  { code: "tr", label: "TR", name: "Türkçe" },
  { code: "es", label: "ES", name: "Español" },
];

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "eps-lang";

function isLang(value: unknown): value is Lang {
  return value === "en" || value === "tr" || value === "es";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isLang(stored)) setLangState(stored);
    } catch {
      /* ignore */
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.lang = next;
    } catch {
      /* ignore */
    }
  };

  const toggle = () => {
    const order: Lang[] = ["en", "tr", "es"];
    const idx = order.indexOf(lang);
    setLang(order[(idx + 1) % order.length]);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

/** Pick the value for the current language. Spanish is resolved from the
 *  dictionary keyed by the English source string, falling back to English. */
export function useT() {
  const { lang } = useLanguage();
  return (en: string, tr: string) => {
    if (lang === "tr") return tr;
    if (lang === "es") return es[en] ?? en;
    return en;
  };
}
