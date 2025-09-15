'use client';

import styles from '../css/login.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ForgetPassword = () => {

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
                        <h2>Forget password</h2>
                        <p>Enter email address and we will send you<br></br> instructions to resetyour password</p>
                    </div>
                    <div className={styles.formMiddle}>
                        <div className={`${styles.formError} ${error ? styles.active : ""}`}>
                            {error}
                        </div>
                        <div className={styles.formDetails}>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" className={styles.detail} placeholder="Enter your email" />
                        </div>
                        <div className={styles.formSubmitBtnContainer}>
                            <button type="submit" className={styles.formSubmitBtn}>Login</button>
                        </div>
                    </div>
                    <div className={styles.formNewUser}>
                        <Link href={"/"}> <i className="fa fa-arrow-left"></i> Back to Login</Link>
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
 
export default ForgetPassword;