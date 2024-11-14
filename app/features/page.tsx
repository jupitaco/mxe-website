import { images } from '@/exports/images';
import Image from 'next/image';
import React from 'react';
import btclogos from '@/public/assets/logosssss.png';
import Ready from '@/components/Ready';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function page() {
  return (
    <main className='py-5'>
      <section className='container grid grid-cols-1 lg:grid-cols-2 gap-3'>
        <article
          className='rounded-[10px] bg-grayish-200 py-5 px-5 lg:px-10 space-y-5'
          data-aos='fade-right'
          data-aos-duration='1000'
        >
          <h1>Bridge the Gap: Effortless DeFi to Fiat Swaps</h1>
          <p className='text-grayish-400'>
            Lorem ipsum dolor sit amet consectetur. Venenatis est vel in
            fringilla. Massa velit at est mi vulputate eget commodo ultrices.
            Gravida odio posuere phasellus ut dui tincidunt. Orci duis aliquet
            augue urna hendrerit velit. Sed quis augue auctor eget.
          </p>

          <div>
            <button className='main-btn'>Swap now</button>
          </div>
        </article>

        <article
          className='px-5 pt-5 bg-grayish-300 rounded-[10px] flex flex-col justify-end gap-5'
          data-aos='fade-left'
          data-aos-duration='1000'
        >
          <figure className='w-6/12 mx-auto mb-5'>
            <Image src={btclogos} alt='' />
          </figure>
          <figure className='w-8/12 mx-auto'>
            <Image src={images.confirming} alt='' />
          </figure>
        </article>
      </section>
      <section className='container   my-10'>
        <h3 className='max-w-[600px]'>
          Lorem ipsum dolor sit amet consectetur. Eget tincidunt.
        </h3>
        <section className='  grid grid-cols-1 lg:grid-cols-2 gap-3 mt-5'>
          <article
            className=' bg-[#EFF9F9] rounded-[10px] flex flex-col justify-between gap-5 overflow-hidden'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <div
              className='text-center pt-10'
              data-aos='fade-down'
              data-aos-duration='1000'
            >
              <small>YOU ONLY NEED ONE APP</small>
              <h3 className='text-xl lg:text-5xl font-bold '>
                Instant Conversion
              </h3>
            </div>
            <figure className='' data-aos='fade-up' data-aos-delay='300'>
              <Image src={images.conversion} alt='' />
            </figure>
          </article>
          <article
            className='px-5 pt-5 bg-[#FBF2E8] rounded-[10px] flex flex-col justify-between gap-5 overflow-hidden'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <div
              className='text-center pt-10'
              data-aos='fade-down'
              data-aos-duration='1000'
            >
              <small className='uppercase'>market-leading exchange rates</small>
              <h3 className='text-xl lg:text-5xl font-bold '>
                Competitive Rates
              </h3>
            </div>
            <figure
              className='mx-auto w-7/12'
              data-aos='fade-up'
              data-aos-delay='300'
            >
              <Image src={images.rates} alt='' />
            </figure>
          </article>
        </section>
      </section>

      <section className='container   my-10'>
        <div className='max-w-[700px] w-full space-y-4'>
          <small className='text-[#0828B1]'>Features</small>
          <h3 className='text-xl lg:text-4xl'>
            Why Choose MXE&apos;s DeFi to Fiat Feature?
          </h3>
          <p className='text-grayish-400'>
            Lorem ipsum dolor sit amet consectetur. Diam pretium amet sodales
            arcu faucibus cras neque rutrum felis. Ac sollicitudin odio ac eget
            amet a. Vulputate.
          </p>
        </div>
        <section className='  grid grid-cols-1 lg:grid-cols-2 gap-3 mt-5'>
          <article
            className='flex flex-col justify-between'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <div className='border-l-[2px] border-[#0A69FA] p-6'>
              <div className='space-y-5'>
                <h4 className='text-xl font-medium'>
                  Seamless Integration with Your Fiat Wallet
                </h4>
                <p className='text-grayish-400'>
                  Once your DeFi assets are converted to fiat, they are
                  instantly deposited into your MXE wallet. From there, you can
                  manage your funds, send payments, or withdraw to your bank
                  account.
                </p>

                <button className='flex gap-3 text-pryColor-200 items-center'>
                  Learn more <FaArrowRightLong />{' '}
                </button>
              </div>
            </div>
            <div className='border-l-[2px] border-[#F2F4F7] p-6'>
              <div className='space-y-5'>
                <h4 className='text-xl font-medium'>
                  Multi-Currency Support for Flexibility
                </h4>
                <p className='text-grayish-400'>
                  MXE&apos;s DeFi to Fiat feature supports a wide variety of
                  cryptocurrencies and fiat currencies, allowing you to convert
                  assets across different markets. Whether you&apos;re dealing
                  with popular tokens like USDC, ETH, or stablecoins.
                </p>

                <button className='flex gap-3 text-pryColor-200 items-center'>
                  Learn more <FaArrowRightLong />{' '}
                </button>
              </div>
            </div>
            <div className='border-l-[2px] border-[#F2F4F7] p-6'>
              <div className='space-y-5'>
                <h4 className='text-xl font-medium'>No Hidden Fees</h4>
                <p className='text-grayish-400'>
                  Transparency is key. With MXE, there are no hidden fees or
                  unexpected charges. Every transaction is clear and
                  straightforward, so you know exactly what you&apos;re paying
                  for.
                </p>

                <button className='flex gap-3 text-pryColor-200 items-center'>
                  Learn more <FaArrowRightLong />{' '}
                </button>
              </div>
            </div>
          </article>
          <article
            className='px-5 pt-5 bg-grayish-300 rounded-[10px] flex flex-col justify-end gap-5 overflow-hidden'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <figure
              className='mx-auto w-8/12'
              data-aos='fade-up'
              data-aos-delay='300'
            >
              <Image src={images.fiat} alt='' />
            </figure>
          </article>
        </section>
      </section>

      <section className='py-10'>
        <Ready />
      </section>
    </main>
  );
}
