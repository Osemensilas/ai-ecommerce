'use client';

import styles from '../../app/css/user.module.css';
import { usePathname, useSearchParams } from 'next/navigation';

const UserNav = () => {

    const pathName = usePathname();

    const dashboardClicked = () => {
        window.history.pushState({}, '', '/user');
    }

    const ordersClicked = () => {
        window.history.pushState({}, '', '/orders');
    }

    const addressClicked = () => {
        window.history.pushState({}, '', '/address');
    }

    const walletClicked = () => {
        window.history.pushState({}, '', '/wallet');
    }

    const pendingClicked = () => {
        window.history.pushState({}, '', '/pending-reviews');
    }
    
    const recentlyClicked = () => {
        window.history.pushState({}, '', '/recently-viewed');
    }

    const wishlistClicked = () => {
        window.history.pushState({}, '', '/wishlist');
    }

    return ( 
        <>
        <div className={styles.navMainContainer}>
            <div className={styles.navContainer}>
                <button onClick={dashboardClicked} type="button" className={` ${styles.navBtn}
                    ${pathName === "/user" ? styles.active : ""}
                    `}>
                    <i className="fa fa-user"></i>
                    My Profile
                </button>
                <button onClick={ordersClicked} type="button" className={` ${styles.navBtn}
                    ${pathName === "/orders" ? styles.active : ""}
                    `}>
                    <i className="fa fa-clipboard"></i>
                    Orders
                </button>
                <button onClick={addressClicked} type="button" className={` ${styles.navBtn}
                    ${pathName === "/address" ? styles.active : ""}
                    `}>
                    <i className="fa fa-map-marker"></i>
                    Address
                </button>
                <button onClick={walletClicked} type="button" className={` ${styles.navBtn}
                    ${pathName === "/wallet" ? styles.active : ""}
                    `}>
                    <i className="fa fa-credit-card"></i>
                    Wallet
                </button>
                <button onClick={pendingClicked} type="button" className={` ${styles.navBtn}
                    ${pathName === "/pending-reviews" ? styles.active : ""}
                    `}>
                    <i className="fa fa-hourglass-half"></i>
                    Pending Reviews
                </button>
                <button onClick={recentlyClicked} type="button" className={` ${styles.navBtn}
                    ${pathName === "/recently-viewed" ? styles.active : ""}
                    `}>
                    <i className="fa fa-history"></i>
                    Recently Viewed
                </button>
                <button onClick={wishlistClicked} type="button" className={` ${styles.navBtn}
                    ${pathName === "/wishlist" ? styles.active : ""}
                    `}>
                    <i className="fa fa-heart"></i>
                    Wishlist
                </button>
            </div>
            <button className={styles.logoutBtn}><i className="fa fa-right-from-bracket"></i> Logout</button>
        </div>
        </>
     );
}
 
export default UserNav;