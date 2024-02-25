import type { Metadata } from 'next';
import { Inter, Dosis } from 'next/font/google';
import Header from './components/Header';
import { cn } from './lib/utils';
import './globals.css';
import { ThemeProvider } from './ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
const dosis = Dosis({
  subsets: ['latin'],
  variable: '--font-dosis',
});

export const metadata: Metadata = {
  title: 'Learn Frontend With Hasan',
  description: 'Frontend topics explained in simple words',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Hydration warning is suppressed to handle theme switching
    <html lang="en" className="scroll-pt-12" suppressHydrationWarning>
      <body
        className={cn(
          inter.variable,
          dosis.variable,
          'bg-gray-50',
          'dark:bg-gray-900',
          'text-black',
          'dark:text-white',
          'font-sans'
        )}
      >
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
