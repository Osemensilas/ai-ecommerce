import styles from "./css/page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.headerBottom}>
        <form className={styles.filterForm}>
            <label htmlFor="filter">Filter by Category</label>
            <select name="filter" id="filter" className={styles.filterOptions}>
                <option value="all products">All Products</option>
            </select>
        </form>
        <ul className={styles.btnNavList}>
            <li className={styles.btnNavItem}><button>Top Rates</button></li>
            <li className={styles.btnNavItem}><button>New Arrial</button></li>
            <li className={styles.btnNavItem}><button>Special Deals</button></li>
            <li className={styles.btnNavItem}><button>Gift Shop</button></li>
        </ul>
      </div>
    </div>
  );
}
