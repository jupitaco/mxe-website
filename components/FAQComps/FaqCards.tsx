import React from 'react';
import Image from 'next/image';
import { FaCircle } from 'react-icons/fa';
import styles from './Styles.module.scss';
import Link from 'next/link';
import { faqData } from './FAQData';

const FaqCards = () => {
  return (
    <section
      className={`${styles.cardWrapper} flex flex-wrap gap-5 justify-center w-11/12 md:w-9/12 mx-auto my-[100px]`}
    >
      {faqData.map(({ id, title, icon, articles, authorImages, url }) => (
        <Link
          href={`/faqs/${url}`}
          className={`${styles.faqCard} w-full  md:w-[48%] lg:w-[31%] p-[10px] md:p-[26px] lg:p-[35px] `}
          key={id}
        >
          <div className='w-[24px] h-[25px] '>{icon} </div>
          <h4 className='my-5'>{title}</h4>

          <div className='flex justify-between items-center'>
            <div className='flex items-center'>
              {authorImages.map((item, idx) => (
                <figure
                  key={idx}
                  className={`${
                    authorImages.length > 3
                      ? styles.overlapMore
                      : styles.lilOverlap
                  } w-[32px] h-[32px]`}
                >
                  <Image src={item} alt='' />
                </figure>
              ))}
            </div>

            <div className='flex justify-between items-center gap-1'>
              <small> {authorImages.length} Authors </small>
              <small>
                <FaCircle />
              </small>
              <small> {articles} Articles </small>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default FaqCards;
