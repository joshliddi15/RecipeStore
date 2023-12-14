'use client'
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export interface UserData {
  uid: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  providerData: {
    providerId: string;
    uid: string;
    displayName: string | null;
    email: string;
    phoneNumber: string | null;
    photoURL: string | null;
  }[];
  stsTokenManager: {
    refreshToken: string;
    accessToken: string;
    expirationTime: number;
  };
  createdAt: string;
  lastLoginAt: string;
  apiKey: string;
  appName: string;
}

function Header()
 {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState<UserData | null>(null);

    useEffect(() => {
      if (typeof window !== 'undefined') {
        const storedUserData = sessionStorage.getItem('userData');
        if (storedUserData) {
          const parsedUserData: UserData = JSON.parse(storedUserData);
          setUserData(parsedUserData);
          setIsLoggedIn(true);
          }
        }
      }, []);

      const handleLogout = () => {
        sessionStorage.removeItem('userData');
        setUserData(null);
        setIsLoggedIn(false);
      };

  return (
    <header className="bg-brown text-white">
      <nav className="flex justify-center text-3xl">
        <ul className="flex space-x-6 m-3 p-6">
          <li>
            <Link href="/" className="hover:text-gray-300 cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link href="/recipes" className="hover:text-gray-300 cursor-pointer">
              Top Recipes
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300 cursor-pointer">
              About
            </Link>
          </li>
        </ul>
        <div className="flex space-x-6 m-3 p-6">
          {isLoggedIn ? (
            <><div className=""> {userData?.email + " "}</div><div>
              <button onClick={handleLogout}>Logout</button></div></>
          ) : (
            <Link href="/login" className="hover:text-gray-300 cursor-pointer">
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
