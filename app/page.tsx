import Image from "next/image";
import heroImage from './images/hero.jpeg'

export default function Home() {
  return (
    <main className="container p-4 mx-auto">
      <div className="max-[350px]:columns-1 columns-2 max-w-4xl mx-auto">
        <div>
          <h1 className="font-serif font-bold text-xl md:text-5xl xl:text-6xl">
            Sharing many years of frontend experience with practical examples.
          </h1>
          <h2 className="font-serif my-4 lg:my-8 text-lg md:text-xl">
            Come and learn all things frontend with me!
          </h2>
        </div>
        <Image src={heroImage} alt="Hero Image" className="max-[350px]:hidden" />
      </div>
    </main>
  );
}
