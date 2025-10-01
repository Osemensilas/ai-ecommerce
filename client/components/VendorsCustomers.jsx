'use client';

import styles from '../app/css/dashboard.module.css';
import Image from 'next/image';

const VendorCustomer = () => {

    const addCustomer = () => {
        window.history.pushState({}, '', '/vendor/customers/add-customer');
    }

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
                <h2>Customers</h2>
                <div className={styles.headerBtnContainer}>
                    <button type="button" className={styles.exportBtn}>Export</button>
                    <button type="button" onClick={addCustomer} className={styles.addProductBtn}><i className="fa fa-plus"></i> Add Customer</button>
                </div>
            </header>
            <div className={styles.productsContent}>
                <form className={styles.productsContentForm}>
                    <div className={styles.productsContentMiddleLeft}>
                        <select name="sort" id="sort">
                            <option value="">Sort by</option>
                            <option value="name">Name</option>
                            <option value="location">Location</option>
                            <option value="id">ID</option>
                            <option value="status">Status</option>
                        </select>
                        <select name="stock" id="stock">
                            <option value="">A → Z ⬍</option>
                            <option value="asc">A → Z 🔼</option>
                            <option value="desc">Z → A 🔽</option>
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
                                <th>Product</th>
                                <th>Price</th>
                                <th>Location</th>
                                <th>Category</th>
                                <th>Description</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody className={`${styles.orderTableBody} ${styles.productsTable}`}>
                            <tr>
                                <td><input type="checkbox" name="indCheck" className="indCheck" title="individual check" /> </td>
                                <td>Snickers</td>
                                <td>6,500</td>
                                <td>Lagos, NG</td>
                                <td>Men Shoe</td>
                                <td>Style for all events ...</td>
                                <td>Draft</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="indCheck" className="indCheck" title="individual check" /> </td>
                                <td>Snickers</td>
                                <td>6,500</td>
                                <td>Lagos, NG</td>
                                <td>Men Shoe</td>
                                <td>Style for all events ...</td>
                                <td>Draft</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="indCheck" className="indCheck" title="individual check" /> </td>
                                <td>Snickers</td>
                                <td>6,500</td>
                                <td>Lagos, NG</td>
                                <td>Men Shoe</td>
                                <td>Style for all events ...</td>
                                <td>Draft</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="indCheck" className="indCheck" title="individual check" /> </td>
                                <td>Snickers</td>
                                <td>6,500</td>
                                <td>Lagos, NG</td>
                                <td>Men Shoe</td>
                                <td>Style for all events ...</td>
                                <td>Draft</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="indCheck" className="indCheck" title="individual check" /> </td>
                                <td>Snickers</td>
                                <td>6,500</td>
                                <td>Lagos, NG</td>
                                <td>Men Shoe</td>
                                <td>Style for all events ...</td>
                                <td>Draft</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="indCheck" className="indCheck" title="individual check" /> </td>
                                <td>Snickers</td>
                                <td>6,500</td>
                                <td>Lagos, NG</td>
                                <td>Men Shoe</td>
                                <td>Style for all events ...</td>
                                <td>Draft</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="indCheck" className="indCheck" title="individual check" /> </td>
                                <td>Snickers</td>
                                <td>6,500</td>
                                <td>Lagos, NG</td>
                                <td>Men Shoe</td>
                                <td>Style for all events ...</td>
                                <td>Draft</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="indCheck" className="indCheck" title="individual check" /> </td>
                                <td>Snickers</td>
                                <td>6,500</td>
                                <td>Lagos, NG</td>
                                <td>Men Shoe</td>
                                <td>Style for all events ...</td>
                                <td>Draft</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="indCheck" className="indCheck" title="individual check" /> </td>
                                <td>Snickers</td>
                                <td>6,500</td>
                                <td>Lagos, NG</td>
                                <td>Men Shoe</td>
                                <td>Style for all events ...</td>
                                <td>Draft</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="indCheck" className="indCheck" title="individual check" /> </td>
                                <td>Snickers</td>
                                <td>6,500</td>
                                <td>Lagos, NG</td>
                                <td>Men Shoe</td>
                                <td>Style for all events ...</td>
                                <td>Draft</td>
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
 
export default VendorCustomer;