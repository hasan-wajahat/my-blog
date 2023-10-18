import Link from "next/link";


const Header = () => {
    return (
        <header className="container mx-auto px-4 pt-4">
            <Link href={"/"}>
                <span>
                    Frontend With Hasan
                </span>
            </Link>
        </header>
    );
};

export default Header;
