'use client';

import React, { useEffect, useRef, useState } from 'react';

// styles
import styles from './NavBar.module.scss';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoChevronDown } from 'react-icons/io5';
import BrandLogo from '../BrandLogo';
import {
  AboutIcon,
  BillsIcon,
  BlogIcon,
  HireIcon,
  LetterIcon,
  SpeedIcon,
  VAccIcon,
  VCardIcon,
} from '../SVGs/Icons';

interface ToggleState {
  [key: string]: boolean;
}

const NavBar = () => {
  const currentRoute = usePathname();

  const [toggle, setToggle] = useState<ToggleState>({});

  const handleToggle = (id: string) => {
    setToggle((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const [toggleDropdown, setToggleDropdown] = useState<ToggleState>({});
  const [drop, setToggleDrop] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  const linkList = [
    {
      id: 1,
      title: 'Products',
      // url: '#',
      dropdown: {
        title: 'Products',
        data: [
          {
            id: 10,
            title: 'DeFi to Fiat Conversion',
            path: '/features',
            subtitle:
              'Lorem ipsum dolor sit amet consectetur. Commodo sed facilisi.',
            icon: <SpeedIcon />,
          },
          {
            id: 11,
            title: 'Virtual Accounts',
            path: '#',
            subtitle:
              'Lorem ipsum dolor sit amet consectetur. Commodo sed facilisi.',
            icon: <VAccIcon />,
          },
          {
            id: 12,
            title: 'Virtual Card',
            path: '/virtual-card',
            subtitle:
              'Instantly create a virtual card that allows you to shop online',
            icon: <VCardIcon />,
          },
          {
            id: 13,
            title: 'Bills Payment',
            path: '#',
            subtitle:
              'Pay your utility bills, subscriptions, and more right from the app.',
            icon: <BillsIcon />,
          },
        ],
      },
    },
    {
      id: 119,
      title: 'Company',
      dropdown: {
        title: 'Company',
        data: [
          {
            id: 10,
            title: 'About Us',
            path: '/about-us',
            subtitle:
              'Lorem ipsum dolor sit amet consectetur. Commodo sed facilisi.',
            icon: <AboutIcon />,
          },
          {
            id: 11,
            title: 'We’re Hiring',
            path: '#',
            subtitle:
              'Lorem ipsum dolor sit amet consectetur. Commodo sed facilisi.',
            icon: <HireIcon />,
          },
          {
            id: 12,
            title: 'Blog',
            path: '/blog',
            subtitle:
              'Lorem ipsum dolor sit amet consectetur. Commodo sed facilisi.',
            icon: <BlogIcon />,
          },
          {
            id: 13,
            title: 'Join Newsletter',
            path: '#',
            subtitle:
              'Lorem ipsum dolor sit amet consectetur. Commodo sed facilisi.',
            icon: <LetterIcon />,
          },
        ],
      },
    },
    // { id: 2, title: 'We’re Hiring', url: '#' },
    // { id: 4, title: 'Resources', url: '#' },
    // { id: 5, title: 'Company', url: '#' },
    // { id: 5, title: 'API', url: '#' },
    { id: 2, title: 'Contact Us', url: '/contact-us' },
    // { id: 4, title: 'Blog', url: '/blog' },
    // { id: 5, title: 'FAQs', url: '/faqs' },
  ];

  // close the modal when click anywhere on the screen
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (
        (toggleDropdown || drop) &&
        modalRef.current &&
        !modalRef.current.contains(e.target)
      ) {
        setToggleDropdown({});
        setToggleDrop(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggleDropdown, drop]);

  const handleDropToggle = (id: string) => {
    setToggleDropdown((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <header className='border-b sticky left-0 top-0 z-50'>
      <section
        className={`${styles.navContainer} flex items-center justify-between`}
      >
        <nav className='container flex items-center justify-between'>
          {/* Logo */}
          <section
            className={`w-5/12 lg:w-2/12 flex flex-row items-center`}
            data-aos='zoom-out'
            data-aos-duration='1500'
          >
            <BrandLogo />
          </section>
          <section
            className={`w-full lg:w-11/12 flex justify-end ${
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
                <ul className='flex flex-col lg:flex-row w-full lg:w-9/12  justify-center items-center gap-4'>
                  {linkList.map(({ id, title, url, dropdown }) => (
                    <div key={id}>
                      {dropdown ? (
                        <li key={id}>
                          <p
                            className='flex items-center gap-1 '
                            onClick={() => handleDropToggle(dropdown?.title)}
                          >
                            <span>{dropdown?.title}</span>
                            <span>
                              <IoChevronDown
                                className={
                                  toggleDropdown[dropdown?.title]
                                    ? 'rotate-180 transition-all'
                                    : ''
                                }
                              />
                            </span>
                          </p>
                          {toggleDropdown[dropdown?.title] && (
                            <div
                              className={`${styles.drop} flex flex-col lg:flex-row justify-center lg:justify-between gap-3 w-full lg:w-[35%] `}
                              ref={modalRef}
                            >
                              <ul className={`  flex flex-col text-start `}>
                                {dropdown.data.map(
                                  ({ id, title, icon, subtitle, path }) => (
                                    <Link
                                      key={id}
                                      href={path}
                                      className={` ${
                                        currentRoute === path
                                          ? styles.isActive
                                          : styles.notActive
                                      } flex my-3 gap-3 `}
                                      onClick={() => handleToggle('navbar')}
                                    >
                                      {icon}
                                      <div className='flex-1 max-w-52'>
                                        <p className='!font-semibold !text-base'>
                                          {title}{' '}
                                        </p>
                                        <small className='!text-Grey6'>
                                          {' '}
                                          {subtitle}{' '}
                                        </small>
                                      </div>
                                    </Link>
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
                <div className='flex justify-start lg:justify-end  mt-8 lg:mt-0 w-11/12 lg:w-2/12'>
                  <a
                    href='https://wa.me/message/DMUFZ4VU2SNCF1'
                    target='_blank'
                    rel='noreferrer'
                    className={`main-btn text-center w-full`}
                  >
                    Download
                  </a>
                </div>
              </section>
            </aside>
          </section>
          {/* Hambuger icon */}
          <section className='w-1/12 flex lg:hidden'>
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
