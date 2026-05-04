import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider } from './context/LanguageContext';
import { LanguageToggle } from './components/LanguageToggle';
import { ExportPDFButton } from './components/ExportPDFButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://next-mdx-blog.vercel.app'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Fariz Albab',
    template: '%s | Fariz Albab'
  },
  description: 'My portfolio, blog, and personal website.'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="antialiased tracking-tight" suppressHydrationWarning>
        <LanguageProvider>
          {/* Language Topbar */}
          <div className="sticky top-0 z-50 flex items-center justify-end gap-3 px-6 py-2 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm print:hidden"> 
            <ExportPDFButton />
            <LanguageToggle />
          </div>

          <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 px-4 sm:px-6 md:px-8 pb-8 bg-white text-gray-900">
            <main className="max-w-[65ch] mx-auto w-full space-y-6">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}

function Footer() {
  const links = [
    { name: 'WhatsApp', url: 'https://wa.me/6282134326027' },
    { name: 'farizalbab@gmail.com', url: 'mailto:farizalbab@gmail.com' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/farizalbab' },
    { name: 'GitHub', url: 'https://github.com/Presinutri' }
  ];

  return (
    <footer className="mt-16 pt-8 pb-4 text-center print:hidden border-t border-slate-100">
      <div className="flex flex-wrap justify-center gap-6 tracking-tight text-sm font-medium">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-900 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
      <p className="mt-6 text-xs text-slate-400">
        © {new Date().getFullYear()} Fariz Albab. All rights reserved.
      </p>
    </footer>
  );
}
