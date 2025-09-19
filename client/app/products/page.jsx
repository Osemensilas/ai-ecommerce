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
    { id: 1, name: "Oraimo Power Bank 20,000mAh", price: 14500, image: "oraimo.jpg", rating: 4.5 },
    { id: 2, name: "Samsung Galaxy Buds Pro", price: 65000, image: "earpod.jpg", rating: 4.0 },
    { id: 3, name: "Red Wig", price: 12000, image: "redwig.png", rating: 3.5 },
    { id: 4, name: "Andrew Pot", price: 85000, image: "andrew pot.png", rating: 4.2 },
    { id: 5, name: "Duvet", price: 3500, image: "duvet.png", rating: 4.8 },
    { id: 6, name: "Curly Hair", price: 720000, image: "hair1.png", rating: 4.9 },
    { id: 7, name: "Color Two Hair", price: 480000, image: "hair2.png", rating: 4.7 },
    { id: 8, name: "Straight Hair", price: 28000, image: "hair3.png", rating: 4.3 },
    { id: 9, name: "Color two straight hair", price: 195000, image: "hair4.png", rating: 4.6 },
    { id: 10, name: "Dettol Antiseptic 500ml", price: 2500, image: "dettol.png", rating: 4.1 },
    
    { id: 11, name: "MacBook Air M1 256GB", price: 630000, image: "macbook.png", rating: 4.9 },
    { id: 12, name: "HP Pavilion 15 Laptop", price: 420000, image: "hp.png", rating: 4.5 },
    { id: 13, name: "Beats Studio3 Headphones", price: 120000, image: "beats.png", rating: 4.4 },
    { id: 14, name: "Nike Air Force 1", price: 35000, image: "nike.png", rating: 4.7 },
    { id: 15, name: "Samsung 55-Inch 4K TV", price: 350000, image: "samsung_tv.png", rating: 4.8 },
    { id: 16, name: "Electric Blender 1.5L", price: 15000, image: "blender2.png", rating: 4.0 },
    { id: 17, name: "Children's Story Books (Set of 5)", price: 7500, image: "books.png", rating: 4.3 },
    { id: 18, name: "Luxury Wrist Watch - Men", price: 55000, image: "watch.png", rating: 4.6 },
    { id: 19, name: "Women’s Handbag - Black", price: 18500, image: "bag.png", rating: 4.4 },
    { id: 20, name: "Sony PlayStation Controller", price: 35000, image: "controller.png", rating: 4.5 },

    { id: 21, name: "Canon DSLR Camera EOS 4000D", price: 250000, image: "camera.png", rating: 4.7 },
    { id: 22, name: "Gaming Chair - Red/Black", price: 115000, image: "gaming_chair.png", rating: 4.6 },
    { id: 23, name: "Men's Polo Shirt - Blue", price: 9500, image: "polo.png", rating: 4.2 },
    { id: 24, name: "Samsung Galaxy Watch 5", price: 140000, image: "galaxy_watch.png", rating: 4.8 },
    { id: 25, name: "Air Fryer 5.5L Digital", price: 75000, image: "air_fryer.png", rating: 4.6 },
    { id: 26, name: "Women’s Necklace - Gold Plated", price: 22000, image: "necklace.png", rating: 4.4 },
    { id: 27, name: "Dell XPS 13 Laptop", price: 680000, image: "dell.png", rating: 4.8 },
    { id: 28, name: "Men’s Leather Wallet", price: 9500, image: "wallet.png", rating: 4.2 },
    { id: 29, name: "Kids Toy Car", price: 12000, image: "toy_car.png", rating: 4.3 },
    { id: 30, name: "Wireless Bluetooth Speaker", price: 18000, image: "speaker.png", rating: 4.5 },

    { id: 31, name: "Canon EOS 4000D DSLR Camera", price: 195000, image: "camera.png", rating: 4.5 },
    { id: 32, name: "Oraimo 3-in-1 Charging Cable", price: 4500, image: "cable.png", rating: 4.2 },
    { id: 33, name: "Nike Men's T-Shirt", price: 9000, image: "tshirt.png", rating: 4.0 },
    { id: 34, name: "Adidas Soccer Ball", price: 12000, image: "soccerball.png", rating: 4.4 },
    { id: 35, name: "Kenwood Electric Blender", price: 32000, image: "blender2.png", rating: 4.6 },
    { id: 36, name: "Generic Office Chair", price: 55000, image: "chair.png", rating: 4.1 },
    { id: 37, name: "Wooden Dining Table - 6 Seater", price: 185000, image: "diningtable.png", rating: 4.3 },
    { id: 38, name: "Dell 24-Inch Monitor", price: 72000, image: "monitor.png", rating: 4.5 },
    { id: 39, name: "Samsung 1TB Portable SSD", price: 115000, image: "ssd.png", rating: 4.8 },
    { id: 40, name: "Logitech Wireless Keyboard", price: 18000, image: "keyboard.png", rating: 4.4 },

    { id: 41, name: "Men's Leather Wallet", price: 7500, image: "wallet.png", rating: 4.1 },
    { id: 42, name: "Silver Necklace - Women", price: 21500, image: "necklace.png", rating: 4.3 },
    { id: 43, name: "Children's School Bag", price: 6000, image: "schoolbag.png", rating: 4.2 },
    { id: 44, name: "Stainless Steel Kettle", price: 8500, image: "kettle.png", rating: 4.5 },
    { id: 45, name: "Men’s Black Jeans", price: 13500, image: "jeans.png", rating: 4.0 },
    { id: 46, name: "Women’s Red Gown", price: 22000, image: "redgown.png", rating: 4.6 },
    { id: 47, name: "Kids' Bicycle - Blue", price: 48000, image: "bicycle.png", rating: 4.4 },
    { id: 48, name: "PlayStation 5 Console", price: 680000, image: "ps5.png", rating: 4.9 },
    { id: 49, name: "Xbox Wireless Controller", price: 42000, image: "xboxcontroller.png", rating: 4.7 },
    { id: 50, name: "LG Sound Bar System", price: 125000, image: "soundbar.png", rating: 4.5 },

    { id: 51, name: "Electric Standing Fan", price: 25000, image: "fan.png", rating: 4.1 },
    { id: 52, name: "Philips Air Fryer", price: 89000, image: "airfryer.png", rating: 4.6 },
    { id: 53, name: "Women’s Handbag - Black", price: 18000, image: "handbag.png", rating: 4.2 },
    { id: 54, name: "Men’s Formal Shoes", price: 25000, image: "shoes.png", rating: 4.3 },
    { id: 55, name: "Apple AirPods Pro", price: 95000, image: "airpods.png", rating: 4.8 },
    { id: 56, name: "Infinix Hot 40i Smartphone", price: 105000, image: "infinix.png", rating: 4.4 },
    { id: 57, name: "iPhone 15 Pro Max", price: 1150000, image: "iphone15.png", rating: 4.9 },
    { id: 58, name: "Tecno Spark 20", price: 88000, image: "tecno.png", rating: 4.3 },
    { id: 59, name: "HP Envy x360 Laptop", price: 425000, image: "laptop.png", rating: 4.7 },
    { id: 60, name: "MacBook Pro 16-inch", price: 1150000, image: "macbook.png", rating: 4.9 },

    { id: 61, name: "Samsung 55-Inch Smart TV", price: 465000, image: "tv.png", rating: 4.8 },
    { id: 62, name: "Sony WH-1000XM5 Headphones", price: 165000, image: "headphones.png", rating: 4.9 },
    { id: 63, name: "Men’s Casual Shirt", price: 11000, image: "shirt.png", rating: 4.0 },
    { id: 64, name: "Women’s Wigs - Curly", price: 28000, image: "wig.png", rating: 4.5 },
    { id: 65, name: "Office Desk - Wooden", price: 75000, image: "desk.png", rating: 4.3 },
    { id: 66, name: "Asus ROG Gaming Laptop", price: 850000, image: "asusrog.png", rating: 4.8 },
    { id: 67, name: "HP LaserJet Printer", price: 98000, image: "printer.png", rating: 4.4 },
    { id: 68, name: "Canon Pixma Inkjet Printer", price: 72000, image: "pixma.png", rating: 4.2 },
    { id: 69, name: "Smartwatch - Black", price: 25000, image: "smartwatch.png", rating: 4.1 },
    { id: 70, name: "Huawei Band 8", price: 22000, image: "band.png", rating: 4.3 },

    { id: 71, name: "Apple Watch Series 9", price: 450000, image: "applewatch.png", rating: 4.8 },
    { id: 72, name: "Men’s Tracksuit", price: 28000, image: "tracksuit.png", rating: 4.2 },
    { id: 73, name: "Women’s Heels", price: 18500, image: "heels.png", rating: 4.3 },
    { id: 74, name: "Electric Iron - Philips", price: 9500, image: "iron.png", rating: 4.1 },
    { id: 75, name: "Mouka Foam Mattress", price: 68000, image: "mattress.png", rating: 4.5 },
    { id: 76, name: "Baby Stroller", price: 42000, image: "stroller.png", rating: 4.3 },
    { id: 77, name: "Kitchen Utensils Set", price: 15000, image: "utensils.png", rating: 4.4 },
    { id: 78, name: "Gas Cooker - 4 Burners", price: 95000, image: "cooker.png", rating: 4.6 },
    { id: 79, name: "Refrigerator - Double Door", price: 325000, image: "fridge.png", rating: 4.7 },
    { id: 80, name: "Washing Machine - LG", price: 295000, image: "washingmachine.png", rating: 4.6 },

    { id: 81, name: "Microwave Oven - Samsung", price: 98000, image: "microwave.png", rating: 4.4 },
    { id: 82, name: "Toaster - Philips", price: 12500, image: "toaster.png", rating: 4.3 },
    { id: 83, name: "Electric Blender - Binatone", price: 18500, image: "blender3.png", rating: 4.2 },
    { id: 84, name: "Ceiling Fan - Panasonic", price: 21000, image: "ceilingfan.png", rating: 4.0 },
    { id: 85, name: "Home Theatre System - Sony", price: 185000, image: "hometheatre.png", rating: 4.7 },
    { id: 86, name: "Guitar - Acoustic", price: 28000, image: "guitar.png", rating: 4.5 },
    { id: 87, name: "Drum Set - Beginner", price: 82000, image: "drumset.png", rating: 4.3 },
    { id: 88, name: "Violin - 4/4 Size", price: 35000, image: "violin.png", rating: 4.4 },
    { id: 89, name: "Trumpet - Brass", price: 48000, image: "trumpet.png", rating: 4.2 },
    { id: 90, name: "Flute - Yamaha", price: 25000, image: "flute.png", rating: 4.3 },

    { id: 91, name: "Bed Frame - Wooden", price: 95000, image: "bed.png", rating: 4.5 },
    { id: 92, name: "Wardrobe - 3 Doors", price: 125000, image: "wardrobe.png", rating: 4.6 },
    { id: 93, name: "Sofa Set - Fabric", price: 225000, image: "sofa.png", rating: 4.4 },
    { id: 94, name: "Carpet - Large", price: 45000, image: "carpet.png", rating: 4.2 },
    { id: 95, name: "Curtains - 2 Panels", price: 18000, image: "curtains.png", rating: 4.3 },
    { id: 96, name: "Table Lamp", price: 7500, image: "lamp.png", rating: 4.1 },
    { id: 97, name: "Wall Clock - Round", price: 5500, image: "clock.png", rating: 4.0 },
    { id: 98, name: "Mirror - Full Length", price: 32000, image: "mirror.png", rating: 4.2 },
    { id: 99, name: "Bookshelf - Wooden", price: 42000, image: "bookshelf.png", rating: 4.3 },
    { id: 100, name: "Study Chair - Ergonomic", price: 65000, image: "studychair.png", rating: 4.4 },

    { id: 101, name: "Bluetooth Car FM Transmitter", price: 8500, image: "carfm.png", rating: 4.2 },
    { id: 102, name: "Portable Power Bank 10,000mAh", price: 9500, image: "powerbank.png", rating: 4.3 },
    { id: 103, name: "Samsung Galaxy A54", price: 210000, image: "galaxya54.png", rating: 4.5 },
    { id: 104, name: "Oppo Reno 10", price: 315000, image: "opporeno.png", rating: 4.6 },
    { id: 105, name: "Xiaomi Redmi Note 13 Pro", price: 185000, image: "redmi.png", rating: 4.4 },
    { id: 106, name: "Smart LED Bulb - WiFi Control", price: 5500, image: "smartbulb.png", rating: 4.2 },
    { id: 107, name: "Portable Mini Projector", price: 62000, image: "projector.png", rating: 4.3 },
    { id: 108, name: "Anker Wireless Earbuds", price: 48000, image: "anker.png", rating: 4.5 },
    { id: 109, name: "Lenovo ThinkPad X1 Carbon", price: 950000, image: "thinkpad.png", rating: 4.8 },
    { id: 110, name: "iPad Pro 12.9-inch", price: 1150000, image: "ipadpro.png", rating: 4.9 },

    { id: 111, name: "Samsung Galaxy Tab S9", price: 850000, image: "tabs9.png", rating: 4.7 },
    { id: 112, name: "Kindle Paperwhite", price: 78000, image: "kindle.png", rating: 4.6 },
    { id: 113, name: "Men's Leather Belt", price: 7500, image: "belt.png", rating: 4.1 },
    { id: 114, name: "Women's Sunglasses", price: 12500, image: "sunglasses.png", rating: 4.3 },
    { id: 115, name: "Men’s Hoodie - Grey", price: 18500, image: "hoodie.png", rating: 4.2 },
    { id: 116, name: "Women’s Summer Dress", price: 19500, image: "summerdress.png", rating: 4.4 },
    { id: 117, name: "Kids’ Sneakers - Pink", price: 12500, image: "kidsneakers.png", rating: 4.3 },
    { id: 118, name: "Baby Cot - Wooden", price: 78000, image: "babycot.png", rating: 4.5 },
    { id: 119, name: "Men’s Sports Watch", price: 28500, image: "sportswatch.png", rating: 4.4 },
    { id: 120, name: "Women’s Perfume - 100ml", price: 32000, image: "perfume.png", rating: 4.6 },

    { id: 121, name: "Men’s Perfume - 100ml", price: 35000, image: "menperfume.png", rating: 4.5 },
    { id: 122, name: "Makeup Brush Set (12 pcs)", price: 9500, image: "makeupbrush.png", rating: 4.3 },
    { id: 123, name: "Lipstick Set - 6 Colors", price: 7800, image: "lipstick.png", rating: 4.2 },
    { id: 124, name: "Hair Dryer - Philips", price: 18500, image: "hairdryer.png", rating: 4.4 },
    { id: 125, name: "Hair Straightener", price: 15500, image: "straightener.png", rating: 4.3 },
    { id: 126, name: "Men’s Beanie Cap", price: 4500, image: "beanie.png", rating: 4.1 },
    { id: 127, name: "Leather Jacket - Men", price: 48000, image: "leatherjacket.png", rating: 4.5 },
    { id: 128, name: "Women’s Winter Coat", price: 65000, image: "coat.png", rating: 4.6 },
    { id: 129, name: "Gaming Mouse - RGB", price: 12500, image: "mouse.png", rating: 4.4 },
    { id: 130, name: "Mechanical Keyboard - RGB", price: 35000, image: "mechkeyboard.png", rating: 4.6 },

    { id: 131, name: "External Hard Drive 2TB", price: 68000, image: "harddrive.png", rating: 4.5 },
    { id: 132, name: "Sandisk 128GB Flash Drive", price: 9500, image: "flashdrive.png", rating: 4.4 },
    { id: 133, name: "Canon EOS R6 Camera", price: 1350000, image: "eosr6.png", rating: 4.8 },
    { id: 134, name: "Tripod Stand", price: 18000, image: "tripod.png", rating: 4.3 },
    { id: 135, name: "Ring Light 18-inch", price: 28000, image: "ringlight.png", rating: 4.4 },
    { id: 136, name: "Mic Stand with Pop Filter", price: 15000, image: "micstand.png", rating: 4.2 },
    { id: 137, name: "USB Microphone - Condenser", price: 35000, image: "microphone.png", rating: 4.5 },
    { id: 138, name: "DJ Mixer Console", price: 155000, image: "dj.png", rating: 4.6 },
    { id: 139, name: "Studio Headphones", price: 58000, image: "studioheadphones.png", rating: 4.5 },
    { id: 140, name: "Wireless Lavalier Mic", price: 32000, image: "lavalier.png", rating: 4.3 },

    { id: 141, name: "Smart Door Lock - Fingerprint", price: 68000, image: "doorlock.png", rating: 4.5 },
    { id: 142, name: "Home Security Camera", price: 42000, image: "securitycam.png", rating: 4.4 },
    { id: 143, name: "Solar Power Generator", price: 250000, image: "solargen.png", rating: 4.6 },
    { id: 144, name: "Rechargeable Torch Light", price: 12500, image: "torch.png", rating: 4.2 },
    { id: 145, name: "Smart Smoke Detector", price: 18000, image: "smoke.png", rating: 4.3 },
    { id: 146, name: "Water Purifier - Kent", price: 88000, image: "purifier.png", rating: 4.4 },
    { id: 147, name: "Electric Pressure Cooker", price: 52000, image: "pressurecooker.png", rating: 4.5 },
    { id: 148, name: "Rice Cooker - Panasonic", price: 28500, image: "ricecooker.png", rating: 4.3 },
    { id: 149, name: "Induction Cooker", price: 35000, image: "induction.png", rating: 4.2 },
    { id: 150, name: "Juicer - Philips", price: 28500, image: "juicer.png", rating: 4.4 },

    { id: 151, name: "Electric Kettle - Kenwood", price: 13500, image: "kettle2.png", rating: 4.3 },
    { id: 152, name: "Blender & Grinder Combo", price: 28000, image: "blendercombo.png", rating: 4.5 },
    { id: 153, name: "Hand Mixer", price: 9500, image: "handmixer.png", rating: 4.1 },
    { id: 154, name: "Ice Cream Maker", price: 45000, image: "icecream.png", rating: 4.4 },
    { id: 155, name: "Popcorn Machine", price: 38000, image: "popcorn.png", rating: 4.2 },
    { id: 156, name: "Bread Toaster - 4 Slice", price: 18500, image: "toaster4.png", rating: 4.3 },
    { id: 157, name: "Water Dispenser - LG", price: 82000, image: "dispenser.png", rating: 4.4 },
    { id: 158, name: "Smart Refrigerator", price: 580000, image: "smartfridge.png", rating: 4.8 },
    { id: 159, name: "LG Front Load Washing Machine", price: 395000, image: "washingmachine2.png", rating: 4.6 },
    { id: 160, name: "Dishwasher - Bosch", price: 425000, image: "dishwasher.png", rating: 4.7 },

    { id: 161, name: "Vacuum Cleaner - Dyson", price: 185000, image: "vacuum.png", rating: 4.8 },
    { id: 162, name: "Robot Vacuum Cleaner", price: 155000, image: "robotvacuum.png", rating: 4.6 },
    { id: 163, name: "Steam Mop", price: 32000, image: "steammop.png", rating: 4.3 },
    { id: 164, name: "Cloth Steamer", price: 25000, image: "steamer.png", rating: 4.2 },
    { id: 165, name: "Air Conditioner - LG 1.5HP", price: 280000, image: "ac.png", rating: 4.6 },
    { id: 166, name: "Standing AC - Samsung", price: 395000, image: "standingac.png", rating: 4.7 },
    { id: 167, name: "Humidifier", price: 18500, image: "humidifier.png", rating: 4.3 },
    { id: 168, name: "Dehumidifier", price: 65000, image: "dehumidifier.png", rating: 4.4 },
    { id: 169, name: "Air Purifier - Sharp", price: 85000, image: "airpurifier.png", rating: 4.5 },
    { id: 170, name: "Smart Thermostat", price: 45000, image: "thermostat.png", rating: 4.4 },

    { id: 171, name: "Bicycle Helmet", price: 9500, image: "helmet.png", rating: 4.3 },
    { id: 172, name: "Camping Tent - 4 Persons", price: 42000, image: "tent.png", rating: 4.4 },
    { id: 173, name: "Sleeping Bag - Waterproof", price: 15500, image: "sleepingbag.png", rating: 4.2 },
    { id: 174, name: "Hiking Backpack 60L", price: 35000, image: "backpack.png", rating: 4.5 },
    { id: 175, name: "Fishing Rod - Carbon Fiber", price: 28500, image: "fishingrod.png", rating: 4.3 },
    { id: 176, name: "Treadmill - Electric", price: 295000, image: "treadmill.png", rating: 4.6 },
    { id: 177, name: "Dumbbell Set - 20kg", price: 18500, image: "dumbbell.png", rating: 4.4 },
    { id: 178, name: "Yoga Mat - Anti Slip", price: 6500, image: "yogamat.png", rating: 4.3 },
    { id: 179, name: "Skipping Rope - Adjustable", price: 3500, image: "rope.png", rating: 4.2 },
    { id: 180, name: "Football Boots - Nike", price: 22500, image: "footballboots.png", rating: 4.5 },

    { id: 181, name: "Basketball - Spalding", price: 15000, image: "basketball.png", rating: 4.4 },
    { id: 182, name: "Tennis Racket - Wilson", price: 32000, image: "tennisracket.png", rating: 4.5 },
    { id: 183, name: "Cricket Bat - SS", price: 28500, image: "cricket.png", rating: 4.2 },
    { id: 184, name: "Golf Club Set", price: 185000, image: "golf.png", rating: 4.6 },
    { id: 185, name: "Boxing Gloves - Everlast", price: 15500, image: "gloves.png", rating: 4.3 },
    { id: 186, name: "Badminton Racket - Yonex", price: 8500, image: "badminton.png", rating: 4.2 },
    { id: 187, name: "Skateboard - Wooden", price: 18500, image: "skateboard.png", rating: 4.4 },
    { id: 188, name: "Roller Skates", price: 15500, image: "rollerskates.png", rating: 4.3 },
    { id: 189, name: "Scooter - Kids", price: 19500, image: "scooter.png", rating: 4.4 },
    { id: 190, name: "Hoverboard - Smart Balance", price: 85000, image: "hoverboard.png", rating: 4.5 },

    { id: 191, name: "Drone with 4K Camera", price: 185000, image: "drone.png", rating: 4.6 },
    { id: 192, name: "RC Car - Rechargeable", price: 18500, image: "rccar.png", rating: 4.3 },
    { id: 193, name: "LEGO Classic Bricks Set", price: 32000, image: "lego.png", rating: 4.5 },
    { id: 194, name: "Puzzle Board 1000 Pieces", price: 9500, image: "puzzle.png", rating: 4.2 },
    { id: 195, name: "Chess Board - Wooden", price: 12500, image: "chess.png", rating: 4.4 },
    { id: 196, name: "UNO Card Game", price: 3500, image: "uno.png", rating: 4.3 },
    { id: 197, name: "Scrabble Game", price: 7800, image: "scrabble.png", rating: 4.2 },
    { id: 198, name: "Monopoly Board Game", price: 15500, image: "monopoly.png", rating: 4.4 },
    { id: 199, name: "Table Tennis Set", price: 18500, image: "tabletennis.png", rating: 4.3 },
    { id: 200, name: "Karaoke Machine", price: 52000, image: "karaoke.png", rating: 4.5 },
  ];


  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(products.length / productsPerPage);

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
