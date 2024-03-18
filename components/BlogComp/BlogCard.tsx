import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './BlogCard.module.scss';

interface IBlogCard {
  id: string | number;
  title: string;
  authorImageUlr: string | StaticImageData;
  authorName: string;
  read: string;
  date: string;
  status: string;
  imageUrl: string | StaticImageData;
}

const BlogCard: React.FC<IBlogCard> = ({
  id,
  title,
  date,
  imageUrl,
  status,
}) => {
  return (
    <Link
      href={`${id}`}
      key={id}
      className={`${styles.blogCard} flex flex-col md:flex-row gap-3 md:justify-center hover:transform-none items-center`}
    >
      <figure className='w-full md:w-4/12'>
        <Image src={imageUrl} alt='' />
      </figure>
      <section className='w-full md:w-7/12 p-5 '>
        <button
          className={
            status === 'User Stories'
              ? 'yellowBtn'
              : status === 'Press Release'
              ? 'purpleBtn'
              : 'active'
          }
          type='button'
        >
          {status}
        </button>

        <h3>{title}</h3>
        <div className='date'>
          <small>{date}</small>
        </div>
      </section>
    </Link>
  );
};

export default BlogCard;
