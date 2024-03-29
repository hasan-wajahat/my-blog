import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';

const Header = () => {
  return (
    <header className="container sticky top-0 z-10 mx-auto flex items-center bg-gray-50 p-4 dark:bg-gray-900">
      <Link href={'/'}>
        <span className="mr-8 font-serif text-xl font-bold text-sky-500">
          Frontend With Hasan
        </span>
      </Link>
      <Link href={'/about-me'}>
        <span className="text-lg font-bold">About Me</span>
      </Link>
      <ThemeSwitch />
    </header>
  );
};

export default Header;
