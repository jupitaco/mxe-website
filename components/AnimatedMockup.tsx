'use client';
import { images } from '@/exports/images';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import React, { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const AnimatedMockup = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // const isMobile = window.matchMedia('(max-width: 375px)').matches;

      // const screenType = window.matchMedia('(max-width: 375px)').matches
      //   ? window.matchMedia('(max-width: 320px)').matches
      //     ? 'mobile'
      //     : 'bigMobile'
      //   : 'desktop';

      // const yValue = isMobile ? 80 : 200;
      // screenType === 'mobile'
      //   ? -150
      //   : screenType === 'bigMobile'
      //   ? -180
      //   : -600;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: '+=300',
          toggleActions: 'restart none none reverse',
        },
      });

      tl.fromTo(
        '#phone',
        {
          y: 500,
          opacity: 0,
        },
        {
          y: 100,
          opacity: 1,
          duration: 2,
        },
      )
        .to('#phone', { opacity: 0, duration: 1, delay: 2, display: 'none' })
        .to(containerRef.current, {
          backgroundColor: '#000', // New background color
          ease: 'power1.inOut',
        })
        .fromTo(
          '#phone1',
          { y: 500, opacity: 0 },
          {
            y: 150,
            opacity: 1,
            duration: 2,
          },
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className='  custom h-[400px] lg:h-[770px] overflow-hidden'
      style={{ backgroundColor: 'white' }}
    >
      <figure id='phone' className='w-8/12 lg:w-[30%] mx-auto opacity-0'>
        <Image src={images.heroPhone1} alt='' />
      </figure>
      <figure id='phone1' className='w-11/12 lg:w-7/12 mx-auto opacity-0'>
        <Image src={images.heroPhone3} alt='' />
      </figure>
    </section>
  );
};

export default AnimatedMockup;
