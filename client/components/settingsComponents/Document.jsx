import styles from '../../app/css/dashboard.module.css';

const Document = () => {
    return ( 
        <>
        <div className={styles.settingLeftMainContainer}>
            <header className={styles.productsHeader}>
                <h2>Documents</h2>
                <button type="button" className={styles.addProductBtn}><i className="fa fa-plus"></i> Upload File</button>
            </header>
            <div className={styles.settingLeftDocumentContainer}>

            </div>
        </div>
        </>
     );
}
 
export default Document;