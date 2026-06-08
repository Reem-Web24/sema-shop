import React from "react";
import { useNavigate } from "react-router-dom";
import "./OrderSuccess.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AnnouncementBar from "../../components/AnnouncementBar/AnnouncementBar";

export default function OrderSuccess() {
  const navigate = useNavigate();

  // توليد رقم طلب تجريبي فخم
  const orderNumber = "SEMA-" + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="order-success-page">
      <AnnouncementBar />
      <div className="navbar-wrapper static-navbar">
        <Navbar />
      </div>

      <main className="success-container">
        <div className="success-card">
          {/* الأيقونة الناعمة للنجاح */}
          <div className="success-icon-wrapper">
            <svg
              width="42"
              height="42"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>

          <h1 className="success-title">Thank You for Your Order</h1>
          <p className="success-subtitle">
            Your aromatic journey has begun. We have received your request and
            our artisans are already preparing your luxury gift box with utmost
            care.
          </p>

          <div className="order-info-box">
            <div className="info-row">
              <span className="info-label">Order Number:</span>
              <span className="info-value">{orderNumber}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Delivery Estimate:</span>
              <span className="info-value">2 - 3 Business Days</span>
            </div>
          </div>

          <p className="success-email-notice">
            A confirmation email with your tracking sanctuary details has been
            sent.
          </p>

          <button
            className="continue-shopping-btn"
            onClick={() => navigate("/shop")}
          >
            CONTINUE SHOPPING
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
