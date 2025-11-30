import React, { useState, useEffect } from "react";
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
import styles from "../app/css/cart.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "./auth/Auth";
import { useCartStore } from "./auth/Cart";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

export default function CartPage() {
    const itemsPerPage = 3;
    const [page, setPage] = useState(1);
    const [activeUser, setActiveUser] = useState(true);
    const [fullProducts, setFullProducts] = useState([]);

    const { user, token, logout } = useAuthStore();
    const cartItems = useCartStore((state) => state.cart);
    const { removeFromCart } = useCartStore();

    const router = useRouter();

    // ✅ FETCH REAL PRODUCTS USING productId
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const requests = cartItems.map((item) =>
                    axios.get(`https://ahiaserver-api.onrender.com/api/products/${item.productId}`)
                );

                const responses = await Promise.all(requests);

                const merged = responses.map((res, index) => ({
                    ...res.data, // real product from DB
                    quantity: Number(cartItems[index]?.quantity || 0),
                    cartItemId: cartItems[index]?._id,
                }));

                setFullProducts(merged);
            } catch (err) {
                console.error("Error loading cart products:", err);
                setFullProducts([]);
            }
        };

        if (cartItems.length > 0) {
            fetchProducts();
        } else {
            setFullProducts([]);
        }
    }, [cartItems]);

    // ✅ DELETE CART ITEM BY _id
    const deletItem = (cartItemId) => {
        removeFromCart(cartItemId, user?._id);
    };

    const handleLogout = () => {
        logout();
        router.push("/login");
    };

    // ✅ AUTH CHECK
    const handleCheckAuth = () => {
        if (!token) {
            return router.push("/login");
        }else {
            router.push("/checkout");
        }

        try {
            const decoded = jwtDecode(token);
            const currentTime = Date.now() / 1000;

            if (decoded.exp < currentTime) {
                alert("⚠️ Session expired. Please login again.");
                handleLogout();
            }
        } catch {
            router.push("/login");
        }
    };

    const handleChange = (_, value) => setPage(value);

    const startIndex = (page - 1) * itemsPerPage;
    const selectedItems = fullProducts.slice(startIndex, startIndex + itemsPerPage);

    // ✅ ✅ SAFE TOTAL CALCULATION (NO NaN POSSIBLE)
    const total = fullProducts.reduce((sum, item) => {
        const price = Number(item?.price?.current || item?.price || 0);
        const quantity = Number(item?.quantity || 0);
        return sum + price * quantity;
    }, 0);

    return (
        <Box sx={{ p: 4, bgcolor: "#fafafa", minHeight: "100vh", width: "100vw" }}>
            <Grid container spacing={4} justifyContent="space-around">

                {/* ✅ LEFT: CART ITEMS */}
                <Grid item xs={12} md={8} width="45%">
                    <Typography variant="h5" mb={2}>
                        Cart ({fullProducts.length})
                    </Typography>

                    {fullProducts.length > 0 ? (
                        <Stack spacing={2}>
                            {selectedItems.map((item) => (
                                <Card
                                    key={item.cartItemId}
                                    variant="outlined"
                                    sx={{ display: "flex", alignItems: "center", p: 2 }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 120, height: 120, borderRadius: 2 }}
                                        image={item?.images?.[0] || "/placeholder.png"}
                                        alt={item?.name || "Product"}
                                    />

                                    <CardContent sx={{ flex: 1 }}>
                                        <Typography fontWeight="bold">
                                            {item?.name || "Unnamed Product"}
                                        </Typography>

                                        <Typography color="text.secondary">
                                            Quantity: {item.quantity}
                                        </Typography>

                                        <Typography color="#0c0483f5" mt={1}>
                                            ₦{(
                                                Number(item?.price?.current || item?.price || 0) *
                                                Number(item?.quantity || 0)
                                            ).toLocaleString()}
                                        </Typography>
                                    </CardContent>

                                    <IconButton
                                        onClick={() => deletItem(item.cartItemId)}
                                        color="error"
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </Card>
                            ))}
                        </Stack>
                    ) : (
                        <>
                            <img
                                src="/cart.webp"
                                alt="No items"
                                style={{ display: "block", margin: "0 auto" }}
                            />
                            <Typography align="center" mt={2}>
                                Your cart is empty.
                            </Typography>
                        </>
                    )}

                    {/* ✅ PAGINATION */}
                    <Box mt={3} display="flex" justifyContent="center">
                        <Pagination
                            count={Math.ceil(fullProducts.length / itemsPerPage)}
                            page={page}
                            onChange={handleChange}
                        />
                    </Box>

                    <Button
                        variant="contained"
                        href="/products"
                        fullWidth
                        sx={{ mt: 2, backgroundColor: "#0c0483f5" }}
                    >
                        Continue Shopping
                    </Button>
                </Grid>

                {/* ✅ RIGHT: SUMMARY */}
                <Grid item xs={12} md={4} width="30%">
                    <Card sx={{ p: 3 }}>
                        <Typography variant="h6" mb={2}>
                            Summary
                        </Typography>
                        <Divider />

                        <Box display="flex" justifyContent="space-between" my={2}>
                            <Typography>Total</Typography>
                            <Typography fontWeight="bold">
                                ₦{total.toLocaleString()}
                            </Typography>
                        </Box>

                        <Button
                            onClick={handleCheckAuth}
                            variant="contained"
                            fullWidth
                            sx={{ backgroundColor: "#0c0483f5" }}
                        >
                            Checkout
                        </Button>
                        <Typography variant="subtitle2" mt={3} mb={1}>
                            Fund Wallet With:
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            {/* <CreditCardIcon fontSize="large" color="action" />
                             */}
                            <img src="/paystack.png" alt="" style={{ width: "50px", height: "15px" }} />
                            <img src="/paypal1.png" alt="" style={{ width: "50px", height: "15px" }} />
                            <img src="/Flutterwave.png" alt="" style={{ width: "55px", height: "15px" }} />
                            <img src="/visa.png" alt="" style={{ width: "50px", height: "30px" }} />
                            <img src="/mastercard.png" alt="" style={{ width: "55px", height: "30px" }} />
                        </Stack>
                    </Card>

                    {/* ✅ USER SIDE PANEL */}
                    <div className={styles.userDetails} style={{ marginTop: "3rem" }}>
                        <div className={styles.userDetailsTop}>
                            <div
                                className={`${styles.userDetailsTopActive} ${activeUser ? "" : styles.hide}`}
                            >
                                <div className={styles.userDetailsTopActiveUser}>
                                    <i className="fa fa-user"></i>
                                    <p>Welcome back</p>
                                </div>
                                <button onClick={handleLogout}>Sign Out</button>
                            </div>

                            <div
                                className={`${styles.userDetailsTopNone} ${activeUser ? styles.hide : ""}`}
                            >
                                <Link href={"/"} className={styles.cartSignin}>
                                    Sign In
                                </Link>
                                <Link href={"/"} className={styles.cartRegister}>
                                    Register
                                </Link>
                            </div>
                        </div>
                    </div>
                </Grid>

            </Grid>
        </Box>
    );
}
