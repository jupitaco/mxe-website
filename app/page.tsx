import Hero from '@/components/HomeComps/Hero/Hero';
import { images } from '@/exports/images';
import Image from 'next/image';
import styles from '../components/HomeComps/Styles.module.scss';
import TransformFinances from '@/components/TransformFinances';
import FeaturedBrands from '@/components/FeaturedBrands';
import { PhoneIcon, TimeIcon, WhatsappIcon } from '@/components/SVGs/Icons';
import { HomeReviewsSlider } from '@/components/HomeReviewsSlider';
import Ready from '@/components/Ready';
import BeyoundBanking from '@/components/BeyoundBanking';
import { beyoundBankingTtitle, reviewDatas } from '@/utils/constant';

export default function Home() {
  return (
    <main className='bg-grayish'>
      <Hero />
      <FeaturedBrands />

      <section
        className={`${styles.cardWrapper} container mb-[100px]  rounded-3xl  pt-10 lg:pt-20 overflow-hidden`}
      >
        <div
          className='mb-20 flex flex-col justify-center items-center gap-9'
          data-aos='fade-down'
          data-aos-duration='1000'
        >
          <h3 className='text-center  text-white font-bold'>
            Instant crypto liquidity in seconds
          </h3>

          <button className='main-btn !border-[2px] !border-[#2A37AF]'>
            Learn More
          </button>
        </div>

        <figure className=' hidden lg:block' data-aos='fade-up'>
          <Image
            src={images.instantmock1}
            alt=''
            data-aos='fade-up'
            data-aos-delay='300'
          />
        </figure>
        <figure className='lg:hidden block' data-aos='fade-up'>
          <Image
            src={images.mockmobile}
            alt=''
            data-aos='fade-up'
            data-aos-delay='300'
          />
        </figure>
        {/*
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
        </section> */}
      </section>

      <section className='my-10'>
        <section className='container rounded-3xl bg-[#F1F2F4] p-3 flex flex-wrap '>
          <article
            className={`${styles.spendGlobal} flex flex-col justify-between w-full lg:w-5/12  p-5 lg:p-10 lg:rounded-tr-none rounded-t-3xl rounded-l-3xl rounded-b-none rounded-bl-none lg:rounded-bl-3xl`}
            data-aos='fade-right'
            data-aos-duration='1000'
          >
            <h3>Spend globally</h3>
            <div className='flex flex-col gap-10'>
              <p className='text-base lg:text-xl text-grayish-400'>
                Instantly create a virtual card that allows you to shop online,
                manage subscriptions, and make payments worldwide—all without
                the need for a physical card.
              </p>
              <div>
                <button className='outline-btn !border-[#D0D5DD99] !text-[#344054] !roounded-[8px]'>
                  Learn More
                </button>
              </div>
            </div>
          </article>
          <div className='w-full lg:w-7/12  lg:p-0 p-3 overflow-hidden lg:bg-transparent bg-white rounded-b-lg'>
            <figure
              className=' overflow-hidden h-[375px] lg:h-full rounded-lg'
              data-aos='fade-up'
            >
              <Image
                src={images.spend}
                alt=''
                data-aos='fade-up'
                data-aos-delay='300'
                className='!h-full  object-cover'
              />
            </figure>
          </div>
        </section>
      </section>

      <section className='my-10'>
        <section className='container rounded-3xl bg-[#F1F2F4] p-3 flex flex-wrap '>
          <article
            className={`${styles.spendGlobal} flex flex-col justify-between w-full lg:w-5/12   p-5 lg:p-10 lg:rounded-tr-none rounded-t-3xl rounded-l-3xl rounded-b-none rounded-bl-none lg:rounded-bl-3xl`}
            data-aos='fade-right'
            data-aos-duration='1000'
          >
            <h3>Pay bills effortlessly </h3>
            <div className='flex flex-col gap-10'>
              <p className='text-base lg:text-xl text-grayish-400'>
                Pay your utility bills, subscriptions, and more right from the
                app. Say goodbye to late fees and long queues—your payments are
                just a tap away.
              </p>
              <div>
                <button className='outline-btn !border-[#D0D5DD99] !text-[#344054] !roounded-[8px]'>
                  Learn More
                </button>
              </div>
            </div>
          </article>
          <div className='w-full lg:w-7/12  lg:p-0 p-3 overflow-hidden lg:bg-transparent bg-white rounded-b-lg'>
            <figure
              className=' overflow-hidden h-[375px] lg:h-full rounded-lg'
              data-aos='fade-up'
            >
              <Image
                src={images.paybills}
                alt=''
                data-aos='fade-up'
                data-aos-delay='300'
                className='!h-full  object-cover'
              />
            </figure>
          </div>
        </section>
      </section>

      <section className='my-20 container'>
        <ul className='grid grid-cols-1 lg:grid-cols-3 justify-between gap-x-7 gap-y-4'>
          <li className='space-y-5 py-6'>
            <div className='mb-5'>
              <TimeIcon />
            </div>
            <b>24/7 Access</b>
            <p className='text-grayish-400'>
              Stay in control of your finances anytime, anywhere via MXE mobile
              app.
            </p>
          </li>
          <li className='space-y-5 py-6'>
            <div className='mb-5'>
              <PhoneIcon />
            </div>
            <b>Seamless Experience</b>
            <p className='text-grayish-400'>
              Enjoy smooth and fast transactions in seconds without hassle.
            </p>
          </li>
          <li className='space-y-5 py-6'>
            <div className='mb-5'>
              <WhatsappIcon />
            </div>
            <b>Reliable Support</b>
            <p className='text-grayish-400'>
              24/7 support to ensure you get the help you need, whenever you
              need it.
            </p>
          </li>
        </ul>
      </section>

      <section className='mt-10 py-20 bg-white'>
        <section className='container'>
          <article className='space-y-4 mb-10'>
            <h3>Go Beyond Banking!</h3>
            <p className='max-w-[601px] text-grayish-400'>
              MXE offers more than just transfers and payments. Discover more
              exciting features on MXE App. Demo offers more than just transfers
              and payments. Discover more exciting features on MXE App{' '}
            </p>
          </article>

          <BeyoundBanking data={beyoundBankingTtitle} />
        </section>
      </section>

      <section className='flex h-[617px] flex-col justify-around bg-[#EFF9F9] py-10'>
        <hgroup className='text-center'>
          <h3 className='font-medium text-xl lg:text-4xl'>
            See What Our Users Are Saying
          </h3>
          <p className='text-grayish-400 mt-5'>
            Here&apos;s what some of our customers say about our platform.
          </p>
        </hgroup>
        <div className='container'>
          <HomeReviewsSlider data={reviewDatas} />
        </div>
      </section>

      <section className='py-10'>
        <Ready />
      </section>
    </main>
  );
}
