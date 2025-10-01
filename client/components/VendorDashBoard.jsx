'use client'

import styles from '../app/css/dashboard.module.css';
import DashboardCustomers from './DashboardCustomers';
import DashboardIncome from './DashboardIncome';
import DashboardOrders from './DashboardOrders';
import DashboardOrderSummary from './DashboardOrderSummary';
import DashboardProducts from './DashboardProducts';
import DashboardSales from './DashboardSales';
import DashboardPurchases from './DashboardPurchases';

const VendorDashboard = () => {
    return ( 
        <>
        <div className={styles.mainVendorDashboard}>
            <div className={styles.dashbordRightTop}>
                <form onSubmit={(e) => e.preventDefault()} className={styles.dashboardSearchForm}>
                    <input type="text" className={styles.dashboardSearchFormInput} placeholder="Property type, location, price range" />
                    <button type="submit" className={styles.dashboardSearchFormBtn}>Search</button>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </form>
            </div>
            <header className={styles.dashboardHeader}>
                <h2>Dashboard</h2>
            </header>
            <div className={styles.dashboardContent}>
                <div className={styles.dashboardDetailContainer}>
                    <DashboardCustomers />
                </div>
                <div className={styles.dashboardDetailContainer}>
                    <DashboardSales />
                </div>
                <div className={styles.dashboardDetailContainer}>
                    <DashboardProducts />
                </div>
                <div className={styles.dashboardDetailContainer}>
                    <DashboardIncome />
                </div>
                <div className={styles.dashboardDetailContainer}>
                    <DashboardOrders />
                </div>
                <div className={styles.dashboardDetailContainer}>
                    <DashboardOrderSummary />
                </div>
                <div className={styles.dashboardDetailContainer}>
                    <DashboardPurchases />
                </div>
            </div>
        </div>
        </>
     );
}
 
export default VendorDashboard;