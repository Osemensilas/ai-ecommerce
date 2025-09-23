import styles from '../app/css/product.module.css';
import Image from 'next/image';
import Link from 'next/link';

const RecentlyViewed = () => {
    return ( 
        <>
        <div className="recentlyViewedContainer">
            <div className={styles.sigleCategory}>
                <header className={styles.recentCategoriesHeader}>
                    <h2>Recently Viewed</h2>
                </header>
                <div className={styles.categoryContent}>
                    <div className={styles.ccContainer}>
                        <div className={styles.productCard}>
                            <div className={styles.productCardTop}>
                                <Image src={"/"} className={styles.productImg} alt="product Image" fill />
                            </div>
                            <div className={styles.productCardBottom}>
                                <div className={styles.productCartPriceContainer}>
                                    <h2>₦{Number(145999).toLocaleString()}</h2>
                                    <p>In Stock</p>
                                </div>
                                <div className={styles.productCardName}>
                                    <h2>Lavender</h2>
                                </div>
                                <div className={styles.productCardReview}>
                                    <div className={styles.productCardReviewItem}>
                                        <div className={styles.productCardStars}>
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
                        <div className={styles.productCard}>
                            <div className={styles.productCardTop}>
                                <Image src={"/"} className={styles.productImg} alt="product Image" fill />
                            </div>
                            <div className={styles.productCardBottom}>
                                <div className={styles.productCartPriceContainer}>
                                    <h2>₦{Number(145999).toLocaleString()}</h2>
                                    <p>In Stock</p>
                                </div>
                                <div className={styles.productCardName}>
                                    <h2>Lavender</h2>
                                </div>
                                <div className={styles.productCardReview}>
                                    <div className={styles.productCardReviewItem}>
                                        <div className={styles.productCardStars}>
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
                        <div className={styles.productCard}>
                            <div className={styles.productCardTop}>
                                <Image src={"/"} className={styles.productImg} alt="product Image" fill />
                            </div>
                            <div className={styles.productCardBottom}>
                                <div className={styles.productCartPriceContainer}>
                                    <h2>₦{Number(145999).toLocaleString()}</h2>
                                    <p>In Stock</p>
                                </div>
                                <div className={styles.productCardName}>
                                    <h2>Lavender</h2>
                                </div>
                                <div className={styles.productCardReview}>
                                    <div className={styles.productCardReviewItem}>
                                        <div className={styles.productCardStars}>
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
                        <div className={styles.productCard}>
                            <div className={styles.productCardTop}>
                                <Image src={"/"} className={styles.productImg} alt="product Image" fill />
                            </div>
                            <div className={styles.productCardBottom}>
                                <div className={styles.productCartPriceContainer}>
                                    <h2>₦{Number(145999).toLocaleString()}</h2>
                                    <p>In Stock</p>
                                </div>
                                <div className={styles.productCardName}>
                                    <h2>Lavender</h2>
                                </div>
                                <div className={styles.productCardReview}>
                                    <div className={styles.productCardReviewItem}>
                                        <div className={styles.productCardStars}>
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
                        <div className={styles.productCard}>
                            <div className={styles.productCardTop}>
                                <Image src={"/"} className={styles.productImg} alt="product Image" fill />
                            </div>
                            <div className={styles.productCardBottom}>
                                <div className={styles.productCartPriceContainer}>
                                    <h2>₦{Number(145999).toLocaleString()}</h2>
                                    <p>In Stock</p>
                                </div>
                                <div className={styles.productCardName}>
                                    <h2>Lavender</h2>
                                </div>
                                <div className={styles.productCardReview}>
                                    <div className={styles.productCardReviewItem}>
                                        <div className={styles.productCardStars}>
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
        </div>
        </>
     );
}
 
export default RecentlyViewed;