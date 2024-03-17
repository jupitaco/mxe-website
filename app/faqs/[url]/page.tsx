import { faqData } from '@/components/FAQComps/FAQData';
import FaqHero from '@/components/FAQComps/FaqHero';
import styles from '@/components/FAQComps/Styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
const page = ({ params }: { params: { url: string } }) => {
  const renderFAQList = faqData.find(({ url }) => url === params.url);

  return (
    <main className='flex flex-col bg-[#F5F5F7] '>
      <FaqHero />

      <section
        className={`${styles.cardWrapper} w-11/12 md:w-9/12 mx-auto my-[100px] border rounded-[21px] py-[24px] px-[20px] md:px-[40px] `}
      >
        <article>
          <h3>{renderFAQList?.title}</h3>
          <div className='w-[24px] h-[25px] my-5'>{renderFAQList?.icon}</div>
          <div className='flex gap-4 items-center flex flex-wrap '>
            <div className='flex items-center'>
              {renderFAQList?.authorImages.map((item, idx) => (
                <figure
                  key={idx}
                  className={`${
                    renderFAQList?.authorImages.length > 3
                      ? styles.overlapMore
                      : styles.lilOverlap
                  } w-[32px] h-[32px]`}
                >
                  <Image src={item} alt='' />
                </figure>
              ))}
            </div>

            <div className='flex justify-between items-center gap-1'>
              <small>
                {' '}
                by Dave and{' '}
                {renderFAQList?.authorImages &&
                  renderFAQList?.authorImages.length - 1}{' '}
                others{' '}
              </small>
              <small>
                <FaChevronRight />
              </small>
              <small> {renderFAQList?.articles} Articles </small>
            </div>
          </div>
        </article>

        <ul className='flex flex-col mt-5'>
          {renderFAQList?.questions.map(({ qid, qtitle }) => (
            <li key={qid} className='py-2 my-2 border-b-2 '>
              <Link
                href={`/faqs/${renderFAQList?.url}/${qid}`}
                className='hover:transform-none flex justify-between items-center gap-2'
              >
                {qtitle}
                <FaChevronRight color='#0828B1' />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default page;
