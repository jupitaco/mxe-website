'use client';
import React, { ReactNode, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
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
  const sliderRef = useRef<any>(null);

  return (
    <section className='relative overflow-hidden'>
      <Swiper
        ref={sliderRef}
        slidesPerView={1}
        spaceBetween={20}
        navigation={{
          nextEl: '.btnNext',
          prevEl: '.btnPrev',
          disabledClass: 'swiper-button-disabled',
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        scrollbar={{ el: '.swiper-scrollbar' }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // pagination={true}
        modules={[Navigation, Autoplay, Pagination]}
        className='mySwiper'
      >
        {data?.map(({ id, comments, name, role, imgUrl }) => (
          <SwiperSlide key={id}>
            <section className='card flex h-[300px] flex-col justify-center gap-3 space-y-5 rounded-xl !border-[#BCC1CA] bg-white p-5 lg:p-10'>
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
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
