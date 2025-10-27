'use client';

import styles from '../../../app/css/dashboard.module.css';
import Image from 'next/image';

const TrackShipment = () => {

    const goBack = () => {
        window.history.pushState({}, '', '/vendor/shipment');
    }

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
            <div className={styles.walletBack}>
                <button onClick={goBack}><i className="fa fa-arrow-left"></i> Back to Shipment</button>
            </div>
            <div className={styles.trackShipmentContainer}>
                <div className={styles.trackShipmentForm}>
                    <header className={styles.trackShipmentHeader}>
                        <div className={styles.trackShipmentHeaderLeft}>
                            <h2>Shipment</h2>
                            <div className={styles.trackShipmentHeaderLeftStatus}>
                                <p>June 2, 2025</p>
                                <h4>In transit</h4>
                            </div>
                        </div>
                        <div className={styles.trackShipmentHeaderRight}>
                            <button className={styles.trackShipmentTrackBtn} type="button">Track</button>
                            <button className={styles.trackShipmentContactBtn} type="button">Contact Courier</button>
                        </div>
                    </header>
                    <div className={styles.trackShipmentContent}>
                        <h3>Shipment Information</h3>
                        <div className={styles.trackShipmentContentCard}>
                            <div className={styles.trackShipmentContentCardLeft}>
                                <h4>Client Account Number:</h4>
                            </div>
                            <div className={styles.trackShipmentContentCardRight}>
                                <h4>1274860433</h4>
                            </div>
                        </div>
                        <div className={styles.trackShipmentContentCard}>
                            <div className={styles.trackShipmentContentCardLeft}>
                                <h4>Customer Name:</h4>
                            </div>
                            <div className={styles.trackShipmentContentCardRight}>
                                <h4>Andrew Emmanuel</h4>
                            </div>
                        </div>
                        <div className={styles.trackShipmentContentCard}>
                            <div className={styles.trackShipmentContentCardLeft}>
                                <h4>Item:</h4>
                            </div>
                            <div className={styles.trackShipmentContentCardRight}>
                                <h4>Wooven Luxery</h4>
                            </div>
                        </div>
                        <div className={styles.trackShipmentContentCard}>
                            <div className={styles.trackShipmentContentCardLeft}>
                                <h4>Tracking Number:</h4>
                            </div>
                            <div className={styles.trackShipmentContentCardRight}>
                                <h4>394hbf7tg4yh</h4>
                            </div>
                        </div>
                        <div className={styles.trackShipmentContentCard}>
                            <div className={styles.trackShipmentContentCardLeft}>
                                <h4>Shipping Courier:</h4>
                            </div>
                            <div className={styles.trackShipmentContentCardRight}>
                                <h4>FedEx</h4>
                            </div>
                        </div>
                        <div className={styles.trackShipmentContentCard}>
                            <div className={styles.trackShipmentContentCardLeft}>
                                <h4>Status:</h4>
                            </div>
                            <div className={styles.trackShipmentContentCardRight}>
                                <h4>In Transit</h4>
                            </div>
                        </div>
                        <div className={styles.trackShipmentContentCard}>
                            <div className={styles.trackShipmentContentCardLeft}>
                                <h4>E.D.D:</h4>
                            </div>
                            <div className={styles.trackShipmentContentCardRight}>
                                <h4>June 20, 2025</h4>
                            </div>
                        </div>
                        <div className={styles.trackShipmentContentCard}>
                            <div className={styles.trackShipmentContentCardLeft}>
                                <h4>Delivery Address:</h4>
                            </div>
                            <div className={styles.trackShipmentContentCardRight}>
                                <h4>FCT, Abuja</h4>
                            </div>
                        </div>
                        <div className={styles.trackShipmentContentCard}>
                            <div className={styles.trackShipmentContentCardLeft}>
                                <h4>Phone:</h4>
                            </div>
                            <div className={styles.trackShipmentContentCardRight}>
                                <h4>+234915 3929 336</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default TrackShipment;