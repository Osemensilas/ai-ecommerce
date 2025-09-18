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

    const minGap = 1000; // prevents overlap

    const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxVal - minGap);
    setMinVal(value);
    };

    const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minVal + minGap);
    setMaxVal(value);
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
  },
  {
    id: 5,
    name: "computers",
    items: [
      { id: 1, item: "Monitor", url: "/products?category=computers&type=monitor", type: "monitor" },
      { id: 2, item: "Digital Whiteboard", url: "/products?category=computers&type=digital whiteboard", type: "digital whiteboard" },
      { id: 3, item: "Desktops", url: "/products?category=computers&type=desktops", type: "desktops" },
      { id: 4, item: "Laptops", url: "/products?category=computers&type=laptops", type: "laptops" },
      { id: 5, item: "Macbooks", url: "/products?category=computers&type=macbooks", type: "macbooks" },
      { id: 6, item: "Computer Accessories", url: "/products?category=computers&type=computer accessories", type: "computer accessories" }
    ]
  },
  {
    id: 6,
    name: "smart homes",
    items: [
      { id: 1, item: "Plugs & Outlets", url: "/products?category=smart homes&type=plugs and outlets", type: "plugs and outlets" },
      { id: 2, item: "Detectors & Sensors", url: "/products?category=smart homes&type=detectors and sensors", type: "detectors and sensors" },
      { id: 3, item: "Wifi & Networking", url: "/products?category=smart homes&type=wifi and networking", type: "wifi and networking" },
      { id: 4, item: "Cameras", url: "/products?category=smart homes&type=cameras", type: "cameras" },
      { id: 5, item: "Locks & Entry", url: "/products?category=smart homes&type=locks and entry", type: "locks and entry" },
      { id: 6, item: "Home Lightening", url: "/products?category=smart homes&type=home lightening", type: "home lightening" }
    ]
  },
  {
    id: 7,
    name: "electronics",
    items: [
      { id: 1, item: "Televisions", url: "/products?category=electronics&type=televisions", type: "televisions" },
      { id: 2, item: "Cameras", url: "/products?category=electronics&type=cameras", type: "cameras" },
      { id: 3, item: "Home Audio", url: "/products?category=electronics&type=home audio", type: "home audio" },
      { id: 4, item: "Sewing Machine", url: "/products?category=electronics&type=sewing machine", type: "sewing machine" },
      { id: 5, item: "Generators", url: "/products?category=electronics&type=generators", type: "generators" },
      { id: 6, item: "Portable Power", url: "/products?category=electronics&type=portable power", type: "portable power" }
    ]
  },
  {
    id: 8,
    name: "gaming",
    items: [
      { id: 1, item: "PlayStation Console", url: "/products?category=gaming&type=playstation console", type: "playstation console" },
      { id: 2, item: "Gaming Headset", url: "/products?category=gaming&type=gaming headset", type: "gaming headset" },
      { id: 3, item: "Controllers", url: "/products?category=gaming&type=controllers", type: "controllers" },
      { id: 4, item: "Gaming Merchandise", url: "/products?category=gaming&type=gaming merchandise", type: "gaming merchandise" }
    ]
  },
  {
    id: 9,
    name: "phones & tablets",
    items: [
      { id: 1, item: "iPhone", url: "/products?category=phones and tablets&type=iphone", type: "iphone" },
      { id: 2, item: "Android", url: "/products?category=phones and tablets&type=android", type: "android" },
      { id: 3, item: "Tablets", url: "/products?category=phones and tablets&type=tablets", type: "tablets" },
      { id: 4, item: "Phone Accessories", url: "/products?category=phones and tablets&type=phone accessories", type: "phone accessories" }
    ]
  },
  {
    id: 10,
    name: "wearables",
    items: [
      { id: 1, item: "Smartwatches", url: "/products?category=wearables&type=smartwatches", type: "smartwatches" },
      { id: 2, item: "Fitness Bands", url: "/products?category=wearables&type=fitness bands", type: "fitness bands" },
      { id: 3, item: "VR Headsets", url: "/products?category=wearables&type=vr headsets", type: "vr headsets" }
    ]
  },
  {
    id: 11,
    name: "women's fashion",
    items: [
      { id: 1, item: "Clothing", url: "/products?category=women's fashion&type=clothing&sex=female", type: "clothing" },
      { id: 2, item: "Shoes", url: "/products?category=women's fashion&type=shoes&sex=female", type: "shoes" },
      { id: 3, item: "Jewelry", url: "/products?category=women's fashion&type=jewelry&sex=female", type: "jewelry" },
      { id: 4, item: "Watches", url: "/products?category=women's fashion&type=watches&sex=female", type: "watches" }
    ]
  },
  {
    id: 12,
    name: "men's fashion",
    items: [
      { id: 1, item: "Clothing", url: "/products?category=men's fashion&type=clothing&sex=male", type: "clothing" },
      { id: 2, item: "Shoes", url: "/products?category=men's fashion&type=shoes&sex=male", type: "shoes" },
      { id: 3, item: "Caps", url: "/products?category=men's fashion&type=caps&sex=male", type: "caps" },
      { id: 4, item: "Watches", url: "/products?category=men's fashion&type=watches&sex=male", type: "watches" }
    ]
  },
  {
    id: 13,
    name: "kids & baby fashion",
    items: [
      { id: 1, item: "Clothing", url: "/products?category=kids and baby fashion&type=clothing&sex=children", type: "clothing" },
      { id: 2, item: "Shoes", url: "/products?category=kids and baby fashion&type=shoes&sex=children", type: "shoes" },
      { id: 3, item: "Accessories", url: "/products?category=kids and baby fashion&type=accessories&sex=children", type: "accessories" }
    ]
  },
  {
    id: 14,
    name: "dining & kitchen",
    items: [
      { id: 1, item: "Cookware", url: "/products?category=dining and kitchen&type=cookware", type: "cookware" },
      { id: 2, item: "Utensils", url: "/products?category=dining and kitchen&type=utensils", type: "utensils" },
      { id: 3, item: "Tableware", url: "/products?category=dining and kitchen&type=tableware", type: "tableware" }
    ]
  },
  {
    id: 15,
    name: "home decor",
    items: [
      { id: 1, item: "Wall Art", url: "/products?category=home decor&type=wall art", type: "wall art" },
      { id: 2, item: "Vases", url: "/products?category=home decor&type=vases", type: "vases" }
    ]
  },
  {
    id: 16,
    name: "home essentials",
    items: [
      { id: 1, item: "Furniture", url: "/products?category=home essentials&type=furniture", type: "furniture" },
      { id: 2, item: "Bedding", url: "/products?category=home essentials&type=bedding", type: "bedding" },
      { id: 3, item: "Rugs", url: "/products?category=home essentials&type=rugs", type: "rugs" },
      { id: 4, item: "Curtains & Window", url: "/products?category=home essentials&type=curtains and window", type: "curtains and window" },
      { id: 5, item: "Lighting & Ceiling Fans", url: "/products?category=home essentials&type=lighting and ceiling fans", type: "lighting and ceiling fans" }
    ]
  },
  {
    id: 17,
    name: "appliances",
    items: [
      { id: 1, item: "Blenders", url: "/products?category=appliances&type=blenders", type: "blenders" },
      { id: 2, item: "Air Fryers", url: "/products?category=appliances&type=air fryers", type: "air fryers" },
      { id: 3, item: "Electric Jugs", url: "/products?category=appliances&type=electric jugs", type: "electric jugs" }
    ]
  },
  {
    id: 18,
    name: "luggage & travel",
    items: [
      { id: 1, item: "Suitcases", url: "/products?category=luggage and travel&type=suitcases", type: "suitcases" },
      { id: 2, item: "Bag Packs", url: "/products?category=luggage and travel&type=bag packs", type: "bag packs" },
      { id: 3, item: "Travel Accessories", url: "/products?category=luggage and travel&type=travel accessories", type: "travel accessories" }
    ]
  },
  {
    id: 19,
    name: "building materials",
    items: [
      { id: 1, item: "Plumbing", url: "/products?category=building materials&type=plumbing", type: "plumbing" },
      { id: 2, item: "Electrical", url: "/products?category=building materials&type=electrical", type: "electrical" },
      { id: 3, item: "Paint & Supplies", url: "/products?category=building materials&type=paint and supplies", type: "paint and supplies" }
    ]
  },
  {
    id: 20,
    name: "car accessories",
    items: [
      { id: 1, item: "Tyres", url: "/products?category=car accessories&type=tyres", type: "tyres" },
      { id: 2, item: "Car Rims", url: "/products?category=car accessories&type=car rims", type: "car rims" },
      { id: 3, item: "Cleaning Kits", url: "/products?category=car accessories&type=cleaning kits", type: "cleaning kits" },
      { id: 4, item: "Tools & Equipment", url: "/products?category=car accessories&type=tools and equipment", type: "tools and equipment" }
    ]
  },
  {
    id: 21,
    name: "motorcycle",
    items: [
      { id: 1, item: "Tyres", url: "/products?category=motorcycle&type=tyres", type: "tyres" },
      { id: 2, item: "Cleaning Kits", url: "/products?category=motorcycle&type=cleaning kits", type: "cleaning kits" },
      { id: 3, item: "Accessories", url: "/products?category=motorcycle&type=accessories", type: "accessories" }
    ]
  },
  {
    id: 22,
    name: "car care",
    items: [
      { id: 1, item: "Brake Fluid", url: "/products?category=car care&type=brake fluid", type: "brake fluid" },
      { id: 2, item: "Oil", url: "/products?category=car care&type=oil", type: "oil" },
      { id: 3, item: "Additives", url: "/products?category=car care&type=additives", type: "additives" },
      { id: 4, item: "Lubricants", url: "/products?category=car care&type=lubricants", type: "lubricants" }
    ]
  },
  {
    id: 23,
    name: "interior accessories",
    items: [
      { id: 1, item: "Wheels", url: "/products?category=interior accessories&type=wheels", type: "wheels" },
      { id: 2, item: "Trackers", url: "/products?category=interior accessories&type=trackers", type: "trackers" },
      { id: 3, item: "Air Fresheners", url: "/products?category=interior accessories&type=air fresheners", type: "air fresheners" },
      { id: 4, item: "Seat Covers", url: "/products?category=interior accessories&type=seat covers", type: "seat covers" }
    ]
  },
  {
    id: 24,
    name: "school supplies",
    items: [
      { id: 1, item: "Notebooks", url: "/products?category=school supplies&type=notebooks", type: "notebooks" },
      { id: 2, item: "Pens & Pencils", url: "/products?category=school supplies&type=pens and pencils", type: "pens and pencils" },
      { id: 3, item: "Art Supplies", url: "/products?category=school supplies&type=art supplies", type: "art supplies" }
    ]
  },
  {
    id: 25,
    name: "office accessories",
    items: [
      { id: 1, item: "Printers", url: "/products?category=office accessories&type=printers", type: "printers" },
      { id: 2, item: "Stationery", url: "/products?category=office accessories&type=stationery", type: "stationery" },
      { id: 3, item: "Desk Organizers", url: "/products?category=office accessories&type=desk organizers", type: "desk organizers" },
      { id: 4, item: "Office Chairs", url: "/products?category=office accessories&type=office chairs", type: "office chairs" }
    ]
  },
  {
    id: 26,
    name: "professional services",
    items: [
      { id: 1, item: "Legal Services", url: "/products?category=professional services&type=legal services", type: "legal services" },
      { id: 2, item: "Accounting", url: "/products?category=professional services&type=accounting", type: "accounting" },
      { id: 3, item: "Consulting", url: "/products?category=professional services&type=consulting", type: "consulting" },
      { id: 4, item: "Cleaning Services", url: "/products?category=professional services&type=cleaning services", type: "cleaning services" },
      { id: 5, item: "Repair & Maintenance", url: "/products?category=professional services&type=repair and maintenance", type: "repair and maintenance" },
      { id: 6, item: "Tutoring", url: "/products?category=professional services&type=tutoring", type: "tutoring" }
    ]
  }
];


  const selectedCategory = catContainer.find(cat => cat.name === category);
    if (selectedCategory) {
        setNavMenu(selectedCategory.items);
        console.log(navMenu);
    }else{
        setNavMenu([]);
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
                    <div className={styles.sliderWrapper}>
                        <input type="range"min="0" max="500000" step="1000" value={minVal} onChange={handleMinChange} className={`${styles.range} ${styles.one}`} />
                        <input type="range" min="0" max="500000" step="1000" value={maxVal} onChange={handleMaxChange} className={`${styles.range} ${styles.two}`} />
                        <div className={styles.sliderTrack} style={{left: `${(minVal / 500000) * 100}%`, right: `${100 - (maxVal / 500000) * 100}%`,}} ></div>
                    </div> 
                    <div className={styles.rangeContainer}>
                        <input type="text" onChange={(e) => setMinVal(Number(e.target.value))} value={Number(minVal).toLocaleString()} />
                        <div className={styles.line}></div>
                        <input type="text" onChange={(e) => setMaxVal(Number(e.target.value))} value={Number(maxVal).toLocaleString()} />
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
        {navMenu && navMenu.length > 0 ? (
            <div className={styles.productsRightTop}>
                <div className={styles.productsLinks}>
                {navMenu.map((item, index) => (
                    <div key={index} className={styles.navMenuMainContentContainer}>
                    <Link
                        href={item.url}
                        className={`${styles.catHeading} ${item.type === type ? styles.active : ""}`}
                    >
                        {item.item}
                    </Link>
                    <div
                        className={`${styles.navMenuBottomLine} ${item.type === type ? styles.active : ""}`}
                    ></div>
                    </div>
                ))}
                </div>
            </div>
            ) : (
                <div className={styles.productsRightTop}></div>
            )}

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
