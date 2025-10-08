import styles from '../../app/css/dashboard.module.css';

const Document = () => {

    const uploadClicked = () => {
        const afterFile = document.querySelector(`.${styles.settingDocumentAfter}`);

        afterFile.classList.add(styles.active);
    }

    const removeFile = () => {
        const afterFile = document.querySelector(`.${styles.settingDocumentAfter}`);

        afterFile.classList.remove(styles.active);
    }

    return ( 
        <>
        <div className={styles.settingLeftMainContainer}>
            <header className={styles.productsHeader}>
                <h2>Documents</h2>
                <button type="button" onClick={uploadClicked} className={styles.addProductBtn}><i className="fa fa-plus"></i> Upload File</button>
            </header>
            <div className={styles.settingLeftDocumentContainer}>
                <table className={styles.orderTable}>
                    <thead className={styles.orderTableHead}>
                        <tr>
                            <th><input type="checkbox" name="genCheck" id="genCheck" /> </th>
                            <th>File name</th>
                            <th>Deltails</th>
                            <th>Upload On</th>
                        </tr>
                    </thead>
                    <tbody className={`${styles.orderTableBody} ${styles.productsTable}`}>
                        <tr>
                            <td><input type="checkbox" name="indCheck" className="indCheck" title="individual check" /> </td>
                            <td><i className="fa fa-file-image"></i> image.png</td>
                            <td style={{width: 300}}><p style={{textAlign: 'start', fontSize: 14, paddingLeft: 10}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima excepturi recusandae</p></td>
                            <td>Nov 10, 2024</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="indCheck" className="indCheck" title="individual check" /> </td>
                            <td><i className="fa fa-file-image"></i>image.png</td>
                            <td style={{width: 300}}><p style={{textAlign: 'start', fontSize: 14, paddingLeft: 10}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima excepturi recusandae</p></td>
                            <td>Nov 10, 2024</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="indCheck" className="indCheck" title="individual check" /> </td>
                            <td><i className="fa fa-file-image"></i> image.png</td>
                            <td style={{width: 300}}><p style={{textAlign: 'start', fontSize: 14, paddingLeft: 10}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima excepturi recusandae</p></td>
                            <td>Nov 10, 2024</td>
                        </tr>
                    </tbody>
                </table>
            </div>
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
        <div className={styles.settingDocumentAfter}>
            <form onClick={removeFile} onSubmit={(e) => e.preventDefault()} className={styles.settingDocumentAfterForm}>
                <header>
                    <h2>File</h2>
                    <i className="fa fa-times"></i>
                </header>
                <div className={styles.settingDocumentDragContainer}>
                    <div className={styles.settingDocumentDrag}>
                        <i className="fa fa-cloud"></i>
                        <h4>Drag file here of click to select</h4>
                        <p>pdf, png, jpg, jpeg supported Up to 20MB</p>
                    </div>
                </div>
                <div className={styles.settingDocumentDragBtnContainer}>
                    <button onClick={removeFile} type="button">Cancel</button>
                    <button type="submit">Done</button>
                </div>
            </form>
        </div>
        </>
     );
}
 
export default Document;