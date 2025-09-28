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

  const minGap = 1000; // prevents overlap

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

    const selectedCategory = catContainer.find(cat => cat.name.toLowerCase() === category.toLowerCase()); // Make case-insensitive
    if (selectedCategory) {
      setNavMenu(selectedCategory.items);
    } else {
      setNavMenu([]);
    }
  }, [category]);

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
      { id: 1, name: "Apple iPhone 15", brand: "Apple", price: 560000, image: "iphone15.png", rating: 4.8, category: "phone and tablets", type: "iphone", sex: null, color: "Silver", stock: "in-stock", delivery: "free-shipping", RAM: "8GB", Storage: "256GB"},
      { id: 2, name: "Samsung Galaxy S23", brand: "Samsung", price: 450000, image: "galaxy_s23.png", rating: 4.7, category: "phone and tablets", type: "andriod", sex: null, color: "Phantom Black", stock: "in-stock", delivery: "free-shipping", RAM: "8GB", Storage: "256GB"},
      { id: 3, name: "Apple iPad Pro", brand: "Apple", price: 750000, image: "ipad_pro.png", rating: 4.9, category: "phone and tablets", type: "tablets", sex: null, color: "Space Gray", stock: "in-stock", delivery: "free-shipping", RAM: "8GB", Storage: "512GB"},
      { id: 4, name: "Xiaomi Redmi Note 13", brand: "Xiaomi", price: 180000, image: "redmi_note13.png", rating: 4.5, category: "phone and tablets", type: "andriod", sex: null, color: "Blue", stock: "in-stock", delivery: "free-shipping", RAM: "6GB", Storage: "128GB"},
      { id: 5, name: "Dell XPS 15", brand: "Dell", price: 1200000, image: "xps15.png", rating: 4.7, category: "computers", type: "laptops", sex: null, color: "Silver", stock: "in-stock", delivery: "same-day-delivery", Processor: "Intel i7", RAM: "16GB", Storage: "512GB SSD"},
      { id: 6, name: "Apple MacBook Air M2", brand: "Apple", price: 1400000, image: "macbook_air_m2.png", rating: 4.8, category: "computers", type: "macbooks", sex: null, color: "Space Gray", stock: "in-stock", delivery: "same-day-delivery", Processor: "M2", RAM: "16GB", Storage: "512GB SSD"},
      { id: 7, name: "Sony Bravia 55-inch", brand: "Sony", price: 950000, image: "bravia55.png", rating: 4.6, category: "electronics", type: "televisions", sex: null, color: "Black", stock: "in-stock", delivery: "free-shipping", ScreenSize: "55inch", Resolution: "4K"},
      { id: 8, name: "Canon EOS R5", brand: "Canon", price: 2200000, image: "eos_r5.png", rating: 4.9, category: "electronics", type: "cameras", sex: null, color: "Black", stock: "in-stock", delivery: "same-day-delivery", Lens: "24-105mm", Resolution: "45MP"},
      { id: 9, name: "Samsung Galaxy Watch 6", brand: "Samsung", price: 200000, image: "galaxy_watch6.png", rating: 4.7, category: "wearables", type: "smartwatches", sex: null, color: "Silver", stock: "in-stock", delivery: "free-shipping", Material: "Stainless Steel"},
      { id: 10, name: "Oculus Quest 3", brand: "Meta", price: 350000, image: "oculus_quest3.png", rating: 4.6, category: "wearables", type: "vrheadset", sex: null, color: "White", stock: "in-stock", delivery: "free-shipping", Compatibility: "Standalone"},
      { id: 11, name: "Nike Air Max 270", brand: "Nike", price: 95000, image: "airmax270.png", rating: 4.5, category: "womens fashion", type: "shoes", sex: "female", color: "White", stock: "in-stock", delivery: "same-day-delivery", Size: "7", Material: "Leather"},
      { id: 12, name: "Adidas T-Shirt", brand: "Adidas", price: 45000, image: "adidas_tshirt.png", rating: 4.4, category: "mens fashion", type: "clothing", sex: "male", color: "Black", stock: "in-stock", delivery: "free-shipping", Size: "M", Material: "Cotton"},
      { id: 13, name: "Gucci Gold Necklace", brand: "Gucci", price: 550000, image: "gucci_necklace.png", rating: 4.8, category: "womens fashion", type: "jewery", sex: "female", color: "Gold", stock: "in-stock", delivery: "same-day-delivery", Material: "Gold"},
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
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 25;

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

  const filteredProducts = products.filter((item) => {
    const matchCategory = category === "All Products" || category.toLowerCase() === item.category.toLowerCase();
    const matchType = !type || item.type === type;
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
    const uniqueColors = [...new Set(catFilter.map(item => item.Color))].filter(Boolean); // Use Color
    const uniqueGender = [...new Set(catFilter.map(item => item.sex))].filter(Boolean);

    setProductBrand(uniqueBrands);
    setProductColor(uniqueColors);
    setProductGender(uniqueGender);
  }, [type, products]);

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
                      <Link
                        href={item.url}
                        className={`${styles.catHeading} ${item.type === type ? styles.active : ""}`}
                      >
                        {item.item}
                      </Link>
                    </div>
                    <div
                      className={`${styles.navMenuBottomLine} ${item.type === type ? styles.active : ""}`}
                    ></div>
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
              <p>No products match the filters.</p> // Added fallback
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
                    <div className={styles.productCard}>
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
                    <div className={styles.productCard}>
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
                    <div className={styles.productCard}>
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
                    <div className={styles.productCard}>
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
                    <div className={styles.productCard}>
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