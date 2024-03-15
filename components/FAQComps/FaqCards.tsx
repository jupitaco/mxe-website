import { images } from '@/exports/images';
import React from 'react';
import {
  AccManage,
  Bills,
  Deposit,
  ExchangeRate,
  GlobalPay,
  LegalIcon,
  MXECard,
  OnboardIcon,
  SavingIcon,
  Withdrawal,
} from '../SVGs/Icons';
import Image from 'next/image';
import { FaCircle } from 'react-icons/fa';
import styles from './Styles.module.scss';
import Link from 'next/link';

const FaqCards = () => {
  const faqData = [
    {
      id: 1,
      title: 'Onboarding',
      icon: <OnboardIcon />,
      articles: 3,
      authorImages: [images.avatar, images.avatar1, images.avatar2],
    },
    {
      id: 2,
      title: 'Account Management',
      icon: <AccManage />,
      articles: 5,
      authorImages: [images.avatar, images.avatar1, images.avatar2],
    },
    {
      id: 3,
      title: 'Global Payments',
      icon: <GlobalPay />,
      articles: 5,
      authorImages: [
        images.avatar,
        images.avatar1,
        images.avatar2,
        images.avatar4,
      ],
    },
    {
      id: 4,
      title: 'Deposit/Fund Account',
      icon: <Deposit />,
      articles: 6,
      authorImages: [images.avatar, images.avatar1],
    },
    {
      id: 3,
      title: 'Bill Payment',
      icon: <Bills />,
      articles: 8,
      authorImages: [images.avatar, images.avatar1, images.avatar2],
    },
    {
      id: 3,
      title: 'MXE Card',
      icon: <MXECard />,
      articles: 12,
      authorImages: [
        images.avatar,
        images.avatar1,
        images.avatar2,
        images.avatar4,
      ],
    },
    {
      id: 3,
      title: 'Exchange Rate',
      icon: <ExchangeRate />,
      articles: 3,
      authorImages: [images.avatar, images.avatar1, images.avatar2],
    },
    {
      id: 3,
      title: 'USD Saving',
      icon: <SavingIcon />,
      articles: 8,
      authorImages: [images.avatar3, images.avatar1],
    },
    {
      id: 3,
      title: 'Withdrawals',
      icon: <Withdrawal />,
      articles: 8,
      authorImages: [images.avatar3, images.avatar1],
    },
    {
      id: 3,
      title: 'Legal',
      icon: <LegalIcon />,
      articles: 8,
      authorImages: [images.avatar3, images.avatar1],
    },
    {
      id: 3,
      title: 'Safety and Security',
      icon: <LegalIcon />,
      articles: 8,
      authorImages: [images.avatar3, images.avatar1],
    },
  ];
  return (
    <section
      className={`${styles.cardWrapper} flex flex-wrap gap-5 justify-center w-11/12 md:w-9/12 mx-auto my-[100px]`}
    >
      {faqData.map(({ id, title, icon, articles, authorImages }) => (
        <Link
          href={`/faqs/${id}`}
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
