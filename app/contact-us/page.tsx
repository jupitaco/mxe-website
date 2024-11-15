import ContactForm from '@/components/ContactForm';
import Ready from '@/components/Ready';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Contact Us',
};

export default function page() {
  return (
    <main className='pt-10 bg-[#F6F8FA]'>
      <hgroup
        className='py-10 text-center max-w-[600px] mx-auto space-y-6'
        data-aos='fade-up'
      >
        <h3 className='text-xl lg:text-[54px]'>Let&apos;s Talk</h3>
        <p className='text-grayish-400'>
          Join us as we explore tailored solutions, discuss industry insights,
          and collaborate to find the best strategies for your success.
        </p>
      </hgroup>

      <section
        className='max-w-[600px] mx-auto   bg-white rounded-lg card p-5 border !border-[#ECEFF3]'
        data-aos='fade-right'
      >
        <hgroup className='text-center py-5'>
          <h3>Speak to us</h3>
        </hgroup>
        <ContactForm />
      </section>

      <section className='py-10 bg-white mt-10'>
        <Ready />
      </section>
    </main>
  );
}
