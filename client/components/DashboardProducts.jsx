import styles from '../app/css/dashboard.module.css';
import Image from 'next/image';
import DashboardDonut from './DashboardDonut';

const DashboardProducts = () => {
    return ( 
        <>
        <div className={styles.dashboardSalesCard}>
            <div className={styles.dashboardProductCardLeft}>
                <header className={styles.dashboardSalesCardheader}>
                    <h3>Product Details</h3>
                </header>
                <div className={styles.dashboardProductsCardLeftContent}>
                    <div className={styles.dashboardProductsCardLeftRContent}>
                        <div className={styles.dashboardProductsCardLeftRtext}>
                            <h2>Low Stock Items</h2>
                            <h3>22</h3>
                        </div>
                        <div className={styles.dashboardProductsCardLeftRtext}>
                            <h2>All Item Group</h2>
                            <h3>36</h3>
                        </div>
                        <div className={styles.dashboardProductsCardLeftRtext}>
                            <h2>All Items</h2>
                            <h3>129</h3>
                        </div>
                    </div>
                    <div className={styles.dashboardProductsCardLeftLContent}>
                        <div className={styles.dashboardProductDonutContainerTop}>
                            <div className={styles.donutLabel}>Active Items</div>
                        </div>
                        <div className={styles.dashboardProductDonutContainerBottom}>
                            <DashboardDonut />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.dashboardProductsCardRight}>
                <header className={styles.dashboardSalesCardheader}>
                    <h3>Top Selling Items</h3>
                </header>
                <div className={styles.dashboardProductsCardRightContent}>
                    <div className={styles.dashboardProductsCardLContent}>
                        <div className={styles.dashboardProductsimg}>
                            <Image src="/shoe2.jpg" alt="product image" fill className={styles.productImage} />
                        </div>
                        <h3>Snickers</h3>
                        <div className={styles.productImageDes}>
                            110 <span>kg</span>
                        </div>
                    </div>
                    <div className={styles.dashboardProductsCardLContent}>
                        <div className={styles.dashboardProductsimg}>
                            <Image src="/shoe1.jpg" alt="product image" fill className={styles.productImage} />
                        </div>
                        <h3>Snickers</h3>
                        <div className={styles.productImageDes}>
                            110 <span>kg</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default DashboardProducts;