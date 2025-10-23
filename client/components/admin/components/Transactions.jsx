import styles from '../../../app/css/dashboard.module.css';
import Transactions from "../charts/Transactions";

const TransactionsMain = () => {
    return (
        <>
        <div className={styles.dashboardSalesCard}>
            <div className={styles.dashboardIncome}>
                <div className={styles.dashboardIncomeTop}>
                    <div className={styles.dashboardIncomeTopLeft}>
                        <header>
                            <h2>Transactions</h2>
                            <div className={styles.dashboardIncomeHeader}>
                                <h3>Total Deposit</h3>
                                <h3>₦{Number(390493).toLocaleString()}</h3>
                            </div>
                            <div className={styles.dashboardIncomeHeader}>
                                <h3>Total Withdrawal</h3>
                                <h3>₦{Number(390493).toLocaleString()}</h3>
                            </div>
                        </header>
                        <div className={styles.dashboardIncomeTopLeftLeft}>
                            <div className={styles.dashboardIncomeTopLeftIcon}>
                                <div className={styles.icon}></div>
                                <p>Deposit</p>
                            </div>
                            <div className={styles.dashboardIncomeTopLeftIcon}>
                                <div className={styles.dIcon}></div>
                                <p>Withdrawal</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.dashboardIncomeBottom}>
                    <Transactions />
                </div>
            </div>
        </div>
        </>
     );
}
 
export default TransactionsMain;