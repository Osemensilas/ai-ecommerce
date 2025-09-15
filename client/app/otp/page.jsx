'use client';

import styles from '../css/login.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const OTP = () => {

    const [error, setError] = useState('Invalid email address');

    return ( 
        <>
        <section id="login">
            <div className={styles.signinTop}>
                <form onSubmit={(e) => e.preventDefault()} className={styles.resetForm}>
                    <div className={styles.formTop}>
                        <div className={styles.formLogoContainer}>
                            <Image src={"/logo3.png"} fill className={styles.logo} alt="logo" />
                        </div>
                        <h2>Ente OTP</h2>
                        <p>Please enter the 4 digit code sent to you</p>
                    </div>
                    <div className={styles.formMiddle}>
                        <div className={`${styles.formError} ${error ? styles.active : ""}`}>
                            {error}
                        </div>
                        <div className={styles.otpFormDetails}>
                            <input type="text" id="otp1" className={styles.otpdetail} placeholder="-" />
                            <input type="text" id="otp2" className={styles.otpdetail} placeholder="-" />
                            <input type="text" id="otp3" className={styles.otpdetail} placeholder="-" />
                            <input type="text" id="otp4" className={styles.otpdetail} placeholder="-" />
                        </div>
                        <p className={styles.timer}>0:43</p>
                        <div className={styles.otpDidt}>
                            Didn't get a code <button>send again</button>
                        </div>
                        <div className={styles.formSubmitBtnContainer}>
                            <button type="submit" className={styles.formSubmitBtn}>Enter</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
        <div className={styles.signinBottom}>
            <p>© 2025 AhiaGlogal Limited. All rights reserved</p>
        </div>
        </>
     );
}
 
export default OTP;