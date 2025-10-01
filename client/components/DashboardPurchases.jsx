import styles from '../app/css/dashboard.module.css';

const DashboardPurchases = () => {
    return ( 
        <>
        <div className={styles.dashboardSalesCard}>
            <div className={styles.dashboardPurchaseCardLeft}>
                <header className={styles.dashboardSalesCardheader}>
                    <h3>Top 5 Purchase</h3>
                </header>
                <div className={styles.dashboardPurchaseCardLeftContent}>
                    <table className={styles.orderTable}>
                        <thead className={styles.orderTableHead}>
                            <tr>
                                <th>S/N</th>
                                <th>Station</th>
                                <th>Location</th>
                                <th>Shipment</th>
                                <th>Pick Up</th>
                                <th>Delivered</th>
                                <th>Perf.</th>
                            </tr>
                        </thead>
                        <tbody className={styles.orderTableBody}>
                            <tr>
                                <td>1</td>
                                <td>Main Land</td>
                                <td>Lagos</td>
                                <td>1,500</td>
                                <td>1,450</td>
                                <td>1,450</td>
                                <td>89%</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Main Land</td>
                                <td>Lagos</td>
                                <td>1,500</td>
                                <td>1,450</td>
                                <td>1,450</td>
                                <td>89%</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Main Land</td>
                                <td>Lagos</td>
                                <td>1,500</td>
                                <td>1,450</td>
                                <td>1,450</td>
                                <td>89%</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Main Land</td>
                                <td>Lagos</td>
                                <td>1,500</td>
                                <td>1,450</td>
                                <td>1,450</td>
                                <td>89%</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Main Land</td>
                                <td>Lagos</td>
                                <td>1,500</td>
                                <td>1,450</td>
                                <td>1,450</td>
                                <td>89%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={styles.dashboardPurchaseCardRight}>
                <header className={styles.dashboardSalesCardheader}>
                    <h3>Top 5 Product</h3>
                </header>
                <div className={styles.dashboardPurchaseCardRightContent}>
                    <table className={styles.orderTable}>
                        <thead className={styles.orderTableHead}>
                            <tr>
                                <th>S/N</th>
                                <th>Name</th>
                                <th>Station</th>
                                <th>Orders</th>
                                <th>Successful</th>
                                <th>Failed</th>
                            </tr>
                        </thead>
                        <tbody className={styles.orderTableBody}>
                            <tr>
                                <td>1</td>
                                <td>Rose</td>
                                <td>Abuja</td>
                                <td>78</td>
                                <td>77</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Rose</td>
                                <td>Abuja</td>
                                <td>78</td>
                                <td>77</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Rose</td>
                                <td>Abuja</td>
                                <td>78</td>
                                <td>77</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Rose</td>
                                <td>Abuja</td>
                                <td>78</td>
                                <td>77</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Rose</td>
                                <td>Abuja</td>
                                <td>78</td>
                                <td>77</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default DashboardPurchases;