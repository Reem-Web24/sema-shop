import React from "react";

export default function ProductCard({ title, price, image }) {
  return (
    <div className="product-card">
      <div className="img-wrap">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <div className="price">{price} SAR</div>
      <p className="product-description">
        وصف مختصر يضيف لمسة جمالية للمنتج...
      </p>

      <div className="product-buttons">
        <button className="add-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}
