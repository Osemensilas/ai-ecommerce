import styles from '../../app/css/dashboard.module.css';
import Image from 'next/image';

const VendorPromotion = () => {

    const addPromotion = () => {
        window.history.pushState({}, '', '/vendor/promotion/add-promotion');
    }

    const addAds = () => {
        window.history.pushState({}, '', '/vendor/promotion/add-ads');
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
            </div>
            <header className={styles.productsHeader}>
                <h2>Promotion & Ads</h2>
                <div className={styles.headerBtnContainer}>
                    <button type="button" onClick={addPromotion} className={styles.addProductBtn}><i className="fa fa-plus"></i> New Promotion</button>
                    <button type="button" onClick={addAds} className={`${styles.addProductBtn} ${styles.addBtn}`}><i className="fa fa-plus"></i> New Ads</button>
                </div>
            </header>
            <div className={styles.productsContent}>
                <div className={styles.promotionContentTop}>
                    <div className={styles.promotionContentTopLeft}>
                
                    </div>
                    <div className={styles.promotionContentTopRight}>
                        <h3>Performance Matrics</h3>
                        <div className={`${styles.reportsBottomRightContent} ${styles.supportNewerBottom}`}>
                            <table className={styles.orderTable}>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className={`${styles.orderTableBody}`}>
                                    <tr>
                                        <td className={styles.fisrtTd}>Promotion Name:</td>
                                        <td className={styles.lastTd}>Black Friday</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.fisrtTd}>Total Redemption:</td>
                                        <td className={styles.lastTd}>{Number(150).toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.fisrtTd}>Total Sale Generated:</td>
                                        <td className={styles.lastTd}>₦{Number(74638).toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.fisrtTd}>Customer Engagement Rate:</td>
                                        <td className={styles.lastTd}>{Number(60).toLocaleString()}%</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.fisrtTd}>Return on Investment:</td>
                                        <td className={styles.lastTd}>{Number(30).toLocaleString()}%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className={styles.promotionContentBottom}>
                    <div className={styles.promotionProductsContent}>
                        <form className={styles.productsContentForm}>
                            <div className={styles.productsContentMiddleLeft}>
                                <select name="customer" id="customer">
                                    <option value="">From</option>
                                </select>
                                <select name="status" id="status">
                                    <option value="">To</option>
                                </select>
                                <select name="today" id="today">
                                    <option value="">Percentage</option>
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
                                        <th>Promotion Name</th>
                                        <th>Code</th>
                                        <th>Discount Type</th>
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                        <th>Performance Matrics</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody className={`${styles.orderTableBody} ${styles.productsTable}`}>
                                    <tr>
                                        <td>Black Friday</td>
                                        <td>BF2023</td>
                                        <td>Percentage</td>
                                        <td>01 Nov., 2025</td>
                                        <td>30 Nov., 2025</td>
                                        <td>Usage: 150, Total<br></br>Discount: ₦{Number(500000).toLocaleString()}</td>
                                        <td><span className={`${styles.status} ${styles.delivered}`}>Active</span></td>
                                        <td><button>Edit</button></td>
                                    </tr>
                                    <tr>
                                        <td>Black Friday</td>
                                        <td>BF2023</td>
                                        <td>Percentage</td>
                                        <td>01 Nov., 2025</td>
                                        <td>30 Nov., 2025</td>
                                        <td>Usage: 150, Total<br></br>Discount: ₦{Number(500000).toLocaleString()}</td>
                                        <td><span className={`${styles.status} ${styles.delivered}`}>Active</span></td>
                                        <td><button>Edit</button></td>
                                    </tr>
                                    <tr>
                                        <td>Black Friday</td>
                                        <td>BF2023</td>
                                        <td>Percentage</td>
                                        <td>01 Nov., 2025</td>
                                        <td>30 Nov., 2025</td>
                                        <td>Usage: 150, Total<br></br>Discount: ₦{Number(500000).toLocaleString()}</td>
                                        <td><span className={`${styles.status} ${styles.delivered}`}>Active</span></td>
                                        <td><button>Edit</button></td>
                                    </tr>
                                    <tr>
                                        <td>Black Friday</td>
                                        <td>BF2023</td>
                                        <td>Percentage</td>
                                        <td>01 Nov., 2025</td>
                                        <td>30 Nov., 2025</td>
                                        <td>Usage: 150, Total<br></br>Discount: ₦{Number(500000).toLocaleString()}</td>
                                        <td><span className={`${styles.status} ${styles.delivered}`}>Active</span></td>
                                        <td><button>Edit</button></td>
                                    </tr>
                                    <tr>
                                        <td>Black Friday</td>
                                        <td>BF2023</td>
                                        <td>Percentage</td>
                                        <td>01 Nov., 2025</td>
                                        <td>30 Nov., 2025</td>
                                        <td>Usage: 150, Total<br></br>Discount: ₦{Number(500000).toLocaleString()}</td>
                                        <td><span className={`${styles.status} ${styles.delivered}`}>Active</span></td>
                                        <td><button>Edit</button></td>
                                    </tr>
                                    <tr>
                                        <td>Black Friday</td>
                                        <td>BF2023</td>
                                        <td>Percentage</td>
                                        <td>01 Nov., 2025</td>
                                        <td>30 Nov., 2025</td>
                                        <td>Usage: 150, Total<br></br>Discount: ₦{Number(500000).toLocaleString()}</td>
                                        <td><span className={`${styles.status} ${styles.delivered}`}>Active</span></td>
                                        <td><button>Edit</button></td>
                                    </tr>
                                    <tr>
                                        <td>Black Friday</td>
                                        <td>BF2023</td>
                                        <td>Percentage</td>
                                        <td>01 Nov., 2025</td>
                                        <td>30 Nov., 2025</td>
                                        <td>Usage: 150, Total<br></br>Discount: ₦{Number(500000).toLocaleString()}</td>
                                        <td><span className={`${styles.status} ${styles.delivered}`}>Active</span></td>
                                        <td><button>Edit</button></td>
                                    </tr>
                                    <tr>
                                        <td>Black Friday</td>
                                        <td>BF2023</td>
                                        <td>Percentage</td>
                                        <td>01 Nov., 2025</td>
                                        <td>30 Nov., 2025</td>
                                        <td>Usage: 150, Total<br></br>Discount: ₦{Number(500000).toLocaleString()}</td>
                                        <td><span className={`${styles.status} ${styles.delivered}`}>Active</span></td>
                                        <td><button>Edit</button></td>
                                    </tr>
                                    <tr>
                                        <td>Black Friday</td>
                                        <td>BF2023</td>
                                        <td>Percentage</td>
                                        <td>01 Nov., 2025</td>
                                        <td>30 Nov., 2025</td>
                                        <td>Usage: 150, Total<br></br>Discount: ₦{Number(500000).toLocaleString()}</td>
                                        <td><span className={`${styles.status} ${styles.cancelled}`}>Inactive</span></td>
                                        <td><button>Edit</button></td>
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
            </div>
        </div>
        </>
     );
}
 
export default VendorPromotion;