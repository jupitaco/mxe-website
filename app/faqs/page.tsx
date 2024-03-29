import FaqCards from '@/components/FAQComps/FaqCards';
import FaqHero from '@/components/FAQComps/FaqHero';
import React from 'react';

const FAQs = () => {
  return (
    <main className='flex flex-col bg-[#F5F5F7]'>
      <FaqHero /> <FaqCards />
    </main>
  );
};

export default FAQs;
