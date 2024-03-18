'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const Breadcrumbs = () => {
  const currentRoute = usePathname();

  console.log(currentRoute);

  let linkName = '';

  const crumb = currentRoute.split('/').filter((crb) => crb !== '');

  console.log(crumb);

  return (
    <div className='flex gap-2 items-center'>
      <p className='text-[13px] flex gap-2 items-center'>
        {' '}
        <Link href='/faqs'>All Collections</Link> <FaChevronRight />
      </p>
      <small className='flex gap-2 items-center'>
        {crumb.slice(1).map((item) => (
          <Link
            key={item}
            href={`/faqs/${item}`}
            className='flex gap-2 items-center'
          >
            {item} <FaChevronRight />
          </Link>
        ))}
      </small>
    </div>
  );
};

export default Breadcrumbs;
