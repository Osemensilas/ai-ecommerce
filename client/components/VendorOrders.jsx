import styles from '../app/css/dashboard.module.css';
import Image from 'next/image';

const VendorOrders = () => {
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
                <div className={styles.productsTopSecond}>
                    <button type="button">Dashboard</button>
                    <i className="fa fa-angle-right"></i>
                    <button type="button">Product</button>
                </div>
            </div>
            <header className={styles.productsHeader}>
                <h2>Orders</h2>
                <div className={styles.headerBtnContainer}>
                    <button type="button" className={styles.exportBtn}><i className="fa fa-eye"></i> Hide Analytics</button>
                    <button type="button" className={styles.addProductBtn}><i className="fas fa-file-export"></i> Export</button>
                </div>
            </header>
            <div className={styles.orderTotalEarnContainer}>
                <div className={styles.orderTotalEarnContainerTop}>
                    <i className="fa-solid fa-coins"></i>
                    <p>Total Earnings</p>
                </div>
                <div className={styles.orderTotalEarnContainerBottom}>
                    <h2>₦{Number(450000).toLocaleString()}</h2>
                    <p>+{Number(5300).toLocaleString()} this week</p>
                </div>
            </div>
            <div className={styles.productsContent}>
                <div className={styles.productsContentTop}>
                    <button className={`${styles.productsContentTopBtn} ${styles.active}`}>
                        New
                    </button>
                    <button className={styles.productsContentTopBtn}>
                        Processed
                    </button>
                    <button className={styles.productsContentTopBtn}>
                        Cancelled
                    </button>
                    <button className={styles.productsContentTopBtn}>
                        Returned
                    </button>
                    <button className={styles.productsContentTopBtn}>
                        Analytics
                    </button>
                </div>
                <form className={styles.productsContentForm}>
                    <div className={styles.productsContentMiddleLeft}>
                        <select name="customer" id="customer">
                            <option value="">Customer</option>
                        </select>
                        <select name="status" id="status">
                            <option value="">Status</option>
                        </select>
                        <select name="today" id="today">
                            <option value="">Today</option>
                        </select>
                        <select name="modify" id="modify">
                            <option value="">Modify</option>
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
                                <th>id</th>
                                <th>Customer</th>
                                <th>Item Type</th>
                                <th>Item Details</th>
                                <th>Order date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className={`${styles.orderTableBody} ${styles.productsTable}`}>
                            <tr>
                                <td>#1025</td>
                                <td>Chris Green</td>
                                <td>Scarf</td>
                                <td>Grey Wool Bl...</td>
                                <td>03 Mar. 24 <span className={styles.innerSpan}></span> 10:00 am</td>
                                <td><span className={`${styles.status} ${styles.processing}`}>Processing</span></td>
                                <td><button>View</button> Report Issue</td>
                            </tr>
                            <tr>
                                <td>#1285</td>
                                <td>Alex Carter</td>
                                <td>Glove</td>
                                <td>Black Leather</td>
                                <td>03 Mar. 24 <span className={styles.innerSpan}></span> 10:00 am</td>
                                <td><span className={`${styles.status} ${styles.delivered}`}>Delivered</span></td>
                                <td><button>View</button> Report Issue</td>
                            </tr>
                            <tr>
                                <td>#1283</td>
                                <td>John Smith</td>
                                <td>Shoe</td>
                                <td>Brown Leather</td>
                                <td>03 Mar. 24 <span className={styles.innerSpan}></span> 10:00 am</td>
                                <td><span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span></td>
                                <td><button>View</button> Report Issue</td>
                            </tr>
                            <tr>
                                <td>#1025</td>
                                <td>Chris Green</td>
                                <td>Scarf</td>
                                <td>Grey Wool Bl...</td>
                                <td>03 Mar. 24 <span className={styles.innerSpan}></span> 10:00 am</td>
                                <td><span className={`${styles.status} ${styles.processing}`}>Processing</span></td>
                                <td><button>View</button> Report Issue</td>
                            </tr>
                            <tr>
                                <td>#1285</td>
                                <td>Alex Carter</td>
                                <td>Glove</td>
                                <td>Black Leather</td>
                                <td>03 Mar. 24 <span className={styles.innerSpan}></span> 10:00 am</td>
                                <td><span className={`${styles.status} ${styles.delivered}`}>Delivered</span></td>
                                <td><button>View</button> Report Issue</td>
                            </tr>
                            <tr>
                                <td>#1283</td>
                                <td>John Smith</td>
                                <td>Shoe</td>
                                <td>Brown Leather</td>
                                <td>03 Mar. 24 <span className={styles.innerSpan}></span> 10:00 am</td>
                                <td><span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span></td>
                                <td><button>View</button> Report Issue</td>
                            </tr>
                            <tr>
                                <td>#1025</td>
                                <td>Chris Green</td>
                                <td>Scarf</td>
                                <td>Grey Wool Bl...</td>
                                <td>03 Mar. 24 <span className={styles.innerSpan}></span> 10:00 am</td>
                                <td><span className={`${styles.status} ${styles.processing}`}>Processing</span></td>
                                <td><button>View</button> Report Issue</td>
                            </tr>
                            <tr>
                                <td>#1285</td>
                                <td>Alex Carter</td>
                                <td>Glove</td>
                                <td>Black Leather</td>
                                <td>03 Mar. 24 <span className={styles.innerSpan}></span> 10:00 am</td>
                                <td><span className={`${styles.status} ${styles.delivered}`}>Delivered</span></td>
                                <td><button>View</button> Report Issue</td>
                            </tr>
                            <tr>
                                <td>#1283</td>
                                <td>John Smith</td>
                                <td>Shoe</td>
                                <td>Brown Leather</td>
                                <td>03 Mar. 24 <span className={styles.innerSpan}></span> 10:00 am</td>
                                <td><span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span></td>
                                <td><button>View</button> Report Issue</td>
                            </tr>
                            <tr>
                                <td>#1025</td>
                                <td>Chris Green</td>
                                <td>Scarf</td>
                                <td>Grey Wool Bl...</td>
                                <td>03 Mar. 24 <span className={styles.innerSpan}></span> 10:00 am</td>
                                <td><span className={`${styles.status} ${styles.processing}`}>Processing</span></td>
                                <td><button>View</button> Report Issue</td>
                            </tr>
                            <tr>
                                <td>#1285</td>
                                <td>Alex Carter</td>
                                <td>Glove</td>
                                <td>Black Leather</td>
                                <td>03 Mar. 24 <span className={styles.innerSpan}></span> 10:00 am</td>
                                <td><span className={`${styles.status} ${styles.delivered}`}>Delivered</span></td>
                                <td><button>View</button> Report Issue</td>
                            </tr>
                            <tr>
                                <td>#1283</td>
                                <td>John Smith</td>
                                <td>Shoe</td>
                                <td>Brown Leather</td>
                                <td>03 Mar. 24 <span className={styles.innerSpan}></span> 10:00 am</td>
                                <td><span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span></td>
                                <td><button>View</button> Report Issue</td>
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
 
export default VendorOrders;