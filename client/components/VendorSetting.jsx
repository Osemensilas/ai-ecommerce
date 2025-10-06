import styles from '../app/css/dashboard.module.css';
import PaymentMethod from './settingsComponents/PaymentMethod';
import PersonalIfo from './settingsComponents/PersonalInfo';
import SettingsNav from './settingsComponents/SettingsNav';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import Security from './settingsComponents/Security';
import Document from './settingsComponents/Document';

const VendorSetting = () => {

    const searchParams = useSearchParams();

    const operation = searchParams.get("operation");

    return ( 
        <>
        <div className={styles.mainVendorDashboard}>
            <div className={styles.productsTop}>
                <div className={styles.productsTopFirst}>
                    <button type="button" className={styles.productsTopFirstBtn}><i className="fa fa-bell"></i></button>
                    <div className={styles.productsTopImageContainer}>
                        <Image src="/hair5.png" alt="user image" fill className={styles.userImage} />
                    </div>
                </div>
            </div>
            <div className={styles.settingsContainer}>
                <div className={styles.settingsContainerLeft}>
                    <SettingsNav />
                </div>
                <div className={styles.settingsContainerRight}>
                    <div className={`${styles.settingsContainerRightDetail}
                    ${operation === "personal-information" ? styles.active : ""}
                    `}>
                        <PersonalIfo />
                    </div>
                    <div className={`${styles.settingsContainerRightDetail}
                    ${operation === "payment-method" ? styles.active : ""}
                    `}>
                        <PaymentMethod />
                    </div>
                    <div className={`${styles.settingsContainerRightDetail}
                    ${operation === "security" ? styles.active : ""}
                    `}>
                        <Security />
                    </div>
                    <div className={`${styles.settingsContainerRightDetail}
                    ${operation === "document" ? styles.active : ""}
                    `}>
                        <Document />
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default VendorSetting;