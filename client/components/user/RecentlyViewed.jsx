import styles from '../../app/css/user.module.css';
import style from '../../app/css/product.module.css';
import Image from 'next/image';
import Link from 'next/link';

const RecentlyViewed = () => {
    return ( 
        <>
        <div className={styles.userDashboardMain}>
            <header className={styles.userDashboardHeader}>
                <h2>Recently Reviewed</h2>
            </header>
            <div className={styles.userDashboardMainContent}>
                <div className={styles.userRecentlyViewed}>
                    <div className={style.productCard}>
                        <div className={style.productCardTop}>
                            <Image src={"/hair2.png"} className={styles.productImg} alt="product Image" fill />
                        </div>
                        <div className={style.productCardBottom}>
                            <div className={style.productCartPriceContainer}>
                                <h2>₦{Number(145999).toLocaleString()}</h2>
                                <p>In Stock</p>
                            </div>
                            <div className={style.productCardName}>
                                <h2>Lavender</h2>
                            </div>
                            <div className={style.productCardReview}>
                                <div className={style.productCardReviewItem}>
                                    <div className={style.productCardStars}>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <p>7.0</p>
                                </div>
                                <Link href={"/"}><i className="fa fa-arrow-right"></i> Add</Link>
                            </div>
                        </div>
                    </div>
                    <div className={style.productCard}>
                        <div className={style.productCardTop}>
                            <Image src={"/hair2.png"} className={styles.productImg} alt="product Image" fill />
                        </div>
                        <div className={style.productCardBottom}>
                            <div className={style.productCartPriceContainer}>
                                <h2>₦{Number(145999).toLocaleString()}</h2>
                                <p>In Stock</p>
                            </div>
                            <div className={style.productCardName}>
                                <h2>Lavender</h2>
                            </div>
                            <div className={style.productCardReview}>
                                <div className={style.productCardReviewItem}>
                                    <div className={style.productCardStars}>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <p>7.0</p>
                                </div>
                                <Link href={"/"}><i className="fa fa-arrow-right"></i> Add</Link>
                            </div>
                        </div>
                    </div>
                    <div className={style.productCard}>
                        <div className={style.productCardTop}>
                            <Image src={"/hair2.png"} className={styles.productImg} alt="product Image" fill />
                        </div>
                        <div className={style.productCardBottom}>
                            <div className={style.productCartPriceContainer}>
                                <h2>₦{Number(145999).toLocaleString()}</h2>
                                <p>In Stock</p>
                            </div>
                            <div className={style.productCardName}>
                                <h2>Lavender</h2>
                            </div>
                            <div className={style.productCardReview}>
                                <div className={style.productCardReviewItem}>
                                    <div className={style.productCardStars}>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <p>7.0</p>
                                </div>
                                <Link href={"/"}><i className="fa fa-arrow-right"></i> Add</Link>
                            </div>
                        </div>
                    </div>
                    <div className={style.productCard}>
                        <div className={style.productCardTop}>
                            <Image src={"/hair2.png"} className={styles.productImg} alt="product Image" fill />
                        </div>
                        <div className={style.productCardBottom}>
                            <div className={style.productCartPriceContainer}>
                                <h2>₦{Number(145999).toLocaleString()}</h2>
                                <p>In Stock</p>
                            </div>
                            <div className={style.productCardName}>
                                <h2>Lavender</h2>
                            </div>
                            <div className={style.productCardReview}>
                                <div className={style.productCardReviewItem}>
                                    <div className={style.productCardStars}>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <p>7.0</p>
                                </div>
                                <Link href={"/"}><i className="fa fa-arrow-right"></i> Add</Link>
                            </div>
                        </div>
                    </div>
                    <div className={style.productCard}>
                        <div className={style.productCardTop}>
                            <Image src={"/hair2.png"} className={styles.productImg} alt="product Image" fill />
                        </div>
                        <div className={style.productCardBottom}>
                            <div className={style.productCartPriceContainer}>
                                <h2>₦{Number(145999).toLocaleString()}</h2>
                                <p>In Stock</p>
                            </div>
                            <div className={style.productCardName}>
                                <h2>Lavender</h2>
                            </div>
                            <div className={style.productCardReview}>
                                <div className={style.productCardReviewItem}>
                                    <div className={style.productCardStars}>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <p>7.0</p>
                                </div>
                                <Link href={"/"}><i className="fa fa-arrow-right"></i> Add</Link>
                            </div>
                        </div>
                    </div>
                    <div className={style.productCard}>
                        <div className={style.productCardTop}>
                            <Image src={"/hair2.png"} className={styles.productImg} alt="product Image" fill />
                        </div>
                        <div className={style.productCardBottom}>
                            <div className={style.productCartPriceContainer}>
                                <h2>₦{Number(145999).toLocaleString()}</h2>
                                <p>In Stock</p>
                            </div>
                            <div className={style.productCardName}>
                                <h2>Lavender</h2>
                            </div>
                            <div className={style.productCardReview}>
                                <div className={style.productCardReviewItem}>
                                    <div className={style.productCardStars}>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <p>7.0</p>
                                </div>
                                <Link href={"/"}><i className="fa fa-arrow-right"></i> Add</Link>
                            </div>
                        </div>
                    </div>
                    <div className={style.productCard}>
                        <div className={style.productCardTop}>
                            <Image src={"/hair2.png"} className={styles.productImg} alt="product Image" fill />
                        </div>
                        <div className={style.productCardBottom}>
                            <div className={style.productCartPriceContainer}>
                                <h2>₦{Number(145999).toLocaleString()}</h2>
                                <p>In Stock</p>
                            </div>
                            <div className={style.productCardName}>
                                <h2>Lavender</h2>
                            </div>
                            <div className={style.productCardReview}>
                                <div className={style.productCardReviewItem}>
                                    <div className={style.productCardStars}>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <p>7.0</p>
                                </div>
                                <Link href={"/"}><i className="fa fa-arrow-right"></i> Add</Link>
                            </div>
                        </div>
                    </div>
                    <div className={style.productCard}>
                        <div className={style.productCardTop}>
                            <Image src={"/hair2.png"} className={styles.productImg} alt="product Image" fill />
                        </div>
                        <div className={style.productCardBottom}>
                            <div className={style.productCartPriceContainer}>
                                <h2>₦{Number(145999).toLocaleString()}</h2>
                                <p>In Stock</p>
                            </div>
                            <div className={style.productCardName}>
                                <h2>Lavender</h2>
                            </div>
                            <div className={style.productCardReview}>
                                <div className={style.productCardReviewItem}>
                                    <div className={style.productCardStars}>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <p>7.0</p>
                                </div>
                                <Link href={"/"}><i className="fa fa-arrow-right"></i> Add</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default RecentlyViewed;