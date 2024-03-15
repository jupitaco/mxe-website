import FaqHero from '@/components/FAQComps/FaqHero';
import React from 'react';

const page = ({ params }: { params: { id: number | string } }) => {
  return (
    <main className='flex flex-col bg-[#F5F5F7]'>
      <FaqHero />

      <h1>{params.id}</h1>
    </main>
  );
};

export default page;
