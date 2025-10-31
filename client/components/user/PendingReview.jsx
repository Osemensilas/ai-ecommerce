import styles from '../../app/css/user.module.css';
import Image from 'next/image';

const PendingReview = () => {
    return ( 
        <>
        <div className={styles.userDashboardMain}>
            <header className={styles.userDashboardHeader}>
                <h2>Pending Reviews</h2>
            </header>
            <div className={styles.userDashboardMainContent}>
                <div className={styles.userOrderCard}>
                    <div className={styles.userOrderCardBottom}>
                        <div className={styles.userOrderCardBottomLeft}>
                            <div className={styles.userOrderCardImgContainer}>
                                <Image src={"/hair1.png"} fill className={styles.userOrderCardImg} alt="product image" />
                            </div>
                            <div className={styles.userOrderCardDesContainer}>
                                <h2>22' Human Hair</h2>
                                <p style={{marginBottom: '5px'}}>Order ID: #905706</p>
                                <p>Purchased Feb - 25</p>
                            </div>
                        </div>
                        <div className={styles.userOrderCardBottomRight}>
                            <button type="button" className={styles.userOrderCardBtnAction}>Review Item</button>
                        </div>
                    </div>
                </div>
                <div className={styles.userOrderCard}>
                    <div className={styles.userOrderCardBottom}>
                        <div className={styles.userOrderCardBottomLeft}>
                            <div className={styles.userOrderCardImgContainer}>
                                <Image src={"/hair1.png"} fill className={styles.userOrderCardImg} alt="product image" />
                            </div>
                            <div className={styles.userOrderCardDesContainer}>
                                <h2>22' Human Hair</h2>
                                <p style={{marginBottom: '5px'}}>Order ID: #905706</p>
                                <p>Purchased Feb - 25</p>
                            </div>
                        </div>
                        <div className={styles.userOrderCardBottomRight}>
                            <button type="button" className={styles.userOrderCardBtnAction}>Review Item</button>
                        </div>
                    </div>
                </div>
                <div className={styles.userOrderCard}>
                    <div className={styles.userOrderCardBottom}>
                        <div className={styles.userOrderCardBottomLeft}>
                            <div className={styles.userOrderCardImgContainer}>
                                <Image src={"/hair1.png"} fill className={styles.userOrderCardImg} alt="product image" />
                            </div>
                            <div className={styles.userOrderCardDesContainer}>
                                <h2>22' Human Hair</h2>
                                <p style={{marginBottom: '5px'}}>Order ID: #905706</p>
                                <p>Purchased Feb - 25</p>
                            </div>
                        </div>
                        <div className={styles.userOrderCardBottomRight}>
                            <button type="button" className={styles.userOrderCardBtnAction}>Review Item</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default PendingReview;