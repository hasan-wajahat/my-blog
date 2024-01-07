import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Inter, Dosis } from 'next/font/google';
import Header from './components/Header';
import { cn } from './lib/utils';

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
    <html lang="en" className="scroll-pt-12">
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
        <Header />
        {children}
        <Analytics
          beforeSend={(event) => {
            if (
              event.url === 'https://frontendwithhasan.com/' ||
              event.url === 'https://frontendwithhasan.com'
            ) {
              return null;
            }
            return event;
          }}
        />
      </body>
    </html>
  );
}
