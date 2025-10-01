'use client';

import styles from '../app/css/dashboard.module.css';
import Image from 'next/image';

const VendorAddCustomer = () => {

    const cancelClicked = () => {
        window.history.pushState({}, '', '/vendor/customers');
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
            <div className={styles.addCustomerContainer}>
                <form onSubmit={(e) => e.preventDefault()} className={styles.addCustomerForm}>
                    <header>
                        <h2>Add Customer</h2>
                    </header>
                    <div className={styles.addCustomerFormContent}>
                        <h3>Basic Details</h3>
                        <div className={styles.addCustomerFormContentDetail}>
                            <div className={styles.addCustomerFormContentDetailLeft}>
                                <label htmlFor="firstname">First Name</label>
                                <input type="text" id="firstname" placeholder="First name" />
                            </div>
                            <div className={styles.addCustomerFormContentDetailRight}>
                                <label htmlFor="lastname">Last Name</label>
                                <input type="text" id="lastname" placeholder="Last name" />
                            </div>
                        </div>
                        <div className={`${styles.addCustomerFormContentDetail} ${styles.single}`}>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" placeholder="Email" />
                        </div>
                        <div className={`${styles.addCustomerFormContentDetail} ${styles.single}`}>
                            <label htmlFor="phone">Phone Number</label>
                            <label htmlFor="code" hidden></label>
                            <div className={styles.addCustomerFormContentDetailPhone}>
                                <div className={styles.addCustomerFormContentDetailPhoneRight}>
                                    <select name="code" id="code">
                                        <option value="+234">🇳🇬 +234</option>
                                    </select>
                                </div>
                                <div className={styles.addCustomerFormContentDetailPhoneLeft}>
                                    <input type="text" id="phone" placeholder="Phone" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.addCustomerFormContent}>
                        <h3>Shipping & Delivery</h3>
                        <div className={`${styles.addCustomerFormContentDetail} ${styles.single}`}>
                            <label htmlFor="county">Country/Region</label>
                            <select name="country" id="country">
                                <option value="nigeria">Nigeria</option>
                            </select>
                        </div>
                        <div className={styles.addCustomerFormContentDetail}>
                            <div className={styles.addCustomerFormContentDetailLeft}>
                                <label htmlFor="citt">City</label>
                                <select name="city" id="city">
                                    <option value="">Select</option>
                                </select>
                            </div>
                            <div className={styles.addCustomerFormContentDetailRight}>
                                <label htmlFor="state">State</label>
                                <select name="state" id="state">
                                    <option value="">Select</option>
                                </select>
                            </div>
                        </div>
                        <div className={`${styles.addCustomerFormContentDetail} ${styles.single}`}>
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" placeholder="Address" />
                        </div>
                    </div>
                    <div className={styles.addCustomerBtnContainer}>
                        <button type="button" onClick={cancelClicked} className={styles.cancelBtn}>Cancel</button>
                        <button type="submit" className={styles.addCustomerBtn}>Save Customer</button>
                    </div>
                </form>
            </div>
        </div>
        </>
     );
}
 
export default VendorAddCustomer;