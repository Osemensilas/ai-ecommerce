'use client';

import styles from '../../app/css/user.module.css';
import { usePathname, useSearchParams } from 'next/navigation';
import PersonalInformation from './components/PersonalInformation';
import PaymentMethod from './components/PaymentMethod';
import Security from './components/Security';

const UserProfile = () => {

    const pathName = usePathname();

    const personalClicked = () => {
        window.history.pushState({}, '', '/user');
    }

    const paymentClicked = () => {
        window.history.pushState({}, '', '/user/payment-method');
    }

    const securityClicked = () => {
        window.history.pushState({}, '', '/user/security');
    }

    return ( 
        <>
        <div className={styles.userProfile}>
            <div className={styles.userProfileLeft}>
                <button type="button" onClick={personalClicked} className={`${styles.userProfileNavBtn}
                ${pathName === "/user" ? styles.active : ""}
                `}>
                    <i className="fa fa-user"></i>
                    Personal Information
                </button>
                <button type="button" onClick={paymentClicked} className={`${styles.userProfileNavBtn}
                ${pathName === "/user/payment-method" ? styles.active : ""}
                `}>
                    <i className="fa fa-credit-card"></i>
                    Payment Method
                </button>
                <button type="button" onClick={securityClicked} className={`${styles.userProfileNavBtn}
                ${pathName === "/user/security" ? styles.active : ""}
                `}>
                    <i className="fa fa-user"></i>
                    Security
                </button>
            </div>
            <div className={styles.userProfileRight}>
                <div className={`${styles.userProfileRightContent}
                ${pathName === "/user" ? styles.active : ""}
                `}>
                    <PersonalInformation />
                </div>
                <div className={`${styles.userProfileRightContent}
                ${pathName === "/user/payment-method" ? styles.active : ""}
                `}>
                    <PaymentMethod />
                </div>
                <div className={`${styles.userProfileRightContent}
                ${pathName === "/user/security" ? styles.active : ""}
                `}>
                    <Security />
                </div>
            </div>
        </div>
        </>
     );
}
 
export default UserProfile;