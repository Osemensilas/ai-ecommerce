'use client';

import styles from '../../../app/css/dashboard.module.css';
import Image from 'next/image';
import { useState } from "react";

const PersonalInformation = () => {
    return ( 
        <>
        <div className={styles.settingLeftMainContainer}>
            <form onSubmit={(e) => e.preventDefault()} className={styles.settingPersonalForm}>
                <div className={styles.settingPersonalFormTop}>
                    <div className={styles.settingPersonalFormTopLeft}>
                        <div className={styles.settingPersonalFormImgContainer}>
                            <i className="fa-solid fa-camera"></i>
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
                        <label htmlFor="firstname">First Name:</label>
                        <input type="text" id="firstname" placeholder="Solo" />
                    </div>
                    <div className={styles.settingPersonalFormBottomContentDetail}>
                        <label htmlFor="lastname">Last Name:</label>
                        <input type="text" id="lastname" placeholder="Hi-Tech" />
                    </div>
                    <div className={styles.settingPersonalFormBottomContentDetail}>
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" placeholder="Solo" />
                    </div>
                    <div className={styles.settingPersonalFormBottomContentDetail}>
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" id="phone" placeholder="Solo" />
                    </div>
                </div>
                <div className={styles.settingPersonalFormBtnContainer}>
                    <button type="submit" className={styles.settingPersonalFormBtn}>Update Profile</button>
                </div>
            </form>
        </div>
        </>
     );
}
 
export default PersonalInformation;