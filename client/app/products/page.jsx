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

const products = [
    { id: 1, name: "Oraimo Power Bank 20,000mAh", brand: "Oraimo", price: 14500, image: "oraimo.jpg", rating: 4.5 },
    { id: 2, name: "Samsung Galaxy Buds Pro", brand: "Samsung", price: 65000, image: "earpod.jpg", rating: 4.0 },
    { id: 3, name: "Red Wig", brand: "Generic", price: 12000, image: "redwig.png", rating: 3.5 },
    { id: 4, name: "Andrew Pot", brand: "Andrew", price: 85000, image: "andrew pot.png", rating: 4.2 },
    { id: 5, name: "Duvet", brand: "Generic", price: 3500, image: "duvet.png", rating: 4.8 },
    { id: 6, name: "Curly Hair", brand: "Generic", price: 720000, image: "hair1.png", rating: 4.9 },
    { id: 7, name: "Color Two Hair", brand: "Generic", price: 480000, image: "hair2.png", rating: 4.7 },
    { id: 8, name: "Straight Hair", brand: "Generic", price: 28000, image: "hair3.png", rating: 4.3 },
    { id: 9, name: "Color two straight hair", brand: "Generic", price: 195000, image: "hair4.png", rating: 4.6 },
    { id: 10, name: "Dettol Antiseptic 500ml", brand: "Dettol", price: 2500, image: "dettol.png", rating: 4.1 },

    { id: 11, name: "MacBook Air M1 256GB", brand: "Apple", price: 630000, image: "macbook.png", rating: 4.9 },
    { id: 12, name: "HP Pavilion 15 Laptop", brand: "HP", price: 420000, image: "hp.png", rating: 4.5 },
    { id: 13, name: "Beats Studio3 Headphones", brand: "Beats", price: 120000, image: "beats.png", rating: 4.4 },
    { id: 14, name: "Nike Air Force 1", brand: "Nike", price: 35000, image: "nike.png", rating: 4.7 },
    { id: 15, name: "Samsung 55-Inch 4K TV", brand: "Samsung", price: 350000, image: "samsung_tv.png", rating: 4.8 },
    { id: 16, name: "Electric Blender 1.5L", brand: "Generic", price: 15000, image: "blender2.png", rating: 4.0 },
    { id: 17, name: "Children's Story Books (Set of 5)", brand: "Generic", price: 7500, image: "books.png", rating: 4.3 },
    { id: 18, name: "Luxury Wrist Watch - Men", brand: "Generic", price: 55000, image: "watch.png", rating: 4.6 },
    { id: 19, name: "Women’s Handbag - Black", brand: "Generic", price: 18500, image: "bag.png", rating: 4.4 },
    { id: 20, name: "Sony PlayStation Controller", brand: "Sony", price: 35000, image: "controller.png", rating: 4.5 },

    { id: 21, name: "Canon DSLR Camera EOS 4000D", brand: "Canon", price: 250000, image: "camera.png", rating: 4.7 },
    { id: 22, name: "Gaming Chair - Red/Black", brand: "Generic", price: 115000, image: "gaming_chair.png", rating: 4.6 },
    { id: 23, name: "Men's Polo Shirt - Blue", brand: "Generic", price: 9500, image: "polo.png", rating: 4.2 },
    { id: 24, name: "Samsung Galaxy Watch 5", brand: "Samsung", price: 140000, image: "galaxy_watch.png", rating: 4.8 },
    { id: 25, name: "Air Fryer 5.5L Digital", brand: "Generic", price: 75000, image: "air_fryer.png", rating: 4.6 },
    { id: 26, name: "Women’s Necklace - Gold Plated", brand: "Generic", price: 22000, image: "necklace.png", rating: 4.4 },
    { id: 27, name: "Dell XPS 13 Laptop", brand: "Dell", price: 680000, image: "dell.png", rating: 4.8 },
    { id: 28, name: "Men’s Leather Wallet", brand: "Generic", price: 9500, image: "wallet.png", rating: 4.2 },
    { id: 29, name: "Kids Toy Car", brand: "Generic", price: 12000, image: "toy_car.png", rating: 4.3 },
    { id: 30, name: "Wireless Bluetooth Speaker", brand: "Generic", price: 18000, image: "speaker.png", rating: 4.5 },

    { id: 31, name: "LG Smart TV 43-Inch", brand: "LG", price: 215000, image: "lg_tv.png", rating: 4.7 },
    { id: 32, name: "Adidas Running Shoes", brand: "Adidas", price: 30000, image: "adidas.png", rating: 4.5 },
    { id: 33, name: "JBL Flip 5 Speaker", brand: "JBL", price: 65000, image: "jbl.png", rating: 4.6 },
    { id: 34, name: "Microsoft Surface Pro 7", brand: "Microsoft", price: 550000, image: "surface.png", rating: 4.8 },
    { id: 35, name: "Panasonic Microwave Oven", brand: "Panasonic", price: 85000, image: "microwave.png", rating: 4.4 },
    { id: 36, name: "Fendi Handbag - Women", brand: "Fendi", price: 230000, image: "fendi_bag.png", rating: 4.6 },
    { id: 37, name: "Rolex Oyster Perpetual Watch", brand: "Rolex", price: 2800000, image: "rolex.png", rating: 5.0 },
    { id: 38, name: "Puma Sneakers White", brand: "Puma", price: 28000, image: "puma.png", rating: 4.3 },
    { id: 39, name: "Huawei MateBook D14", brand: "Huawei", price: 390000, image: "huawei.png", rating: 4.5 },
    { id: 40, name: "Gucci Sunglasses", brand: "Gucci", price: 125000, image: "gucci_sunglasses.png", rating: 4.7 },

    { id: 41, name: "Apple iPhone 14 Pro Max", brand: "Apple", price: 1100000, image: "iphone14.png", rating: 5.0 },
    { id: 42, name: "Tecno Camon 20 Premier", brand: "Tecno", price: 250000, image: "tecno.png", rating: 4.3 },
    { id: 43, name: "Infinix Note 12", brand: "Infinix", price: 180000, image: "infinix.png", rating: 4.2 },
    { id: 44, name: "Itel S23+", brand: "Itel", price: 95000, image: "itel.png", rating: 4.0 },
    { id: 45, name: "Oppo Reno 8", brand: "Oppo", price: 270000, image: "oppo.png", rating: 4.4 },
    { id: 46, name: "Xiaomi Redmi Note 12", brand: "Xiaomi", price: 150000, image: "xiaomi.png", rating: 4.5 },
    { id: 47, name: "Google Pixel 7", brand: "Google", price: 420000, image: "pixel.png", rating: 4.8 },
    { id: 48, name: "Nokia G50", brand: "Nokia", price: 135000, image: "nokia.png", rating: 4.1 },
    { id: 49, name: "Vivo V25", brand: "Vivo", price: 210000, image: "vivo.png", rating: 4.3 },
    { id: 50, name: "Realme GT Neo", brand: "Realme", price: 195000, image: "realme.png", rating: 4.2 },

    { id: 51, name: "Philips Air Purifier", brand: "Philips", price: 130000, image: "philips_purifier.png", rating: 4.5 },
    { id: 52, name: "Kenwood Kitchen Mixer", brand: "Kenwood", price: 175000, image: "kenwood.png", rating: 4.4 },
    { id: 53, name: "Mouka Foam Mattress 6x6", brand: "Mouka", price: 95000, image: "mouka.png", rating: 4.6 },
    { id: 54, name: "Samsung Soundbar 300W", brand: "Samsung", price: 185000, image: "soundbar.png", rating: 4.7 },
    { id: 55, name: "LG Washing Machine 8kg", brand: "LG", price: 290000, image: "lg_washer.png", rating: 4.8 },
    { id: 56, name: "Haier Thermocool Freezer", brand: "Haier", price: 340000, image: "haier.png", rating: 4.6 },
    { id: 57, name: "Scanfrost Gas Cooker", brand: "Scanfrost", price: 175000, image: "scanfrost.png", rating: 4.5 },
    { id: 58, name: "Binatone Standing Fan", brand: "Binatone", price: 38000, image: "binatone.png", rating: 4.3 },
    { id: 59, name: "Hisense Refrigerator 200L", brand: "Hisense", price: 210000, image: "hisense.png", rating: 4.4 },
    { id: 60, name: "Polystar Water Dispenser", brand: "Polystar", price: 95000, image: "polystar.png", rating: 4.2 },

    { id: 61, name: "Bruhm Microwave 20L", brand: "Bruhm", price: 55000, image: "bruhm_microwave.png", rating: 4.1 },
    { id: 62, name: "Century Stabilizer 5000VA", brand: "Century", price: 68000, image: "century_stabilizer.png", rating: 4.3 },
    { id: 63, name: "Binatone Blender 1.5L", brand: "Binatone", price: 25000, image: "binatone_blender.png", rating: 4.0 },
    { id: 64, name: "Scanfrost Kettle 1.8L", brand: "Scanfrost", price: 15000, image: "scanfrost_kettle.png", rating: 4.2 },
    { id: 65, name: "Midea Air Conditioner 1.5HP", brand: "Midea", price: 255000, image: "midea_ac.png", rating: 4.6 },
    { id: 66, name: "Samsung Tablet A7 Lite", brand: "Samsung", price: 130000, image: "samsung_tablet.png", rating: 4.4 },
    { id: 67, name: "Apple iPad 10th Gen", brand: "Apple", price: 420000, image: "ipad.png", rating: 4.8 },
    { id: 68, name: "Amazon Kindle Paperwhite", brand: "Amazon", price: 90000, image: "kindle.png", rating: 4.7 },
    { id: 69, name: "Huawei Tablet MatePad", brand: "Huawei", price: 155000, image: "matepad.png", rating: 4.3 },
    { id: 70, name: "Lenovo Tab M10", brand: "Lenovo", price: 125000, image: "lenovo_tab.png", rating: 4.2 },

    { id: 71, name: "Anker Power Bank 10,000mAh", brand: "Anker", price: 20000, image: "anker_powerbank.png", rating: 4.6 },
    { id: 72, name: "Oraimo Bluetooth Earbuds", brand: "Oraimo", price: 18000, image: "oraimo_earbuds.png", rating: 4.4 },
    { id: 73, name: "Samsung Fast Charger 25W", brand: "Samsung", price: 12000, image: "samsung_charger.png", rating: 4.5 },
    { id: 74, name: "Apple AirPods Pro 2", brand: "Apple", price: 180000, image: "airpods.png", rating: 4.9 },
    { id: 75, name: "Baseus USB Cable Type-C", brand: "Baseus", price: 4500, image: "baseus_cable.png", rating: 4.3 },
    { id: 76, name: "Logitech Wireless Mouse", brand: "Logitech", price: 12500, image: "logitech_mouse.png", rating: 4.4 },
    { id: 77, name: "Razer Gaming Keyboard", brand: "Razer", price: 85000, image: "razer_keyboard.png", rating: 4.7 },
    { id: 78, name: "HP LaserJet Printer", brand: "HP", price: 210000, image: "hp_printer.png", rating: 4.5 },
    { id: 79, name: "Canon Pixma Printer", brand: "Canon", price: 85000, image: "canon_printer.png", rating: 4.2 },
    { id: 80, name: "Epson Inkjet Printer", brand: "Epson", price: 95000, image: "epson_printer.png", rating: 4.3 },

    { id: 81, name: "Nike Backpack", brand: "Nike", price: 25000, image: "nike_backpack.png", rating: 4.4 },
    { id: 82, name: "Adidas Tracksuit", brand: "Adidas", price: 38000, image: "adidas_tracksuit.png", rating: 4.5 },
    { id: 83, name: "Puma Hoodie", brand: "Puma", price: 28000, image: "puma_hoodie.png", rating: 4.3 },
    { id: 84, name: "Fila Sneakers", brand: "Fila", price: 32000, image: "fila_sneakers.png", rating: 4.2 },
    { id: 85, name: "Under Armour T-Shirt", brand: "Under Armour", price: 15000, image: "ua_tshirt.png", rating: 4.4 },
    { id: 86, name: "Levi's Denim Jeans", brand: "Levi's", price: 35000, image: "levis_jeans.png", rating: 4.6 },
    { id: 87, name: "Gucci Belt", brand: "Gucci", price: 120000, image: "gucci_belt.png", rating: 4.7 },
    { id: 88, name: "Louis Vuitton Scarf", brand: "Louis Vuitton", price: 180000, image: "lv_scarf.png", rating: 4.8 },
    { id: 89, name: "Hermes Tie", brand: "Hermes", price: 95000, image: "hermes_tie.png", rating: 4.5 },
    { id: 90, name: "Zara Dress", brand: "Zara", price: 28000, image: "zara_dress.png", rating: 4.2 },

    { id: 91, name: "Samsung Galaxy S22 Ultra", brand: "Samsung", price: 950000, image: "s22ultra.png", rating: 5.0 },
    { id: 92, name: "iPhone 13 Mini", brand: "Apple", price: 580000, image: "iphone13mini.png", rating: 4.7 },
    { id: 93, name: "Google Pixel 6a", brand: "Google", price: 330000, image: "pixel6a.png", rating: 4.6 },
    { id: 94, name: "Xiaomi Poco X4", brand: "Xiaomi", price: 210000, image: "poco.png", rating: 4.4 },
    { id: 95, name: "OnePlus Nord CE", brand: "OnePlus", price: 270000, image: "oneplus.png", rating: 4.5 },
    { id: 96, name: "Realme 9 Pro", brand: "Realme", price: 190000, image: "realme9.png", rating: 4.3 },
    { id: 97, name: "Tecno Phantom X", brand: "Tecno", price: 310000, image: "phantomx.png", rating: 4.2 },
    { id: 98, name: "Infinix Zero Ultra", brand: "Infinix", price: 285000, image: "zero_ultra.png", rating: 4.1 },
    { id: 99, name: "Itel A60", brand: "Itel", price: 75000, image: "itel_a60.png", rating: 3.9 },
    { id: 100, name: "Oppo Find X5", brand: "Oppo", price: 450000, image: "oppo_find.png", rating: 4.6 },

    { id: 101, name: "LG Home Theatre", brand: "LG", price: 185000, image: "lg_home.png", rating: 4.5 },
    { id: 102, name: "Samsung Washing Machine 6kg", brand: "Samsung", price: 240000, image: "samsung_washer.png", rating: 4.6 },
    { id: 103, name: "Panasonic Electric Iron", brand: "Panasonic", price: 18000, image: "panasonic_iron.png", rating: 4.3 },
    { id: 104, name: "Binatone Toaster", brand: "Binatone", price: 15000, image: "toaster.png", rating: 4.2 },
    { id: 105, name: "Scanfrost Deep Freezer", brand: "Scanfrost", price: 310000, image: "scanfrost_freezer.png", rating: 4.4 },
    { id: 106, name: "Haier Thermocool Generator 3.5KVA", brand: "Haier", price: 450000, image: "haier_gen.png", rating: 4.7 },
    { id: 107, name: "Elepaq Generator 2.5KVA", brand: "Elepaq", price: 230000, image: "elepaq_gen.png", rating: 4.3 },
    { id: 108, name: "Sumec Firman Generator 5KVA", brand: "Sumec Firman", price: 520000, image: "firman.png", rating: 4.6 },
    { id: 109, name: "Tiger Generator 1.0KVA", brand: "Tiger", price: 95000, image: "tiger.png", rating: 4.0 },
    { id: 110, name: "Honda Generator 6.5KVA", brand: "Honda", price: 650000, image: "honda_gen.png", rating: 4.8 },

    { id: 111, name: "Samsung Curved Monitor 27-Inch", brand: "Samsung", price: 210000, image: "samsung_monitor.png", rating: 4.7 },
    { id: 112, name: "Dell UltraSharp Monitor", brand: "Dell", price: 320000, image: "dell_monitor.png", rating: 4.6 },
    { id: 113, name: "HP Omen Gaming Laptop", brand: "HP", price: 750000, image: "omen.png", rating: 4.8 },
    { id: 114, name: "MSI Gaming Laptop GF63", brand: "MSI", price: 580000, image: "msi.png", rating: 4.7 },
    { id: 115, name: "Acer Aspire 7", brand: "Acer", price: 430000, image: "acer.png", rating: 4.4 },
    { id: 116, name: "Razer Blade 15", brand: "Razer", price: 1200000, image: "razer_laptop.png", rating: 4.9 },
    { id: 117, name: "Apple Mac Mini M2", brand: "Apple", price: 450000, image: "macmini.png", rating: 4.7 },
    { id: 118, name: "Lenovo ThinkPad X1", brand: "Lenovo", price: 670000, image: "thinkpad.png", rating: 4.5 },
    { id: 119, name: "Asus ZenBook 14", brand: "Asus", price: 520000, image: "asus.png", rating: 4.6 },
    { id: 120, name: "Microsoft Xbox Series X", brand: "Microsoft", price: 600000, image: "xbox.png", rating: 4.9 },

    { id: 121, name: "Gaming Chair", brand: "DXRacer", price: 199000, image: "gaming-chair.png", rating: 4.6 },
    { id: 122, name: "Desk Lamp", brand: "Philips", price: 39000, image: "desk-lamp.png", rating: 4.3 },
    { id: 123, name: "Bookshelf", brand: "Ikea", price: 89000, image: "bookshelf.png", rating: 4.4 },
    { id: 124, name: "Wardrobe", brand: "Godrej", price: 249000, image: "wardrobe.png", rating: 4.5 },
    { id: 125, name: "Mattress", brand: "Sleepwell", price: 299000, image: "mattress.png", rating: 4.6 },
    { id: 126, name: "Vacuum Cleaner", brand: "Dyson", price: 149000, image: "vacuum-cleaner.png", rating: 4.7 },
    { id: 127, name: "Air Purifier", brand: "Coway", price: 199000, image: "air-purifier.png", rating: 4.5 },
    { id: 128, name: "Washing Machine", brand: "LG", price: 499000, image: "washing-machine.png", rating: 4.8 },
    { id: 129, name: "Refrigerator", brand: "Samsung", price: 799000, image: "refrigerator.png", rating: 4.7 },
    { id: 130, name: "Microwave Oven", brand: "Panasonic", price: 179000, image: "microwave-oven.png", rating: 4.4 },

    { id: 131, name: "Blender", brand: "NutriBullet", price: 59000, image: "blender.png", rating: 4.3 },
    { id: 132, name: "Toaster", brand: "Philips", price: 29000, image: "toaster.png", rating: 4.2 },
    { id: 133, name: "Coffee Maker", brand: "Nespresso", price: 99000, image: "coffee-maker.png", rating: 4.6 },
    { id: 134, name: "Hair Dryer", brand: "Dyson", price: 49000, image: "hair-dryer.png", rating: 4.7 },
    { id: 135, name: "Electric Shaver", brand: "Braun", price: 89000, image: "electric-shaver.png", rating: 4.5 },
    { id: 136, name: "Straightener", brand: "Remington", price: 69000, image: "straightener.png", rating: 4.4 },
    { id: 137, name: "Smart Light Bulb", brand: "Philips Hue", price: 19000, image: "smart-light-bulb.png", rating: 4.6 },
    { id: 138, name: "Router", brand: "TP-Link", price: 129000, image: "router.png", rating: 4.5 },
    { id: 139, name: "External Hard Drive", brand: "Seagate", price: 89000, image: "external-hard-drive.png", rating: 4.6 },
    { id: 140, name: "SSD", brand: "Samsung", price: 129000, image: "ssd.png", rating: 4.7 },

    { id: 141, name: "Graphics Card", brand: "NVIDIA", price: 499000, image: "graphics-card.png", rating: 4.9 },
    { id: 142, name: "Processor", brand: "Intel", price: 299000, image: "processor.png", rating: 4.8 },
    { id: 143, name: "Motherboard", brand: "ASUS", price: 179000, image: "motherboard.png", rating: 4.6 },
    { id: 144, name: "RAM", brand: "Corsair", price: 89000, image: "ram.png", rating: 4.6 },
    { id: 145, name: "Power Supply", brand: "EVGA", price: 99000, image: "power-supply.png", rating: 4.5 },
    { id: 146, name: "PC Case", brand: "NZXT", price: 109000, image: "pc-case.png", rating: 4.4 },
    { id: 147, name: "Monitor Stand", brand: "AmazonBasics", price: 49000, image: "monitor-stand.png", rating: 4.2 },
    { id: 148, name: "Webcam", brand: "Logitech", price: 89000, image: "webcam.png", rating: 4.6 },
    { id: 149, name: "Microphone", brand: "Blue Yeti", price: 129000, image: "microphone.png", rating: 4.7 },
    { id: 150, name: "Green Screen", brand: "Elgato", price: 99000, image: "green-screen.png", rating: 4.5 },

    { id: 151, name: "Drill Machine", brand: "Bosch", price: 79000, image: "drill-machine.png", rating: 4.6 },
    { id: 152, name: "Screwdriver Set", brand: "Stanley", price: 29000, image: "screwdriver-set.png", rating: 4.3 },
    { id: 153, name: "Hammer", brand: "DeWalt", price: 19000, image: "hammer.png", rating: 4.4 },
    { id: 154, name: "Wrench Set", brand: "Craftsman", price: 39000, image: "wrench-set.png", rating: 4.5 },
    { id: 155, name: "Paint Brush", brand: "Asian Paints", price: 9000, image: "paint-brush.png", rating: 4.2 },
    { id: 156, name: "Toolbox", brand: "Husky", price: 49000, image: "toolbox.png", rating: 4.5 },
    { id: 157, name: "Sewing Machine", brand: "Singer", price: 199000, image: "sewing-machine.png", rating: 4.6 },
    { id: 158, name: "Guitar", brand: "Yamaha", price: 299000, image: "guitar.png", rating: 4.7 },
    { id: 159, name: "Piano Keyboard", brand: "Casio", price: 399000, image: "piano-keyboard.png", rating: 4.6 },
    { id: 160, name: "Drum Set", brand: "Pearl", price: 599000, image: "drum-set.png", rating: 4.8 },

    { id: 161, name: "Violin", brand: "Stentor", price: 199000, image: "violin.png", rating: 4.6 },
    { id: 162, name: "Trumpet", brand: "Yamaha", price: 249000, image: "trumpet.png", rating: 4.5 },
    { id: 163, name: "Flute", brand: "Gemeinhardt", price: 149000, image: "flute.png", rating: 4.4 },
    { id: 164, name: "Saxophone", brand: "Selmer", price: 499000, image: "saxophone.png", rating: 4.8 },
    { id: 165, name: "Clarinet", brand: "Buffet Crampon", price: 199000, image: "clarinet.png", rating: 4.5 },
    { id: 166, name: "Harmonica", brand: "Hohner", price: 49000, image: "harmonica.png", rating: 4.3 },
    { id: 167, name: "Tambourine", brand: "Remo", price: 29000, image: "tambourine.png", rating: 4.2 },
    { id: 168, name: "DJ Controller", brand: "Pioneer", price: 299000, image: "dj-controller.png", rating: 4.7 },
    { id: 169, name: "Mixer", brand: "Behringer", price: 199000, image: "mixer.png", rating: 4.6 },
    { id: 170, name: "Headset", brand: "SteelSeries", price: 79000, image: "headset.png", rating: 4.5 },

    { id: 171, name: "Drone", brand: "DJI", price: 599000, image: "drone.png", rating: 4.8 },
    { id: 172, name: "Action Camera", brand: "GoPro", price: 299000, image: "action-camera.png", rating: 4.7 },
    { id: 173, name: "Camcorder", brand: "Sony", price: 399000, image: "camcorder.png", rating: 4.6 },
    { id: 174, name: "Projector", brand: "Epson", price: 349000, image: "projector.png", rating: 4.6 },
    { id: 175, name: "Smart Plug", brand: "TP-Link", price: 29000, image: "smart-plug.png", rating: 4.4 },
    { id: 176, name: "Smart Thermostat", brand: "Nest", price: 199000, image: "smart-thermostat.png", rating: 4.6 },
    { id: 177, name: "Smart Door Lock", brand: "August", price: 249000, image: "smart-door-lock.png", rating: 4.6 },
    { id: 178, name: "Smart Doorbell", brand: "Ring", price: 199000, image: "smart-doorbell.png", rating: 4.5 },
    { id: 179, name: "Security Camera", brand: "Arlo", price: 149000, image: "security-camera.png", rating: 4.6 },
    { id: 180, name: "Baby Monitor", brand: "Motorola", price: 129000, image: "baby-monitor.png", rating: 4.4 },

    { id: 181, name: "Smartwatch", brand: "Apple", price: 299000, image: "smartwatch.png", rating: 4.8 },
    { id: 182, name: "Fitness Tracker", brand: "Fitbit", price: 149000, image: "fitness-tracker.png", rating: 4.5 },
    { id: 183, name: "VR Headset", brand: "Oculus", price: 399000, image: "vr-headset.png", rating: 4.7 },
    { id: 184, name: "E-Reader", brand: "Amazon Kindle", price: 129000, image: "e-reader.png", rating: 4.6 },
    { id: 185, name: "3D Printer", brand: "Creality", price: 599000, image: "3d-printer.png", rating: 4.6 },
    { id: 186, name: "Electric Scooter", brand: "Xiaomi", price: 499000, image: "electric-scooter.png", rating: 4.7 },
    { id: 187, name: "Hoverboard", brand: "Swagtron", price: 299000, image: "hoverboard.png", rating: 4.5 },
    { id: 188, name: "Electric Bike", brand: "Rad Power", price: 999000, image: "electric-bike.png", rating: 4.7 },
    { id: 189, name: "Car Vacuum", brand: "Black+Decker", price: 89000, image: "car-vacuum.png", rating: 4.4 },
    { id: 190, name: "Car Charger", brand: "Anker", price: 19000, image: "car-charger.png", rating: 4.5 },
    { id: 191, name: "Dash Cam", brand: "Garmin", price: 199000, image: "dash-cam.png", rating: 4.6 },
    { id: 192, name: "GPS Navigator", brand: "TomTom", price: 179000, image: "gps-navigator.png", rating: 4.4 },
    { id: 193, name: "Car Stereo", brand: "Pioneer", price: 249000, image: "car-stereo.png", rating: 4.6 },
    { id: 194, name: "Car Speakers", brand: "JBL", price: 149000, image: "car-speakers.png", rating: 4.6 },
    { id: 195, name: "Portable Fridge", brand: "Dometic", price: 299000, image: "portable-fridge.png", rating: 4.5 },
    { id: 196, name: "Camping Tent", brand: "Coleman", price: 199000, image: "camping-tent.png", rating: 4.7 },
    { id: 197, name: "Sleeping Bag", brand: "The North Face", price: 129000, image: "sleeping-bag.png", rating: 4.6 },
    { id: 198, name: "Hiking Backpack", brand: "Osprey", price: 159000, image: "hiking-backpack.png", rating: 4.7 },
    { id: 199, name: "Portable Stove", brand: "Jetboil", price: 99000, image: "portable-stove.png", rating: 4.5 },
    { id: 200, name: "Lantern", brand: "Black Diamond", price: 49000, image: "lantern.png", rating: 4.4 },
];


  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 24;
  
  const filteredProducts = products.filter(
    (item) => item.price >= minVal && item.price <= maxVal && (brandSearch === "" || item.brand.toLowerCase().includes(brandSearch.toLowerCase()))
  );

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filterClicked = () => {
    const filterCategory = document.querySelector(`.${styles.productsLeft}`);

    filterCategory.classList.add(styles.active);
  }
  
  const removeFilter = () => {
    const filterCategory = document.querySelector(`.${styles.productsLeft}`);

    filterCategory.classList.remove(styles.active);
  }
    
  return (
    <>
    <Header />
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
            <button onClick={removeFilter} className={styles.productsLeftCancelBtn}>
              <i className="fa fa-times"></i>
            </button>
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
                        <input type="text" value={brandSearch} onChange={(e) => setBrandSearch(e.target.value)} placeholder="Search brand ..." />
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
                <button onClick={filterClicked} className={styles.filterBtnNew}>
                  <i className="fa fa-sliders-h"></i>
                  <span>Filter</span>
              </button>
            </div>
            ) : (
                <div className={styles.productsRightTop}></div>
            )}

            <div className={styles.productsRightBottom}>
                {
                    currentProducts.map((item, index) => (
                        <div key={index} className={styles.productCard}>
                            <div className={styles.productCardTop}>
                                <Image src={`/${item.image}`} className={styles.productImg} alt={item.name} fill />
                            </div>
                            <div className={styles.productCardBottom}>
                                <div className={styles.productCartPriceContainer}>
                                    <h2>₦{Number(item.price).toLocaleString()}</h2>
                                    <p>In Stock</p>
                                </div>
                                <div className={styles.productCardName}>
                                    <h2>{item.name}</h2>
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
                                        <p>{item.rating}</p>
                                    </div>
                                    <Link href={"/product?product_id=buhsbyrey7364977cjbi"}><i className="fa fa-arrow-right"></i> Add</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={styles.paginationContainer}>
              <ul className={styles.pagination}>
                {/* Prev Button */}
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
                {Array.from(
                  { length: totalPages },
                  (_, i) => i + 1
                )
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

                {/* Next Button */}
                <li className={styles.btnLi}>
                  <button
                    className={`${styles.btn} ${
                      currentPage === totalPages ? styles.hide : ""
                    }`}
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
    </div>
    <div className={styles.advertContainer}>
        <div className={styles.adverContent}>
            <Image src={"/ahiaglobal1.jpg"} className={styles.advertImg} fill />
        </div>
    </div>
    <RecentlyViewed />
    <FAQ />
    <Footer />
    </>
  );
}
