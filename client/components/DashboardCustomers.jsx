import styles from '../app/css/dashboard.module.css';

const DashboardCustomers = () => {
    return ( 
        <>
        <div className={styles.dashboardCards}>
            <div className={styles.dashboardCard}>
                <div className={styles.dashboardCardContent}>
                    <p>Customers</p>
                    <h3>230</h3>
                </div>
                <div className={styles.dashboardCardContent}>
                    <p>Products</p>
                    <h3>50</h3>
                </div>
                <div className={styles.dashboardCardContent}>
                    <p>Sale</p>
                    <h3>1,200</h3>
                </div>
            </div>           
        </div>
        </>
     );
}
 
export default DashboardCustomers;