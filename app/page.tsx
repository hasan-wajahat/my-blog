import Image from "next/image";
import heroImage from './images/hero.jpeg'

export default function Home() {
  return (
    <main className="container p-4 mx-auto">
      <div>
        <Image src={heroImage} alt="Hero Image" className="max-w-lg" />
      </div>
    </main>
  );
}
