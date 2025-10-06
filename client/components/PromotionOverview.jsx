'use client';

import styles from '../app/css/dashboard.module.css';
import Image from 'next/image';

const PromotionOverview = () => {

    const cancelClicked = () => {
        window.history.pushState({}, '', '/vendor/promotion/add-promotion');
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
                        <h2>Create Promotion</h2>
                    </header>
                    <div className={styles.addPromotionContent}>
                        <div className={styles.addPromotionContainerLeft}>
                            <div className={styles.addPromotionContainerDetail}>
                                <label htmlFor="promotionName">Promotion Name:</label>
                                <div className={styles.promoDesInp}>
                                    <p>Black Friday</p>
                                </div>
                            </div>
                            <div className={styles.addPromotionContainerDetail}>
                                <label htmlFor="promotionType">Promotion Type:</label>
                                <div className={styles.promoDesInp}>
                                    <p>Cashback</p>
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
                                    <label htmlFor="promotionCode">Promotion Code:</label>
                                    <div className={styles.promoDesInp}>
                                        <p>EFT1325</p>
                                    </div>
                                </div>
                                <div className={styles.addPromotionContainerDetail}>
                                    <label htmlFor="discountValue">Discount Value:</label>
                                    <div className={styles.promoDesInp}>
                                        <p>100</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.addPromotionContainerDetail}>
                                <label htmlFor="usageLimit">Useage Limit:</label>
                                <div className={styles.promoDesInp}>
                                    <p>500</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.addPromotionContainerRight}>
                            <div className={styles.addPromotionContainerDetail}>
                                <label htmlFor="productType">Product Type:</label>
                                <div className={styles.promoDesInp}>
                                    <p>Xiaomi Andriod Phone</p>
                                </div>
                            </div>
                            <div className={styles.addPromotionContainerDetail}>
                                <label htmlFor="productDiscription">Product Description:</label>
                                <div className={styles.promoDesText}>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit itaque, odio enim doloribus nihil aliquam assumenda possimus illum ea officiis? Voluptatibus corrupti maiores, perferendis veritatis quidem nulla dolores laudantium nihil.</p>
                                </div>
                            </div>
                            <div className={styles.addPromotionContainerDetail}>
                                <label htmlFor="productCategory">Product Category:</label>
                                <div className={styles.promoDesInp}>
                                    <p>Phones and Tablets</p>
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
 
export default PromotionOverview;