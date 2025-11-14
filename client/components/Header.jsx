'use client'

// import styles from "../app/css/header.module.css";
import styles from "../app/css/header.module.css";
import Link from "next/link";
import Image from "next/image";
import { Avatar, Typography, useMediaQuery } from "@mui/material";
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from "next/navigation";
import { ShoppingBasket } from "lucide-react";
import { useAuthStore } from '@/components/auth/Auth';
import { useCartStore } from '@/components/auth/Cart';


const Header = () => {
    const [borderColor, setBorderColor] = useState("#4cc933ff");
    const { user, token } = useAuthStore();
    const username = user ? user.username : null;
    const cartItems = useCartStore((state) => state.cart);
    const numberOfItemsInCart = cartItems.length;

    // console.log("Cart Items in Header:", cartItems.length);


    const logout = useAuthStore((state) => state.logout);
    //   console.log("Authenticated User in ProductForm:", user, token);

    const router = useRouter();





    useEffect(() => {
        const colors = [
            "#4cc933ff", // green
            "#ff5733",   // orange-red
            "#33c9ff",   // sky blue
            "#ff33d1",   // pink-magenta
            "#f5b700",   // yellow-gold
            "#9b59b6",   // purple
            "#2ecc71",   // emerald green
            "#e74c3c",   // red
            "#1abc9c",   // teal
            "#3498db",   // blue
            "#f39c12",   // amber
            "#8e44ad",   // deep purple
            "#16a085",   // dark teal
            "#d35400",   // burnt orange
            "#c0392b",   // crimson
            "#27ae60",   // strong green
            "#2980b9",   // navy blue
        ];

        // 
        const interval = setInterval(() => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            setBorderColor(randomColor);
        }, 1000); // changes every 1 second

        return () => clearInterval(interval);
    }, []);



    const isMobile = useMediaQuery("(max-width:768px)");

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

            if (targetCat === att) {
                block.classList.add(styles.active);
            } else {
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

            {isMobile ?
                <>

                    <header id="header" style={{ background: "", padding: 0, margin: 0 }} >
                        <div className={styles.headerTop} style={{ background: "", padding: 0, paddingRight: "2rem" }} >
                            <Link href={"/"} className="logoLink" style={{ width: "40%", marginLeft: "1rem " }} >
                                <Image src="/logo.jpg" fill alt="" />
                            </Link>
                            <form className={styles.searchForm} style={{ width: "80%", background: "", textAlign: "center", marginLeft: "0.5rem" }} >
                                <input style={{ width: "100%", height: "2rem", fontSize: "0.7rem", padding: 2, border: 2, borderBottom: "1px solid", borderRadius: "2px" }} type="text" className={styles.searchInput} placeholder="Search Product (e.g., Belts, Necklaces, Smart Tvs, ...)" />
                            </form>
                            <ul className={styles.navList} style={{ marginLeft: "1rem" }} >
                                <li>
                                    <div className={`${styles.activeUser} ${userPresent ? "" : styles.hide}`}>
                                        <div className="">
                                            <i className="fa fa-user"></i>
                                            Solo-HiTech
                                        </div>
                                    </div>
                                    {user ? (
                                        <a href="/user" style={{ textDecoration: 'none' }}  >
                                            <Avatar sx={{ bgcolor: '#1976d2', cursor: 'pointer' }}>
                                                {username ? username.charAt(0).toUpperCase() : 'U'}
                                            </Avatar>
                                        </a>
                                    ) : (
                                        <div className={`${styles.visitor} ${userPresent ? styles.hide : ""}`}>
                                            <Link href="/login">
                                                <i className="fa fa-user"></i>
                                            </Link>
                                        </div>
                                    )}
                                </li>
                                <li className={styles.navItem}>
                                    <Link href={"/cart"} className={styles.shoppingCart}>
                                        <div className={styles.shoppingCartImg}>
                                            <i className="fa fa-shopping-cart"></i>
                                            <p>
                                                {numberOfItemsInCart > 0 ? numberOfItemsInCart : ""}
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                                {/* <li className={styles.navItem}>
                                    <Link href={"/"} className={styles.helpLink}>
                                        <i className="fa fa-help"></i>
                                        Help
                                    </Link>
                                </li>
                                <li className={styles.navItem}>
                                    <Link href={"/login"} className={styles.cta}>
                                        <Typography color="white">
                                            Become a Vendor
                                        </Typography>
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                        {/* <div className={styles.headerBottom}>
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
                        </div> */}
                        <div className={styles.headerBottom}>
                            <div className={styles.filterForm}>
                                <button
                                    onClick={filterClicked}
                                    style={{
                                        height: "2rem",
                                        width: "20vw",
                                        display: "flex",
                                        justifyContent: "space-around",
                                        alignItems: "center",
                                        border: `3px solid ${borderColor}`,
                                        borderRadius: "3rem",
                                        transition: "border-color 0.5s ease", // smooth color change
                                    }}
                                >
                                    <Typography>
                                        All
                                    </Typography>
                                    <i className="fa fa-angle-down"></i>
                                </button>
                            </div>
                            <ul
                                style={{
                                    display: "flex",
                                    flexWrap: "nowrap",
                                    overflowX: "auto",
                                    overflowY: "hidden",
                                    listStyle: "none",
                                    padding: 0,
                                    margin: 0,
                                    gap: "16px",
                                    // borderLeft: "2px solid navy",
                                    // borderRight: "2px solid green",

                                    scrollbarWidth: "thin",
                                    scrollbarColor: "#a5d0d9ff transparent",

                                }}
                            >
                                <li style={{ flex: "0 0 auto" }}>
                                    <Link href="/products?category=top-rated"> <Typography> Men </Typography> </Link>
                                </li>
                                <li style={{ flex: "0 0 auto" }}>
                                    <Link href="/products?category=new-arrival"><Typography> Women </Typography></Link>
                                </li>
                                <li style={{ flex: "0 0 auto" }}>
                                    <Link href="/products?category=special-deal"> <Typography> Babies </Typography> </Link>
                                </li>
                                <li style={{ flex: "0 0 auto" }}>
                                    <Link href="/products?category=gift-shop"> <Typography>Sports</Typography> </Link>
                                </li>
                                <li style={{ flex: "0 0 auto" }}>
                                    <Link href="/products?category=gift-shop"> <Typography>Automotive</Typography> </Link>
                                </li>
                                <li style={{ flex: "0 0 auto" }}>
                                    <Link href="/products?category=gift-shop"> <Typography>Craft</Typography> </Link>
                                </li>
                                <li style={{ flex: "0 0 auto" }}>
                                    <Link href="/products?category=gift-shop"> <Typography>Bags</Typography> </Link>
                                </li>
                                <li style={{ flex: "0 0 auto" }}>
                                    <Link href="/products?category=gift-shop"> <Typography>Toy</Typography> </Link>
                                </li>
                            </ul>

                        </div>
                    </header>
                    <div className={styles.filterContainer} style={{ background: "" }} >
                        <div className={styles.altBack} onClick={closeNavs}></div>
                        <div className={styles.filterContent} style={{ background: "" }} >
                            <div className={styles.filterContentLeft} style={{ background: "", width: "100%" }} >
                                <button onMouseEnter={mouseEntered} value="daily" className={styles.filterContentLeftBtn}>
                                    Daily Essentials
                                    {/* <i className="fa fa-angle-right"></i> */}
                                </button>
                                <button onMouseEnter={mouseEntered} value="electronics" className={styles.filterContentLeftBtn}>
                                    Electronics & Tech
                                    {/* <i className="fa fa-angle-right"></i> */}
                                </button>
                                <button onMouseEnter={mouseEntered} value="fashion" className={styles.filterContentLeftBtn}>
                                    Fashion & Lifestyle
                                    <i className="fa fa-angle-right"></i>
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
                            <div className={styles.filterContentRight} style={{ position: "absolute", zIndex: 20, background: "white", width: "85vw", height: "100%", overflowY: "auto" }} >
                                <div className={styles.filterContentRightTop}>
                                    <button onClick={cancelNav}><i className="fa fa-times"></i></button>
                                </div>
                                <div className={styles.filterContentRightBottom}>
                                    <div className={styles.filterContentNavigations} data-type="daily">
                                        <div className={styles.filterContentNav}>
                                            <h3>Grocery</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Daily Essentials&sub-category=Grocery&type=Fresh Product" onClick={removeCover}>Fresh Products</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Grocery&type=Meat and Seafood" onClick={removeCover}>Meat & Seafood</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Grocery&type=Dairy and Eggs" onClick={removeCover}>Dairy & Eggs</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Grocery&type=Bakery" onClick={removeCover}>Bakery</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Grocery&type=Pantry Staples" onClick={removeCover}>Pantry Staples</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Grocery&type=Beverages" onClick={removeCover}>Beverages</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Grocery&type=Snacks and Candy" onClick={removeCover}>Snacks & Candy</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Beauty</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Daily Essentials&sub-category=Beauty&type=Makeup" onClick={removeCover}>Makeup</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Beauty&type=Skincare" onClick={removeCover}>Skincare</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Beauty&type=Haircare" onClick={removeCover}>Haircare</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Beauty&type=Personal Care" onClick={removeCover}>Personal Care</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Beauty&type=Fragrance" onClick={removeCover}>Fragrance</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Health</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Daily Essentials&sub-category=Health&type=Vitamins" onClick={removeCover}>Vitamins</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Health&type=Health Monitor" onClick={removeCover}>Health Monitor</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Health&type=Supplement" onClick={removeCover}>Supplement</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Health&type=First Aid" onClick={removeCover}>First Aid</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Health&type=Vision Care" onClick={removeCover}>Vision care</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Health&type=Wellness Product" onClick={removeCover}>Wellness Product</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Baby & Maternity</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Daily Essentials&sub-category=Baby and Marternity&type=Baby Clothing" onClick={removeCover}>Baby Clothing</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Baby and Marternity&type=Diapers and Wipes" onClick={removeCover}>Diapers & Wipes</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Baby and Marternity&type=Feeding Supplies" onClick={removeCover}>Feeding Supplies</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Baby and Marternity&type=Nursery" onClick={removeCover}>Nursery (Cribs & Bedding)</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Baby and Marternity&type=Strollers and Car Seats" onClick={removeCover}>Strollers and Car Seats</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Baby and Marternity&type=Maternity Clothing" onClick={removeCover}>Maternity Clothing</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.filterContentNavigations} data-type="electronics">
                                        <div className={styles.filterContentNav}>
                                            <h3>Computers</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Computers&type=Monitor" onClick={removeCover}>Monitor</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Computers&type=Digital Whiteboard" onClick={removeCover}>Digital Whiteboard</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Computers&type=Desktops" onClick={removeCover}>Desktops</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Computers&type=Laptops" onClick={removeCover}>Laptops</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Computers&type=Macbooks" onClick={removeCover}>Macbooks</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Computers&type=Computer Assessories" onClick={removeCover}>Computer Assessories</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Smart Homes</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Smart Homes&type=Plugs and Outlets" onClick={removeCover}>Plugs & Outlets</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Smart Homes&type=Detectors and Sensors" onClick={removeCover}>Detectors & Sensors</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Smart Homes&type=Wifi and Networking" onClick={removeCover}>Wifi & Networking</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Smart Homes&type=Cameras" onClick={removeCover}>Cameras</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Smart Homes&type=Locks and Entry" onClick={removeCover}>Locks & Entry</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Smart Homes&type=Home Lightening" onClick={removeCover}>Home Lightening</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Electronics</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Electronics&type=Vitamins" onClick={removeCover}>Televisions</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Electronics&type=Cameras" onClick={removeCover}>Cameras</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Electronics&type=Home Audio" onClick={removeCover}>Home Audio</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Electronics&type=Sewing Machine" onClick={removeCover}>Sewing Machine</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Electronics&type=Generator" onClick={removeCover}>Generators</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Electronics&type=Portable Power" onClick={removeCover}>Portable Power</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Gaming</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Electronics and tech&sub-category=Gaming&type=Playstation Console" onClick={removeCover} >PlayStation Console</Link>
                                                <Link href="/products?category=Electronics and tech&sub-category=Gaming&type=Gaming Headset" onClick={removeCover} >Gaming Headset</Link>
                                                <Link href="/products?category=Electronics and tech&sub-category=Gaming&type=Controllers" onClick={removeCover} >Controllers</Link>
                                                <Link href="/products?category=Electronics and tech&sub-category=Gaming&type=Gaming Merchandise" onClick={removeCover} >Gaming Merchandise</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Phones & Tablets</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Phones and Tablets&type=iPhone" onClick={removeCover} >iPhone</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Phones and Tablets&type=Android" onClick={removeCover} >Andriod</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Phones and Tablets&type=Tablets" onClick={removeCover} >Tablets</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Phones and Tablets&type=Phone Accessories" onClick={removeCover} >Phone Accessories</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Wearables</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=electronics and tech&sub-category=Wearables&type=Smartwatches" onClick={removeCover}>Smartwatches</Link>
                                                <Link href="/products?category=electronics and tech&sub-category=Wearables&type=Fitness bands" onClick={removeCover}>Fitness Bands</Link>
                                                <Link href="/products?category=electronics and tech&sub-category=Wearables&type=VR Headset" onClick={removeCover}>VR Headsets</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.filterContentNavigations} data-type="fashion">
                                        <div className={styles.filterContentNav}>
                                            <h3>Women's Fashion</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Fashion&sub-category=Women's Fashion&type=Clothing" onClick={removeCover}>Clothing</Link>
                                                <Link href="/products?category=Fashion&sub-category=Women's Fashion&type=Shoes" onClick={removeCover}>Shoes</Link>
                                                <Link href="/products?category=Fashion&sub-category=Women's Fashion&type=Jewery" onClick={removeCover}>Jewery</Link>
                                                <Link href="/products?category=Fashion&sub-category=Women's Fashion&type=Watches" onClick={removeCover}>Watches</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Men's Fahion</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Fashion&sub-category=Men's Fashion&type=Clothing" onClick={removeCover}>Clothing</Link>
                                                <Link href="/products?category=Fashion&sub-category=Men's Fashion&type=Shoes" onClick={removeCover}>Shoes</Link>
                                                <Link href="/products?category=Fashion&sub-category=Men's Fashion&type=Caps" onClick={removeCover}>Caps</Link>
                                                <Link href="/products?category=Fashion&sub-category=Men's Fashion&type=Watches" onClick={removeCover}>Watches</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Kids & Baby Fashion</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Fashion&sub-category=Kids and Baby Fashion&type=Clothing" onClick={removeCover}>Clothing</Link>
                                                <Link href="/products?category=Fashion&sub-category=Kids and Baby Fashion&type=Shoes" onClick={removeCover}>Shoes</Link>
                                                <Link href="/products?category=Fashion&sub-category=Kids and Baby Fashion&type=Jewery" onClick={removeCover}>Assessories</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.filterContentNavigations} data-type="home">
                                        <div className={styles.filterContentNav}>
                                            <h3>Dining & Kitchen</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Home&sub-category=Dining and Kitchen&type=Cookware" onClick={removeCover}>Cookware</Link>
                                                <Link href="/products?category=Home&sub-category=Dining and Kitchen&type=Utensils" onClick={removeCover}>Utensils</Link>
                                                <Link href="/products?category=Home&sub-category=Dining and Kitchen&type=Tableware" onClick={removeCover}>Tableware</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Home Decor</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Home&sub-category=Home Decor&type=Wall Art" onClick={removeCover}>Wall Art</Link>
                                                <Link href="/products?category=Home&sub-category=Home Decor&type=Vases" onClick={removeCover}>Vases</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Home Essentials</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Home&sub-category=Home Essentials&type=Furniture" onClick={removeCover}>Furniture</Link>
                                                <Link href="/products?category=Home&sub-category=Home Essentials&type=Bedding" onClick={removeCover}>Bedding</Link>
                                                <Link href="/products?category=Home&sub-category=Home Essentials&type=Rugs" onClick={removeCover}>Rugs</Link>
                                                <Link href="/products?category=Home&sub-category=Home Essentials&type=Curtains and Windows" onClick={removeCover}>Curtains & Window</Link>
                                                <Link href="/products?category=Home&sub-category=Home Essentials&type=Lightening and Ceiling Fans" onClick={removeCover}>Lighing & Ceilins Fans</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Appliances</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Home&sub-category=Appliances&type=Blenders" onClick={removeCover}>Blenders</Link>
                                                <Link href="/products?category=Home&sub-category=Appliances&type=Air Fryers" onClick={removeCover}>Air Fryers</Link>
                                                <Link href="/products?category=Home&sub-category=Appliances&type=Electric Jugs" onClick={removeCover}>Electric Jugs</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Luggage & Travel</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Home&sub-category=Luggage and Travel&type=Suitcases" onClick={removeCover}>Suitcases</Link>
                                                <Link href="/products?category=Home&sub-category=Luggage and Travel&type=Bag Packs" onClick={removeCover}>Bag Packs</Link>
                                                <Link href="/products?category=Home&sub-category=Luggage and Travel&type=Travel Accessories" onClick={removeCover}>Travel Assessories</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Building Materials</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Home&sub-category=Building Material&type=Plumbing" onClick={removeCover}>Plumbing</Link>
                                                <Link href="/products?category=Home&sub-category=Building Material&type=Electrical" onClick={removeCover}>Electrical</Link>
                                                <Link href="/products?category=Home&sub-category=Building Material&type=Paint and Supplies" onClick={removeCover}>Paint & Supplies</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.filterContentNavigations} data-type="automative">
                                        <div className={styles.filterContentNav}>
                                            <h3>Car Accessories</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Automative&sub-category=Car Accessories&type=Tyres" onClick={removeCover}>Tyres</Link>
                                                <Link href="/products?category=Automative&sub-category=Car Accessories&type=Car Rims" onClick={removeCover}>Car Rims</Link>
                                                <Link href="/products?category=Automative&sub-category=Car Accessories&type=Cleaning Kits" onClick={removeCover}>Cleaning Kits</Link>
                                                <Link href="/products?category=Automative&sub-category=Car Accessories&type=Tools and Equipment" onClick={removeCover}>Tools & Equipment</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Motorcycle</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Automative&sub-category=Motorcycle&type=Makeup" onClick={removeCover}>Tyres</Link>
                                                <Link href="/products?category=Automative&sub-category=Motorcycle&type=Cleaning Kits" onClick={removeCover}>Cleaning Kits</Link>
                                                <Link href="/products?category=Automative&sub-category=Motorcycle&type=Accessories" onClick={removeCover}>Accessories</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Car Care</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Automative&sub-category=Car Care&type=Brake Fluid" onClick={removeCover}>Brake Fluid</Link>
                                                <Link href="/products?category=Automative&sub-category=Car Care&type=Oil" onClick={removeCover}>Oil</Link>
                                                <Link href="/products?category=Automative&sub-category=Car Care&type=Additives" onClick={removeCover}>Additives</Link>
                                                <Link href="/products?category=Automative&sub-category=Car Care&type=Lubricants" onClick={removeCover}>Lubricants</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Interior Accessories</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Automative&sub-category=Interior Design&type=Wheels" onClick={removeCover}>Wheels</Link>
                                                <Link href="/products?category=Automative&sub-category=Interior Design&type=Trackers" onClick={removeCover}>Trackers</Link>
                                                <Link href="/products?category=Automative&sub-category=Interior Design&type=Air Freshners" onClick={removeCover}>Air Fresheners</Link>
                                                <Link href="/products?category=Automative&sub-category=Interior Design&type=Seat Covers" onClick={removeCover}>Seat Covers</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.filterContentNavigations} data-type="office">
                                        <div className={styles.filterContentNav}>
                                            <h3>School Supplies</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Office&sub-category=School Supplies&type=Bag Packs" onClick={removeCover}>Bag Packs</Link>
                                                <Link href="/products?category=Office&sub-category=School Supplies&type=Calculators" onClick={removeCover}>Calculators</Link>
                                                <Link href="/products?category=Office&sub-category=School Supplies&type=Books" onClick={removeCover}>Books</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Office Accessories</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Office&sub-category=Office Accessories&type=Printer" onClick={removeCover}>Printers</Link>
                                                <Link href="/products?category=Office&sub-category=Office Accessories&type=Paper and Stationery" onClick={removeCover}>Paper & Stationery</Link>
                                                <Link href="/products?category=Office&sub-category=Office Accessories&type=Shredders" onClick={removeCover}>Shredders</Link>
                                                <Link href="/products?category=Office&sub-category=Office Accessories&type=Desk Organizers" onClick={removeCover}>Desk Organizers</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.filterContentNavigations} data-type="services">
                                        <div className={styles.filterContentNav}>
                                            <h3>Professional</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Services&sub-category=Professional&type=Pharmacy" onClick={removeCover}>Pharmacy</Link>
                                                <Link href="/products?category=Services&sub-category=Professional&type=Auto Services" onClick={removeCover}>Auto Services</Link>
                                                <Link href="/products?category=Services&sub-category=Professional&type=Financial Services" onClick={removeCover}>Financial Services</Link>
                                                <Link href="/products?category=Services&sub-category=Professional&type=Optical Services" onClick={removeCover}>Optical Services</Link>
                                                <Link href="/products?category=Services&sub-category=Professional&type=Cleaning Services" onClick={removeCover}>Cleaning Services</Link>
                                                <Link href="/products?category=Services&sub-category=Professional&type=Fitness Services" onClick={removeCover}>Fitness Services</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </>
                :
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
                                {user ? (
                                    <a href="/user" style={{ textDecoration: 'none' }}  >
                                        <Avatar sx={{ bgcolor: '#1976d2', cursor: 'pointer' }}>
                                            {username ? username.charAt(0).toUpperCase() : 'U'}
                                        </Avatar>
                                    </a>
                                ) : (
                                    <div className={`${styles.visitor} ${userPresent ? styles.hide : ""}`}>
                                        <Link href="/login">
                                            <i className="fa fa-user"></i>
                                        </Link>
                                    </div>
                                )}
                                <li className={styles.navItem}>
                                    <Link href={"/cart"} className={styles.shoppingCart}>
                                        <div className={styles.shoppingCartImg}>
                                            <i className="fa fa-shopping-cart"></i>
                                            <p>
                                                {numberOfItemsInCart > 0 ? numberOfItemsInCart : ""}
                                            </p>
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
                                        <Typography color="white">
                                            Become a Vendor
                                        </Typography>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.headerBottom}>
                            <div className={styles.filterForm}>
                                <label>Filter by Category</label>
                                <button onClick={filterClicked} style={{
                                    border: `3px solid ${borderColor}`,
                                }} className={styles.filterOptions}>
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
                                                <Link href="/products?category=Daily Essentials&sub-category=Grocery&type=Fresh Product" onClick={removeCover}>Fresh Products</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Grocery&type=Meat and Seafood" onClick={removeCover}>Meat & Seafood</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Grocery&type=Dairy and Eggs" onClick={removeCover}>Dairy & Eggs</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Grocery&type=Bakery" onClick={removeCover}>Bakery</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Grocery&type=Pantry Staples" onClick={removeCover}>Pantry Staples</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Grocery&type=Beverages" onClick={removeCover}>Beverages</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Grocery&type=Snacks and Candy" onClick={removeCover}>Snacks & Candy</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Beauty</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Daily Essentials&sub-category=Beauty&type=Makeup" onClick={removeCover}>Makeup</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Beauty&type=Skincare" onClick={removeCover}>Skincare</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Beauty&type=Haircare" onClick={removeCover}>Haircare</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Beauty&type=Personal Care" onClick={removeCover}>Personal Care</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Beauty&type=Fragrance" onClick={removeCover}>Fragrance</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Health</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Daily Essentials&sub-category=Health&type=Vitamins" onClick={removeCover}>Vitamins</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Health&type=Health Monitor" onClick={removeCover}>Health Monitor</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Health&type=Supplement" onClick={removeCover}>Supplement</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Health&type=First Aid" onClick={removeCover}>First Aid</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Health&type=Vision Care" onClick={removeCover}>Vision care</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Health&type=Wellness Product" onClick={removeCover}>Wellness Product</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Baby & Maternity</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Daily Essentials&sub-category=Baby and Marternity&type=Baby Clothing" onClick={removeCover}>Baby Clothing</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Baby and Marternity&type=Diapers and Wipes" onClick={removeCover}>Diapers & Wipes</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Baby and Marternity&type=Feeding Supplies" onClick={removeCover}>Feeding Supplies</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Baby and Marternity&type=Nursery" onClick={removeCover}>Nursery (Cribs & Bedding)</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Baby and Marternity&type=Strollers and Car Seats" onClick={removeCover}>Strollers and Car Seats</Link>
                                                <Link href="/products?category=Daily Essentials&sub-category=Baby and Marternity&type=Maternity Clothing" onClick={removeCover}>Maternity Clothing</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.filterContentNavigations} data-type="electronics">
                                        <div className={styles.filterContentNav}>
                                            <h3>Computers</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Computers&type=Monitor" onClick={removeCover}>Monitor</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Computers&type=Digital Whiteboard" onClick={removeCover}>Digital Whiteboard</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Computers&type=Desktops" onClick={removeCover}>Desktops</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Computers&type=Laptops" onClick={removeCover}>Laptops</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Computers&type=Macbooks" onClick={removeCover}>Macbooks</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Computers&type=Computer Assessories" onClick={removeCover}>Computer Assessories</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Smart Homes</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Smart Homes&type=Plugs and Outlets" onClick={removeCover}>Plugs & Outlets</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Smart Homes&type=Detectors and Sensors" onClick={removeCover}>Detectors & Sensors</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Smart Homes&type=Wifi and Networking" onClick={removeCover}>Wifi & Networking</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Smart Homes&type=Cameras" onClick={removeCover}>Cameras</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Smart Homes&type=Locks and Entry" onClick={removeCover}>Locks & Entry</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Smart Homes&type=Home Lightening" onClick={removeCover}>Home Lightening</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Electronics</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Electronics&type=Vitamins" onClick={removeCover}>Televisions</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Electronics&type=Cameras" onClick={removeCover}>Cameras</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Electronics&type=Home Audio" onClick={removeCover}>Home Audio</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Electronics&type=Sewing Machine" onClick={removeCover}>Sewing Machine</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Electronics&type=Generator" onClick={removeCover}>Generators</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Electronics&type=Portable Power" onClick={removeCover}>Portable Power</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Gaming</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Electronics and tech&sub-category=Gaming&type=Playstation Console" onClick={removeCover} >PlayStation Console</Link>
                                                <Link href="/products?category=Electronics and tech&sub-category=Gaming&type=Gaming Headset" onClick={removeCover} >Gaming Headset</Link>
                                                <Link href="/products?category=Electronics and tech&sub-category=Gaming&type=Controllers" onClick={removeCover} >Controllers</Link>
                                                <Link href="/products?category=Electronics and tech&sub-category=Gaming&type=Gaming Merchandise" onClick={removeCover} >Gaming Merchandise</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Phones & Tablets</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Phones and Tablets&type=iPhone" onClick={removeCover} >iPhone</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Phones and Tablets&type=Android" onClick={removeCover} >Andriod</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Phones and Tablets&type=Tablets" onClick={removeCover} >Tablets</Link>
                                                <Link href="/products?category=Electronics and Tech&sub-category=Phones and Tablets&type=Phone Accessories" onClick={removeCover} >Phone Accessories</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Wearables</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=electronics and tech&sub-category=Wearables&type=Smartwatches" onClick={removeCover}>Smartwatches</Link>
                                                <Link href="/products?category=electronics and tech&sub-category=Wearables&type=Fitness bands" onClick={removeCover}>Fitness Bands</Link>
                                                <Link href="/products?category=electronics and tech&sub-category=Wearables&type=VR Headset" onClick={removeCover}>VR Headsets</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.filterContentNavigations} data-type="fashion">
                                        <div className={styles.filterContentNav}>
                                            <h3>Women's Fashion</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Fashion&sub-category=Women's Fashion&type=Clothing" onClick={removeCover}>Clothing</Link>
                                                <Link href="/products?category=Fashion&sub-category=Women's Fashion&type=Shoes" onClick={removeCover}>Shoes</Link>
                                                <Link href="/products?category=Fashion&sub-category=Women's Fashion&type=Jewery" onClick={removeCover}>Jewery</Link>
                                                <Link href="/products?category=Fashion&sub-category=Women's Fashion&type=Watches" onClick={removeCover}>Watches</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Men's Fahion</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Fashion&sub-category=Men's Fashion&type=Clothing" onClick={removeCover}>Clothing</Link>
                                                <Link href="/products?category=Fashion&sub-category=Men's Fashion&type=Shoes" onClick={removeCover}>Shoes</Link>
                                                <Link href="/products?category=Fashion&sub-category=Men's Fashion&type=Caps" onClick={removeCover}>Caps</Link>
                                                <Link href="/products?category=Fashion&sub-category=Men's Fashion&type=Watches" onClick={removeCover}>Watches</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Kids & Baby Fashion</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Fashion&sub-category=Kids and Baby Fashion&type=Clothing" onClick={removeCover}>Clothing</Link>
                                                <Link href="/products?category=Fashion&sub-category=Kids and Baby Fashion&type=Shoes" onClick={removeCover}>Shoes</Link>
                                                <Link href="/products?category=Fashion&sub-category=Kids and Baby Fashion&type=Jewery" onClick={removeCover}>Assessories</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.filterContentNavigations} data-type="home">
                                        <div className={styles.filterContentNav}>
                                            <h3>Dining & Kitchen</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Home&sub-category=Dining and Kitchen&type=Cookware" onClick={removeCover}>Cookware</Link>
                                                <Link href="/products?category=Home&sub-category=Dining and Kitchen&type=Utensils" onClick={removeCover}>Utensils</Link>
                                                <Link href="/products?category=Home&sub-category=Dining and Kitchen&type=Tableware" onClick={removeCover}>Tableware</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Home Decor</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Home&sub-category=Home Decor&type=Wall Art" onClick={removeCover}>Wall Art</Link>
                                                <Link href="/products?category=Home&sub-category=Home Decor&type=Vases" onClick={removeCover}>Vases</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Home Essentials</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Home&sub-category=Home Essentials&type=Furniture" onClick={removeCover}>Furniture</Link>
                                                <Link href="/products?category=Home&sub-category=Home Essentials&type=Bedding" onClick={removeCover}>Bedding</Link>
                                                <Link href="/products?category=Home&sub-category=Home Essentials&type=Rugs" onClick={removeCover}>Rugs</Link>
                                                <Link href="/products?category=Home&sub-category=Home Essentials&type=Curtains and Windows" onClick={removeCover}>Curtains & Window</Link>
                                                <Link href="/products?category=Home&sub-category=Home Essentials&type=Lightening and Ceiling Fans" onClick={removeCover}>Lighing & Ceilins Fans</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Appliances</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Home&sub-category=Appliances&type=Blenders" onClick={removeCover}>Blenders</Link>
                                                <Link href="/products?category=Home&sub-category=Appliances&type=Air Fryers" onClick={removeCover}>Air Fryers</Link>
                                                <Link href="/products?category=Home&sub-category=Appliances&type=Electric Jugs" onClick={removeCover}>Electric Jugs</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Luggage & Travel</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Home&sub-category=Luggage and Travel&type=Suitcases" onClick={removeCover}>Suitcases</Link>
                                                <Link href="/products?category=Home&sub-category=Luggage and Travel&type=Bag Packs" onClick={removeCover}>Bag Packs</Link>
                                                <Link href="/products?category=Home&sub-category=Luggage and Travel&type=Travel Accessories" onClick={removeCover}>Travel Assessories</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Building Materials</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Home&sub-category=Building Material&type=Plumbing" onClick={removeCover}>Plumbing</Link>
                                                <Link href="/products?category=Home&sub-category=Building Material&type=Electrical" onClick={removeCover}>Electrical</Link>
                                                <Link href="/products?category=Home&sub-category=Building Material&type=Paint and Supplies" onClick={removeCover}>Paint & Supplies</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.filterContentNavigations} data-type="automative">
                                        <div className={styles.filterContentNav}>
                                            <h3>Car Accessories</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Automative&sub-category=Car Accessories&type=Tyres" onClick={removeCover}>Tyres</Link>
                                                <Link href="/products?category=Automative&sub-category=Car Accessories&type=Car Rims" onClick={removeCover}>Car Rims</Link>
                                                <Link href="/products?category=Automative&sub-category=Car Accessories&type=Cleaning Kits" onClick={removeCover}>Cleaning Kits</Link>
                                                <Link href="/products?category=Automative&sub-category=Car Accessories&type=Tools and Equipment" onClick={removeCover}>Tools & Equipment</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Motorcycle</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Automative&sub-category=Motorcycle&type=Makeup" onClick={removeCover}>Tyres</Link>
                                                <Link href="/products?category=Automative&sub-category=Motorcycle&type=Cleaning Kits" onClick={removeCover}>Cleaning Kits</Link>
                                                <Link href="/products?category=Automative&sub-category=Motorcycle&type=Accessories" onClick={removeCover}>Accessories</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Car Care</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Automative&sub-category=Car Care&type=Brake Fluid" onClick={removeCover}>Brake Fluid</Link>
                                                <Link href="/products?category=Automative&sub-category=Car Care&type=Oil" onClick={removeCover}>Oil</Link>
                                                <Link href="/products?category=Automative&sub-category=Car Care&type=Additives" onClick={removeCover}>Additives</Link>
                                                <Link href="/products?category=Automative&sub-category=Car Care&type=Lubricants" onClick={removeCover}>Lubricants</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Interior Accessories</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Automative&sub-category=Interior Design&type=Wheels" onClick={removeCover}>Wheels</Link>
                                                <Link href="/products?category=Automative&sub-category=Interior Design&type=Trackers" onClick={removeCover}>Trackers</Link>
                                                <Link href="/products?category=Automative&sub-category=Interior Design&type=Air Freshners" onClick={removeCover}>Air Fresheners</Link>
                                                <Link href="/products?category=Automative&sub-category=Interior Design&type=Seat Covers" onClick={removeCover}>Seat Covers</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.filterContentNavigations} data-type="office">
                                        <div className={styles.filterContentNav}>
                                            <h3>School Supplies</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Office&sub-category=School Supplies&type=Bag Packs" onClick={removeCover}>Bag Packs</Link>
                                                <Link href="/products?category=Office&sub-category=School Supplies&type=Calculators" onClick={removeCover}>Calculators</Link>
                                                <Link href="/products?category=Office&sub-category=School Supplies&type=Books" onClick={removeCover}>Books</Link>
                                            </div>
                                        </div>
                                        <div className={styles.filterContentNav}>
                                            <h3>Office Accessories</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Office&sub-category=Office Accessories&type=Printer" onClick={removeCover}>Printers</Link>
                                                <Link href="/products?category=Office&sub-category=Office Accessories&type=Paper and Stationery" onClick={removeCover}>Paper & Stationery</Link>
                                                <Link href="/products?category=Office&sub-category=Office Accessories&type=Shredders" onClick={removeCover}>Shredders</Link>
                                                <Link href="/products?category=Office&sub-category=Office Accessories&type=Desk Organizers" onClick={removeCover}>Desk Organizers</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.filterContentNavigations} data-type="services">
                                        <div className={styles.filterContentNav}>
                                            <h3>Professional</h3>
                                            <div className={styles.filterContentNavigationList}>
                                                <Link href="/products?category=Services&sub-category=Professional&type=Pharmacy" onClick={removeCover}>Pharmacy</Link>
                                                <Link href="/products?category=Services&sub-category=Professional&type=Auto Services" onClick={removeCover}>Auto Services</Link>
                                                <Link href="/products?category=Services&sub-category=Professional&type=Financial Services" onClick={removeCover}>Financial Services</Link>
                                                <Link href="/products?category=Services&sub-category=Professional&type=Optical Services" onClick={removeCover}>Optical Services</Link>
                                                <Link href="/products?category=Services&sub-category=Professional&type=Cleaning Services" onClick={removeCover}>Cleaning Services</Link>
                                                <Link href="/products?category=Services&sub-category=Professional&type=Fitness Services" onClick={removeCover}>Fitness Services</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    );
}

export default Header;
