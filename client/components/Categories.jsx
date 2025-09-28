"use client";
import { Card, CardContent, CardMedia, Typography, Grid, Box, useMediaQuery } from "@mui/material";
import Link from "next/link";

const categories = [
  { title: "Grocery", image: "/grocery.png", category: "grocery" },
  { title: "Beauty", image: "/beauty.png", category: "beauty" },
  { title: "Health", image: "/health.png", category: "health" },
  { title: "Baby & Maternity", image: "babies.png", category: "baby and maternity" },
  { title: "Computers", image: "/computers.png", category: "computers" },
  { title: "Phones & Tablets", image: "/phones.png", category: "phones and tablets" },
  { title: "Women’s Fashion", image: "/women.png", category: "womens fashion" },
  { title: "Car Accessories", image: "/car.png", category: "car accessories" },
  { title: "Kitchen & Dining", image: "/kitchen.png", category: "kitchen and dining" },
  { title: "Men’s Fashion", image: "/men.png", category: "mens fashion" },
  { title: "Office Accessories", image: "/office.png", category: "office accessories" },
  { title: "Services", image: "/services.png", category: "services" },

];

export default function Categories() {

    const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", p: isMobile ? 2 : 3, borderRadius: 2 }}>
      <Grid
        container
        spacing={0}
        sx={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" :  "repeat(6, 1fr)", // ✅ force 5 per row
          gap: 3,
          //   width: "100%",
        }}
      >
        {categories.map((product, index) => (
          <Link href={`/products?category=${product.category}`} >

            <Card        
              key={index}
              sx={{
                borderRadius: 2,
                boxShadow: 2,
                textAlign: "center",
                cursor: "pointer",
                "&:hover": { boxShadow: 5, transform: "scale(1.05)" },
                width: 160,
                transition: "all 0.3s ease",
                boxShadow: "none",
              }}
            >
              <CardMedia
                component="img"
                image={product.image}
                alt={product.title}
                sx={{ height: 170, objectFit: "cover" }}
              />
              {/* <CardContent sx={{ p: 1 }}>
            </CardContent> */}
              <Typography variant="body2" fontWeight="">
                {product.title}
              </Typography>
            </Card>
          </Link>
        ))}
      </Grid>
    </Box>
  );
}
