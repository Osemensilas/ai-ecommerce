'use client'

import Link from 'next/link';
import styles from '../css/cart.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { color } from 'framer-motion';
import { Typography } from '@mui/material';
import CartPage from '../../components/CartPage';
import { useCartStore } from '@/components/auth/Cart';

const Page = () => {
    const cartItems = useCartStore((state) => state.cart);
    console.log("Cart Items in Page:", cartItems);
    const [itemsPresent, setItemsPresent] = useState(true);

    const items = [
        {
            id: 1,
            name: "Female Coat",
            price: 150000,
            image: "/product1.jpg",
            color: "Dark"
        }
    ];

    return (
        <>
            {/* <div className={styles.page}> */}
                {/* <div className={styles.cartLeft}> */}
                    <CartPage />
                {/* </div> */}
            {/* </div> */}
        </>
    );
}

export default Page;