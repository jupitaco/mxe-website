import FaqCards from '@/components/FAQComps/FaqCards';
import FaqComps from '@/components/FAQComps/FaqComps';
import FaqHero from '@/components/FAQComps/FaqHero';
import React from 'react';

const dats = [
  {
    id: 1,
    question: 'How long do withdrawal take?',
    desc: 'Lorem ipsum dolor sit amet consectetur. Pellentesque tortor venenatis imperdiet habitant non. Habitant commodo nulla sed dictumst platea dictumst. Nulla justo nam varius egestas enim viverra lorem. Commodo sit.',
  },
  {
    id: 2,
    question: 'Will I be charged tax?',
    desc: 'Metafi is required to charge tax on certain products and services. Tax is charged based on your location and/ or your business/ tax status , which determines whether a product or service is subject to taxes, and the applicable tax rates.',
  },
  {
    id: 3,
    question: 'How do virtual cards work?',
    desc: 'Lorem ipsum dolor sit amet consectetur. Pellentesque tortor venenatis imperdiet habitant non. Habitant commodo nulla sed dictumst platea dictumst. Nulla justo nam varius egestas enim viverra lorem. Commodo sit.',
  },
];
const FAQs = () => {
  return (
    <main className='flex flex-col bg-[#F5F5F7]'>
      <FaqHero />
      <section className='bg-white'>
        <hgroup className='text-center max-w-[600px] mx-auto pt-20 space-y-3'>
          <h3>Browse by Topics</h3>
          <p className='text-grayish-400'>
            Here&apos;s what other people are finding most useful right now:
          </p>
        </hgroup>
        <FaqCards />
      </section>
      <section className='w-full lg:w-7/12 mx-auto'>
        <hgroup className='text-center pt-20 space-y-3'>
          <h3>Popular Questions</h3>
          <p className='text-grayish-400'>
            Here&apos;s what other people are finding most useful right now:
          </p>
        </hgroup>

        <FaqComps faqData={dats} />
      </section>
    </main>
  );
};

export default FAQs;
