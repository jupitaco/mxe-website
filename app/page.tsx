import Hero from '@/components/HomeComps/Hero/Hero';
import { AppStore, GooglePlay } from '@/components/SVGs/Icons';
import { images } from '@/exports/images';
import Image from 'next/image';
import styles from '../components/HomeComps/Styles.module.scss';
import TransformFinances from '@/components/TransformFinances';
export default function Home() {
  return (
    <main className=''>
      <Hero />

      <section className={`${styles.cardWrapper} container mb-[100px]`}>
        <h1 className='text-center mb-9'>
          Redefining Your Financial Experience
        </h1>

        <section
          className={`${styles.sendCard} flex flex-col md:flex-row justify-center items-center my-10`}
        >
          <figure data-aos='fade-up' className='w-full md:w-4/12'>
            <Image
              data-aos='fade-up'
              data-aos-delay='300'
              src={images.sendPhone}
              alt=''
            />{' '}
          </figure>
          <article
            data-aos='fade-right'
            data-aos-delay='300'
            className='w-full md:w-8/12'
          >
            <h3>Send Money Globally with Ease</h3>
            <p className='my-5'>
              Experience a world without borders. With MXE, you can effortlessly
              send money to loved ones and partners across the globe. No
              distance is too great, no borders are too vast. Enjoy secure,
              lightning-fast global transfers and let your money fly without
              boundaries.
            </p>

            <div className='flex justify-center gap-3 w-full md:w-8/12'>
              <AppStore fill='#0828B1' />
              <GooglePlay fill='#0828B1' />
            </div>
          </article>
        </section>
        <section
          className={`${styles.virtualCard} flex flex-col md:flex-row md:flex-row-reverse justify-center items-center my-10`}
        >
          <figure data-aos='fade-up' className='w-full md:w-4/12'>
            <Image
              data-aos='fade-up'
              data-aos-delay='300'
              src={images.virtualCardPhone}
              alt=''
            />{' '}
          </figure>
          <article
            data-aos='fade-right'
            data-aos-delay='300'
            className='w-full md:w-8/12'
          >
            <h3>Virtual Cards Redefined</h3>
            <p className='my-5'>
              Experience the future of online transactions. MXE provided virtual
              cards with impeccable security. Seamlessly manage your cards,
              track transactions, and defend your finances with cutting-edge
              security features.
            </p>

            <div className='flex justify-center gap-3 w-full md:w-8/12'>
              <AppStore fill='#0828B1' />
              <GooglePlay fill='#0828B1' />{' '}
            </div>
          </article>
        </section>
        <section
          className={`${styles.savingCard} flex flex-col md:flex-row justify-center items-center my-10`}
        >
          <figure data-aos='fade-up' className='w-full md:w-4/12'>
            <Image
              data-aos='fade-up'
              data-aos-delay='300'
              src={images.savingPhone}
              alt=''
            />{' '}
          </figure>
          <article
            data-aos='fade-right'
            data-aos-delay='300'
            className='w-full md:w-8/12'
          >
            <h3>Steady Savings, Stable Future - Save in USD</h3>
            <p className='my-5'>
              Step into a realm of financial certainty with MXE&apos;s USD
              Savings feature. In an ever-evolving economic landscape, secure
              your savings with the unwavering stability of the United States
              Dollar. Our USD Savings feature provides you with a reliable
              sanctuary for your hard-earned assets, shielding them from market
              volatility.
            </p>

            <div className='flex justify-center gap-3 w-full md:w-8/12'>
              <AppStore fill='#0828B1' />
              <GooglePlay fill='#0828B1' />{' '}
            </div>
          </article>
        </section>
        <section
          className={`${styles.convertCard} flex flex-col md:flex-row md:flex-row-reverse justify-center items-center my-10`}
        >
          <figure data-aos='fade-up' className='w-full md:w-4/12'>
            <Image
              data-aos='fade-up'
              data-aos-delay='300'
              src={images.convertPhone}
              alt=''
            />{' '}
          </figure>
          <article
            data-aos='fade-right'
            data-aos-delay='300'
            className='w-full md:w-8/12'
          >
            <h3>Dynamic Currency Conversion</h3>
            <p className='my-5'>
              Stay in control of your finances with MXE&apos;s currency
              conversion. Easily convert your funds into different currencies
              for seamless transactions worldwide, ensuring your purchasing
              power is optimized wherever you go.
            </p>

            <div className='flex justify-center gap-3 w-full md:w-8/12'>
              <AppStore fill='#0828B1' />
              <GooglePlay fill='#0828B1' />{' '}
            </div>
          </article>
        </section>
        <section
          className={`${styles.savingCard} flex flex-col md:flex-row justify-center items-center my-10`}
        >
          <figure data-aos='fade-up' className='w-full md:w-4/12'>
            <Image
              data-aos='fade-up'
              data-aos-delay='300'
              src={images.savingPhone}
              alt=''
            />{' '}
          </figure>
          <article
            data-aos='fade-right'
            data-aos-delay='300'
            className='w-full md:w-8/12'
          >
            <h3>Effortless Bill Payments</h3>
            <p className='my-5'>
              Turn the chore of bill payments into a breeze. Categorize bills,
              schedule payments with precision, and ensure you&apos;e always
              ahead with reminders that keep you on track.
            </p>

            <div className='flex justify-center gap-3 w-full md:w-8/12'>
              <AppStore fill='#0828B1' />
              <GooglePlay fill='#0828B1' />{' '}
            </div>
          </article>
        </section>
      </section>

      <TransformFinances brands bgColor='bg-[#051348]' />
    </main>
  );
}
