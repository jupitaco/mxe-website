import Ready from '@/components/Ready';
import { images } from '@/exports/images';
import Image from 'next/image';
import React from 'react';

export default function page() {
  return (
    <main>
      <section className='container py-10 bg-[#FEFEFE]'>
        <div
          className='text-center  space-y-6 max-w-[700px] mx-auto'
          data-aos='fade-down'
          data-aos-duration=''
        >
          <h1>
            Spend <b className='text-[#FF9C00] font-normal'> Globally</b> with
            One
            <b className='text-[#061F25C9] font-normal'> Powerful Card</b>
          </h1>
          <p className='text-grayish-400'>
            Instantly create a virtual card that allows you to shop online,
            manage subscriptions, and make payments worldwide—all without the
            need for a physical card.
          </p>
        </div>

        <figure className='mt-4'>
          <Image src={images.vcard} alt='' />
        </figure>
      </section>

      <section className='py-10 container '>
        <hgroup className='mb-4 max-w-[500px]'>
          <h3>A More Powerful Alternative to Your Bank&apos;s Debit Card</h3>
        </hgroup>
        <article className='grid grid-cols-1 lg:grid-cols-3 gap-4 overflow-hidden'>
          <div className='bg-[#EFF9F9] rounded-2xl p-8 space-y-6'>
            <figure
              data-aos='zoom-in'
              data-aos-duration='1000'
              className='w-9//12 mx-auto'
            >
              <Image src={images.instant} alt='' />
            </figure>

            <div
              className='space-y-3 text-center'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <h5 className='font-medium text0xl lg:text-3xl'>
                Instant Activation
              </h5>
              <p className='text-grayish-400'>
                Get your virtual card instantly—no waiting, no hassle.
              </p>
            </div>
          </div>
          <div className='bg-[#ECF6EE] rounded-2xl pt-8 space-y-6'>
            <figure
              data-aos='zoom-in'
              data-aos-duration='1000'
              className='px-3'
            >
              <Image src={images.global} alt='' />
            </figure>

            <div
              className='space-y-3 text-center px-8'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <h5 className='font-medium text0xl lg:text-3xl'>
                Global Payments
              </h5>
              <p className='text-grayish-400'>
                Shop online or pay bills anywhere, in any currency
              </p>
            </div>
          </div>
          <div className='bg-[#FBF2E8] rounded-2xl p-8 space-y-6'>
            <figure data-aos='zoom-in' data-aos-duration='1000'>
              <Image src={images.control} alt='' />
            </figure>

            <div
              className='space-y-3 text-center'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <h5 className='font-medium text0xl lg:text-3xl'>Full Control</h5>
              <p className='text-grayish-400'>
                Track every purchase, and manage your card directly from the
                app.
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className='mt-10 py-20 bg-white'>
        <section className='container'>
          <article className='space-y-4 mb-10'>
            <h3>Get started in 3 steps</h3>
            <p className='max-w-[601px] text-grayish-400'>
              Lorem ipsum dolor sit amet consectetur. Pellentesque tortor
              venenatis imperdiet habitant non. Habitant commodo nulla sed
              dictumst platea dictumst. Nulla justo nam varius egestas enim
              viverra lorem. Commodo sit.
            </p>
          </article>

          <article className='flex flex-wrap justify-between items-center'>
            <figure className='w-full lg:w-5/12' data-aos='fade-right'>
              <Image src={images.fundcard} alt='' />
            </figure>
            <div
              className=' flex flex-col gap-7 w-full lg:w-6/12'
              data-aos='fade-left'
            >
              <div className='py-6'>
                <p>Create Your Virtual Card</p>
              </div>
              <div className='py-6 text-[#818898] border-[#DFE1E7] border-t'>
                <p>Fund Your Virtual Card</p>
                <p className='max-w-[601px] text-grayish-400 mt-4'>
                  Top up your virtual card by funding it through any of these
                  three methods: deposit in NGN, transfer from your MXE wallet,
                  or link your bank account. Enjoy the flexibility of loading
                  your card however it suits you best.
                </p>
              </div>
              <div className='py-6 text-[#818898] border-[#DFE1E7] border-t'>
                <p>Start Spending</p>
              </div>
            </div>
          </article>
        </section>
      </section>

      <section className='py-10'>
        <Ready />
      </section>
    </main>
  );
}
