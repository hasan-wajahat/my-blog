'use client';
import { useEffect } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, []);
  return (
    <main className="prose mx-auto p-4 font-sans dark:prose-invert lg:prose-xl prose-headings:font-serif">
      {children}
    </main>
  );
}
