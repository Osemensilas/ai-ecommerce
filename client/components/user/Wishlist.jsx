import styles from '../../app/css/user.module.css';
import Image from 'next/image';

const WishList = () => {
    return ( 
        <>
        <div className={styles.userDashboardMain}>
            <header className={styles.userDashboardHeader}>
                <h2>Wishlist</h2>
            </header>
            <div className={styles.userDashboardMainContent}>
                <div className={styles.userWishlistContainer}>
                    <div className={styles.userWishlistCard}>
                        <div className={styles.userWishlistCardImgContainer}>
                            <Image src={"/hair3.png"} fill alt="wishlist image" className={styles.userWishImg} />
                        </div>
                        <div className={styles.userWishlistCardDetails}>
                            <div className={styles.userWishlistCardDetailsTop}>
                                <h2>Hp laptop 500CB ROM 8GB RAM</h2>
                                <h3>Variation: 8GB RAM, 125GB ROM</h3>
                                <h4>₦{Number(124000).toLocaleString()}</h4>
                            </div>
                            <div className={styles.userWishlistCardDetailsBottom}>
                                <button type="button" className={styles.userWishlistRemoveBtn}>Remove</button>
                                <button type="button" className={styles.userWishlistAddBtn}><i className="fa fa-plus"></i> Add</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.userWishlistCard}>
                        <div className={styles.userWishlistCardImgContainer}>
                            <Image src={"/hair3.png"} fill alt="wishlist image" className={styles.userWishImg} />
                        </div>
                        <div className={styles.userWishlistCardDetails}>
                            <div className={styles.userWishlistCardDetailsTop}>
                                <h2>Hp laptop 500CB ROM 8GB RAM</h2>
                                <h3>Variation: 8GB RAM, 125GB ROM</h3>
                                <h4>₦{Number(124000).toLocaleString()}</h4>
                            </div>
                            <div className={styles.userWishlistCardDetailsBottom}>
                                <button type="button" className={styles.userWishlistRemoveBtn}>Remove</button>
                                <button type="button" className={styles.userWishlistAddBtn}><i className="fa fa-plus"></i> Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default WishList;