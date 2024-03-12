import styles from './footer.module.scss';
import Link from 'next/link';
import BrandLogo from '../BrandLogo';

const Footer = () => {
  return (
    <section className='overflow-x-hidden'>
      <footer className={styles.footer}>
        <main
          className={`container  flex flex-col md:flex-row justify-between gap-3 py-8`}
        >
          <section
            data-aos-duration='1500'
            data-aos='zoom-out'
            className='w-full md:w-4/12'
          >
            <div>
              <BrandLogo />
            </div>
            <p className='my-5'>
              Supercharge your idea kick-start your project faster and level up
              your process.
            </p>
          </section>
          <ul
            data-aos-duration='1500'
            data-aos='fade-left'
            className={`${styles.footerW} d-flex flex-wrap gap-5 mt-5 mt-md-0`}
          >
            <li>
              <Link href='/#solution'>Solutions</Link>
            </li>
            <li>
              <Link href='/contact-us'>Contact</Link>
            </li>
            <li>
              <Link href='/team'>Company</Link>
            </li>
            <li>
              <Link href='/blog'>Blog</Link>
            </li>
          </ul>
        </main>

        <hr className=' mb-4 mt-5' />
        <section className={`container flex justify-between`}>
          <div className=''>
            <p>MXE labs © 2024</p>
          </div>
        </section>
      </footer>
    </section>
  );
};

export default Footer;
