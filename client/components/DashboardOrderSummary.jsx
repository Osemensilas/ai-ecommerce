import styles from '../app/css/dashboard.module.css';
import DashboardOrderSumLine from './DashboardOrderSumLine';

const DashboardOrderSummary = () => {
    return ( 
        <>
        <div className={styles.dashboardSalesCard}>
            <div className={styles.dashboardOrderSummaryCardLeft}>
                <header className={styles.dashboardSalesCardheader}>
                    <h3>Sales Order Summary(in Naira)</h3>
                </header>
                <div className={styles.dashboardOrderSummaryCardLeftContent}>
                    <div className={styles.dashboardOrderSummaryCardLContent}>
                        <DashboardOrderSumLine />
                    </div>
                    <div className={styles.dashboardOrderSummaryCardRContent}>
                        <h3>Total Sale</h3>
                        <div className={styles.dashboardOrderSummaryCardRtext}>
                            <div className={styles.dashboardOrderSummaryCardRtextTop}>
                                <div className={styles.dashboardOrderIcon}></div>
                                <div className={styles.dashboardOrderSummaryCardRtextBottom}>
                                    <h3>Direct Sale</h3>
                                    <h3>₦118,000.00</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default DashboardOrderSummary;