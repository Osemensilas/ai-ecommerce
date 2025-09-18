'use client';

import productstyles from '../../app/css/product.module.css';
import styles from '../../app/css/single.module.css';
import Image from 'next/image';
import Link from 'next/link';
// import FAQs from '@/components/FAQs';
import RecentlyViewed from '@/components/RecentlyViewed';
import SimilarProduct from '@/components/SimilarProduct';
import { useState } from 'react';
import Header from '@/components/Header';
import FAQ from '@/components/Faq';
import Footer from '@/components/Footer';

const Product = () => {

    const [quantity, setQuantity] = useState(1);
    const [image, setImage] = useState('/product1.jpg');
    const [image1, setImage1] = useState('/product1.jpg');
    const [image2, setImage2] = useState('/product2.jpg');
    const [image3, setImage3] = useState('/product3.jpg');

    const image1Clicked = () => {
        setImage(image1);
    }

    const image2Clicked = () => {
        setImage(image2);
    }

    const image3Clicked = () => {
        setImage(image3);
    }

    const increaseBtnClicked = (e) => {
        let increaseBtn = e.currentTarget;
        let qtyInput = increaseBtn.parentElement.children[1];
        let qtyInputValue = parseInt(qtyInput.value);

        qtyInputValue += 1;
        qtyInput.value = qtyInputValue;
    }

    const reduceBtnClicked = (e) => {
        let increaseBtn = e.currentTarget;
        let qtyInput = increaseBtn.parentElement.children[1];
        let qtyInputValue = parseInt(qtyInput.value);

        qtyInputValue -= 1;
        qtyInput.value = qtyInputValue;

        if (qtyInputValue < 1){
            qtyInput.value = 1;
        }
    }

    const handleChanged = (e) => {
        let value = e.currentTarget.value;

        if (value === "") {
            setQuantity("");
            return;
        }

        let numValue = Number(value);

        if (isNaN(numValue) || numValue <= 0) {
            setQuantity(1);
        } else {
            setQuantity(numValue);
        }
    };
        
    const handleBlur = () => {
        if (quantity === "" || quantity <= 0) {
            setQuantity(1);
        }
    };

    const seeProductInfo = () => {
        let productDescription = document.querySelector(`.${styles.productDescriptionContainer}`);
        
        productDescription.classList.add(styles.active);
    }

    const removeDescription = () => {
        let productDescription = document.querySelector(`.${styles.productDescriptionContainer}`);
        
        productDescription.classList.remove(styles.active);
    }

    const addToCartClicked = (e) => {
        e.currentTarget.classList.add(`styles.hide`);

        const addToCartContainer = document.querySelector(`.${styles.viewCartConatiner}`);

        addToCartContainer.classList.add(styles.show);
    }
    
    return ( 
        <>
        <Header />
        <section id="product">
            <div className={productstyles.pageLocation}>
                <p>Beauty</p>
                <p><i className="fa fa-angle-right"></i></p>
                <p>Haircare</p>
            </div>
            <div className={styles.productContainer}>
                <div className={styles.ProudctConatinerMain}>
                    <div className={styles.productContainerLeft}>
                        <div className={styles.productConatinerImage}>
                            <Image src={image} alt="product image" className={styles.productImage} fill />
                        </div>
                    </div>
                    <div className={styles.productContainerRight}>
                        <div className={styles.productContainerRightTop}>
                            <div className={styles.productDescriptionHeader}>
                                <h2>Flor Green</h2>
                                <p>-40%</p>
                            </div>
                            <div className={styles.productPrice}>
                                <h2>₦{Number(7500).toLocaleString()} - ₦{Number(11500).toLocaleString()}</h2>
                                <p>₦{Number(11500).toLocaleString()}</p>
                            </div>
                            <div className={productstyles.productCardReviewItem}>
                                <p style={{fontSize: '18px'}}>7.0</p>
                                <div className={productstyles.productCardStars}>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <p className={styles.ratingColor}>60,483 reatings</p>
                            </div>
                        </div>
                        <div className={styles.productContainerRightMiddle}>
                            <div className={styles.productDescriptionHeader}>
                                <h2>Product Variations</h2>
                            </div>
                            <div className={styles.productSize}>
                                <button className="productSize active">UK 8</button>
                                <button className="productSize">UK 9</button>
                                <button className="productSize">UK 10</button>
                                <button className="productSize out">UK 11</button>
                                <button className="productSize">UK 12</button>
                                <button className="productSize out">UK 13</button>
                            </div>
                            <div className={styles.productQtyContainer}>
                                <div className={styles.productQty}>
                                    <h3>Qty</h3>
                                </div>
                                <div className={styles.increaseBtn}>
                                    <button onClick={reduceBtnClicked} className="reduceBtn">-</button>
                                    <input type="number" value={quantity} onBlur={handleBlur} onChange={handleChanged}  className="priceInput" />
                                    <button onClick={increaseBtnClicked} className="increaseBtn active">+</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.productContainerRightBottom}>
                            <form onSubmit={(e) => e.preventDefault()} className={styles.submitBtnForm}>
                                <button onClick={addToCartClicked}><i className="fa fa-shopping-cart"></i>Add to Cart</button>
                                <div className={styles.viewCartConatiner}>
                                    <Link href={"/"}>Continue Shopping</Link>
                                    <Link href={"/cart"}>Go to Cart</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={styles.productContainerBottom}>
                    <div className={styles.productContainerBottomImages}>
                        <div className={styles.productContainerBottomImage}>
                            <Image src={image1} onClick={image1Clicked} alt="product image" className={styles.productImage} fill />
                        </div>
                        <div className={styles.productContainerBottomImage}>
                            <Image src={image2} onClick={image2Clicked} alt="product image" className={styles.productImage} fill />
                        </div>
                        <div className={styles.productContainerBottomImage}>
                            <Image src={image3} onClick={image3Clicked} alt="product image" className={styles.productImage} fill />
                        </div>
                    </div> 
                    <button onClick={seeProductInfo} style={{border: 'none', cursor: 'pointer', marginTop: '20px'}}><h2>Product Information</h2></button>
                </div>
                <div className={styles.customerFeedbackContainer}>
                    <header className={styles.customerFeedbackHeader}>
                        <h2>Verified Customer Feedback</h2>
                        <Link href="/">View All</Link>
                    </header>
                    <div className={styles.customerFeedback}>
                        <div className={styles.customerFeedbackLeft}>
                            <div className={styles.customerUserFeedback}>
                                <div className={styles.userName}>
                                    <i className="fa fa-user"></i>
                                    James
                                </div>
                                <div className={productstyles.productCardReviewItem}>
                                    <div className={productstyles.productCardStars}>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit culpa maiores aperiam modi minima cumque odio unde, animi possimus voluptates enim accusamus fugit ab, magnam, autem provident ipsum officiis quaerat.</p>
                            </div>
                            <div className={styles.customerUserFeedback}>
                                <div className={styles.userName}>
                                    <i className="fa fa-user"></i>
                                    James
                                </div>
                                <div className={productstyles.productCardReviewItem}>
                                    <div className={productstyles.productCardStars}>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit culpa maiores aperiam modi minima cumque odio unde, animi possimus voluptates enim accusamus fugit ab, magnam, autem provident ipsum officiis quaerat.</p>
                            </div>
                            <div className={styles.customerUserFeedback}>
                                <div className={styles.userName}>
                                    <i className="fa fa-user"></i>
                                    James
                                </div>
                                <div className={productstyles.productCardReviewItem}>
                                    <div className={productstyles.productCardStars}>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit culpa maiores aperiam modi minima cumque odio unde, animi possimus voluptates enim accusamus fugit ab, magnam, autem provident ipsum officiis quaerat.</p>
                            </div>
                        </div>
                        <div className={styles.customerFeedbackRight}>
                            <h2>4.9/5.0</h2>
                            <div className="reviewStars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star thirdStar"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className={styles.productsRatingsContent}>
                                <div className={styles.productsRatingsContainer}>
                                    <h3>{5} star</h3>
                                    <div className={styles.line}>
                                        <div
                                        className={styles.lineFill}
                                        style={{ width: `${76}%` }}
                                        ></div>
                                    </div>
                                    <h3>{76}%</h3>
                                </div>
                                <div className={styles.productsRatingsContainer}>
                                    <h3>{4} star</h3>
                                    <div className={styles.line}>
                                        <div
                                        className={styles.lineFill}
                                        style={{ width: `${15}%` }}
                                        ></div>
                                    </div>
                                    <h3>{15}%</h3>
                                </div>
                                <div className={styles.productsRatingsContainer}>
                                    <h3>{3} star</h3>
                                    <div className={styles.line}>
                                        <div
                                        className={styles.lineFill}
                                        style={{ width: `${6}%` }}
                                        ></div>
                                    </div>
                                    <h3>{6}%</h3>
                                </div>
                                <div className={styles.productsRatingsContainer}>
                                    <h3>{2} star</h3>
                                    <div className={styles.line}>
                                        <div
                                        className={styles.lineFill}
                                        style={{ width: `${2}%` }}
                                        ></div>
                                    </div>
                                    <h3>{2}%</h3>
                                </div>
                                <div className={styles.productsRatingsContainer}>
                                    <h3>{1} star</h3>
                                    <div className={styles.line}>
                                        <div
                                        className={styles.lineFill}
                                        style={{ width: `${1}%` }}
                                        ></div>
                                    </div>
                                    <h3>{1}%</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SimilarProduct />
                <RecentlyViewed />
            </div>
            <div className={styles.productDescriptionContainer}>
                <div className={styles.prodDesContainer}>
                    <div className={styles.productDescriptionContainerTop}>
                        <button onClick={removeDescription}><i className="fa fa-times"></i></button>
                    </div>
                    <div className={styles.productDescriptionContainerBottom}>
                        <div className={styles.productDescriptionTopContent}>
                            <header className={styles.productDescriptionContentHeader}>
                                <h2>Product Details</h2>
                            </header>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, dicta repellat error provident aperiam eum, ut voluptatem temporibus soluta officia nemo. Quaerat dignissimos in molestias modi perferendis quae explicabo iste.</p>
                        </div>
                        <div className={styles.productDescriptionBottomContent}>
                            <header className={styles.productDescriptionContentHeader}>
                                <h2>Specification Details</h2>
                            </header>
                            <div className={styles.productDescriptionContentMain}>
                                <div className={styles.productDescriptionContentMainLeft}>
                                    <ul>
                                        <li>SKU: FEKMC24895585NDSBFDVY84B9</li>
                                        <li>Product Line: FEKMC24895585NDSBFDVY84B9</li>
                                        <li>Production Country: Nigeria</li>
                                        <li>Weight (Kg): 1</li>
                                        <li>Color: Green</li>
                                        <li>Care Label: Hand and Machine Wash</li>
                                    </ul>
                                </div>
                                <div className={styles.productDescriptionContentMainRight}>
                                    <h2>What's in the box?</h2>
                                    <p>One unit of free flowing dress</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <FAQ />
        <Footer />
        </>
     );
}
 
export default Product;