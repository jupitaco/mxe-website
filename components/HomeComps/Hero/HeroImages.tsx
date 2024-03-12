import { images } from '@/exports/images';
import React from 'react';
import styles from '../Styles.module.scss';
import Image from 'next/image';

const HeroImages = () => {
  return (
    <figure className={`${styles.heroImage} w-full md:w-3/12 mx-auto`}>
      <Image src={images.heroPhone1} alt='Mxel Lab Mobile App Image' />
      <Image src={images.heroPhone2} alt='Mxel Lab Mobile App Image' />
    </figure>
  );
};

export default HeroImages;
