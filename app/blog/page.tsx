'use client';
import React, { useState } from 'react';
import styles from './Blog.module.scss';
import Image from 'next/image';
import { images } from '@/exports/images';
import Link from 'next/link';
import BlogCard from '@/components/BlogComp/BlogCard';
import { blogData } from '@/components/BlogComp/blogData';
import Pagination from '@/components/Pagination';

const Blog = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 7;
  const endOffset = itemOffset + itemsPerPage;

  // Remove the feaured blog from the data
  const newBlogData = blogData.slice(1);

  const currentData = newBlogData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(blogData.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % blogData.length;
    setItemOffset(newOffset);
  };
  return (
    <main className='overflow-x-hidden'>
      <section className={` ${styles.blog} container flex flex-col `}>
        <Link
          href={`blog/${'featured'}`}
          className={` flex flex-col  ${styles.blogHero} justify-between gap-3 my-10  hover:transform-none`}
        >
          {' '}
          <article className=' justify-between w-full md:w-8/12 text-center !mx-auto'>
            <button className='active' type='button'>
              Active
            </button>
            <h3>
              Maximizing Your Savings: A Guide to MXE&apos;s &apos;Save in
              USD&apos; Feature
            </h3>

            <div className='date'>
              <small>February 24, 2024</small>
            </div>
          </article>
          <figure className={`w-full md:w-6/12 !mx-auto`}>
            <Image src={images.blog1} alt='' />
          </figure>
        </Link>
        <section className='flex flex-col my-10'>
          <section
            className={`${styles.blogCardContainer}  flex flex-col gap-5 md:gap-3 lg:gap-2 justify-center`}
          >
            {currentData.map(
              ({
                id,
                title,
                authorImageUlr,
                authorName,
                read,
                date,
                imageUrl,
                status,
              }) => (
                <div key={id} className='w-full'>
                  <BlogCard
                    id={`blog/${id}`}
                    title={title}
                    authorImageUlr={authorImageUlr}
                    authorName={authorName}
                    read={read}
                    date={date}
                    imageUrl={imageUrl}
                    status={status}
                  />
                </div>
              ),
            )}
          </section>
        </section>

        <div className='flex items-center justify-center'>
          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        </div>
      </section>
    </main>
  );
};

export default Blog;
