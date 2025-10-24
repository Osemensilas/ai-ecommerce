'use client';

import styles from '../../css/dashboard.module.css';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import AdminNav from '@/components/admin/AdminNav';
import Dashboard from '@/components/admin/Dashboard';
import Products from '@/components/admin/Product';
import ViewProduct from '@/components/admin/components/ViewProduct';
import Buyers from '@/components/admin/Buyers';
import Orders from '@/components/admin/Order';

const Page = () => {
    

    const pathName = usePathname();

    return ( 
        <>
        <section className={styles.dashboard}>
            <div className={styles.dashboardLeft}>
                <AdminNav />
            </div>
            <div className={styles.dashboardRight}>
                <div className={`${styles.VendorComponentContainer}
                ${pathName === "/admin/dashboard" ? styles.active : ""}
                `}>
                    <Dashboard />
                </div>
                <div className={`${styles.VendorComponentContainer}
                ${pathName === "/admin/products" ? styles.active : ""}
                `}>
                    <Products />
                </div>
                <div className={`${styles.VendorComponentContainer}
                ${pathName === "/admin/products/view-product" ? styles.active : ""}
                `}>
                    <ViewProduct />
                </div>
                <div className={`${styles.VendorComponentContainer}
                ${pathName === "/admin/users/buyers" ? styles.active : ""}
                `}>
                    <Buyers />
                </div>
                <div className={`${styles.VendorComponentContainer}
                ${pathName === "/admin/users/sellers" ? styles.active : ""}
                `}>
                    Sellers
                </div>
                <div className={`${styles.VendorComponentContainer}
                ${pathName === "/admin/customers/add-customer" ? styles.active : ""}
                `}>
                    Add Custommer
                </div>
                <div className={`${styles.VendorComponentContainer}
                ${pathName === "/admin/orders" ? styles.active : ""}
                `}>
                    <Orders />
                </div>
                <div className={`${styles.VendorComponentContainer}
                ${pathName === "/admin/reports" ? styles.active : ""}
                `}>
                    Reports
                </div>
                <div className={`${styles.VendorComponentContainer}
                ${pathName === "/admin/promotion" ? styles.active : ""}
                `}>
                    Promotion
                </div>
                <div className={`${styles.VendorComponentContainer}
                ${pathName === "/admin/promotion/add-promotion" ? styles.active : ""}
                `}>
                    Create Promotion
                </div>
                <div className={`${styles.VendorComponentContainer}
                ${pathName === "/admin/promotion/add-promotion/promotion-overview" ? styles.active : ""}
                `}>
                    Promotion OverView
                </div>
                <div className={`${styles.VendorComponentContainer}
                ${pathName === "/admin/promotion/add-ads" ? styles.active : ""}
                `}>
                    Create Ads
                </div>
                <div className={`${styles.VendorComponentContainer}
                ${pathName === "/admin/promotion/add-ads/ads-overview" ? styles.active : ""}
                `}>
                    Ads Overview
                </div>
                <div className={`${styles.VendorComponentContainer}
                ${pathName === "/admin/wallet" ? styles.active : ""}
                `}>
                    Wallet
                </div>
                <div className={`${styles.VendorComponentContainer}
                ${pathName === "/admin/transaction-history" ? styles.active : ""}
                `}>
                    Transaction
                </div>
                <div className={`${styles.VendorComponentContainer}
                ${pathName === "/admin/deposit" ? styles.active : ""}
                `}>
                    Deposite
                </div>
                <div className={`${styles.VendorComponentContainer}
                ${pathName === "/admin/withdraw" ? styles.active : ""}
                `}>
                    Withdrea
                </div>
                <div className={`${styles.VendorComponentContainer}
                ${pathName === "/admin/shipment" ? styles.active : ""}
                `}>
                    Shipment
                </div>
                <div className={`${styles.VendorComponentContainer}
                ${pathName === "/admin/track-shipment" ? styles.active : ""}
                `}>
                    Track Shipment
                </div>
                <div className={`${styles.VendorComponentContainer}
                ${pathName === "/admin/setting" ? styles.active : ""}
                `}>
                    Settings
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Page;