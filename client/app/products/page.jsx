'use client';

import styles from "../css/product.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import RecentlyViewed from "@/components/RecentlyViewed";
import FAQ from "@/components/Faq";
import { useSearchParams } from "next/navigation";

export default function Home() {

    const searchParams = useSearchParams();

    const category = searchParams.get("category");
    const type = searchParams.get("type");

    const [minVal, setMinVal] = useState(0);
    const [maxVal, setMaxVal] = useState(500000);
    const [navMenu, setNavMenu] = useState([]);

    let initialVal = 0;
    let finalVal = 500000;


  const priceChangedMin = (e) => {
    const value = Number(e.target.value);
    if (value <= maxVal) {
      setMinVal(value);
    }
  };

  const priceChangedMax = (e) => {
    const value = Number(e.target.value);
    if (value >= minVal) {
      setMaxVal(value);
    }
  };

  useEffect(() =>{

  const catContainer = [
  {
    id: 1,
    name: "grocery",
    items: [
      { id: 1, item: "Fresh Products", url: "/products?category=grocery&type=fresh product", type: "fresh product" },
      { id: 2, item: "Meat & Seafood", url: "/products?category=grocery&type=meat and seafood", type: "meat and seafood" },
      { id: 3, item: "Dairy & Eggs", url: "/products?category=grocery&type=dairy and eggs", type: "dairy and eggs" },
      { id: 4, item: "Bakery", url: "/products?category=grocery&type=bakery", type: "bakery" },
      { id: 5, item: "Pantry Staples", url: "/products?category=grocery&type=pantry staples", type: "pantry staples" },
      { id: 6, item: "Beverages", url: "/products?category=grocery&type=beverages", type: "beverages" },
      { id: 7, item: "Snacks & Candy", url: "/products?category=grocery&type=snacks and candy", type: "snacks and candy" }
    ]
  },
  {
    id: 2,
    name: "beauty",
    items: [
      { id: 1, item: "Makeup", url: "/products?category=beauty&type=makeup", type: "makeup" },
      { id: 2, item: "Skincare", url: "/products?category=beauty&type=skincare", type: "skincare" },
      { id: 3, item: "Haircare", url: "/products?category=beauty&type=haircare", type: "haircare" },
      { id: 4, item: "Personal Care", url: "/products?category=beauty&type=personal care", type: "personal care" },
      { id: 5, item: "Fragrance", url: "/products?category=beauty&type=fragrance", type: "fragrance" }
    ]
  },
  {
    id: 3,
    name: "health",
    items: [
      { id: 1, item: "Vitamins", url: "/products?category=health&type=vitamins", type: "vitamins" },
      { id: 2, item: "Health Monitor", url: "/products?category=health&type=health monitor", type: "health monitor" },
      { id: 3, item: "Supplement", url: "/products?category=health&type=supplement", type: "supplement" },
      { id: 4, item: "First Aid", url: "/products?category=health&type=first aid", type: "first aid" },
      { id: 5, item: "Vision Care", url: "/products?category=health&type=vision care", type: "vision care" },
      { id: 6, item: "Wellness Product", url: "/products?category=health&type=wellness product", type: "wellness product" }
    ]
  },
  {
    id: 4,
    name: "baby and maternity",
    items: [
      { id: 1, item: "Baby Clothing", url: "/products?category=baby and maternity&type=baby clothing", type: "baby clothing" },
      { id: 2, item: "Diapers & Wipes", url: "/products?category=baby and maternity&type=diapers and wipes", type: "diapers and wipes" },
      { id: 3, item: "Feeding Supplies", url: "/products?category=baby and maternity&type=feeding supplies", type: "feeding supplies" },
      { id: 4, item: "Nursery (Cribs & Bedding)", url: "/products?category=baby and maternity&type=nursery", type: "nursery" },
      { id: 5, item: "Strollers and Car Seats", url: "/products?category=baby and maternity&type=strollers and car seats", type: "strollers and car seats" },
      { id: 6, item: "Maternity Clothing", url: "/products?category=baby and maternity&type=maternity clothing", type: "maternity clothing" }
    ]
  }
  // ... continue like this for the remaining categories
];


  const selectedCategory = catContainer.find(cat => cat.name === category);
    if (selectedCategory) {
        setNavMenu(selectedCategory.items);
        selectedCategory.items.forEach(element => {

            if (element.item === type){
                const allItems = document.querySelectorAll(`.${styles.catHeading}`);
                console.log(element);
            }
        });
    }
}, [category])


  return (
    <>
    <div className={styles.page}>
        <div className={styles.pageLocation}>
            <Link href={`/products?category=${category}`} style={{ textTransform: "capitalize" }}>{category}</Link>
            <div className={`${styles.pageLocation} ${type ? "" : styles.hide}`}>
                <i className="fa fa-angle-right"></i>
                <Link href={`/product?category=${category}&type=${type}`}>{type}</Link>
            </div>
        </div>
        <div className={styles.header}>
            <h2 style={{ textTransform: "capitalize" }}>{category}</h2>
        </div>
    </div>
    <div className={styles.products}>
        <div className={styles.productsLeft}>
            <div className={styles.productsFilterContainer}>
                <h2>Price Range (₦)</h2>
                <form className={styles.priceRangeForm}>
                    <input type="range" value={minVal} onChange={priceChangedMin} min="0" max="500000" step="1000" />
                    <input type="range" value={maxVal} onChange={priceChangedMax} min="0" max="500000" step="1000" />
                    <div className={styles.rangeContainer}>
                        <input type="text" onChange={() => setMinVal(e.target.value)} value={Number(minVal).toLocaleString()} />
                        <div className={styles.line}></div>
                        <input type="text" onChange={() => setMaxVal(e.target.value)} value={Number(maxVal).toLocaleString()} />
                    </div>
                </form>
                <h2>Brand</h2>
                <div className={styles.categoryFilterContainer}>
                    <form className={styles.filterSearch}>
                        <input type="text" placeholder="Search" />
                    </form>
                    <div className={styles.categoryFilterLabel}>
                        <input type="checkbox" name="" id="luxeLocks" />
                        <label htmlFor="luxeLocks">LuxeLocks</label>
                    </div>
                    <div className={styles.categoryFilterLabel}>
                        <input type="checkbox" name="" id="glamourwave" />
                        <label htmlFor="glamourwave">GlamourWave</label>
                    </div>
                    <div className={styles.categoryFilterLabel}>
                        <input type="checkbox" name="" id="silkstrand" />
                        <label htmlFor="silkstrand">SilkStrand</label>
                    </div>
                    <div className={styles.categoryFilterLabel}>
                        <input type="checkbox" name="" id="vividtresses" />
                        <label htmlFor="vividtresses">VividTresses</label>
                    </div>
                </div>
                <h2>Customer Rating</h2>
                <div className={styles.categoryFilterContainer}>
                    <div className={styles.categoryFilterLabel}>
                        <input type="checkbox" name="" id="all" />
                        <label htmlFor="all">All</label>
                    </div>
                    <div className={styles.categoryFilterLabel}>
                        <input type="checkbox" name="" id="fiveplus" />
                        <label htmlFor="fiveplus">5+</label>
                    </div>
                    <div className={styles.categoryFilterLabel}>
                        <input type="checkbox" name="" id="threeplus" />
                        <label htmlFor="threeplus">3+</label>
                    </div>
                    <div className={styles.categoryFilterLabel}>
                        <input type="checkbox" name="" id="twoplus" />
                        <label htmlFor="twoplus">2+</label>
                    </div>
                </div>
                <h2>Availabilty</h2>
                <div className={styles.categoryFilterContainer}>
                    <div className={styles.categoryFilterLabel}>
                        <input type="checkbox" name="" id="instock" />
                        <label htmlFor="instock">In-Stock</label>
                    </div>
                    <div className={styles.categoryFilterLabel}>
                        <input type="checkbox" name="" id="preorder" />
                        <label htmlFor="preorder">Pre-Order</label>
                    </div>
                </div>
                <h2>Color</h2>
                <div className={styles.categoryFilterContainer}>
                    <div className={styles.categoryFilterLabel}>
                        <input type="checkbox" name="" id="green" />
                        <label htmlFor="green">Green</label>
                    </div>
                    <div className={styles.categoryFilterLabel}>
                        <input type="checkbox" name="" id="red" />
                        <label htmlFor="red">Red</label>
                    </div>
                    <div className={styles.categoryFilterLabel}>
                        <input type="checkbox" name="" id="blue" />
                        <label htmlFor="blue">Blue</label>
                    </div>
                    <div className={styles.categoryFilterLabel}>
                        <input type="checkbox" name="" id="yellow" />
                        <label htmlFor="yellow">Yellow</label>
                    </div>
                    <div className={styles.categoryFilterLabel}>
                        <input type="checkbox" name="" id="purple" />
                        <label htmlFor="purple">Purple</label>
                    </div>
                </div>
                <h2>Shipping Option</h2>
                <div className={styles.categoryFilterContainer}>
                    <div className={styles.categoryFilterLabel}>
                        <input type="checkbox" name="" id="freeshipping" />
                        <label htmlFor="freeshipping">Free Shipping</label>
                    </div>
                    <div className={styles.categoryFilterLabel}>
                        <input type="checkbox" name="" id="samedaydelivery" />
                        <label htmlFor="samedaydelivery">Same-Day Delivery</label>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.productsRight}>
        {
            navMenu.length > 0 ? (
                <div className={styles.productsRightTop}>
                    <div className={styles.productsLinks}>
                        {
                            navMenu.map((item, index) => (
                                <div key={index}>
                                    <Link href={item.url} className={`${styles.catHeading} ${
                                        item.type === type.toLowerCase() ? styles.active : ""
                                        }`}>{item.item}</Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            ) : null
        }
            <div className={styles.productsRightBottom}>
                <div className={styles.productCard}>
                    <div className={styles.productCardTop}>
                        <Image src={"/"} className={styles.productImg} fill />
                    </div>
                    <div className={styles.productCardBottom}>
                        <div className={styles.productCartPriceContainer}>
                            <h2>₦{Number(145999).toLocaleString()}</h2>
                            <p>In Stock</p>
                        </div>
                        <div className={styles.productCardName}>
                            <h2>Lavender</h2>
                        </div>
                        <div className={styles.productCardReview}>
                            <div className={styles.productCardReviewItem}>
                                <div className={styles.productCardStars}>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <p>7.0</p>
                            </div>
                            <Link href={"/"}><i className="fa fa-arrow-right"></i> Add</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.productCard}>
                    <p className="productCarddetail sale">Sale</p>
                    <div className={styles.productCardTop}>
                        <Image src={"/"} className={styles.productImg} fill />
                    </div>
                    <div className={styles.productCardBottom}>
                        <div className={styles.productCartPriceContainer}>
                            <h2>₦{Number(145999).toLocaleString()}</h2>
                            <p>In Stock</p>
                        </div>
                        <div className={styles.productCardName}>
                            <h2>Lavender</h2>
                        </div>
                        <div className={styles.productCardReview}>
                            <div className={styles.productCardReviewItem}>
                                <div className={styles.productCardStars}>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <p>7.0</p>
                            </div>
                            <Link href={"/"}><i className="fa fa-arrow-right"></i> Add</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.productCard}>
                    <p className="productCarddetail hot">Hot</p>
                    <div className={styles.productCardTop}>
                        <Image src={"/"} className={styles.productImg} fill />
                    </div>
                    <div className={styles.productCardBottom}>
                        <div className={styles.productCartPriceContainer}>
                            <h2>₦{Number(145999).toLocaleString()}</h2>
                            <p>In Stock</p>
                        </div>
                        <div className={styles.productCardName}>
                            <h2>Lavender</h2>
                        </div>
                        <div className={styles.productCardReview}>
                            <div className={styles.productCardReviewItem}>
                                <div className={styles.productCardStars}>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <p>7.0</p>
                            </div>
                            <Link href={"/"}><i className="fa fa-arrow-right"></i> Add</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.productCard}>
                    <div className={styles.productCardTop}>
                        <Image src={"/"} className={styles.productImg} fill />
                    </div>
                    <div className={styles.productCardBottom}>
                        <div className={styles.productCartPriceContainer}>
                            <h2>₦{Number(145999).toLocaleString()}</h2>
                            <p>In Stock</p>
                        </div>
                        <div className={styles.productCardName}>
                            <h2>Lavender</h2>
                        </div>
                        <div className={styles.productCardReview}>
                            <div className={styles.productCardReviewItem}>
                                <div className={styles.productCardStars}>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <p>7.0</p>
                            </div>
                            <Link href={"/"}><i className="fa fa-arrow-right"></i> Add</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.productCard}>
                    <div className={styles.productCardTop}>
                        <Image src={"/"} className={styles.productImg} fill />
                    </div>
                    <div className={styles.productCardBottom}>
                        <div className={styles.productCartPriceContainer}>
                            <h2>₦{Number(145999).toLocaleString()}</h2>
                            <p>In Stock</p>
                        </div>
                        <div className={styles.productCardName}>
                            <h2>Lavender</h2>
                        </div>
                        <div className={styles.productCardReview}>
                            <div className={styles.productCardReviewItem}>
                                <div className={styles.productCardStars}>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <p>7.0</p>
                            </div>
                            <Link href={"/"}><i className="fa fa-arrow-right"></i> Add</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.productCard}>
                    <div className={styles.productCardTop}>
                        <Image src={"/"} className={styles.productImg} fill />
                    </div>
                    <div className={styles.productCardBottom}>
                        <div className={styles.productCartPriceContainer}>
                            <h2>₦{Number(145999).toLocaleString()}</h2>
                            <p>In Stock</p>
                        </div>
                        <div className={styles.productCardName}>
                            <h2>Lavender</h2>
                        </div>
                        <div className={styles.productCardReview}>
                            <div className={styles.productCardReviewItem}>
                                <div className={styles.productCardStars}>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <p>7.0</p>
                            </div>
                            <Link href={"/"}><i className="fa fa-arrow-right"></i> Add</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.productCard}>
                    <div className={styles.productCardTop}>
                        <Image src={"/"} className={styles.productImg} fill />
                    </div>
                    <div className={styles.productCardBottom}>
                        <div className={styles.productCartPriceContainer}>
                            <h2>₦{Number(145999).toLocaleString()}</h2>
                            <p>In Stock</p>
                        </div>
                        <div className={styles.productCardName}>
                            <h2>Lavender</h2>
                        </div>
                        <div className={styles.productCardReview}>
                            <div className={styles.productCardReviewItem}>
                                <div className={styles.productCardStars}>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <p>7.0</p>
                            </div>
                            <Link href={"/"}><i className="fa fa-arrow-right"></i> Add</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.productCard}>
                    <div className={styles.productCardTop}>
                        <Image src={"/"} className={styles.productImg} fill />
                    </div>
                    <div className={styles.productCardBottom}>
                        <div className={styles.productCartPriceContainer}>
                            <h2>₦{Number(145999).toLocaleString()}</h2>
                            <p>In Stock</p>
                        </div>
                        <div className={styles.productCardName}>
                            <h2>Lavender</h2>
                        </div>
                        <div className={styles.productCardReview}>
                            <div className={styles.productCardReviewItem}>
                                <div className={styles.productCardStars}>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <p>7.0</p>
                            </div>
                            <Link href={"/"}><i className="fa fa-arrow-right"></i> Add</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.productCard}>
                    <div className={styles.productCardTop}>
                        <Image src={"/"} className={styles.productImg} fill />
                    </div>
                    <div className={styles.productCardBottom}>
                        <div className={styles.productCartPriceContainer}>
                            <h2>₦{Number(145999).toLocaleString()}</h2>
                            <p>In Stock</p>
                        </div>
                        <div className={styles.productCardName}>
                            <h2>Lavender</h2>
                        </div>
                        <div className={styles.productCardReview}>
                            <div className={styles.productCardReviewItem}>
                                <div className={styles.productCardStars}>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <p>7.0</p>
                            </div>
                            <Link href={"/"}><i className="fa fa-arrow-right"></i> Add</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.productCard}>
                    <div className={styles.productCardTop}>
                        <Image src={"/"} className={styles.productImg} fill />
                    </div>
                    <div className={styles.productCardBottom}>
                        <div className={styles.productCartPriceContainer}>
                            <h2>₦{Number(145999).toLocaleString()}</h2>
                            <p>In Stock</p>
                        </div>
                        <div className={styles.productCardName}>
                            <h2>Lavender</h2>
                        </div>
                        <div className={styles.productCardReview}>
                            <div className={styles.productCardReviewItem}>
                                <div className={styles.productCardStars}>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <p>7.0</p>
                            </div>
                            <Link href={"/"}><i className="fa fa-arrow-right"></i> Add</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.productCard}>
                    <div className={styles.productCardTop}>
                        <Image src={"/"} className={styles.productImg} fill />
                    </div>
                    <div className={styles.productCardBottom}>
                        <div className={styles.productCartPriceContainer}>
                            <h2>₦{Number(145999).toLocaleString()}</h2>
                            <p>In Stock</p>
                        </div>
                        <div className={styles.productCardName}>
                            <h2>Lavender</h2>
                        </div>
                        <div className={styles.productCardReview}>
                            <div className={styles.productCardReviewItem}>
                                <div className={styles.productCardStars}>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <p>7.0</p>
                            </div>
                            <Link href={"/"}><i className="fa fa-arrow-right"></i> Add</Link>
                        </div>
                    </div>
                </div><div className={styles.productCard}>
                    <div className={styles.productCardTop}>
                        <Image src={"/"} className={styles.productImg} fill />
                    </div>
                    <div className={styles.productCardBottom}>
                        <div className={styles.productCartPriceContainer}>
                            <h2>₦{Number(145999).toLocaleString()}</h2>
                            <p>In Stock</p>
                        </div>
                        <div className={styles.productCardName}>
                            <h2>Lavender</h2>
                        </div>
                        <div className={styles.productCardReview}>
                            <div className={styles.productCardReviewItem}>
                                <div className={styles.productCardStars}>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <p>7.0</p>
                            </div>
                            <Link href={"/"}><i className="fa fa-arrow-right"></i> Add</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.productCard}>
                    <div className={styles.productCardTop}>
                        <Image src={"/"} className={styles.productImg} fill />
                    </div>
                    <div className={styles.productCardBottom}>
                        <div className={styles.productCartPriceContainer}>
                            <h2>₦{Number(145999).toLocaleString()}</h2>
                            <p>In Stock</p>
                        </div>
                        <div className={styles.productCardName}>
                            <h2>Lavender</h2>
                        </div>
                        <div className={styles.productCardReview}>
                            <div className={styles.productCardReviewItem}>
                                <div className={styles.productCardStars}>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <p>7.0</p>
                            </div>
                            <Link href={"/"}><i className="fa fa-arrow-right"></i> Add</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.productCard}>
                    <div className={styles.productCardTop}>
                        <Image src={"/"} className={styles.productImg} fill />
                    </div>
                    <div className={styles.productCardBottom}>
                        <div className={styles.productCartPriceContainer}>
                            <h2>₦{Number(145999).toLocaleString()}</h2>
                            <p>In Stock</p>
                        </div>
                        <div className={styles.productCardName}>
                            <h2>Lavender</h2>
                        </div>
                        <div className={styles.productCardReview}>
                            <div className={styles.productCardReviewItem}>
                                <div className={styles.productCardStars}>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <p>7.0</p>
                            </div>
                            <Link href={"/"}><i className="fa fa-arrow-right"></i> Add</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.productCard}>
                    <div className={styles.productCardTop}>
                        <Image src={"/"} className={styles.productImg} fill />
                    </div>
                    <div className={styles.productCardBottom}>
                        <div className={styles.productCartPriceContainer}>
                            <h2>₦{Number(145999).toLocaleString()}</h2>
                            <p>In Stock</p>
                        </div>
                        <div className={styles.productCardName}>
                            <h2>Lavender</h2>
                        </div>
                        <div className={styles.productCardReview}>
                            <div className={styles.productCardReviewItem}>
                                <div className={styles.productCardStars}>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <p>7.0</p>
                            </div>
                            <Link href={"/"}><i className="fa fa-arrow-right"></i> Add</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.productCard}>
                    <div className={styles.productCardTop}>
                        <Image src={"/"} className={styles.productImg} fill />
                    </div>
                    <div className={styles.productCardBottom}>
                        <div className={styles.productCartPriceContainer}>
                            <h2>₦{Number(145999).toLocaleString()}</h2>
                            <p>In Stock</p>
                        </div>
                        <div className={styles.productCardName}>
                            <h2>Lavender</h2>
                        </div>
                        <div className={styles.productCardReview}>
                            <div className={styles.productCardReviewItem}>
                                <div className={styles.productCardStars}>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <p>7.0</p>
                            </div>
                            <Link href={"/"}><i className="fa fa-arrow-right"></i> Add</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className={styles.otherCategories}>
        <div className={styles.sigleCategory}>
            <header className={styles.otherCategoriesHeader}>
                <h2>Flash Sales</h2>
            </header>
            <div className={styles.categoryContent}>
                <div className={styles.productCard}>
                    <div className={styles.productCardTop}>
                        <Image src={"/"} className={styles.productImg} fill />
                    </div>
                    <div className={styles.productCardBottom}>
                        <div className={styles.productCartPriceContainer}>
                            <h2>₦{Number(145999).toLocaleString()}</h2>
                            <p>In Stock</p>
                        </div>
                        <div className={styles.productCardName}>
                            <h2>Lavender</h2>
                        </div>
                        <div className={styles.productCardReview}>
                            <div className={styles.productCardReviewItem}>
                                <div className={styles.productCardStars}>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <p>7.0</p>
                            </div>
                            <Link href={"/"}><i className="fa fa-arrow-right"></i> Add</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.productCard}>
                    <div className={styles.productCardTop}>
                        <Image src={"/"} className={styles.productImg} fill />
                    </div>
                    <div className={styles.productCardBottom}>
                        <div className={styles.productCartPriceContainer}>
                            <h2>₦{Number(145999).toLocaleString()}</h2>
                            <p>In Stock</p>
                        </div>
                        <div className={styles.productCardName}>
                            <h2>Lavender</h2>
                        </div>
                        <div className={styles.productCardReview}>
                            <div className={styles.productCardReviewItem}>
                                <div className={styles.productCardStars}>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <p>7.0</p>
                            </div>
                            <Link href={"/"}><i className="fa fa-arrow-right"></i> Add</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.productCard}>
                    <div className={styles.productCardTop}>
                        <Image src={"/"} className={styles.productImg} fill />
                    </div>
                    <div className={styles.productCardBottom}>
                        <div className={styles.productCartPriceContainer}>
                            <h2>₦{Number(145999).toLocaleString()}</h2>
                            <p>In Stock</p>
                        </div>
                        <div className={styles.productCardName}>
                            <h2>Lavender</h2>
                        </div>
                        <div className={styles.productCardReview}>
                            <div className={styles.productCardReviewItem}>
                                <div className={styles.productCardStars}>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <p>7.0</p>
                            </div>
                            <Link href={"/"}><i className="fa fa-arrow-right"></i> Add</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.productCard}>
                    <div className={styles.productCardTop}>
                        <Image src={"/"} className={styles.productImg} fill />
                    </div>
                    <div className={styles.productCardBottom}>
                        <div className={styles.productCartPriceContainer}>
                            <h2>₦{Number(145999).toLocaleString()}</h2>
                            <p>In Stock</p>
                        </div>
                        <div className={styles.productCardName}>
                            <h2>Lavender</h2>
                        </div>
                        <div className={styles.productCardReview}>
                            <div className={styles.productCardReviewItem}>
                                <div className={styles.productCardStars}>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <p>7.0</p>
                            </div>
                            <Link href={"/"}><i className="fa fa-arrow-right"></i> Add</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.productCard}>
                    <div className={styles.productCardTop}>
                        <Image src={"/"} className={styles.productImg} fill />
                    </div>
                    <div className={styles.productCardBottom}>
                        <div className={styles.productCartPriceContainer}>
                            <h2>₦{Number(145999).toLocaleString()}</h2>
                            <p>In Stock</p>
                        </div>
                        <div className={styles.productCardName}>
                            <h2>Lavender</h2>
                        </div>
                        <div className={styles.productCardReview}>
                            <div className={styles.productCardReviewItem}>
                                <div className={styles.productCardStars}>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <p>7.0</p>
                            </div>
                            <Link href={"/"}><i className="fa fa-arrow-right"></i> Add</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className={styles.advertContainer}>
        <div className={styles.adverContent}>
            <Image src={"/"} className={styles.advertImg} fill />
        </div>
    </div>
    <RecentlyViewed />
    <FAQ />
    </>
  );
}
