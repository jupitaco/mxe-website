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
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className='relative custom  h-[820px] overflow-hidden'
    >
      <figure id='phone' className='w-full lg:w-3/12 mx-auto opacity-0'>
        <Image src={images.heroPhone1} alt='' />
      </figure>
    </section>
  );
};

export default AnimatedMockup;
