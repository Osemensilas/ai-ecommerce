'use client';

import styles from '../../css/dashboard.module.css';
import VendorNav from '@/components/Vendor/VendorNav';
import VendorDashboard from '@/components/Vendor/VendorDashBoard';
import VendorProducts from '@/components/Vendor/VendorProducts';
import { usePathname, useSearchParams } from 'next/navigation';
import VendorOrders from '@/components/Vendor/VendorOrders';
import VendorCustomer from '@/components/Vendor/VendorsCustomers';
import VendorReports from '@/components/Vendor/VendorReports';
import VendorPromotion from '@/components/Vendor/VendorPromotion';
import VendorWallet from '@/components/Vendor/VendorWallet';
import VendorShipment from '@/components/Vendor/VendorShipment';
import VendorSetting from '@/components/vendor/VendorSetting';
import VendorAddCustomer from '@/components/Vendor/VendorAddCustomer';
import CreatePromotion from '@/components/CreatePromotion';
import PromotionOverview from '@/components/Vendor/PromotionOverview';
import CreateAds from '@/components/CreateAds';
import AdsOverview from '@/components/AdsOverview';
import TransactionHistory from '@/components/Vendor/TransactionHistory';
import Deposit from '@/components/Deposit';
import Withdraw from '@/components/Vendor/Withdraw';
import TrackShipment from '@/components/Vendor/TrackShipment';
import { Suspense } from 'react';

const Page = () => {
    

    const pathName = usePathname();

    return ( 
        <>
        <Suspense>
            <section className={styles.dashboard}>
                <div className={styles.dashboardLeft}>
                    <VendorNav />
                </div>
                <div className={styles.dashboardRight}>
                    <div className={`${styles.VendorComponentContainer}
                    ${pathName === "/vendor/dashboard" ? styles.active : ""}
                    `}>
                        <VendorDashboard />
                    </div>
                    <div className={`${styles.VendorComponentContainer}
                    ${pathName === "/vendor/products" ? styles.active : ""}
                    `}>
                        <VendorProducts />
                    </div>
                    <div className={`${styles.VendorComponentContainer}
                    ${pathName === "/vendor/customers" ? styles.active : ""}
                    `}>
                        <VendorCustomer />
                    </div>
                    <div className={`${styles.VendorComponentContainer}
                    ${pathName === "/vendor/customers/add-customer" ? styles.active : ""}
                    `}>
                        <VendorAddCustomer />
                    </div>
                    <div className={`${styles.VendorComponentContainer}
                    ${pathName === "/vendor/orders" ? styles.active : ""}
                    `}>
                        <VendorOrders />
                    </div>
                    <div className={`${styles.VendorComponentContainer}
                    ${pathName === "/vendor/reports" ? styles.active : ""}
                    `}>
                        <VendorReports />
                    </div>
                    <div className={`${styles.VendorComponentContainer}
                    ${pathName === "/vendor/promotion" ? styles.active : ""}
                    `}>
                        <VendorPromotion />
                    </div>
                    <div className={`${styles.VendorComponentContainer}
                    ${pathName === "/vendor/promotion/add-promotion" ? styles.active : ""}
                    `}>
                        <CreatePromotion />
                    </div>
                    <div className={`${styles.VendorComponentContainer}
                    ${pathName === "/vendor/promotion/add-promotion/promotion-overview" ? styles.active : ""}
                    `}>
                        <PromotionOverview />
                    </div>
                    <div className={`${styles.VendorComponentContainer}
                    ${pathName === "/vendor/promotion/add-ads" ? styles.active : ""}
                    `}>
                        <CreateAds />
                    </div>
                    <div className={`${styles.VendorComponentContainer}
                    ${pathName === "/vendor/promotion/add-ads/ads-overview" ? styles.active : ""}
                    `}>
                        <AdsOverview />
                    </div>
                    <div className={`${styles.VendorComponentContainer}
                    ${pathName === "/vendor/wallet" ? styles.active : ""}
                    `}>
                        <VendorWallet />
                    </div>
                    <div className={`${styles.VendorComponentContainer}
                    ${pathName === "/vendor/transaction-history" ? styles.active : ""}
                    `}>
                        <TransactionHistory />
                    </div>
                    <div className={`${styles.VendorComponentContainer}
                    ${pathName === "/vendor/deposit" ? styles.active : ""}
                    `}>
                        <Deposit />
                    </div>
                    <div className={`${styles.VendorComponentContainer}
                    ${pathName === "/vendor/withdraw" ? styles.active : ""}
                    `}>
                        <Withdraw />
                    </div>
                    <div className={`${styles.VendorComponentContainer}
                    ${pathName === "/vendor/shipment" ? styles.active : ""}
                    `}>
                        <VendorShipment />
                    </div>
                    <div className={`${styles.VendorComponentContainer}
                    ${pathName === "/vendor/track-shipment" ? styles.active : ""}
                    `}>
                        <TrackShipment />
                    </div>
                    <div className={`${styles.VendorComponentContainer}
                    ${pathName === "/vendor/setting" ? styles.active : ""}
                    `}>
                        <VendorSetting />
                    </div>
                </div>
            </section>
        </Suspense>
        </>
     );
}
 
export default Page;