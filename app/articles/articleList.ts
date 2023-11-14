type Article = {
  title: string;
  author: string;
  date: string;
  excerpt: string;
  slug: string;
  image: string;
};

export const articleList: Article[] = [
  {
    title: 'Upgrading React Router to v6',
    author: 'Hasan Wajahat',
    excerpt: 'A detailed guide on upgrading react router from version 3 to 6.',
    date: '25-10-2023',
    slug: 'react-router-upgrade',
    image: 'https://picsum.photos/200/300',
  },
];
