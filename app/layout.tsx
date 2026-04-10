import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider } from './context/LanguageContext';
import { LanguageToggle } from './components/LanguageToggle';

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
          <div className="sticky top-0 z-50 flex items-center justify-end gap-3 px-6 py-2 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm"> 
            <LanguageToggle />
          </div>


          <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 px-4 sm:px-6 md:px-8 pb-8 bg-white text-gray-900">
            <main className="max-w-[65ch] mx-auto w-full space-y-6">
              {children}
            </main>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}

function Footer() {
  const links = [
    { name: '@farizalbab', url: 'https://x.com/farizalbab' },
    { name: 'youtube', url: 'https://www.youtube.com/@Presinutri' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/farizalbab' },
    { name: 'github', url: 'https://github.com/Presinutri' }
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
