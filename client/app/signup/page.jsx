'use client';

import styles from '../css/login.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";

const Signup = () => {

    const router = useRouter();

    const [error, setError] = useState('');
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [formData, setFormData] = useState({
        'email': '',
        'password': '',
        'password2': '',
    })

    const togglePassword1 = () => setShowPassword1(prev => !prev);
    const togglePassword2 = () => setShowPassword2(prev => !prev);

    const handleChanged = (e) => {
        const {name, value} = e.target;

        setFormData({...formData, [name]: value});
    }

    const formSubmitted = () => {
        let emailVal = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (formData.email === '' || formData.password === '' || formData.password2 === ''){
            setError("All field required");
            return;
        }else{
            setError('');
        }

        if (!emailVal.test(formData.email)){
            setError("Invalid email address");
            return
        }else{
            setError('');
        }

        if (formData.password !== formData.password2){
            setError("Passwords do not match");
            return
        }else{
            setError('');
        }
        router.push('/');
    }

    return ( 
        <>
        <section id="login">
            <div className={styles.signinTop}>
                <form onSubmit={(e) => e.preventDefault()} className={styles.signinForm}>
                    <div className={styles.formTop}>
                        <div className={styles.formLogoContainer}>
                            <Image src={"/logo3.png"} fill className={styles.logo} alt="logo" />
                        </div>
                        <h2>Create Account</h2>
                    </div>
                    <div className={styles.onpage}>
                    <div className={styles.formMiddle}>
                        <div className={`${styles.formError} ${error ? styles.active : ""}`}>
                            {error}
                        </div>
                        <div className={styles.formDetails}>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" value={formData.email} onChange={handleChanged} className={styles.detail} placeholder="Enter your email" />
                        </div>
                        <div className={styles.formDetails}>
                            <label htmlFor="password">Password</label>
                            <input type={showPassword1 ? "text" : "password"}  id="password" name="password" value={formData.password} onChange={handleChanged} className={styles.detail} placeholder="Enter your password" />
                            <button type="button" onClick={togglePassword1} className={styles.eyeBtn}>
                                <i className={`fa ${showPassword1 ? "fa-eye-slash" : "fa-eye"}`}></i>
                            </button>
                        </div>
                        <div className={styles.formDetails}>
                            <label htmlFor="password2">Confirm Password</label>
                            <input type={showPassword2 ? "text" : "password"} id="password2" name="password2" value={formData.password2} onChange={handleChanged} className={styles.detail} placeholder="Enter your password" />
                            <button type="button" onClick={togglePassword2} className={styles.eyeBtn}>
                                <i className={`fa ${showPassword2 ? "fa-eye-slash" : "fa-eye"}`}></i>
                            </button>
                        </div>
                        <div className={styles.formSubmitBtnContainer}>
                            <button type="submit" onClick={formSubmitted} className={styles.formSubmitBtn}>Login</button>
                        </div>
                    </div>
                    <p>or</p>
                    <div className={styles.formBottom}>
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
                            Already have an account? <Link href={"/login"}>Sign In</Link>
                        </div>
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
 
export default Signup;