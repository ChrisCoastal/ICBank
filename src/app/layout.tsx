import './globals.css';

import type { Metadata } from 'next';
import { Inter, Red_Hat_Display } from 'next/font/google';
import Link from 'next/link';

import SettingsMenu from '@/components/SettingsMenu/SettingsMenu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { AppProvider } from '@/context/AppProvider';

const inter = Inter({ subsets: ['latin'] });
const redHatDisplay = Red_Hat_Display({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
          className={`${inter.className} ${mode} bg-gradient-to-b from-stone-800 to-stone-900 h-screen overflow-x-hidden`}
        >
          <div>
            <nav className="h-16 border-b-white/20 border-b flex justify-between items-center mx-4 mb-4">
              <Link href={'/'}>
                <div className="">
                  <h1 className="text-2xl font-black">
                    <span className="text-emerald-300 mr-0.5">IC</span>Bank
                  </h1>
                </div>
              </Link>
              <div className="flex gap-4">
                <div className="rounded-full p-0.5 bg-gradient-to-br from-emerald-300 to-emerald-500">
                  <Avatar>
                    <AvatarImage src={'/assets/bear-avatar.png'} />
                    <AvatarFallback>CB</AvatarFallback>
                  </Avatar>
                </div>
                <SettingsMenu />
              </div>
            </nav>
            {children}
          </div>
        </body>
      </AppProvider>
    </html>
  );
}
