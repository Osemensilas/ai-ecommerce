'use client';

import styles from "../app/css/product.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { ShoppingCartSharp } from "@mui/icons-material";
import { Typography } from "@mui/material";


export default function ProductsPage() {
  const searchParams = useSearchParams();

  const category = searchParams.get("category") || "All Category";
  const subCategory = searchParams.get("sub-category") || "All Sub-category";
  const type = searchParams.get("type") || "All Type";

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
        name: "Grocery",
        items: [
          { id: 1, item: "Fresh Products", url: "/products?category=Daily Essentials&sub-category=Grocery&type=Fresh Product", type: "Fresh Product" },
          { id: 2, item: "Meat & Seafood", url: "/products?category=Daily Essentials&sub-category=Grocery&type=Meat and Seafood", type: "Meat and Seafood" },
          { id: 3, item: "Dairy & Eggs", url: "/products?category=Daily Essentials&sub-category=Grocery&type=Dairy and Eggs", type: "Dairy and Eggs" },
          { id: 4, item: "Bakery", url: "/products?category=Daily Essentials&sub-category=Grocery&type=Bakery", type: "Bakery" },
          { id: 5, item: "Pantry Staples", url: "/products?category=Daily Essentials&sub-category=Grocery&type=Pantry Staples", type: "Pantry Staples" },
          { id: 6, item: "Beverages", url: "/products?category=Daily Essentials&sub-category=Grocery&type=Beverages", type: "Beverages" },
          { id: 7, item: "Snacks & Candy", url: "/products?category=Daily Essentials&sub-category=Grocery&type=Snacks and Candy", type: "Snacks and Candy" }
        ]
      },
      {
        id: 2,
        name: "Beauty",
        items: [
          { id: 1, item: "Makeup", url: "/products?category=Daily Essentials&sub-category=Beauty&type=Makeup", type: "Makeup" },
          { id: 2, item: "Skincare", url: "/products?category=Daily Essentials&sub-category=Beauty&type=Skincare", type: "Skincare" },
          { id: 3, item: "Haircare", url: "/products?category=Daily Essentials&sub-category=Beauty&type=Haircare", type: "Haircare" },
          { id: 4, item: "Personal Care", url: "/products?category=Daily Essentials&sub-category=Beauty&type=Personal Care", type: "Personal Care" },
          { id: 5, item: "Fragrance", url: "/products?category=Daily Essentials&sub-category=Beauty&type=Fragrance", type: "Fragrance" }
        ]
      },
      {
        id: 3,
        name: "Health",
        items: [
          { id: 1, item: "Vitamins", url: "/products?category=Daily Essentials&sub-category=Health&type=Vitamins", type: "Vitamins" },
          { id: 2, item: "Health Monitor", url: "/products?category=Daily Essentials&sub-category=Health&type=Health Monitor", type: "Health Monitor" },
          { id: 3, item: "Supplement", url: "/products?category=Daily Essentials&sub-category=Health&type=Supplement", type: "Supplement" },
          { id: 4, item: "First Aid", url: "/products?category=Daily Essentials&sub-category=Health&type=First Aid", type: "First Aid" },
          { id: 5, item: "Vision Care", url: "/products?category=Daily Essentials&sub-category=Health&type=Vision Care", type: "Vision Care" },
          { id: 6, item: "Wellness Product", url: "/products?category=Daily Essentials&sub-category=Health&type=Wellness Product", type: "Wellness Product" }
        ]
      },
      {
        id: 4,
        name: "Baby & Maternity",
        items: [
          { id: 1, item: "Baby Clothing", url: "/products?category=Daily Essentials&sub-category=Baby and Marternity&type=Baby Clothing", type: "Baby Clothing" },
          { id: 2, item: "Diapers & Wipes", url: "/products?category=Daily Essentials&sub-category=Baby and Marternity&type=Diapers and Wipes", type: "Diapers and Wipes" },
          { id: 3, item: "Feeding Supplies", url: "/products?category=Daily Essentials&sub-category=Baby and Marternity&type=Feeding Supplies", type: "Feeding Supplies" },
          { id: 4, item: "Nursery (Cribs & Bedding)", url: "/products?category=Daily Essentials&sub-category=Baby and Marternity&type=Nursery", type: "Nursery" },
          { id: 5, item: "Strollers and Car Seats", url: "/products?category=Daily Essentials&sub-category=Baby and Marternity&type=Strollers and Car Seats", type: "Strollers and Car Seats" },
          { id: 6, item: "Maternity Clothing", url: "/products?category=Daily Essentials&sub-category=Baby and Marternity&type=Maternity Clothing", type: "Maternity Clothing" }
        ]
      },
      {
        id: 5,
        name: "Computers",
        items: [
          { id: 1, item: "Monitor", url: "/products?category=Electronics and Tech&sub-category=Computers&type=Monitor", type: "Monitor" },
          { id: 2, item: "Digital Whiteboard", url: "/products?category=Electronics and Tech&sub-category=Computers&type=Digital Whiteboard", type: "Digital Whiteboard" },
          { id: 3, item: "Desktops", url: "/products?category=Electronics and Tech&sub-category=Computers&type=Desktops", type: "Desktops" },
          { id: 4, item: "Laptops", url: "/products?category=Electronics and Tech&sub-category=Computers&type=Laptops", type: "Laptops" },
          { id: 5, item: "Macbooks", url: "/products?category=Electronics and Tech&sub-category=Computers&type=Macbooks", type: "Macbooks" },
          { id: 6, item: "Computer Accessories", url: "/products?category=Electronics and Tech&sub-category=Computers&type=Computer Assessories", type: "Computer Assessories" }
        ]
      },
      {
        id: 6,
        name: "Smart Homes",
        items: [
          { id: 1, item: "Plugs & Outlets", url: "/products?category=Electronics and Tech&sub-category=Smart Homes&type=Plugs and Outlets", type: "Plugs and Outlets" },
          { id: 2, item: "Detectors & Sensors", url: "/products?category=Electronics and Tech&sub-category=Smart Homes&type=Detectors and Sensors", type: "Detectors and Sensors" },
          { id: 3, item: "Wifi & Networking", url: "/products?category=Electronics and Tech&sub-category=Smart Homes&type=Wifi and Networking", type: "Wifi and Networking" },
          { id: 4, item: "Cameras", url: "/products?category=Electronics and Tech&sub-category=Smart Homes&type=Cameras", type: "Cameras" },
          { id: 5, item: "Locks & Entry", url: "/products?category=Electronics and Tech&sub-category=Smart Homes&type=Locks and Entry", type: "Locks and Entry" },
          { id: 6, item: "Home Lightening", url: "/products?category=Electronics and Tech&sub-category=Smart Homes&type=Home Lightening", type: "Home Lightening" }
        ]
      },
      {
        id: 7,
        name: "Electronics",
        items: [
          { id: 1, item: "Televisions", url: "/products?category=Electronics and Tech&sub-category=Electronics&type=Vitamins", type: "Vitamins" }, // note: matches snippet (has 'Vitamins')
          { id: 2, item: "Cameras", url: "/products?category=Electronics and Tech&sub-category=Electronics&type=Cameras", type: "Cameras" },
          { id: 3, item: "Home Audio", url: "/products?category=Electronics and Tech&sub-category=Electronics&type=Home Audio", type: "Home Audio" },
          { id: 4, item: "Sewing Machine", url: "/products?category=Electronics and Tech&sub-category=Electronics&type=Sewing Machine", type: "Sewing Machine" },
          { id: 5, item: "Generators", url: "/products?category=Electronics and Tech&sub-category=Electronics&type=Generator", type: "Generator" },
          { id: 6, item: "Portable Power", url: "/products?category=Electronics and Tech&sub-category=Electronics&type=Portable Power", type: "Portable Power" }
        ]
      },
      {
        id: 8,
        name: "Gaming",
        items: [
          { id: 1, item: "PlayStation Console", url: "/products?category=Electronics and tech&sub-category=Gaming&type=Playstation Console", type: "Playstation Console" },
          { id: 2, item: "Gaming Headset", url: "/products?category=Electronics and tech&sub-category=Gaming&type=Gaming Headset", type: "Gaming Headset" },
          { id: 3, item: "Controllers", url: "/products?category=Electronics and tech&sub-category=Gaming&type=Controllers", type: "Controllers" },
          { id: 4, item: "Gaming Merchandise", url: "/products?category=Electronics and tech&sub-category=Gaming&type=Gaming Merchandise", type: "Gaming Merchandise" }
        ]
      },
      {
        id: 9,
        name: "Phones & Tablets",
        items: [
          { id: 1, item: "iPhone", url: "/products?category=Electronics and Tech&sub-category=Phones and Tablets&type=iPhone", type: "iPhone" },
          { id: 2, item: "Android", url: "/products?category=Electronics and Tech&sub-category=Phones and Tablets&type=Android", type: "Android" },
          { id: 3, item: "Tablets", url: "/products?category=Electronics and Tech&sub-category=Phones and Tablets&type=Tablets", type: "Tablets" },
          { id: 4, item: "Phone Accessories", url: "/products?category=Electronics and Tech&sub-category=Phones and Tablets&type=Phone Accessories", type: "Phone Accessories" }
        ]
      },
      {
        id: 10,
        name: "Wearables",
        items: [
          { id: 1, item: "Smartwatches", url: "/products?category=electronics and tech&sub-category=Wearables&type=Smartwatches", type: "Smartwatches" },
          { id: 2, item: "Fitness Bands", url: "/products?category=electronics and tech&sub-category=Wearables&type=Fitness bands", type: "Fitness bands" },
          { id: 3, item: "VR Headsets", url: "/products?category=electronics and tech&sub-category=Wearables&type=VR Headset", type: "VR Headset" }
        ]
      },
      {
        id: 11,
        name: "Women's Fashion",
        items: [
          { id: 1, item: "Clothing", url: "/products?category=Fashion&sub-category=Women's Fashion&type=Clothing", type: "Clothing" },
          { id: 2, item: "Shoes", url: "/products?category=Fashion&sub-category=Women's Fashion&type=Shoes", type: "Shoes" },
          { id: 3, item: "Jewelry", url: "/products?category=Fashion&sub-category=Women's Fashion&type=Jewery", type: "Jewery" },
          { id: 4, item: "Watches", url: "/products?category=Fashion&sub-category=Women's Fashion&type=Watches", type: "Watches" }
        ]
      },
      {
        id: 12,
        name: "Men's Fashion",
        items: [
          { id: 1, item: "Clothing", url: "/products?category=Fashion&sub-category=Men's Fashion&type=Clothing", type: "Clothing" },
          { id: 2, item: "Shoes", url: "/products?category=Fashion&sub-category=Men's Fashion&type=Shoes", type: "Shoes" },
          { id: 3, item: "Caps", url: "/products?category=Fashion&sub-category=Men's Fashion&type=Caps", type: "Caps" },
          { id: 4, item: "Watches", url: "/products?category=Fashion&sub-category=Men's Fashion&type=Watches", type: "Watches" }
        ]
      },
      {
        id: 13,
        name: "Kids and Baby Fashion",
        items: [
          { id: 1, item: "Clothing", url: "/products?category=Fashion&sub-category=Kids and Baby Fashion&type=Clothing", type: "Clothing" },
          { id: 2, item: "Shoes", url: "/products?category=Fashion&sub-category=Kids and Baby Fashion&type=Shoes", type: "Shoes" },
          { id: 3, item: "Accessories", url: "/products?category=Fashion&sub-category=Kids and Baby Fashion&type=Jewery", type: "Jewery" }
        ]
      },
      {
        id: 14,
        name: "dining & kitchen",
        items: [
          { id: 1, item: "Cookware", url: "/products?category=Home&sub-category=Dining and Kitchen&type=Cookware", type: "Cookware" },
          { id: 2, item: "Utensils", url: "/products?category=Home&sub-category=Dining and Kitchen&type=Utensils", type: "Utensils" },
          { id: 3, item: "Tableware", url: "/products?category=Home&sub-category=Dining and Kitchen&type=Tableware", type: "Tableware" }
        ]
      },
      {
        id: 15,
        name: "home decor",
        items: [
          { id: 1, item: "Wall Art", url: "/products?category=Home&sub-category=Home Decor&type=Wall Art", type: "Wall Art" },
          { id: 2, item: "Vases", url: "/products?category=Home&sub-category=Home Decor&type=Vases", type: "Vases" }
        ]
      },
      {
        id: 16,
        name: "home essentials",
        items: [
          { id: 1, item: "Furniture", url: "/products?category=Home&sub-category=Home Essentials&type=Furniture", type: "Furniture" },
          { id: 2, item: "Bedding", url: "/products?category=Home&sub-category=Home Essentials&type=Bedding", type: "Bedding" },
          { id: 3, item: "Rugs", url: "/products?category=Home&sub-category=Home Essentials&type=Rugs", type: "Rugs" },
          { id: 4, item: "Curtains & Window", url: "/products?category=Home&sub-category=Home Essentials&type=Curtains and Windows", type: "Curtains and Windows" },
          { id: 5, item: "Lighting & Ceiling Fans", url: "/products?category=Home&sub-category=Home Essentials&type=Lightening and Ceiling Fans", type: "Lightening and Ceiling Fans" }
        ]
      },
      {
        id: 17,
        name: "appliances",
        items: [
          { id: 1, item: "Blenders", url: "/products?category=Home&sub-category=Appliances&type=Blenders", type: "Blenders" },
          { id: 2, item: "Air Fryers", url: "/products?category=Home&sub-category=Appliances&type=Air Fryers", type: "Air Fryers" },
          { id: 3, item: "Electric Jugs", url: "/products?category=Home&sub-category=Appliances&type=Electric Jugs", type: "Electric Jugs" }
        ]
      },
      {
        id: 18,
        name: "luggage & travel",
        items: [
          { id: 1, item: "Suitcases", url: "/products?category=Home&sub-category=Luggage and Travel&type=Suitcases", type: "Suitcases" },
          { id: 2, item: "Bag Packs", url: "/products?category=Home&sub-category=Luggage and Travel&type=Bag Packs", type: "Bag Packs" },
          { id: 3, item: "Travel Accessories", url: "/products?category=Home&sub-category=Luggage and Travel&type=Travel Accessories", type: "Travel Accessories" }
        ]
      },
      {
        id: 19,
        name: "building materials",
        items: [
          { id: 1, item: "Plumbing", url: "/products?category=Home&sub-category=Building Material&type=Plumbing", type: "Plumbing" },
          { id: 2, item: "Electrical", url: "/products?category=Home&sub-category=Building Material&type=Electrical", type: "Electrical" },
          { id: 3, item: "Paint & Supplies", url: "/products?category=Home&sub-category=Building Material&type=Paint and Supplies", type: "Paint and Supplies" }
        ]
      },
      {
        id: 20,
        name: "Car Accessories",
        items: [
          { id: 1, item: "Tyres", url: "/products?category=Automative&sub-category=Car Accessories&type=Tyres", type: "Tyres" },
          { id: 2, item: "Car Rims", url: "/products?category=Automative&sub-category=Car Accessories&type=Car Rims", type: "Car Rims" },
          { id: 3, item: "Cleaning Kits", url: "/products?category=Automative&sub-category=Car Accessories&type=Cleaning Kits", type: "Cleaning Kits" },
          { id: 4, item: "Tools & Equipment", url: "/products?category=Automative&sub-category=Car Accessories&type=Tools and Equipment", type: "Tools and Equipment" }
        ]
      },
      {
        id: 21,
        name: "Motorcycle",
        items: [
          { id: 1, item: "Tyres", url: "/products?category=Automative&sub-category=Motorcycle&type=Makeup", type: "Makeup" }, // matches snippet (type=Makeup)
          { id: 2, item: "Cleaning Kits", url: "/products?category=Automative&sub-category=Motorcycle&type=Cleaning Kits", type: "Cleaning Kits" },
          { id: 3, item: "Accessories", url: "/products?category=Automative&sub-category=Motorcycle&type=Accessories", type: "Accessories" }
        ]
      },
      {
        id: 22,
        name: "Car Care",
        items: [
          { id: 1, item: "Brake Fluid", url: "/products?category=Automative&sub-category=Car Care&type=Brake Fluid", type: "Brake Fluid" },
          { id: 2, item: "Oil", url: "/products?category=Automative&sub-category=Car Care&type=Oil", type: "Oil" },
          { id: 3, item: "Additives", url: "/products?category=Automative&sub-category=Car Care&type=Additives", type: "Additives" },
          { id: 4, item: "Lubricants", url: "/products?category=Automative&sub-category=Car Care&type=Lubricants", type: "Lubricants" }
        ]
      },
      {
        id: 23,
        name: "Interior Accessories",
        items: [
          { id: 1, item: "Wheels", url: "/products?category=Automative&sub-category=Interior Design&type=Wheels", type: "Wheels" },
          { id: 2, item: "Trackers", url: "/products?category=Automative&sub-category=Interior Design&type=Trackers", type: "Trackers" },
          { id: 3, item: "Air Fresheners", url: "/products?category=Automative&sub-category=Interior Design&type=Air Freshners", type: "Air Freshners" },
          { id: 4, item: "Seat Covers", url: "/products?category=Automative&sub-category=Interior Design&type=Seat Covers", type: "Seat Covers" }
        ]
      },
      {
        id: 24,
        name: "School Supplies",
        items: [
          { id: 1, item: "Notebooks", url: "/products?category=Office&sub-category=School Supplies&type=Bag Packs", type: "Bag Packs" },
          { id: 2, item: "Pens & Pencils", url: "/products?category=Office&sub-category=School Supplies&type=Calculators", type: "Calculators" },
          { id: 3, item: "Art Supplies", url: "/products?category=Office&sub-category=School Supplies&type=Books", type: "Books" }
        ]
      },
      {
        id: 25,
        name: "Office Accessories",
        items: [
          { id: 1, item: "Printers", url: "/products?category=Office&sub-category=Office Accessories&type=Printer", type: "Printer" },
          { id: 2, item: "Stationery", url: "/products?category=Office&sub-category=Office Accessories&type=Paper and Stationery", type: "Paper and Stationery" },
          { id: 3, item: "Desk Organizers", url: "/products?category=Office&sub-category=Office Accessories&type=Shredders", type: "Shredders" },
          { id: 4, item: "Office Chairs", url: "/products?category=Office&sub-category=Office Accessories&type=Desk Organizers", type: "Desk Organizers" }
        ]
      },
      {
        id: 26,
        name: "Professional",
        items: [
          { id: 1, item: "Legal Services", url: "/products?category=Services&sub-category=Professional&type=Pharmacy", type: "Pharmacy" },
          { id: 2, item: "Accounting", url: "/products?category=Services&sub-category=Professional&type=Auto Services", type: "Auto Services" },
          { id: 3, item: "Consulting", url: "/products?category=Services&sub-category=Professional&type=Financial Services", type: "Financial Services" },
          { id: 4, item: "Cleaning Services", url: "/products?category=Services&sub-category=Professional&type=Optical Services", type: "Optical Services" },
          { id: 5, item: "Repair & Maintenance", url: "/products?category=Services&sub-category=Professional&type=Cleaning Services", type: "Cleaning Services" },
          { id: 6, item: "Tutoring", url: "/products?category=Services&sub-category=Professional&type=Fitness Services", type: "Fitness Services" }
        ]
      }
    ];


    const selectedCategory = catContainer.find((cat => cat.name === subCategory));
    
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


      const baseUrl = "https://ahiaserver-api.onrender.com/api/products/filter";
      const params = new URLSearchParams();

      if (category && category !== "All Category") params.append("category", category);
      if (subCategory && subCategory !== "All Sub-category") params.append("subcategory", subCategory);
      if (type && type !== "All Type") params.append("typeCategory", type);

      const url = `${baseUrl}${params.toString() ? "?" + params.toString() : ""}`;

      console.log("Fetching from:", url);

      try {
        const response = await axios.get(url);

        console.log(response.data);

        setDbProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    getProducts();
  }, [type, category, subCategory]);

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

  let filteredProducts = dbProducts.filter((item) => {
    // Match category (skip if "All Category")
    const matchCategory =
      category === "All Category" ||
      category.toLowerCase() === item.category.toLowerCase();

    // Match price range
    const matchesPrice =
      item.price.current >= minVal && item.price.current <= maxVal;

    // Match brand (skip if brandSearch is empty)
    const matchesBrand =
      brandSearch === "" ||
      item.brand?.toLowerCase().includes(brandSearch.toLowerCase());

    // Group selected filters by field
    const groupedFilters = selectedMainCat.reduce((acc, { field, value }) => {
      if (!acc[field]) acc[field] = [];
      acc[field].push(value.toLowerCase());
      return acc;
    }, {});


    // Match additional filters (e.g., size, color)
    const matchMainCategories = Object.keys(groupedFilters).every((field) => {
      const productValue = String(item[field])?.toLowerCase();
      return groupedFilters[field].some((val) => val === productValue);
    });


    return matchCategory && matchMainCategories && matchesBrand && matchesPrice;
  });

  console.log(filteredProducts);


  useEffect(() => {
    if (!type) return;

    const catFilter = dbProducts.filter(item => item.type === type);

  }, [type]);

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
                <Link href={`/product?product_id=${item._id}`} key={index} className={styles.productCardLink}> 
                <div key={index} className={styles.productCard}>
                  <div className={styles.productCardTop}>
                    <Image src={
                       item.images && item.images[0]
                      ? item.images[0].startsWith("http") 
                        ? item.images[0]
                        : `https://ahiaserver-api.onrender.com/${item.images[0]}`
                      : "/"
                    } className={styles.productImg} alt={item.name} fill sizes="(max-width: 768px) 100vw, 50vw" /> {/* Added sizes for perf */}
                  </div>
                  <div className={styles.productCardBottom}>
                    <div className={styles.productCartPriceContainer}>
                      <h2>₦{Number(item.price.current).toLocaleString()}</h2>
                      {/* <p>{item.stock === "in-stock" ? "In Stock" : item.stock}</p> */}
                    </div>
                    <div className={styles.productCardBottom}>
                      <div className={styles.productCartPriceContainer}>
  
                        <Typography style={{ textDecoration: "", color: "black" }} >
                          ₦{Number(item.price.current).toLocaleString()}
                        </Typography>

                        <Typography style={{ textDecoration: "line-through", color: "gray" }} >
                          ₦{Number(item.price.old).toLocaleString()}
                        </Typography>
                        {/* <p>{item.stock === "in-stock" ? "In Stock" : item.stock}</p> */}
                      </div>
                      <div className={styles.productCardName}>
                        {/* <h2>{item.name}</h2> */}
                        <Typography style={{ color: "black" }} >
                          {item.name.length > 40 ? item.name.substring(0, 40) + "..." : item.name}
                        </Typography>
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
                        <ShoppingCartSharp style={{ width: "15px" }} product={item} />
                      </div>
                    </div>
                  </div>
                  </div>
                </Link>
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