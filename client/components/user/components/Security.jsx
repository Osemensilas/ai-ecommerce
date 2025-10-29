'use client';

import styles from '../../../app/css/dashboard.module.css';
import Image from 'next/image';

const Security = () => {

    const seePassword = (e) => {

        const input = e.currentTarget.parentElement.children[1];
        const otherEye = e.currentTarget.parentElement.children[3];

        if (input.type === 'password') {
            input.type = 'text';
        } else {
            input.type = 'password';
        }

        e.currentTarget.classList.add("hide")
        otherEye.classList.remove('hide');
    }

    const hidePassword = (e) => {
        const input = e.currentTarget.parentElement.children[1];
        const otherEye = e.currentTarget.parentElement.children[2];

        if (input.type === 'password') {
            input.type = 'text';
        } else {
            input.type = 'password';
        }

        e.currentTarget.classList.add("hide");
        otherEye.classList.remove('hide');
    }

    return ( 
        <>
        <div className={styles.settingLeftMainContainer}>
            <form onSubmit={(e) => e.preventDefault()} className={styles.settingPersonalForm}>
                <div className={styles.settingPersonalFormTop}>
                    <div className={styles.settingPersonalFormTopLeft}>
                        <div className={styles.settingPersonalFormImgContainer}>
                            <Image src="/hair5.png" fill alt="user image" className={styles.settingsPersonalImg} />
                        </div>
                    </div>
                    <div className={styles.settingPersonalFormTopRight}>
                        <h2>Solo-HiTec</h2>
                        <div className={styles.settingPersonalRow}>
                            <div className={styles.settingPersonalRowCont}>
                                <h3>Seller</h3>
                                <p>w457e5989</p>
                            </div>
                            <i className="fa-solid fa-clone"></i>
                        </div>
                        <div className={styles.settingPersonalRow}>
                            <div className={styles.settingPersonalRowCont}>
                                <h3>solotechnology@gmail.com</h3>
                            </div>
                            <i className="fa-solid fa-clone"></i>
                        </div>
                        <div className={styles.settingPersonalRow}>
                            <div className={styles.settingPersonalRowCont}>
                                <h3>Lagos, Nigeria</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.settingPersonalFormBottom}>
                    <div className={styles.settingPersonalFormBottomContentDetail}>
                        <label htmlFor="current-password">Current Password:</label>
                        <input type="password" id="current-password" placeholder="*******" />
                        <i onClick={seePassword} className="fa fa-eye eye"></i>
                        <i onClick={hidePassword} className="fa fa-eye-slash hide"></i>
                    </div>
                    <div className={styles.settingPersonalFormBottomContentDetail}>
                        <label htmlFor="new-password">New Password:</label>
                        <input type="password" id="new-password" placeholder="*******" />
                        <i onClick={seePassword} className="fa fa-eye eye"></i>
                        <i onClick={hidePassword} className="fa fa-eye-slash hide"></i>
                    </div>
                    <div className={styles.settingPersonalFormBottomContentDetail}>
                        <label htmlFor="confirm-password">Confirm Password:</label>
                        <input type="password" id="confirm-password" placeholder="*******" />
                        <i onClick={seePassword} className="fa fa-eye eye"></i>
                        <i onClick={hidePassword} className="fa fa-eye-slash hide"></i>
                    </div>
                </div>
                <div className={styles.settingPersonalFormBtnContainer}>
                    <button type="submit" className={styles.settingPersonalFormBtn}>Update Password</button>
                </div>
            </form>
        </div>
        </>
     );
}
 
export default Security;