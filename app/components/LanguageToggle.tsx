'use client';

import { useLanguage } from '../context/LanguageContext';

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-gray-100 rounded-full p-[3px] border border-gray-200">
      <button
        id="lang-toggle-id"
        onClick={() => setLang('id')}
        aria-label="Ganti ke Bahasa Indonesia"
        title="Bahasa Indonesia"
        className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
          lang === 'id'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'bg-transparent text-gray-500 hover:text-gray-800'
        }`}
      >
        🇮🇩 ID
      </button>
      <button
        id="lang-toggle-en"
        onClick={() => setLang('en')}
        aria-label="Switch to English"
        title="English"
        className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
          lang === 'en'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'bg-transparent text-gray-500 hover:text-gray-800'
        }`}
      >
        🇺🇸 EN
      </button>
    </div>
  );
}
