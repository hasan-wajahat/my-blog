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
      href={`/articles/${slug}`}
      prefetch={true}
      className="group mb-4 block rounded-lg bg-gradient-to-r from-stone-200 p-4 dark:from-gray-800"
    >
      <h3 className="mb-2 font-serif text-xl font-bold group-hover:text-sky-500">
        {title}
      </h3>
      <p className="mb-2 text-sm">
        By {author} on <time dateTime={date}>{date}</time>
      </p>
      <p className="mb-2 max-w-prose">{excerpt}</p>
      <div>
        Read More <span className="text-sky-500"> -&gt;</span>
      </div>
    </Link>
  );
};

export default ArticleTile;
