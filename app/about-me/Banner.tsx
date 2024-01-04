import Image from 'next/image';
import profileImg from '@/images/hasan.png';
import profileImgSmall from '@/images/hasan_small.png';
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
    <section className="relative inline-flex flex-col md:flex">
      <div className="my-4 flex md:my-0">
        <div className="mr-2 md:hidden">
          <Image
            src={profileImgSmall}
            alt="Hasan"
            priority
            className="w-[120px] rounded-full bg-gray-200 object-cover dark:bg-gray-600"
          />
        </div>
        <div className="flex flex-shrink flex-grow basis-0 md:justify-center">
          <div>
            <p className="my-1 md:my-4">Hello</p>
            <h1 className="mb-2 text-2xl md:mb-6 md:text-6xl">
              I&rsquo;m Hasan
            </h1>
            <h2 className="text-sm md:mb-4 md:text-2xl">
              A passionate web developer.
            </h2>
            <h2 className="text-sm md:mb-4 md:text-2xl">
              With over {experience} years of experience
            </h2>
            <h2 className="text-sm md:text-2xl">developing web apps.</h2>
          </div>
        </div>
        <div className="hidden flex-shrink flex-grow basis-0 justify-center rounded-md bg-gradient-to-r from-transparent dark:to-[#03a8f430] md:flex">
          <Image src={profileImg} alt="Hasan" priority className="w-[420px]" />
        </div>
      </div>

      <div className="relative inline-flex flex-wrap justify-center gap-3 rounded-lg bg-gray-200 px-5 py-3 shadow-[0_0_2px_2px] shadow-gray-500/20 dark:bg-gray-900 md:bottom-10 md:mx-auto md:flex md:flex-nowrap md:gap-5 lg:max-w-[80%]">
        <Image
          src={reactLogo}
          alt="React logo"
          className="h-8 w-8 md:h-20 md:w-20"
        />
        <Image
          src={nextJsLogo}
          alt="Next JS logo"
          className="h-8 w-8 md:h-20 md:w-20"
        />
        <Image
          src={reduxLogo}
          alt="Redux logo"
          className="h-8 w-8 md:h-20 md:w-20"
        />
        <Image
          src={laravelLogo}
          alt="Laravel logo"
          className="h-8 w-8 md:h-20 md:w-20"
        />
        <Image
          src={goLogo}
          alt="Git logo"
          className="h-8 w-8 md:h-20 md:w-20"
        />
        <Image
          src={lambdaLogo}
          alt="Node logo"
          className="h-8 w-8 md:h-20 md:w-20"
        />
        <Image
          src={dockerLogo}
          alt="Docker logo"
          className="h-8 w-8 md:h-20 md:w-20"
        />
      </div>
    </section>
  );
};

export default Banner;
