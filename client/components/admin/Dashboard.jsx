'use client';

import styles from '../../app/css/dashboard.module.css';
import Image from 'next/image';
import TransactionsMain from './components/Transactions';
import DashboardLocationPie from './charts/DashboardLocationPie';

const Dashboard = () => {
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
                <h2>Dashboard</h2>
            </header>
            <div className={styles.dashboardOverall}>
                <div className={styles.adminDashbordTop}>
                    <div className={styles.adminDashbordTopContent}>
                        <header className={styles.adminDashbordTopContentHeader}>
                            <i className="fa fa-right-left"></i>
                            <h3>Total Transactions</h3>
                        </header>
                        <div className={styles.adminDashbordTopContentBottom}>
                            <h4>Last 30 days</h4>
                            <div className={styles.adminDashbordTopContentBot}>
                                <h2>₦200M</h2>
                                <span className={styles.adminDashboardMainSpan}>
                                    <i className="fa fa-arrow-up"></i>
                                    <p>0%</p>
                                </span>
                            </div>
                            <div className={styles.adminDashbordTopContentBot}>
                                <div className={styles.adminDashbordTopContentBotLast}>
                                    <p>Previous 30 day</p>
                                    <span>(+₦350k)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.adminDashbordTopContent}>
                        <header className={styles.adminDashbordTopContentHeader}>
                            <i className="fa fa-dollar-sign"></i>
                            <h3>Total Sale</h3>
                        </header>
                        <div className={styles.adminDashbordTopContentBottom}>
                            <h4>Last 3 days</h4>
                            <div className={styles.adminDashbordTopContentBot}>
                                <h2>₦200 <span>QTY</span></h2>
                                <span className={styles.adminDashboardMainSpan}>
                                    <i className="fa fa-arrow-up"></i>
                                    <p>0%</p>
                                </span>
                            </div>
                            <div className={styles.adminDashbordTopContentBot}>
                                <div className={styles.adminDashbordTopContentBotLast}>
                                    <p>Previous 30 day</p>
                                    <span>(+₦850k)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.adminDashbordTopContent}>
                        <header className={styles.adminDashbordTopContentHeader}>
                            <i className="fa fa-users"></i>
                            <h3>Total Users</h3>
                        </header>
                        <div className={styles.adminDashbordTopContentBottom}>
                            <h4>Last 7 days</h4>
                            <div className={styles.adminDashbordTopContentBot}>
                                <h2>537k</h2>
                                <span className={styles.adminDashboardMainSpan}>
                                    <i className="fa fa-arrow-up"></i>
                                    <p>0%</p>
                                </span>
                            </div>
                            <div className={styles.adminDashbordTopContentBot}>
                                <div className={styles.adminDashbordTopContentBotLast}>
                                    <p>Previous 30 day</p>
                                    <span>(+150)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.adminDashbordMiddle}>
                    <div className={styles.adminDashbordMiddleLeft}>
                        <header className={styles.adminDashbordMiddleLeftHeader}>
                            <h2>Top Selling Products</h2>
                            <span>+50.58%</span>
                        </header>
                        <div className={styles.adminDashbordMiddleLeftMiddle}>
                            <h2>390K <span>sold</span></h2>
                            <p>From last month</p>
                        </div>
                        <div className={styles.adminDashbordMiddleLeftContent}>
                            <div className={styles.adminDashbordMiddleLeftCont}>
                                <div className={styles.adminDashbordMiddleLeftContTop}>
                                    <p>Sofa</p>
                                    <h3>1st</h3>
                                </div>
                                <div className={styles.adminDashbordMiddleLeftContBottom}></div>
                            </div>
                            <div className={styles.adminDashbordMiddleLeftCont}>
                                <div className={styles.adminDashbordMiddleLeftContTop}>
                                    <p>Hp 15</p>
                                    <h3>2nd</h3>
                                </div>
                                <div className={styles.adminDashbordMiddleLeftContBottom}></div>
                            </div>
                            <div className={styles.adminDashbordMiddleLeftCont}>
                                <div className={styles.adminDashbordMiddleLeftContTop}>
                                    <p>Hary</p>
                                    <h3>3rd</h3>
                                </div>
                                <div className={styles.adminDashbordMiddleLeftContBottom}></div>
                            </div>
                            <div className={styles.adminDashbordMiddleLeftCont}>
                                <div className={styles.adminDashbordMiddleLeftContTop}>
                                    <p>Dive Scent</p>
                                    <h3>4th</h3>
                                </div>
                                <div className={styles.adminDashbordMiddleLeftContBottom}></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.adminDashbordMiddleRight}>
                        <div className={styles.adminDashbordMiddleRightFirst}>
                            <div className={styles.adminDashbordMiddleCard}>
                                <div className={styles.adminDashbordMiddleCardImgCont}>
                                    <div className={styles.adminDashbordMiddleCardTop}>
                                        <Image src="/blender.png" alt='card image' fill />
                                    </div>
                                </div>
                                <div className={styles.adminDashbordMiddleCardBottom}>
                                    <h3>Harry</h3>
                                    <h4>₦{Number(90100).toLocaleString()}</h4>
                                </div>
                            </div>
                            <div className={styles.adminDashbordMiddleCard}>
                                <div className={styles.adminDashbordMiddleCardImgCont}>
                                    <div className={styles.adminDashbordMiddleCardTop}>
                                        <Image src="/blender.png" alt='card image' fill />
                                    </div>
                                </div>
                                <div className={styles.adminDashbordMiddleCardBottom}>
                                    <h3>Harry</h3>
                                    <h4>₦{Number(90100).toLocaleString()}</h4>
                                </div>
                            </div>
                            <div className={styles.adminDashbordMiddleCard}>
                                <div className={styles.adminDashbordMiddleCardImgCont}>
                                    <div className={styles.adminDashbordMiddleCardTop}>
                                        <Image src="/blender.png" alt='card image' fill />
                                    </div>
                                </div>
                                <div className={styles.adminDashbordMiddleCardBottom}>
                                    <h3>Harry</h3>
                                    <h4>₦{Number(90100).toLocaleString()}</h4>
                                </div>
                            </div>
                            <div className={styles.adminDashbordMiddleCard}>
                                <div className={styles.adminDashbordMiddleCardImgCont}>
                                    <div className={styles.adminDashbordMiddleCardTop}>
                                        <Image src="/blender.png" alt='card image' fill />
                                    </div>
                                </div>
                                <div className={styles.adminDashbordMiddleCardBottom}>
                                    <h3>Harry</h3>
                                    <h4>₦{Number(90100).toLocaleString()}</h4>
                                </div>
                            </div>
                        </div>
                        <div className={styles.adminDashbordMiddleRightSecond}>
                            <div className={styles.adminDashbordMiddleRightSecondCont}>
                                <h3>Total Orders</h3>
                                <h2 className={styles.orange}>950k</h2>
                            </div>
                            <div className={styles.adminDashbordMiddleRightSecondCont}>
                                <h3>Total Inventory</h3>
                                <h3>Products</h3>
                                <h2>5095k</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.dashboardContent} ${styles.adminDashboardContent}`}>
                    <div className={styles.dashboardDetailContainer}>
                        <TransactionsMain />
                    </div>
                </div>
                <div className={`${styles.reportsBottom} ${styles.reportsBottom}`}>
                    <div className={`${styles.reportsBottomRight} ${styles.adminDashPeriod}`}>
                        <form className={`${styles.productsContentForm}`}>
                            <div className={styles.productsContentMiddleLeft}>
                                <h2 className={styles.adminDashHeaderText}>Sale Order</h2>
                            </div>
                            <div className={styles.productsContentMiddleRight}>
                                <select name="period" className={styles.dashboardPeriod} id="period">
                                    <option value="this month">This Month</option>
                                </select>
                            </div>
                        </form>
                        <div className={styles.reportsBottomRightContent}>
                            <table className={styles.orderTable}>
                                <thead className={styles.orderTableHead}>
                                    <tr>
                                        <th>Type</th>
                                        <th>Confirmed</th>
                                        <th>Packed</th>
                                        <th>Shipped</th>
                                        <th>Invoiced</th>
                                    </tr>
                                </thead>
                                <tbody className={styles.orderTableBody}>
                                    <tr>
                                        <td>Direct Sale</td>
                                        <td>1,500</td>
                                        <td>1,450</td>
                                        <td>1,450</td>
                                        <td>387</td>
                                    </tr>
                                    <tr>
                                        <td>Promotion</td>
                                        <td>1,500</td>
                                        <td>1,450</td>
                                        <td>1,450</td>
                                        <td>387</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={styles.reportsBottomLeft}>
                        <header className={styles.reportsBottomLeftHeader}>
                            <h3>Major Sales by Location</h3>
                        </header>
                        <div className={styles.reportsBottomLeftContent}>
                            <DashboardLocationPie />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Dashboard;