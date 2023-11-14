import Link from "next/link";

const Header = () => {
  return (
    <header className="container mx-auto mb-4 px-4 pt-4 bg-gray-50 dark:bg-gray-900">
      <Link href={"/"}>
        <span className="font-serif font-bold text-xl text-sky-500">
          Frontend With Hasan
        </span>
      </Link>
    </header>
  );
};

export default Header;
