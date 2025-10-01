import DashboardLines from "./DashboardLines";
import styles from '../app/css/dashboard.module.css';

const DashboardIncome = () => {
    return (
        <>
        <div className={styles.dashboardSalesCard}>
            <div className={styles.dashboardIncome}>
                <div className={styles.dashboardIncomeTop}>
                
                </div>
                <div className={styles.dashboardIncomeBottom}>
                    <DashboardLines />
                </div>
            </div>
        </div>
        </>
     );
}
 
export default DashboardIncome;