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
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum,',
    date: '25-10-2023',
    slug: 'react-router-upgrade',
    image: 'https://picsum.photos/200/300',
  },
];
