import styles from './footer.module.scss';
import Link from 'next/link';
import BrandLogo from '../BrandLogo';
import { FaDribbble, FaFacebook, FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
import { aboutRoutes, featuresRoutes, legalRoutes } from './routes';

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
              <h4>Features</h4>
              {featuresRoutes.map(({ name, path }) => (
                <li key={name} data-aos='fade-left'>
                  <Link href={path} className='text-base'>
                    {' '}
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul
              data-aos-duration='1500'
              data-aos='fade-left'
              className={`${styles.footerW} `}
            >
              <h4>Legal</h4>

              {legalRoutes.map(({ name, path }) => (
                <li key={name} data-aos='fade-left'>
                  <Link href={path} className='text-base'>
                    {' '}
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul
              data-aos-duration='1500'
              data-aos='fade-left'
              className={`${styles.footerW} `}
            >
              <h4>About</h4>

              {aboutRoutes.map(({ name, path }) => (
                <li key={name} data-aos='fade-left'>
                  <Link href={path} className='text-base'>
                    {' '}
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul
              data-aos-duration='1500'
              data-aos='fade-left'
              className={`${styles.footerW} `}
            >
              <h4 className='font-normal'>Contact</h4>
              {/* <h4 className='flex justify-start md:justify-end gap-2 items-center '>
                <FaTwitter /> <FaDribbble /> <FaLinkedinIn />
              </h4>
              <li className='text-start md:text-end '>
                <address className='not-italic'>
                  Ventura Road,
                  <br /> Lekki Lagos, Nigeria
                </address>
              </li> */}
              <li className='text-start md:text-end'>
                <a href='mailto: support@mxelabs.com'>support@mxelabs.com</a>
              </li>
              {/* <li className='text-start md:text-end'>
                <a href='tel: +234 812 345 6890'>+234 812 345 6890</a>
              </li> */}
            </ul>
          </section>
        </main>

        <hr className=' mb-4 mt-5' />
        <section
          className={`container flex flex-col md:flex-row items-center gap-5 justify-between`}
        >
          <p className='text-Grey6'>© 2024 MXE Labs. All right reserved </p>

          <div>
            <h4 className='flex justify-start md:justify-end gap-2 items-center '>
              <FaLinkedinIn /> <FaTwitter /> <FaFacebook />
            </h4>
          </div>
        </section>
      </footer>
    </section>
  );
};

export default Footer;
