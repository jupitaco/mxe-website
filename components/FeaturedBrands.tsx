import React from 'react';

import Image from 'next/image';
import { images } from '@/exports/images';

const FeaturedBrands = () => {
  const brandImages = [
    { id: 1, inActiveLogo: images.brand1, activeLogo: images.brand1a },
    { id: 4, inActiveLogo: images.brand4, activeLogo: images.brand4a },
    { id: 2, inActiveLogo: images.brand2, activeLogo: images.brand2a },
    { id: 3, inActiveLogo: images.brand3, activeLogo: images.brand3a },
    { id: 5, inActiveLogo: images.brand5, activeLogo: images.brand5a },
  ];

  return (
    <section className='my-[100px] w-full lg:w-6/12 mx-auto'>
      <h4 className='text-center my-5 text-grayish-400 text-sm lg:text-xl'>
        As Featured in
      </h4>
      <article className='flex flex-wrap items-center gap-5 justify-center lg:justify-between '>
        {brandImages.map(({ id, activeLogo }) => (
          <figure key={id} className='brandLogos relative w-3/12 lg:w-2/12'>
            {/* <Image src={inActiveLogo} alt='' className='brand1' /> */}
            <Image src={activeLogo} alt='' className=' ' />
            {/* <Image
              src={activeLogo}
              alt=''
              className='brand2 absolute top-0 left-0 right-0'
            /> */}
          </figure>
        ))}
      </article>
    </section>
  );
};

export default FeaturedBrands;
