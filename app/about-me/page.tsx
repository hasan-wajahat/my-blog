import { Metadata } from 'next';
import Banner from './Banner';
import CurrentWork from './CurrentWork';
import WhyMe from './WhyMe';

export const metadata: Metadata = {
  title: 'Hasan Wajahat CV',
  description: 'Hasan Wajahat CV/Resume - Frontend Developer',
};

export default function AboutMe() {
  return (
    <main className="container mx-auto">
      <Banner />
      <CurrentWork />
      <WhyMe />
    </main>
  );
}
