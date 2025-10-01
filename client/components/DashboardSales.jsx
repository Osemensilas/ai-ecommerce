import styles from '../app/css/dashboard.module.css';

const DashboardSales = () => {
    return ( 
        <>
        <div className={styles.dashboardSalesCard}>
            <div className={styles.dashboardSalesCardLeft}>
                <header className={styles.dashboardSalesCardheader}>
                    <h3>Sales Activity</h3>
                </header>
                <div className={styles.dashboardSalesCardLeftContent}>
                    <div className={styles.dashboardSalesCardRContent}>
                        <h3>51</h3>
                        <p>Kg</p>
                        <h3>TOTAL SALES</h3>
                    </div>
                    <div className={styles.dashboardSalesCardRContent}>
                        <h3>10</h3>
                        <p>pkg</p>
                        <h3>TRANSACTIONS</h3>
                    </div>
                    <div className={styles.dashboardSalesCardRContent}>
                        <h3>2</h3>
                        <p>pkg</p>
                        <h3>PENDING</h3>
                    </div>
                    <div className={styles.dashboardSalesCardRContent}>
                        <h3>90</h3>
                        <p>pkg</p>
                        <h3>CANCELLED</h3>
                    </div>
                </div>
            </div>
            <div className={styles.dashboardSalesCardRight}>
                <header className={styles.dashboardSalesCardheader}>
                    <h3>Inventory Summary</h3>
                </header>
                <div className={styles.dashboardSalesCardRightContent}>
                    <div className={styles.dashboardSalesCardLContent}>
                        <h3>QUANTITY IN HAND</h3>
                        <h3>12746</h3>
                    </div>
                    <div className={styles.dashboardSalesCardLContent}>
                        <h3>QUANTITY TO BE RECIEVED</h3>
                        <h3>62</h3>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default DashboardSales;