'use client';

import styles from '../../../app/css/dashboard.module.css';
import Image from 'next/image';

const AddPromotion = () => {

    const cancelClicked = () => {
        window.history.pushState({}, '', '/admin/promotion');
    }

    const nextClicked = () => {
        window.history.pushState({}, '', '/admin/promotion/add-promotion/promotion-overview');
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
                                <input type="text" id="promotionName" />
                            </div>
                            <div className={styles.addPromotionContainerDetail}>
                                <label htmlFor="promotionType">Promotion Type:</label>
                                <select name="promotionType" id="promotionType">
                                    <option value=""></option>
                                </select>
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
                                    <label htmlFor="promotionCode">Promotion Code:</label>
                                    <input type="text" id="promotionCode" />
                                </div>
                                <div className={styles.addPromotionContainerDetail}>
                                    <label htmlFor="discountValue">Discount Value:</label>
                                    <input type="text" id="discountValue" />
                                </div>
                            </div>
                            <div className={styles.addPromotionContainerDetail}>
                                <label htmlFor="usageLimit">Useage Limit:</label>
                                <input type="text" id="usageLimit" />
                            </div>
                        </div>
                        <div className={styles.addPromotionContainerRight}>
                            <div className={styles.addPromotionContainerDetail}>
                                <label htmlFor="productType">Product Type:</label>
                                <input type="text" id="productType" />
                            </div>
                            <div className={styles.addPromotionContainerDetail}>
                                <label htmlFor="productDiscription">Product Description:</label>
                                <textarea type="text" id="productDescription" name="productDescription"></textarea>
                            </div>
                            <div className={styles.addPromotionContainerDetail}>
                                <label htmlFor="productCategory">Product Category:</label>
                                <select name="productCategory" id="productCategory">
                                    <option value=""></option>
                                </select>
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
 
export default AddPromotion;