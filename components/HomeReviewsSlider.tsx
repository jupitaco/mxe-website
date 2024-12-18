'use client';
import React, { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
import FiveStarRatings from './FiveStarRatings';

export const HomeReviewsSlider = ({
  data,
}: {
  data: {
    id: string | number;
    comments: string | ReactNode;
    name: string;
    role: string;
    imgUrl: string | StaticImageData;
  }[];
}) => {
  return (
    <section className='mt-10 lg:mt-8'>
      <ul className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        {data?.map(({ id, comments, name, role, imgUrl }) => (
          <li
            key={id}
            className='card flex h-[300px] flex-col justify-center gap-3 space-y-5 rounded-xl !border-[#BCC1CA] bg-white p-5 lg:p-10'
          >
            <div className='flex gap-3 items-center'>
              <FiveStarRatings ratings={5} size={24} />{' '}
              <span className='text-Grey6 font-bold'>4.8</span>
            </div>
            <article className='w-full'>{comments}</article>
            <article className='flex items-center gap-4'>
              <figure className='size-10'>
                <Image src={imgUrl} alt={name} />
              </figure>
              <div>
                <b> {name} </b>
                <p> {role} </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};
