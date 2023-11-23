import Link from "next/link";

const Header = () => {
  return (
    <header className="container sticky top-0 mx-auto p-4 bg-gray-50 dark:bg-gray-900">
      <Link href={"/"}>
        <span className="font-serif font-bold text-xl text-sky-500 mr-8">
          Frontend With Hasan
        </span>
      </Link>
      <Link href={"/about-me"}>
        <span className="font-bold text-lg">
          About Me
        </span>
      </Link>
    </header>
  );
};

export default Header;
