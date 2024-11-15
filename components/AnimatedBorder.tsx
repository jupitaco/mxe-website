'use client';
import { stepsData } from '@/utils/constant';
import React, { useEffect, useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const AnimatedBorder = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % stepsData.length;

        return newIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <ul
      className='flex flex-col justify-between'
      data-aos='fade-up'
      data-aos-duration='1000'
    >
      {stepsData.map(({ id, title, desc }, idx) => (
        <li
          key={id}
          className={`border-l-[2px] ${
            currentIndex === idx ? 'border-[#0A69FA]' : 'border-[#F2F4F7]'
          } p-6`}
        >
          <div className='space-y-5'>
            <h4 className='text-xl font-medium'>{title}</h4>
            <p className='text-grayish-400'>{desc}</p>

            <button className='flex gap-3 text-pryColor-200 items-center'>
              Learn more <FaArrowRightLong />{' '}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AnimatedBorder;
