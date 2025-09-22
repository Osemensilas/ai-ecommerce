'use client'

// import styles from "../app/css/header.module.css";
import styles from "../app/css/header.module.css";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "@mui/material";
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from "next/navigation";


const Header = () => {

    const [userPresent, setUserPresent] = useState(false);

    const filterClicked = () => {
        let filterContainer = document.querySelector(`.${styles.filterContainer}`);

        filterContainer.classList.add(styles.active);
    }

    const mouseEntered = (e) => {
        let categoryOptions = document.querySelector(`.${styles.filterContentRight}`);
        let categoryType = document.querySelector(`.${styles.filterContentRightBottom}`);

        const targetCat = e.currentTarget.value;

        categoryOptions.classList.add(styles.active);
        
        const blocks = categoryType.querySelectorAll(`.${styles.filterContentNavigations}`);

        blocks.forEach(block => {
            const att = block.getAttribute('data-type');

            if (targetCat === att){
                block.classList.add(styles.active);
            }else{
                block.classList.remove(styles.active);
            }
        });
    }


    const cancelNav = () => {
        let categoryOptions = document.querySelector(`.${styles.filterContentRight}`);

        categoryOptions.classList.remove(styles.active);
    }

    const closeNavs = () => {
        let categoryOptions = document.querySelector(`.${styles.filterContentRight}`);
        let filterContainer = document.querySelector(`.${styles.filterContainer}`);

        filterContainer.classList.remove(styles.active);
        categoryOptions.classList.remove(styles.active);
    }

    const removeCover = () => {
        let categoryOptions = document.querySelector(`.${styles.filterContentRight}`);
        let filterContainer = document.querySelector(`.${styles.filterContainer}`);

        filterContainer.classList.remove(styles.active);
        categoryOptions.classList.remove(styles.active);
    }

    return (
        <>
            <header id="header" className={styles.header}>
                <div className={styles.headerTop}>
                    <Link href={"/"} className="logoLink">
                        <Image src="/logo.jpg" fill className={styles.logo} alt="" />
                    </Link>
                    <form className={styles.searchForm}>
                        <input type="text" className={styles.searchInput} placeholder="Search Product (e.g., Belts, Necklaces, Smart Tvs, ...)" />
                    </form>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <div className={`${styles.activeUser} ${userPresent ? "" : styles.hide}`}>
                                <div className="">
                                    <i className="fa fa-user"></i>
                                    Solo-HiTech
                                </div>
                            </div>
                            <div className={`${styles.visitor} ${userPresent ? styles.hide : ""}`}>
                                <Link href="/login">
                                    <i className="fa fa-user"></i>
                                    Login
                                </Link>
                            </div>
                        </li>
                        <li className={styles.navItem}>
                            <Link href={"/cart"} className={styles.shoppingCart}>
                                <div className={styles.shoppingCartImg}>
                                    <i className="fa fa-shopping-cart"></i>
                                    <p>1</p>
                                </div>
                                cart
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href={"/"} className={styles.helpLink}>
                                <i className="fa fa-help"></i>
                                Help
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href={"/login"} className={styles.cta}>
                                <Typography  color="white">
                                    Become a Vendor
                                </Typography>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.headerBottom}>
                    <div className={styles.filterForm}>
                        <label>Filter by Category</label>
                        <button onClick={filterClicked} className={styles.filterOptions}>
                            All Products <i className="fa fa-angle-down"></i>
                        </button>
                    </div>
                    <ul className={styles.btnNavList}>
                        <li className={styles.btnNavItem}><Link href="/products?category=top-rated">Top Rates</Link></li>
                        <li className={styles.btnNavItem}><Link href="/products?category=new-arrival">New Arival</Link></li>
                        <li className={styles.btnNavItem}><Link href="/products?category=special-deal">Special Deals</Link></li>
                        <li className={styles.btnNavItem}><Link href="/products?category=gift-shop">Gift Shop</Link></li>
                    </ul>
                </div>
            </header>
            <div className={styles.filterContainer}>
                <div className={styles.altBack} onClick={closeNavs}></div>
                <div className={styles.filterContent}>
                    <div className={styles.filterContentLeft}>
                        <button onMouseEnter={mouseEntered} value="daily" className={styles.filterContentLeftBtn}>
                            Daily Essentials <i className="fa fa-angle-right"></i>
                        </button>
                        <button onMouseEnter={mouseEntered} value="electronics" className={styles.filterContentLeftBtn}>
                           Electronics & Tech <i className="fa fa-angle-right"></i>
                        </button>
                        <button onMouseEnter={mouseEntered} value="fashion" className={styles.filterContentLeftBtn}>
                            Fashion & Lifestyle <i className="fa fa-angle-right"></i>
                        </button>
                        <button onMouseEnter={mouseEntered} value="home" className={styles.filterContentLeftBtn}>
                            Home & Living <i className="fa fa-angle-right"></i>
                        </button>
                        <button onMouseEnter={mouseEntered} value="automative" className={styles.filterContentLeftBtn}>
                            Automatives & Tools <i className="fa fa-angle-right"></i>
                        </button>
                        <button onMouseEnter={mouseEntered} value="office" className={styles.filterContentLeftBtn}>
                            Office & Education <i className="fa fa-angle-right"></i>
                        </button>
                        <button onMouseEnter={mouseEntered} value="services" className={styles.filterContentLeftBtn}>
                            Services <i className="fa fa-angle-right"></i>
                        </button>
                    </div>
                    <div className={styles.filterContentRight}>
                        <div className={styles.filterContentRightTop}>
                            <button onClick={cancelNav}><i className="fa fa-times"></i></button>
                        </div>
                        <div className={styles.filterContentRightBottom}>
                            <div className={styles.filterContentNavigations} data-type="daily">
                                <div className={styles.filterContentNav}>
                                    <h3>Grocery</h3>
                                    <div className={styles.filterContentNavigationList}>
                                        <Link href="/products?category=grocery&type=fresh product" onClick={removeCover}>Fresh Products</Link>
                                        <Link href="/products?category=grocery&type=meat and seafood" onClick={removeCover}>Meat & Seafood</Link>
                                        <Link href="/products?category=grocery&type=dairy and eggs" onClick={removeCover}>Dairy & Eggs</Link>
                                        <Link href="/products?category=grocery&type=bakery" onClick={removeCover}>Bakery</Link>
                                        <Link href="/products?category=grocery&type=pantry staples" onClick={removeCover}>Pantry Staples</Link>
                                        <Link href="/products?category=grocery&type=beverages" onClick={removeCover}>Beverages</Link>
                                        <Link href="/products?category=grocery&type=snacks and candy" onClick={removeCover}>Snacks & Candy</Link>
                                    </div>
                                </div>
                                <div className={styles.filterContentNav}>
                                    <h3>Beauty</h3>
                                    <div className={styles.filterContentNavigationList}>
                                        <Link href="/products?category=beauty&type=makeup" onClick={removeCover}>Makeup</Link>
                                        <Link href="/products?category=beauty&type=skincare" onClick={removeCover}>Skincare</Link>
                                        <Link href="/products?category=beauty&type=haircare" onClick={removeCover}>Haircare</Link>
                                        <Link href="/products?category=beauty&type=personal care" onClick={removeCover}>Personal Care</Link>
                                        <Link href="/products?category=beauty&type=fragrance" onClick={removeCover}>Fragrance</Link>
                                    </div>
                                </div>
                                <div className={styles.filterContentNav}>
                                    <h3>Health</h3>
                                    <div className={styles.filterContentNavigationList}>
                                        <Link href="/products?category=health&type=vitamins" onClick={removeCover}>Vitamins</Link>
                                        <Link href="/products?category=health&type=health monitor" onClick={removeCover}>Health Monitor</Link>
                                        <Link href="/products?category=health&type=supplement" onClick={removeCover}>Supplement</Link>
                                        <Link href="/products?category=health&type=first aid" onClick={removeCover}>First Aid</Link>
                                        <Link href="/products?category=health&type=vision care" onClick={removeCover}>Vision care</Link>
                                        <Link href="/products?category=health&type=wellness product" onClick={removeCover}>Wellness Product</Link>
                                    </div>
                                </div>
                                <div className={styles.filterContentNav}>
                                    <h3>Baby & Maternity</h3>
                                    <div className={styles.filterContentNavigationList}>
                                        <Link href="/products?category=baby and marternity&type=baby clothing" onClick={removeCover}>Baby Clothing</Link>
                                        <Link href="/products?category=baby and marternity&type=diapers and wipes" onClick={removeCover}>Diapers & Wipes</Link>
                                        <Link href="/products?category=baby and marternity&type=feeding supplies" onClick={removeCover}>Feeding Supplies</Link>
                                        <Link href="/products?category=baby and marternity&type=nursery" onClick={removeCover}>Nursery (Cribs & Bedding)</Link>
                                        <Link href="/products?category=baby and marternity&type=strollers and car seats" onClick={removeCover}>Strollers and Car Seats</Link>
                                        <Link href="/products?category=baby and marternity&type=maternity clothing" onClick={removeCover}>Maternity Clothing</Link>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.filterContentNavigations} data-type="electronics">
                                <div className={styles.filterContentNav}>
                                    <h3>Computers</h3>
                                    <div className={styles.filterContentNavigationList}>
                                        <Link href="/products?category=computers&type=monitor" onClick={removeCover}>Monitor</Link>
                                        <Link href="/products?category=computers&type=digital whiteboard" onClick={removeCover}>Digital Whiteboard</Link>
                                        <Link href="/products?category=computers&type=desktops" onClick={removeCover}>Desktops</Link>
                                        <Link href="/products?category=computers&type=laptops" onClick={removeCover}>Laptops</Link>
                                        <Link href="/products?category=computers&type=macbooks" onClick={removeCover}>Macbooks</Link>
                                        <Link href="/products?category=computers&type=computer assessories" onClick={removeCover}>Computer Assessories</Link>
                                    </div>
                                </div>
                                <div className={styles.filterContentNav}>
                                    <h3>Smart Homes</h3>
                                    <div className={styles.filterContentNavigationList}>
                                        <Link href="/products?category=smart homes&type=plugs and outlets" onClick={removeCover}>Plugs & Outlets</Link>
                                        <Link href="/products?category=smart homes&type=detectors and sensors" onClick={removeCover}>Detectors & Sensors</Link>
                                        <Link href="/products?category=smart homes&type=wifi and networking" onClick={removeCover}>Wifi & Networking</Link>
                                        <Link href="/products?category=smart homes&type=cameras" onClick={removeCover}>Cameras</Link>
                                        <Link href="/products?category=smart homes&type=locks and entry" onClick={removeCover}>Locks & Entry</Link>
                                        <Link href="/products?category=smart homes&type=home lightening" onClick={removeCover}>Home Lightening</Link>
                                    </div>
                                </div>
                                <div className={styles.filterContentNav}>
                                    <h3>Electronics</h3>
                                    <div className={styles.filterContentNavigationList}>
                                        <Link href="/products?category=electronics&type=vitamins" onClick={removeCover}>Televisions</Link>
                                        <Link href="/products?category=electronics&type=cameras" onClick={removeCover}>Cameras</Link>
                                        <Link href="/products?category=electronics&type=home audio" onClick={removeCover}>Home Audio</Link>
                                        <Link href="/products?category=electronics&type=sewing machine" onClick={removeCover}>Sewing Machine</Link>
                                        <Link href="/products?category=electronics&type=generator" onClick={removeCover}>Generators</Link>
                                        <Link href="/products?category=electronics&type=portable power" onClick={removeCover}>Portable Power</Link>
                                    </div>
                                </div>
                                <div className={styles.filterContentNav}>
                                    <h3>Gaming</h3>
                                    <div className={styles.filterContentNavigationList}>
                                        <Link href="/products?category=gamining&type=playstation console" onClick={removeCover} >PlayStation Console</Link>
                                        <Link href="/products?category=gamining&type=gaming headset" onClick={removeCover} >Gaming Headset</Link>
                                        <Link href="/products?category=gamining&type=controllers" onClick={removeCover} >Controllers</Link>
                                        <Link href="/products?category=gamining&type=gaming merchandise" onClick={removeCover} >Gaming Merchandise</Link>
                                    </div>
                                </div>
                                <div className={styles.filterContentNav}>
                                    <h3>Phones & Tablets</h3>
                                    <div className={styles.filterContentNavigationList}>
                                        <Link href="/products?category=phone and tablets&type=iphone" onClick={removeCover} >iPhone</Link>
                                        <Link href="/products?category=phone and tablets&type=andriod" onClick={removeCover} >Andriod</Link>
                                        <Link href="/products?category=phone and tablets&type=tablets" onClick={removeCover} >Tablets</Link>
                                        <Link href="/products?category=phone and tablets&type=phone accessories" onClick={removeCover} >Phone Accessories</Link>
                                    </div>
                                </div>
                                <div className={styles.filterContentNav}>
                                    <h3>Wearables</h3>
                                    <div className={styles.filterContentNavigationList}>
                                        <Link href="/products?category=wearables&type=smartwatches" onClick={removeCover}>Smartwatches</Link>
                                        <Link href="/products?category=wearables&type=fitness bands" onClick={removeCover}>Fitness Bands</Link>
                                        <Link href="/products?category=wearables&type=vr headset" onClick={removeCover}>VR Headsets</Link>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.filterContentNavigations} data-type="fashion">
                                <div className={styles.filterContentNav}>
                                    <h3>Women's Fashion</h3>
                                    <div className={styles.filterContentNavigationList}>
                                        <Link href="/products?category=women's fashion&type=clothing&sex=female" onClick={removeCover}>Clothing</Link>
                                        <Link href="/products?category=women's fashion&type=shoes&sex=female" onClick={removeCover}>Shoes</Link>
                                        <Link href="/products?category=women's fashion&type=jewery&sex=female" onClick={removeCover}>Jewery</Link>
                                        <Link href="/products?category=women's fashion&type=watches&sex=female" onClick={removeCover}>Watches</Link>
                                    </div>
                                </div>
                                <div className={styles.filterContentNav}>
                                    <h3>Men's Fahion</h3>
                                    <div className={styles.filterContentNavigationList}>
                                        <Link href="/products?category=men's fashion&type=clothing&sex=male" onClick={removeCover}>Clothing</Link>
                                        <Link href="/products?category=men's fashion&type=shoes&sex=male" onClick={removeCover}>Shoes</Link>
                                        <Link href="/products?category=men's fashion&type=caps&sex=male" onClick={removeCover}>Caps</Link>
                                        <Link href="/products?category=men's fashion&type=watches&sex=male" onClick={removeCover}>Watches</Link>
                                    </div>
                                </div>
                                <div className={styles.filterContentNav}>
                                    <h3>Kids & Baby Fashion</h3>
                                    <div className={styles.filterContentNavigationList}>
                                        <Link href="/products?category=kids and baby fashion&type=clothing&sex=children" onClick={removeCover}>Clothing</Link>
                                        <Link href="/products?category=kids and baby fashion&type=shoes&sex=children" onClick={removeCover}>Shoes</Link>
                                        <Link href="/products?category=kids and baby fashion&type=jewery&sex=children" onClick={removeCover}>Assessories</Link>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.filterContentNavigations} data-type="home">
                                <div className={styles.filterContentNav}>
                                    <h3>Dining & Kitchen</h3>
                                    <div className={styles.filterContentNavigationList}>
                                        <Link href="/products?category=dining and kitchen&type=cookware" onClick={removeCover}>Cookware</Link>
                                        <Link href="/products?category=dining and kitchen&type=utensils" onClick={removeCover}>Utensils</Link>
                                        <Link href="/products?category=dining and kitchen&type=tableware" onClick={removeCover}>Tableware</Link>
                                    </div>
                                </div>
                                <div className={styles.filterContentNav}>
                                    <h3>Home Decor</h3>
                                    <div className={styles.filterContentNavigationList}>
                                        <Link href="/products?category=home and living&type=wall art" onClick={removeCover}>Wall Art</Link>
                                        <Link href="/products?category=home and living&type=vases" onClick={removeCover}>Vases</Link>
                                    </div>
                                </div>
                                <div className={styles.filterContentNav}>
                                    <h3>Home Essentials</h3>
                                    <div className={styles.filterContentNavigationList}>
                                        <Link href="/products?category=home and living&type=furniture" onClick={removeCover}>Furniture</Link>
                                        <Link href="/products?category=home and living&type=bedding" onClick={removeCover}>Bedding</Link>
                                        <Link href="/products?category=home and living&type=rugs" onClick={removeCover}>Rugs</Link>
                                        <Link href="/products?category=home and living&type=curtains and windows" onClick={removeCover}>Curtains & Window</Link>
                                        <Link href="/products?category=home and living&type=lightening and ceiling fans" onClick={removeCover}>Lighing & Ceilins Fans</Link>
                                    </div>
                                </div>
                                <div className={styles.filterContentNav}>
                                    <h3>Appliances</h3>
                                    <div className={styles.filterContentNavigationList}>
                                        <Link href="/products?category=home and living&type=blenders" onClick={removeCover}>Blenders</Link>
                                        <Link href="/products?category=home and living&type=air fryers" onClick={removeCover}>Air Fryers</Link>
                                        <Link href="/products?category=home and living&type=electric jugs" onClick={removeCover}>Electric Jugs</Link>
                                    </div>
                                </div>
                                <div className={styles.filterContentNav}>
                                    <h3>Luggage & Travel</h3>
                                    <div className={styles.filterContentNavigationList}>
                                        <Link href="/products?category=luggage and travel&type=suitcases" onClick={removeCover}>Suitcases</Link>
                                        <Link href="/products?category=luggage and travel&type=bag packs" onClick={removeCover}>Bag Packs</Link>
                                        <Link href="/products?category=luggage and travel&type=travel accessories" onClick={removeCover}>Travel Assessories</Link>
                                    </div>
                                </div>
                                <div className={styles.filterContentNav}>
                                    <h3>Building Materials</h3>
                                    <div className={styles.filterContentNavigationList}>
                                        <Link href="/products?category=building material&type=plumbing" onClick={removeCover}>Plumbing</Link>
                                        <Link href="/products?category=building material&type=electrical" onClick={removeCover}>Electrical</Link>
                                        <Link href="/products?category=building material&type=paint and supplies" onClick={removeCover}>Paint & Supplies</Link>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.filterContentNavigations} data-type="automative">
                                <div className={styles.filterContentNav}>
                                    <h3>Car Accessories</h3>
                                    <div className={styles.filterContentNavigationList}>
                                        <Link href="/products?category=car accessories&type=tyres" onClick={removeCover}>Tyres</Link>
                                        <Link href="/products?category=car accessories&type=car rims" onClick={removeCover}>Car Rims</Link>
                                        <Link href="/products?category=car accessories&type=cleaning kits" onClick={removeCover}>Cleaning Kits</Link>
                                        <Link href="/products?category=car accessories&type=tools and equipment" onClick={removeCover}>Tools & Equipment</Link>
                                    </div>
                                </div>
                                <div className={styles.filterContentNav}>
                                    <h3>Motorcycle</h3>
                                    <div className={styles.filterContentNavigationList}>
                                        <Link href="/products?category=motorcycle&type=makeup" onClick={removeCover}>Tyres</Link>
                                        <Link href="/products?category=motorcycle&type=cleaning kits" onClick={removeCover}>Cleaning Kits</Link>
                                        <Link href="/products?category=motorcycle&type=accessories" onClick={removeCover}>Accessories</Link>
                                    </div>
                                </div>
                                <div className={styles.filterContentNav}>
                                    <h3>Car Care</h3>
                                    <div className={styles.filterContentNavigationList}>
                                        <Link href="/products?category=car care&type=brake fluid" onClick={removeCover}>Brake Fluid</Link>
                                        <Link href="/products?category=car care&type=oil" onClick={removeCover}>Oil</Link>
                                        <Link href="/products?category=car care&type=additives" onClick={removeCover}>Additives</Link>
                                        <Link href="/products?category=car care&type=lubricants" onClick={removeCover}>Lubricants</Link>
                                    </div>
                                </div>
                                <div className={styles.filterContentNav}>
                                    <h3>Interior Accessories</h3>
                                    <div className={styles.filterContentNavigationList}>
                                        <Link href="/products?category=interior accessories&type=wheels" onClick={removeCover}>Wheels</Link>
                                        <Link href="/products?category=interior accessories&type=trackers" onClick={removeCover}>Trackers</Link>
                                        <Link href="/products?category=interior accessories&type=air freshners" onClick={removeCover}>Air Fresheners</Link>
                                        <Link href="/products?category=interior accessories&type=seat covers" onClick={removeCover}>Seat Covers</Link>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.filterContentNavigations} data-type="office">
                                <div className={styles.filterContentNav}>
                                    <h3>School Supplies</h3>
                                    <div className={styles.filterContentNavigationList}>
                                        <Link href="/products?category=school supplies&type=bag packs" onClick={removeCover}>Bag Packs</Link>
                                        <Link href="/products?category=school supplies&type=calculators" onClick={removeCover}>Calculators</Link>
                                        <Link href="/products?category=school supplies&type=books" onClick={removeCover}>Books</Link>
                                    </div>
                                </div>
                                <div className={styles.filterContentNav}>
                                    <h3>Office Accessories</h3>
                                    <div className={styles.filterContentNavigationList}>
                                        <Link href="/products?category=office accessories&type=printer" onClick={removeCover}>Printers</Link>
                                        <Link href="/products?category=office accessories&type=paper and stationery" onClick={removeCover}>Paper & Stationery</Link>
                                        <Link href="/products?category=office accessories&type=shredders" onClick={removeCover}>Shredders</Link>
                                        <Link href="/products?category=office accessories&type=desk organizers" onClick={removeCover}>Desk Organizers</Link>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.filterContentNavigations} data-type="services">
                                <div className={styles.filterContentNav}>
                                    <h3>Professional</h3>
                                    <div className={styles.filterContentNavigationList}>
                                        <Link href="/products?category=professional&type=fresh product" onClick={removeCover}>Pharmacy</Link>
                                        <Link href="/products?category=professional&type=meat & seafood" onClick={removeCover}>Auto Services</Link>
                                        <Link href="/products?category=professional&type=dairy & eggs" onClick={removeCover}>Financial Services</Link>
                                        <Link href="/products?category=professional&type=bakery" onClick={removeCover}>Optical Services</Link>
                                        <Link href="/products?category=professional&type=pantry staples" onClick={removeCover}>Cleaning Services</Link>
                                        <Link href="/products?category=professional&type=beverages" onClick={removeCover}>Fitness Services</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
