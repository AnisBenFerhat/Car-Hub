import { Hero, CarCatalogue, CarResults } from '@/components';

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Hero />
      <CarCatalogue />
      <CarResults />
    </main>
  );
}
