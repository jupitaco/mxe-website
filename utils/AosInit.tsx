'use client';
import { ReactNode, useEffect } from 'react';
import '../app/globals.css';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function AOSAnimation({ children }: { children: ReactNode }) {
  // AOS animation
  const AOS = require('aos');

  useEffect(() => {
    AOS.init();
  }, [AOS]);

  return <div> {children} </div>;
}
