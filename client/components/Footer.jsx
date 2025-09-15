'use client';

import styles from "../app/css/footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const Footer = () => {

    const currentPath = usePathname();
    
    useEffect(() => {
        if (currentPath === '/login' || currentPath === '/signup' || currentPath === '/forget-password'
            || currentPath === '/otp' || currentPath === '/reset-password'
        ){
            let footer = document.querySelector(`.${styles.footer}`);
            
            footer.classList.add(styles.hide);
        }
    },[])

    return ( 
        <>
        <footer id="footer" className={styles.footer}>
            <div className={styles.footerTop}>
                <form className={styles.footerForm}>
                    <div className={styles.footerFormTop}>
                        <div className={styles.footerLogo}>
                            <Image src="/logo2.png" fill className={styles.logo} alt="logo" />
                        </div>
                        <p>Bringing the farm to you with ease</p>
                    </div>
                    <div className={styles.footerFormInputs}>
                        <input type="text" className={styles.footerInput} placeholder="Enter your email" />
                        <button type="submit">Subscribe</button>
                    </div>
                </form>
                <div className={styles.footerTopMiddle}>
                    <div className={styles.footerLinkContainer}>
                        <h2>MarketPlace</h2>
                        <Link href={"/"}>Sell on AhiaGlobal</Link>
                        <Link href={"/"}>Vendor Stores</Link>
                        <Link href={"/"}>Join as a Sales Partner</Link>
                    </div>
                    <div className={styles.footerLinkContainer}>
                        <h2>Company</h2>
                        <Link href={"/"}>About Us</Link>
                        <Link href={"/"}>Contact Us</Link>
                        <Link href={"/"}>Partnership</Link>
                    </div>
                    <div className={styles.footerLinkContainer}>
                        <h2>Customer Support</h2>
                        <Link href={"/"}>Return and refund policy</Link>
                        <Link href={"/"}>Shipping info</Link>
                        <Link href={"/"}>Report suspicious activity</Link>
                    </div>
                    <div className={styles.footerLinkContainer}>
                        <h2>Legal</h2>
                        <Link href={"/"}>Terms and Conditions</Link>
                        <Link href={"/"}>Privacy Policy</Link>
                        <Link href={"/"}>Cookies Policy</Link>
                    </div>
                </div>
                <div className={styles.footerTopLeft}>
                    <h2>Get in Touch</h2>
                    <p>support@ahiaglobal.com</p>
                    <p>+234 909 909 0394</p>
                    <div className={styles.footerSocialContainer}>
                        <h2>Connect with us</h2>
                        <div className={styles.footerSocial}>
                            <a href="/" target="_blank">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="/" target="_blank">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a href="/" target="_blank">
                                <i className="fa fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <div className={styles.footerBottomLeft}>
                    <p>© 2025 AhiaGlobal Limited. All rights reserved</p>
                </div>
                <div className={styles.footerBottomRight}>
                    <h2>We accept</h2>
                    <div className={styles.footerBottomImgs}>
                        <img src="/" alt="" />
                        <img src="/" alt="" />
                        <img src="/" alt="" />
                        <img src="/" alt="" />
                        <img src="/" alt="" />
                        <img src="/" alt="" />
                        <img src="/" alt="" />
                    </div>
                </div>
            </div>
        </footer>
        </>
     );
}
 
export default Footer;