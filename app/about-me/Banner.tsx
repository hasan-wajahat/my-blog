import Image from "next/image";
import profileImg from '@/images/hasan.png';

const Banner = () => {
  const currentYear = new Date().getFullYear();
  const experience = currentYear - 2015;
  return (
    <div className="flex">
      <div className="flex flex-grow flex-shrink basis-0 justify-center">
        <div>
          <p className="my-4">Hello</p>
          <h1 className="text-6xl mb-6">I&rsquo;m Hasan</h1>
          <h2 className="text-2xl mb-4">A passionate web developer.</h2>
          <h2 className="text-2xl mb-4">With over {experience} years of experience</h2>
          <h2 className="text-2xl">developing web apps.</h2>
        </div>
      </div>
      <div className="flex flex-grow flex-shrink basis-0 justify-center bg-gradient-to-r from-transparent to-[#03a8f430] rounded-md">
        <Image src={profileImg} alt="Hasan" priority className="w-[420px]" />
      </div>
    </div>
  );
}

export default Banner;