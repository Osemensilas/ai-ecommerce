import React, { useState } from "react";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    IconButton,
    Divider,
    Button,
    Grid,
    Stack,
    Pagination,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import styles from '../app/css/cart.module.css';
import Link from "next/link";

const cartItems = [
    {
        id: 1,
        title: "55'' Human Hair",
        price: 450000,
        condition: "NEW",
        color: "BLACK",
        image: "/jacket.png",
    },
    {
        id: 2,
        title: "Amore Nesco",
        price: 60000,
        condition: "NEW",
        color: "WHITE",
        image: "autowatch.png",
    },
    {
        id: 3,
        title: "Designer Shirt",
        price: 75000,
        condition: "NEW",
        color: "BLUE",
        image: "men.png",
    },
    {
        id: 4,
        title: "Luxury Bag",
        price: 150000,
        condition: "NEW",
        color: "BROWN",
        image: "hair1.png",
    },
];

export default function CartPage() {
    const itemsPerPage = 3;
    const [page, setPage] = useState(1);
    const [isItem, setIsItem] = useState(true);
    const [activeUser, setActiveUser] = useState(true);


    const handleChange = (event, value) => {
        setPage(value);
    };

    const startIndex = (page - 1) * itemsPerPage;
    const selectedItems = cartItems.slice(startIndex, startIndex + itemsPerPage);

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <Box sx={{ p: 4, bgcolor: "#fafafa", minHeight: "100vh", width: '100vw' }}>
            <Grid container spacing={4} justifyContent="space-around" alignItems="" >
                {/* Left Section - Cart Items */}
                <Grid item xs={12} md={8} width="45%" >
                    <Typography variant="h5" fontWeight="bold" mb={2}>
                        Cart ({cartItems.length})
                    </Typography>
                    {isItem ? <>
                        <Stack spacing={2}>
                            {selectedItems.map((item) => (
                                <Card
                                    key={item.id}
                                    variant="outlined"
                                    sx={{ display: "flex", alignItems: "center", p: 2, width: '100%', backgroundColor: '' }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 120, height: 120, borderRadius: 2 }}
                                        image={item.image}
                                        alt={item.title}
                                    />
                                    <CardContent sx={{ flex: "1 0 auto" }}>
                                        <Typography variant="h6" fontWeight="bold">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Condition: {item.condition} | Color: {item.color}
                                        </Typography>
                                        <Typography variant="h6" color="#0c0483f5" mt={1}>
                                            ₦{item.price.toLocaleString()}
                                        </Typography>
                                    </CardContent>
                                    <IconButton color="error">
                                        <DeleteIcon />
                                    </IconButton>
                                </Card>
                            ))}
                        </Stack>
                    </>
                        :
                        <>
                            <img src="/cart.webp" alt="No items" style={{ display: 'block', margin: '0 auto' }} />
                            <Typography variant="h6" align="center" mt={2}>
                                Your cart is empty.
                            </Typography>
                        </>}

                    {/* Pagination */}
                    <Box mt={3} display="flex" justifyContent="center">
                        <Pagination
                            count={Math.ceil(cartItems.length / itemsPerPage)}
                            page={page}
                            onChange={handleChange}
                            color="primary"
                            shape="rounded"
                            size="large"
                        />
                    </Box>
                    <Button
                        variant="contained"
                        // color="primary"
                        href="/products"
                        fullWidth
                        sx={{ borderRadius: 2, py: 1.5, mt: 1, backgroundColor: "#0c0483f5" }}
                    >
                        Continue Shopping
                    </Button>
                </Grid>

                {/* Right Section - Summary */}
                <Grid item xs={12} md={4} width="30%" >
                    <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
                        <Typography variant="h6" fontWeight="bold" mb={2}>
                            Summary
                        </Typography>
                        <Divider />
                        <Box display="flex" justifyContent="space-between" my={2}>
                            <Typography variant="body1">Total</Typography>
                            <Typography variant="h6" fontWeight="bold">
                                ₦{total.toLocaleString()}
                            </Typography>
                        </Box>
                        <Button
                            variant="contained"
                            // color="primary"
                            fullWidth
                            sx={{ borderRadius: 2, py: 1.5, mt: 1, backgroundColor: "#0c0483f5" }}
                        >
                            Checkout
                        </Button>

                        <Typography variant="subtitle2" mt={3} mb={1}>
                            Fund Wallet With:
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            {/* <CreditCardIcon fontSize="large" color="action" />
                             */}
                            <img src="/paystack.png" alt="" style={{ width: "50px", height: "10px" }} />
                            <img src="/paypal1.png" alt="" style={{ width: "50px", height: "10px" }} />
                            <img src="/Flutterwave.png" alt="" style={{ width: "55px", height: "15px" }} />
                        </Stack>
                    </Card>

                    <div className={styles.userDetails} style={{ marginTop: "3rem" }} >
                        <div className={styles.userDetailsTop}>
                            <div className={`${styles.userDetailsTopActive} ${activeUser ? "" : styles.hide}`}>
                                <div className={styles.userDetailsTopActiveUser}>
                                    <i className="fa fa-user"></i>
                                    <p>Welcome back, Rose</p>
                                </div>
                                <button>Sign Out</button>
                            </div>
                            <div className={`${styles.userDetailsTopNone} ${activeUser ? styles.hide : ""}`}>
                                <Link href={"/"} className={styles.cartSignin}>Sign In</Link>
                                <Link href={"/"} className={styles.cartRegister}>Register</Link>
                            </div>
                        </div>
                        <div className={styles.userDetailsBottomMain}>
                            <div className={styles.userDetailsBottom}>
                                <Link href={"/"} className={styles.userDetailsContainer}>
                                    <i className="fa fa-wallet"></i>
                                    <p>Transaction History</p>
                                </Link>
                                <Link href={"/"} className={styles.userDetailsContainer}>
                                    <i className="fa fa-wallet"></i>
                                    <p>Help Center</p>
                                </Link>
                                <Link href={"/"} className={styles.userDetailsContainer}>
                                    <i className="fa fa-wallet"></i>
                                    <p>Saved</p>
                                </Link>
                                <Link href={"/"} className={styles.userDetailsContainer}>
                                    <i className="fa fa-wallet"></i>
                                    <p>Track Shipment</p>
                                </Link>
                            </div>
                            <div className={styles.userDetailsBottomAdd}>
                                <Link href={"/"}>Shipping Address</Link>
                                <Link href={"/"}>Pending Reviews</Link>
                                <Link href={"/"}>Seller Log In</Link>
                                <Link href={"/"}>Return & Refund Policy</Link>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}
