import styles from '../../../app/css/dashboard.module.css';

const PaymentMethod = () => {

    const addCardSetting = () => {
        
        const addCardForm = document.querySelector(`.${styles.addCardContainerSettings}`);

        addCardForm.classList.add(styles.active);
    }

    const removeCardForm = () => {
        const addCardForm = document.querySelector(`.${styles.addCardContainerSettings}`);

        addCardForm.classList.remove(styles.active);
    }
    
    return ( 
        <>
        <div className={styles.settingLeftMainContainer}>
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
            <div className={styles.settingPersonalFormBtnContainer}>
                <button onClick={addCardSetting} type="submit" className={styles.settingPersonalFormBtn}>Add New Card</button>
            </div>
            <div className={styles.addCardContainerSettings}>
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
                        <button type="button" className={styles.addCardFormBtn}>Save Card</button>
                    </div>
                </form>
            </div>
        </div>
        </>
     );
}
 
export default PaymentMethod;