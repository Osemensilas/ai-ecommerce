'use client';

import styles from '../../app/css/dashboard.module.css';
import Image from 'next/image';

const TransactionHistory = () => {

    const goBack = () => {
        window.history.pushState({}, '', '/vendor/wallet');
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
            <div className={styles.walletBack}>
                <button onClick={goBack}><i className="fa fa-arrow-left"></i> Back to Wallet</button>
            </div>
            <div className={styles.historyContainer}>
                <div className={styles.walletRightBottom}>
                    <header className={styles.walletRightBottomHeader}>
                        <h2>Transaction History</h2>
                    </header>
                    <div className={styles.walletRightBottomContent}>
                        <div className={styles.walletRightBottomContentCard}>
                            <div className={styles.walletRightBottomContentCardLeft}>
                                <i className="fa-solid fa-money-bill-wave"></i>
                                <div className={styles.walletRightBottomContentCardRight}>
                                    <h3>Deposit</h3>
                                    <p>Amount: 20,000</p>
                                </div>
                            </div>
                            <p>04 April, 2025</p>
                        </div>
                        <div className={styles.walletRightBottomContentCard}>
                            <div className={styles.walletRightBottomContentCardLeft}>
                                <i className="fa-solid fa-circle-arrow-up"></i>
                                <div className={styles.walletRightBottomContentCardRight}>
                                    <h3>Deposit</h3>
                                    <p>Amount: 20,000</p>
                                </div>
                            </div>
                            <p>04 April, 2025</p>
                        </div>
                        <div className={styles.walletRightBottomContentCard}>
                            <div className={styles.walletRightBottomContentCardLeft}>
                                <i className="fa-solid fa-money-bill-wave"></i>
                                <div className={styles.walletRightBottomContentCardRight}>
                                    <h3>Deposit</h3>
                                    <p>Amount: 20,000</p>
                                </div>
                            </div>
                            <p>04 April, 2025</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default TransactionHistory;