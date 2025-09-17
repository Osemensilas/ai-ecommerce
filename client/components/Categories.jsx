"use client";
import { Card, CardContent, CardMedia, Typography, Grid, Box } from "@mui/material";
import Link from "next/link";

const categories = [
  { title: "Grocery", image: "/grocery.png" },
  { title: "Beauty", image: "/beauty.png" },
  { title: "Health", image: "/health.png" },
  { title: "Baby & Maternity", image: "babies.png" },
  { title: "Computers", image: "/computers.png" },
  { title: "Phones & Tablets", image: "/phones.png" },
  { title: "Women’s Fashion", image: "/women.png" },
  { title: "Car Accessories", image: "/car.png" },
  { title: "Kitchen & Dining", image: "/kitchen.png" },
  { title: "Men’s Fashion", image: "/men.png" },
  { title: "Office Accessories", image: "/office.png" },
  { title: "Services", image: "/services.png" },
];

export default function Categories() {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", p: 3, borderRadius: 2 }}>
      <Grid
        container
        spacing={0}
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)", // ✅ force 5 per row
          gap: 3,
          //   width: "100%",
        }}
      >
        {categories.map((product, index) => (
          <Link href={`/products`} >

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
