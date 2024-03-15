import React from 'react';
import { BorderedAppStore, BorderedGooglePlay } from './SVGs/Icons';
import Image from 'next/image';
import { images } from '@/exports/images';

const TransformFinances = ({
  bgColor,
  brands,
}: {
  bgColor: string;
  brands?: boolean;
}) => {
  const brandImages = [
    { id: 1, inActiveLogo: images.brand1, activeLogo: images.brand1a },
    { id: 4, inActiveLogo: images.brand4, activeLogo: images.brand4a },
    { id: 2, inActiveLogo: images.brand2, activeLogo: images.brand2a },
    { id: 3, inActiveLogo: images.brand3, activeLogo: images.brand3a },
    { id: 5, inActiveLogo: images.brand5, activeLogo: images.brand5a },
  ];

  return (
    <main className='overflow-hidden'>
      <section className='container flex flex-col md:flex-row gap-3 justify-between'>
        <figure className='w-full md:w-4/12' data-aos='fade-left'>
          <Image src={images.transformFinance} alt='' />
        </figure>
        <article
          data-aos='fade-right'
          className={`w-full md:w-[65%] ${bgColor} rounded-[32px] flex flex-col justify-center gap-4 text-[#fff] px-4 md:px-10 py-5 md:py-0`}
        >
          <h1>Ready to Transform Your Finances?</h1>
          <p>
            Download the MXE app today to transform the way you manage your
            finances.
          </p>
          <div className='flex justify-center gap-3 w-full md:w-8/12 py-2'>
            <BorderedAppStore />
            <BorderedGooglePlay />
          </div>
        </article>
      </section>

      {brands && (
        <section className='my-[100px] container'>
          <h3 className='text-center my-5'>As Featured in</h3>
          <article className='flex flex-wrap items-center gap-5 justify-center lg:justify-between '>
            {brandImages.map(({ id, inActiveLogo, activeLogo }) => (
              <figure key={id} className='brandLogos relative w-3/12 lg:w-2/12'>
                <Image src={inActiveLogo} alt='' className='brand1' />
                <Image
                  src={activeLogo}
                  alt=''
                  className='brand2 absolute top-0 left-0 right-0'
                />
              </figure>
            ))}
          </article>
        </section>
      )}
    </main>
  );
};

export default TransformFinances;
