import styles from '../app/css/dashboard.module.css';

const DashboardOrders = () => {
    return ( 
        <>
        <div className={styles.dashboardSalesCard}>
            <div className={styles.dashboardOrderCardLeft}>
                <header className={styles.dashboardSalesCardheader}>
                    <h3>Purchase Order</h3>
                </header>
                <div className={styles.dashboardOrderCardLeftContent}>
                    <div className={styles.dashboardOrderCardRContent}>
                        <h3>Quantity Ordered</h3>
                        <h3>2.0</h3>
                    </div>
                    <div className={styles.dashboardOrderCardRContent}>
                        <h3>Total Cost</h3>
                        <h3>₦145000.00</h3>
                    </div>
                </div>
            </div>
            <div className={styles.dashboardOrderCardRight}>
                <header className={styles.dashboardSalesCardheader}>
                    <h3>Sales Order</h3>
                </header>
                <div className={styles.dashboardOrderCardRightContent}>
                    <table className={styles.orderTable}>
                        <thead className={styles.orderTableHead}>
                            <tr>
                                <th>Channel</th>
                                <th>Draft</th>
                                <th>Comfirmed</th>
                                <th>Packed</th>
                                <th>Shipped</th>
                                <th>Invoiced</th>
                            </tr>
                        </thead>
                        <tbody className={styles.orderTableBody}>
                            <tr>
                                <td>Direct Sale</td>
                                <td>23</td>
                                <td>23</td>
                                <td>23</td>
                                <td>23</td>
                                <td>23</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default DashboardOrders;