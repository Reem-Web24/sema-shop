import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./CartToast.css";

export default function CartToast() {
  const { showToast, setShowToast, lastAddedProduct } = useCart();

  // إذا كانت الحالة false أو لا يوجد منتج مضاف، لا تظهر المكون
  if (!showToast || !lastAddedProduct) return null;

  return (
    <div className="cart-toast-notification">
      {/* رأس التنبيه */}
      <div className="toast-header">
        <div className="toast-success-title">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3c4a25"
            strokeWidth="2.5"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>Added to your gift bag!</span>
        </div>
        <button className="toast-close-btn" onClick={() => setShowToast(false)}>
          &times;
        </button>
      </div>

      {/* تفاصيل المنتج المضاف */}
      <div className="toast-body">
        <div className="toast-product-img-wrapper">
          <img src={lastAddedProduct.image} alt={lastAddedProduct.name} />
        </div>
        <div className="toast-product-info">
          <h4 className="toast-product-name">{lastAddedProduct.name}</h4>
          <p className="toast-product-price">{lastAddedProduct.price} SAR</p>
        </div>
      </div>

      {/* أزرار التوجيه السريع الفخمة */}
      <div className="toast-footer">
        <Link
          to="/cart"
          className="toast-btn view-bag-btn"
          onClick={() => setShowToast(false)}
        >
          View Bag
        </Link>
        <Link
          to="/cart"
          className="toast-btn checkout-btn"
          onClick={() => setShowToast(false)}
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}
