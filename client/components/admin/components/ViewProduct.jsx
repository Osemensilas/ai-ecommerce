import styles from '../../../app/css/dashboard.module.css';
import Image from 'next/image';

const ViewProduct = () => {
    return ( 
        <>
        <div className={styles.mainVendorDashboard}>
            <div className={styles.dashbordRightTop}>
                <form onSubmit={(e) => e.preventDefault()} className={styles.dashboardSearchForm}>
                    <input type="text" className={styles.dashboardSearchFormInput} placeholder="Property type, location, price range" />
                    <button type="submit" className={styles.dashboardSearchFormBtn}>Search</button>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </form>
                <div className={`${styles.productsTopFirst} ${styles.productsNewTopFirst}`}>
                    <button type="button" className={styles.productsTopFirstBtn}><i className="fa fa-bell"></i></button>
                    <div className={styles.productsTopImageContainer}>
                        <Image src="/hair5.png" alt="user image" fill className={styles.userImage} />
                    </div>
                </div>
            </div>
            <header className={styles.dashboardHeader}>
                <header className={styles.dashboardHeaderAdmin}>
                    <h2>#1011</h2>
                    <p>Published - OCT 10, 2025 at 9:35AM</p>
                </header>
            </header>
            <div className={styles.adminViewProuct}>
                <div className={styles.adminViewProuctLeft}>
                    <div className={styles.adminViewProuctLeftTop}>
                        <form onSubmit={(e) => e.preventDefault()} className={styles.adminViewProuctLeftTopForm}>
                            <header>
                                <h2>Product ID: #1011</h2>
                            </header>
                            <div className={styles.adminViewProuctLeftTopContent}>
                                <h4>Apple MacBook Air</h4>
                                <h4>₦{Number(2500000).toLocaleString()} x 1</h4>
                                <h4>Apple MacBook Air</h4>
                            </div>
                            <div className={styles.adminViewProuctLeftTopBtnContainer}>
                                <button className={styles.adminViewProuctLeftAppTopBtn}>Approve</button>
                                <button className={styles.adminViewProuctLeftTopRejBtn}>Reject</button>
                            </div>
                        </form>
                    </div>
                    <div className={styles.adminViewProuctLeftBottom}>
                        <div className={styles.adminViewProuctLeftBottomTop}>
                            <div className={styles.adminViewProuctLeftBottomCat}>
                                <h4>Product Name:</h4>
                                <p>Apple Mac Air</p>
                            </div>
                            <div className={styles.adminViewProuctLeftBottomCat}>
                                <h4>Product Name:</h4>
                                <p>Apple Mac Air</p>
                            </div>
                            <div className={styles.adminViewProuctLeftBottomCat}>
                                <h4>Product Name:</h4>
                                <p>Apple Mac Air</p>
                            </div>
                            <div className={styles.adminViewProuctLeftBottomDes}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eos similique est, impedit assumenda cupiditate ut, odio quaerat qui consectetur aliquid expedita numquam blanditiis distinctio debitis et sint? Aspernatur, labore?</p>
                            </div>
                        </div>
                        <div className={styles.adminViewProuctLeftBottomBt}>
                            <div className={styles.adminViewProuctLeftBottomBtLeft}>
                                <h3>Key Features</h3>
                                <ul>
                                    <li>RAM: 28GB</li>
                                    <li>Transmission: Automatic</li>
                                    <li>Millage: 30,000 mile</li>
                                    <li>Color: Grey</li>
                                    <li>Fuel Type: Petrol</li>
                                    <li>Useage: Used</li>
                                </ul>
                            </div>
                            <div className={styles.adminViewProuctLeftBottomBtRight}>
                                <h3>Price and Availabilty</h3>
                                <ul>
                                    <li>price: ₦{Number(2500000).toLocaleString()}</li>
                                    <li>Negotiable: No</li>
                                    <li>Location: Lekki, Lagos</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.adminViewProuctRight}>
                    <div className={styles.adminViewProuctRightTop}>
                        <header>
                            <h2>Seller Details</h2>
                        </header>
                        <div className={styles.adminViewProuctRightTopContent}>
                            <div className={styles.adminViewProuctRightTopDetail}>
                                <h4>Customer</h4>
                                <p>Solo-Hitech</p>
                            </div>
                            <div className={styles.adminViewProuctRightTopDetail}>
                                <h4>Email</h4>
                                <p>Solo-Hitech@gmail.com</p>
                            </div>
                            <div className={styles.adminViewProuctRightTopDetail}>
                                <h4>Phone</h4>
                                <p>08040463335</p>
                            </div>
                            <div className={styles.adminViewProuctRightTopDetail}>
                                <h4>Product Listed</h4>
                                <p>Solo-Hitech</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.adminViewProuctRightBottom}>
                        <header>
                            <h2>Document</h2>
                        </header>
                        <div className={styles.adminViewProuctRightBottomCont}>
                            <div className={styles.adminViewProuctRightBottomDet}>
                                <div className={styles.adminViewProuctRightBottomDetLeft}>
                                    <img src="/" alt="" />
                                    <div className={styles.adminViewProuctFile}>
                                        <h4>User Guid</h4>
                                        <p>120k</p>
                                    </div>
                                </div>
                                <button type="button">View</button>
                            </div>
                            <div className={styles.adminViewProuctRightBottomDet}>
                                <div className={styles.adminViewProuctRightBottomDetLeft}>
                                    <img src="/" alt="" />
                                    <div className={styles.adminViewProuctFile}>
                                        <h4>Product card</h4>
                                        <p>120k</p>
                                    </div>
                                </div>
                                <button type="button">View</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default ViewProduct;