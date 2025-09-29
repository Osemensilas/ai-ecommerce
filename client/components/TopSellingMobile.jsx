"use client";

import { ShoppingCart } from "lucide-react";
import Slider from "react-slick";
import { Card, CardContent, CardMedia, Typography, Button, Rating, useMediaQuery } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid } from "@mui/material";
import Categories from "./Categories";
import BestSelling from "./BestSelling";


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

export default function TopSellerMobile() {
    const isMobile = useMediaQuery("(max-width:768px)");

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
        <div style={{ padding: isMobile ? "0.5rem" : "3rem", backgroundColor: "", marginTop: isMobile ? "1rem" : "-2rem" }}>
            <Card sx={{
                paddingRight: "0.5rem", borderRadius: 3, boxShadow: 3, width: "100%", display: "flex", alignItems: "center",
                flexDirection: "", marginBottom: "16px", backgroundColor: "#5bb9c7", justifyContent: "space-between", borderRadius: "none"

            }}>
                <Typography variant="h6" align="center" marginLeft={3} fontWeight="700" color="whitesmoke" fontFamily="sans-serif" gutterBottom>
                    Best Selling
                </Typography>
                <Typography variant="" align="center" color="whitesmoke" fontWeight="500" gutterBottom>
                    View all
                </Typography>

            </Card>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", // responsive columns
                    gap: "6px",
                    background: "#f5f5f5ff",
                    padding: isMobile ? "4px" : "100px",
                    borderRadius: "12px",
                }}
            >

                {products.map((product) => (
                    <div
                        key={product.id}
                        style={{
                            // background: "yellow",
                            borderRadius: "12px",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Card sx={{ borderRadius: 3, boxShadow: 3, width: isMobile ? "100%" : 200, display: "flex", flexDirection: "column", boxShadow: "none" }}>
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
                            <CardContent sx={{ padding: "8px", flexGrow: 1, display: "flex", flexDirection: isMobile ? "column" : "", justifyContent: "" }}>
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
                                    <Typography variant="body2" color="textSecondary" component="div"
                                        sx={{
                                            display: "flex", alignItems: "center", justifyContent: "center", height: isMobile ? '10px' : "70%",
                                            marginRight: isMobile ? "0px" : "", fontSize: isMobile ? "10px" : "12px", color: "", fontWeight: "600"
                                        }}>
                                        In stock
                                    </Typography>
                                    <Button
                                        fullWidth
                                        size="small"
                                        startIcon={<ShoppingCart size={16} />}
                                        sx={{
                                            marginTop: "auto",
                                            marginRight: isMobile ? "10px" : "",
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
                    </div>
                ))}
            </div>
            {/* <Categories /> */}
        </div>
    );
}
