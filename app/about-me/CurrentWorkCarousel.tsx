'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import sematext from '@/images/current-work/sematext.png';
import ixdf from '@/images/current-work/ixdf.png';
import agentResources from '@/images/current-work/agent-resources.jpg';
import reports from '@/images/current-work/reports.jpg';

const CurrentWorkCarousel = () => {
  return (
    <Carousel className="flex-1">
      <CarouselContent>
        <CarouselItem>
          <Image src={sematext} alt="Senatext example" />
        </CarouselItem>
        <CarouselItem>
          <Image src={ixdf} alt="IxDF example" />
        </CarouselItem>
        <CarouselItem>
          <Image src={agentResources} alt="Agent resources example" />
        </CarouselItem>
        <CarouselItem>
          <Image src={reports} alt="Reports example" />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CurrentWorkCarousel;
