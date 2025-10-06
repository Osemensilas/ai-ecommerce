'use client';

import styles from '../app/css/dashboard.module.css';
import Image from 'next/image';

const AdsOverview = () => {

    const cancelClicked = () => {
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
            <div className={styles.addPromotionContainer}>
                <form onSubmit={(e) => e.preventDefault()} className={styles.addPromotionForm}>
                    <header>
                        <h2>Create Ads</h2>
                    </header>
                    <div className={styles.addPromotionContent}>
                        <div className={styles.addPromotionContainerLeft}>
                            <div className={styles.addPromotionContainerDetail}>
                                <label htmlFor="headlins">Ads Headline:</label>
                                <div className={styles.promoDesInp}>
                                    <p>Black Friday</p>
                                </div>
                            </div>
                            <div className={styles.addPromotionContainerDetailDouble}>
                                <div className={styles.addPromotionContainerDetail}>
                                    <label htmlFor="startDate">Start Date:</label>
                                    <div className={styles.promoDesInp}>
                                        <p>29th Oct., 2025.</p>
                                    </div>
                                </div>
                                <div className={styles.addPromotionContainerDetail}>
                                    <label htmlFor="endDate">End Date:</label>
                                    <div className={styles.promoDesInp}>
                                        <p>19th Nov., 2025.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.addPromotionContainerDetailDouble}>
                                <div className={styles.addPromotionContainerDetail}>
                                    <label htmlFor="budget">Budget:</label>
                                    <div className={styles.promoDesInp}>
                                        <p>₦{Number(1239485).toLocaleString()}</p>
                                    </div>
                                </div>
                                <div className={styles.addPromotionContainerDetail}>
                                    
                                </div>
                            </div>
                        </div>
                        <div className={styles.addPromotionContainerRight}>
                            <div className={styles.addPromotionContainerDetail}>
                                <label htmlFor="redemption">Maximum Redemption:</label>
                                <div className={styles.promoDesInp}>
                                    <p>{Number(2).toLocaleString()}</p>
                                </div>
                            </div>
                            <div className={styles.addPromotionContainerDetail}>
                                <label htmlFor="users">Maximum Redemption Per User:</label>
                                <div className={styles.promoDesInp}>
                                    <p>{Number(2).toLocaleString()}</p>
                                </div>
                            </div>
                            <div className={styles.addPromotionContainerDetail}>
                                <label htmlFor="url">Targeted Url:</label>
                                <div className={styles.promoDesInp}>
                                    <p>http://localhost:3000/vendor/promotion/add-ads/ads-overview</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.addCustomerBtnContainer}>
                        <button type="button" onClick={cancelClicked} className={styles.cancelBtn}>Go Back</button>
                        <button type="submit" className={styles.addCustomerBtn}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
        </>
     );
}
 
export default AdsOverview;