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
import { useAuthStore } from './auth/Auth';

const Product = () => {

  // ✅ FIX: Hooks must be inside the component
  const { cart, total, fetchCart, addToCart, removeFromCart, } = useCartStore();
  const { user } = useAuthStore();
  const userId = user?._id || null;

  const searchParams = useSearchParams();
  const productIdentity = searchParams.get("product_id");

  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState('');
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');
  const [filteredProduct, setFilteredProduct] = useState(null);

  // IMAGE CLICK FUNCTIONS
  const image1Clicked = () => setImage(image1);
  const image2Clicked = () => setImage(image2);
  const image3Clicked = () => setImage(image3);

  // QUANTITY HANDLER
  const increaseBtnClicked = () => setQuantity(q => Number(q) + 1);

  const reduceBtnClicked = () =>
    setQuantity(q => Math.max(1, Number(q) - 1));

  const handleChanged = (e) => {
    const value = e.currentTarget.value;
    if (!value) return setQuantity("");
    const num = Number(value);
    if (isNaN(num) || num <= 0) return setQuantity(1);
    setQuantity(Math.floor(num));
  };

  const handleBlur = () => {
    if (!quantity || Number(quantity) <= 0) setQuantity(1);
  };

  // PRODUCT DETAIL SLIDE
  const seeProductInfo = () => {
    document.querySelector(`.${styles.productDescriptionContainer}`)
      .classList.add(styles.active);
  };

  const removeDescription = () => {
    document.querySelector(`.${styles.productDescriptionContainer}`)
      .classList.remove(styles.active);
  };

  // CART BUTTON UI
  const addToCartClicked = () => {
    const cartBtn = document.querySelector(`.${styles.cartBtnMain}`);
    const view = document.querySelector(`.${styles.viewCartConatiner}`);
    view.classList.add(styles.show);
    cartBtn.classList.remove(styles.show);
  };

  // ADD PRODUCT TO CART
  const addProductToCart = async () => {
    // if (!userId) {
    //   alert("Please log in to add products to your cart");
    //   return;
    // }

    await addToCart(userId, {
      ...filteredProduct,
      quantity,
      _id: filteredProduct._id,
      price: filteredProduct.price?.current || 0
    });

    addToCartClicked();
  };

  // FETCH PRODUCT
  useEffect(() => {
    if (!productIdentity) return;

    async function getProduct() {
      try {
        const url = `https://ahiaserver-api.onrender.com/api/products/${productIdentity}`;
        const response = await axios.get(url);

        const prod = response.data;
        setFilteredProduct(prod);

        setImage(prod.images?.[0] || '/default.jpg');
        setImage1(prod.images?.[0] || '/default.jpg');
        setImage2(prod.images?.[1] || '/default.jpg');
        setImage3(prod.images?.[2] || '/default.jpg');

      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    getProduct();
  }, [productIdentity]);

  if (!filteredProduct) {
    return <div>Loading product...</div>;
  }

  return (
    <>
      <section id="product">
        {/* PAGE LOCATION */}
        <div className={productstyles.pageLocation}>
          <p>{filteredProduct.subcategory}</p>
          <p><i className="fa fa-angle-right"></i></p>
          <p>{filteredProduct.typeCategory}</p>
        </div>

        <div className={styles.productContainer}>
          <div className={styles.ProudctConatinerMain}>

            {/* LEFT PANEL */}
            <div className={styles.productContainerLeft}>
              <div className={styles.productConatinerImage}>
                <img src={image} style={{ width: "auto", height: "20rem" }} alt="" />
              </div>

              <div className={styles.productContainerBottom}>
                <div className={styles.productContainerBottomImages}>
                  <div className={styles.productContainerBottomImage}>
                    <Image src={image1} alt="" onClick={image1Clicked} fill />
                  </div>

                  <div className={styles.productContainerBottomImage}>
                    <Image src={image2} alt="" onClick={image2Clicked} fill />
                  </div>

                  <div className={styles.productContainerBottomImage}>
                    <Image src={image3} alt="" onClick={image3Clicked} fill />
                  </div>
                </div>

                <button onClick={seeProductInfo} style={{ border: 'none', cursor: 'pointer', marginTop: '20px' }}>
                  <h2>Product Information</h2>
                </button>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className={styles.productContainerRight}>
              <div className={styles.productContainerRightTop}>
                <div className={styles.productDescriptionHeader}>
                  <h2>{filteredProduct.name}</h2>
                  <p>-40%</p>
                </div>

                <div className={styles.productPrice}>
                  <h2>₦{Number(filteredProduct.price?.current || 0).toLocaleString()}</h2>
                  <p>₦{Number(filteredProduct.price?.old || 0).toLocaleString()}</p>
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
                {/* PRODUCT VARIANTS */}
                <div className={styles.productDescriptionHeader}>
                  <h2>Product Variations</h2>
                </div>

                <div className={styles.productVariants}>
                  <h4>Available Variants:</h4>
                  <div className={styles.variantList}>
                    {filteredProduct?.variants?.map((v, i) => (
                      <button key={i} className={styles.variantButton}>
                        {v.color} — {v.storage}
                      </button>
                    ))}
                  </div>
                </div>

                {/* QUANTITY */}
                <div className={styles.productQtyContainer}>
                  <h3>Qty</h3>
                  <div className={styles.increaseBtn}>
                    <button onClick={reduceBtnClicked} className="reduceBtn">-</button>

                    <input
                      type="number"
                      value={quantity}
                      onBlur={handleBlur}
                      onChange={handleChanged}
                      className="priceInput"
                      min={1}
                    />

                    <button onClick={increaseBtnClicked} className="increaseBtn active">+</button>

                  </div>

                </div>
              </div>

              {/* ADD TO CART */}
              <div className={styles.productContainerRightBottom}>
                <form onSubmit={(e) => e.preventDefault()} className={styles.submitBtnForm}>
                  <button
                    onClick={addProductToCart}
                    className={`${styles.cartBtnMain} ${styles.show}`}
                  >
                    <i className="fa fa-shopping-cart"></i> Add to Cart
                  </button>

                  <div className={styles.viewCartConatiner}>
                    <Link href="/">Continue Shopping</Link>
                    <Link href="/cart">Go to Cart</Link>
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

          {/* FEEDBACK + SIMILAR PRODUCTS */}
          <SimilarProduct />
          <RecentlyViewed />
        </div>

        {/* PRODUCT DESCRIPTION MODAL */}
        <div className={styles.productDescriptionContainer}>
          <div className={styles.prodDesContainer}>
            <div className={styles.productDescriptionContainerTop}>
              <button onClick={removeDescription}><i className="fa fa-times"></i></button>
            </div>

            <div className={styles.productDescriptionContainerBottom}>
              <div className={styles.productDescriptionTopContent}>
                <h2>Product Details</h2>
                <p>{filteredProduct.description}</p>
              </div>

              <div className={styles.productDescriptionBottomContent}>
                <table className={styles.specTable}>
                  <tbody>
                    {filteredProduct.specifications?.map((spec, i) => (
                      <tr key={i}>
                        <td><strong>{spec.key}</strong></td>
                        <td>{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}

export default Product;
