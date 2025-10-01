import styles from '../app/css/dashboard.module.css';
import Image from 'next/image';

const VendorAddCustomer = () => {
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
            <div className={styles.addCustomerContainer}>
                <form className={styles.addCustomerForm}>
                    <header>
                        <h2>Add Customer</h2>
                    </header>
                    <div className={styles.addCustomerFormContent}>
                        <h3>Basic Details</h3>
                        <div className={styles.addCustomerFormContentDetail}>
                            <div className={styles.addCustomerFormContentDetailLeft}>
                                <label htmlFor="firstname">First Name</label>
                                <input type="text" id="firstname" />
                            </div>
                            <div className={styles.addCustomerFormContentDetailRight}>
                                <label htmlFor="lastname">Last Name</label>
                                <input type="text" id="lastname" />
                            </div>
                        </div>
                        <div className={styles.addCustomerFormContentDetail}>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" />
                        </div>
                        <div className={styles.addCustomerFormContentDetail}>
                            <label htmlFor="phone">Phone Number</label>
                            <label htmlFor="code" hidden></label>
                            <div className={styles.addCustomerFormContentDetailPhone}>
                                <div className={styles.addCustomerFormContentDetailPhoneRight}>
                                    <input type="text" id="code" />
                                </div>
                                <div className={styles.addCustomerFormContentDetailPhoneLeft}>
                                    <input type="text" id="phone" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.addCustomerFormContent}>

                    </div>
                </form>
            </div>
        </div>
        </>
     );
}
 
export default VendorAddCustomer;