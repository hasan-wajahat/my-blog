import { Metadata } from 'next';

type Article = {
  title: string;
  author: string;
  date: string;
  excerpt: string;
  slug: string;
};

export const articleList: Article[] = [
  {
    title: 'Upgrading React Router to v6',
    author: 'Hasan Wajahat',
    excerpt: 'A detailed guide on upgrading react router from version 3 to 6.',
    date: '25-10-2023',
    slug: 'react-router-upgrade',
  },
  {
    title: 'Container Queries',
    author: 'Hasan Wajahat',
    excerpt: 'A guide on how to start using container queries today.',
    date: '31-01-2024',
    slug: 'container-queries',
  },
  // {
  //   title: 'Running Playwright in AWS Lambda',
  //   author: 'Hasan Wajahat',
  //   excerpt:
  //     'A guide on how to run playwright as a docker container in AWS Lambda.',
  //   date: '15-06-2024',
  //   slug: 'playwright-aws-lambda',
  // },
];

export const getArticleBySlug = (slug: string) =>
  articleList.find((article) => article.slug === slug);

export const getMetadataForArticles = (slug: string): Metadata => {
  const currentArticle = getArticleBySlug(slug);

  return {
    title: currentArticle?.title,
    description: currentArticle?.excerpt,
    metadataBase: new URL('https://frontendwithhasan.com/'),
    openGraph: {
      title: currentArticle?.title,
      description: currentArticle?.excerpt,
      url: `articles/${slug}`,
      siteName: 'Frontend with Hasan',
      images: [
        {
          url: 'og.jpg',
          width: 800,
          height: 800,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  };
};
