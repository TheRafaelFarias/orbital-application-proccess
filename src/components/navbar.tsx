'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-center sm:flex-row sm:justify-between p-6 pb-10 pr-10 w-full">
      <Link href="/">
        <div className="w-14 h-14 rounded-md bg-highlight text-white flex items-center justify-center text-3xl font-primary">
          R
        </div>
      </Link>
      <div className="flex space-x-5 py-5 font-navbar text-2xl sm:text-3xl">
        <a
          href="/"
          className={pathname === '/' ? 'text-text' : 'text-navbarNotSelected'}
        >
          Home
        </a>
        <a
          href="/order"
          className={
            pathname === '/order' ? 'text-text' : 'text-navbarNotSelected'
          }
        >
          Order
        </a>
        <a
          href="/about-us"
          className={
            pathname === '/about-us' ? 'text-text' : 'text-navbarNotSelected'
          }
        >
          About us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
