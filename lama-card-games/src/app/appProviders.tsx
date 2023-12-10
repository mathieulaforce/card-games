import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/themeProvider';
import SessionProvider from '@/components/sessionProvider';
import { getServerSession } from 'next-auth';

export const metadata: Metadata = {
  title: 'LaMa Card Games',
  description: 'Card games build rebuild by LaMa',
};

export default async function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <SessionProvider session={session}>
      <ThemeProvider
        attribute='class'
        defaultTheme='dark'
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
}
