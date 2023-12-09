import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';

function LandingPage() {
  return (
    <main className="main-section p-8">
      <section className="mx-80 p-4 mb-6 bg-slate-300 rounded-xl">
        <Image
          src="/cooking.jpg"
          alt="Big Image"
          width={200}
          height={50}
          className="w-full rounded-lg"
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-center mb-4">Discover Delicious Recipes</h1>
        <p className="text-center mb-8">Explore a world of culinary delights from our kitchen to yours.</p>
        <nav className="flex justify-center mb-8">
          <ul className="flex space-x-4">
            <li className="nav-link">
              <Link href="/recipes">Top Recipes</Link>
            </li>
            <li className="nav-link">
              <Link href="/search">Search</Link>
            </li>
            <li className="nav-link">
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
};

LandingPage.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default LandingPage;
