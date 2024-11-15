'use client';

import Image, { StaticImageData } from 'next/image';
import React, { FC, useState } from 'react';

type TabDatas = {
  data: { id: string; title: string; desc: string; src: StaticImageData }[];
};

const BeyoundBanking: FC<TabDatas> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<string>('tab1');

  return (
    <article className='flex flex-wrap-reverse justify-between items-center gap-y-7'>
      <aside className='w-full lg:w-5/12'>
        {data.map(({ id, src }) => (
          <figure key={id}>
            {activeTab === id && <Image src={src} alt='' />}
          </figure>
        ))}
      </aside>

      <ul className='flex flex-col gap-7 w-full lg:w-6/12 ]'>
        {data.map(({ id, title, desc }) => (
          <li
            key={id}
            onClick={() => setActiveTab(id)}
            className={`cursor-pointer py-5 border-b ${
              activeTab === id ? 'border-[#0050C7]' : 'border-[#DFE1E7'
            } `}
          >
            <p
              className={`${
                activeTab === id ? 'text-[#0D0D12]' : 'text-grayish-400'
              } text-lg lg:text-xl`}
            >
              {title}
            </p>
            {activeTab === id && (
              <p className='max-w-[601px] text-grayish-400 mt-4 text-sm lg:text-lg'>
                {desc}
              </p>
            )}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default BeyoundBanking;
