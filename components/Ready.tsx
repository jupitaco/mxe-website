import React from 'react';
import { AppStore, GooglePlay } from './SVGs/Icons';
import Image from 'next/image';
import { images } from '@/exports/images';

const Ready = () => {
  return (
    <section className='ready container flex flex-wrap gap-3 justify-between items-center rounded-3xl overflow-hidden'>
      <article
        // data-aos='fade-right'
        className={`w-full lg:w-[73%]   rounded-[32px] flex flex-col justify-center gap-4 text-[#fff] px-4 md:px-10 py-5 lg:py-0`}
      >
        <h3 className='font-bold max-w-[250px] lg:max-w-[800px]'>
          Ready to Master the Future of Finance?
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Ac consequat id lorem id massa
          viverra sed. Amet sed lobortis neque scelerisque. Nunc leo augue
          adipiscing blandit nullam nibh leo. Felis ultricies lorem eget posuere
          diam arcu. Dui et cursus pulvinar auctor lobortis. Ac cursus netus
          ullamcorper at eget blandit euismod sed sollicitudin.
        </p>
        <div className='flex justify-center gap-3 items-center mt-5 w-full lg:w-5/12'>
          <AppStore />
          <GooglePlay />{' '}
        </div>
      </article>
      <figure
        className='w-full lg:w-[25%] px-5 pt-5 lg:pt-20'
        // data-aos='fade-left'
      >
        <Image src={images.readymock} alt='' />
      </figure>
    </section>
  );
};

export default Ready;
