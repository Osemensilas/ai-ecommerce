'use client';

import productstyles from '../app/css/product.module.css';
import styles from '../app/css/single.module.css';
import Image from 'next/image';
import Link from 'next/link';
import RecentlyViewed from '@/components/RecentlyViewed';
import SimilarProduct from '@/components/SimilarProduct';
import { useState, useEffect } from 'react';
import { useSearchParams } from "next/navigation";
import axios from 'axios';
import { useCartStore } from './auth/Cart';

const Product = () => {

    const { addToCart } = useCartStore();
    const searchParams = useSearchParams();

    const productIdentity = searchParams.get("product_id");

    console.log(productIdentity);

    const [quantity, setQuantity] = useState(1);
    const [image, setImage] = useState('');
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [image3, setImage3] = useState('');
    const [filteredProduct, setFilteredProduct] = useState({});

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

        if (qtyInputValue < 1) {
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
        const cartBtn = document.querySelector(`.${styles.cartBtnMain}`);
        const addToCartContainer = document.querySelector(`.${styles.viewCartConatiner}`);

        addToCartContainer.classList.add(styles.show);
        cartBtn.classList.remove(styles.show);
    }

    const addProductToCart = () => {
        useCartStore.getState().addToCart({
            ...filteredProduct,
            quantity: quantity,
        });
    };

    useEffect(() => {
        if (!productIdentity) return;
        async function getProduct() {
            const url = `https://ahiaserver-api.onrender.com/api/products/${productIdentity}`;

            try {
                const response = await axios.get(url, {
                    headers: {
                        "Content-Type": "application/json",
                        "Host": "api.ahiaglobal.com",
                    },
                });

                console.log(response.data);

                setFilteredProduct(response.data);
                setImage(response.data.images[0] || '/default.jpg');
                setImage1(response.data.images[0] || '/default.jpg');
                setImage2(response.data.images[1] || '/default.jpg');
                setImage3(response.data.images[2] || '/default.jpg');
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        getProduct();
    }, [])

    if (!filteredProduct || !filteredProduct.price || !filteredProduct.images) {
        return <div>Loading product...</div>;
    }

    return (
        <>
            <section id="product">
                <div className={productstyles.pageLocation}>
                    <p>{filteredProduct.subcategory}</p>
                    <p><i className="fa fa-angle-right"></i></p>
                    <p>{filteredProduct.typeCategory}</p>
                </div>
                <div className={styles.productContainer}>
                    <div className={styles.ProudctConatinerMain}>
                        <div className={styles.productContainerLeft}>
                            <div className={styles.productConatinerImage}>
                                <img src={image} style={{ width: "auto", height: "20rem" }} alt="" />
                                {/* <Image src={image || "/fallback.png"} alt="product image" className={styles.productImage}  fill /> */}
                            </div>
                            <div className={styles.productContainerBottom}>
                                <div className={styles.productContainerBottomImages}>
                                    <div className={styles.productContainerBottomImage}>
                                        <Image src={image1 || "/fallback.png"} onClick={image1Clicked} alt="product image" className={styles.productImage} fill />
                                    </div>
                                    <div className={styles.productContainerBottomImage}>
                                        <Image src={image2 || "/fallback.png"} onClick={image2Clicked} alt="product image" className={styles.productImage} fill />
                                    </div>
                                    <div className={styles.productContainerBottomImage}>
                                        <Image src={image3 || "/fallback.png"} onClick={image3Clicked} alt="product image" className={styles.productImage} fill />
                                    </div>
                                </div>
                                <button onClick={seeProductInfo} style={{ border: 'none', cursor: 'pointer', marginTop: '20px' }}><h2>Product Information</h2></button>
                            </div>
                        </div>
                        <div className={styles.productContainerRight}>
                            <div className={styles.productContainerRightTop}>
                                <div className={styles.productDescriptionHeader}  >
                                    <h2>{filteredProduct.name}</h2>
                                    <p>-40%</p>
                                </div>
                                <div className={styles.productPrice}>
                                    <h2>₦{Number(filteredProduct.price.current || 0).toLocaleString()}</h2>
                                    <p>₦{Number(filteredProduct.price.old || 0).toLocaleString()}</p>
                                </div>
                                <div className={productstyles.productCardReviewItem}>
                                    <p style={{ fontSize: '18px' }}>7.0</p>
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
                                <div className={styles.productVariants}>
                                    <h4>Available Variants:</h4>
                                    <div className={styles.variantList}>
                                        {filteredProduct?.variants?.map((variant, index) => (
                                            <button key={index} className={styles.variantButton}>
                                                {variant.color} — {variant.storage}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.productQtyContainer}>
                                    <div className={styles.productQty}>
                                        <h3>Qty</h3>
                                    </div>
                                    <div className={styles.increaseBtn}>
                                        <button onClick={reduceBtnClicked} className="reduceBtn">-</button>
                                        <input type="number" value={quantity} onBlur={handleBlur} onChange={handleChanged} className="priceInput" />
                                        <button onClick={increaseBtnClicked} className="increaseBtn active">+</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.productContainerRightBottom}>
                                <form onSubmit={(e) => e.preventDefault()} className={styles.submitBtnForm}>

                                    <button
                                        onClick={() => {
                                            addToCartClicked();
                                            addProductToCart();
                                        }}
                                        className={`${styles.cartBtnMain} ${styles.show}`}
                                    >
                                        <i className="fa fa-shopping-cart"></i>Add to Cart
                                    </button>


                                    <div className={styles.viewCartConatiner}>
                                        <Link href={"/"}>Continue Shopping</Link>
                                        <Link href={"/cart"}>Go to Cart</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
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
                                <p>{filteredProduct.description}</p>
                            </div>
                            <div className={styles.productDescriptionBottomContent}>
                                <div className={styles.productSpecifications}>
                                    <header className={styles.productDescriptionContentHeader}>
                                        <h2>Technical Specifications</h2>
                                    </header>
                                    <table className={styles.specTable}>
                                        <tbody>
                                            {filteredProduct?.specifications?.map((spec, index) => (
                                                <tr key={index}>
                                                    <td><strong>{spec.key}</strong></td>
                                                    <td>{spec.value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className={styles.productDescriptionContentMain}>
                                    <div className={styles.productDescriptionContentMainLeft}>
                                        <ul>
                                            <li>SKU: {filteredProduct?.specificationDetails?.sku || "N/A"}</li>
                                            <li>Product Line: {filteredProduct?.specificationDetails?.productLine || "N/A"}</li>
                                            <li>Production Country: {filteredProduct?.specificationDetails?.productionCountry || "N/A"}</li>
                                            <li>Weight (Kg): {filteredProduct?.specificationDetails?.weight || "N/A"}</li>
                                            <li>Color: {filteredProduct?.specificationDetails?.color || "N/A"}</li>
                                            <li>Care Label: {filteredProduct?.specificationDetails?.careLabel || "N/A"}</li>
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
        </>
    );
}

export default Product;