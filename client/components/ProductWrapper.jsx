'use client';

const Product = dynamic(() => import('@/components/Product'), { ssr: false });
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const ProductWrapper = () => {
    return ( 
        <>
        <Suspense fallback={<div>Loading...</div>}>
            <Product /> 
        </Suspense>
        </>
     );
}
 
export default ProductWrapper;