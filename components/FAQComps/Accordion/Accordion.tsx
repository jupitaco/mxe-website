import React, { useState } from 'react';
import styles from './Accordion.module.scss';
import { MdAdd, MdHorizontalRule } from 'react-icons/md';
import { BsX } from 'react-icons/bs';
import { IAccordion } from '@/Types/types';

const Accordion: React.FC<IAccordion> = ({
  action,
  toggle,
  id,
  question,
  title,
  subTitle,
  desc,
  subDesc,
}) => {
  return (
    <main className={styles.accordion}>
      <hgroup>
        <h3
          onClick={action}
          className={` d-flex justify-content-between ${styles.question} `}
        >
          {question} {toggle[id] ? <MdHorizontalRule /> : <MdAdd />}
        </h3>
      </hgroup>

      {toggle[id] && (
        <>
          <section className={styles.answer}>{desc}</section>
        </>
      )}
    </main>
  );
};

export default Accordion;
