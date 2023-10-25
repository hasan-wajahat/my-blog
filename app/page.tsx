import Image from 'next/image';
import heroImage from './images/hero.jpeg';
import ArticleTile from './components/ArticleTile';
import { articleList } from './articles/articleList';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <div className="mx-auto max-w-4xl columns-2 max-[390px]:columns-1">
        <div>
          <h1 className="font-serif text-xl font-bold md:text-5xl xl:text-6xl">
            Sharing many years of frontend experience with practical examples.
          </h1>
          <h2 className="my-4 font-serif text-lg md:text-xl lg:my-8">
            Come and learn all things frontend with me!
          </h2>
        </div>
        <Image
          src={heroImage}
          priority
          alt="Hero Image"
          aria-hidden
          className="max-[390px]:hidden"
        />
      </div>

      <div className="my-8 max-w-3xl">
        {articleList.map((article) => (
          <ArticleTile
            key={article.slug}
            title={article.title}
            author={article.author}
            excerpt={article.excerpt}
            date={article.date}
            slug={article.slug}
          />
        ))}
      </div>
    </main>
  );
}
