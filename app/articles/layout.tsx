export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="prose mx-auto p-4 font-sans dark:prose-invert lg:prose-xl prose-headings:font-serif">
      {children}
    </main>
  );
}
