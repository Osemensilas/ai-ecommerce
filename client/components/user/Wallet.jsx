import styles from '../../app/css/user.module.css';

const Wallet = () => {
    return ( 
        <>
        <div className={styles.userDashboardMain}>
            <header className={styles.userDashboardHeader}>
                <h2>Wallet</h2>
            </header>
            <div className={styles.userDashboardMainContent}>
                <div className={styles.userWallet}>
                    <div className={styles.userWalletTop}>
                        <p>My Balance</p>
                        <div className={styles.userWalletAmountContainer}>
                            <h2>Amount: ₦{Number(100000).toLocaleString()}</h2>
                        </div>
                        <button type="button" className={styles.userAddFundsBtn}>Add Funds</button>
                    </div>
                    <div className={styles.userWalletBottom}>
                        <button type="button">All Transaction <i className="fa fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Wallet;