'use client'

import Link from 'next/link';
import styles from '../css/cart.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { color } from 'framer-motion';

const Page = () => {

    const [activeUser, setActiveUser] = useState(true);
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
        <div className={styles.page}>
            <div className={styles.cartLeft}>
                <div className={styles.cartLeftTop}>
                    <h2>Cart(0)</h2>
                </div>
                <div className={styles.cartLeftBottom}>
                    <div className={`${styles.cartItemsDeleteContainer} ${itemsPresent ? "" : styles.hide}`}>
                        <input type="checkbox" id="delete" />
                        <label htmlFor="delete">Select all items</label>
                        <button>Delete Selected Items</button>
                    </div>
                    
                        {
                            
                            items.map((item, index) => (
                                <div key={index} className={styles.cartLeftBottomItems}>
                                    <div className={styles.cartLeftBottomItemsCard}>
                                        <div className={styles.cardTop}>
                                            <p>Shipped by global seller</p>
                                        </div>
                                        <div className={styles.cardBottom}>
                                            <input type="checkbox" />
                                            <div className={styles.cartLeftBottomItemsCardImg}>
                                                <div className={styles.cartImgContainer}>
                                                    <Image src={item.image} fill className={styles.cartImage} alt="item image" />
                                                </div>
                                            </div>
                                            <div className={styles.cartLeftBottomItemsCardDet}>
                                                <header className={styles.header}>
                                                    <h2>{item.name}</h2>
                                                    <button><i className="fa fa-trash"></i></button>
                                                </header>
                                                <div className={styles.cartItemDescritpion}>
                                                    <div className={styles.cartItemDes}>
                                                        <p>Condition:</p>
                                                        <div className={styles.dotDark}></div>
                                                        <h3>New</h3>
                                                    </div>
                                                    <div className={styles.cartItemDes}>
                                                        <p>Color:</p>
                                                        <div className={styles.dotGrey}></div>
                                                        <h3>{item.color}</h3>
                                                    </div>
                                                </div>
                                                <h3 className={styles.priceValue}>₦{Number(item.price).toLocaleString()}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    <div className={styles.cartLeftBottomNoItem}>
                        <div className={styles.cartLeftBottomImg}>
                            <Image src={"/"} alt='shopping cart' fill className={styles.cartImage} />
                        </div>
                        <h3>Your cart is empty</h3>
                        <Link href="/products">Explore Items</Link>
                    </div>
                </div>
            </div>
            <div className={styles.cartRight}>
                <div className={styles.activeCheckout}>
                    <h3>Summary</h3>
                    <div className={styles.checkoutValue}>
                        <h3>Total</h3>
                        <h3>₦{Number(150000).toLocaleString()}</h3>
                    </div>
                    <button className={styles.checkoutBtn}>Checkout</button>
                    <div className={styles.paymentOptions}>
                        <h3>Pay With</h3>
                        <div className={styles.paymentsContainer}>
                            <div className={styles.paymentOptionImg}>
                                <Image src={"/"} alt='shopping cart' fill className={styles.cartImage} />
                            </div>
                            <div className={styles.paymentOptionImg}>
                                <Image src={"/"} alt='shopping cart' fill className={styles.cartImage} />
                            </div>
                            <div className={styles.paymentOptionImg}>
                                <Image src={"/"} alt='shopping cart' fill className={styles.cartImage} />
                            </div>
                            <div className={styles.paymentOptionImg}>
                                <Image src={"/"} alt='shopping cart' fill className={styles.cartImage} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.userDetails}>
                    <div className={styles.userDetailsTop}>
                        <div className={`${styles.userDetailsTopActive} ${activeUser ? "" : styles.hide}`}>
                           <div className={styles.userDetailsTopActiveUser}>
                                <i className="fa fa-user"></i>
                                <p>Welcome back, Rose</p>  
                            </div> 
                            <button>Sign Out</button>
                        </div>
                        <div className={`${styles.userDetailsTopNone} ${activeUser ? styles.hide : ""}`}>
                            <Link href={"/"} className={styles.cartSignin}>Sign In</Link>
                            <Link href={"/"}  className={styles.cartRegister}>Register</Link>
                        </div>
                    </div>
                    <div className={styles.userDetailsBottomMain}>
                        <div className={styles.userDetailsBottom}>
                            <Link href={"/"} className={styles.userDetailsContainer}>
                                <i className="fa fa-wallet"></i>
                                <p>Transaction History</p>
                            </Link>
                            <Link href={"/"} className={styles.userDetailsContainer}>
                                <i className="fa fa-wallet"></i>
                                <p>Help Center</p>
                            </Link>
                            <Link href={"/"} className={styles.userDetailsContainer}>
                                <i className="fa fa-wallet"></i>
                                <p>Saved</p>
                            </Link>
                            <Link href={"/"} className={styles.userDetailsContainer}>
                                <i className="fa fa-wallet"></i>
                                <p>Track Shipment</p>
                            </Link>
                        </div>
                        <div className={styles.userDetailsBottomAdd}>
                            <Link href={"/"}>Shipping Address</Link>
                            <Link href={"/"}>Pending Reviews</Link>
                            <Link href={"/"}>Seller Log In</Link>
                            <Link href={"/"}>Return & Refund Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Page;