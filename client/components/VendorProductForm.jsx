"use client";

import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  Divider,
  Paper,
  MenuItem,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ProductForm = ({ onSubmit }) => {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    slug: "",
    category: "",
    subcategory: "",
    typeCategory: "",
    brand: "",
    description: "",
    price: {
      current: "",
      old: "",
      currency: "NGN",
      discount_percentage: 0,
    },
    images: [],
    specifications: {
      display: "",
      processor: "",
      ram: "",
      storage: "",
      camera: "",
      battery: "",
      os: "",
    },
    variants: [{ color: "", storage: "" }],
    stock: { available: true, quantity: 0 },
    seller: { id: "", name: "", rating: 0 },
    ratings: { average: 0, count: 0 },
    shipping: { delivery_time: "", shipping_fee: "", return_policy: "" },
    tags: [],
  });

  
  const categories = ["Electronics", "Fashion", "Home & Kitchen", "Sports"];
  const subcategories = {
    Electronics: ["Phones", "Laptops", "Accessories"],
    Fashion: ["Men", "Women", "Kids"],
    "Home & Kitchen": ["Appliances", "Furniture", "Decor"],
    Sports: ["Outdoor", "Fitness", "Equipment"],
  };
  const typeCategories = {
    Phones: ["Smartphones", "Feature Phones"],
    Laptops: ["Gaming", "Business", "Student"],
    Accessories: ["Chargers", "Cables", "Earphones"],
    Men: ["Shoes", "Clothes", "Watches"],
    Women: ["Bags", "Jewelry", "Clothes"],
  };

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  
  const handleNestedChange = (section, field, value) => {
    setProduct((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setProduct((prev) => ({
      ...prev,
      images: [...prev.images, ...newImages],
    }));
  };

  
  const handleRemoveImage = (index) => {
    setProduct((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(product);
    console.log("Product data:", product);
  };

  return (
    <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
      <Typography variant="h5" gutterBottom>
        Add Product
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Basic Info */}
          {/* <Grid item xs={12} md={6}>
            <TextField
              label="Product ID"
              name="id"
              value={product.id}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid> */}
          <Grid item xs={12} md={6}>
            <TextField
              label="Name"
              name="name"
              value={product.name}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Slug"
              name="slug"
              value={product.slug}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

        
          <Grid item xs={12} md={6}>
            <TextField
              select
              label="Category"
              name="category"
              value={product.category}
              onChange={handleChange}
              fullWidth
            >
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              select
              label="Subcategory"
              name="subcategory"
              value={product.subcategory}
              onChange={handleChange}
              fullWidth
              disabled={!product.category}
            >
              {(subcategories[product.category] || []).map((sub) => (
                <MenuItem key={sub} value={sub}>
                  {sub}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              select
              label="Type Category"
              name="typeCategory"
              value={product.typeCategory}
              onChange={handleChange}
              fullWidth
              disabled={!product.subcategory}
            >
              {(typeCategories[product.subcategory] || []).map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          
          <Grid item xs={12} md={6}>
            <TextField
              label="Brand"
              name="brand"
              value={product.brand}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          
          <Grid item xs={12}>
            <TextField
              label="Description"
              name="description"
              value={product.description}
              onChange={handleChange}
              fullWidth
              multiline
              rows={3}
            />
          </Grid>

          
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Product Images
            </Typography>
            <Button variant="contained" component="label">
              Upload Images
              <input
                type="file"
                hidden
                multiple
                accept="image/*"
                onChange={handleImageUpload}
              />
            </Button>

            
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 2 }}>
              {product.images.map((img, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    width: 100,
                    height: 100,
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: 1,
                  }}
                >
                  <img
                    src={img}
                    alt={`preview-${index}`}
                    width="100%"
                    height="100%"
                    style={{ objectFit: "cover" }}
                  />
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => handleRemoveImage(index)}
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      backgroundColor: "rgba(255,255,255,0.7)",
                    }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle1">Price</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField
              label="Current Price"
              value={product.price.current}
              onChange={(e) =>
                handleNestedChange("price", "current", e.target.value)
              }
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField
              label="Old Price"
              value={product.price.old}
              onChange={(e) =>
                handleNestedChange("price", "old", e.target.value)
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField
              label="Currency"
              value={product.price.currency}
              onChange={(e) =>
                handleNestedChange("price", "currency", e.target.value)
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField
              label="Discount (%)"
              value={product.price.discount_percentage}
              onChange={(e) =>
                handleNestedChange("price", "discount_percentage", e.target.value)
              }
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle1">Shipping</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Delivery Time"
              value={product.shipping.delivery_time}
              onChange={(e) =>
                handleNestedChange("shipping", "delivery_time", e.target.value)
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Shipping Fee"
              value={product.shipping.shipping_fee}
              onChange={(e) =>
                handleNestedChange("shipping", "shipping_fee", e.target.value)
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Return Policy"
              value={product.shipping.return_policy}
              onChange={(e) =>
                handleNestedChange("shipping", "return_policy", e.target.value)
              }
              fullWidth
            />
          </Grid>

          <Grid item xs={12} textAlign="center" sx={{ mt: 2 }}>
            <Button type="submit" variant="contained" size="large">
              Save Product
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default ProductForm;
