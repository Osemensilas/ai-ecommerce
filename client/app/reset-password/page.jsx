'use client';

import styles from '../css/login.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ResetPassword = () => {

    const [error, setError] = useState('Invalid email address');
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const togglePassword1 = () => setShowPassword1(prev => !prev);
    const togglePassword2 = () => setShowPassword2(prev => !prev);


    return ( 
        <>
        <section id="login">
            <div className={styles.signinTop}>
                <form onSubmit={(e) => e.preventDefault()} className={styles.signinForm}>
                    <div className={styles.formTop}>
                        <div className={styles.formLogoContainer}>
                            <Image src={"/logo3.png"} fill className={styles.logo} alt="logo" />
                        </div>
                        <h2>Reset Password</h2>
                        <p>Enter a new password for your account</p>
                        <p>solo****@gmail.com</p>
                    </div>
                    <div className={styles.formMiddle}>
                        <div className={`${styles.formError} ${error ? styles.active : ""}`}>
                            {error}
                        </div>
                        <div className={styles.formDetails}>
                            <label htmlFor="password">Password</label>
                            <input type={showPassword1 ? "text" : "password"}  id="password" className={styles.detail} placeholder="Enter your password" />
                            <button type="button" onClick={togglePassword1} className={styles.eyeBtn}>
                                <i className={`fa ${showPassword1 ? "fa-eye-slash" : "fa-eye"}`}></i>
                            </button>
                        </div>
                        <div className={styles.formDetails}>
                            <label htmlFor="password2">Confirm Password</label>
                            <input type={showPassword2 ? "text" : "password"} id="password2" className={styles.detail} placeholder="Enter your password" />
                            <button type="button" onClick={togglePassword2} className={styles.eyeBtn}>
                                <i className={`fa ${showPassword2 ? "fa-eye-slash" : "fa-eye"}`}></i>
                            </button>
                        </div>
                        <div className={styles.formSubmitBtnContainer}>
                            <button type="submit" className={styles.formSubmitBtn}>Login</button>
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
 
export default ResetPassword;