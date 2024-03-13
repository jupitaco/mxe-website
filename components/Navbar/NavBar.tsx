'use client';

import React, { useEffect, useRef, useState } from 'react';

// styles
import styles from './NavBar.module.scss';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoChevronDown } from 'react-icons/io5';
import BrandLogo from '../BrandLogo';
import { ConvertIcon, SafeIcon, SendIcon, VirtualCard } from '../SVGs/Icons';

interface ToggleState {
  [key: string]: boolean;
}

const NavBar = () => {
  const currentRoute = usePathname();

  const [toggle, setToggle] = useState<ToggleState>({});

  const handleToggle = (id: string) => {
    setToggle((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const [toggleDropdown, setToggleDropdown] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  const linkList = [
    {
      id: 1,
      title: 'Products',
      // url: '#',
      dropdown: {
        payment: [
          {
            id: 7,
            title: 'Send and Receive',
            subtitle: 'Global payments in a few clicks',
            icon: <SendIcon />,
          },
          {
            id: 9,
            title: 'MXE Virtual Card',
            subtitle: 'Seamless online shopping',
            icon: <VirtualCard />,
          },
        ],

        features: [
          {
            id: 10,
            title: 'Bill Payments',
            subtitle: 'Schedule and make bill payment',
            icon: <SendIcon />,
          },
          // { id: 10, title: 'Data Science', url: '/data-science' },
          {
            id: 11,
            title: 'Save in USD',
            subtitle: 'Save local currency in USD',
            icon: <SafeIcon />,
          },
          {
            id: 12,
            title: 'Convert Currencies',
            subtitle: 'Convert money to different currencies',
            icon: <ConvertIcon />,
          },
        ],
      },
    },
    { id: 2, title: 'Company', url: '/about-us' },
    { id: 4, title: 'Blog', url: 'https://blog.jupitaacademy.co.uk/' },
    { id: 5, title: 'FAQs', url: '/faqs' },
  ];

  // close the modal when click anywhere on the screen
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (
        toggleDropdown &&
        modalRef.current &&
        !modalRef.current.contains(e.target)
      ) {
        setToggleDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggleDropdown]);

  return (
    <header>
      <section
        className={`${styles.navContainer} flex items-center justify-between`}
      >
        <nav className='container flex items-center justify-between'>
          {/* Logo */}
          <section
            className={`col-5 col-lg-2 flex flex-row items-center`}
            data-aos='zoom-out'
            data-aos-duration='1500'
          >
            <BrandLogo />
          </section>
          <section
            className={`w-full lg:w-10/12 ${
              toggle['navbar'] ? styles.navOpen : styles.navClose
            }`}
          >
            <aside className='w-full flex flex-col  items-center '>
              {/* nav Links */}

              <section
                data-aos='fade-right'
                data-aos-duration='1500'
                className={` ${styles.navItems} flex flex-col lg:flex-row  w-full justify-between items-center !mt-[100px] lg:!mt-0`}
              >
                <ul className='flex flex-col lg:flex-row w-full lg:w-9/12  justify-end text-center gap-4'>
                  {linkList.map(({ id, title, url, dropdown }) => (
                    <div key={id}>
                      {dropdown ? (
                        <li key={id}>
                          <span
                            style={{ fontWeight: '700' }}
                            onClick={() => setToggleDropdown(!toggleDropdown)}
                            className='flex items-center gap-1 justify-center'
                          >
                            Products
                            <IoChevronDown
                              className={
                                toggleDropdown
                                  ? 'rotate-180 transition-all'
                                  : ''
                              }
                            />
                          </span>
                          {toggleDropdown && (
                            <div
                              className={`${styles.drop} flex flex-col lg:flex-row justify-center lg:justify-between gap-3`}
                              ref={modalRef}
                            >
                              <ul
                                className={`  flex flex-col items-center lg:items-start text-center lg:text-start`}
                              >
                                <h6>Payments</h6>
                                {dropdown.payment.map(
                                  ({ id, title, icon, subtitle }) => (
                                    <li key={id} className='flex my-3'>
                                      {icon}
                                      <div>
                                        <p>{title} </p>
                                        <small> {subtitle} </small>
                                      </div>
                                    </li>
                                  ),
                                )}
                              </ul>
                              <ul
                                className={`  flex flex-col items-center lg:items-start text-center lg:text-start`}
                              >
                                <h6>Features</h6>
                                {dropdown.features.map(
                                  ({ id, title, icon, subtitle }) => (
                                    <li key={id} className='flex my-3'>
                                      {icon}
                                      <div>
                                        <p>{title} </p>
                                        <small> {subtitle} </small>
                                      </div>
                                    </li>
                                  ),
                                )}
                              </ul>
                            </div>
                          )}
                        </li>
                      ) : (
                        <li
                          key={id}
                          className={
                            currentRoute === url
                              ? styles.isActive
                              : styles.notActive
                          }
                        >
                          <Link
                            onClick={() => handleToggle('navbar')}
                            href={url}
                          >
                            {title}
                          </Link>
                        </li>
                      )}
                    </div>
                  ))}
                </ul>
                <div className='flex justify-end  mt-8 lg:mt-0'>
                  <a
                    href='https://wa.me/message/DMUFZ4VU2SNCF1'
                    target='_blank'
                    rel='noreferrer'
                    className={`main-btn text-center`}
                  >
                    Download
                  </a>
                </div>
              </section>
            </aside>
          </section>
          {/* Hambuger icon */}
          <section className='col-1'>
            <div
              onClick={() => handleToggle('navbar')}
              className={toggle['navbar'] ? styles.open : styles.ham}
              id='navbar'
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </section>
        </nav>
      </section>
    </header>
  );
};

export default NavBar;
