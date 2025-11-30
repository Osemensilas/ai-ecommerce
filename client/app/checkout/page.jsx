"use client";

import React, { useState } from "react";
import {
    Box,
    Grid,
    Paper,
    Typography,
    TextField,
    Button,
    Divider,
    RadioGroup,
    FormControlLabel,
    Radio,
    Avatar,
} from "@mui/material";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentsIcon from "@mui/icons-material/Payments";
import axios from "axios";
import { useAuthStore } from "@/components/auth/Auth";
import { useCartStore } from "@/components/auth/Cart";

// ✅ 20 ORDERS WITH QUANTITY
const cartItems = Array.from({ length: 20 }, (_, i) => ({
    name: `Product, Payment Method solohitechnology Product, Payment Method solohitechnology Product, Payment Method solohitechnology ${i + 1}`,
    price: 3000 + i * 500,
    qty: Math.floor(Math.random() * 3) + 1,
    image: "https://via.placeholder.com/60",
}));

const carriers = [
    { id: "gig", name: "GIG Logistics", price: 2500 },
    { id: "dhl", name: "DHL Express", price: 6000 },
];

const paymentMethods = [
    { id: "flutterwave", name: "Flutterwave" },
    { id: "paystack", name: "Paystack" },
    { id: "paypal", name: "PayPal" },
    { id: "mastercard", name: "Mastercard" },
    { id: "Visa", name: "Visa" },
];

