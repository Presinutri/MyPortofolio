'use client';

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export function BackButton() {
  const { lang } = useLanguage();

  return (
    <div className="flex justify-center py-12">
      <Link
        href="/"
        className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-2xl font-bold text-sm tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
        style={{
          background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #0f0f0f 100%)',
          color: '#ffffff',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Animated shimmer overlay */}
        <span
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(135deg, rgba(250,204,21,0.15) 0%, rgba(250,204,21,0.05) 50%, transparent 100%)',
          }}
        />

        {/* Arrow icon with animation */}
        <span className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-yellow-400 text-black font-black transition-transform duration-300 group-hover:-translate-x-1 text-base">
          ←
        </span>

        {/* Label */}
        <span className="relative text-white font-semibold">
          {lang === 'en' ? 'Back to Home' : 'Kembali ke Beranda'}
        </span>

        {/* Trailing dot */}
        <span className="relative w-2 h-2 rounded-full bg-yellow-400 opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125" />
      </Link>
    </div>
  );
}
