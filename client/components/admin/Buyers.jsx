import styles from '../../app/css/dashboard.module.css';
import Image from 'next/image';

const Buyers = () => {
    return ( 
        <>
        <div className={styles.mainVendorDashboard}>
            <div className={styles.dashbordRightTop}>
                <form onSubmit={(e) => e.preventDefault()} className={styles.dashboardSearchForm}>
                    <input type="text" className={styles.dashboardSearchFormInput} placeholder="Property type, location, price range" />
                    <button type="submit" className={styles.dashboardSearchFormBtn}>Search</button>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </form>
                <div className={`${styles.productsTopFirst} ${styles.productsNewTopFirst}`}>
                    <button type="button" className={styles.productsTopFirstBtn}><i className="fa fa-bell"></i></button>
                    <div className={styles.productsTopImageContainer}>
                        <Image src="/hair5.png" alt="user image" fill className={styles.userImage} />
                    </div>
                </div>
            </div>
            <div className={styles.adminPageNewNav}>
                <button type="button">Dashboard</button>
                <i className="fa fa-angle-right"></i>
                <button type="button">Product</button>
            </div>
            <header className={styles.productsHeader}>
                <h2></h2>
                <div className={styles.headerBtnContainer}>
                    <button type="button" className={styles.addProductBtn}>Add Customer</button>
                </div>
            </header>
            <div className={styles.productsContent}>
                <form className={styles.productsContentForm}>
                    <div className={styles.productsContentMiddleLeft}>
                        <select name="id" id="id">
                            <option value="">ID</option>
                        </select>
                        <select name="location" id="location">
                            <option value="">Location</option>
                        </select>
                        <select name="sort" id="sort">
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
                                <th>Customer Name</th>
                                <th>id</th>
                                <th>Phone</th>
                                <th>Location</th>
                                <th>Order(s)</th>
                                <th>Total Spent</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody className={`${styles.orderTableBody} ${styles.productsTable}`}>
                            <tr>
                                <td>Chris Green</td>
                                <td>#287</td>
                                <td>09047589346</td>
                                <td>Lugbe, Abuja</td>
                                <td>354</td>
                                <td>{Number(1000000)}</td>
                                <td style={{color: 'green'}}>Active</td>
                            </tr>
                            <tr>
                                <td>Chris Green</td>
                                <td>#287</td>
                                <td>09047589346</td>
                                <td>Lugbe, Abuja</td>
                                <td>354</td>
                                <td>{Number(1000000)}</td>
                                <td style={{color: 'green'}}>Active</td>
                            </tr>
                            <tr>
                                <td>Chris Green</td>
                                <td>#287</td>
                                <td>09047589346</td>
                                <td>Lugbe, Abuja</td>
                                <td>354</td>
                                <td>{Number(1000000)}</td>
                                <td style={{color: 'green'}}>Active</td>
                            </tr>
                            <tr>
                                <td>Chris Green</td>
                                <td>#287</td>
                                <td>09047589346</td>
                                <td>Lugbe, Abuja</td>
                                <td>354</td>
                                <td>{Number(1000000)}</td>
                                <td style={{color: 'green'}}>Active</td>
                            </tr>
                            <tr>
                                <td>Chris Green</td>
                                <td>#287</td>
                                <td>09047589346</td>
                                <td>Lugbe, Abuja</td>
                                <td>354</td>
                                <td>{Number(1000000)}</td>
                                <td style={{color: 'green'}}>Active</td>
                            </tr>
                            <tr>
                                <td>Chris Green</td>
                                <td>#287</td>
                                <td>09047589346</td>
                                <td>Lugbe, Abuja</td>
                                <td>354</td>
                                <td>{Number(1000000)}</td>
                                <td style={{color: 'green'}}>Active</td>
                            </tr>
                            <tr>
                                <td>Chris Green</td>
                                <td>#287</td>
                                <td>09047589346</td>
                                <td>Lugbe, Abuja</td>
                                <td>354</td>
                                <td>{Number(1000000)}</td>
                                <td style={{color: 'green'}}>Active</td>
                            </tr>
                            <tr>
                                <td>Chris Green</td>
                                <td>#287</td>
                                <td>09047589346</td>
                                <td>Lugbe, Abuja</td>
                                <td>354</td>
                                <td>{Number(1000000)}</td>
                                <td style={{color: 'green'}}>Active</td>
                            </tr>
                            <tr>
                                <td>Chris Green</td>
                                <td>#287</td>
                                <td>09047589346</td>
                                <td>Lugbe, Abuja</td>
                                <td>354</td>
                                <td>{Number(1000000)}</td>
                                <td style={{color: 'green'}}>Active</td>
                            </tr>
                            <tr>
                                <td>Chris Green</td>
                                <td>#287</td>
                                <td>09047589346</td>
                                <td>Lugbe, Abuja</td>
                                <td>354</td>
                                <td>{Number(1000000)}</td>
                                <td style={{color: 'green'}}>Active</td>
                            </tr>
                            <tr>
                                <td>Chris Green</td>
                                <td>#287</td>
                                <td>09047589346</td>
                                <td>Lugbe, Abuja</td>
                                <td>354</td>
                                <td>{Number(1000000)}</td>
                                <td style={{color: 'green'}}>Active</td>
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
 
export default Buyers;