export default function PremiumCheckout() {
    const [address, setAddress] = useState({});
    const [carrier, setCarrier] = useState(carriers[0]);
    const [paymentMethod, setPaymentMethod] = useState("flutterwave");
    const [showOrders, setShowOrders] = useState(false);
    const cartItems = useCartStore((state) => state.cart);
    const { user } = useAuthStore();
    console.log("Checkout Cart Items:", cartItems);

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const total = subtotal + carrier.price;

    const handleInput = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    const handleCheckout = async () => {
        const payload = {
            cartItems,
            address,
            carrier,
            paymentMethod,
            subtotal,
            amount: total,
            email: user ? user.email : ""
        };

        console.log("✅ Checkout Payload:", payload);

        if (paymentMethod === "flutterwave") {
            // alert("Redirecting to Flutterwave...");
            await axios.post("https://ahiaserver-api.onrender.com/api/payments/initiate", payload).then((res) => {
                console.log("Flutterwave Response:", res.data);
                window.location.href = res.data.data.link;
            }).catch((err) => {
                console.error("Flutterwave initiation error:", err);
            });
        }

        if (paymentMethod === "paystack") {
            alert("Redirecting to Paystack...");
        }

        if (paymentMethod === "paypal") {
            alert("Redirecting to PayPal...");
        }

        if (paymentMethod === "Visa" || paymentMethod === "mastercard") {
            // alert("Redirecting to Card...");
            await axios.post("https://ahiaserver-api.onrender.com/api/payments/initiatecard", payload).then((res) => {
                console.log("Flutterwave Response:", res.data);
                window.location.href = res.data.data.link;
            }).catch((err) => {
                console.error("Flutterwave initiation error:", err);
            });
        }


    };

    return (
        <Box sx={{ p: 3, background: "#f5f7fb", minHeight: "100vh" }}>
            <Grid container spacing={3}>
                {/* ✅ LEFT - ORDERS (50%) */}
                <Grid item xs={12} md={6}>
                    <Paper
                        sx={{
                            p: 3,
                            borderRadius: 3,
                            maxHeight: "80vh",
                            overflowY: "auto",
                        }}
                    >
                        <Typography variant="h6" mb={2}>
                            Your Orders ({cartItems.length})
                        </Typography>

                        {/* <Button size="small" onClick={() => setShowOrders(!showOrders)}>
                            {showOrders ? "Hide Items" : "Show Items"}
                        </Button> */}

                        <Divider sx={{ my: 2 }} />

                        {showOrders &&
                            cartItems.map((item, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        p: 1.5,
                                        mb: 2,
                                        borderRadius: 2,
                                        background: "#fafafa",
                                        boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
                                        transition: "0.2s ease",
                                        "&:hover": {
                                            boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
                                            transform: "scale(1.01)",
                                        },
                                    }}
                                >
                                    {/* ✅ LEFT: IMAGE + DETAILS */}
                                    <Box display="flex" alignItems="center" gap={2}>
                                        <Avatar
                                            src={item.image}
                                            variant="rounded"
                                            sx={{
                                                width: 56,
                                                height: 56,
                                                borderRadius: 2,
                                                background: "#fff",
                                                border: "1px solid #eee",
                                            }}
                                        />

                                        <Box>
                                            <Typography

                                                fontWeight={600}
                                                sx={{
                                                    fontSize: 14,
                                                    maxWidth: 200,
                                                    whiteSpace: "nowrap",
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                    cursor: "pointer",
                                                }}>
                                                {item.name}
                                            </Typography>

                                            <Box
                                                sx={{
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    mt: 0.5,
                                                    px: 1,
                                                    py: 0.3,
                                                    borderRadius: 1,
                                                    background: "#e3f2fd",
                                                    color: "#0d47a1",
                                                    fontSize: 12,
                                                    fontWeight: 600,
                                                }}
                                            >
                                                Qty: {item.quantity}
                                            </Box>
                                        </Box>
                                    </Box>

                                    {/* ✅ RIGHT: PRICE */}
                                    <Box textAlign="right">
                                        <Typography
                                            fontWeight={700}
                                            sx={{ fontSize: 15, color: "#111" }}
                                        >
                                            ₦{(item.price * item.qty).toLocaleString()}
                                        </Typography>

                                        <Typography
                                            variant="caption"
                                            sx={{ color: "#777" }}
                                        >
                                            ₦{item.price.toLocaleString()} each
                                        </Typography>
                                    </Box>
                                </Box>

                            ))}

                        <Divider sx={{ my: 3 }} />

                        <Typography>Subtotal: ₦{subtotal.toLocaleString()}</Typography>
                        <Typography>
                            Shipping: ₦{carrier.price.toLocaleString()}
                        </Typography>

                        <Typography fontWeight="bold" mt={2}>
                            Total: ₦{total.toLocaleString()}
                        </Typography>
                        <Button
                            fullWidth
                            size="large"
                            variant="contained"
                            sx={{
                                py: 1.5,
                                borderRadius: 2,
                                textTransform: "none",
                                fontSize: 16,
                            }}
                            onClick={handleCheckout}
                        >
                            Pay ₦{total.toLocaleString()}
                        </Button>
                    </Paper>
                </Grid>

                {/* ✅ RIGHT - SHIPPING + PAYMENT (50%) */}
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3, borderRadius: 3, mb: 3 }}>
                        <Typography variant="h6" mb={2}>
                            Shipping Information
                        </Typography>

                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Full Name" name="name" onChange={handleInput} />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField fullWidth label="Phone Number" name="phone" onChange={handleInput} />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField fullWidth label="Address" name="address" onChange={handleInput} />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField fullWidth label="City" name="city" onChange={handleInput} />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField fullWidth label="State" name="state" onChange={handleInput} />
                            </Grid>
                        </Grid>

                        <Divider sx={{ my: 3 }} />

                        <Typography variant="h6" mb={1}>
                            <LocalShippingIcon sx={{ mr: 1 }} />
                            Shipping Method
                        </Typography>

                        <RadioGroup
                            value={carrier.id}
                            onChange={(e) =>
                                setCarrier(carriers.find((c) => c.id === e.target.value))
                            }
                        >
                            {carriers.map((item) => (
                                <FormControlLabel
                                    key={item.id}
                                    value={item.id}
                                    control={<Radio />}
                                    label={`${item.name} - ₦${item.price.toLocaleString()}`}
                                />
                            ))}
                        </RadioGroup>
                    </Paper>

                    {/* ✅ PAYMENT */}
                    <Paper sx={{ p: 3, borderRadius: 3 }}>
                        <Typography variant="h6" mb={2}>
                            <PaymentsIcon sx={{ mr: 1 }} />
                            Payment Method
                        </Typography>

                        <RadioGroup
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        >
                            {paymentMethods.map((method) => (
                                <FormControlLabel
                                    key={method.id}
                                    value={method.id}
                                    control={<Radio />}
                                    label={method.name}
                                />
                            ))}
                        </RadioGroup>

                        <Divider sx={{ my: 3 }} />

                        <Button
                            fullWidth
                            size="large"
                            variant="contained"
                            sx={{
                                py: 1.5,
                                borderRadius: 2,
                                textTransform: "none",
                                fontSize: 16,
                            }}
                            onClick={handleCheckout}
                        >
                            Pay ₦{total.toLocaleString()}
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}
