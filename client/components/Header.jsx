// import styles from "../app/css/header.module.css";
import styles from "../app/css/header.module.css";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "@mui/material";

const Header = () => {
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
                            <div className={styles.activeUser}>
                                <div className="">
                                    <i className="fa fa-user"></i>
                                    Solo-HiTech
                                </div>
                            </div>
                            <div className={styles.visitor}>

                            </div>
                        </li>
                        <li className={styles.navItem}>
                            <Link href={"/"} className={styles.shoppingCart}>
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
                {/* <div className={styles.headerBottom}>
                <form className={styles.filterForm}>
                    <label htmlFor="filter">Filter by Category</label>
                    <select name="filter" id="filter" className={styles.filterOptions}>
                        <option value="all products">All Products</option>
                    </select>
                </form>
                <ul>
                    <li><button>Top Rates</button></li>
                    <li><button>New Arrial</button></li>
                    <li><button>Special Deals</button></li>
                    <li><button>Gift Shop</button></li>
                </ul>
            </div> */}
            </header>
            <div className={styles.headerBottom}>
                <form className={styles.filterForm}>
                    <label htmlFor="filter">Filter by Category</label>
                    <select name="filter" id="filter" className={styles.filterOptions}>
                        <option value="all products">All Products</option>
                    </select>
                </form>
                <ul>
                    <li><button>Top Rates</button></li>
                    <li><button>New Arrial</button></li>
                    <li><button>Special Deals</button></li>
                    <li><button>Gift Shop</button></li>
                </ul>
            </div>

        </>
    );
}

export default Header;
