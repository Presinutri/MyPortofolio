'use client';

import { useLanguage } from '../context/LanguageContext';

interface TProps {
  /** Teks dalam bahasa Indonesia */
  id: string;
  /** Text in English */
  en: string;
}

/**
 * Komponen untuk menampilkan teks bilingual.
 * Gunakan di MDX seperti: <T id="Teks bahasa Indonesia" en="English text" />
 */
export function T({ id, en }: TProps) {
  const { lang } = useLanguage();
  return <>{lang === 'en' ? en : id}</>;
}
