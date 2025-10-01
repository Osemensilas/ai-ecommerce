import styles from '../app/css/vendornav.module.css';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';

const VendorNav = () => {

    const pathName = usePathname();

    const dashboardClicked = () => {
        window.history.pushState({}, '', '/vendor/dashboard');
    }

    const productsClicked = () => {
        window.history.pushState({}, '', '/vendor/products');
    }

    const ordersClicked = () => {
        window.history.pushState({}, '', '/vendor/orders');
    }

    const customersClicked = () => {
        window.history.pushState({}, '', '/vendor/customers');
    }

    const reportClicked = () => {
        window.history.pushState({}, '', '/vendor/reports');
    }

    const promotionClicked = () => {
        window.history.pushState({}, '', '/vendor/promotion');
    }

    const walletClicked = () => {
        window.history.pushState({}, '', '/vendor/wallet');
    }

    const shipmentClicked = () => {
        window.history.pushState({}, '', '/vendor/shipment');
    }

    const settingsClicked = () => {
        window.history.pushState({}, '', '/vendor/setting');
    }

    return ( 
        <>
        <div className={styles.vendorNavContainer}>
            <div className={styles.vendorNavContainerTop}>
                <div className={styles.vendorNavLogo}>
                    <Image src="/logo2.png" alt="logo" fill className={styles.vendorLogo} />
                </div>
                <button type="button" className={styles.vendorNavPanelBtn}>
                    <i className="fa fa-columns"></i>
                </button>
            </div>
            <div className={styles.vendorNavContainerBottom}>
                <ul className={styles.vendorNav}>
                    <li className={styles.vendorNavItem}>
                        <button type="button" onClick={dashboardClicked} className={`${
                            pathName === "/vendor/dashboard" ? styles.active : ""}`}>
                            <div className={styles.textCarrier}><i className="fa fa-th-large"></i>Dashboard</div>
                            <p></p>
                        </button>
                    </li>
                    <li className={styles.vendorNavItem}>
                        <button type="button" onClick={productsClicked} className={`${
                            pathName === "/vendor/products" ? styles.active : ""}`}>
                            <div className={styles.textCarrier}><i className="fas fa-box-open"></i>Products</div>
                            <p>23</p>
                        </button>
                    </li>
                    <li className={styles.vendorNavItem}>
                        <button type="button" onClick={customersClicked} className={`${
                            pathName === "/vendor/customers" ? styles.active : ""}`}>
                            <div className={styles.textCarrier}><i className="fas fa-users"></i>Customers</div>
                            <p>23</p>
                        </button>
                    </li>
                    <li className={styles.vendorNavItem}>
                        <button type="button" onClick={ordersClicked} className={`${
                            pathName === "/vendor/orders" ? styles.active : ""}`}>
                            <div className={styles.textCarrier}><i className="fa fa-clipboard"></i>Orders</div>
                            <p>23</p>
                        </button>
                    </li>
                    <li className={styles.vendorNavItem}>
                        <button type="button" onClick={reportClicked} className={`${
                            pathName === "/vendor/reports" ? styles.active : ""}`}>
                            <div className={styles.textCarrier}><i className="fas fa-chart-pie"></i>Reports</div>
                            <p></p>
                        </button>
                    </li>
                    <li className={styles.vendorNavItem}>
                        <button type="button" onClick={promotionClicked} className={`${
                            pathName === "/vendor/promotion" ? styles.active : ""}`}>
                            <div className={styles.textCarrier}><i className="fas fa-bullhorn"></i>Promotions & Ads</div>
                            <p></p>
                        </button>
                    </li>
                    <li className={styles.vendorNavItem}>
                        <button type="button" onClick={walletClicked} className={`${
                            pathName === "/vendor/wallet" ? styles.active : ""}`}>
                            <div className={styles.textCarrier}><i className="fa fa-credit-card"></i>Wallets</div>
                            <p></p>
                        </button>
                    </li>
                    <li className={styles.vendorNavItem}>
                        <button type="button" onClick={shipmentClicked} className={`${
                            pathName === "/vendor/shipment" ? styles.active : ""}`}>
                            <div className={styles.textCarrier}><i className="fas fa-truck-fast"></i>Shipments</div>
                            <p></p>
                        </button>
                    </li>
                    <li className={styles.vendorNavItem}>
                        <button type="button" onClick={settingsClicked} className={`${
                            pathName === "/vendor/setting" ? styles.active : ""}`}>
                            <div className={styles.textCarrier}><i className="fas fa-cog"></i>Settings</div>
                            <p></p>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        </>
     );
}
 
export default VendorNav;