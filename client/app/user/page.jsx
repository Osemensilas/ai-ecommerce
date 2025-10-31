'use client';

import UserNav from '@/components/user/UserNav';
import styles from '../css/user.module.css';
import Header from '@/components/Header';
import { usePathname, useSearchParams } from 'next/navigation';
import UserProfile from '@/components/user/UserProfile';
import Orders from '@/components/user/Orders';
import Address from '../../components/user/Address';
import Wallet from '@/components/user/Wallet';
import PendingReview from '@/components/user/PendingReview';
import RecentlyViewed from '@/components/user/RecentlyViewed';
import WishList from '@/components/user/Wishlist';

const Page = () => {

    const pathName = usePathname();
    
    return ( 
        <>
        <Header />
        <section className={styles.userDashboard}>
            <section className={styles.userDashboardLeft}>
                <UserNav />
            </section>
            <section className={styles.userDashboardRight}>
                <div className={`${styles.userDashboardContent}
                ${pathName === '/user' ? styles.active : ""}
                ${pathName === "/user/payment-method" ? styles.active : ""}
                ${pathName === "/user/security" ? styles.active : ""}
                `}>
                    <UserProfile />
                </div>
                <div className={`${styles.userDashboardContent}
                ${pathName === '/orders' ? styles.active : ""}
                `}>
                    <Orders />
                </div>
                <div className={`${styles.userDashboardContent}
                ${pathName === '/address' ? styles.active : ""}
                `}>
                    <Address />
                </div>
                <div className={`${styles.userDashboardContent}
                ${pathName === '/wallet' ? styles.active : ""}
                `}>
                    <Wallet />
                </div>
                <div className={`${styles.userDashboardContent}
                ${pathName === '/pending-reviews' ? styles.active: ""}
                `}>
                    <PendingReview />
                </div>
                <div className={`${styles.userDashboardContent}
                ${pathName === '/recently-viewed' ? styles.active : ""}
                `}>
                    <RecentlyViewed />
                </div>
                <div className={`${styles.userDashboardContent}
                ${pathName === '/wishlist' ? styles.active : ""}
                `}>
                    <WishList />
                </div>
            </section>
        </section>
        </>
     );
}
 
export default Page;