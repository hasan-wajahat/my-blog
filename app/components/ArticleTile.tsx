import Link from 'next/link';

interface ArticleTileProps {
  title: string;
  author: string;
  date: string;
  excerpt: string;
  slug: string;
}

const ArticleTile: React.FC<ArticleTileProps> = ({
  title,
  author,
  date,
  excerpt,
  slug,
}) => {
  return (
    <Link
      href={`/${slug}`}
      className="group block rounded-lg bg-gradient-to-r from-stone-200 p-4 dark:from-gray-800"
    >
      <h3 className="mb-2 font-serif text-xl font-bold group-hover:text-sky-500">
        {title}
      </h3>
      <p className="mb-2 font-sans text-sm">
        By {author} on <time dateTime={date}>{date}</time>
      </p>
      <p className="max-w-prose font-sans">{excerpt}</p>
    </Link>
  );
};

export default ArticleTile;
