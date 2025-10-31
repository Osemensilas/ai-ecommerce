import styles from '../../app/css/user.module.css';

const Address = () => {
    return ( 
        <>
        <div className={styles.userDashboardMain}>
            <header className={styles.userDashboardHeader}>
                <h2>Saved Addresses(2)</h2>
            </header>
            <div className={styles.userDashboardMainContent}>
                <div className={styles.userAddressContainer}>
                    <div className={styles.userAddressCard}>
                        <div className={styles.userAddressCardHeader}>
                            <h2>Primary Address</h2>
                            <div className={styles.userAddressCardBtnContainer}>
                                <button type="button"><i className="fa fa-edit"></i> Edit</button>
                            </div>
                        </div>
                        <div className={styles.userAddressCardContainer}>
                            <div className={styles.userAddressCardDetail}>
                                <i className="fa fa-map"></i>
                                <p>4th Avenue, Gwarimpa, Abuja, FCT.</p>
                            </div>
                            <div className={styles.userAddressCardDetail}>
                                <i className="fa fa-phone"></i>
                                <p>+23490 5403 954</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.userAddressCard}>
                        <div className={styles.userAddressCardHeader}>
                            <h2>Other Address</h2>
                        </div>
                        <div className={styles.userOtherAddressCardContainer}>
                            <div className={styles.userAddressCardDetail}>
                                <i className="fa fa-map"></i>
                                <p>4th Avenue, Gwarimpa, Abuja, FCT.</p>
                            </div>
                            <div className={styles.userAddressCardDetail}>
                                <i className="fa fa-phone"></i>
                                <p>+23490 5403 954</p>
                            </div>
                            <div className={styles.userAddressCardOtherOp}>
                                <div className=""></div>
                                <div className={styles.userAddressCardBtnContainer}>
                                    <button type="button"><i className="fa fa-edit"></i> Edit</button>
                                    <button type="button"><i className="fa fa-delete"></i> Delete</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.userOtherAddressCardContainer}>
                            <div className={styles.userAddressCardDetail}>
                                <i className="fa fa-map"></i>
                                <p>4th Avenue, Gwarimpa, Abuja, FCT.</p>
                            </div>
                            <div className={styles.userAddressCardDetail}>
                                <i className="fa fa-phone"></i>
                                <p>+23490 5403 954</p>
                            </div>
                            <div className={styles.userAddressCardOtherOp}>
                                <div className=""></div>
                                <div className={styles.userAddressCardBtnContainer}>
                                    <button type="button"><i className="fa fa-edit"></i> Edit</button>
                                    <button type="button"><i className="fa fa-delete"></i> Delete</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.userAddAddressCardHeader}>
                            <h2></h2>
                            <div className={styles.userAddressCardBtnContainer}>
                                <button type="button"><i className="fa fa-edit"></i> Add New</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Address;