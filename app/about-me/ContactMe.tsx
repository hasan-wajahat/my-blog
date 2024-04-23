'use client';
import { Button } from '@/components/ui/button';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContactMe = () => {
  return (
    <section className="text-center">
      <h2 className="my-4 text-2xl font-bold md:my-6">Contact Me</h2>
      <p className="my-4 text-xl font-bold">hasan_wajahat@hotmail.com</p>
      <div className="flex justify-center">
        <Button
          onClick={() => {
            window.location.href = 'mailto:hasan_wajahat@hotmail.com';
          }}
          className="mr-4 bg-slate-500 hover:bg-slate-400"
        >
          Contact Me
        </Button>
        <Button asChild className="bg-slate-500 hover:bg-slate-400">
          <a href="/resume.pdf" download>
            Download CV
          </a>
        </Button>
      </div>
      <div className="my-6 flex justify-center gap-6">
        <a
          href="https://github.com/hasan-wajahat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={32} className="fill-slate-600 hover:fill-slate-400" />
        </a>
        <a
          href="https://www.linkedin.com/in/hasan-wajahat-43423644/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            size={32}
            className="fill-slate-600 hover:fill-slate-400"
          />
        </a>
        <a
          href="https://twitter.com/hasanwajahat90"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter
            size={32}
            className="fill-slate-600 hover:fill-slate-400"
          />
        </a>
      </div>
    </section>
  );
};

export default ContactMe;
