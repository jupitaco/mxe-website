import React from 'react';
import styles from './AboutUs.module.scss';
import { BsStarFill } from 'react-icons/bs';
import { LineIcon } from '@/components/SVGs/Icons';
import Image from 'next/image';
import { images } from '@/exports/images';
import TransformFinances from '@/components/TransformFinances';
import ContactHeroSvg from '@/components/SVGs/ContactHeroSvg';

const page = () => {
  return (
    <main className={styles.company}>
      <section
        className={`${styles.companyHero}   grid place-items-center mb-[100px] h-screen lg:h-[886px] `}
      >
        <article className='container flex flex-col justify-between h-[60%] '>
          <h1 className='w-full md:w-8/12'>
            Creating a Seamless Financial Ecosystem that Caters to{' '}
            <b className={`${styles.Your} relative z-10`}>
              {' '}
              Your
              <LineIcon className='absolute  bottom-0 left-0 right-0 z-[-1]' />
            </b>{' '}
            Diverse Needs.
          </h1>

          <div className='flex flex-wrap items-center justify-between gap-3 w-full md:w-6/12 '>
            <div>
              <h3>300k+</h3>
              <p>Users</p>
            </div>
            <div>
              <h3>57,000</h3>
              <p>Daily Transactions</p>
            </div>
            <div>
              <h3 className='flex gap-2 items-center'>
                4.8 <BsStarFill color='#FFD91A' />{' '}
              </h3>
              <p>Rating</p>
            </div>
          </div>
        </article>

        <ContactHeroSvg className='absolute top-10 left-0 right-0 z-[-1]' />
      </section>

      <section className={`${styles.Contents} container`}>
        <article className='flex flex-col md:flex-row justify-between gap-4 items-center mb-[100px]'>
          <figure data-aos='fade-right' className='w-full md:w-[40%]'>
            <Image src={images.ourMission} alt='' />
          </figure>

          <div data-aos='fade-left' className='flex flex-col w-full md:w-[55%]'>
            <hgroup>
              <h4 className='inline'>OUR MISSION</h4>
            </hgroup>

            <p className='my-8'>
              At MXE, our mission is to create a seamless and user-centric
              financial ecosystem that caters to the diverse needs of our users.
              We strive to enhance financial accessibility, security, and
              convenience, ultimately transforming the way people interact with
              their money.
            </p>
          </div>
        </article>

        <article className='quote text-center w-full md:w-9/12 mx-auto mb-[100px]'>
          <h3 className='  mb-5'>
            "As we stand at the intersection of finance and technology, the MXE
            story continues to unfold. Our journey is fueled by a commitment to
            innovation, security, and the empowerment of individuals in their
            financial endeavors."
          </h3>
          <p>Michael Elvis - CEO</p>
        </article>

        <TransformFinances bgColor='bg-[#051348]' />
      </section>
    </main>
  );
};

export default page;
