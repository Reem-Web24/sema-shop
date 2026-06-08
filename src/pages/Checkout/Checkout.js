import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AnnouncementBar from "../../components/AnnouncementBar/AnnouncementBar";
import { useCart } from "../../context/CartContext";

export default function Checkout() {
  // 🌟 التعديل السحري: سحب subtotal بدلاً من getCartTotal 🌟
  const { cartItems, subtotal } = useCart();
  const navigate = useNavigate();

  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    address: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("card"); // card or applepay

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    console.log("Order Placed Successfully:", {
      shippingInfo,
      cartItems,
      paymentMethod,
    });

    // الانتقال لصفحة النجاح مستقبلاً
    navigate("/order-success");
  };

  return (
    <div className="checkout-page">
      <AnnouncementBar />
      <div className="navbar-wrapper static-navbar">
        <Navbar />
      </div>

      <main className="checkout-container">
        <h1 className="checkout-main-title">Secure Checkout</h1>

        <div className="checkout-layout">
          {/* الجانب الأيسر: الشحن والدفع */}
          <div className="checkout-form-section">
            <form onSubmit={handlePlaceOrder}>
              {/* 1. تفاصيل الشحن */}
              <div className="checkout-block">
                <h2>1. Shipping Sanctuary</h2>
                <div className="checkout-input-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Reem Hassan"
                    value={shippingInfo.fullName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="checkout-grid-inputs">
                  <div className="checkout-input-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="reem@example.com"
                      value={shippingInfo.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="checkout-input-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+966 50 000 0000"
                      value={shippingInfo.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="checkout-grid-inputs">
                  <div className="checkout-input-group">
                    <label>City</label>
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="Makkah"
                      value={shippingInfo.city}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="checkout-input-group">
                    <label>Street Address & District</label>
                    <input
                      type="text"
                      name="address"
                      required
                      placeholder="Al-Awali District, Main St."
                      value={shippingInfo.address}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              {/* 2. تفاصيل الدفع */}
              <div className="checkout-block">
                <h2>2. Method of Payment</h2>

                <div className="payment-methods-tabs">
                  <div
                    className={`payment-tab ${paymentMethod === "card" ? "active" : ""}`}
                    onClick={() => setPaymentMethod("card")}
                  >
                    Credit / Mada Card
                  </div>
                  <div
                    className={`payment-tab ${paymentMethod === "applepay" ? "active" : ""}`}
                    onClick={() => setPaymentMethod("applepay")}
                  >
                    Apple Pay
                  </div>
                </div>

                {paymentMethod === "card" ? (
                  <div className="card-payment-form">
                    <div className="checkout-input-group">
                      <label>Card Number</label>
                      <input
                        type="text"
                        placeholder="4000 1234 5678 9010"
                        maxLength="19"
                      />
                    </div>
                    <div className="checkout-grid-inputs">
                      <div className="checkout-input-group">
                        <label>Expiry Date</label>
                        <input type="text" placeholder="MM/YY" maxLength="5" />
                      </div>
                      <div className="checkout-input-group">
                        <label>CVV</label>
                        <input
                          type="password"
                          placeholder="•••"
                          maxLength="3"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="apple-pay-mock-box">
                    <div className="apple-pay-btn-simulation">
                      <span> Pay</span>
                    </div>
                    <p>Double-click to simulate secure authentication</p>
                  </div>
                )}
              </div>

              {/* 🌟 تعديل: استخدام subtotal هنا 🌟 */}
              <button type="submit" className="place-order-submit-btn">
                PLACE ORDER • {subtotal} SAR
              </button>
            </form>
          </div>

          {/* الجانب الأيمن: ملخص السلة الثابت */}
          <div className="checkout-summary-section">
            <div className="sticky-summary-box">
              <h3>Order Summary</h3>
              <div className="checkout-items-list">
                {cartItems.map((item) => (
                  <div key={item.id} className="checkout-item-row">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="checkout-item-thumb"
                    />
                    <div className="checkout-item-info">
                      <h4>{item.name}</h4>
                      <p>Qty: {item.quantity}</p>
                    </div>
                    <span className="checkout-item-price">
                      {item.price * item.quantity} SAR
                    </span>
                  </div>
                ))}
              </div>

              <div className="summary-divider"></div>

              {/* 🌟 تعديل: استخدام subtotal هنا 🌟 */}
              <div className="summary-calc-row">
                <span>Subtotal</span>
                <span>{subtotal} SAR</span>
              </div>
              <div className="summary-calc-row">
                <span>Shipping</span>
                <span className="free-shipping-text">FREE</span>
              </div>

              <div className="summary-divider"></div>

              {/* 🌟 تعديل: استخدام subtotal هنا 🌟 */}
              <div className="summary-calc-row total-row">
                <span>Total Amount</span>
                <span>{subtotal} SAR</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
