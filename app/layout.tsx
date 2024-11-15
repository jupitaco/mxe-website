import type { Metadata } from 'next';
import AOSAnimation from '@/utils/AosInit';
import Footer from '@/components/Footer/Footer';
import NavBar from '@/components/Navbar/NavBar';
import localFont from 'next/font/local';
import { Toaster } from 'react-hot-toast';

// const jakarta = Plus_Jakarta_Sans({
//   subsets: ['latin'],
//   variable: '--font-jakarta',
//   display: 'swap',
// });

const aeoniksFonts = localFont({
  src: [
    {
      path: './fonts/Aeonik-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Aeonik-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Aeonik-Medium.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Aeonik-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MXE Labs',
  description:
    'Creating a Seamless  Financial Ecosystem that Caters to Your Diverse Needs.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={aeoniksFonts.className}>
        <Toaster position='top-center' />
        <NavBar />
        <AOSAnimation>{children}</AOSAnimation>
        <Footer />
      </body>
    </html>
  );
}
