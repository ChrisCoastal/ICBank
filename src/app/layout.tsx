import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SettingsMenu from '@/components/SettingsMenu/SettingsMenu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { AppProvider } from '@/context/AppProvider';

const inter = Inter({ subsets: ['latin'] });

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
        <body className={`${inter.className} ${mode}`}>
          <nav className="h-16 border-b-white/20 border-b flex  justify-between items-center mx-4 mb-4">
            <h1>cool bank</h1>
            <div className="flex  gap-4">
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>$$</AvatarFallback>
              </Avatar>
              <SettingsMenu />
            </div>
          </nav>
          {children}
        </body>
      </AppProvider>
    </html>
  );
}