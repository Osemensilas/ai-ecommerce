'use client';

import styles from '../../app/css/dashboard.module.css';
import Image from 'next/image'; 

const Withdraw = () => {

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
                <header className={styles.depositMainHeader}>
                    <h2>Withdraw</h2>
                </header>
                <form onSubmit={(e) => e.preventDefault()} className={styles.depositForm}>
                    <div className={styles.depositFormTop}>
                        <label htmlFor="amount">Amount:</label>
                        <input type="text" />
                    </div>
                    <h3>Payment Option</h3>
                    <div className={styles.depositFormBottom}>
                        <div className={styles.depositMethod}>
                            <div className={styles.depositMethodLeft}>
                                <div className={`${styles.depositMethodLeftIcon} ${styles.active}`}></div>
                                <div className={styles.depositMethodLeftContent}>
                                    <h2>Access Bank</h2>
                                    <p>Solo Tech</p>
                                    <p>123473*****</p>
                                </div>
                            </div>
                            <div className={styles.depositMethodRight}>
                                
                            </div>
                        </div>
                        <div className={styles.depositMethod}>
                            <div className={styles.depositMethodLeft}>
                                <div className={`${styles.depositMethodLeftIcon}`}></div>
                                <div className={styles.depositMethodLeftContent}>
                                    <h2>Zenith Bank</h2>
                                    <p>Solo Tech</p>
                                    <p>263748*****</p>
                                </div>
                            </div>
                            <div className={styles.depositMethodRight}>
                                
                            </div>
                        </div>
                        <div className={styles.depositMethod}>
                            <div className={styles.depositMethodLeft}>
                                <div className={`${styles.depositMethodLeftIcon}`}></div>
                                <div className={styles.depositMethodLeftContent}>
                                    <h2>Opay</h2>
                                    <p>Solo Tech</p>
                                    <p>903948*****</p>
                                </div>
                            </div>
                            <div className={styles.depositMethodRight}>
                                
                            </div>
                        </div>
                    </div>
                    <div className={styles.depositFormBtnContainer}>
                        <button className={styles.depositFormBtn}>Proceed</button>
                    </div>
                </form>
            </div>
        </div>
        </>
     );
}
 
export default Withdraw;