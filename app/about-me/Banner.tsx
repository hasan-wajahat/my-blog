import Image from 'next/image';
import profileImg from '@/images/hasan.png';
import reactLogo from '@/images/logos/react.png';
import nextJsLogo from '@/images/logos/nextjs.svg';
import reduxLogo from '@/images/logos/redux.png';
import laravelLogo from '@/images/logos/laravel.png';
import lambdaLogo from '@/images/logos/lambda.svg';
import goLogo from '@/images/logos/go.png';
import dockerLogo from '@/images/logos/docker.png';

const Banner = () => {
  const currentYear = new Date().getFullYear();
  const experience = currentYear - 2015;
  return (
    <section className="relative flex flex-col">
      <div className="flex">
        <div className="flex flex-shrink flex-grow basis-0 justify-center">
          <div>
            <p className="my-4">Hello</p>
            <h1 className="mb-6 text-6xl">I&rsquo;m Hasan</h1>
            <h2 className="mb-4 text-2xl">A passionate web developer.</h2>
            <h2 className="mb-4 text-2xl">
              With over {experience} years of experience
            </h2>
            <h2 className="text-2xl">developing web apps.</h2>
          </div>
        </div>
        <div className="flex flex-shrink flex-grow basis-0 justify-center rounded-md bg-gradient-to-r from-transparent to-[#03a8f430]">
          <Image src={profileImg} alt="Hasan" priority className="w-[420px]" />
        </div>
      </div>

      <div className="relative bottom-10 mx-auto flex max-w-[80%] rounded-lg bg-gray-900 px-5 py-3 shadow-[0_0_2px_2px] shadow-gray-500/20">
        <Image src={reactLogo} alt="React logo" className="mr-5 h-20 w-20" />
        <Image src={nextJsLogo} alt="Next JS logo" className="mr-5 h-20 w-20" />
        <Image src={reduxLogo} alt="Redux logo" className="mr-5 h-20 w-20" />
        <Image
          src={laravelLogo}
          alt="Laravel logo"
          className="mr-5 h-20 w-20"
        />
        <Image src={goLogo} alt="Git logo" className="mr-5 h-20 w-20" />
        <Image src={lambdaLogo} alt="Node logo" className="mr-5 h-20 w-20" />
        <Image src={dockerLogo} alt="Docker logo" className="h-20 w-20" />
      </div>
    </section>
  );
};

export default Banner;
