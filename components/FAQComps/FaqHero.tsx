import React from 'react';
import { IoSearch } from 'react-icons/io5';
import styles from './Styles.module.scss';

const FaqHero = () => {
  return (
    <section className={`${styles.faqHero} text-center `}>
      <h1>Frequently Asked Questions</h1>
      <p className='my-6'>Find answers to your questions here.</p>
      <div
        className={`${styles.searchContainer} flex items-center justify-center w-11/12 md:w-8/12 mx-auto gap-2`}
      >
        <IoSearch />{' '}
        <input
          id='search'
          name='search'
          type='search'
          placeholder='How can I receive payments?'
          className={`${styles.searchInp} grow`}
        />{' '}
        {/* <IoMicOutline /> */}
      </div>
    </section>
  );
};

export default FaqHero;
