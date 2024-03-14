'use client';
import React from 'react';
import { useParams } from 'next/navigation';

import Image from 'next/image';
import styles from './ReadMore.module.scss';
import BlogCard from '@/components/BlogComp/BlogCard';
import { blogData } from '@/components/BlogComp/blogData';
import TransformFinances from '@/components/TransformFinances';

function ReadMore() {
  const { id } = useParams();

  const articleToRead = blogData.find((item) => item.id.toString() === id);

  return (
    <main className={`${styles.readMore}  my-5 overflow-x-hidden`}>
      <section className='container mt-[50px]'>
        <article
          data-aos='fade-in'
          data-aos-delay='300'
          className='container flex flex-col w-full md:w-8/12 text-center !mx-auto'
        >
          <button
            className={
              articleToRead?.status === 'User Stories'
                ? 'yellowBtn'
                : articleToRead?.status === 'Press Release'
                ? 'purpleBtn'
                : 'active'
            }
            type='button'
          >
            {articleToRead?.status}
          </button>
          <h2 className='my-5'>{articleToRead?.title}</h2>
          <div className='date'>
            <small>{articleToRead?.date}</small>
          </div>
        </article>
        <figure
          data-aos='zoom-out'
          data-aos-duration='1200'
          // className={styles.banner}
        >
          <Image
            src={articleToRead?.imageUrl || ''}
            alt={articleToRead?.title || ''}
          />
        </figure>
      </section>

      <section className='container mt-[100px] flex flex-col lg:flex-row justify-between'>
        <figure className='flex flex-col justify-center md:justify-start items-center '>
          <Image
            src={articleToRead?.authorImageUlr || ''}
            alt={articleToRead?.title || ''}
            className='w-[96px] h-[96px] '
          />

          <h3 className='mt-4'>Samantha Chuks</h3>
        </figure>

        <div
          data-aos='fade-right'
          data-aos-delay='300'
          className='my-5 w-full lg:w-8/12'
        >
          {articleToRead?.blogContent}
        </div>
      </section>
      <TransformFinances bgColor='bg-[#258E3F]' />
    </main>
  );
}

export default ReadMore;
