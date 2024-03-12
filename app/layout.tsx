import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import AOSAnimation from '@/utils/AosInit';
import Footer from '@/components/Footer/Footer';
import NavBar from '@/components/Navbar/NavBar';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
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
      <body className={jakarta.variable}>
        <NavBar />
        <AOSAnimation>{children}</AOSAnimation>
        <Footer />
      </body>
    </html>
  );
}
