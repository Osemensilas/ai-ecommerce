import styles from '../../app/css/dashboard.module.css';
import Image from 'next/image';

const CustomerCare = () => {
    return ( 
        <>
        <div className={styles.mainVendorDashboard}>
            <div className={styles.productsTop}>
                <div className={styles.productsTopFirst}>
                    <button type="button" className={styles.productsTopFirstBtn}><i className="fa fa-bell"></i></button>
                    <div className={styles.productsTopImageContainer}>
                        <Image src="/hair5.png" alt="user image" fill className={styles.userImage} />
                    </div>
                </div>
            </div>
            <header className={styles.productsHeader}>
                <h2>Customer Care Center</h2>
            </header>
            <div className={styles.mainCusdashboardOverall}>
                <div className={styles.adminDashbordTop}>
                    <div className={styles.adminDashbordTopContent}>
                        <header className={styles.adminDashbordTopContentHeader}>
                            <i className="fa fa-right-left"></i>
                            <h3>5</h3>
                        </header>
                        <div className={styles.adminDashbordTopContentBottom}>
                            <h2>Open Tickets</h2>
                        </div>
                    </div>
                    <div className={styles.adminDashbordTopContent}>
                        <header className={styles.adminDashbordTopContentHeader}>
                            <i className="fa fa-right-left"></i>
                            <h3>5</h3>
                        </header>
                        <div className={styles.adminDashbordTopContentBottom}>
                            <h2>Resolved Tickets</h2>
                        </div>
                    </div>
                    <div className={styles.adminDashbordTopContent}>
                        <header className={styles.adminDashbordTopContentHeader}>
                            <i className="fa fa-right-left"></i>
                            <h3>5</h3>
                        </header>
                        <div className={styles.adminDashbordTopContentBottom}>
                            <h2>Top Issue Category</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.productsContent}>
                <div className={styles.productsContentTop}>
                    <button className={`${styles.productsContentTopBtn} ${styles.active}`}>
                        Refunds
                    </button>
                    <button className={styles.productsContentTopBtn}>
                        Return Requests
                    </button>
                    <button className={styles.productsContentTopBtn}>
                        Others
                    </button>
                </div>
                <form className={styles.productsContentForm}>
                    <div className={styles.productsContentMiddleLeft}>
                        <select name="customer" id="customer">
                            <option value="">ID</option>
                        </select>
                        <select name="status" id="status">
                            <option value="">Sort By Name</option>
                        </select>
                    </div>
                    <div className={styles.productsContentMiddleRight}>
                        <input type="text" className={styles.productsContentMiddleInput} placeholder="Search" />
                        <i className="fa fa-search"></i>
                    </div>
                </form>
                <div className={styles.productsContentBottom}>
                    <table className={styles.orderTable}>
                        <thead className={styles.orderTableHead}>
                            <tr>
                                <th><input type="checkbox" name="genCheck" id="genCheck" /> </th>
                                <th>Username</th>
                                <th>Ticket ID</th>
                                <th>Date Created</th>
                                <th>Subject</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody className={`${styles.orderTableBody} ${styles.productsTable}`}>
                            <tr>
                                <td><input type="checkbox" name="genCheck" id="genCheck" /> </td>
                                <td>Chris Green</td>
                                <td>#495790</td>
                                <td>June 1st, 2024 | 1:00 PM</td>
                                <td>Refund not Recieved</td>
                                <td><span className={`${styles.status} ${styles.processing}`}>Processing</span></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="genCheck" id="genCheck" /> </td>
                                <td>Chris Green</td>
                                <td>#495790</td>
                                <td>June 1st, 2024 | 1:00 PM</td>
                                <td>Refund not Recieved</td>
                                <td><span className={`${styles.status} ${styles.processing}`}>Processing</span></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="genCheck" id="genCheck" /> </td>
                                <td>Chris Green</td>
                                <td>#495790</td>
                                <td>June 1st, 2024 | 1:00 PM</td>
                                <td>Refund not Recieved</td>
                                <td><span className={`${styles.status} ${styles.processing}`}>Processing</span></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="genCheck" id="genCheck" /> </td>
                                <td>Chris Green</td>
                                <td>#495790</td>
                                <td>June 1st, 2024 | 1:00 PM</td>
                                <td>Refund not Recieved</td>
                                <td><span className={`${styles.status} ${styles.processing}`}>Processing</span></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="genCheck" id="genCheck" /> </td>
                                <td>Chris Green</td>
                                <td>#495790</td>
                                <td>June 1st, 2024 | 1:00 PM</td>
                                <td>Refund not Recieved</td>
                                <td><span className={`${styles.status} ${styles.processing}`}>Processing</span></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="genCheck" id="genCheck" /> </td>
                                <td>Chris Green</td>
                                <td>#495790</td>
                                <td>June 1st, 2024 | 1:00 PM</td>
                                <td>Refund not Recieved</td>
                                <td><span className={`${styles.status} ${styles.processing}`}>Processing</span></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="genCheck" id="genCheck" /> </td>
                                <td>Chris Green</td>
                                <td>#495790</td>
                                <td>June 1st, 2024 | 1:00 PM</td>
                                <td>Refund not Recieved</td>
                                <td><span className={`${styles.status} ${styles.processing}`}>Processing</span></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="genCheck" id="genCheck" /> </td>
                                <td>Chris Green</td>
                                <td>#495790</td>
                                <td>June 1st, 2024 | 1:00 PM</td>
                                <td>Refund not Recieved</td>
                                <td><span className={`${styles.status} ${styles.processing}`}>Processing</span></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="genCheck" id="genCheck" /> </td>
                                <td>Chris Green</td>
                                <td>#495790</td>
                                <td>June 1st, 2024 | 1:00 PM</td>
                                <td>Refund not Recieved</td>
                                <td><span className={`${styles.status} ${styles.processing}`}>Processing</span></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={styles.productNavContainer}>
                        <div className={styles.productNavContainerLeft}>
                            showing 1 - 10 of 25
                        </div>
                        <ul className={styles.productPagination}>
                            <li  className={styles.productPaginationList}>
                                <button type="button" className={styles.productPaginationBtn}>
                                    <i className="fa fa-angle-left"></i>
                                </button>
                            </li>
                            <li  className={styles.productPaginationList}>
                                <button type="button" className={`${styles.productPaginationNum} ${styles.active}`}>
                                    1
                                </button>
                            </li>
                            <li  className={styles.productPaginationList}>
                                <button type="button" className={styles.productPaginationNum}>
                                    2
                                </button>
                            </li>
                            <li  className={styles.productPaginationList}>
                                <button type="button" className={styles.productPaginationNum}>
                                    3
                                </button>
                            </li>
                            <li  className={styles.productPaginationList}>
                                ...
                            </li>
                            <li  className={styles.productPaginationList}>
                                <button type="button" className={styles.productPaginationNum}>
                                    10
                                </button>
                            </li>
                            <li  className={styles.productPaginationList}>
                                <button type="button" className={`${styles.productPaginationBtn} ${styles.active}`}>
                                    <i className="fa fa-angle-right"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default CustomerCare;