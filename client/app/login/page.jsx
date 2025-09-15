'use client';

import styles from '../css/login.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Login = () => {

    const [error, setError] = useState('Invalid email address');
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => setShowPassword(prev => !prev);

    return ( 
        <>
        <section id="login">
            <div className={styles.signinTop}>
                <form onSubmit={(e) => e.preventDefault()} className={styles.signinForm}>
                    <div className={styles.formTop}>
                        <div className={styles.formLogoContainer}>
                            <Image src={"/logo3.png"} fill className={styles.logo} alt="logo" />
                        </div>
                        <h2>Welcome to AhiaGlogal</h2>
                        <p>Type your email address or phone number to log in or create an AhiaGlogal account</p>
                    </div>
                    <div className={styles.formMiddle}>
                        <div className={`${styles.formError} ${error ? styles.active : ""}`}>
                            {error}
                        </div>
                        <div className={styles.formDetails}>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" className={styles.detail} placeholder="Enter your email" />
                        </div>
                        <div className={styles.formDetails}>
                            <label htmlFor="password">Password</label>
                            <input type={showPassword ? "text" : "password"}  id="password" className={styles.detail} placeholder="Enter your password" />
                            <button type="button" onClick={togglePassword} className={styles.eyeBtn}>
                                <i className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                            </button>
                        </div>
                        <div className={styles.forget}>
                            <Link href="/">Forget Password?</Link>
                        </div>
                        <div className={styles.formSubmitBtnContainer}>
                            <button type="submit" className={styles.formSubmitBtn}>Login</button>
                        </div>
                    </div>
                    <div className={styles.formBottom}>
                        <p>or</p>
                        <div className={styles.formSubmitBtnContainerThirdParty}>
                            <button type="submit" className={styles.formGoogleBtn}>
                                <img src="/google_13170545.png" alt="" />
                                Continue with Google
                            </button>
                        </div>
                        <div className={styles.formSubmitBtnContainerThirdParty}>
                            <button type="submit" className={styles.formAppleBtn}>
                                <img src="/mac-os-logo_2235.png" alt="" />
                                Continue with Apple
                            </button>
                        </div>
                        <div className={styles.formNewUser}>
                            Are you new? <Link href={"/"}>Create Account</Link>
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
 
export default Login;