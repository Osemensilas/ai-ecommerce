import styles from '../../../app/css/dashboard.module.css';
import Image from 'next/image';

const ViewOrders = () => {

    const orderPage = () => {
        window.history.pushState({}, '', '/admin/orders');
    }

    const shipmentClicked = () => {
        const shipmentDetails = document.querySelector(`.${styles.adminShipmentView}`);

        shipmentDetails.classList.add(styles.active);
    }

    const goBack = () => {
        const shipmentDetails = document.querySelector(`.${styles.adminShipmentView}`);

        shipmentDetails.classList.remove(styles.active);
    }

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
            <div className={styles.productsTopSecond}>
                <button type="button">Dashboard</button>
                <i className="fa fa-angle-right"></i>
                <button onClick={orderPage} type="button">Order</button>
                <i className="fa fa-angle-right"></i>
                <button type="button">Order Detail</button>
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
                                <h4>₦{Number(2500000).toLocaleString()}</h4>
                            </div>
                        </form>
                    </div>
                    <div className={styles.adminViewProuctLeftBottom}>
                        <div className={styles.adminViewProuctLeftBottomTop}>
                            <header>
                                <h2>Payment</h2>
                                <p>Paid</p>
                            </header>
                            <div className={styles.adminViewProuctLeftBottomCat}>
                                <h4>Subtotal</h4>
                                <p>1 item</p>
                                <p>₦{Number(2500000).toLocaleString()}</p>
                            </div>
                            <div className={styles.adminViewProuctLeftBottomCat}>
                                <h4>Discount</h4>
                                <p>No Discount</p>
                                <p>₦{Number(0).toLocaleString()}</p>
                            </div>
                            <div className={styles.adminViewProuctLeftBottomCat}>
                                <h4>Delivery</h4>
                                <p>Rosemary Sunday</p>
                                <p>₦{Number(100000).toLocaleString()}</p>
                            </div>
                            <div className={styles.adminViewProuctLeftBottomCat}>
                                <h4>Reference Number</h4>
                                <p></p>
                                <p>28364758595038470</p>
                            </div>
                            <div className={styles.adminViewProuctLeftBottomCatTot}>
                                <h4>Total</h4>
                                <h4>₦{Number(2500000).toLocaleString()}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.adminViewProuctRight}>
                    <div className={styles.adminViewProuctRightTop}>
                        <header>
                            <h2>Customer Details</h2>
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
                                <h4>Order Placed</h4>
                                <p>OCT 10, 2025 at 9:35AM</p>
                            </div>
                            <div className={styles.adminViewProuctRightTopDetail}>
                                <h4>Payment Method</h4>
                                <p>Paystack</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.adminViewProuctRightBottom}>
                        <header>
                            <h2>Delivery Details</h2>
                        </header>
                        <div className={styles.adminViewProuctRightBottomCont}>
                            <div className={styles.adminViewProuctRightBottomContDetails}>
                                <h4>Delivery Address</h4>
                                <p>No 10 Lord Shepherd Street, off Utako Abuja.</p>
                            </div>
                            <div className={styles.adminViewProuctRightBottomContDetails}>
                                <h4>Delivery Agent</h4>
                                <p>Solo-hit-Tech</p>
                            </div>
                            <div className={styles.adminViewProuctRightBottomContShip}>
                                <button onClick={shipmentClicked} type="button">Shipment Information</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.adminShipmentView}>
                <div className={styles.adminShipmentViewMain}>
                    <header>
                        <button type="button" onClick={goBack}>
                            <i className="fa fa-arrow-left"></i>
                            <h3>Back to Order</h3>
                        </button>
                    </header>
                    <div className={styles.adminShipmentViewContent}>
                        <div className={styles.adminShipmentViewHeader}>
                            <div className={styles.adminShipmentViewHeaderLeft}>
                                <h3>Shipment &u4dgb778hbfh9</h3>
                                <div className={styles.adminShipmentViewHeaderLeftSec}>
                                    <p>June 2nd, 2025.</p>
                                    <h4>In transit</h4>
                                </div>
                            </div>
                            <div className={styles.adminShipmentViewHeaderRight}>
                                <button type="button">Track</button>
                                <button type="button">Contact Carrier</button>
                            </div>
                        </div>
                        <div className={styles.adminShipmentViewContentB}>
                            <h3>Shipment Information</h3>
                            <div className={styles.adminShipmentViewDetailContainer}>
                                <div className={styles.adminShipmentViewDetail}>
                                    <h5>Client Account Number:</h5>
                                    <p>0294586629</p>
                                </div>
                                <div className={styles.adminShipmentViewDetail}>
                                    <h5>Client Name:</h5>
                                    <p>James Fortune</p>
                                </div>
                                <div className={styles.adminShipmentViewDetail}>
                                    <h5>Item:</h5>
                                    <p>HP Laptop</p>
                                </div>
                                <div className={styles.adminShipmentViewDetail}>
                                    <h5>Tracking:</h5>
                                    <p>James Fortune</p>
                                </div>
                                <div className={styles.adminShipmentViewDetail}>
                                    <h5>Status:</h5>
                                    <p>James Fortune</p>
                                </div>
                                <div className={styles.adminShipmentViewDetail}>
                                    <h5>E.D.D:</h5>
                                    <p>James Fortune</p>
                                </div>
                                <div className={styles.adminShipmentViewDetail}>
                                    <h5>Delivery Address:</h5>
                                    <p>James Fortune</p>
                                </div>
                                <div className={styles.adminShipmentViewDetail}>
                                    <h5>Phone:</h5>
                                    <p>James Fortune</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.adminShipmentViewBottom}>
                            <div className={styles.adminShipmentViewBottomLeft}>
                                <img src="/" alt="" />
                                <div className={styles.adminShipmentViewBottomLeftName}>
                                    <h3>James Fortune</h3>
                                    <p>Carrier</p>
                                </div>
                            </div>
                            <div className={styles.adminShipmentViewBottomRight}>
                                <button>
                                    <i className="fa fa-message"></i>
                                </button>
                                <button>
                                    <i className="fa fa-phone"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default ViewOrders;