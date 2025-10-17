"use client";
import {
  Card,
  CardMedia,
  Typography,
  Box,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";

const categories = [
  { title: "Grocery", image: "/grocery.png", category: "grocery" },
  { title: "Beauty", image: "/beauty.png", category: "beauty" },
  { title: "Health", image: "/health.png", category: "health" },
  { title: "Baby & Maternity", image: "/babies.png", category: "baby and maternity" },
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
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        p: isMobile ? 2 : 3,
        borderRadius: 2,
        overflowX: "auto",
        whiteSpace: "nowrap",
        display: "flex",
        gap: 2,
        scrollBehavior: "smooth",
        "&::-webkit-scrollbar": {
          height: 6,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#bbb",
          borderRadius: 10,
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#888",
        },
      }}
    >
      {categories.map((product, index) => (
        <Link
          key={index}
          href={`/products?category=${product.category}`}
          style={{ textDecoration: "none" }}
        >
          <Card
            sx={{
              display: "inline-block",
              borderRadius: 2,
              textAlign: "center",
              cursor: "pointer",
              "&:hover": { boxShadow: 5, transform: "scale(1.05)" },
              width: 160,
              minWidth: 160,
              transition: "all 0.3s ease",
              boxShadow: "none",
              backgroundColor: "#fff",
            }}
          >
            <CardMedia
              component="img"
              image={product.image}
              alt={product.title}
              sx={{ height: 150, objectFit: "cover" }}
            />
            <Typography
              variant="body2"
              fontWeight="bold"
              sx={{ p: 1, color: "#333" }}
            >
              {product.title}
            </Typography>
          </Card>
        </Link>
      ))}
    </Box>
  );
}
