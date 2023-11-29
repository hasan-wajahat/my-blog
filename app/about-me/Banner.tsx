import Image from 'next/image';
import profileImg from '@/images/hasan.png';
import ReactLogo from '@/images/banner/react-logo.png';
import AngularLogo from '@/images/banner/angular-logo.png';
import ReduxLogo from '@/images/banner/redux-logo.png';
import LaravelLogo from '@/images/banner/laravel-logo.png';
import NodeLogo from '@/images/banner/node-logo.png';
import GitLogo from '@/images/banner/git-logo.png';
import DockerLogo from '@/images/banner/docker-logo.png';

const Banner = () => {
  const currentYear = new Date().getFullYear();
  const experience = currentYear - 2015;
  return (
    <div className="relative flex flex-col">
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

      <div className="relative bottom-10 mx-auto flex max-w-[80%] rounded-lg bg-gray-900 px-5 py-3 shadow-sm shadow-gray-500/20">
        <Image src={ReactLogo} alt="React logo" className="mr-5 h-20 w-20" />
        <Image
          src={AngularLogo}
          alt="Angular logo"
          className="mr-5 h-20 w-20"
        />
        <Image src={ReduxLogo} alt="Redux logo" className="mr-5 h-20 w-20" />
        <Image
          src={LaravelLogo}
          alt="Laravel logo"
          className="mr-5 h-20 w-20"
        />
        <Image src={GitLogo} alt="Git logo" className="mr-5 h-20 w-20" />
        <Image src={NodeLogo} alt="Node logo" className="mr-5 h-20 w-20" />
        <Image src={DockerLogo} alt="Docker logo" className="h-20 w-20" />
      </div>
    </div>
  );
};

export default Banner;
