import { MetadataRoute } from 'next';
import { articleList } from './articles/articleList';

export default function sitemap(): MetadataRoute.Sitemap {
  const articlesMaps: MetadataRoute.Sitemap = articleList.map((article) => ({
    url: `https://frontendwithhasan.com/articles/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: 'https://frontendwithhasan.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://frontendwithhasan.com/about-me',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...articlesMaps,
  ];
}
