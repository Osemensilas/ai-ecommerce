import styles from '../../app/css/dashboard.module.css';
import Image from 'next/image';

const PersonalIfo = () => {
    return ( 
        <>
        <div className={styles.settingLeftMainContainer}>
            <div className={styles.settingPersonalForm}>
                <div className={styles.settingPersonalFormTop}>
                    <div className={styles.settingPersonalFormTopLeft}>
                        <div className={styles.settingPersonalFormImgContainer}>
                            <Image src="/hair5.png" fill alt="user image" className={styles.settingsPersonalImg} />
                        </div>
                    </div>
                    <div className={styles.settingPersonalFormTopRight}>
                        <h2>Solo-HiTec</h2>
                        <div className={styles.settingPersonalRow}>
                            <div className={styles.settingPersonalRowCont}>
                                <h3>Seller</h3>
                                <p>w457e5989</p>
                            </div>
                            <i className="fa-solid fa-clone"></i>
                        </div>
                        <div className={styles.settingPersonalRow}>
                            <div className={styles.settingPersonalRowCont}>
                                <h3>solotechnology@gmail.com</h3>
                            </div>
                            <i className="fa-solid fa-clone"></i>
                        </div>
                        <div className={styles.settingPersonalRow}>
                            <div className={styles.settingPersonalRowCont}>
                                <h3>Lagos, Nigeria</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.settingPersonalFormBottom}>

                </div>
            </div>
        </div>
        </>
     );
}
 
export default PersonalIfo;