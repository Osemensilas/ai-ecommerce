import styles from '../app/css/dashboard.module.css';
import Image from 'next/image';
import DashboardLines from './DashboardLines';

const VendorReports = () => {
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
            <div className={styles.reports}>
                <div className={styles.reportsTop}>
                    <div className={styles.reportsTopRight}>
                        <header className={styles.reportsTopRightHeader}>
                            <h2>Sales Summary</h2>
                            <div className={styles.reportsTopRightExports}>
                                <button><i className="fas fa-file-export"></i> Export</button>
                                <button><i class="fa-solid fa-arrows-rotate"></i> Refresh</button>
                            </div>
                        </header>
                        <div className={styles.reportsTopRightContent}>
                            <div className={`${styles.reportsTopRightCard} ${styles.cardBlue}`}>
                                <div className={styles.reportsTopRightCardTop}>
                                    <i className="fa fa-file"></i>
                                </div>
                                <div className={styles.reportsTopRightCardMiddle}>
                                    <h2>120</h2>
                                </div>
                                <div className={styles.reportsTopRightCardBottom}>
                                    <h3>Total Revenue</h3>
                                </div>
                            </div>
                            <div className={`${styles.reportsTopRightCard} ${styles.cardGreen}`}>
                                <div className={styles.reportsTopRightCardTop}>
                                    <i className="fa fa-file"></i>
                                </div>
                                <div className={styles.reportsTopRightCardMiddle}>
                                    <h2>₦{Number(12046370).toLocaleString()}</h2>
                                </div>
                                <div className={styles.reportsTopRightCardBottom}>
                                    <h3>Total Revenue</h3>
                                </div>
                            </div>
                            <div className={`${styles.reportsTopRightCard} ${styles.cardOrange}`}>
                                <div className={styles.reportsTopRightCardTop}>
                                    <i className="fa fa-file"></i>
                                </div>
                                <div className={styles.reportsTopRightCardMiddle}>
                                    <h2>Best Selling Product</h2>
                                </div>
                                <div className={styles.reportsTopRightCardBottom}>
                                    <h3>Luis Veton</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.reportsTopLeft}>
                        <header className={styles.reportsTopLeftHeader}>
                            <h3>Top Performing Categories</h3>
                        </header>
                        <div className={styles.reportsTopLeftContent}>
                            <div className={styles.reportsTopLeftContentCard}>
                                <div className={styles.reportsTopLeftContentCardTop}>
                                    <div className={styles.reportsTopLeftContentCardTopLeft}></div>
                                    <div className={styles.reportsTopLeftContentCardTopRight}>
                                        <div className={styles.reportsTopLeftContentCardTopCont}>
                                            <p>Women: </p>
                                            <p className={styles.orange}>65%</p>
                                        </div>
                                        <p>500 Units Sold</p>
                                    </div>
                                </div>
                                <div className={`${styles.reportsTopLeftContentCardBottom} ${styles.orangeLine}`}>
                                    <div className={styles.lineFillOrand} style={{width: `${65}%`}}></div>
                                </div>
                            </div>
                            <div className={styles.reportsTopLeftContentCard}>
                                <div className={styles.reportsTopLeftContentCardTop}>
                                    <div className={styles.reportsTopLeftContentCardTopLeft}></div>
                                    <div className={styles.reportsTopLeftContentCardTopRight}>
                                        <div className={styles.reportsTopLeftContentCardTopCont}>
                                            <p>Women: </p>
                                            <p className={styles.blue}>24%</p>
                                        </div>
                                        <p>500 Units Sold</p>
                                    </div>
                                </div>
                                <div className={`${styles.reportsTopLeftContentCardBottom} ${styles.blueLine}`}>
                                    <div className={styles.lineFillBlue} style={{width: `${24}%`}}></div>
                                </div>
                            </div>
                            <div className={styles.reportsTopLeftContentCard}>
                                <div className={styles.reportsTopLeftContentCardTop}>
                                    <div className={styles.reportsTopLeftContentCardTopLeft}></div>
                                    <div className={styles.reportsTopLeftContentCardTopRight}>
                                        <div className={styles.reportsTopLeftContentCardTopCont}>
                                            <p>Women: </p>
                                            <p className={styles.green}>12%</p>
                                        </div>
                                        <p>500 Units Sold</p>
                                    </div>
                                </div>
                                <div className={`${styles.reportsTopLeftContentCardBottom} ${styles.greenLine}`}>
                                    <div className={styles.lineFillGreen} style={{width: `${12}%`}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.reportsBottom}>
                    <div className={styles.reportsBottomRight}>
                        <header className={styles.reportsBottomRightHeader}>
                            <h3>Sales Summary</h3>
                            <div className={styles.headerCombined}>
                                <div className={styles.reportsTopRightExports}>
                                    <button>Print</button>
                                    <button>View More</button>
                                </div>
                                <i className="fa-solid fa-calendar"></i>
                            </div>
                        </header>
                        <div className={styles.reportsBottomRightContent}>
                            <DashboardLines />
                        </div>
                    </div>
                    <div className={styles.reportsBottomLeft}>
                        <header className={styles.reportsBottomLeftHeader}>
                            <h3>Major Sales by Location</h3>
                        </header>
                        <div className={styles.reportsBottomLeftContent}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default VendorReports;