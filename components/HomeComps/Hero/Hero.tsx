import React from 'react';
import styles from '../Styles.module.scss';
import Image from 'next/image';
import { images } from '@/exports/images';
import { AppStore, GooglePlay } from '../../SVGs/Icons';
import HeroImages from './HeroImages';
import HeroTextTypeWriter from './HeroTextTypeWriter';
const Hero = () => {
  return (
    <section className={`${styles.hero} min-h-screen py-10`}>
      <section className='container flex flex-col justify-between'>
        <HeroTextTypeWriter styles={styles} />
        <div className='h-[70vh] md:h-[90vh] '>
          <HeroImages />
        </div>

        <div className='flex justify-center gap-3 items-center mt-10 w-9/12 mx-auto'>
          <AppStore fill='#0828B1' />
          <GooglePlay fill='#0828B1' />{' '}
        </div>
      </section>
    </section>
  );
};

export default Hero;
