'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const HeroTextTypeWriter = ({ styles }: { styles: any }) => {
  const container = useRef<HTMLElement>(null);
  let ss = useRef<any>(null);
  let textRef = useRef<any>(null);
  const phrases = [
    'Global Transfer',
    'Virtual Card',
    'Save in USD',
    'Bill Payment',
  ];

  useGSAP(
    () => {
      const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        repeatDelay: 1,
      });

      phrases.forEach((phrase, idx) => {
        tl.to('.text', {
          duration: 2,
          text: { value: phrase },
          //   delay: 1,
        }).to(
          // This is going to render empty strign '', to create clean up efffect
          '.text',
          { duration: 0.5, text: '' },
          //   this is the wait time for this "" string animation will wait before playing
          `+=${idx === phrases.length - 1 ? '' : 0.5}`,
        );
      });
    },

    { scope: container },
  );

  return (
    <hgroup
      className='text-center my-5 flex items-center justify-center'
      ref={container}
    >
      <h1 className='text' ref={textRef}></h1>
      <h1>
        <b className={styles.cursor}>|</b>{' '}
      </h1>
    </hgroup>
  );
};

export default HeroTextTypeWriter;
