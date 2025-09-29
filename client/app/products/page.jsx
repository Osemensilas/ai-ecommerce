'use client';

import styles from "../css/product.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import RecentlyViewed from "@/components/RecentlyViewed";
import FAQ from "@/components/Faq";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const searchParams = useSearchParams();

  const category = searchParams.get("category") || "All Products";
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
    }else{
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
  }, [type]);

  const products = [
      { id: 1, name: "Apple iPhone 15", brand: "Apple", price: 560000, image: "phone.png", rating: 4.8, category: "phone and tablets", type: "iphone", sex: null, color: "Silver", stock: "in-stock", delivery: "free-shipping", RAM: "8GB", Storage: "256GB", flashSale: true},
      { id: 2, name: "Samsung Galaxy S23", brand: "Samsung", price: 450000, image: "phone.png", rating: 4.7, category: "phone and tablets", type: "andriod", sex: null, color: "Phantom Black", stock: "in-stock", delivery: "free-shipping", RAM: "8GB", Storage: "256GB", flashSale: true},
      { id: 3, name: "Apple iPad Pro", brand: "Apple", price: 750000, image: "ipad_pro.png", rating: 4.9, category: "phone and tablets", type: "tablets", sex: null, color: "Space Gray", stock: "in-stock", delivery: "free-shipping", RAM: "8GB", Storage: "512GB", flashSale: true},
      { id: 4, name: "Xiaomi Redmi Note 13", brand: "Xiaomi", price: 180000, image: "redmi_note13.png", rating: 4.5, category: "phone and tablets", type: "andriod", sex: null, color: "Blue", stock: "in-stock", delivery: "free-shipping", RAM: "6GB", Storage: "128GB", flashSale: true},
      { id: 5, name: "Dell XPS 15", brand: "Dell", price: 1200000, image: "xps15.png", rating: 4.7, category: "computers", type: "laptops", sex: null, color: "Silver", stock: "in-stock", delivery: "same-day-delivery", Processor: "Intel i7", RAM: "16GB", Storage: "512GB SSD", flashSale: true},
      { id: 6, name: "Apple MacBook Air M2", brand: "Apple", price: 1400000, image: "macbook_air_m2.png", rating: 4.8, category: "computers", type: "macbooks", sex: null, color: "Space Gray", stock: "in-stock", delivery: "same-day-delivery", Processor: "M2", RAM: "16GB", Storage: "512GB SSD"},
      { id: 7, name: "Sony Bravia 55-inch", brand: "Sony", price: 950000, image: "bravia55.png", rating: 4.6, category: "electronics", type: "televisions", sex: null, color: "Black", stock: "in-stock", delivery: "free-shipping", ScreenSize: "55inch", Resolution: "4K", flashSale: true},
      { id: 8, name: "Canon EOS R5", brand: "Canon", price: 2200000, image: "eos_r5.png", rating: 4.9, category: "electronics", type: "cameras", sex: null, color: "Black", stock: "in-stock", delivery: "same-day-delivery", Lens: "24-105mm", Resolution: "45MP", flashSale: true},
      { id: 9, name: "Samsung Galaxy Watch 6", brand: "Samsung", price: 200000, image: "galaxy_watch6.png", rating: 4.7, category: "wearables", type: "smartwatches", sex: null, color: "Silver", stock: "in-stock", delivery: "free-shipping", Material: "Stainless Steel", flashSale: true},
      { id: 10, name: "Oculus Quest 3", brand: "Meta", price: 350000, image: "oculus_quest3.png", rating: 4.6, category: "wearables", type: "vrheadset", sex: null, color: "White", stock: "in-stock", delivery: "free-shipping", Compatibility: "Standalone", flashSale: true},
      { id: 11, name: "Nike Air Max 270", brand: "Nike", price: 95000, image: "airmax270.png", rating: 4.5, category: "women fashion", type: "shoes", sex: "female", color: "White", stock: "in-stock", delivery: "same-day-delivery", Size: "7", Material: "Leather", flashSale: true},
      { id: 12, name: "Adidas T-Shirt", brand: "Adidas", price: 45000, image: "adidas_tshirt.png", rating: 4.4, category: "mens fashion", type: "clothing", sex: "male", color: "Black", stock: "in-stock", delivery: "free-shipping", Size: "M", Material: "Cotton", flashSale: true},
      { id: 13, name: "Gucci Gold Necklace", brand: "Gucci", price: 550000, image: "gucci_necklace.png", rating: 4.8, category: "womens fashion", type: "jewery", sex: "female", color: "Gold", stock: "in-stock", delivery: "same-day-delivery", Material: "Gold", flashSale: true},
      { id: 14, name: "Rolex Submariner", brand: "Rolex", price: 2500000, image: "rolex_submariner.png", rating: 4.9, category: "mens fashion", type: "watches", sex: "male", color: "Silver", stock: "in-stock", delivery: "free-shipping", Material: "Stainless Steel"},
      { id: 15, name: "Levi’s Kids Jeans", brand: "Levis", price: 35000, image: "levis_kids.png", rating: 4.6, category: "kids and baby fashion", type: "clothing", sex: "children", color: "Blue", stock: "in-stock", delivery: "free-shipping", Size: "5-6yrs", Material: "Denim"},
      { id: 16, name: "Huggies Diapers", brand: "Huggies", price: 45000, image: "huggies.png", rating: 4.7, category: "baby & maternity", type: "diapers and wipes", sex: null, color: "White", stock: "in-stock", delivery: "free-shipping", Size: "M", AgeRange: "6-12 months"},
      { id: 17, name: "Philips Air Fryer XXL", brand: "Philips", price: 85000, image: "philips_airfryer.png", rating: 4.7, category: "home and living", type: "appliances", sex: null, color: "Black", stock: "in-stock", delivery: "free-shipping", Power: "1500W", Capacity: "5L"},
      { id: 18, name: "Ikea Wooden Chair", brand: "Ikea", price: 45000, image: "ikea_chair.png", rating: 4.5, category: "home and living", type: "furniture", sex: null, color: "Brown", stock: "in-stock", delivery: "same-day-delivery", Material: "Wood", Size: "Standard"},
      { id: 19, name: "Tefal Cookware Set", brand: "Tefal", price: 65000, image: "tefal_cookware.png", rating: 4.6, category: "dining and kitchen", type: "cookware", sex: null, color: "Black", stock: "in-stock", delivery: "free-shipping", Material: "Aluminium", Pieces: "10pcs"},
      { id: 20, name: "Samsonite Travel Bag", brand: "Samsonite", price: 120000, image: "samsonite.png", rating: 4.7, category: "luggage and travel", type: "bag packs", sex: null, color: "Blue", stock: "in-stock", delivery: "free-shipping", Material: "Polyester", Size: "Large"},
      { id: 21, name: "Bosch Drill Set", brand: "Bosch", price: 95000, image: "bosch_drill.png", rating: 4.6, category: "building material", type: "tools", sex: null, color: "Green", stock: "in-stock", delivery: "same-day-delivery", Power: "500W", Pieces: "8pcs"},
      { id: 22, name: "Castrol Engine Oil", brand: "Castrol", price: 15000, image: "castrol_oil.png", rating: 4.5, category: "car care", type: "oil", sex: null, color: "Red", stock: "in-stock", delivery: "free-shipping", Type: "Synthetic", Volume: "1L"},
      { id: 23, name: "Bridgestone Tyres", brand: "Bridgestone", price: 80000, image: "bridgestone_tyres.png", rating: 4.6, category: "car accessories", type: "tyres", sex: null, color: "Black", stock: "in-stock", delivery: "same-day-delivery", Compatibility: "Universal"},
      { id: 24, name: "Kawasaki Motorcycle Tyres", brand: "Kawasaki", price: 65000, image: "kawasaki_tyres.png", rating: 4.5, category: "motorcycle", type: "tyres", sex: null, color: "Black", stock: "in-stock", delivery: "free-shipping", Compatibility: "Universal"},
      { id: 25, name: "HP DeskJet Printer", brand: "HP", price: 50000, image: "hp_printer.png", rating: 4.5, category: "office accessories", type: "printer", sex: null, color: "White", stock: "in-stock", delivery: "free-shipping", Connectivity: "Wireless"},
      { id: 26, name: "Olay Face Cream", brand: "Olay", price: 20000, image: "olay_cream.png", rating: 4.7, category: "beauty", type: "skincare", sex: "female", color: "White", stock: "in-stock", delivery: "free-shipping", SkinType: "Normal", Concern: "Hydration"},
      { id: 27, name: "Maybelline Lipstick", brand: "Maybelline", price: 10000, image: "maybelline_lipstick.png", rating: 4.5, category: "beauty", type: "makeup", sex: "female", color: "Red", stock: "in-stock", delivery: "free-shipping", Shade: "Cherry Red", SkinType: "All"},
      { id: 28, name: "L'Oreal Shampoo", brand: "L'Oreal", price: 12000, image: "loreal_shampoo.png", rating: 4.5, category: "beauty", type: "haircare", sex: "female", color: "Black", stock: "in-stock", delivery: "free-shipping", HairType: "All", Size: "400ml"},
      { id: 29, name: "Chanel No.5", brand: "Chanel", price: 95000, image: "chanel_no5.png", rating: 4.9, category: "beauty", type: "fragrances", sex: "female", color: "Transparent", stock: "in-stock", delivery: "same-day-delivery", FragranceType: "Floral", Size: "100ml"},
      { id: 30, name: "Fitbit Charge 6", brand: "Fitbit", price: 120000, image: "fitbit_charge6.png", rating: 4.6, category: "wearables", type: "fitness bands", sex: null, color: "Black", stock: "in-stock", delivery: "free-shipping", Material: "Silicone"},
      { id: 31, name: "Lenovo ThinkPad X1", brand: "Lenovo", price: 1300000, image: "thinkpad_x1.png", rating: 4.7, category: "computers", type: "laptops", sex: null, color: "Black", stock: "in-stock", delivery: "same-day-delivery", Processor: "Intel i7", RAM: "16GB", Storage: "512GB SSD"},
      { id: 32, name: "Logitech MX Master 3", brand: "Logitech", price: 35000, image: "mx_master3.png", rating: 4.8, category: "computers", type: "computer assessories", sex: null, color: "Black", stock: "in-stock", delivery: "free-shipping", Connectivity: "Wireless"},
      { id: 33, name: "Sony WH-1000XM5", brand: "Sony", price: 150000, image: "wh1000xm5.png", rating: 4.8, category: "gamining", type: "gaming headset", sex: null, color: "Black", stock: "in-stock", delivery: "same-day-delivery", Connectivity: "Wireless"},
      { id: 34, name: "PlayStation 5 Console", brand: "Sony", price: 600000, image: "ps5.png", rating: 4.9, category: "gamining", type: "playstation console", sex: null, color: "White", stock: "in-stock", delivery: "same-day-delivery", Storage: "825GB"},
      { id: 35, name: "Apple Watch Series 9", brand: "Apple", price: 250000, image: "apple_watch9.png", rating: 4.9, category: "wearables", type: "smartwatches", sex: null, color: "Black", stock: "in-stock", delivery: "free-shipping", Material: "Aluminium"},
      { id: 36, name: "Samsung Smart Plug", brand: "Samsung", price: 20000, image: "smart_plug.png", rating: 4.6, category: "smart homes", type: "plugs and outlets", sex: null, color: "White", stock: "in-stock", delivery: "free-shipping", Power: "10A"},
      { id: 37, name: "Xiaomi Motion Sensor", brand: "Xiaomi", price: 15000, image: "motion_sensor.png", rating: 4.5, category: "smart homes", type: "detectors and sensors", sex: null, color: "White", stock: "in-stock", delivery: "free-shipping", Connectivity: "Wireless"},
      { id: 38, name: "Apple AirPods Pro", brand: "Apple", price: 120000, image: "airpods_pro.png", rating: 4.8, category: "electronics", type: "home audio", sex: null, color: "White", stock: "in-stock", delivery: "same-day-delivery", Connectivity: "Wireless"},
      { id: 39, name: "Kenwood Sewing Machine", brand: "Kenwood", price: 85000, image: "kenwood_sewing.png", rating: 4.6, category: "electronics", type: "sewing machine", sex: null, color: "White", stock: "in-stock", delivery: "free-shipping", Power: "120W"},
      { id: 40, name: "Honda Generator 1kW", brand: "Honda", price: 180000, image: "honda_generator.png", rating: 4.7, category: "electronics", type: "generator", sex: null, color: "Red", stock: "in-stock", delivery: "same-day-delivery", Capacity: "1kW"},
      { id: 41, name: "Nest Security Camera", brand: "Google", price: 95000, image: "nest_camera.png", rating: 4.6, category: "smart homes", type: "cameras", sex: null, color: "White", stock: "in-stock", delivery: "free-shipping", Connectivity: "WiFi"},
      { id: 42, name: "Philips Hue Light", brand: "Philips", price: 25000, image: "hue_light.png", rating: 4.7, category: "smart homes", type: "home lightening", sex: null, color: "White", stock: "in-stock", delivery: "free-shipping", Power: "10W"},
      { id: 43, name: "Pampers Baby Diapers", brand: "Pampers", price: 50000, image: "pampers.png", rating: 4.8, category: "baby & maternity", type: "diapers and wipes", sex: null, color: "White", stock: "in-stock", delivery: "free-shipping", Size: "L", AgeRange: "12-18 months"},
      { id: 44, name: "Fisher-Price Baby Crib", brand: "Fisher-Price", price: 120000, image: "fisher_crib.png", rating: 4.7, category: "baby & maternity", type: "nursery", sex: null, color: "White", stock: "in-stock", delivery: "same-day-delivery", Material: "Wood", Size: "Standard"},
      { id: 45, name: "BabyBjorn Feeding Bottle", brand: "BabyBjorn", price: 15000, image: "babybjorn_bottle.png", rating: 4.6, category: "baby & maternity", type: "feeding supplies", sex: null, color: "Transparent", stock: "in-stock", delivery: "free-shipping", Material: "Plastic", Capacity: "250ml"},
      { id: 46, name: "Bosch Home Blender", brand: "Bosch", price: 45000, image: "bosch_blender.png", rating: 4.5, category: "home and living", type: "blenders", sex: null, color: "Silver", stock: "in-stock", delivery: "free-shipping", Power: "500W", Capacity: "1.5L"},
      { id: 47, name: "Nike Kids Sneakers", brand: "Nike", price: 35000, image: "nike_kids.png", rating: 4.6, category: "kids and baby fashion", type: "shoes", sex: "children", color: "Red", stock: "in-stock", delivery: "free-shipping", Size: "12", Material: "Leather"},
      { id: 48, name: "Adidas Kids T-Shirt", brand: "Adidas", price: 15000, image: "adidas_kids_tshirt.png", rating: 4.5, category: "kids and baby fashion", type: "clothing", sex: "children", color: "Blue", stock: "in-stock", delivery: "free-shipping", Size: "6-7yrs", Material: "Cotton"},
      { id: 49, name: "Huggies Baby Wipes", brand: "Huggies", price: 12000, image: "huggies_wipes.png", rating: 4.7, category: "baby & maternity", type: "diapers and wipes", sex: null, color: "White", stock: "in-stock", delivery: "free-shipping", Size: "Small", AgeRange: "0-6 months"},
      { id: 50, name: "Fossil Women's Watch", brand: "Fossil", price: 95000, image: "fossil_watch.png", rating: 4.6, category: "womens fashion", type: "watches", sex: "female", color: "Rose Gold", stock: "in-stock", delivery: "same-day-delivery", Material: "Stainless Steel"},
      { id: 51, name: "Samsung 27-inch Monitor", brand: "Samsung", price: 120000, image: "samsung_monitor.png", rating: 4.7, category: "computers", type: "monitor", sex: null, color: "Black", stock: "in-stock", delivery: "same-day-delivery", Size: "27inch", Resolution: "QHD"},
      { id: 52, name: "HP Pavilion Desktop", brand: "HP", price: 550000, image: "hp_pavilion.png", rating: 4.5, category: "computers", type: "desktops", sex: null, color: "Black", stock: "in-stock", delivery: "same-day-delivery", Processor: "Intel i5", RAM: "16GB", Storage: "1TB SSD"},
      { id: 53, name: "Sony Home Audio System", brand: "Sony", price: 250000, image: "sony_audio.png", rating: 4.6, category: "electronics", type: "home audio", sex: null, color: "Black", stock: "in-stock", delivery: "same-day-delivery", Connectivity: "Bluetooth"},
      { id: 54, name: "LG Smart Refrigerator", brand: "LG", price: 800000, image: "lg_fridge.png", rating: 4.8, category: "home and living", type: "appliances", sex: null, color: "Silver", stock: "in-stock", delivery: "free-shipping", Power: "200W", Capacity: "450L"},
      { id: 55, name: "Ikea Bedding Set", brand: "Ikea", price: 45000, image: "ikea_bedding.png", rating: 4.5, category: "home and living", type: "bedding", sex: null, color: "White", stock: "in-stock", delivery: "same-day-delivery", Material: "Cotton", Size: "Queen"},
      { id: 56, name: "Tefal Non-stick Pan", brand: "Tefal", price: 20000, image: "tefal_pan.png", rating: 4.6, category: "dining and kitchen", type: "cookware", sex: null, color: "Black", stock: "in-stock", delivery: "free-shipping", Material: "Aluminium", Size: "28cm"},
      { id: 57, name: "Samsonite Large Suitcase", brand: "Samsonite", price: 150000, image: "samsonite_suitcase.png", rating: 4.7, category: "luggage and travel", type: "suitcases", sex: null, color: "Black", stock: "in-stock", delivery: "free-shipping", Material: "Polycarbonate", Size: "Large"},
      { id: 58, name: "Bosch Air Compressor", brand: "Bosch", price: 95000, image: "bosch_compressor.png", rating: 4.5, category: "building material", type: "tools", sex: null, color: "Green", stock: "in-stock", delivery: "same-day-delivery", Power: "750W", Pieces: "1"},
      { id: 59, name: "Mobil 1 Synthetic Oil", brand: "Mobil", price: 25000, image: "mobil1_oil.png", rating: 4.7, category: "car care", type: "oil", sex: null, color: "Gold", stock: "in-stock", delivery: "free-shipping", Type: "Synthetic", Volume: "1L"},
      { id: 60, name: "GoPro Hero 12", brand: "GoPro", price: 350000, image: "gopro_hero12.png", rating: 4.8, category: "electronics", type: "cameras", sex: null, color: "Black", stock: "in-stock", delivery: "same-day-delivery", Lens: "24-70mm", Resolution: "5K"},
      { id: 61, name: "Apple iPhone 15 Pro", brand: "Apple", price: 650000, image: "iphone15pro.png", rating: 4.8, category: "phone and tablets", type: "iphone", sex: null, color: "Graphite", stock: "in-stock", delivery: "same-day-delivery", Storage: "256GB", RAM: "8GB"},
      { id: 62, name: "Samsung Galaxy S23", brand: "Samsung", price: 540000, image: "galaxy_s23.png", rating: 4.7, category: "phone and tablets", type: "android", sex: null, color: "Phantom Black", stock: "in-stock", delivery: "same-day-delivery", Storage: "256GB", RAM: "12GB"},
      { id: 63, name: "Apple iPad Air", brand: "Apple", price: 450000, image: "ipad_air.png", rating: 4.7, category: "phone and tablets", type: "tablets", sex: null, color: "Silver", stock: "in-stock", delivery: "free-shipping", Storage: "128GB", RAM: "8GB"},
      { id: 64, name: "Beats Studio3 Wireless", brand: "Beats", price: 120000, image: "beats_studio3.png", rating: 4.6, category: "gaming", type: "gaming headset", sex: null, color: "Black", stock: "in-stock", delivery: "same-day-delivery", Connectivity: "Wireless"},
      { id: 65, name: "Sony PlayStation 5", brand: "Sony", price: 420000, image: "ps5.png", rating: 4.9, category: "gaming", type: "playstation console", sex: null, color: "White", stock: "in-stock", delivery: "same-day-delivery", Storage: "825GB", RAM: "16GB"},
      { id: 66, name: "Fitbit Versa 4", brand: "Fitbit", price: 95000, image: "fitbit_versa4.png", rating: 4.5, category: "wearables", type: "smartwatches", sex: null, color: "Black", stock: "in-stock", delivery: "free-shipping", Material: "Silicone"},
      { id: 67, name: "Oculus Quest 3", brand: "Meta", price: 300000, image: "oculus_quest3.png", rating: 4.6, category: "wearables", type: "vr headset", sex: null, color: "White", stock: "in-stock", delivery: "same-day-delivery", Compatibility: "Android/iOS"},
      { id: 68, name: "L'Oreal Revitalift Cream", brand: "L'Oreal", price: 22000, image: "loreal_cream.png", rating: 4.5, category: "beauty", type: "skincare", sex: null, color: "White", stock: "in-stock", delivery: "free-shipping", SkinType: "Normal", Concern: "Anti-aging"},
      { id: 69, name: "Maybelline Fit Me Foundation", brand: "Maybelline", price: 12000, image: "maybelline_foundation.png", rating: 4.6, category: "beauty", type: "makeup", sex: null, color: "Beige", stock: "in-stock", delivery: "free-shipping", Shade: "Medium", SkinType: "Normal"},
      { id: 70, name: "Pantene Hair Oil", brand: "Pantene", price: 8000, image: "pantene_hairoil.png", rating: 4.5, category: "beauty", type: "haircare", sex: null, color: "Golden", stock: "in-stock", delivery: "free-shipping", HairType: "All", Size: "200ml"},
      { id: 71, name: "Chanel No.5 Perfume", brand: "Chanel", price: 150000, image: "chanel_no5.png", rating: 4.8, category: "beauty", type: "fragrance", sex: null, color: "Clear", stock: "in-stock", delivery: "same-day-delivery", FragranceType: "Floral", Size: "100ml"},
      { id: 72, name: "Ikea Coffee Table", brand: "Ikea", price: 75000, image: "ikea_coffee_table.png", rating: 4.6, category: "home and living", type: "furniture", sex: null, color: "Brown", stock: "in-stock", delivery: "same-day-delivery", Material: "Wood", Size: "120x60cm"},
      { id: 73, name: "Huggies Diapers", brand: "Huggies", price: 25000, image: "huggies_diapers.png", rating: 4.7, category: "baby & maternity", type: "diapers and wipes", sex: null, color: "White", stock: "in-stock", delivery: "free-shipping", Size: "Medium", AgeRange: "6-12 months"},
      { id: 74, name: "Fisher-Price Baby Toy", brand: "Fisher-Price", price: 15000, image: "fisherprice_toy.png", rating: 4.6, category: "baby & maternity", type: "toys", sex: null, color: "Multicolor", stock: "in-stock", delivery: "free-shipping", AgeRange: "0-3 years", Material: "Plastic"},
      { id: 75, name: "Levi's Men's Jeans", brand: "Levi's", price: 45000, image: "levis_jeans.png", rating: 4.6, category: "mens fashion", type: "clothing", sex: "male", color: "Blue", stock: "in-stock", delivery: "same-day-delivery", Size: "32", Material: "Denim"},
      { id: 76, name: "Nike Men's Sneakers", brand: "Nike", price: 95000, image: "nike_mens.png", rating: 4.7, category: "mens fashion", type: "shoes", sex: "male", color: "Black", stock: "in-stock", delivery: "same-day-delivery", Size: "42", Material: "Leather"},
      { id: 77, name: "Rolex Men's Watch", brand: "Rolex", price: 1200000, image: "rolex_mens.png", rating: 4.9, category: "mens fashion", type: "watches", sex: "male", color: "Gold", stock: "in-stock", delivery: "same-day-delivery", Material: "Gold"},
      { id: 78, name: "Canon DSLR Camera", brand: "Canon", price: 380000, image: "canon_dslr.png", rating: 4.8, category: "electronics", type: "cameras", sex: null, color: "Black", stock: "in-stock", delivery: "same-day-delivery", Lens: "18-55mm", Resolution: "24MP"},
      { id: 79, name: "Instant Pot Duo", brand: "Instant Pot", price: 95000, image: "instantpot_duo.png", rating: 4.7, category: "dining and kitchen", type: "cookware", sex: null, color: "Stainless Steel", stock: "in-stock", delivery: "same-day-delivery", Capacity: "6L", Power: "1000W"},
      { id: 80, name: "JBL Flip 6 Speaker", brand: "JBL", price: 65000, image: "jbl_flip6.png", rating: 4.6, category: "electronics", type: "home audio", sex: null, color: "Blue", stock: "in-stock", delivery: "free-shipping", Connectivity: "Bluetooth"},
      { id: 81, name: "Organic Apples", brand: "Farm Fresh", price: 5000, image: "organic_apples.png", rating: 4.6, category: "grocery", type: "fresh product", sex: null, Color: "Red", stock: "in-stock", delivery: "free-shipping", Weight: "1kg"},
      { id: 82, name: "Fresh Bananas", brand: "Dole", price: 3000, image: "fresh_bananas.png", rating: 4.5, category: "grocery", type: "fresh product", sex: null, Color: "Yellow", stock: "in-stock", delivery: "free-shipping", Weight: "1 bunch"},
      { id: 83, name: "Green Lettuce", brand: "Organic Farms", price: 2000, image: "green_lettuce.png", rating: 4.7, category: "grocery", type: "fresh product", sex: null, Color: "Green", stock: "in-stock", delivery: "free-shipping", Weight: "500g"},
      { id: 84, name: "Red Tomatoes", brand: "Local Produce", price: 2500, image: "red_tomatoes.png", rating: 4.6, category: "grocery", type: "fresh product", sex: null, Color: "Red", stock: "in-stock", delivery: "free-shipping", Weight: "1kg"},
      { id: 85, name: "Carrots", brand: "Farmers Market", price: 1500, image: "carrots.png", rating: 4.5, category: "grocery", type: "fresh product", sex: null, Color: "Orange", stock: "in-stock", delivery: "free-shipping", Weight: "1kg"},
      { id: 86, name: "Chicken Breast", brand: "Tyson", price: 15000, image: "chicken_breast.png", rating: 4.7, category: "grocery", type: "meat and seafood", sex: null, Color: "White", stock: "in-stock", delivery: "free-shipping", Weight: "1kg"},
      { id: 87, name: "Salmon Fillet", brand: "Sea Fresh", price: 20000, image: "salmon_fillet.png", rating: 4.8, category: "grocery", type: "meat and seafood", sex: null, Color: "Pink", stock: "in-stock", delivery: "free-shipping", Weight: "500g"},
      { id: 88, name: "Beef Steak", brand: "Prime Cuts", price: 25000, image: "beef_steak.png", rating: 4.6, category: "grocery", type: "meat and seafood", sex: null, Color: "Red", stock: "in-stock", delivery: "free-shipping", Weight: "800g"},
      { id: 89, name: "Shrimp", brand: "Ocean Harvest", price: 18000, image: "shrimp.png", rating: 4.7, category: "grocery", type: "meat and seafood", sex: null, Color: "Pink", stock: "in-stock", delivery: "free-shipping", Weight: "500g"},
      { id: 90, name: "Pork Chops", brand: "Farm Meat", price: 14000, image: "pork_chops.png", rating: 4.5, category: "grocery", type: "meat and seafood", sex: null, Color: "Pink", stock: "in-stock", delivery: "free-shipping", Weight: "1kg"},
      { id: 91, name: "L'Oreal Lip Gloss", brand: "L'Oreal", price: 8000, image: "loreal_lipgloss.png", rating: 4.4, category: "beauty", type: "makeup", sex: "female", Color: "Pink", stock: "in-stock", delivery: "free-shipping", Shade: "Glossy Pink", SkinType: "All"},
      { id: 92, name: "Revlon Mascara", brand: "Revlon", price: 7000, image: "revlon_mascara.png", rating: 4.5, category: "beauty", type: "makeup", sex: "female", Color: "Black", stock: "in-stock", delivery: "free-shipping", Shade: "Volumizing Black", SkinType: "All"},
      { id: 93, name: "NYX Eyeliner", brand: "NYX", price: 5000, image: "nyx_eyeliner.png", rating: 4.6, category: "beauty", type: "makeup", sex: "female", Color: "Black", stock: "in-stock", delivery: "free-shipping", Shade: "Liquid Black", SkinType: "All"},
      { id: 94, name: "Aspirin Tablets", brand: "Bayer", price: 2000, image: "aspirin.png", rating: 4.8, category: "professional", type: "pharmacy", sex: null, Color: "White", stock: "in-stock", delivery: "free-shipping", Dosage: "500mg", Quantity: "100 tablets"},
      { id: 95, name: "Ibuprofen Gel", brand: "Nurofen", price: 3000, image: "ibuprofen_gel.png", rating: 4.7, category: "professional", type: "pharmacy", sex: null, Color: "Clear", stock: "in-stock", delivery: "free-shipping", Dosage: "5%", Quantity: "50g"},
      { id: 96, name: "Antihistamine Tablets", brand: "Claritin", price: 2500, image: "claritin.png", rating: 4.6, category: "professional", type: "pharmacy", sex: null, Color: "White", stock: "in-stock", delivery: "free-shipping", Dosage: "10mg", Quantity: "30 tablets"},
      { id: 97, name: "Cough Syrup", brand: "Robitussin", price: 4000, image: "robitussin.png", rating: 4.5, category: "professional", type: "pharmacy", sex: null, Color: "Red", stock: "in-stock", delivery: "free-shipping", Dosage: "200ml", Quantity: "1 bottle"},
      { id: 98, name: "Vitamin C Supplements", brand: "Nature's Bounty", price: 3500, image: "vitamin_c.png", rating: 4.7, category: "professional", type: "pharmacy", sex: null, Color: "Orange", stock: "in-stock", delivery: "free-shipping", Dosage: "1000mg", Quantity: "60 tablets"},
      { id: 95, name: "Tylenol Extra Strength", brand: "Tylenol", price: 3500, image: "tylenol.png", rating: 4.7, category: "health", type: "medicine", sex: null, Color: "White", stock: "in-stock", delivery: "free-shipping", Dosage: "500mg", Quantity: "50 tablets"},
      { id: 96, name: "Vitamin C Tablets", brand: "Nature Made", price: 4500, image: "vitamin_c.png", rating: 4.6, category: "health", type: "supplement", sex: null, Color: "Orange", stock: "in-stock", delivery: "free-shipping", Dosage: "1000mg", Quantity: "60 tablets"},
      { id: 97, name: "Panadol Advance", brand: "Panadol", price: 3000, image: "panadol.png", rating: 4.5, category: "health", type: "medicine", sex: null, Color: "White", stock: "in-stock", delivery: "free-shipping", Dosage: "500mg", Quantity: "20 tablets"},
      { id: 98, name: "Centrum Multivitamin", brand: "Centrum", price: 7500, image: "centrum.png", rating: 4.7, category: "health", type: "supplement", sex: null, Color: "Multicolor", stock: "in-stock", delivery: "free-shipping", Dosage: "Daily", Quantity: "100 tablets"},
      { id: 99, name: "Ibuprofen", brand: "Advil", price: 2500, image: "ibuprofen.png", rating: 4.6, category: "health", type: "medicine", sex: null, Color: "White", stock: "in-stock", delivery: "free-shipping", Dosage: "400mg", Quantity: "30 tablets"},
      { id: 100, name: "Gillette Razor", brand: "Gillette", price: 3500, image: "gillette_razor.png", rating: 4.5, category: "beauty", type: "grooming", sex: "male", Color: "Blue", stock: "in-stock", delivery: "same-day-delivery", Material: "Stainless Steel"},
      { id: 101, name: "Philips Beard Trimmer", brand: "Philips", price: 15000, image: "philips_trimmer.png", rating: 4.6, category: "beauty", type: "grooming", sex: "male", Color: "Black", stock: "in-stock", delivery: "same-day-delivery", Power: "Cordless"},
      { id: 102, name: "Remington Hair Dryer", brand: "Remington", price: 18000, image: "remington_dryer.png", rating: 4.7, category: "beauty", type: "haircare", sex: "female", Color: "Pink", stock: "in-stock", delivery: "free-shipping", Power: "1800W"},
      { id: 103, name: "Braun Electric Shaver", brand: "Braun", price: 25000, image: "braun_shaver.png", rating: 4.8, category: "beauty", type: "grooming", sex: "male", Color: "Silver", stock: "in-stock", delivery: "free-shipping", Power: "Rechargeable"},
      { id: 104, name: "Dyson Supersonic Hair Dryer", brand: "Dyson", price: 120000, image: "dyson_dryer.png", rating: 4.9, category: "beauty", type: "haircare", sex: "female", Color: "Silver", stock: "in-stock", delivery: "same-day-delivery", Power: "1600W"},
      { id: 105, name: "KitchenAid Stand Mixer", brand: "KitchenAid", price: 250000, image: "kitchenaid_mixer.png", rating: 4.9, category: "dining and kitchen", type: "appliances", sex: null, Color: "Red", stock: "in-stock", delivery: "free-shipping", Power: "325W", Capacity: "4.5L"},
      { id: 106, name: "Cuisinart Toaster", brand: "Cuisinart", price: 25000, image: "cuisinart_toaster.png", rating: 4.6, category: "dining and kitchen", type: "appliances", sex: null, Color: "Silver", stock: "in-stock", delivery: "free-shipping", Power: "1000W", Slots: "2"},
      { id: 107, name: "Ninja Blender", brand: "Ninja", price: 60000, image: "ninja_blender.png", rating: 4.7, category: "dining and kitchen", type: "appliances", sex: null, Color: "Black", stock: "in-stock", delivery: "same-day-delivery", Power: "1200W", Capacity: "2L"},
      { id: 108, name: "George Foreman Grill", brand: "George Foreman", price: 45000, image: "foreman_grill.png", rating: 4.5, category: "dining and kitchen", type: "appliances", sex: null, Color: "Black", stock: "in-stock", delivery: "free-shipping", Power: "1200W"},
      { id: 109, name: "Instant Vortex Air Fryer", brand: "Instant Pot", price: 70000, image: "instant_vortex.png", rating: 4.7, category: "dining and kitchen", type: "appliances", sex: null, Color: "Black", stock: "in-stock", delivery: "same-day-delivery", Power: "1400W"},
      { id: 110, name: "Samsung 65-inch QLED", brand: "Samsung", price: 1250000, image: "samsung_qled.png", rating: 4.8, category: "electronics", type: "televisions", sex: null, Color: "Black", stock: "in-stock", delivery: "same-day-delivery", ScreenSize: "65inch", Resolution: "4K"},
      { id: 111, name: "LG OLED 55-inch", brand: "LG", price: 1350000, image: "lg_oled.png", rating: 4.9, category: "electronics", type: "televisions", sex: null, Color: "Black", stock: "in-stock", delivery: "same-day-delivery", ScreenSize: "55inch", Resolution: "4K"},
      { id: 112, name: "Hisense 43-inch Smart TV", brand: "Hisense", price: 250000, image: "hisense_43.png", rating: 4.6, category: "electronics", type: "televisions", sex: null, Color: "Black", stock: "in-stock", delivery: "free-shipping", ScreenSize: "43inch", Resolution: "Full HD"},
      { id: 113, name: "TCL 50-inch Roku TV", brand: "TCL", price: 280000, image: "tcl_roku.png", rating: 4.7, category: "electronics", type: "televisions", sex: null, Color: "Black", stock: "in-stock", delivery: "free-shipping", ScreenSize: "50inch", Resolution: "4K"},
      { id: 114, name: "Panasonic 32-inch LED", brand: "Panasonic", price: 180000, image: "panasonic_32.png", rating: 4.5, category: "electronics", type: "televisions", sex: null, Color: "Black", stock: "in-stock", delivery: "same-day-delivery", ScreenSize: "32inch", Resolution: "HD"},
      { id: 115, name: "Dell Inspiron 14", brand: "Dell", price: 480000, image: "inspiron14.png", rating: 4.6, category: "computers", type: "laptops", sex: null, Color: "Silver", stock: "in-stock", delivery: "free-shipping", Processor: "Intel i5", RAM: "8GB", Storage: "512GB SSD"},
      { id: 116, name: "HP Envy 13", brand: "HP", price: 520000, image: "hp_envy13.png", rating: 4.7, category: "computers", type: "laptops", sex: null, Color: "Gold", stock: "in-stock", delivery: "same-day-delivery", Processor: "Intel i7", RAM: "16GB", Storage: "512GB SSD"},
      { id: 117, name: "Asus ROG Strix", brand: "Asus", price: 950000, image: "rog_strix.png", rating: 4.8, category: "computers", type: "gaming laptops", sex: null, Color: "Black", stock: "in-stock", delivery: "same-day-delivery", Processor: "AMD Ryzen 9", RAM: "32GB", Storage: "1TB SSD"},
      { id: 118, name: "MSI Stealth 15M", brand: "MSI", price: 870000, image: "msi_stealth.png", rating: 4.7, category: "computers", type: "gaming laptops", sex: null, Color: "Gray", stock: "in-stock", delivery: "same-day-delivery", Processor: "Intel i9", RAM: "16GB", Storage: "1TB SSD"},
      { id: 119, name: "Acer Aspire 5", brand: "Acer", price: 350000, image: "acer_aspire5.png", rating: 4.5, category: "computers", type: "laptops", sex: null, Color: "Silver", stock: "in-stock", delivery: "free-shipping", Processor: "Intel i5", RAM: "8GB", Storage: "256GB SSD"},
      { id: 120, name: "Apple MacBook Pro 14", brand: "Apple", price: 1700000, image: "macbook_pro14.png", rating: 4.9, category: "computers", type: "macbooks", sex: null, Color: "Space Gray", stock: "in-stock", delivery: "same-day-delivery", Processor: "M2 Pro", RAM: "32GB", Storage: "1TB SSD"},
      { id: 195, name: "Canon EOS 90D", brand: "Canon", price: 950000, image: "canon_eos90d.png", rating: 4.8, category: "electronics", type: "camera", sex: null, Color: "Black", stock: "in-stock", delivery: "free-shipping", Sensor: "32.5MP APS-C", Lens: "18-135mm"},
      { id: 196, name: "Nikon Z6 II", brand: "Nikon", price: 1200000, image: "nikon_z6.png", rating: 4.9, category: "electronics", type: "camera", sex: null, Color: "Black", stock: "in-stock", delivery: "same-day-delivery", Sensor: "24.5MP Full-Frame", Lens: "24-70mm"},
      { id: 197, name: "Sony A7 III", brand: "Sony", price: 1350000, image: "sony_a7iii.png", rating: 4.8, category: "electronics", type: "camera", sex: null, Color: "Black", stock: "in-stock", delivery: "free-shipping", Sensor: "24.2MP Full-Frame", Lens: "28-70mm"},
      { id: 198, name: "Fujifilm X-T4", brand: "Fujifilm", price: 1050000, image: "fujifilm_xt4.png", rating: 4.7, category: "electronics", type: "camera", sex: null, Color: "Silver", stock: "in-stock", delivery: "free-shipping", Sensor: "26.1MP APS-C", Lens: "16-80mm"},
      { id: 199, name: "GoPro Hero 11", brand: "GoPro", price: 280000, image: "gopro_hero11.png", rating: 4.7, category: "electronics", type: "action camera", sex: null, Color: "Black", stock: "in-stock", delivery: "same-day-delivery", Resolution: "5.3K", Waterproof: "Yes"},
      { id: 200, name: "Samsung Galaxy S23", brand: "Samsung", price: 820000, image: "galaxy_s23.png", rating: 4.8, category: "electronics", type: "android phones", sex: null, Color: "Phantom Black", stock: "in-stock", delivery: "same-day-delivery", RAM: "8GB", Storage: "256GB"},
      { id: 201, name: "iPhone 14 Pro", brand: "Apple", price: 1150000, image: "iphone14pro.png", rating: 4.9, category: "electronics", type: "iphones", sex: null, Color: "Deep Purple", stock: "in-stock", delivery: "same-day-delivery", RAM: "6GB", Storage: "256GB"},
      { id: 202, name: "OnePlus 11", brand: "OnePlus", price: 600000, image: "oneplus11.png", rating: 4.7, category: "electronics", type: "android phones", sex: null, Color: "Emerald Green", stock: "in-stock", delivery: "free-shipping", RAM: "12GB", Storage: "256GB"},
      { id: 203, name: "Google Pixel 7 Pro", brand: "Google", price: 700000, image: "pixel7pro.png", rating: 4.8, category: "electronics", type: "android phones", sex: null, Color: "Obsidian", stock: "in-stock", delivery: "free-shipping", RAM: "12GB", Storage: "128GB"},
      { id: 204, name: "Xiaomi 13 Pro", brand: "Xiaomi", price: 550000, image: "xiaomi13pro.png", rating: 4.6, category: "electronics", type: "android phones", sex: null, Color: "Ceramic White", stock: "in-stock", delivery: "same-day-delivery", RAM: "12GB", Storage: "256GB"},
      { id: 205, name: "PlayStation 5 Console", brand: "Sony", price: 650000, image: "ps5.png", rating: 4.9, category: "electronics", type: "gaming", sex: null, Color: "White", stock: "in-stock", delivery: "same-day-delivery", Storage: "825GB SSD"},
      { id: 206, name: "Xbox Series X", brand: "Microsoft", price: 620000, image: "xbox_seriesx.png", rating: 4.8, category: "electronics", type: "gaming", sex: null, Color: "Black", stock: "in-stock", delivery: "free-shipping", Storage: "1TB SSD"},
      { id: 207, name: "Nintendo Switch OLED", brand: "Nintendo", price: 280000, image: "switch_oled.png", rating: 4.8, category: "electronics", type: "gaming", sex: null, Color: "White", stock: "in-stock", delivery: "same-day-delivery", Storage: "64GB"},
      { id: 208, name: "Razer Gaming Mouse", brand: "Razer", price: 45000, image: "razer_mouse.png", rating: 4.7, category: "electronics", type: "gaming accessories", sex: null, Color: "Black", stock: "in-stock", delivery: "same-day-delivery", DPI: "20000"},
      { id: 209, name: "Logitech Gaming Keyboard", brand: "Logitech", price: 70000, image: "logitech_keyboard.png", rating: 4.7, category: "electronics", type: "gaming accessories", sex: null, Color: "RGB", stock: "in-stock", delivery: "free-shipping", Switch: "Mechanical"},
      { id: 210, name: "Asus TUF Gaming Monitor", brand: "Asus", price: 180000, image: "asus_tuf_monitor.png", rating: 4.8, category: "electronics", type: "monitors", sex: null, Color: "Black", stock: "in-stock", delivery: "free-shipping", Size: "27inch", RefreshRate: "165Hz"},
      { id: 211, name: "LG UltraGear Monitor", brand: "LG", price: 250000, image: "lg_ultragear.png", rating: 4.8, category: "electronics", type: "monitors", sex: null, Color: "Black", stock: "in-stock", delivery: "same-day-delivery", Size: "32inch", RefreshRate: "144Hz"},
      { id: 212, name: "BenQ 24-inch Monitor", brand: "BenQ", price: 120000, image: "benq_monitor.png", rating: 4.6, category: "electronics", type: "monitors", sex: null, Color: "Black", stock: "in-stock", delivery: "free-shipping", Size: "24inch", RefreshRate: "75Hz"},
      { id: 213, name: "Acer Predator Monitor", brand: "Acer", price: 300000, image: "acer_predator.png", rating: 4.8, category: "electronics", type: "monitors", sex: null, Color: "Black", stock: "in-stock", delivery: "same-day-delivery", Size: "34inch", RefreshRate: "144Hz"},
      { id: 214, name: "Dell Ultrasharp Monitor", brand: "Dell", price: 220000, image: "dell_ultrasharp.png", rating: 4.7, category: "electronics", type: "monitors", sex: null, Color: "Silver", stock: "in-stock", delivery: "free-shipping", Size: "27inch", Resolution: "4K"},
      { id: 215, name: "LG Washing Machine", brand: "LG", price: 450000, image: "lg_washer.png", rating: 4.8, category: "home appliances", type: "washing machine", sex: null, Color: "Silver", stock: "in-stock", delivery: "same-day-delivery", Capacity: "8kg", Type: "Front Load"},
      { id: 216, name: "Samsung Refrigerator", brand: "Samsung", price: 700000, image: "samsung_fridge.png", rating: 4.8, category: "home appliances", type: "refrigerator", sex: null, Color: "Stainless Steel", stock: "in-stock", delivery: "free-shipping", Capacity: "500L", Type: "Double Door"},
      { id: 217, name: "Panasonic Microwave", brand: "Panasonic", price: 95000, image: "panasonic_microwave.png", rating: 4.6, category: "home appliances", type: "microwave", sex: null, Color: "Black", stock: "in-stock", delivery: "same-day-delivery", Power: "1000W"},
      { id: 218, name: "Philips Air Purifier", brand: "Philips", price: 120000, image: "philips_airpurifier.png", rating: 4.7, category: "home appliances", type: "air purifier", sex: null, Color: "White", stock: "in-stock", delivery: "free-shipping", Coverage: "400sqft"},
      { id: 219, name: "Dyson Vacuum Cleaner", brand: "Dyson", price: 280000, image: "dyson_vacuum.png", rating: 4.9, category: "home appliances", type: "vacuum", sex: null, Color: "Purple", stock: "in-stock", delivery: "same-day-delivery", Type: "Cordless"},
      { id: 220, name: "Adidas Ultraboost 22", brand: "Adidas", price: 65000, image: "adidas_ultraboost.png", rating: 4.8, category: "women fashion", type: "shoes", sex: "unisex", Color: "Black", stock: "in-stock", delivery: "same-day-delivery", Size: "42"},
      { id: 221, name: "Nike Air Force 1", brand: "Nike", price: 55000, image: "nike_af1.png", rating: 4.8, category: "women fashion", type: "shoes", sex: "unisex", Color: "White", stock: "in-stock", delivery: "free-shipping", Size: "43"},
      { id: 222, name: "Puma Running Shoes", brand: "Puma", price: 48000, image: "puma_running.png", rating: 4.6, category: "men fashion", type: "shoes", sex: "male", Color: "Blue", stock: "in-stock", delivery: "same-day-delivery", Size: "44"},
      { id: 223, name: "Levi’s Slim Jeans", brand: "Levi’s", price: 40000, image: "levis_jeans.png", rating: 4.7, category: "men fashion", type: "clothing", sex: "male", Color: "Dark Blue", stock: "in-stock", delivery: "free-shipping", Size: "32"},
      { id: 224, name: "Zara Summer Dress", brand: "Zara", price: 35000, image: "zara_dress.png", rating: 4.7, category: "fashion", type: "clothing", sex: "female", Color: "Red", stock: "in-stock", delivery: "same-day-delivery", Size: "M"},
      { id: 225, name: "H&M Winter Jacket", brand: "H&M", price: 75000, image: "hm_jacket.png", rating: 4.8, category: "fashion", type: "clothing", sex: "unisex", Color: "Black", stock: "in-stock", delivery: "free-shipping", Size: "L"},
      { id: 226, name: "Gucci Sunglasses", brand: "Gucci", price: 150000, image: "gucci_sunglasses.png", rating: 4.9, category: "fashion", type: "accessories", sex: "unisex", Color: "Brown", stock: "in-stock", delivery: "same-day-delivery", Material: "Acetate"},
      { id: 227, name: "Rolex Submariner", brand: "Rolex", price: 8000000, image: "rolex_submariner.png", rating: 5.0, category: "fashion", type: "accessories", sex: "male", Color: "Silver", stock: "in-stock", delivery: "free-shipping", Material: "Stainless Steel"},
      { id: 228, name: "Chanel Handbag", brand: "Chanel", price: 2500000, image: "chanel_bag.png", rating: 4.9, category: "fashion", type: "accessories", sex: "female", Color: "Black", stock: "in-stock", delivery: "same-day-delivery", Material: "Leather"},
      { id: 229, name: "Cartier Bracelet", brand: "Cartier", price: 1200000, image: "cartier_bracelet.png", rating: 4.9, category: "fashion", type: "accessories", sex: "female", Color: "Gold", stock: "in-stock", delivery: "free-shipping", Material: "18K Gold"},
      { id: 230, name: "Office Desk Chair", brand: "IKEA", price: 90000, image: "ikea_chair.png", rating: 4.7, category: "office", type: "furniture", sex: null, Color: "Black", stock: "in-stock", delivery: "same-day-delivery", Material: "Mesh"},
      { id: 231, name: "HP LaserJet Printer", brand: "HP", price: 150000, image: "hp_printer.png", rating: 4.6, category: "office", type: "electronics", sex: null, Color: "White", stock: "in-stock", delivery: "free-shipping", Type: "All-in-One"},
      { id: 232, name: "Canon Scanner", brand: "Canon", price: 120000, image: "canon_scanner.png", rating: 4.7, category: "office", type: "electronics", sex: null, Color: "Black", stock: "in-stock", delivery: "free-shipping", Type: "Flatbed"},
      { id: 233, name: "Logitech Webcam", brand: "Logitech", price: 45000, image: "logitech_webcam.png", rating: 4.6, category: "office", type: "accessories", sex: null, Color: "Black", stock: "in-stock", delivery: "same-day-delivery", Resolution: "1080p"},
      { id: 234, name: "Microsoft Surface Pro 9", brand: "Microsoft", price: 850000, image: "surface_pro9.png", rating: 4.8, category: "office", type: "laptops", sex: null, Color: "Platinum", stock: "in-stock", delivery: "free-shipping", RAM: "16GB", Storage: "512GB SSD"},
      { id: 235, name: "JBL Bluetooth Speaker", brand: "JBL", price: 60000, image: "jbl_speaker.png", rating: 4.8, category: "electronics", type: "audio", sex: null, Color: "Blue", stock: "in-stock", delivery: "same-day-delivery", BatteryLife: "12hrs"},
      { id: 236, name: "Bose QC 45 Headphones", brand: "Bose", price: 180000, image: "bose_qc45.png", rating: 4.9, category: "electronics", type: "audio", sex: null, Color: "Black", stock: "in-stock", delivery: "free-shipping", NoiseCancellation: "Yes"},
      { id: 237, name: "Sony WH-1000XM5", brand: "Sony", price: 220000, image: "sony_xm5.png", rating: 4.9, category: "electronics", type: "audio", sex: null, Color: "Silver", stock: "in-stock", delivery: "same-day-delivery", NoiseCancellation: "Yes"},
      { id: 238, name: "Apple AirPods Pro 2", brand: "Apple", price: 170000, image: "airpods_pro2.png", rating: 4.8, category: "electronics", type: "audio", sex: null, Color: "White", stock: "in-stock", delivery: "same-day-delivery", BatteryLife: "6hrs"},
      { id: 239, name: "Anker Soundcore", brand: "Anker", price: 50000, image: "anker_soundcore.png", rating: 4.6, category: "electronics", type: "audio", sex: null, Color: "Black", stock: "in-stock", delivery: "free-shipping", BatteryLife: "24hrs"},
      { id: 240, name: "Toyota Corolla 2022", brand: "Toyota", price: 12000000, image: "toyota_corolla2022.png", rating: 4.8, category: "automotive", type: "cars", sex: null, Color: "White", stock: "in-stock", delivery: "free-shipping", Engine: "1.8L", Transmission: "Automatic"},
            { id: 295, name: "Mazda CX-5 2022", brand: "Mazda", price: 14500000, image: "mazda_cx5.png", rating: 4.8, category: "automotive", type: "cars", sex: null, Color: "Red", stock: "in-stock", delivery: "free-shipping", Engine: "2.5L", Transmission: "Automatic"},
      { id: 296, name: "BMW 3 Series 2022", brand: "BMW", price: 28000000, image: "bmw_3series.png", rating: 4.9, category: "automotive", type: "cars", sex: null, Color: "Black", stock: "in-stock", delivery: "free-shipping", Engine: "2.0L", Transmission: "Automatic"},
      { id: 297, name: "Mercedes C-Class 2022", brand: "Mercedes-Benz", price: 32000000, image: "mercedes_cclass.png", rating: 4.9, category: "automotive", type: "cars", sex: null, Color: "Silver", stock: "in-stock", delivery: "free-shipping", Engine: "2.0L", Transmission: "Automatic"},
      { id: 298, name: "Ford Ranger 2022", brand: "Ford", price: 18000000, image: "ford_ranger.png", rating: 4.7, category: "automotive", type: "pickup trucks", sex: null, Color: "Blue", stock: "in-stock", delivery: "free-shipping", Engine: "3.0L", Transmission: "Automatic"},
      { id: 299, name: "Chevrolet Silverado 2022", brand: "Chevrolet", price: 25000000, image: "chevy_silverado.png", rating: 4.7, category: "automotive", type: "pickup trucks", sex: null, Color: "White", stock: "in-stock", delivery: "free-shipping", Engine: "5.3L", Transmission: "Automatic"},
      { id: 300, name: "Mobil 1 Engine Oil", brand: "Mobil", price: 18000, image: "mobil1_oil.png", rating: 4.8, category: "automotive", type: "car care", sex: null, Color: "Amber", stock: "in-stock", delivery: "same-day-delivery", Volume: "5L"},
      { id: 301, name: "Bosch Car Battery", brand: "Bosch", price: 85000, image: "bosch_battery.png", rating: 4.7, category: "automotive", type: "car care", sex: null, Color: "Black", stock: "in-stock", delivery: "same-day-delivery", Voltage: "12V"},
      { id: 302, name: "Michelin Pilot Sport 4", brand: "Michelin", price: 120000, image: "michelin_tire.png", rating: 4.9, category: "automotive", type: "car care", sex: null, Color: "Black", stock: "in-stock", delivery: "free-shipping", Size: "245/45R18"},
      { id: 303, name: "Castrol GTX Oil", brand: "Castrol", price: 15000, image: "castrol_oil.png", rating: 4.7, category: "automotive", type: "car care", sex: null, Color: "Amber", stock: "in-stock", delivery: "same-day-delivery", Volume: "4L"},
      { id: 304, name: "Karcher Car Vacuum", brand: "Karcher", price: 65000, image: "karcher_vacuum.png", rating: 4.6, category: "automotive", type: "car care", sex: null, Color: "Yellow", stock: "in-stock", delivery: "same-day-delivery", Power: "1200W"},
      { id: 305, name: "Graco Baby Stroller", brand: "Graco", price: 95000, image: "graco_stroller.png", rating: 4.7, category: "baby and maternity", type: "strollers", sex: null, Color: "Gray", stock: "in-stock", delivery: "free-shipping", WeightLimit: "20kg"},
      { id: 306, name: "Chicco Car Seat", brand: "Chicco", price: 120000, image: "chicco_carseat.png", rating: 4.8, category: "baby and maternity", type: "car seats", sex: null, Color: "Black", stock: "in-stock", delivery: "same-day-delivery", WeightLimit: "25kg"},
      { id: 307, name: "Philips Avent Bottles", brand: "Philips Avent", price: 25000, image: "avent_bottles.png", rating: 4.6, category: "baby and maternity", type: "feeding", sex: null, Color: "Transparent", stock: "in-stock", delivery: "same-day-delivery", Quantity: "3"},
      { id: 308, name: "Pampers Premium Care", brand: "Pampers", price: 22000, image: "pampers_care.png", rating: 4.8, category: "baby and maternity", type: "diapers", sex: null, Color: "White", stock: "in-stock", delivery: "same-day-delivery", Size: "3", Quantity: "60"},
      { id: 309, name: "Johnson’s Baby Lotion", brand: "Johnson’s", price: 9000, image: "johnsons_lotion.png", rating: 4.7, category: "baby and maternity", type: "care", sex: null, Color: "Pink", stock: "in-stock", delivery: "same-day-delivery", Volume: "500ml"},
      { id: 310, name: "Huggies Wipes", brand: "Huggies", price: 7000, image: "huggies_wipes.png", rating: 4.6, category: "baby and maternity", type: "care", sex: null, Color: "White", stock: "in-stock", delivery: "same-day-delivery", Quantity: "80 wipes"},
      { id: 311, name: "Medela Breast Pump", brand: "Medela", price: 80000, image: "medela_pump.png", rating: 4.8, category: "baby and maternity", type: "feeding", sex: null, Color: "White", stock: "in-stock", delivery: "free-shipping", Type: "Electric"},
      { id: 312, name: "Evenflo High Chair", brand: "Evenflo", price: 55000, image: "evenflo_chair.png", rating: 4.7, category: "baby and maternity", type: "furniture", sex: null, Color: "Green", stock: "in-stock", delivery: "same-day-delivery", WeightLimit: "15kg"},
      { id: 313, name: "Fisher-Price Play Mat", brand: "Fisher-Price", price: 30000, image: "fisherprice_playmat.png", rating: 4.7, category: "baby and maternity", type: "toys", sex: null, Color: "Multicolor", stock: "in-stock", delivery: "same-day-delivery", Material: "Cotton"},
      { id: 314, name: "Britax Travel System", brand: "Britax", price: 180000, image: "britax_travel.png", rating: 4.8, category: "baby and maternity", type: "strollers", sex: null, Color: "Black", stock: "in-stock", delivery: "free-shipping", Includes: "Car seat"},
      { id: 315, name: "Dove Shampoo", brand: "Dove", price: 8500, image: "dove_shampoo.png", rating: 4.6, category: "beauty", type: "hair care", sex: "female", Color: "White", stock: "in-stock", delivery: "same-day-delivery", Volume: "400ml"},
      { id: 316, name: "Nivea Body Lotion", brand: "Nivea", price: 6500, image: "nivea_lotion.png", rating: 4.7, category: "beauty", type: "skin care", sex: "unisex", Color: "Blue", stock: "in-stock", delivery: "same-day-delivery", Volume: "500ml"},
      { id: 317, name: "L’Oreal Lipstick", brand: "L’Oreal", price: 12000, image: "loreal_lipstick.png", rating: 4.8, category: "beauty", type: "makeup", sex: "female", Color: "Red", stock: "in-stock", delivery: "same-day-delivery", Finish: "Matte"},
      { id: 318, name: "Maybelline Mascara", brand: "Maybelline", price: 10000, image: "maybelline_mascara.png", rating: 4.7, category: "beauty", type: "makeup", sex: "female", Color: "Black", stock: "in-stock", delivery: "same-day-delivery", Waterproof: "Yes"},
      { id: 319, name: "MAC Foundation", brand: "MAC", price: 18000, image: "mac_foundation.png", rating: 4.8, category: "beauty", type: "makeup", sex: "female", Color: "Beige", stock: "in-stock", delivery: "same-day-delivery", Volume: "30ml"},
      { id: 320, name: "Olay Night Cream", brand: "Olay", price: 15000, image: "olay_cream.png", rating: 4.7, category: "beauty", type: "skin care", sex: "female", Color: "White", stock: "in-stock", delivery: "same-day-delivery", Volume: "50ml"},
      { id: 321, name: "Clinique Face Wash", brand: "Clinique", price: 20000, image: "clinique_facewash.png", rating: 4.7, category: "beauty", type: "skin care", sex: "female", Color: "White", stock: "in-stock", delivery: "same-day-delivery", Volume: "150ml"},
      { id: 322, name: "Estée Lauder Perfume", brand: "Estée Lauder", price: 35000, image: "estee_perfume.png", rating: 4.9, category: "beauty", type: "fragrance", sex: "female", Color: "Transparent", stock: "in-stock", delivery: "same-day-delivery", Volume: "100ml"},
      { id: 323, name: "Hugo Boss Perfume", brand: "Hugo Boss", price: 32000, image: "hugo_perfume.png", rating: 4.8, category: "beauty", type: "fragrance", sex: "male", Color: "Transparent", stock: "in-stock", delivery: "same-day-delivery", Volume: "100ml"},
      { id: 324, name: "Versace Eau de Toilette", brand: "Versace", price: 40000, image: "versace_perfume.png", rating: 4.8, category: "beauty", type: "fragrance", sex: "unisex", Color: "Transparent", stock: "in-stock", delivery: "free-shipping", Volume: "90ml"},
      { id: 325, name: "Clinique Men Face Scrub", brand: "Clinique", price: 18000, image: "clinique_scrub.png", rating: 4.6, category: "beauty", type: "skin care", sex: "male", Color: "Blue", stock: "in-stock", delivery: "same-day-delivery", Volume: "150ml"},
      { id: 326, name: "Aveeno Baby Wash", brand: "Aveeno", price: 9500, image: "aveeno_babywash.png", rating: 4.7, category: "baby and maternity", type: "care", sex: null, Color: "White", stock: "in-stock", delivery: "same-day-delivery", Volume: "250ml"},
      { id: 327, name: "Similac Baby Formula", brand: "Similac", price: 18000, image: "similac_formula.png", rating: 4.8, category: "baby and maternity", type: "feeding", sex: null, Color: "White", stock: "in-stock", delivery: "same-day-delivery", Weight: "900g"},
      { id: 328, name: "Gerber Baby Food", brand: "Gerber", price: 6000, image: "gerber_food.png", rating: 4.6, category: "baby and maternity", type: "feeding", sex: null, Color: "Yellow", stock: "in-stock", delivery: "same-day-delivery", Weight: "200g"},
      { id: 329, name: "Enfamil Baby Formula", brand: "Enfamil", price: 17500, image: "enfamil_formula.png", rating: 4.7, category: "baby and maternity", type: "feeding", sex: null, Color: "White", stock: "in-stock", delivery: "same-day-delivery", Weight: "800g"},
      { id: 330, name: "Tommee Tippee Bottles", brand: "Tommee Tippee", price: 20000, image: "tommee_bottles.png", rating: 4.6, category: "baby and maternity", type: "feeding", sex: null, Color: "Transparent", stock: "in-stock", delivery: "same-day-delivery", Quantity: "3"},
            { id: 395, name: "BabyBjorn Carrier One", brand: "BabyBjorn", price: 75000, image: "babybjorn_carrier.png", rating: 4.8, category: "baby and maternity", type: "carriers", sex: null, Color: "Gray", stock: "in-stock", delivery: "free-shipping", WeightLimit: "15kg"},
      { id: 396, name: "Ergobaby Omni Breeze", brand: "Ergobaby", price: 85000, image: "ergobaby_omni.png", rating: 4.9, category: "baby and maternity", type: "carriers", sex: null, Color: "Black", stock: "in-stock", delivery: "free-shipping", WeightLimit: "20kg"},
      { id: 397, name: "Munchkin Bottle Warmer", brand: "Munchkin", price: 25000, image: "munchkin_warmer.png", rating: 4.7, category: "baby and maternity", type: "feeding", sex: null, Color: "White", stock: "in-stock", delivery: "same-day-delivery", Power: "Electric"},
      { id: 398, name: "Dr Brown’s Bottles", brand: "Dr Brown’s", price: 22000, image: "drbrowns_bottles.png", rating: 4.6, category: "baby and maternity", type: "feeding", sex: null, Color: "Transparent", stock: "in-stock", delivery: "same-day-delivery", Quantity: "3"},
      { id: 399, name: "Skip Hop Diaper Bag", brand: "Skip Hop", price: 55000, image: "skiphop_bag.png", rating: 4.7, category: "baby and maternity", type: "bags", sex: null, Color: "Black", stock: "in-stock", delivery: "same-day-delivery", Material: "Polyester"},
      { id: 400, name: "Apple MacBook Pro 14", brand: "Apple", price: 1350000, image: "macbook_pro14.png", rating: 4.9, category: "electronics", type: "laptops", sex: null, Color: "Space Gray", stock: "in-stock", delivery: "free-shipping", RAM: "16GB", Storage: "512GB"},
      { id: 401, name: "Dell XPS 15", brand: "Dell", price: 980000, image: "dell_xps15.png", rating: 4.8, category: "electronics", type: "laptops", sex: null, Color: "Silver", stock: "in-stock", delivery: "free-shipping", RAM: "16GB", Storage: "1TB"},
      { id: 402, name: "HP Spectre x360", brand: "HP", price: 870000, image: "hp_spectre.png", rating: 4.7, category: "electronics", type: "laptops", sex: null, Color: "Blue", stock: "in-stock", delivery: "free-shipping", RAM: "16GB", Storage: "512GB"},
      { id: 403, name: "Lenovo ThinkPad X1", brand: "Lenovo", price: 920000, image: "thinkpad_x1.png", rating: 4.8, category: "electronics", type: "laptops", sex: null, Color: "Black", stock: "in-stock", delivery: "free-shipping", RAM: "16GB", Storage: "1TB"},
      { id: 404, name: "Asus ROG Zephyrus", brand: "Asus", price: 1100000, image: "rog_zephyrus.png", rating: 4.9, category: "electronics", type: "gaming laptops", sex: null, Color: "Black", stock: "in-stock", delivery: "free-shipping", RAM: "32GB", Storage: "1TB"},
      { id: 405, name: "Acer Predator Helios", brand: "Acer", price: 880000, image: "acer_predator.png", rating: 4.7, category: "electronics", type: "gaming laptops", sex: null, Color: "Black", stock: "in-stock", delivery: "free-shipping", RAM: "16GB", Storage: "1TB"},
      { id: 406, name: "Samsung Galaxy S24", brand: "Samsung", price: 650000, image: "galaxy_s24.png", rating: 4.8, category: "electronics", type: "phones", sex: null, Color: "Phantom Black", stock: "in-stock", delivery: "same-day-delivery", RAM: "12GB", Storage: "512GB"},
      { id: 407, name: "iPhone 15 Pro Max", brand: "Apple", price: 900000, image: "iphone15_pro.png", rating: 4.9, category: "electronics", type: "phones", sex: null, Color: "Titanium", stock: "in-stock", delivery: "same-day-delivery", RAM: "8GB", Storage: "256GB"},
      { id: 408, name: "Google Pixel 8 Pro", brand: "Google", price: 580000, image: "pixel8_pro.png", rating: 4.8, category: "electronics", type: "phones", sex: null, Color: "Obsidian", stock: "in-stock", delivery: "same-day-delivery", RAM: "12GB", Storage: "256GB"},
      { id: 409, name: "OnePlus 12", brand: "OnePlus", price: 520000, image: "oneplus12.png", rating: 4.7, category: "electronics", type: "phones", sex: null, Color: "Emerald", stock: "in-stock", delivery: "same-day-delivery", RAM: "12GB", Storage: "256GB"},
      { id: 410, name: "Xiaomi Mi 14", brand: "Xiaomi", price: 480000, image: "xiaomi_mi14.png", rating: 4.6, category: "electronics", type: "phones", sex: null, Color: "Blue", stock: "in-stock", delivery: "same-day-delivery", RAM: "12GB", Storage: "256GB"},
      { id: 411, name: "LG 65” OLED TV", brand: "LG", price: 750000, image: "lg_oled65.png", rating: 4.9, category: "electronics", type: "televisions", sex: null, Color: "Black", stock: "in-stock", delivery: "free-shipping", Resolution: "4K", Smart: "Yes"},
      { id: 412, name: "Samsung QLED 55”", brand: "Samsung", price: 620000, image: "samsung_qled55.png", rating: 4.8, category: "electronics", type: "televisions", sex: null, Color: "Black", stock: "in-stock", delivery: "free-shipping", Resolution: "4K", Smart: "Yes"},
      { id: 413, name: "Sony Bravia 75”", brand: "Sony", price: 1200000, image: "sony_bravia75.png", rating: 4.9, category: "electronics", type: "televisions", sex: null, Color: "Black", stock: "in-stock", delivery: "free-shipping", Resolution: "8K", Smart: "Yes"},
      { id: 414, name: "Hisense 50” UHD TV", brand: "Hisense", price: 380000, image: "hisense_50.png", rating: 4.6, category: "electronics", type: "televisions", sex: null, Color: "Black", stock: "in-stock", delivery: "free-shipping", Resolution: "4K", Smart: "Yes"},
      { id: 415, name: "TCL 55” QLED TV", brand: "TCL", price: 420000, image: "tcl_qled55.png", rating: 4.7, category: "electronics", type: "televisions", sex: null, Color: "Black", stock: "in-stock", delivery: "free-shipping", Resolution: "4K", Smart: "Yes"},
      { id: 416, name: "Bose QuietComfort 45", brand: "Bose", price: 190000, image: "bose_qc45.png", rating: 4.9, category: "electronics", type: "audio", sex: null, Color: "Black", stock: "in-stock", delivery: "same-day-delivery", Wireless: "Yes"},
      { id: 417, name: "Sony WH-1000XM5", brand: "Sony", price: 210000, image: "sony_xm5.png", rating: 4.9, category: "electronics", type: "audio", sex: null, Color: "Silver", stock: "in-stock", delivery: "same-day-delivery", Wireless: "Yes"},
      { id: 418, name: "Apple AirPods Pro 2", brand: "Apple", price: 150000, image: "airpods_pro2.png", rating: 4.8, category: "electronics", type: "audio", sex: null, Color: "White", stock: "in-stock", delivery: "same-day-delivery", Wireless: "Yes"},
      { id: 419, name: "Samsung Galaxy Buds 2 Pro", brand: "Samsung", price: 95000, image: "galaxy_buds2.png", rating: 4.7, category: "electronics", type: "audio", sex: null, Color: "Gray", stock: "in-stock", delivery: "same-day-delivery", Wireless: "Yes"},
      { id: 420, name: "JBL Flip 6 Speaker", brand: "JBL", price: 85000, image: "jbl_flip6.png", rating: 4.7, category: "electronics", type: "audio", sex: null, Color: "Blue", stock: "in-stock", delivery: "same-day-delivery", Wireless: "Yes"},
      { id: 421, name: "Yamaha Acoustic Guitar", brand: "Yamaha", price: 120000, image: "yamaha_guitar.png", rating: 4.8, category: "electronics", type: "musical instruments", sex: null, Color: "Brown", stock: "in-stock", delivery: "free-shipping", Size: "Full"},
      { id: 422, name: "Casio Digital Piano", brand: "Casio", price: 250000, image: "casio_piano.png", rating: 4.7, category: "electronics", type: "musical instruments", sex: null, Color: "Black", stock: "in-stock", delivery: "free-shipping", Keys: "88"},
      { id: 423, name: "Roland Electronic Drum", brand: "Roland", price: 450000, image: "roland_drum.png", rating: 4.8, category: "electronics", type: "musical instruments", sex: null, Color: "Black", stock: "in-stock", delivery: "free-shipping", Pads: "8"},
      { id: 424, name: "Fender Electric Guitar", brand: "Fender", price: 380000, image: "fender_guitar.png", rating: 4.9, category: "electronics", type: "musical instruments", sex: null, Color: "Red", stock: "in-stock", delivery: "free-shipping", Type: "Stratocaster"},
      { id: 425, name: "Korg Synthesizer", brand: "Korg", price: 300000, image: "korg_synth.png", rating: 4.7, category: "electronics", type: "musical instruments", sex: null, Color: "Black", stock: "in-stock", delivery: "free-shipping", Keys: "61"},
      { id: 426, name: "Nike Air Force 1", brand: "Nike", price: 55000, image: "nike_af1.png", rating: 4.8, category: "fashion", type: "shoes", sex: "unisex", Color: "White", stock: "in-stock", delivery: "same-day-delivery", Size: "42"},
      { id: 427, name: "Adidas Ultraboost", brand: "Adidas", price: 68000, image: "adidas_ultraboost.png", rating: 4.8, category: "fashion", type: "shoes", sex: "male", Color: "Black", stock: "in-stock", delivery: "same-day-delivery", Size: "43"},
      { id: 428, name: "Puma Suede Classic", brand: "Puma", price: 45000, image: "puma_suede.png", rating: 4.7, category: "women fashion", type: "shoes", sex: "female", Color: "Red", stock: "in-stock", delivery: "same-day-delivery", Size: "39"},
      { id: 429, name: "Reebok Nano X3", brand: "Reebok", price: 52000, image: "reebok_nano.png", rating: 4.6, category: "men fashion", type: "shoes", sex: "male", Color: "Gray", stock: "in-stock", delivery: "same-day-delivery", Size: "44"},
      { id: 430, name: "New Balance 550", brand: "New Balance", price: 60000, image: "nb_550.png", rating: 4.7, category: "men fashion", type: "shoes", sex: "unisex", Color: "Green", stock: "in-stock", delivery: "same-day-delivery", Size: "41"},
      { id: 431, name: "Zara Slim Fit Shirt", brand: "Zara", price: 25000, image: "zara_shirt.png", rating: 4.6, category: "men fashion", type: "clothing", sex: "male", Color: "Blue", stock: "in-stock", delivery: "same-day-delivery", Size: "L"},
      { id: 432, name: "H&M Summer Dress", brand: "H&M", price: 30000, image: "hm_dress.png", rating: 4.7, category: "fashion", type: "clothing", sex: "female", Color: "Yellow", stock: "in-stock", delivery: "same-day-delivery", Size: "M"},
      { id: 433, name: "Levi’s 501 Jeans", brand: "Levi’s", price: 40000, image: "levis_501.png", rating: 4.8, category: "fashion", type: "clothing", sex: "male", Color: "Blue", stock: "in-stock", delivery: "same-day-delivery", Size: "32"},
      { id: 434, name: "Uniqlo Hoodie", brand: "Uniqlo", price: 22000, image: "uniqlo_hoodie.png", rating: 4.7, category: "fashion", type: "clothing", sex: "unisex", Color: "Gray", stock: "in-stock", delivery: "same-day-delivery", Size: "XL"},
      { id: 435, name: "Gucci Handbag", brand: "Gucci", price: 450000, image: "gucci_bag.png", rating: 4.9, category: "fashion", type: "accessories", sex: "female", Color: "Black", stock: "in-stock", delivery: "free-shipping", Material: "Leather"},
      { id: 436, name: "Prada Sunglasses", brand: "Prada", price: 180000, image: "prada_sunglasses.png", rating: 4.8, category: "fashion", type: "accessories", sex: "unisex", Color: "Brown", stock: "in-stock", delivery: "free-shipping", UV: "400"},
      { id: 437, name: "Ray-Ban Aviator", brand: "Ray-Ban", price: 95000, image: "rayban_aviator.png", rating: 4.8, category: "fashion", type: "accessories", sex: "unisex", Color: "Gold", stock: "in-stock", delivery: "same-day-delivery", UV: "400"},
      { id: 438, name: "Rolex Submariner", brand: "Rolex", price: 4500000, image: "rolex_submariner.png", rating: 5.0, category: "fashion", type: "accessories", sex: "male", Color: "Silver", stock: "in-stock", delivery: "free-shipping", Material: "Stainless Steel"},
      { id: 439, name: "Cartier Love Bracelet", brand: "Cartier", price: 2500000, image: "cartier_bracelet.png", rating: 4.9, category: "fashion", type: "accessories", sex: "female", Color: "Gold", stock: "in-stock", delivery: "free-shipping", Material: "18k Gold"},
      { id: 440, name: "LG Refrigerator 500L", brand: "LG", price: 550000, image: "lg_fridge.png", rating: 4.8, category: "home", type: "appliances", sex: null, Color: "Silver", stock: "in-stock", delivery: "free-shipping", Capacity: "500L"},
      { id: 441, name: "Samsung Washing Machine", brand: "Samsung", price: 420000, image: "samsung_washer.png", rating: 4.7, category: "home", type: "appliances", sex: null, Color: "White", stock: "in-stock", delivery: "free-shipping", Capacity: "8kg"},
    ];

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
  const flashSaleProducts = products.filter(item => item.flashSale);

  setFlashSale(flashSaleProducts.slice(0,18));
  },[])

  const filteredProducts = products.filter((item) => {
    const matchCategory = category === "All Products" || category.toLowerCase() === item.category.toLowerCase();
    const matchType = !type || item.type.toLowerCase() === type.toLowerCase();
    const matchesPrice = item.price >= minVal && item.price <= maxVal;
    const matchesBrand = brandSearch === "" || item.brand.toLowerCase().includes(brandSearch.toLowerCase());
    const matchesRating = selectedRatings.length === 0 || selectedRatings.some(r => item.rating >= Number(r));
    const matchesStock = selectedStock.length === 0 || selectedStock.includes(item.stock);
    const matchesDelivery = selectedDelivery.length === 0 || selectedDelivery.includes(item.delivery);

    // Group selectedMainCat by field for OR within field, AND across fields
    const groupedFilters = selectedMainCat.reduce((acc, { field, value }) => {
      if (!acc[field]) {
        acc[field] = [];
      }
      acc[field].push(value);
      return acc;
    }, {});

    const matchMainCategories =
      Object.keys(groupedFilters).every((field) => {
        const productValue = String(item[field])?.toLowerCase();
        return groupedFilters[field].some((val) => val === productValue);
      });

    return matchCategory && matchType && matchesPrice && matchesBrand && matchesRating && matchesStock && matchesDelivery && matchMainCategories;
  });

  useEffect(() => {
    if (!type) return;

    const catFilter = products.filter(item => item.type === type);
    const uniqueBrands = [...new Set(catFilter.map(item => item.brand))].filter(Boolean);
    const uniqueColors = [...new Set(catFilter.map(item => item.color))].filter(Boolean);
    const uniqueGender = [...new Set(catFilter.map(item => item.sex))].filter(Boolean);

    setProductBrand(uniqueBrands);
    setProductColor(uniqueColors);
    setProductGender(uniqueGender);
  }, [type]);

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filterClicked = () => {
    const filterCategory = document.querySelector(`.${styles.productsLeft}`);
    filterCategory?.classList.add(styles.active);
  };

  const removeFilter = () => {
    const filterCategory = document.querySelector(`.${styles.productsLeft}`);
    filterCategory?.classList.remove(styles.active);
  };

  return (
    <>
      <Header />
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
                          products
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
                    <Image src={`/${item.image}`} className={styles.productImg} alt={item.name} fill sizes="(max-width: 768px) 100vw, 50vw" /> {/* Added sizes for perf */}
                  </div>
                  <div className={styles.productCardBottom}>
                    <div className={styles.productCartPriceContainer}>
                      <h2>₦{Number(item.price).toLocaleString()}</h2>
                      <p>{item.stock === "in-stock" ? "In Stock" : item.stock}</p> {/* Dynamic stock text */}
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
                      <Link href={`/product?product_id=${item.id}`}> {/* Use dynamic id */}
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
      <RecentlyViewed />
      <FAQ />
      <Footer />
    </>
  );
}