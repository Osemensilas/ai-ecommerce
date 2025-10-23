import styles from '../../app/css/vendornav.module.css';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const AdminNav = () => {

    const pathName = usePathname();

    const [usersNav, setUserNav] = useState('admin-customer-nav');

    const dashboardClicked = () => {
        window.history.pushState({}, '', '/admin/dashboard');
    }

    const productsClicked = () => {
        window.history.pushState({}, '', '/admin/products');
    }

    const ordersClicked = () => {
        window.history.pushState({}, '', '/admin/orders');
    }

    const customersClicked = (e) => {

        if (usersNav === "admin-customer-nav"){
            setUserNav("admin-customer-nav active");
        }else{
            setUserNav("admin-customer-nav");
        }

        e.currentTarget.children[1].classList.toggle("active");
    }

    const buyersClicked = () => {
        window.history.pushState({}, '', '/admin/users/buyers');
    }

    const sellersClicked = () => {
        window.history.pushState({}, '', '/admin/users/sellers');
    }

    const reportClicked = () => {
        window.history.pushState({}, '', '/admin/reports');
    }

    const promotionClicked = () => {
        window.history.pushState({}, '', '/admin/promotion');
    }

    const shipmentClicked = () => {
        window.history.pushState({}, '', '/admin/shipment');
    }

    return ( 
        <>
        <div className={styles.vendorNavContainer}>
            <div className={styles.vendorNavMainTop}>
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
                                pathName === "/admin/dashboard" ? styles.active : ""}`}>
                                <div className={styles.textCarrier}><i className="fa fa-th-large"></i>Dashboard</div>
                                <p></p>
                            </button>
                        </li>
                        <li className={styles.vendorNavItem}>
                            <button type="button" onClick={productsClicked} className={`
                                ${pathName === "/admin/products" ? styles.active : ""}
                                ${pathName === "/admin/products/view-product" ? styles.active : ""}
                                `}>
                                <div className={styles.textCarrier}><i className="fas fa-box-open"></i>Products</div>
                                <p></p>
                            </button>
                        </li>
                        <li className={styles.vendorNavItem}>
                            <button type="button" onClick={customersClicked} className={`
                            ${pathName === "/admin/users" ? styles.active : ""}
                            `}>
                                <div className={styles.textCarrier}><i className="fas fa-users"></i>User</div>
                                <i className="fa fa-angle-down"></i>
                            </button>
                            <div className={usersNav}>
                                <button type="button" onClick={buyersClicked} className={`
                                ${pathName === "/admin/users/buyers" ? styles.active : ""}
                                `}>
                                    <div className={styles.textCarrier}><i className="fa fa-shopping-bag"></i>Buyers</div>
                                </button>
                                <button type="button" onClick={sellersClicked} className={`
                                ${pathName === "/admin/users/sellers" ? styles.active : ""}
                                `}>
                                    <div className={styles.textCarrier}><i className="fa fa-store"></i>Sellers</div>
                                </button>
                            </div>
                        </li>
                        <li className={styles.vendorNavItem}>
                            <button type="button" onClick={ordersClicked} className={`${
                                pathName === "/admin/orders" ? styles.active : ""}`}>
                                <div className={styles.textCarrier}><i className="fa fa-clipboard"></i>Orders</div>
                                <p></p>
                            </button>
                        </li>
                        <li className={styles.vendorNavItem}>
                            <button type="button" onClick={reportClicked} className={`${
                                pathName === "/admin/reports" ? styles.active : ""}`}>
                                <div className={styles.textCarrier}><i className="fas fa-chart-pie"></i>Reports</div>
                                <p></p>
                            </button>
                        </li>
                        <li className={styles.vendorNavItem}>
                            <button type="button" onClick={promotionClicked} className={`
                                ${pathName === "/admin/promotion" ? styles.active : ""}
                                ${pathName === "/admin/promotion/add-promotion" ? styles.active : ""}
                                ${pathName === "/admin/promotion/add-ads" ? styles.active : ""}
                                ${pathName === "/admin/promotion/add-promotion/promotion-overview" ? styles.active : ""}
                                ${pathName === "/admin/promotion/add-ads/ads-overview" ? styles.active : ""}
                                `}>
                                <div className={styles.textCarrier}><i className="fas fa-bullhorn"></i>Promotions & Ads</div>
                                <p></p>
                            </button>
                        </li>
                        <li className={styles.vendorNavItem}>
                            <button type="button" onClick={shipmentClicked} className={`
                                ${pathName === "/admin/shipment" ? styles.active : ""}
                                ${pathName === "/admin/track-shipment" ? styles.active : ""}
                                `}>
                                <div className={styles.textCarrier}><i className="fas fa-truck-fast"></i>Shipments</div>
                                <p></p>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.vendorNavMainBottom}>
                <button><i className="fa fa-right-from-bracket"></i> Logout</button>
            </div>
        </div>
        </>
     );
}
 
export default AdminNav;