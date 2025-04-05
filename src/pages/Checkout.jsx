import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../style/checkout.css";

const Checkout = () => {
    const totalQty = useSelector((state) => state.cart.totalQuantity);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const [razorpayLoaded, setRazorpayLoaded] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
    });

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        script.onload = () => setRazorpayLoaded(true);
        document.body.appendChild(script);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/send-email", {
                ...formData,
                totalQty,
                totalAmount,
            });

            if (response.data.success) {
                alert("Billing information submitted. Admin has been notified.");
            } else {
                alert("Failed to send billing info.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Error sending billing info.");
        }
    };

    const handlePayment = async () => {
        if (!razorpayLoaded) {
            console.error("Razorpay SDK not loaded yet. Please wait.");
            return;
        }

        setIsProcessing(true);
        try {
            const response = await axios.post("http://localhost:5000/create-order", {
                amount: totalAmount,
            });

            const { id: orderId } = response.data;

            const options = {
                key: "rzp_test_hsQHAwJVL7ccoX",
                amount: totalAmount * 100,
                currency: "INR",
                name: "Shrinath Furnitures",
                description: "Furniture Payment",
                order_id: orderId,
                handler: function (response) {
                    console.log("Payment Successful", response);
                },
                prefill: {
                    name: "Customer Name",
                    email: "customer@example.com",
                    contact: "9876543210",
                },
                theme: {
                    color: "#3399cc",
                },
            };

            const rzp1 = new window.Razorpay(options);
            rzp1.open();
        } catch (error) {
            console.error("Payment failed", error);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <Helmet title="Checkout">
            <CommonSection title="Checkout" />
            <section>
                <Container>
                    <Row>
                        <Col lg="8">
                            <h6 className="mb-4 fw-bold">Billing Information</h6>
                            <Form className="billing__form" onSubmit={handleSubmit}>
                                <FormGroup className="form_group">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                                <FormGroup className="form_group">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                                <FormGroup className="form_group">
                                    <input
                                        type="number"
                                        name="phone"
                                        placeholder="Enter your number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                                <FormGroup className="form_group">
                                    <input
                                        type="text"
                                        name="address"
                                        placeholder="Street Address"
                                        value={formData.address}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                                <FormGroup className="form_group">
                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="City"
                                        value={formData.city}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                                <FormGroup className="form_group">
                                    <input
                                        type="text"
                                        name="postalCode"
                                        placeholder="Postal Code"
                                        value={formData.postalCode}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                                <FormGroup className="form_group">
                                    <input
                                        type="text"
                                        name="country"
                                        placeholder="Country"
                                        value={formData.country}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                                <button type="submit" className="buy__btn mt-3">
                                    Submit Billing Info
                                </button>
                            </Form>
                        </Col>

                        <Col lg="4">
                            <div className="checkout__cart">
                                <h6>Total Qty: <span>{totalQty} items</span></h6>
                                <h6>Subtotal: <span>₹{totalAmount}</span></h6>
                                <h6>
                                    <span>
                                        Shipping: <br />
                                        Free shipping
                                    </span>
                                    <span>₹0</span>
                                </h6>
                                <h4>Total Cost: <span>₹{totalAmount}</span></h4>
                                <button
                                    className="buy__btn auth__btn w-100"
                                    onClick={handlePayment}
                                    disabled={isProcessing}
                                >
                                    {isProcessing ? "Processing..." : "Pay Now"}
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Checkout;
