import Ready from '@/components/Ready';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Contact Us',
};

export default function page() {
  return (
    <main className='py-10 bg-[#F6F8FA]'>
      <hgroup
        className='py-20 text-center max-w-[600px] mx-auto'
        data-aos='fade-up'
      >
        <h2>Let&apos;s Talk</h2>
        <p>
          Join us as we explore tailored solutions, discuss industry insights,
          and collaborate to find the best strategies for your success.
        </p>
      </hgroup>

      <section
        className='max-w-[600px] mx-auto   bg-white rounded-lg card p-5 !border-[#ECEFF3]'
        data-aos='fade-right'
      >
        <hgroup className='text-center'>
          <h5>Speak to us</h5>
        </hgroup>

        <form action='' className='mt-7 space-y-4'>
          <input
            name='fullName'
            type='text'
            className='w-full rounded-xl border border-border px-3 py-4'
            placeholder='Full name'
            required
          />
          <input
            name='email'
            type='text'
            className='w-full rounded-xl border border-border px-3 py-4'
            placeholder='Email address'
            required
          />
          <input
            name='subject'
            type='text'
            className='w-full rounded-xl border border-border px-3 py-4'
            placeholder='Subject title'
            required
          />
          <textarea
            name='message'
            className='w-full rounded-xl border border-border px-3 py-4'
            placeholder='Message'
            rows={6}
            required
          />

          <div className='flex w-full'>
            <button
              type='submit'
              className='main-btn !bg-black !rounded-lg w-full'
            >
              Send message
            </button>
          </div>
        </form>
      </section>

      <section className='py-10 bg-white mt-10'>
        <Ready />
      </section>
    </main>
  );
}
