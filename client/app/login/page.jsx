'use client';

import styles from '../css/login.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import axios from 'axios';

const Login = () => {

    const router = useRouter();

    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        'email': '',
        'password': '',
    })

    const togglePassword = () => setShowPassword(prev => !prev);

    const handleChanged = (e) => {
        const {name, value} = e.target;

        setFormData({...formData, [name]: value});
    }

    const formSubmitted = async () => {
        let emailVal = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (formData.email === '' || formData.password === ''){
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
        
        try{
            let url = "https://server-api-0yug.onrender.com/api/auth/login";

            const response = await axios.post(url, formData, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true,
            })
            console.log(response.data);
        }catch(error){
            console.log("Error in registration: ", error);
        }
    }

    return ( 
        <>
        <section id="login">
            <div className={styles.signinTop}>
                <form onSubmit={(e) => e.preventDefault()} className={styles.signinForm}>
                    <div className={styles.formTop}>
                        <div className={styles.formLogoContainer}>
                            <Image src={"/logo.jpg"} fill className={styles.logo} alt="logo"   />
                        </div>
                        <h2>Welcome to AhiaGlogal</h2>
                        <p>Type your email address or phone number to log in or create an AhiaGlogal account</p>
                    </div>
                    <div className={styles.onpage}>
                        <div className={styles.formMiddle}>
                            <div className={`${styles.formError} ${error ? styles.active : ""}`}>
                                {error}
                            </div>
                            <div className={styles.formDetails}>
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" value={formData.email} onChange={handleChanged} id="email" className={styles.detail} placeholder="Enter your email" />
                            </div>
                            <div className={styles.formDetails}>
                                <label htmlFor="password">Password</label>
                                <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChanged}  id="password" className={styles.detail} placeholder="Enter your password" />
                                <button type="button" onClick={togglePassword} className={styles.eyeBtn}>
                                    <i className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                                </button>
                            </div>
                            <div className={styles.formSubmitBtnContainer}>
                                <button type="submit" onClick={formSubmitted} className={styles.formSubmitBtn}>Login</button>
                            </div>
                            <div className={styles.linksContainer}>
                                <div className={styles.formNewUser}>
                                    Are you new? <Link href={"/signup"}>Create Account</Link>
                                </div>
                                <div className={styles.forget}>
                                    <Link href="/forget-password">Forget Password?</Link>
                                </div>
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