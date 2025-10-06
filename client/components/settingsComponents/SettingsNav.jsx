import styles from '../../app/css/dashboard.module.css';
import { useSearchParams } from 'next/navigation';

const SettingsNav = () => {

    const searchParams = useSearchParams();
    
    const operation = searchParams.get("operation");

    const personal = () => {
        window.history.pushState({}, '', '/vendor/setting?operation=personal-information');
    }

    const payment = () => {
        window.history.pushState({}, '', '/vendor/setting?operation=payment-method');
    }

    const security = () => {
        window.history.pushState({}, '', '/vendor/setting?operation=security');
    }

    const documentation = () => {
        window.history.pushState({}, '', '/vendor/setting?operation=document');
    }

    return ( 
        <>
        <div className={styles.settingsNav}>
            <div className={styles.settingsNavBtnContainer}>
                <button type="button" onClick={personal} className={`${styles.settingsNavBtn}
                ${operation === "personal-information" ? styles.active : ""}
                `}>
                    <i className="fa fa-user"></i> Personal information
                </button>
                <button type="button" onClick={payment} className={`${styles.settingsNavBtn}
                ${operation === "payment-method" ? styles.active : ""}
                `}>
                    <i className="fa-solid fa-wallet"></i> Payment Method
                </button>
                <button type="button" onClick={security} className={`${styles.settingsNavBtn}
                ${operation === "security" ? styles.active : ""}
                `}>
                    <i className="fa-solid fa-lock"></i> Security
                </button>
                <button type="button" onClick={documentation} className={`${styles.settingsNavBtn}
                ${operation === "document" ? styles.active : ""}
                `}>
                    <i className="fa-solid fa-file-contract"></i> Document
                </button>
            </div>
        </div>
        </>
     );
}
 
export default SettingsNav;