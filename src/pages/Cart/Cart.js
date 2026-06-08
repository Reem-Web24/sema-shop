import React, { useState } from "react";
import "./Cart.css";
// 🌟 1. استيراد هوك التنقل useNavigate من react-router-dom 🌟
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AnnouncementBar from "../../components/AnnouncementBar/AnnouncementBar";
import { useCart } from "../../context/CartContext";

export default function Cart() {
  // سحب البيانات والدوال التفاعلية مباشرة من الـ Context
  const { cartItems, updateQuantity, removeItem, subtotal } = useCart();

  // 🌟 2. تفعيل هوك التنقل 🌟
  const navigate = useNavigate();

  // State لتخزين الـ ID الخاص بالمنتج الجاري حذفه الآن لتفعيل الأنميشن
  const [deletingId, setDeletingId] = useState(null);

  // دالة الحذف الذكية المنتظرة للأنيميشن لكي ينتهي
  const handleRemoveWithAnimation = (id) => {
    setDeletingId(id); // 1. نحدد المنتج ليعطيه الـ CSS كلاس الخاص بالاختفاء

    // 2. ننتظر 400 مللي ثانية (نفس مدة أنيميشن الـ CSS) ثم نحذفه فعلياً من الـ State
    setTimeout(() => {
      removeItem(id);
      setDeletingId(null); // إعادة تصفير الـ ID
    }, 400);
  };

  return (
    <div className="cart-page">
      <AnnouncementBar />

      <div className="navbar-wrapper static-navbar">
        <Navbar />
      </div>

      <main className="cart-container">
        <h1 className="cart-main-title">Your Gift Bag</h1>

        {cartItems.length > 0 ? (
          <div className="cart-content-layout">
            {/* قسم المنتجات يساراً */}
            <div className="cart-items-section">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className={`cart-item-row ${deletingId === item.id ? "item-fade-out" : ""}`}
                >
                  <div className="cart-item-image-wrapper">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />
                  </div>

                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-price">{item.price} SAR</p>
                  </div>

                  <div className="quantity-control">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="qty-btn"
                    >
                      -
                    </button>
                    <span className="qty-number">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="qty-btn"
                    >
                      +
                    </button>
                  </div>

                  <div className="cart-item-total-price">
                    {item.price * item.quantity} SAR
                  </div>

                  {/* زر الحذف بعد ربطه بدالة الأنيميشن */}
                  <button
                    onClick={() => handleRemoveWithAnimation(item.id)}
                    className="remove-item-btn"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* بوكس الملخص الجانبي يميناً */}
            <div className="cart-summary-card">
              <h2 className="summary-title">Summary</h2>
              <div className="summary-row">
                <span className="summary-label">Subtotal</span>
                <span className="summary-value">{subtotal} SAR</span>
              </div>
              <div className="summary-row border-bottom-soft">
                <span className="summary-label">Shipping</span>
                <span className="summary-value shipping-note">
                  Calculated at checkout
                </span>
              </div>
              <div className="summary-row total-row">
                <span className="total-label">Estimated Total</span>
                <span className="total-value">{subtotal} SAR</span>
              </div>

              {/* 🌟 3. ربط حدث الضغط بالـ التوجيه لصفحة الـ checkout 🌟 */}
              <button
                className="secure-checkout-btn"
                onClick={() => navigate("/checkout")}
              >
                SECURE CHECKOUT
              </button>

              <p className="vat-notice">VAT Included where applicable</p>
            </div>
          </div>
        ) : (
          <div className="empty-cart-message">
            <p>Your bag is currently empty.</p>
            <a href="/shop" className="continue-shopping-link">
              Continue Shopping
            </a>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
