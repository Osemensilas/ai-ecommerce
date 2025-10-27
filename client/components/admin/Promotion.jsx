import styles from '../../app/css/dashboard.module.css';
import Image from 'next/image';

const Promotion = () => {

    const addPromotion = () => {
        window.history.pushState({}, '', '/admin/promotion/add-promotion');
    }

    const exportClicked = () => {
        const exportContainer = document.querySelector(`.${styles.adminExportFormContainer2}`);

        console.log(exportContainer);

        exportContainer.classList.add(styles.active);
    }

    const exportCancel = () => {
        const exportContainer = document.querySelector(`.${styles.adminExportFormContainer2}`);

        exportContainer.classList.remove(styles.active);
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
                </div>
            </header>
            <div className={`${styles.reports} ${styles.adminPromitionReports}`}>
                <div className={styles.reportsTop}>
                    <div className={styles.reportsTopRight}>
                        <header className={styles.reportsTopRightHeader}>
                            <h2>Promotion Summary</h2>
                            <div className={styles.reportsTopRightExports}>
                                <button type="button" onClick={exportClicked}><i className="fas fa-file-export"></i> Export</button>
                                <button><i className="fa-solid fa-arrows-rotate"></i> Refresh</button>
                            </div>
                        </header>
                        <div className={`${styles.reportsTopRightContent} ${styles.adminPeportsTopRightContent}`}>
                            <div className={`${styles.reportsTopRightCard} ${styles.cardBlue}`}>
                                <div className={styles.reportsTopRightCardTop}>
                                    <i className="fa fa-chart-line"></i>
                                </div>
                                <div className={styles.reportsTopRightCardMiddle}>
                                    <h2>₦{Number(1200000).toLocaleString()}</h2>
                                </div>
                                <div className={styles.reportsTopRightCardBottom}>
                                    <h3>Total Promotion Revenue</h3>
                                </div>
                            </div>
                            <div className={`${styles.reportsTopRightCard} ${styles.cardGreen}`}>
                                <div className={styles.reportsTopRightCardTop}>
                                    <i className="fa fa-percentage"></i>
                                </div>
                                <div className={styles.reportsTopRightCardMiddle}>
                                    <h2>64%</h2>
                                </div>
                                <div className={styles.reportsTopRightCardBottom}>
                                    <h3>Conversion Rate</h3>
                                </div>
                            </div>
                            <div className="">
                                
                            </div>
                        </div>
                    </div>
                    <div className={styles.reportsTopLeft}>
                        <header className={styles.reportsTopLeftHeader}>
                            <h3>Top Performing Categories</h3>
                        </header>
                        <div className={styles.reportsTopLeftContent}>
                            <div className={styles.reportsTopLeftContentCard}>
                                <div className={styles.reportsTopLeftContentCardTop}>
                                    <div className={styles.reportsTopLeftContentCardTopLeft}></div>
                                    <div className={styles.reportsTopLeftContentCardTopRight}>
                                        <div className={styles.reportsTopLeftContentCardTopCont}>
                                            <p>Women: </p>
                                            <p className={styles.orange}>65%</p>
                                        </div>
                                        <p>500 Units Sold</p>
                                    </div>
                                </div>
                                <div className={`${styles.reportsTopLeftContentCardBottom} ${styles.orangeLine}`}>
                                    <div className={styles.lineFillOrand} style={{width: `${65}%`}}></div>
                                </div>
                            </div>
                            <div className={styles.reportsTopLeftContentCard}>
                                <div className={styles.reportsTopLeftContentCardTop}>
                                    <div className={styles.reportsTopLeftContentCardTopLeft}></div>
                                    <div className={styles.reportsTopLeftContentCardTopRight}>
                                        <div className={styles.reportsTopLeftContentCardTopCont}>
                                            <p>Women: </p>
                                            <p className={styles.blue}>24%</p>
                                        </div>
                                        <p>500 Units Sold</p>
                                    </div>
                                </div>
                                <div className={`${styles.reportsTopLeftContentCardBottom} ${styles.blueLine}`}>
                                    <div className={styles.lineFillBlue} style={{width: `${24}%`}}></div>
                                </div>
                            </div>
                            <div className={styles.reportsTopLeftContentCard}>
                                <div className={styles.reportsTopLeftContentCardTop}>
                                    <div className={styles.reportsTopLeftContentCardTopLeft}></div>
                                    <div className={styles.reportsTopLeftContentCardTopRight}>
                                        <div className={styles.reportsTopLeftContentCardTopCont}>
                                            <p>Women: </p>
                                            <p className={styles.green}>12%</p>
                                        </div>
                                        <p>500 Units Sold</p>
                                    </div>
                                </div>
                                <div className={`${styles.reportsTopLeftContentCardBottom} ${styles.greenLine}`}>
                                    <div className={styles.lineFillGreen} style={{width: `${12}%`}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.productsContent}>
                <div className={styles.promotionContentTop}>
                    
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
            <div className={styles.adminExportFormContainer2}>
                <form className={styles.adminExportForm}>
                    <header className={styles.adminExportFormHeader}>
                        <h2>Export Products</h2>
                        <button type="button" onClick={exportCancel}>
                            <i className="fa fa-times"></i>
                        </button>
                    </header>
                    <div className={styles.adminExportFormContent}>
                        <div className={styles.adminExportFormContentTop}>
                            <h3>EXPORT</h3>
                            <div className={styles.adminExportFormContentTopDetails}>
                                <input type="checkbox" name="currentPage" id="currentPage" />
                                <label htmlFor="currentPage">Current Page</label>
                            </div>
                            <div className={styles.adminExportFormContentTopDetails}>
                                <input type="checkbox" name="allProduct" id="allProduct" />
                                <label htmlFor="allProduct">All Product</label>
                            </div>
                            <div className={styles.adminExportFormContentTopDetails}>
                                <input type="checkbox" name="selection" id="selection" />
                                <label htmlFor="selection">Selection (0 products selected)</label>
                            </div>
                        </div>
                        <div className={styles.adminExportFormContentTop}>
                            <h3>EXPORT AS</h3>
                            <div className={styles.adminExportFormContentTopDetails}>
                                <input type="checkbox" name="csv" id="csv" />
                                <label htmlFor="csv">CSV</label>
                            </div>
                            <div className={styles.adminExportFormContentTopDetails}>
                                <input type="checkbox" name="pdf" id="pdf" />
                                <label htmlFor="pdf">PDF</label>
                            </div>
                            <div className={styles.adminExportFormContentTopDetails}>
                                <input type="checkbox" name="plainText" id="plainText" />
                                <label htmlFor="plainText">Plain Text</label>
                            </div>
                        </div>
                    </div>
                    <div className={styles.adminExportFormBtnContainer}>
                        <button type="submit">Export</button>
                    </div>
                </form>
            </div>
        </div>
        </>
     );
}
 
export default Promotion;