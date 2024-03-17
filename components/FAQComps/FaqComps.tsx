'use client';
import React, { useState } from 'react';
import styles from './Faq.module.scss';
import Accordion from './Accordion/Accordion';
import { IAccordion } from '@/Types/types';

const FaqComps = ({ faqData }: { faqData: IAccordion[] }) => {
  const [toggle, setToggle] = useState<{ [key: number]: boolean }>({
    [1]: true,
  });

  const toggleAccordion = (id: number) => {
    console.log(id);
    setToggle((prev) => ({ [id]: !prev[id] }));
  };

  return (
    <main className={styles.faq}>
      <section
        className={`${styles.accordionWrapper}  d-flex flex-column flex-md-row my-5 justify-content-between`}
      >
        <ul className={` ${styles.accordionWrapper} col-12`}>
          {faqData.map(({ id, question, title, subTitle, desc, subDesc }) => (
            <li key={id} className='my-3'>
              <Accordion
                id={id}
                action={() => toggleAccordion(id)}
                question={question}
                title={title}
                subTitle={subTitle}
                desc={desc}
                toggle={toggle}
                subDesc={subDesc}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default FaqComps;
