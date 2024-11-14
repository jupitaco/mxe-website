import styles from './footer.module.scss';
import Link from 'next/link';
import BrandLogo from '../BrandLogo';
import { FaDribbble, FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';

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
            {/* <p className='my-5'>
              Supercharge your idea kick-start your project faster and level up
              your process.
            </p> */}
          </section>

          <section className='w-full md:w-8/12 flex flex-wrap gap-3 justify-between'>
            <ul
              data-aos-duration='1500'
              data-aos='fade-left'
              className={`${styles.footerW} `}
            >
              <h4>Resources</h4>
              <li>
                <Link href='/blog'>Blog</Link>
              </li>
              <li>
                <Link href='/faq'>FAQ</Link>
              </li>
            </ul>
            <ul
              data-aos-duration='1500'
              data-aos='fade-left'
              className={`${styles.footerW} `}
            >
              <h4>Company</h4>

              <li>
                <Link href='/about-us'>About us</Link>
              </li>
              <li>
                <Link href='#'>Privacy Policy</Link>
              </li>
              <li>
                <Link href='#'>Terms of Use</Link>
              </li>
              <li>
                <Link href='/contact-us'>Contact</Link>
              </li>
            </ul>
            <ul
              data-aos-duration='1500'
              data-aos='fade-left'
              className={`${styles.footerW} `}
            >
              <h4 className='flex justify-start md:justify-end gap-2 items-center '>
                <FaTwitter /> <FaDribbble /> <FaLinkedinIn />
              </h4>
              <li className='text-start md:text-end '>
                <address className='not-italic'>
                  Ventura Road,
                  <br /> Lekki Lagos, Nigeria
                </address>
              </li>
              <li className='text-start md:text-end'>
                <a href='mailto: contact@mymxe.com'>contact@mymxe.com</a>
              </li>
              <li className='text-start md:text-end'>
                <a href='tel: +234 812 345 6890'>+234 812 345 6890</a>
              </li>
            </ul>
          </section>
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
