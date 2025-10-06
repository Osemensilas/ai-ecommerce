'use client';

import styles from '../app/css/dashboard.module.css';
import Image from 'next/image';

const CreateAds = () => {

    const cancelClicked = () => {
        window.history.pushState({}, '', '/vendor/promotion');
    }

    const nextClicked = () => {
        window.history.pushState({}, '', '/vendor/promotion/add-ads/ads-overview');
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
            <div className={styles.addPromotionContainer}>
                <form onSubmit={(e) => e.preventDefault()} className={styles.addPromotionForm}>
                    <header>
                        <h2>Create Ads</h2>
                    </header>
                    <div className={styles.addPromotionContent}>
                        <div className={styles.addPromotionContainerLeft}>
                            <div className={styles.addPromotionContainerDetail}>
                                <label htmlFor="headlins">Ads Headline:</label>
                                <input type="text" id="headline" />
                            </div>
                            <div className={styles.addPromotionContainerDetailDouble}>
                                <div className={styles.addPromotionContainerDetail}>
                                    <label htmlFor="startDate">Start Date:</label>
                                    <input type="date" id="startDate" />
                                </div>
                                <div className={styles.addPromotionContainerDetail}>
                                    <label htmlFor="endDate">End Date:</label>
                                    <input type="date" id="endDate" />
                                </div>
                            </div>
                            <div className={styles.addPromotionContainerDetailDouble}>
                                <div className={styles.addPromotionContainerDetail}>
                                    <label htmlFor="budget">Budget:</label>
                                    <input type="text" id="budget" />
                                </div>
                                <div className={styles.addPromotionContainerDetail}>
                                    
                                </div>
                            </div>
                        </div>
                        <div className={styles.addPromotionContainerRight}>
                            <div className={styles.addPromotionContainerDetail}>
                                <label htmlFor="redemption">Maximum Redemption:</label>
                                <input type="text" id="redemption" />
                            </div>
                            <div className={styles.addPromotionContainerDetail}>
                                <label htmlFor="users">Maximum Redemption Per User:</label>
                                <input type="text" id="users" />
                            </div>
                            <div className={styles.addPromotionContainerDetail}>
                                <label htmlFor="url">Targeted Url:</label>
                                <input type="text" id="url" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.addCustomerBtnContainer}>
                        <button type="button" onClick={cancelClicked} className={styles.cancelBtn}>Cancel</button>
                        <button type="submit" onClick={nextClicked} className={styles.addCustomerBtn}>Next</button>
                    </div>
                </form>
            </div>
        </div>
        </>
     );
}
 
export default CreateAds;