import React from 'react';
import Layout from '../components/layouts/Layout';
import Link from 'next/link';
import Image from 'next/image';

function LandingPage () {
  return (
    <main className="main-section p-8">
      <section className="mx-80 p-4 mb-6 bg-slate-500 rounded-xl">
        <Image
          src="/Bowl.jpg"
          alt="Big Image"
          width={200}
          height={50}
          className="w-full rounded-lg"
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-center mb-4">Welcome to Artisan Sales</h1>
        <p className="text-center mb-8">Explore our products and artisans.</p>
        <nav className="flex justify-center mb-8">
          <ul className="flex space-x-4">
            <Link href="/products" className="nav-link">Products
            </Link>
            <Link href="/artisans" className="nav-link">Artisans
            </Link>
            <Link href="/about" className="nav-link">About
            </Link>
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
