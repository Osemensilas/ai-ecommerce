'use client';

import styles from '../../app/css/dashboard.module.css';
import Image from 'next/image';

const VendorShipment = () => {

    const actionClicked = (e) => {

        const trackingId = e.currentTarget.parentElement.parentElement.children[2].innerText;
        console.log(trackingId);
        window.history.pushState({}, '', '/vendor/track-shipment?trackingId=' + trackingId);
    }

    const shipment = () => {
        const addCardForm = document.querySelector(`.${styles.addShimentFormContainer}`);

        addCardForm.classList.add(styles.active);
    }

    const removeShipment = () => {
        const addCardForm = document.querySelector(`.${styles.addShimentFormContainer}`);

        addCardForm.classList.remove(styles.active);
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
            <header className={styles.productsHeader}>
                <h2>Shipments</h2>
                <button type="button" onClick={shipment} className={styles.addProductBtn}><i className="fa fa-plus"></i> New Shipment</button>
            </header>
            <div className={styles.shipmentContainer}>
                <div className={styles.productsContentTop}>
                    <button className={`${styles.productsContentTopBtn} ${styles.active}`}>
                        Active 10
                    </button>
                    <button className={styles.productsContentTopBtn}>
                        Complete 28
                    </button>
                </div>
                <form className={styles.productsContentForm}>
                    <div className={styles.productsContentMiddleLeft}>
                        <select name="customer" id="category">
                            <option value="customer">Customer</option>
                        </select>
                        <select name="status" id="status">
                            <option value="status">Status</option>
                        </select>
                        <select name="today" id="today">
                            <option value="today">Today</option>
                        </select>
                        <select name="modified" id="modified">
                            <option value="modified">Modified</option>
                        </select>
                    </div>
                    <div className={styles.productsContentMiddleRight}>
                        <input type="text" className={styles.productsContentMiddleInput} placeholder="Search Orders" />
                        <i className="fa fa-search"></i>
                    </div>
                </form>
                <table className={styles.orderTable}>
                    <thead className={styles.orderTableHead}>
                        <tr>
                            <th>No</th>
                            <th>Item</th>
                            <th>Tracking Number</th>
                            <th>Shipping Carrier</th>
                            <th>Status</th>
                            <th>E.D.D</th>
                            <th>Delivery Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className={`${styles.orderTableBody} ${styles.productsTable}`}>
                        <tr>
                            <td>1</td>
                            <td>Woven Luxery</td>
                            <td>45452TEHGDB</td>
                            <td>DHL</td>
                            <td>In Transit</td>
                            <td>June 20, 2025.</td>
                            <td>No 10, Lord Shepherd Str...</td>
                            <td><i onClick={actionClicked} className="fa-solid fa-eye"></i></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Woven Luxery</td>
                            <td>45452TEHGDB</td>
                            <td>DHL</td>
                            <td>In Transit</td>
                            <td>June 20, 2025.</td>
                            <td>No 10, Lord Shepherd Str...</td>
                            <td><i className="fa-solid fa-eye"></i></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Woven Luxery</td>
                            <td>45452TEHGDB</td>
                            <td>DHL</td>
                            <td>In Transit</td>
                            <td>June 20, 2025.</td>
                            <td>No 10, Lord Shepherd Str...</td>
                            <td><i className="fa-solid fa-eye"></i></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Woven Luxery</td>
                            <td>45452TEHGDB</td>
                            <td>DHL</td>
                            <td>In Transit</td>
                            <td>June 20, 2025.</td>
                            <td>No 10, Lord Shepherd Str...</td>
                            <td><i className="fa-solid fa-eye"></i></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Woven Luxery</td>
                            <td>45452TEHGDB</td>
                            <td>DHL</td>
                            <td>In Transit</td>
                            <td>June 20, 2025.</td>
                            <td>No 10, Lord Shepherd Str...</td>
                            <td><i className="fa-solid fa-eye"></i></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Woven Luxery</td>
                            <td>45452TEHGDB</td>
                            <td>DHL</td>
                            <td>In Transit</td>
                            <td>June 20, 2025.</td>
                            <td>No 10, Lord Shepherd Str...</td>
                            <td><i className="fa-solid fa-eye"></i></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Woven Luxery</td>
                            <td>45452TEHGDB</td>
                            <td>DHL</td>
                            <td>In Transit</td>
                            <td>June 20, 2025.</td>
                            <td>No 10, Lord Shepherd Str...</td>
                            <td><i className="fa-solid fa-eye"></i></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Woven Luxery</td>
                            <td>45452TEHGDB</td>
                            <td>DHL</td>
                            <td>In Transit</td>
                            <td>June 20, 2025.</td>
                            <td>No 10, Lord Shepherd Str...</td>
                            <td><i className="fa-solid fa-eye"></i></td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Woven Luxery</td>
                            <td>45452TEHGDB</td>
                            <td>DHL</td>
                            <td>In Transit</td>
                            <td>June 20, 2025.</td>
                            <td>No 10, Lord Shepherd Str...</td>
                            <td><i className="fa-solid fa-eye"></i></td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Woven Luxery</td>
                            <td>45452TEHGDB</td>
                            <td>DHL</td>
                            <td>In Transit</td>
                            <td>June 20, 2025.</td>
                            <td>No 10, Lord Shepherd Str...</td>
                            <td><i className="fa-solid fa-eye"></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.addShimentFormContainer}>
                <form className={`${styles.addCardForm} ${styles.shippingForm}`}>
                    <header className={styles.addCardHeader}>
                        <h2>Create Shipment</h2>
                        <i onClick={removeShipment} className="fa fa-times"></i>
                    </header>
                    <div className={styles.addCardFormContent}>
                        <div className={styles.addCardFormDetail}>
                            <label htmlFor="customerName">Customer Name:</label>
                            <input type="text" id="customerName" placeholder="" />
                        </div>
                        <div className={styles.addCardFormDetail}>
                            <label htmlFor="phone">Phone:</label>
                            <input type="text" id="phone" placeholder="" />
                        </div>
                        <div className={styles.addCardFormDetail}>
                            <label htmlFor="address">Address:</label>
                            <input type="text" id="address" placeholder="" />
                        </div>
                        <div className={styles.addCardFormDetail}>
                            <label htmlFor="product">Product:</label>
                            <input type="text" id="product" placeholder="" />
                        </div>
                        <div className={styles.addCardFormDetail}>
                            <label htmlFor="description">Product Description:</label>
                            <textarea name="description" id=""></textarea>
                        </div>
                        <div className={styles.addCardFormDetail}>
                            <label htmlFor="carrier">Shipping Carrier:</label>
                            <input type="text" id="carrier" placeholder="" />
                        </div>
                        <div className={styles.addCardFormDetail}>
                            <label htmlFor="trackingNo">Tracking Number:</label>
                            <input type="text" id="trackingNo" placeholder="" />
                        </div>
                        <div className={styles.addCardFormDetail}>
                            <label htmlFor="edd">E.D.D:</label>
                            <input type="text" id="edd" placeholder="" />
                        </div>
                    </div>
                    <div className={`${styles.addCardFormBtnContainer} ${styles.shipmentBtnsContainer}`}>
                        <button type="button" onClick={removeShipment} className={styles.addCardFormBtn}>Cancel</button>
                        <button type="submit" className={styles.addCardFormBtn}>Create</button>
                    </div>
                </form>
            </div>
        </div>
        </>
     );
}
 
export default VendorShipment;