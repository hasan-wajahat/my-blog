export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="container mx-auto p-4 font-sans prose-headings:font-serif">
      {children}
    </main>
  );
}
