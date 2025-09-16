"use client";

import { ShoppingCart } from "lucide-react";
import Slider from "react-slick";
import { Card, CardContent, CardMedia, Typography, Button, Rating } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid } from "@mui/material";
import Adds from "./Adds";

const products = [
    { id: 1, name: "Oraimo Power Bank 20,000mAh", price: 14500, oldPrice: 20000, image: "jacket.png", rating: 4.5 },
    { id: 2, name: "Samsung Galaxy Buds Pro", price: 65000, oldPrice: 80000, image: "neckless1.png", rating: 4.0 },
    { id: 3, name: "Men's Sneakers - White", price: 12000, oldPrice: 18000, image: "jean.png", rating: 3.5 },
    { id: 4, name: "Hisense 32-Inch LED TV", price: 85000, oldPrice: 110000, image: "/wig1.png", rating: 4.2 },
    { id: 5, name: "Nivea Body Lotion 400ml", price: 3500, oldPrice: 5000, image: "blend.png", rating: 4.8 },
    { id: 1, name: "Oraimo Power Bank 20,000mAh", price: 14500, oldPrice: 20000, image: "oculus.png", rating: 4.5 },
    { id: 2, name: "Samsung Galaxy Buds Pro", price: 65000, oldPrice: 80000, image: "/bottle.png", rating: 4.0 },
    { id: 3, name: "Men's Sneakers - White", price: 12000, oldPrice: 18000, image: "blackwig.png", rating: 3.5 },
    { id: 4, name: "Hisense 32-Inch LED TV", price: 85000, oldPrice: 110000, image: "/glases.png", rating: 4.2 },
    { id: 5, name: "Nivea Body Lotion 400ml", price: 3500, oldPrice: 5000, image: "betshit.png", rating: 4.8 },

];

export default function TopSeller() {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     centerPadding: "0px",
    //     responsive: [
    //         { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    //         { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    //         { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    //     ],
    // };

    return (
        <>
        <Adds />
            <div style={{ padding: "3rem", backgroundColor: "", marginTop: "-2rem" }}>

                <Card sx={{
                    paddingRight: "1rem", borderRadius: 3, boxShadow: 3, width: "100%", display: "flex", alignItems: "center",
                    flexDirection: "", marginBottom: "16px", backgroundColor: "#5bb9c7", justifyContent: "space-between", borderRadius: "none"
                }}>
                    <Typography variant="h6" align="center" marginLeft={3} fontWeight="700" color="whitesmoke" fontFamily="sans-serif" gutterBottom>
                        Top Sellers
                    </Typography>
                    <Typography variant="" align="center" color="whitesmoke" fontWeight="500" gutterBottom>
                        View all
                    </Typography>

                </Card>

                <Grid container spacing={5} justifyContent="center" backgroundColor="#f5f5f5" padding={5} borderRadius={3}>

                    {products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} sx={{ display: "flex", justifyContent: "center", }}>
                            <Card sx={{ borderRadius: 3, boxShadow: 3, width: 200, display: "flex", flexDirection: "column", boxShadow: "none" }}>
                                <Typography variant="caption" color="white" sx={{ position: "absolute", backgroundColor: "#5bc763", padding: "2px 6px", borderRadius: "0 0 8px 0", fontWeight: "bold", fontSize: "10px", marginTop: "8px", marginLeft: "8px" }}>
                                    -25%
                                </Typography>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={product.image}
                                    alt={product.name}
                                    sx={{ objectFit: "contain" }}
                                />
                                <CardContent sx={{ padding: "8px", flexGrow: 1, display: "flex", flexDirection: "", justifyContent: "" }}>
                                    <div>
                                        <Typography variant="subtitle2" fontWeight="bold" color="#47474a" gutterBottom>
                                            {product.name}
                                        </Typography>

                                        <Rating
                                            value={product.rating}
                                            precision={0.5}
                                            readOnly
                                            size="small"
                                            sx={{ mb: 1 }}
                                        />

                                        <div style={{ display: "flex", gap: "6px", margin: "6px 0", alignItems: "center" }}>
                                            <Typography variant="body1" color="green">
                                                ₦{product.price.toLocaleString()}
                                            </Typography>
                                            <Typography variant="body2" sx={{ textDecoration: "line-through", color: "gray" }}>
                                                ₦{product.oldPrice.toLocaleString()}
                                            </Typography>
                                        </div>
                                    </div>

                                    <div >
                                        <Typography variant="body2" color="textSecondary" component="div" sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "70%" }}>
                                            In stock
                                        </Typography>
                                        <Button
                                            fullWidth
                                            size="small"
                                            startIcon={<ShoppingCart size={16} />}
                                            sx={{
                                                marginTop: "auto",
                                                textTransform: "none",
                                                border: "1px solid var(--primary)",
                                                backgroundColor: "transparent",
                                                color: "var(--primary)",
                                                "&:hover": {
                                                    backgroundColor: "var(--primary)",
                                                    color: "#fff",
                                                    border: "1px solid var(--primary)",
                                                },
                                            }}
                                        >
                                            Add
                                        </Button>
                                    </div>

                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    );
}
