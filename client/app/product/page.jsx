import { Suspense } from 'react';
import Header from '@/components/Header';
import FAQ from '@/components/Faq';
import Footer from '@/components/Footer';

const Product = dynamic(() => import('@/components/Product'), { ssr: false });

const ProductPage = () => {

    return ( 
        <>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
        <Product />
        </Suspense>
        <FAQ />
        <Footer />
        </>
     );
}
 
export default ProductPage;