import React from 'react';

import Image from 'next/image';
import { images } from '@/exports/images';
import { AppStore, FillSpeedIcon, GooglePlay } from '../../SVGs/Icons';

const Hero = () => {
  return (
    <section className={` py-5`}>
      <section className='container grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <article
          className='bg-white rounded-lg p-7  flex flex-col justify-center gap-4 text-center lg:text-start'
          // data-aos='fade-right'
          // data-aos-duration='1000'
        >
          <h1 className=''>
            One App, <br /> Endless Financial Possibilities
            <span className='hidden lg:inline-block ml-2 '>
              {' '}
              <FillSpeedIcon />
            </span>
          </h1>
          <p className='text-base lg:text-xl text-grayish-400'>
            Whether you&apos;re a seasoned crypto user or new to digital
            finance, we&apos;re here to make your financial journey smarter,
            faster, and more rewarding. Experience a new way to manage, save,
            and grow your wealth—all in one place.
          </p>
          <div className='flex justify-center gap-3 items-center mt-10 w-full lg:w-7/12'>
            <AppStore />
            <GooglePlay />{' '}
          </div>
        </article>

        <figure
          data-aos='zoom-in-right'
          data-aos-duration='1000'
          className='overflow-hidden rounded-lg'
        >
          <Image
            src={images.homehero}
            alt=''
            className='!h-full object-cover'
          />
        </figure>
      </section>
    </section>
  );
};

export default Hero;
