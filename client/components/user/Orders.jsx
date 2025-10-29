import styles from '../../app/css/user.module.css';
import Image from 'next/image';

const Orders = () => {
    return ( 
        <>
        <div className={styles.userDashboardMain}>
            <header className={styles.userDashboardHeader}>
                <h2>Orders</h2>
            </header>
            <div className={styles.userDashboardMainContent}>
                <div className={styles.userOrderNav}>
                    <button type="button" className={styles.userOrderNavBtn}>Ongoing</button>
                    <button type="button" className={styles.userOrderNavBtn}>Cancelled</button>
                </div>
                <div className={styles.userOrderCard}>
                    <div className={styles.userOrderCardTop}>
                        <p>Jan 18 - Oct 14</p>
                    </div>
                    <div className={styles.userOrderCardBottom}>
                        <div className={styles.userOrderCardBottomLeft}>
                            <div className={styles.userOrderCardImgContainer}>
                                <Image src={"/hair1.png"} fill className={styles.userOrderCardImg} />
                            </div>
                            <div className={styles.userOrderCardDesContainer}>
                                <h3>Order Confirmed</h3>
                                <h2>22' Human Hair</h2>
                                <p>Purchased Feb - 25</p>
                            </div>
                        </div>
                        <div className={styles.userOrderCardBottomRight}>
                            <button type="button" className={styles.userOrderCardBtnAction}>Track Order</button>
                            <button type="button" className={styles.userOrderCardBtnAction}>. . .</button>
                        </div>
                    </div>
                </div>
                <div className={styles.userOrderCard}>
                    <div className={styles.userOrderCardTop}>
                        <p>Jan 18 - Oct 14</p>
                    </div>
                    <div className={styles.userOrderCardBottom}>
                        <div className={styles.userOrderCardBottomLeft}>
                            <div className={styles.userOrderCardImgContainer}>
                                <Image src={"/hair1.png"} fill className={styles.userOrderCardImg} />
                            </div>
                            <div className={styles.userOrderCardDesContainer}>
                                <h3>Order Confirmed</h3>
                                <h2>22' Human Hair</h2>
                                <p>Purchased Feb - 25</p>
                            </div>
                        </div>
                        <div className={styles.userOrderCardBottomRight}>
                            <button type="button" className={styles.userOrderCardBtnAction}>Track Order</button>
                            <button type="button" className={styles.userOrderCardBtnAction}>. . .</button>
                        </div>
                    </div>
                </div>
                <div className={styles.userOrderCard}>
                    <div className={styles.userOrderCardTop}>
                        <p>Jan 18 - Oct 14</p>
                    </div>
                    <div className={styles.userOrderCardBottom}>
                        <div className={styles.userOrderCardBottomLeft}>
                            <div className={styles.userOrderCardImgContainer}>
                                <Image src={"/hair1.png"} fill className={styles.userOrderCardImg} />
                            </div>
                            <div className={styles.userOrderCardDesContainer}>
                                <h3>Order Confirmed</h3>
                                <h2>22' Human Hair</h2>
                                <p>Purchased Feb - 25</p>
                            </div>
                        </div>
                        <div className={styles.userOrderCardBottomRight}>
                            <button type="button" className={styles.userOrderCardBtnAction}>Track Order</button>
                            <button type="button" className={styles.userOrderCardBtnAction}>. . .</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Orders;