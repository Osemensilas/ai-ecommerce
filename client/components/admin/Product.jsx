import Image from "next/image";
import styles from '../../app/css/dashboard.module.css';

const Products = () => {

    const exportClicked = () => {
        const exportContainer = document.querySelector(`.${styles.adminExportFormContainer}`);

        exportContainer.classList.add(styles.active);
    }

    const exportCancel = () => {
        const exportContainer = document.querySelector(`.${styles.adminExportFormContainer}`);

         exportContainer.classList.remove(styles.active);
    }

    const viewProduct = (e) => {
        const itemId = e.currentTarget.value;

        let url = '/admin/products/view-product?id=' + itemId;

        window.history.pushState({}, '', url);
    }

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
            <header className={styles.productsHeader}>
                <h2>Products</h2>
                <div className={styles.reportsTopRightExports}>
                    <button onClick={exportClicked}><i className="fas fa-file-export"></i> Export</button>
                    <button><i className="fa-solid fa-arrows-rotate"></i> Refresh</button>
                </div>
            </header>
            <div className={styles.productsContent}>
                <form className={styles.productsContentForm}>
                    <div className={styles.productsContentMiddleLeft}>
                        <select name="category" id="category">
                            <option value="category">Category</option>
                        </select>
                        <select name="stock" id="stock">
                            <option value="stock">Date</option>
                        </select>
                        <select name="sortName" id="sortName">
                            <option value="sortName">Sort by Name</option>
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
                                <th>Category</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className={`${styles.orderTableBody} ${styles.productsTable}`}>
                            <tr>
                                <td><input type="checkbox" name="indCheck" className="indCheck" title="individual check" /> </td>
                                <td className="styles.adminProductTd">
                                    <img src={"/men.png"} style={{height: '40px', width: '60px'}} alt="product image" />
                                    <p style={{fontSize: '15px'}}>Snickers</p>
                                </td>
                                <td>Men Shoe</td>
                                <td>25,00</td>
                                <td>1,000</td>
                                <td>Approved</td>
                                <td>
                                    <button value={"253647"} onClick={viewProduct} type="button">View</button>
                                    <button style={{color: 'green', borderBottom: 'none'}}>Approve</button>
                                    <button style={{color: 'red', borderBottom: 'none'}}>Reject</button>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="indCheck" className="indCheck" title="individual check" /> </td>
                                <td className="styles.adminProductTd">
                                    <img src={"/men.png"} style={{height: '40px', width: '60px'}} alt="product image" />
                                    <p style={{fontSize: '15px'}}>Snickers</p>
                                </td>
                                <td>Men Shoe</td>
                                <td>25,00</td>
                                <td>1,000</td>
                                <td>Approved</td>
                                <td>
                                    <button value={"6473mdiu8"} onClick={viewProduct} type="button">View</button>
                                    <button style={{color: 'green', borderBottom: 'none'}}>Approve</button>
                                    <button style={{color: 'red', borderBottom: 'none'}}>Reject</button>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="indCheck" className="indCheck" title="individual check" /> </td>
                                <td className="styles.adminProductTd">
                                    <img src={"/men.png"} style={{height: '40px', width: '60px'}} alt="product image" />
                                    <p style={{fontSize: '15px'}}>Snickers</p>
                                </td>
                                <td>Men Shoe</td>
                                <td>25,00</td>
                                <td>1,000</td>
                                <td>Approved</td>
                                <td>
                                    <button type="button">View</button>
                                    <button style={{color: 'green', borderBottom: 'none'}}>Approve</button>
                                    <button style={{color: 'red', borderBottom: 'none'}}>Reject</button>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="indCheck" className="indCheck" title="individual check" /> </td>
                                <td className="styles.adminProductTd">
                                    <img src={"/men.png"} style={{height: '40px', width: '60px'}} alt="product image" />
                                    <p style={{fontSize: '15px'}}>Snickers</p>
                                </td>
                                <td>Men Shoe</td>
                                <td>25,00</td>
                                <td>1,000</td>
                                <td>Approved</td>
                                <td>
                                    <button type="button">View</button>
                                    <button style={{color: 'green', borderBottom: 'none'}}>Approve</button>
                                    <button style={{color: 'red', borderBottom: 'none'}}>Reject</button>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="indCheck" className="indCheck" title="individual check" /> </td>
                                <td className="styles.adminProductTd">
                                    <img src={"/men.png"} style={{height: '40px', width: '60px'}} alt="product image" />
                                    <p style={{fontSize: '15px'}}>Snickers</p>
                                </td>
                                <td>Men Shoe</td>
                                <td>25,00</td>
                                <td>1,000</td>
                                <td>Approved</td>
                                <td>
                                    <button type="button">View</button>
                                    <button style={{color: 'green', borderBottom: 'none'}}>Approve</button>
                                    <button style={{color: 'red', borderBottom: 'none'}}>Reject</button>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="indCheck" className="indCheck" title="individual check" /> </td>
                                <td className="styles.adminProductTd">
                                    <img src={"/men.png"} style={{height: '40px', width: '60px'}} alt="product image" />
                                    <p style={{fontSize: '15px'}}>Snickers</p>
                                </td>
                                <td>Men Shoe</td>
                                <td>25,00</td>
                                <td>1,000</td>
                                <td>Approved</td>
                                <td>
                                    <button type="button">View</button>
                                    <button style={{color: 'green', borderBottom: 'none'}}>Approve</button>
                                    <button style={{color: 'red', borderBottom: 'none'}}>Reject</button>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="indCheck" className="indCheck" title="individual check" /> </td>
                                <td className="styles.adminProductTd">
                                    <img src={"/men.png"} style={{height: '40px', width: '60px'}} alt="product image" />
                                    <p style={{fontSize: '15px'}}>Snickers</p>
                                </td>
                                <td>Men Shoe</td>
                                <td>25,00</td>
                                <td>1,000</td>
                                <td>Approved</td>
                                <td>
                                    <button type="button">View</button>
                                    <button style={{color: 'green', borderBottom: 'none'}}>Approve</button>
                                    <button style={{color: 'red', borderBottom: 'none'}}>Reject</button>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="indCheck" className="indCheck" title="individual check" /> </td>
                                <td className="styles.adminProductTd">
                                    <img src={"/men.png"} style={{height: '40px', width: '60px'}} alt="product image" />
                                    <p style={{fontSize: '15px'}}>Snickers</p>
                                </td>
                                <td>Men Shoe</td>
                                <td>25,00</td>
                                <td>1,000</td>
                                <td>Approved</td>
                                <td>
                                    <button type="button">View</button>
                                    <button style={{color: 'green', borderBottom: 'none'}}>Approve</button>
                                    <button style={{color: 'red', borderBottom: 'none'}}>Reject</button>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="indCheck" className="indCheck" title="individual check" /> </td>
                                <td className="styles.adminProductTd">
                                    <img src={"/men.png"} style={{height: '40px', width: '60px'}} alt="product image" />
                                    <p style={{fontSize: '15px'}}>Snickers</p>
                                </td>
                                <td>Men Shoe</td>
                                <td>25,00</td>
                                <td>1,000</td>
                                <td>Approved</td>
                                <td>
                                    <button type="button">View</button>
                                    <button style={{color: 'green', borderBottom: 'none'}}>Approve</button>
                                    <button style={{color: 'red', borderBottom: 'none'}}>Reject</button>
                                </td>
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
            <div className={styles.adminExportFormContainer}>
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
 
export default Products;