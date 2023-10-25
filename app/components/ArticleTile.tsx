interface ArticleTileProps {
  title: string;
  author: string;
  date: string;
  excerpt: string;
}

const ArticleTile: React.FC<ArticleTileProps> = ({
  title,
  author,
  date,
  excerpt,
}) => {
  return (
    <div className="rounded-lg bg-gray-800 bg-opacity-50 p-4">
      <h2>{title}</h2>
      <p>
        By {author} on {date}
      </p>
      <p>{excerpt}</p>
    </div>
  );
};

export default ArticleTile;
