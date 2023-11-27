import Image from "next/image";
import profileImg from '@/images/hasan.webp';

const Banner = () => {
  const currentYear = new Date().getFullYear();
  const experience = currentYear - 2015;
  return (
    <div className="flex">
      <div className="flex flex-grow flex-shrink basis-0 justify-center">
        <div>
          <p className="my-4">Hello</p>
          <h2 className="text-5xl mb-6">I&rsquo;m Hasan</h2>
          <h3 className="text-xl mb-4">A passionate web developer.</h3>
          <h3 className="text-xl mb-4">With over {experience} years of experience</h3>
          <h3 className="text-xl">developing web apps.</h3>
        </div>
      </div>
      <div className="flex flex-grow flex-shrink basis-0 justify-center bg-gradient-to-r from-sky-500 to-sky-300">
        <Image src={profileImg} alt="Hasan" className="w-[420px]" />
      </div>
    </div>
  );
}

export default Banner;