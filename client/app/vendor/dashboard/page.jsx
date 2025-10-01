'use client';

import styles from '../../css/dashboard.module.css';
import VendorNav from '@/components/VendorNav';
import VendorDashboard from '@/components/VendorDashBoard';
import VendorProducts from '@/components/VendorProducts';
import { usePathname, useSearchParams } from 'next/navigation';
import VendorOrders from '@/components/VendorOrders';
import VendorCustomer from '@/components/VendorsCustomers';
import VendorReports from '@/components/VendorReports';
import VendorPromotion from '@/components/VendorPromotion';
import VendorWallet from '@/components/VendorWallet';
import VendorShipment from '@/components/VendorShipment';
import VendorSetting from '@/components/VendorSetting';

const Page = () => {

    const pathName = usePathname();

    return ( 
        <>
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
                ${pathName === "/vendor/wallet" ? styles.active : ""}
                `}>
                    <VendorWallet />
                </div>
                <div className={`${styles.VendorComponentContainer}
                ${pathName === "/vendor/shipment" ? styles.active : ""}
                `}>
                    <VendorShipment />
                </div>
                <div className={`${styles.VendorComponentContainer}
                ${pathName === "/vendor/setting" ? styles.active : ""}
                `}>
                    <VendorSetting />
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Page;