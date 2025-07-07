import { Metadata } from 'next';
import Hero from '@/components/tools/reverse-complement/Hero';
import Generator from '@/components/tools/reverse-complement/Generator';
import Cta from '@/components/product/Cta';

export const metadata: Metadata = {
  title: 'Tracer | Reverse Complement Generator',
  description: 'Get the reverse, complement, or reverse complement of any DNA sequence as quickly as we can provide visibility into your bioinformatic pipelines.',
};

export default function ReverseComplementPage() {
  return (
    <main className="w-full min-h-screen bg-[#FCFCFC]">
      <Hero />
      <Generator />
      <Cta />
    </main>
  );
}
