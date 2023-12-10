import { Inter } from 'next/font/google';
import './globals.css';
import NavMenu from '@/components/navMenu';
import AppProvider from './appProviders';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LaMa Card Games',
  description: 'Card games build rebuild by LaMa',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} max-h-min`}>
        <AppProvider>
          <NavMenu />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
