import Navbar from '@/components/navbar';
import { Lilita_One, Londrina_Solid, Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--poppins-font',
});
const lilitaOne = Lilita_One({
  weight: '400',
  subsets: ['latin'],
  preload: true,
});
const londrinaSolid = Londrina_Solid({
  weight: ['300', '400'],
  subsets: ['latin'],
  preload: true,
  variable: '--londrinaSolid-font',
});

export const metadata = {
  title: 'Pizza website - Orbital application proccess',
  description: 'A website to get you pizza as fast as possible',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${lilitaOne.className} ${londrinaSolid.variable} bg-white p-8 w-screen h-screen`}
      >
        <main className="bg-primary w-full h-full rounded-[1.25rem]  flex flex-col items-center">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
