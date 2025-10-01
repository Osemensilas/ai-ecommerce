import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductsPage from '@/components/ProductsPage';
import { Suspense } from 'react';
import FAQ from '@/components/Faq';
import RecentlyViewed from '@/components/RecentlyViewed';

export default function Page({ products, navMenu, flashSale }) {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsPage products={products} navMenu={navMenu} flashSale={flashSale} />
      </Suspense>
      <RecentlyViewed />
      <FAQ />
      <Footer />
    </>
  );
}
