"use client";

import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  MenuItem,
  Paper,
  Divider,
  IconButton,
  Stack,
  LinearProgress,
} from "@mui/material";
import { AddCircle, RemoveCircle } from "@mui/icons-material";
import axios from "axios";
import { useAuthStore } from "../auth/Auth";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { useEffect } from "react";



const categoryOptions = {
  "Daily Essentials": {
    Grocery: [
      "Fresh Products",
      "Meat and Seafood",
      "Dairy and Eggs",
      "Bakery",
      "Pantry Staples",
      "Beverages",
      "Snacks and Candy",
    ],
    Beauty: [
      "Makeup",
      "Skincare",
      "Haircare",
      "Personal Care",
      "Fragrance",
    ],
    Health: [
      "Vitamins",
      "Health Monitor",
      "Supplement",
      "First Aid",
      "Vision Care",
      "Wellness Product",
    ],
    "Baby and Maternity": [
      "Baby Clothing",
      "Diapers and Wipes",
      "Feeding Supplies",
      "Nursery (Cribs and Bedding)",
      "Strollers and Car Seats",
      "Maternity Clothing",
    ],
  },

  "Electronics and Tech": {
    Computers: [
      "Monitor",
      "Digital Whiteboard",
      "Desktops",
      "Laptops",
      "Macbooks",
      "Computer Accessories",
    ],
    "Smart Homes": [
      "Plugs and Outlets",
      "Detectors and Sensors",
      "Wifi and Networking",
      "Cameras",
      "Locks and Entry",
      "Home Lightening",
    ],
    Electronics: [
      "Televisions",
      "Cameras",
      "Home Audio",
      "Sewing Machine",
      "Generators",
      "Portable Power",
    ],
    Gaming: [
      "PlayStation Console",
      "Gaming Headset",
      "Controllers",
      "Gaming Merchandise",
    ],
    "Phones and Tablets": [
      "iPhone",
      "Android",
      "Tablets",
      "Phone Accessories",
    ],
    Wearables: [
      "Smartwatches",
      "Fitness Bands",
      "VR Headsets",
    ],
  },

  Fashion: {
    "Women's Fashion": ["Clothing", "Shoes", "Jewelry", "Watches"],
    "Men's Fashion": ["Clothing", "Shoes", "Caps", "Watches"],
    "Kids and Baby Fashion": ["Clothing", "Shoes", "Accessories"],
  },

  Home: {
    "Dining and Kitchen": ["Cookware", "Utensils", "Tableware"],
    "Home Decor": ["Wall Art", "Vases"],
    "Home Essentials": [
      "Furniture",
      "Bedding",
      "Rugs",
      "Curtains and Windows",
      "Lighting and Ceiling Fans",
    ],
    Appliances: ["Blenders", "Air Fryers", "Electric Jugs"],
    "Luggage and Travel": ["Suitcases", "Bag Packs", "Travel Accessories"],
    "Building Materials": ["Plumbing", "Electrical", "Paint and Supplies"],
  },

  Automotive: {
    "Car Accessories": ["Tyres", "Car Rims", "Cleaning Kits", "Tools and Equipment"],
    Motorcycle: ["Tyres", "Cleaning Kits", "Accessories"],
    "Car Care": ["Brake Fluid", "Oil", "Additives", "Lubricants"],
    "Interior Accessories": ["Wheels", "Trackers", "Air Fresheners", "Seat Covers"],
  },

  Office: {
    "School Supplies": ["Bag Packs", "Calculators", "Books"],
    "Office Accessories": ["Printers", "Paper and Stationery", "Shredders", "Desk Organizers"],
  },

  Services: {
    Professional: [
      "Pharmacy",
      "Auto Services",
      "Financial Services",
      "Optical Services",
      "Cleaning Services",
      "Fitness Services",
    ],
  },
};


