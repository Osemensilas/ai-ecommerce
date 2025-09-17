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
      { id: 1, item: "Fresh Products", url: "/products?category=grocery&type=fresh product" },
      { id: 2, item: "Meat & Seafood", url: "/products?category=grocery&type=meat and seafood" },
      { id: 3, item: "Dairy & Eggs", url: "/products?category=grocery&type=dairy and eggs" },
      { id: 4, item: "Bakery", url: "/products?category=grocery&type=bakery" },
      { id: 5, item: "Pantry Staples", url: "/products?category=grocery&type=pantry staples" },
      { id: 6, item: "Beverages", url: "/products?category=grocery&type=beverages" },
      { id: 7, item: "Snacks & Candy", url: "/products?category=grocery&type=snacks and candy" }
    ]
  },
  {
    id: 2,
    name: "beauty",
    items: [
      { id: 1, item: "Makeup", url: "/products?category=beauty&type=makeup" },
      { id: 2, item: "Skincare", url: "/products?category=beauty&type=skincare" },
      { id: 3, item: "Haircare", url: "/products?category=beauty&type=haircare" },
      { id: 4, item: "Personal Care", url: "/products?category=beauty&type=personal care" },
      { id: 5, item: "Fragrance", url: "/products?category=beauty&type=fragrance" }
    ]
  },
  {
    id: 3,
    name: "health",
    items: [
      { id: 1, item: "Vitamins", url: "/products?category=health&type=vitamins" },
      { id: 2, item: "Health Monitor", url: "/products?category=health&type=health monitor" },
      { id: 3, item: "Supplement", url: "/products?category=health&type=supplement" },
      { id: 4, item: "First Aid", url: "/products?category=health&type=first aid" },
      { id: 5, item: "Vision Care", url: "/products?category=health&type=vision care" },
      { id: 6, item: "Wellness Product", url: "/products?category=health&type=wellness product" }
    ]
  },
  {
    id: 4,
    name: "baby and maternity",
    items: [
      { id: 1, item: "Baby Clothing", url: "/products?category=baby and marternity&type=baby clothing" },
      { id: 2, item: "Diapers & Wipes", url: "/products?category=baby and marternity&type=diapers and wipes" },
      { id: 3, item: "Feeding Supplies", url: "/products?category=baby and marternity&type=feeding supplies" },
      { id: 4, item: "Nursery (Cribs & Bedding)", url: "/products?category=baby and marternity&type=nursery" },
      { id: 5, item: "Strollers and Car Seats", url: "/products?category=baby and marternity&type=strollers and car seats" },
      { id: 6, item: "Maternity Clothing", url: "/products?category=baby and marternity&type=maternity clothing" }
    ]
  },
  {
    id: 5,
    name: "computers",
    items: [
      { id: 1, item: "Monitor", url: "/products?category=computers&type=monitor" },
      { id: 2, item: "Digital Whiteboard", url: "/products?category=computers&type=digital whiteboard" },
      { id: 3, item: "Desktops", url: "/products?category=computers&type=desktops" },
      { id: 4, item: "Laptops", url: "/products?category=computers&type=laptops" },
      { id: 5, item: "Macbooks", url: "/products?category=computers&type=macbooks" },
      { id: 6, item: "Computer Accessories", url: "/products?category=computers&type=computer assessories" }
    ]
  },
  {
    id: 6,
    name: "smart homes",
    items: [
      { id: 1, item: "Plugs & Outlets", url: "/products?category=smart homes&plugs and outlets" },
      { id: 2, item: "Detectors & Sensors", url: "/products?category=smart homes&type=detectors and sensors" },
      { id: 3, item: "Wifi & Networking", url: "/products?category=smart homes&type=wifi and networking" },
      { id: 4, item: "Cameras", url: "/products?category=smart homes&type=cameras" },
      { id: 5, item: "Locks & Entry", url: "/products?category=smart homes&type=locks and entry" },
      { id: 6, item: "Home Lightening", url: "/products?category=smart homes&type=home lightening" }
    ]
  },
  {
    id: 7,
    name: "electronics",
    items: [
      { id: 1, item: "Televisions", url: "/products?category=electronics&type=vitamins" },
      { id: 2, item: "Cameras", url: "/products?category=electronics&type=cameras" },
      { id: 3, item: "Home Audio", url: "/products?category=electronics&type=home audio" },
      { id: 4, item: "Sewing Machine", url: "/products?category=electronics&type=sewing machine" },
      { id: 5, item: "Generators", url: "/products?category=electronics&type=generator" },
      { id: 6, item: "Portable Power", url: "/products?category=electronics&type=portable power" }
    ]
  },
  {
    id: 8,
    name: "gaming",
    items: [
      { id: 1, item: "PlayStation Console", url: "/products?category=gamining&type=playstation console" },
      { id: 2, item: "Gaming Headset", url: "/products?category=gamining&type=gaming headset" },
      { id: 3, item: "Controllers", url: "/products?category=gamining&type=controllers" },
      { id: 4, item: "Gaming Merchandise", url: "/products?category=gamining&type=gaming merchandise" }
    ]
  },
  {
    id: 9,
    name: "phones & tablets",
    items: [
      { id: 1, item: "iPhone", url: "/products?category=phone and tablets&type=iphone" },
      { id: 2, item: "Android", url: "/products?category=phone and tablets&type=andriod" },
      { id: 3, item: "Tablets", url: "/products?category=phone and tablets&type=tablets" },
      { id: 4, item: "Phone Accessories", url: "/products?category=phone and tablets&type=phone accessories" }
    ]
  },
  {
    id: 10,
    name: "wearables",
    items: [
      { id: 1, item: "Smartwatches", url: "/products?category=wearables&type=smartwatches" },
      { id: 2, item: "Fitness Bands", url: "/products?category=wearables&type=fitness bands" },
      { id: 3, item: "VR Headsets", url: "/products?category=wearables&type=vr headset" }
    ]
  },
  {
    id: 11,
    name: "women's fashion",
    items: [
      { id: 1, item: "Clothing", url: "/products?category=women's fashion&type=clothing&sex=female" },
      { id: 2, item: "Shoes", url: "/products?category=women's fashion&type=shoes&sex=female" },
      { id: 3, item: "Jewery", url: "/products?category=women's fashion&type=jewery&sex=female" },
      { id: 4, item: "Watches", url: "/products?category=women's fashion&type=watches&sex=female" }
    ]
  },
  {
    id: 12,
    name: "men's fashion",
    items: [
      { id: 1, item: "Clothing", url: "/products?category=men's fashion&type=clothing&sex=male" },
      { id: 2, item: "Shoes", url: "/products?category=men's fashion&type=shoes&sex=male" },
      { id: 3, item: "Caps", url: "/products?category=men's fashion&type=caps&sex=male" },
      { id: 4, item: "Watches", url: "/products?category=men's fashion&type=watches&sex=male" }
    ]
  },
  {
    id: 13,
    name: "kids & baby fashion",
    items: [
      { id: 1, item: "Clothing", url: "/products?category=kids and baby fashion&type=clothing&sex=children" },
      { id: 2, item: "Shoes", url: "/products?category=kids and baby fashion&type=shoes&sex=children" },
      { id: 3, item: "Accessories", url: "/products?category=kids and baby fashion&type=jewery&sex=children" }
    ]
  },
  {
    id: 14,
    name: "dining & kitchen",
    items: [
      { id: 1, item: "Cookware", url: "/products?category=dining and kitchen&type=cookware" },
      { id: 2, item: "Utensils", url: "/products?category=dining and kitchen&type=utensils" },
      { id: 3, item: "Tableware", url: "/products?category=dining and kitchen&type=tableware" }
    ]
  },
  {
    id: 15,
    name: "home decor",
    items: [
      { id: 1, item: "Wall Art", url: "/products?category=home and living&type=wall art" },
      { id: 2, item: "Vases", url: "/products?category=home and living&type=vases" }
    ]
  },
  {
    id: 16,
    name: "home essentials",
    items: [
      { id: 1, item: "Furniture", url: "/products?category=home and living&type=furniture" },
      { id: 2, item: "Bedding", url: "/products?category=home and living&type=bedding" },
      { id: 3, item: "Rugs", url: "/products?category=home and living&type=rugs" },
      { id: 4, item: "Curtains & Window", url: "/products?category=home and living&type=curtains and windows" },
      { id: 5, item: "Lighting & Ceiling Fans", url: "/products?category=home and living&type=lightening and ceiling fans" }
    ]
  },
  {
    id: 17,
    name: "appliances",
    items: [
      { id: 1, item: "Blenders", url: "/products?category=home and living&type=blenders" },
      { id: 2, item: "Air Fryers", url: "/products?category=home and living&type=air fryers" },
      { id: 3, item: "Electric Jugs", url: "/products?category=home and living&type=electric jugs" }
    ]
  },
  {
    id: 18,
    name: "luggage & travel",
    items: [
      { id: 1, item: "Suitcases", url: "/products?category=luggage and travel&type=suitcases" },
      { id: 2, item: "Bag Packs", url: "/products?category=luggage and travel&type=bag packs" },
      { id: 3, item: "Travel Accessories", url: "/products?category=luggage and travel&type=travel accessories" }
    ]
  },
  {
    id: 19,
    name: "building materials",
    items: [
      { id: 1, item: "Plumbing", url: "/products?category=building material&type=plumbing" },
      { id: 2, item: "Electrical", url: "/products?category=building material&type=electrical" },
      { id: 3, item: "Paint & Supplies", url: "/products?category=building material&type=paint and supplies" }
    ]
  },
  {
    id: 20,
    name: "car accessories",
    items: [
      { id: 1, item: "Tyres", url: "/products?category=car accessories&type=tyres" },
      { id: 2, item: "Car Rims", url: "/products?category=car accessories&type=car rims" },
      { id: 3, item: "Cleaning Kits", url: "/products?category=car accessories&type=cleaning kits" },
      { id: 4, item: "Tools & Equipment", url: "/products?category=car accessories&type=tools and equipment" }
    ]
  },
  {
    id: 21,
    name: "motorcycle",
    items: [
      { id: 1, item: "Tyres", url: "/products?category=motorcycle&type=makeup" },
      { id: 2, item: "Cleaning Kits", url: "/products?category=motorcycle&type=cleaning kits" },
      { id: 3, item: "Accessories", url: "/products?category=motorcycle&type=accessories" }
    ]
  },
  {
    id: 22,
    name: "car care",
    items: [
      { id: 1, item: "Brake Fluid", url: "/products?category=car care&type=brake fluid" },
      { id: 2, item: "Oil", url: "/products?category=car care&type=oil" },
      { id: 3, item: "Additives", url: "/products?category=car care&type=additives" },
      { id: 4, item: "Lubricants", url: "/products?category=car care&type=lubricants" }
    ]
  },
  {
    id: 23,
    name: "interior accessories",
    items: [
      { id: 1, item: "Wheels", url: "/products?category=interior accessories&type=wheels" },
      { id: 2, item: "Trackers", url: "/products?category=interior accessories&type=trackers" },
      { id: 3, item: "Air Fresheners", url: "/products?category=interior accessories&type=air freshners" },
      { id: 4, item: "Seat Covers", url: "/products?category=interior accessories&type=seat covers" }
    ]
  },
  {
    id: 24,
    name: "school supplies",
    items: [
      { id: 1, item: "Bag Packs", url: "/products?category=school supplies&type=bag packs" },
      { id: 2, item: "Calculators", url: "/products?category=school supplies&type=calculators" },
      { id: 3, item: "Books", url: "/products?category=school supplies&type=books" }
    ]
  },
  {
    id: 25,
    name: "office accessories",
    items: [
      { id: 1, item: "Printers", url: "/products?category=office accessories&type=printer" },
      { id: 2, item: "Paper & Stationery", url: "/products?category=office accessories&type=paper and stationery" },
      { id: 3, item: "Shredders", url: "/products?category=office accessories&type=shredders" },
      { id: 4, item: "Desk Organizers", url: "/products?category=office accessories&type=desk organizers" }
    ]
  },
  {
    id: 26,
    name: "professional services",
    items: [
      { id: 1, item: "Pharmacy", url: "/products?category=professional&type=fresh product" },
      { id: 2, item: "Auto Services", url: "/products?category=professional&type=meat & seafood" },
      { id: 3, item: "Financial Services", url: "/products?category=professional&type=dairy & eggs" },
      { id: 4, item: "Optical Services", url: "/products?category=professional&type=bakery" },
      { id: 5, item: "Cleaning Services", url: "/products?category=professional&type=pantry staples" },
      { id: 6, item: "Fitness Services", url: "/products?category=professional&type=beverages" }
    ]
  }
];

  const selectedCategory = catContainer.find(cat => cat.name === category);
    if (selectedCategory) {
        setNavMenu(selectedCategory.items);
        console.log(selectedCategory.items);
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
                                    <Link href={item.url}>{item.item}</Link>
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
