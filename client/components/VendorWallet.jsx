'use client';

import styles from '../app/css/dashboard.module.css';
import Image from 'next/image';

const VendorWallet = () => {

    const viewHistory = () => {
        window.history.pushState({}, '', '/vendor/transaction-history');
    }

    const deposit = () => {
        window.history.pushState({}, '', '/vendor/deposit');
    }

    const withdraw = () => {
        window.history.pushState({}, '', '/vendor/withdraw');
    }

    const addCard = () => {
        const addCardForm = document.querySelector(`.${styles.addCardContainer}`);

        addCardForm.classList.add(styles.active);
    }

    const removeCardForm = () => {
        const addCardForm = document.querySelector(`.${styles.addCardContainer}`);

        addCardForm.classList.remove(styles.active);
    }

    const addBank = () => {
        const addBankForm = document.querySelector(`.${styles.addBankContainer}`);

        addBankForm.classList.add(styles.active);
    }

    const removeBankForm = () => {
        const addBankForm = document.querySelector(`.${styles.addBankContainer}`);

        addBankForm.classList.remove(styles.active);
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
            <div className={styles.wallet}>
                <div className={styles.walletLeft}>
                    <div className={styles.walletLeftHeader}>
                        <div className={styles.walletLeftHeaderContent}>
                            <div className={styles.walletLeftHeaderContentTop}>
                                <h3>Total Deposit</h3>
                                <h2>₦{Number(2334356).toLocaleString()}</h2>
                            </div>
                            <div className={styles.walletLeftHeaderDir}>
                                <i className="fa fa-arrow-down"></i>
                                <p>15%</p>
                            </div>
                        </div>
                        <div className={styles.walletLeftHeaderContent}>
                            <div className={`${styles.walletLeftHeaderContentTop} ${styles.walletUp}`}>
                                <h3>Total Spending</h3>
                                <h2>₦{Number(2334356).toLocaleString()}</h2>
                            </div>
                            <div className={`${styles.walletLeftHeaderDir} ${styles.walletBlue}`}>
                                <i className="fa fa-arrow-up"></i>
                                <p>25%</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.walletCardImgContainer}>
                        <div className={styles.walletCardImg}>

                        </div>
                    </div>
                    <div className={styles.walletCardDetails}>
                        <div className={styles.walletCardDetailsTop}>
                            <header className={styles.walletCardDetailsTopHeader}>
                                <h2>Card Details</h2>
                            </header>
                            <div className={styles.walletCardDetailsContent}>
                                <div className={styles.walletCardDetailsContentLeft}>
                                    <h2>Card Name:</h2>
                                    <h3>John Doe</h3>
                                </div>
                                <div className={styles.walletCardDetailsContentRight}>
                                    <h2>Card No.:</h2>
                                    <h3>23546**********</h3>
                                </div>
                            </div>
                            <div className={styles.walletCardDetailsContent}>
                                <div className={styles.walletCardDetailsContentLeft}>
                                    <h2>CVV:</h2>
                                    <h3>241</h3>
                                </div>
                                <div className={styles.walletCardDetailsContentRight}>
                                    <h2>Exp Date:</h2>
                                    <h3>08/28</h3>
                                </div>
                            </div>
                            <div className={styles.addWalletBtnContainer}>
                                <button onClick={addCard} className={styles.addWalletBtn}>Add New Card</button>
                            </div>
                        </div>
                        <div className={styles.walletCardDetailsBottom}>
                            <header className={styles.walletCardDetailsBottomHeader}>
                                <i className="fa fa-credit-card"></i>
                                <h2>Registered Card</h2>
                            </header>
                            <div className={styles.walletCardDetailsBottomContent}>
                                <table className={styles.orderTable}>
                                    <thead className={styles.orderTableHead}>
                                        <tr>
                                            <th></th>
                                            <th>Bank</th>
                                            <th>CVV</th>
                                            <th>Card Number</th>
                                            <th>EXP Date</th>
                                        </tr>
                                    </thead>
                                    <tbody className={`${styles.orderTableBody} ${styles.productsTable}`}>
                                        <tr>
                                            <td><input type="checkbox" name="indCheck" className="indCheck" title="individual check" /> </td>
                                            <td>Access</td>
                                            <td>345</td>
                                            <td>64789*********</td>
                                            <td>26/28</td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" name="indCheck" className="indCheck" title="individual check" /> </td>
                                            <td>Zenith</td>
                                            <td>840</td>
                                            <td>64789*********</td>
                                            <td>25/29</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.walletRight}>
                    <div className={styles.walletRightTop}>
                        <h4>Total Balance</h4>
                        <h2>₦{Number(356263748).toLocaleString()}</h2>
                        <div className={`${styles.walletLeftHeaderDir} ${styles.walletBlue} ${styles.walletTopLine}`}>
                            <i className="fa fa-arrow-up"></i>
                            <p>25%</p>
                        </div>
                        <div className={styles.walletRightTopBtnContainer}>
                            <button onClick={deposit} className={styles.walletRightTopBtn}><i className="fa-solid fa-money-bill-wave"></i> Deposit</button>
                            <button onClick={withdraw} className={styles.walletRightTopBtn}><i className="fa-solid fa-circle-arrow-up"></i> Withdraw</button>
                        </div>
                    </div>
                    <div className={styles.walletRightBottom}>
                        <header className={styles.walletRightBottomHeader}>
                            <h2>History</h2>
                            <button onClick={viewHistory}>View All</button>
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
                    <div className={styles.walletCardDetailsBottom}>
                        <header className={styles.walletCardDetailsBottomHeader}>
                            <i className="fa-solid fa-building-columns"></i>
                            <h2>Bank Details</h2>
                        </header>
                        <div className={styles.walletCardDetailsBottomContent}>
                            <table className={styles.orderTable}>
                                <thead className={styles.orderTableHead}>
                                    <tr>
                                        <th></th>
                                        <th>Bank</th>
                                        <th>Account Number</th>
                                        <th>Account Name</th>
                                    </tr>
                                </thead>
                                <tbody className={`${styles.orderTableBody} ${styles.productsTable}`}>
                                    <tr>
                                        <td><input type="checkbox" name="indCheck" className="indCheck" title="individual check" /> </td>
                                        <td>Access</td>
                                        <td>64789*********</td>
                                        <td>Solo Tech</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" name="indCheck" className="indCheck" title="individual check" /> </td>
                                        <td>Zenith</td>
                                        <td>64789*********</td>
                                        <td>Solo Tech</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className={styles.addWalletBtnContainer}>
                                <button onClick={addBank} className={styles.addWalletBtn}>Add New Bank</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.addCardContainer}>
                <form className={styles.addCardForm}>
                    <header className={styles.addCardHeader}>
                        <h2>Card Details</h2>
                        <i onClick={removeCardForm} className="fa fa-times"></i>
                    </header>
                    <div className={styles.addCardFormContent}>
                        <div className={styles.addCardFormDetail}>
                            <label htmlFor="cardNumber">Card Number:</label>
                            <input type="text" id="cardNumber" placeholder="1234 3546 3647 263" />
                        </div>
                        <div className={styles.addCardFormDetailDouble}>
                            <div className={styles.addCardFormDetail}>
                                <label htmlFor="cardNumber">Expiry Date:</label>
                                <input type="text" id="cardNumber" placeholder="08/26" />
                            </div>
                            <div className={styles.addCardFormDetail}>
                                <label htmlFor="cvv">CVV:</label>
                                <input type="text" id="cvv" placeholder="122" />
                            </div>
                        </div>
                        <div className={styles.addCardFormDetail}>
                            <label htmlFor="nameOnCard">Name:</label>
                            <input type="text" id="nameOnCard" placeholder="Name on Card" />
                        </div>
                    </div>
                    <div className={styles.addCardFormBtnContainer}>
                        <div className={styles.addCardFormBtn}>Save Card</div>
                    </div>
                </form>
            </div>
            <div className={styles.addBankContainer}>
                <form className={styles.addCardForm}>
                    <header className={styles.addCardHeader}>
                        <h2>Add Bank</h2>
                        <i onClick={removeBankForm} className="fa fa-times"></i>
                    </header>
                    <div className={styles.addCardFormContent}>
                        <div className={styles.addCardFormDetail}>
                            <label htmlFor="acctNumber">Account Number:</label>
                            <input type="text" id="acctNumber" placeholder="9053847294" />
                        </div>
                        <div className={styles.addCardFormDetail}>
                            <label htmlFor="bankName">Bank:</label>
                            <select name="bankName" id="bankName">
                                <option value="">--Select Bank--</option>
                                <option value="access">Access Bank</option>
                            </select>
                        </div>
                        <div className={styles.addCardFormDetail}>
                            <label htmlFor="acctName">Account Name:</label>
                            <input type="text" id="acctName" placeholder="Name" />
                        </div>
                    </div>
                    <div className={styles.addCardFormBtnContainer}>
                        <div className={styles.addCardFormBtn}>Save</div>
                    </div>
                </form>
            </div>
        </div>
        </>
     );
}
 
export default VendorWallet;