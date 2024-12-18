import React from 'react';
import styles from './Styles.module.scss';
import Link from 'next/link';
import { faqDataNew } from './FAQData';

const FaqCards = () => {
  return (
    <section
      className={`${styles.cardWrapper} grid grid-cols-1 lg:grid-cols-3 gap-4  w-11/12 md:w-9/12 mx-auto my-[100px]`}
    >
      {faqDataNew.map(({ id, title, icon, subtitle }) => (
        <Link
          href={`/faqs/${id}`}
          className={`${styles.faqCard}    p-[26px] lg:p-[35px] `}
          key={id}
        >
          <div className='w-[44px] h-[44px] rounded-xl bg-white shadow-md border border-[#ECEFF3] grid place-items-center '>
            {icon}{' '}
          </div>
          <h4 className='my-4'> {title}</h4>
          <p className='text-Grey6 text-base'> {subtitle}</p>
        </Link>
      ))}
    </section>
  );
};

export default FaqCards;
