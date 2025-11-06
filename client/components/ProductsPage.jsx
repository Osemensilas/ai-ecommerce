'use client';

import styles from "../app/css/product.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

export default function ProductsPage() {
  const searchParams = useSearchParams();

  const category = searchParams.get("category") || "All Products";
  const subCategory = searchParams.get("sub-category");
  const type = searchParams.get("type");

  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(500000);
  const [navMenu, setNavMenu] = useState([]);
  const [brandSearch, setBrandSearch] = useState("");
  const [productBrand, setProductBrand] = useState([]);
  const [productColor, setProductColor] = useState([]);
  const [productGender, setProductGender] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedStock, setSelectedStock] = useState([]);
  const [selectedDelivery, setSelectedDelivery] = useState([]);
  const [mainFilter, setMainFilter] = useState([]);
  const [selectedMainCat, setSelectedMainCat] = useState([]);
  const [productsPerPage, setProductsPerPage] = useState(30);
  const [flashSale, setFlashSale] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);

  const minGap = 1000;

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxVal - minGap);
    setMinVal(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minVal + minGap);
    setMaxVal(value);
  };

  useEffect(() => {
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
    } else {
      setNavMenu([]);
    }
  }, [category])

  const filterOptions = {
    shoes: ["Color", "Size", "Brand", "Material"],
    clothing: ["Size", "Color", "Material", "Brand"],
    jewelry: ["Material", "Color", "Brand"],
    watches: ["Brand", "Material", "Color"],
    bags: ["Brand", "Material", "Color", "Size"],
    laptops: ["Brand", "Processor", "RAM", "Storage"],
    phones: ["Brand", "Storage", "RAM", "Color"],
    tablets: ["Brand", "Storage", "RAM", "Color"],
    smartwatches: ["Brand", "Color", "Material"],
    vrheadset: ["Brand", "Compatibility", "Color"],
    skincare: ["Brand", "Skin Type", "Concern"],
    makeup: ["Brand", "Shade", "Skin Type"],
    haircare: ["Brand", "Hair Type", "Size"],
    fragrances: ["Brand", "Fragrance Type", "Size"],
    furniture: ["Material", "Color", "Size", "Brand"],
    bedding: ["Material", "Size", "Color"],
    rugs: ["Material", "Size", "Color"],
    curtains: ["Material", "Size", "Color"],
    appliances: ["Brand", "Power", "Capacity", "Color"],
    caraccessories: ["Brand", "Type", "Compatibility"],
    motorcycle: ["Brand", "Type", "Compatibility"],
    babyclothing: ["Size", "Age Range", "Color", "Brand"],
    diapers: ["Size", "Age Range", "Brand"],
    toys: ["Age Range", "Material", "Brand"],
    android: ["Brand", "Color", "RAM", "Storage"], // Fixed typo
    iphone: ["Brand", "Color", "RAM", "Storage"],
    laptop: ["Brand", "Color", "RAM", "Storage", "Processor"]
  };

  useEffect(() => {
    if (!type) {
      setMainFilter([]);
      return;
    }

    const options = filterOptions[type] || [];
    const withoutBrand = options.filter(opt => opt !== "Brand");
    setMainFilter(["Brand", ...new Set(withoutBrand)]);

  async function getProducts() {
      const url = `https://ahiaserver-api.onrender.com/api/products/filter?category=${category}&subcategory=${subCategory}`;
      console.log(url);
      const newUrl = "https://ahiaserver-api.onrender.com/api/products/filter?category=electronics and tech&subcategory=phones and tablets&typeCategory=andriod";
      try {
        const response = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
            "Host": "api.ahiaglobal.com",
          },
        });

        console.log(response.data);

        setDbProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    getProducts();
  }, [type]);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setProductsPerPage(30);
      } else if (window.innerWidth < 1280 && window.innerWidth >= 1001) {
        setProductsPerPage(28);
      } else if (window.innerWidth < 1000 && window.innerWidth >= 768) {
        setProductsPerPage(30);
      } else {
        setProductsPerPage(30);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleRatingChange = (e) => {
    const rating = e.target.value;
    if (e.target.checked) {
      setSelectedRatings([...selectedRatings, rating]);
    } else {
      setSelectedRatings(selectedRatings.filter(r => r !== rating));
    }
  };

  const availabilityChange = (e) => {
    const stockResult = e.target.value;
    if (e.target.checked) {
      setSelectedStock([...selectedStock, stockResult]);
    } else {
      setSelectedStock(selectedStock.filter(r => r !== stockResult));
    }
  };

  const shippingChange = (e) => {
    const delivery = e.target.value;
    if (e.target.checked) {
      setSelectedDelivery([...selectedDelivery, delivery]);
    } else {
      setSelectedDelivery(selectedDelivery.filter(r => r !== delivery));
    }
  };

  const categoryChanged = (e, field) => {
    const value = e.target.value.toLowerCase();
    if (e.target.checked) {
      setSelectedMainCat([...selectedMainCat, { field, value }]);
    } else {
      setSelectedMainCat(
        selectedMainCat.filter(item => !(item.field === field && item.value === value))
      );
    }
  };

  useEffect(() => {
    const flashSaleProducts = dbProducts.filter(item => item.flashSale);

    setFlashSale(flashSaleProducts.slice(0, 18));
  }, [])

  const removeFilter = () => {

  }

  const filterClicked = () => {
    
  }

  const filteredProducts = dbProducts.filter((item) => {

    const matchCategory = category === "All Products" || category.toLowerCase() === item.category.toLowerCase();
    //const matchSubCategory = subCategory.toLowerCase() === item.subcategory.toLowerCase();

    return matchCategory;
  });

  console.log(filteredProducts);

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className={styles.page}>
        <div className={styles.pageLocation}>
          <Link href={`/products?category=${category}`} style={{ textTransform: "capitalize" }}>{category}</Link>
          <div className={`${styles.pageLocation} ${type ? "" : styles.hide}`}>
            <i className="fa fa-angle-right"></i>
            <Link href={`/products?category=${category}&type=${type}`}>{type}</Link> {/* Fixed href */}
          </div>
        </div>
        <div className={styles.header}>
          <h2 style={{ textTransform: "capitalize" }}>{category}</h2>
        </div>
      </div>
      <div className={styles.products}>
        <div className={styles.productsLeft}>
          <button onClick={removeFilter} className={styles.productsLeftCancelBtn}>
            <i className="fa fa-times"></i>
          </button>
          <div className={styles.productsFilterContainer}>
            <h2>Price Range (₦)</h2>
            <form className={styles.priceRangeForm}>
              <div className={styles.sliderWrapper}>
                <input type="range" min="0" max="500000" step="1000" value={minVal} onChange={handleMinChange} className={`${styles.range} ${styles.one}`} />
                <input type="range" min="0" max="500000" step="1000" value={maxVal} onChange={handleMaxChange} className={`${styles.range} ${styles.two}`} />
                <div className={styles.sliderTrack} style={{ left: `${(minVal / 500000) * 100}%`, right: `${100 - (maxVal / 500000) * 100}%` }}></div>
              </div>
              <div className={styles.rangeContainer}>
                <input type="text" onChange={(e) => setMinVal(Number(e.target.value))} value={Number(minVal).toLocaleString()} />
                <div className={styles.line}></div>
                <input type="text" onChange={(e) => setMaxVal(Number(e.target.value))} value={Number(maxVal).toLocaleString()} />
              </div>
            </form>
            {mainFilter.map((item, index) => (
              <div key={index}>
                {item === "Brand" ? (
                  <>
                    <h2>Brand</h2>
                    <div className={styles.categoryFilterContainer}>
                      <form className={styles.filterSearch}>
                        <input type="text" value={brandSearch} onChange={(e) => setBrandSearch(e.target.value)} placeholder="Search brand ..." />
                      </form>
                      {productBrand.map((brand, i) => (
                        <div className={styles.categoryFilterLabel} key={i}>
                          <input type="checkbox" onChange={(e) => categoryChanged(e, "brand")} value={brand} id={brand} /> {/* Added value */}
                          <label htmlFor={brand}>{brand}</label>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <h2>{item}</h2>
                    <div className={styles.categoryFilterContainer}>
                      {[
                        ...new Set(
                          dbProducts
                            .filter((p) => p.type === type && p[item]) // Check if p[item] exists
                            .map((p) => p[item])
                            .filter(Boolean)
                        ),
                      ].map((value, i) => (
                        <div className={styles.categoryFilterLabel} key={i}>
                          <input type="checkbox" onChange={(e) => categoryChanged(e, item)} value={value} id={`${item}-${value}`} /> {/* Added value and unique id */}
                          <label htmlFor={`${item}-${value}`}>{value}</label>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
            <h2>Customer Rating</h2>
            <div className={styles.categoryFilterContainer}>
              <div className={styles.categoryFilterLabel}>
                <input type="checkbox" value={5} onChange={handleRatingChange} id="fiveplus" />
                <label htmlFor="fiveplus">5+</label>
              </div>
              <div className={styles.categoryFilterLabel}>
                <input type="checkbox" value={4} onChange={handleRatingChange} id="fourplus" />
                <label htmlFor="fourplus">4+</label>
              </div>
              <div className={styles.categoryFilterLabel}>
                <input type="checkbox" value={3} onChange={handleRatingChange} id="threeplus" />
                <label htmlFor="threeplus">3+</label>
              </div>
              <div className={styles.categoryFilterLabel}>
                <input type="checkbox" value={2} onChange={handleRatingChange} id="twoplus" />
                <label htmlFor="twoplus">2+</label>
              </div>
            </div>
            <h2>Availability</h2>
            <div className={styles.categoryFilterContainer}>
              <div className={styles.categoryFilterLabel}>
                <input type="checkbox" value="in-stock" onChange={availabilityChange} id="instock" />
                <label htmlFor="instock">In-Stock</label>
              </div>
              <div className={styles.categoryFilterLabel}>
                <input type="checkbox" value="pre-order" onChange={availabilityChange} id="preorder" />
                <label htmlFor="preorder">Pre-Order</label>
              </div>
            </div>
            <h2>Shipping Option</h2>
            <div className={styles.categoryFilterContainer}>
              <div className={styles.categoryFilterLabel}>
                <input type="checkbox" value="free-shipping" onChange={shippingChange} id="freeshipping" />
                <label htmlFor="freeshipping">Free Shipping</label>
              </div>
              <div className={styles.categoryFilterLabel}>
                <input type="checkbox" value="same-day-delivery" onChange={shippingChange} id="samedaydelivery" />
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
                    <div className={styles.navMenuLinkMainContainer}>
                      <Link href={item.url} className={`${styles.catHeading} ${item.type === type ? styles.active : ""}`} >
                        {item.item}
                      </Link>
                    </div>
                    <div className={`${styles.navMenuBottomLine} ${item.type === type ? styles.active : ""}`} ></div>
                  </div>
                ))}
              </div>
              <button onClick={filterClicked} className={styles.filterBtnNew}>
                <i className="fa fa-sliders-h"></i>
                <span>Filter</span>
              </button>
            </div>
          ) : (
            <div className={styles.productsRightTop}></div>
          )}

          <div className={styles.productsRightBottom}>
            {currentProducts.length === 0 ? (
              <p>No product in the category</p>
            ) : (
              currentProducts.map((item, index) => (
                <div key={index} className={styles.productCard}>
                  <div className={styles.productCardTop}>
                    <Image src={item.images[0]} className={styles.productImg} alt={item.name} fill sizes="(max-width: 768px) 100vw, 50vw" /> {/* Added sizes for perf */}
                  </div>
                  <div className={styles.productCardBottom}>
                    <div className={styles.productCartPriceContainer}>
                      <h2>₦{Number(item.price.current).toLocaleString()}</h2>
                      {/* <p>{item.stock === "in-stock" ? "In Stock" : item.stock}</p> */}
                    </div>
                    <div className={styles.productCardName}>
                      <h2>{item.name}</h2>
                    </div>
                    <div className={styles.productCardReview}>
                      <div className={styles.productCardReviewItem}>
                        <div className={styles.productCardStars}>
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className="fa fa-star" style={{ color: i < Math.floor(item.rating) ? 'gold' : 'gray' }}></i> // Dynamic stars
                          ))}
                        </div>
                        <p>{item.rating}</p>
                      </div>
                      <Link href={`/product?product_id=${item._id}`}> {/* Use dynamic id */}
                        <i className="fa fa-arrow-right"></i> Add
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className={styles.paginationContainer}>
            <ul className={styles.pagination}>
              <li className={styles.btnLi}>
                <button
                  className={`${styles.btn} ${currentPage === 1 ? styles.hide : ""}`}
                  disabled={currentPage === 1}
                  onClick={() => paginate(currentPage - 1)}
                >
                  Prev
                </button>
              </li>
              {totalPages > 1 && (
                <li className={styles.pageLi}>
                  <button
                    onClick={() => paginate(1)}
                    className={currentPage === 1 ? styles.currentPage : ""}
                  >
                    1
                  </button>
                </li>
              )}
              {currentPage > 3 && <li className={styles.pageLi}>…</li>}
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(
                  (num) =>
                    num !== 1 &&
                    num !== totalPages &&
                    num >= currentPage - 1 &&
                    num <= currentPage + 1
                )
                .map((num) => (
                  <li key={num} className={styles.pageLi}>
                    <button
                      onClick={() => paginate(num)}
                      className={num === currentPage ? styles.currentPage : ""}
                    >
                      {num}
                    </button>
                  </li>
                ))}
              {currentPage < totalPages - 2 && <li className={styles.pageLi}>…</li>}
              {totalPages > 1 && (
                <li className={styles.pageLi}>
                  <button
                    onClick={() => paginate(totalPages)}
                    className={currentPage === totalPages ? styles.currentPage : ""}
                  >
                    {totalPages}
                  </button>
                </li>
              )}
              <li className={styles.btnLi}>
                <button
                  className={`${styles.btn} ${currentPage === totalPages ? styles.hide : ""}`}
                  disabled={currentPage === totalPages}
                  onClick={() => paginate(currentPage + 1)}
                >
                  Next
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.otherCategories}>
        <div className={styles.sigleCategory}>
          <header className={styles.otherCategoriesHeader}>
            <h2>Flash Sales</h2>
          </header>
          <div className={styles.categoryContent}>
            <div className={styles.ccContainer}>
              {
                flashSale.map((item, index) => (
                  <div key={index} className={styles.productCard}>
                    <div className={styles.productCardTop}>
                      <Image src={"/"} className={styles.productImg} alt="product image" fill />
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
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className={styles.advertContainer}>
        <div className={styles.adverContent}>
          <Image src={"/ahiaglobal1.jpg"} className={styles.advertImg} alt="advert image" fill />
        </div>
      </div>
    </>
  );
}