export default function ProductForm() {

  const { user, token } = useAuthStore();
  const logout = useAuthStore((state) => state.logout);
  // price: { currency: "NGN", current: "", old: "", discount_percentage: 0 },
  console.log("Authenticated User in ProductForm:", user, token);

  const router = useRouter();

  const handleLogout = () => {
    console.log('Logging out...');
    logout(); // clears the user & token
    router.push('/login'); // redirect to login page
  };

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decoded.exp < currentTime) {
          alert("⚠️ Session expired. Please log in again.");
          handleLogout();
          router.push("/login");
        }
      } catch (error) {
        console.error("Invalid token:", error);
        alert("⚠️ Authentication error. Please log in again.");
        router.push("/login");
      }
    } else {
      router.push("/login");
    }
  }, [token, router]);


  const [product, setProduct] = useState({
    name: "",
    slug: "",
    category: "",
    subcategory: "",
    typeCategory: "",
    brand: "",
    description: "",
    price: { currency: "NGN", current: "", old: "", discount_percentage: 0 },
    specificationDetails: {
      productionCountry: "",
      weight: "",
      color: "",
      material: "",
      careLabel: "",
      dimension: "",
    },
    stock: { available: true, quantity: 0 },
    seller: { id: user?._id, name: "" },
    shipping: { delivery_time: "", shipping_fee: "", return_policy: "" },
    specifications: [],
    variants: [],
    tags: [],
    customAttributes: {},
  });

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [subcategories, setSubcategories] = useState([]);
  const [typeCategories, setTypeCategories] = useState([]);


  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setProduct((prev) => ({
      ...prev,
      category,
      subcategory: "",
      typeCategory: "",
    }));
    setSubcategories(Object.keys(categoryOptions[category] || {}));
    setTypeCategories([]);
  };


  const handleSubcategoryChange = (e) => {
    const subcategory = e.target.value;
    setProduct((prev) => ({ ...prev, subcategory, typeCategory: "" }));
    setTypeCategories(categoryOptions[product.category]?.[subcategory] || []);
  };


  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };


  const addSpecification = () => {
    setProduct((prev) => ({
      ...prev,
      specifications: [...prev.specifications, { key: "", value: "" }],
    }));
  };

  const updateSpecification = (index, field, value) => {
    const updated = [...product.specifications];
    updated[index][field] = value;
    setProduct((prev) => ({ ...prev, specifications: updated }));
  };

  const removeSpecification = (index) => {
    const updated = product.specifications.filter((_, i) => i !== index);
    setProduct((prev) => ({ ...prev, specifications: updated }));
  };


  const addVariant = () => {
    setProduct((prev) => ({
      ...prev,
      variants: [...prev.variants, { color: "", size: "", storage: "" }],
    }));
  };

  const updateVariant = (index, field, value) => {
    const newVariants = [...product.variants];
    newVariants[index][field] = value;
    setProduct((prev) => ({ ...prev, variants: newVariants }));
  };

  const removeVariant = (index) => {
    const newVariants = product.variants.filter((_, i) => i !== index);
    setProduct((prev) => ({ ...prev, variants: newVariants }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      // Append product fields
      Object.entries(product).forEach(([key, value]) => {
        if (typeof value === "object" && value !== null) {
          formData.append(key, JSON.stringify(value));
        } else {
          formData.append(key, value);
        }
      });

      // Append images
      images.forEach((img) => formData.append("images", img));

      // Send request
      const response = await axios.post(
        "https://ahiaserver-api.onrender.com/api/products",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log("Response:", response);

      if (response.status === 201) {
        alert("✅ Product successfully added!");
      } else {
        alert(`⚠️ Unexpected response (status: ${response.status})`);
      }
    } catch (err) {
      console.error("Upload Error:", err);

      // Handle case where Axios throws but backend still returned 201
      if (err.response && err.response.status === 201) {
        alert("✅ Product successfully added!");
      } else if (err.code === "ERR_NETWORK") {
        alert("⚠️ Product may have been uploaded, but there was a network glitch.");
        // alert("✅ Product successfully added!");
      } else {
        alert("❌ Failed to add product.");
      }
    } finally {
      // Always stop loading
      setLoading(false);
    }
  };




  return (
    <Paper sx={{ p: 4, mt: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight="bold">
        🛍️ Add New Product
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Box component="form" onSubmit={handleSubmit} encType="multipart/form-data">
        <Grid container spacing={2}>

          <Grid item xs={12} sm={6}>
            <TextField label="Product Name" fullWidth required name="name" value={product.name} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Slug" fullWidth required name="slug" value={product.slug} onChange={handleChange} />
          </Grid>


          <Grid item xs={12} sm={4}>
            <TextField select label="Category" fullWidth required value={product.category} onChange={handleCategoryChange}>
              {Object.keys(categoryOptions).map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField select label="Subcategory" fullWidth required value={product.subcategory} onChange={handleSubcategoryChange}>
              {subcategories.map((sub) => (
                <MenuItem key={sub} value={sub}>
                  {sub}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField select label="Type Category" required name="typeCategory" value={product.typeCategory} onChange={handleChange}>
              {typeCategories.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Brand"
              fullWidth
              name="brand"
              value={product.brand}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Quantity in Stock"
              type="number"
              fullWidth
              required
              value={product.stock.quantity}
              onChange={(e) =>
                setProduct((prev) => ({
                  ...prev,
                  stock: { ...prev.stock, quantity: e.target.value },
                }))
              }
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              select
              label="Currency"
              fullWidth
              value={product.price.currency}
              onChange={(e) =>
                setProduct((prev) => ({
                  ...prev,
                  price: { ...prev.price, currency: e.target.value },
                }))
              }
            >
              <MenuItem value="NGN">Naira (₦)</MenuItem>
              <MenuItem value="USD">US Dollar ($)</MenuItem>
            </TextField>
          </Grid>




          <Grid item xs={12} sm={4}>
            <TextField
              label={`Current Price (${product.price.currency === "USD" ? "$" : "₦"})`}
              type="number"
              fullWidth
              required
              value={product.price.current}
              onChange={(e) =>
                setProduct((prev) => ({
                  ...prev,
                  price: { ...prev.price, current: e.target.value },
                }))
              }
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              label={`Old Price (${product.price.currency === "USD" ? "$" : "₦"})`}
              type="number"
              fullWidth
              value={product.price.old}
              onChange={(e) =>
                setProduct((prev) => ({
                  ...prev,
                  price: { ...prev.price, old: e.target.value },
                }))
              }
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField label="Discount (%)" type="number" fullWidth value={product.price.discount_percentage} onChange={(e) => setProduct((prev) => ({ ...prev, price: { ...prev.price, discount_percentage: e.target.value } }))} />
          </Grid>

          <Grid item xs={12}>
            <TextField label="Description" name="description" fullWidth multiline rows={3} value={product.description} onChange={handleChange} />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">Specifications</Typography>
            <Button startIcon={<AddCircle />} variant="outlined" sx={{ my: 1 }} onClick={addSpecification}>
              Add Specification
            </Button>
            {product.specifications.map((spec, index) => (
              <Stack key={index} direction="row" spacing={2} alignItems="center" mb={1}>
                <TextField label="Key" value={spec.key} onChange={(e) => updateSpecification(index, "key", e.target.value)} />
                <TextField label="Value" value={spec.value} onChange={(e) => updateSpecification(index, "value", e.target.value)} />
                <IconButton color="error" onClick={() => removeSpecification(index)}>
                  <RemoveCircle />
                </IconButton>
              </Stack>
            ))}
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">Variants</Typography>
            <Button startIcon={<AddCircle />} variant="outlined" sx={{ my: 1 }} onClick={addVariant}>
              Add Variant
            </Button>
            {product.variants.map((variant, i) => (
              <Stack key={i} direction="row" spacing={2} alignItems="center" mt={1}>
                <TextField label="Color" value={variant.color} onChange={(e) => updateVariant(i, "color", e.target.value)} />
                <TextField label="Size" value={variant.size} onChange={(e) => updateVariant(i, "size", e.target.value)} />
                <TextField label="Storage" value={variant.storage} onChange={(e) => updateVariant(i, "storage", e.target.value)} />
                <IconButton color="error" onClick={() => removeVariant(i)}>
                  <RemoveCircle />
                </IconButton>
              </Stack>
            ))}
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle1">Upload Product Images</Typography>
            <Button variant="outlined" component="label">
              Upload
              <input hidden type="file" multiple onChange={handleImageUpload} />
            </Button>
            <Typography variant="body2">{images.length > 0 && `${images.length} image(s) selected`}</Typography>
          </Grid>

          <Grid item xs={12}>
            {loading ? <Typography variant="body1" color="primary">
              <LinearProgress /> Uploading...
            </Typography>
              :
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit Product
              </Button>
            }
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
