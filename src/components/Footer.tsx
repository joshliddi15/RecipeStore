import React from 'react';
import Link from 'next/link';

export default function Footer () {
      return (
    <footer className='text-lg bg-brown text-white'>
      <nav className="gap-x-7 inline-flex p-3">
          <Link href="/about" className="hover:text-blue-300 cursor-pointer">
            Contact
          </Link>
          <Link href="/about" className="hover:text-blue-300 cursor-pointer">
            Privacy Policy
          </Link>
          <p className="inline">&copy; 2023 Artisan Sales Site</p>
      </nav>
      
    </footer>
  );
};
