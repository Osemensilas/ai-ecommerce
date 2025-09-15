'use client';

import styles from "../app/css/header.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const Header = () => {

    const currentPath = usePathname();

    useEffect(() => {
        if (currentPath === '/login' || currentPath === '/signup' || currentPath === '/forget-password'
            || currentPath === '/otp' || currentPath === '/reset-password'
        ){
            let header = document.querySelector(`.${styles.header}`);
            
            header.classList.add(styles.hide);
        }
    },[])

    return ( 
        <>
        <header id="header" className={styles.header}>
            <div className={styles.headerTop}>
                <Link href={"/"} className="logoLink">
                    <Image src={"/logo3.png"} fill className={styles.logo} alt="logo" />
                </Link>
                <form className={styles.searchForm}>
                    <input type="text" className={styles.searchInput} placeholder="Search Product (e.g., Belts, Necklaces, Smart Tvs, ...)" />
                    <button><i className="fa fa-search"></i></button>
                </form>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <div className={styles.activeUser}>
                            <div className="">
                                <i className="fa fa-user"></i>
                                Solo-HiTech
                            </div>
                        </div>
                        <div className={styles.visitor}>

                        </div>
                    </li>
                    <li className={styles.navItem}>
                        <Link href={"/"} className={styles.shoppingCart}>
                            <div className={styles.shoppingCartImg}>
                                <i className="fa fa-shopping-cart"></i>
                                <p>1</p>
                            </div>
                            cart
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href={"/"} className={styles.helpLink}>
                            <i className="fa fa-question-circle"></i>
                            Help
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href={"/"} className={styles.cta}>Become a Vendor</Link>
                    </li>
                </ul>
            </div>
        </header>
        </>
     );
}
 
export default Header;
