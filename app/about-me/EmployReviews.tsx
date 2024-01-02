'use client';
import Image, { StaticImageData } from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import asafImage from '@/images/employ-reviews/asaf.jpg';
import ericImage from '@/images/employ-reviews/eric.jpg';
import chunImage from '@/images/employ-reviews/chun.jpg';
import anonymousImage from '@/images/employ-reviews/anonymous.png';

const EMPLOYER_DATA = [
  {
    name: 'Asaf Ebgi',
    title: 'Co-Founder & CTO, XYB',
    image: asafImage,
    testimonial:
      'Hasan has proven himself to be an excellent employee. During his tenure in XYB he has shown tremendous growth and initiative. We have always felt comfortable giving him projects due to his ability to finish tasks allotted to him. Also he has complete grip over all matters related to web technologies.',
  },
  {
    name: 'Eric Zimmerman',
    title: 'Co-Founder & CEO, XYB',
    image: ericImage,
    testimonial:
      "Hasan is a very talented developer. Over the 2+ years we've worked together, he's never stopped growing his skill set and exceeding expectations. He's always been very conscientious and has taken great cares in both his craft and client satisfaction. I would highly recommend him- his positive attitude and continuous-learning mindset sets him apart as someone I genuinely enjoy working with.",
  },
  {
    name: 'Hyunil Chon',
    title: 'Developer Team Lead, C2Monster',
    image: chunImage,
    testimonial:
      'I have really enjoyed having Hasan in my team, he was a quick learner and good team player. He is very enthusiastic about his trade which is always a good sign in young developers.',
  },
  {
    name: 'Jae Kim',
    title: 'CEO Online Hair Saloon',
    image: anonymousImage,
    testimonial:
      "Hasan is an exceptional freelancer. He's 100% fluent in English, well-rounded, and hard-working. He will not BS you with false promises - if there's something he's not best fit for, he'll let you know ahead of time and won't waste your time. An outstanding trustworthy freelancer who will not disappoint.",
  },
];

type CardProps = {
  image: StaticImageData;
  name: string;
  title: string;
  testimonial: string;
};

const Card = ({ image, name, title, testimonial }: CardProps) => {
  return (
    <article className="p-4 shadow-[0_0_2px_2px] shadow-gray-500/20">
      <div className="flex items-center">
        <Image className="h-16 w-16 rounded-full" src={image} alt={name} />
        <div className="ml-4">
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-sm">{title}</p>
        </div>
      </div>
      <p className="my-4">{testimonial}</p>
    </article>
  );
};

const EmployReviews = () => {
  return (
    <section className="mx-auto max-w-3xl">
      <h2 className="my-6 text-2xl font-bold">From My Employees</h2>
      <Carousel>
        <CarouselContent className="p-2">
          {EMPLOYER_DATA.map((employer) => (
            <CarouselItem key={employer.name} className="md:basis-1/2">
              <Card
                image={employer.image}
                name={employer.name}
                title={employer.title}
                testimonial={employer.testimonial}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="default" />
        <CarouselNext variant="default" />
      </Carousel>
    </section>
  );
};

export default EmployReviews;
