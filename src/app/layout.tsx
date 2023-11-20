import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Nav from '@/components/Nav/Nav';
import { AppProvider } from '@/context/AppProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IC Bank',
  description: 'Make splitting bills with friends easy!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const mode = 'dark';

  return (
    <html lang="en">
      <AppProvider>
        <body
          className={`${inter.className} ${mode} relative overflow-x-hidden `}
        >
          <div className="relative z-20">
            <Nav />
            {children}
          </div>
          <div className="fixed left-0 top-0 h-screen w-screen bg-gradient-to-b from-stone-800/80 from-5% via-stone-900/80 via-70% to-violet-800/20"></div>
        </body>
      </AppProvider>
    </html>
  );
}
