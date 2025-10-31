import { useEffect } from 'react';
import styles from '../../app/css/user.module.css';
import Image from 'next/image';

const Orders = () => {

    const cardNavBtn = (e) => {
        let btnCLicked = e.currentTarget;
        let ongoingBtn = e.currentTarget.parentElement.children[0];
        let cancelBtn = e.currentTarget.parentElement.children[1];
        let ongoingContainer = e.currentTarget.parentElement.parentElement.children[1];
        let canceledContainer = e.currentTarget.parentElement.parentElement.children[2];

        if (btnCLicked === ongoingBtn){
            ongoingBtn.classList.add(styles.active);
            cancelBtn.classList.remove(styles.active);
            ongoingContainer.classList.add(styles.active);
            canceledContainer.classList.remove(styles.active);
        }else{
            ongoingBtn.classList.remove(styles.active);
            cancelBtn.classList.add(styles.active);
            ongoingContainer.classList.remove(styles.active);
            canceledContainer.classList.add(styles.active);
        }
    }

    useEffect(() => {
        const productStatus = document.querySelectorAll(".orderStatus");

        productStatus.forEach(status => {
            if (status.innerHTML === 'Order Confirmed'){
                status.classList.add("confirmed");
            }

            if (status.innerHTML === 'In Transit'){
                status.classList.add("transit");
            }

            if (status.innerHTML === 'Cancelled'){
                status.classList.add("cancelled");

                let reOrderBtn = status.parentElement.parentElement.parentElement.children[1].children[0];
                let hideBtn = status.parentElement.parentElement.parentElement.children[1].children[1];

                reOrderBtn.innerHTML = 'Re-order';

                reOrderBtn.classList.add(styles.reorder);
                hideBtn.classList.add(styles.hide);
            }

            if (status.innerHTML === 'Delivered'){
                status.classList.add("delivered");

                let reOrderBtn = status.parentElement.parentElement.parentElement.children[1].children[0];
                let recieptBtn = status.parentElement.parentElement.parentElement.children[1].children[1];

                recieptBtn.innerHTML = 'Reciept';
                reOrderBtn.innerHTML = 'Re-order';

                reOrderBtn.classList.add(styles.reorder);
                recieptBtn.classList.add(styles.reciept);
            }
        });
    },[])
    return ( 
        <>
        <div className={styles.userDashboardMain}>
            <header className={styles.userDashboardHeader}>
                <h2>Orders</h2>
            </header>
            <div className={styles.userDashboardMainContent}>
                <div className={styles.userOrderNav}>
                    <button type="button" onClick={cardNavBtn} className={`${styles.userOrderNavBtn} ${styles.active}`}>Ongoing</button>
                    <button type="button" onClick={cardNavBtn} className={styles.userOrderNavBtn}>Cancelled</button>
                </div>
                <div className={`${styles.userOrderCardContainer} ${styles.active}`}>
                    <div className={styles.userOrderCard}>
                        <div className={styles.userOrderCardTop}>
                            <p>Jan 18 - Oct 14</p>
                        </div>
                        <div className={styles.userOrderCardBottom}>
                            <div className={styles.userOrderCardBottomLeft}>
                                <div className={styles.userOrderCardImgContainer}>
                                    <Image src={"/hair1.png"} fill className={styles.userOrderCardImg} alt="product image" />
                                </div>
                                <div className={styles.userOrderCardDesContainer}>
                                    <h3 className="orderStatus">Order Confirmed</h3>
                                    <h2>22' Human Hair</h2>
                                    <p>Purchased Feb - 25</p>
                                </div>
                            </div>
                            <div className={styles.userOrderCardBottomRight}>
                                <button type="button" className={styles.userOrderCardBtnAction}>Track Order</button>
                                <button type="button" className={styles.userOrderCardBtnAction}>. . .</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.userOrderCard}>
                        <div className={styles.userOrderCardTop}>
                            <p>Jan 18 - Oct 14</p>
                        </div>
                        <div className={styles.userOrderCardBottom}>
                            <div className={styles.userOrderCardBottomLeft}>
                                <div className={styles.userOrderCardImgContainer}>
                                    <Image src={"/hair1.png"} fill className={styles.userOrderCardImg} alt="product image" />
                                </div>
                                <div className={styles.userOrderCardDesContainer}>
                                    <h3 className="orderStatus">In Transit</h3>
                                    <h2>22' Human Hair</h2>
                                    <p>Purchased Feb - 25</p>
                                </div>
                            </div>
                            <div className={styles.userOrderCardBottomRight}>
                                <button type="button" className={styles.userOrderCardBtnAction}>Track Order</button>
                                <button type="button" className={styles.userOrderCardBtnAction}>. . .</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.userOrderCard}>
                        <div className={styles.userOrderCardTop}>
                            <p>Jan 18 - Oct 14</p>
                        </div>
                        <div className={styles.userOrderCardBottom}>
                            <div className={styles.userOrderCardBottomLeft}>
                                <div className={styles.userOrderCardImgContainer}>
                                    <Image src={"/hair1.png"} fill className={styles.userOrderCardImg} alt="product image" />
                                </div>
                                <div className={styles.userOrderCardDesContainer}>
                                    <h3 className="orderStatus">Delivered</h3>
                                    <h2>22' Human Hair</h2>
                                    <p>Purchased Feb - 25</p>
                                </div>
                            </div>
                            <div className={styles.userOrderCardBottomRight}>
                                <button type="button" className={styles.userOrderCardBtnAction}>Track Order</button>
                                <button type="button" className={styles.userOrderCardBtnAction}>. . .</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.userOrderCardContainer}>
                    <div className={styles.userOrderCard}>
                        <div className={styles.userOrderCardTop}>
                            <p>Jan 18 - Oct 14</p>
                        </div>
                        <div className={styles.userOrderCardBottom}>
                            <div className={styles.userOrderCardBottomLeft}>
                                <div className={styles.userOrderCardImgContainer}>
                                    <Image src={"/hair1.png"} fill className={styles.userOrderCardImg} alt="product image" />
                                </div>
                                <div className={styles.userOrderCardDesContainer}>
                                    <h3 className="orderStatus">Cancelled</h3>
                                    <h2>22' Human Hair</h2>
                                    <p>Purchased Feb - 25</p>
                                </div>
                            </div>
                            <div className={styles.userOrderCardBottomRight}>
                                <button type="button" className={styles.userOrderCardBtnAction}>Track Order</button>
                                <button type="button" className={styles.userOrderCardBtnAction}>. . .</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.userOrderCard}>
                        <div className={styles.userOrderCardTop}>
                            <p>Jan 18 - Oct 14</p>
                        </div>
                        <div className={styles.userOrderCardBottom}>
                            <div className={styles.userOrderCardBottomLeft}>
                                <div className={styles.userOrderCardImgContainer}>
                                    <Image src={"/hair1.png"} fill className={styles.userOrderCardImg} alt="product image" />
                                </div>
                                <div className={styles.userOrderCardDesContainer}>
                                    <h3 className="orderStatus">Cancelled</h3>
                                    <h2>22' Human Hair</h2>
                                    <p>Purchased Feb - 25</p>
                                </div>
                            </div>
                            <div className={styles.userOrderCardBottomRight}>
                                <button type="button" className={styles.userOrderCardBtnAction}>Track Order</button>
                                <button type="button" className={styles.userOrderCardBtnAction}>. . .</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Orders;